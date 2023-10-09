import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as n,b as s,d as e,e as l}from"./app-03179461.js";const r={},c={href:"https://javaguide.cn/system-design/security/jwt-intro.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<ul><li>什么是 JWT?</li><li>JWT 由哪些部分组成？</li><li>如何基于 JWT 进行身份验证？</li><li>JWT 如何防止 Token 被篡改？</li><li>如何加强 JWT 的安全性？</li></ul><p>这篇文章，我们一起探讨一下 JWT 身份认证的优缺点以及常见问题的解决办法。</p><h2 id="jwt-的优势" tabindex="-1"><a class="header-anchor" href="#jwt-的优势" aria-hidden="true">#</a> JWT 的优势</h2><p>相比于 Session 认证的方式来说，使用 JWT 进行身份认证主要有下面 4 个优势。</p><h3 id="无状态" tabindex="-1"><a class="header-anchor" href="#无状态" aria-hidden="true">#</a> 无状态</h3><p>JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。</p><p>不过，也正是由于 JWT 的无状态，也导致了它最大的缺点：<strong>不可控！</strong></p><p>就比如说，我们想要在 JWT 有效期内废弃一个 JWT 或者更改它的权限的话，并不会立即生效，通常需要等到有效期过后才可以。再比如说，当用户 Logout 的话，JWT 也还有效。除非，我们在后端增加额外的处理逻辑比如将失效的 JWT 存储起来，后端先验证 JWT 是否有效再进行处理。具体的解决办法，我们会在后面的内容中详细介绍到，这里只是简单提一下。</p><h3 id="有效避免了-csrf-攻击" tabindex="-1"><a class="header-anchor" href="#有效避免了-csrf-攻击" aria-hidden="true">#</a> 有效避免了 CSRF 攻击</h3><p><strong>CSRF（Cross Site Request Forgery）</strong> 一般被翻译为 <strong>跨站请求伪造</strong>，属于网络攻击领域范围。相比于 SQL 脚本注入、XSS 等安全攻击方式，CSRF 的知名度并没有它们高。但是，它的确是我们开发系统时必须要考虑的安全隐患。就连业内技术标杆 Google 的产品 Gmail 也曾在 2007 年的时候爆出过 CSRF 漏洞，这给 Gmail 的用户造成了很大的损失。</p><p><strong>那么究竟什么是跨站请求伪造呢？</strong> 简单来说就是用你的身份去做一些不好的事情（发送一些对你不友好的请求比如恶意转账）。</p><p>举个简单的例子：小壮登录了某网上银行，他来到了网上银行的帖子区，看到一个帖子下面有一个链接写着“科学理财，年盈利率过万”，小壮好奇的点开了这个链接，结果发现自己的账户少了 10000 元。这是这么回事呢？原来黑客在链接中藏了一个请求，这个请求直接利用小壮的身份给银行发送了一个转账请求，也就是通过你的 Cookie 向银行发出请求。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.mybank.com/Transfer?bankId=11&amp;money=10000<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>科学理财，年盈利率过万<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSRF 攻击需要依赖 Cookie ，Session 认证中 Cookie 中的 <code>SessionID</code> 是由浏览器发送到服务端的，只要发出请求，Cookie 就会被携带。借助这个特性，即使黑客无法获取你的 <code>SessionID</code>，只要让你误点攻击链接，就可以达到攻击效果。</p><p>另外，并不是必须点击链接才可以达到攻击效果，很多时候，只要你打开了某个页面，CSRF 攻击就会发生。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.mybank.com/Transfer?bankId=11&amp;money=10000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>那为什么 JWT 不会存在这种问题呢？</strong></p><p>一般情况下我们使用 JWT 的话，在我们登录成功获得 JWT 之后，一般会选择存放在 localStorage 中。前端的每一个请求后续都会附带上这个 JWT，整个过程压根不会涉及到 Cookie。因此，即使你点击了非法链接发送了请求到服务端，这个非法请求也是不会携带 JWT 的，所以这个请求将是非法的。</p><p>总结来说就一句话：<strong>使用 JWT 进行身份验证不需要依赖 Cookie ，因此可以避免 CSRF 攻击。</strong></p><p>不过，这样也会存在 XSS 攻击的风险。为了避免 XSS 攻击，你可以选择将 JWT 存储在标记为<code>httpOnly</code> 的 Cookie 中。但是，这样又导致了你必须自己提供 CSRF 保护，因此，实际项目中我们通常也不会这么做。</p><p>常见的避免 XSS 攻击的方式是过滤掉请求中存在 XSS 攻击风险的可疑字符串。</p><p>在 Spring 项目中，我们一般是通过创建 XSS 过滤器来实现的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token class-name">Ordered</span><span class="token punctuation">.</span><span class="token constant">HIGHEST_PRECEDENCE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XSSFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span>
      <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">XSSRequestWrapper</span> wrappedRequest <span class="token operator">=</span>
          <span class="token keyword">new</span> <span class="token class-name">XSSRequestWrapper</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>wrappedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// other methods</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适合移动端应用" tabindex="-1"><a class="header-anchor" href="#适合移动端应用" aria-hidden="true">#</a> 适合移动端应用</h3><p>使用 Session 进行身份认证的话，需要保存一份信息在服务器端，而且这种方式会依赖到 Cookie（需要 Cookie 保存 <code>SessionId</code>），所以不适合移动端。</p><p>但是，使用 JWT 进行身份认证就不会存在这种问题，因为只要 JWT 可以被客户端存储就能够使用，而且 JWT 还可以跨语言使用。</p><h3 id="单点登录友好" tabindex="-1"><a class="header-anchor" href="#单点登录友好" aria-hidden="true">#</a> 单点登录友好</h3><p>使用 Session 进行身份认证的话，实现单点登录，需要我们把用户的 Session 信息保存在一台电脑上，并且还会遇到常见的 Cookie 跨域的问题。但是，使用 JWT 进行认证的话， JWT 被保存在客户端，不会存在这些问题。</p><h2 id="jwt-身份认证常见问题及解决办法" tabindex="-1"><a class="header-anchor" href="#jwt-身份认证常见问题及解决办法" aria-hidden="true">#</a> JWT 身份认证常见问题及解决办法</h2><h3 id="注销登录等场景下-jwt-还有效" tabindex="-1"><a class="header-anchor" href="#注销登录等场景下-jwt-还有效" aria-hidden="true">#</a> 注销登录等场景下 JWT 还有效</h3><p>与之类似的具体相关场景有：</p><ul><li>退出登录;</li><li>修改密码;</li><li>服务端修改了某个用户具有的权限或者角色；</li><li>用户的帐户被封禁/删除；</li><li>用户被服务端强制注销；</li><li>用户被踢下线；</li><li>......</li></ul><p>这个问题不存在于 Session 认证方式中，因为在 Session 认证方式中，遇到这种情况的话服务端删除对应的 Session 记录即可。但是，使用 JWT 认证的方式就不好解决了。我们也说过了，JWT 一旦派发出去，如果后端不增加其他逻辑的话，它在失效之前都是有效的。</p><p>那我们如何解决这个问题呢？查阅了很多资料，我简单总结了下面 4 种方案：</p><p><strong>1、将 JWT 存入内存数据库</strong></p><p>将 JWT 存入 DB 中，Redis 内存数据库在这里是不错的选择。如果需要让某个 JWT 失效就直接从 Redis 中删除这个 JWT 即可。但是，这样会导致每次使用 JWT 发送请求都要先从 DB 中查询 JWT 是否存在的步骤，而且违背了 JWT 的无状态原则。</p><p><strong>2、黑名单机制</strong></p><p>和上面的方式类似，使用内存数据库比如 Redis 维护一个黑名单，如果想让某个 JWT 失效的话就直接将这个 JWT 加入到 <strong>黑名单</strong> 即可。然后，每次使用 JWT 进行请求的话都会先判断这个 JWT 是否存在于黑名单中。</p><p>前两种方案的核心在于将有效的 JWT 存储起来或者将指定的 JWT 拉入黑名单。</p><p>虽然这两种方案都违背了 JWT 的无状态原则，但是一般实际项目中我们通常还是会使用这两种方案。</p><p><strong>3、修改密钥 (Secret)</strong> :</p><p>我们为每个用户都创建一个专属密钥，如果我们想让某个 JWT 失效，我们直接修改对应用户的密钥即可。但是，这样相比于前两种引入内存数据库带来了危害更大：</p><ul><li>如果服务是分布式的，则每次发出新的 JWT 时都必须在多台机器同步密钥。为此，你需要将密钥存储在数据库或其他外部服务中，这样和 Session 认证就没太大区别了。</li><li>如果用户同时在两个浏览器打开系统，或者在手机端也打开了系统，如果它从一个地方将账号退出，那么其他地方都要重新进行登录，这是不可取的。</li></ul><p><strong>4、保持令牌的有效期限短并经常轮换</strong></p><p>很简单的一种方式。但是，会导致用户登录状态不会被持久记录，而且需要用户经常登录。</p><p>另外，对于修改密码后 JWT 还有效问题的解决还是比较容易的。说一种我觉得比较好的方式：<strong>使用用户的密码的哈希值对 JWT 进行签名。因此，如果密码更改，则任何先前的令牌将自动无法验证。</strong></p><h3 id="jwt-的续签问题" tabindex="-1"><a class="header-anchor" href="#jwt-的续签问题" aria-hidden="true">#</a> JWT 的续签问题</h3><p>JWT 有效期一般都建议设置的不太长，那么 JWT 过期后如何认证，如何实现动态刷新 JWT，避免用户经常需要重新登录？</p><p>我们先来看看在 Session 认证中一般的做法：<strong>假如 Session 的有效期 30 分钟，如果 30 分钟内用户有访问，就把 Session 有效期延长 30 分钟。</strong></p><p>JWT 认证的话，我们应该如何解决续签问题呢？查阅了很多资料，我简单总结了下面 4 种方案：</p><p><strong>1、类似于 Session 认证中的做法</strong></p><p>这种方案满足于大部分场景。假设服务端给的 JWT 有效期设置为 30 分钟，服务端每次进行校验时，如果发现 JWT 的有效期马上快过期了，服务端就重新生成 JWT 给客户端。客户端每次请求都检查新旧 JWT，如果不一致，则更新本地的 JWT。这种做法的问题是仅仅在快过期的时候请求才会更新 JWT ,对客户端不是很友好。</p><p><strong>2、每次请求都返回新 JWT</strong></p><p>这种方案的的思路很简单，但是，开销会比较大，尤其是在服务端要存储维护 JWT 的情况下。</p><p><strong>3、JWT 有效期设置到半夜</strong></p><p>这种方案是一种折衷的方案，保证了大部分用户白天可以正常登录，适用于对安全性要求不高的系统。</p><p><strong>4、用户登录返回两个 JWT</strong></p><p>第一个是 accessJWT ，它的过期时间 JWT 本身的过期时间比如半个小时，另外一个是 refreshJWT 它的过期时间更长一点比如为 1 天。客户端登录后，将 accessJWT 和 refreshJWT 保存在本地，每次访问将 accessJWT 传给服务端。服务端校验 accessJWT 的有效性，如果过期的话，就将 refreshJWT 传给服务端。如果有效，服务端就生成新的 accessJWT 给客户端。否则，客户端就重新登录即可。</p><p>这种方案的不足是：</p><ul><li>需要客户端来配合；</li><li>用户注销的时候需要同时保证两个 JWT 都无效；</li><li>重新请求获取 JWT 的过程中会有短暂 JWT 不可用的情况（可以通过在客户端设置定时器，当 accessJWT 快过期的时候，提前去通过 refreshJWT 获取新的 accessJWT）;</li><li>存在安全问题，只要拿到了未过期的 refreshJWT 就一直可以获取到 accessJWT。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>JWT 其中一个很重要的优势是无状态，但实际上，我们想要在实际项目中合理使用 JWT 的话，也还是需要保存 JWT 信息。</p><p>JWT 也不是银弹，也有很多缺陷，具体是选择 JWT 还是 Session 方案还是要看项目的具体需求。万万不可尬吹 JWT，而看不起其他身份认证方案。</p>`,63),u={href:"https://javaguide.cn/open-source-project/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/dromara/sa-JWT",target:"_blank",rel:"noopener noreferrer"},g=n("figure",null,[n("img",{src:"https://oss.javaguide.cn/javaguide/system-design/jwt/image-20220609170714725.png",alt:"",tabindex:"0"}),n("figcaption")],-1),k=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),T={href:"https://learnku.com/articles/17883",target:"_blank",rel:"noopener noreferrer"},J={href:"https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6",target:"_blank",rel:"noopener noreferrer"},W={href:"https://medium.com/@agungsantoso/csrf-protection-with-json-web-JWTs-83e0f2fcbcc",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stackoverflow.com/questions/21978658/invalidating-json-web-JWTs",target:"_blank",rel:"noopener noreferrer"},v=n("figure",null,[n("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),n("figcaption",null,"JavaGuide 官方公众号")],-1);function b(S,f){const a=o("ExternalLinkIcon");return p(),i("div",null,[n("p",null,[s("在 "),n("a",c,[s("JWT 基本概念详解"),e(a)]),s("这篇文章中，我介绍了：")]),d,n("p",null,[s("另外，不用 JWT 直接使用普通的 Token(随机生成，不包含具体的信息) 结合 Redis 来做身份认证也是可以的。我在 "),n("a",u,[s("「优质开源项目推荐」"),e(a)]),s("的第 8 期推荐过的 "),n("a",h,[s("Sa-Token"),e(a)]),s(" 这个项目是一个比较完善的 基于 JWT 的身份认证解决方案，支持自动续签、踢人下线、账号封禁、同端互斥登录等功能，感兴趣的朋友可以看看。")]),g,k,n("ul",null,[n("li",null,[s("JWT 超详细分析："),n("a",T,[s("https://learnku.com/articles/17883"),e(a)])]),n("li",null,[s("How to log out when using JWT："),n("a",J,[s("https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6"),e(a)])]),n("li",null,[s("CSRF protection with JSON Web JWTs："),n("a",W,[s("https://medium.com/@agungsantoso/csrf-protection-with-json-web-JWTs-83e0f2fcbcc"),e(a)])]),n("li",null,[s("Invalidating JSON Web JWTs："),n("a",m,[s("https://stackoverflow.com/questions/21978658/invalidating-json-web-JWTs"),e(a)])])]),v])}const j=t(r,[["render",b],["__file","advantages-and-disadvantages-of-jwt.html.vue"]]);export{j as default};

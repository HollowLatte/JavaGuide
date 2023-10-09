import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as p,a as e,d as n,w as l,b as a,e as s}from"./app-03179461.js";const c={},u=e("img",{src:"https://oss.javaguide.cn/xingqiu/xingqiu.png",alt:"JavaGuide官方知识星球",tabindex:"0"},null,-1),g=e("figcaption",null,"JavaGuide官方知识星球",-1),h=e("h2",{id:"什么是-jwt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-jwt","aria-hidden":"true"},"#"),a(" 什么是 JWT?")],-1),J=e("p",null,"JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。",-1),m=e("p",null,"JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。",-1),T=e("p",null,[a("可以看出，"),e("strong",null,"JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则"),a(" 。")],-1),b=e("p",null,"并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。",-1),v={href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},W={href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="jwt-由哪些部分组成" tabindex="-1"><a class="header-anchor" href="#jwt-由哪些部分组成" aria-hidden="true">#</a> JWT 由哪些部分组成？</h2><figure><img src="https://oss.javaguide.cn/javaguide/system-design/jwt/jwt-composition.png" alt="此图片来源于：https://supertokens.com/blog/oauth-vs-jwt" tabindex="0"><figcaption>此图片来源于：https://supertokens.com/blog/oauth-vs-jwt</figcaption></figure><p>JWT 本质上就是一组字串，通过（<code>.</code>）切分成三个为 Base64 编码的部分：</p><ul><li><strong>Header</strong> : 描述 JWT 的元数据，定义了生成签名的算法以及 <code>Token</code> 的类型。</li><li><strong>Payload</strong> : 用来存放实际需要传递的数据</li><li><strong>Signature（签名）</strong>：服务器通过 Payload、Header 和一个密钥(Secret)使用 Header 里面指定的签名算法（默认是 HMAC SHA256）生成。</li></ul><p>JWT 通常是这样的：<code>xxxxx.yyyyy.zzzzz</code>。</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),f={href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>Header 和 Payload 都是 JSON 格式的数据，Signature 由 Payload、Header 和 Secret(密钥)通过特定的计算公式和加密算法得到。</p><figure><img src="https://oss.javaguide.cn/javaguide/system-design/jwt/jwt.io.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Header 通常由两部分组成：</p><ul><li><code>typ</code>（Type）：令牌类型，也就是 JWT。</li><li><code>alg</code>（Algorithm）：签名算法，比如 HS256。</li></ul><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON 形式的 Header 被转换成 Base64 编码，成为 JWT 的第一部分。</p><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h3><p>Payload 也是 JSON 格式数据，其中包含了 Claims(声明，包含 JWT 的相关信息)。</p><p>Claims 分为三种类型：</p>`,11),y=e("li",null,[e("strong",null,"Registered Claims（注册声明）"),a("：预定义的一些声明，建议使用，但不是强制性的。")],-1),S=e("strong",null,"Public Claims（公有声明）",-1),j={href:"https://www.iana.org/assignments/jwt/jwt.xhtml",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[e("strong",null,"Private Claims（私有声明）"),a("：JWT 签发方因为项目需要而自定义的声明，更符合实际项目场景使用。")],-1),w=s(`<p>下面是一些常见的注册声明：</p><ul><li><code>iss</code>（issuer）：JWT 签发方。</li><li><code>iat</code>（issued at time）：JWT 签发时间。</li><li><code>sub</code>（subject）：JWT 主题。</li><li><code>aud</code>（audience）：JWT 接收方。</li><li><code>exp</code>（expiration time）：JWT 的过期时间。</li><li><code>nbf</code>（not before time）：JWT 生效时间，早于该定义的时间的 JWT 不能被接受处理。</li><li><code>jti</code>（JWT ID）：JWT 唯一标识。</li></ul><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ff1212f5-d8d1-4496-bf41-d2dda73de19a&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">15323232</span><span class="token punctuation">,</span>
  <span class="token property">&quot;iat&quot;</span><span class="token operator">:</span> <span class="token number">1516239022</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Payload 部分默认是不加密的，<strong>一定不要将隐私信息存放在 Payload 当中！！！</strong></p><p>JSON 形式的 Payload 被转换成 Base64 编码，成为 JWT 的第二部分。</p><h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3><p>Signature 部分是对前两部分的签名，作用是防止 JWT（主要是 payload） 被篡改。</p><p>这个签名的生成需要用到：</p><ul><li>Header + Payload。</li><li>存放在服务端的密钥(一定不要泄露出去)。</li><li>签名算法。</li></ul><p>签名的计算公式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HMACSHA256(
  base64UrlEncode(header) + &quot;.&quot; +
  base64UrlEncode(payload),
  secret)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用&quot;点&quot;（<code>.</code>）分隔，这个字符串就是 JWT 。</p><h2 id="如何基于-jwt-进行身份验证" tabindex="-1"><a class="header-anchor" href="#如何基于-jwt-进行身份验证" aria-hidden="true">#</a> 如何基于 JWT 进行身份验证？</h2><p>在基于 JWT 进行身份验证的的应用程序中，服务器通过 Payload、Header 和 Secret(密钥)创建 JWT 并将 JWT 发送给客户端。客户端接收到 JWT 之后，会将其保存在 Cookie 或者 localStorage 里面，以后客户端发出的所有请求都会携带这个令牌。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/jwt/jwt-authentication process.png" alt=" JWT 身份验证示意图" tabindex="0"><figcaption> JWT 身份验证示意图</figcaption></figure><p>简化后的步骤如下：</p><ol><li>用户向服务器发送用户名、密码以及验证码用于登陆系统。</li><li>如果用户用户名、密码以及验证码校验正确的话，服务端会返回已经签名的 Token，也就是 JWT。</li><li>用户以后每次向后端发请求都在 Header 中带上这个 JWT 。</li><li>服务端检查 JWT 并从中获取用户相关信息。</li></ol><p>两点建议：</p><ol><li>建议将 JWT 存放在 localStorage 中，放在 Cookie 中会有 CSRF 风险。</li><li>请求服务端并携带 JWT 的常见做法是将其放在 HTTP Header 的 <code>Authorization</code> 字段中（<code>Authorization: Bearer Token</code>）。</li></ol>`,20),q={href:"https://github.com/Snailclimb/spring-security-jwt-guide",target:"_blank",rel:"noopener noreferrer"},H=s('<h2 id="如何防止-jwt-被篡改" tabindex="-1"><a class="header-anchor" href="#如何防止-jwt-被篡改" aria-hidden="true">#</a> 如何防止 JWT 被篡改？</h2><p>有了签名之后，即使 JWT 被泄露或者截获，黑客也没办法同时篡改 Signature、Header、Payload。</p><p>这是为什么呢？因为服务端拿到 JWT 之后，会解析出其中包含的 Header、Payload 以及 Signature 。服务端会根据 Header、Payload、密钥再次生成一个 Signature。拿新生成的 Signature 和 JWT 中的 Signature 作对比，如果一样就说明 Header 和 Payload 没有被修改。</p><p>不过，如果服务端的秘钥也被泄露的话，黑客就可以同时篡改 Signature、Header、Payload 了。黑客直接修改了 Header 和 Payload 之后，再重新生成一个 Signature 就可以了。</p><p><strong>密钥一定保管好，一定不要泄露出去。JWT 安全的核心在于签名，签名安全的核心在密钥。</strong></p><h2 id="如何加强-jwt-的安全性" tabindex="-1"><a class="header-anchor" href="#如何加强-jwt-的安全性" aria-hidden="true">#</a> 如何加强 JWT 的安全性？</h2><ol><li>使用安全系数高的加密算法。</li><li>使用成熟的开源库，没必要造轮子。</li><li>JWT 存放在 localStorage 中而不是 Cookie 中，避免 CSRF 风险。</li><li>一定不要将隐私信息存放在 Payload 当中。</li><li>密钥一定保管好，一定不要泄露出去。JWT 安全的核心在于签名，签名安全的核心在密钥。</li><li>Payload 要加入 <code>exp</code> （JWT 的过期时间），永久有效的 JWT 不合理。并且，JWT 的过期时间不易过长。</li><li>......</li></ol><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',8);function P(C,I){const o=i("RouterLink"),t=i("ExternalLinkIcon");return d(),p("div",null,[e("figure",null,[n(o,{to:"/about-the-author/zhishixingqiu-two-years.html"},{default:l(()=>[u]),_:1}),g]),h,J,m,T,b,e("p",null,[a("我在 "),n(o,{to:"/system-design/security/advantages-and-disadvantages-of-jwt.html"},{default:l(()=>[a("JWT 优缺点分析")]),_:1}),a("这篇文章中有详细介绍到使用 JWT 做身份认证的优势和劣势。")]),e("p",null,[a("下面是 "),e("a",v,[a("RFC 7519"),n(t)]),a(" 对 JWT 做的较为正式的定义。")]),e("blockquote",null,[e("p",null,[a("JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted. ——"),e("a",W,[a("JSON Web Token (JWT)"),n(t)])])]),k,e("p",null,[a("你可以在 "),e("a",f,[a("jwt.io"),n(t)]),a(" 这个网站上对其 JWT 进行解码，解码之后得到的就是 Header、Payload、Signature 这三部分。")]),_,e("ul",null,[y,e("li",null,[S,a("：JWT 签发方可以自定义的声明，但是为了避免冲突，应该在 "),e("a",j,[a("IANA JSON Web Token Registry"),n(t)]),a(" 中定义它们。")]),x]),w,e("p",null,[e("strong",null,[e("a",q,[a("spring-security-jwt-guide"),n(t)])]),a(" 就是一个基于 JWT 来做身份认证的简单案例，感兴趣的可以看看。")]),H])}const R=r(c,[["render",P],["__file","jwt-intro.html.vue"]]);export{R as default};

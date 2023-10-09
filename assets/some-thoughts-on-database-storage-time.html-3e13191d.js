import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as l,e as a}from"./app-03179461.js";const c={},r=a(`<p>我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间、用户下单时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。</p><h2 id="不要用字符串存储日期" tabindex="-1"><a class="header-anchor" href="#不要用字符串存储日期" aria-hidden="true">#</a> 不要用字符串存储日期</h2><p>和绝大部分对数据库不太了解的新手一样，我在大学的时候就这样干过，甚至认为这样是一个不错的表示日期的方法。毕竟简单直白，容易上手。</p><p>但是，这是不正确的做法，主要会有下面两个问题：</p><ol><li>字符串占用的空间更大！</li><li>字符串存储的日期效率比较低（逐个字符进行比对），无法用日期相关的 API 进行计算和比较。</li></ol><h2 id="datetime-和-timestamp-之间的抉择" tabindex="-1"><a class="header-anchor" href="#datetime-和-timestamp-之间的抉择" aria-hidden="true">#</a> Datetime 和 Timestamp 之间的抉择</h2><p>Datetime 和 Timestamp 是 MySQL 提供的两种比较相似的保存时间的数据类型，可以精确到秒。他们两者究竟该如何选择呢？</p><p>下面我们来简单对比一下二者。</p><h3 id="时区信息" tabindex="-1"><a class="header-anchor" href="#时区信息" aria-hidden="true">#</a> 时区信息</h3><p><strong>DateTime 类型是没有时区信息的（时区无关）</strong> ，DateTime 类型保存的时间都是当前会话所设置的时区对应的时间。这样就会有什么问题呢？当你的时区更换之后，比如你的服务器更换地址或者更换客户端连接时区设置的话，就会导致你从数据库中读出的时间错误。</p><p><strong>Timestamp 和时区有关</strong>。Timestamp 类型字段的值会随着服务器时区的变化而变化，自动换算成相应的时间，说简单点就是在不同时区，查询到同一个条记录此字段的值会不一样。</p><p>下面实际演示一下！</p><p>建表 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>time_zone_test<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>date_time<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>time_stamp<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> time_zone_test<span class="token punctuation">(</span>date_time<span class="token punctuation">,</span>time_stamp<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> date_time<span class="token punctuation">,</span>time_stamp <span class="token keyword">from</span> time_zone_test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------------+---------------------+
| date_time           | time_stamp          |
+---------------------+---------------------+
| 2020-01-11 09:53:32 | 2020-01-11 09:53:32 |
+---------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们运行</p><p>修改当前会话的时区:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> time_zone<span class="token operator">=</span><span class="token string">&#39;+8:00&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------------+---------------------+
| date_time           | time_stamp          |
+---------------------+---------------------+
| 2020-01-11 09:53:32 | 2020-01-11 17:53:32 |
+---------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展：一些关于 MySQL 时区设置的一个常用 sql 命令</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查看当前会话时区</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@session.time_zone</span><span class="token punctuation">;</span>
<span class="token comment"># 设置当前会话时区</span>
<span class="token keyword">SET</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;Europe/Helsinki&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> time_zone <span class="token operator">=</span> <span class="token string">&quot;+00:00&quot;</span><span class="token punctuation">;</span>
<span class="token comment"># 数据库全局时区设置</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@global.time_zone</span><span class="token punctuation">;</span>
<span class="token comment"># 设置全局时区</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;+8:00&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;Europe/Helsinki&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="占用空间" tabindex="-1"><a class="header-anchor" href="#占用空间" aria-hidden="true">#</a> 占用空间</h3>`,28),d={href:"https://dev.mysql.com/doc/refman/8.0/en/storage-requirements.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<figure><img src="https://oss.javaguide.cn/github/javaguide/FhRGUVHFK0ujRPNA75f6CuOXQHTE.jpeg" alt="" tabindex="0"><figcaption></figcaption></figure><p>在 MySQL 5.6.4 之前，DateTime 和 Timestamp 的存储空间是固定的，分别为 8 字节和 4 字节。但是从 MySQL 5.6.4 开始，它们的存储空间会根据毫秒精度的不同而变化，DateTime 的范围是 5~8 字节，Timestamp 的范围是 4~7 字节。</p><h3 id="表示范围" tabindex="-1"><a class="header-anchor" href="#表示范围" aria-hidden="true">#</a> 表示范围</h3><p>Timestamp 表示的时间范围更小，只能到 2038 年：</p><ul><li>DateTime：1000-01-01 00:00:00.000000 ~ 9999-12-31 23:59:59.499999</li><li>Timestamp：1970-01-01 00:00:01.000000 ~ 2038-01-19 03:14:07.499999</li></ul><h3 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h3><p>由于 TIMESTAMP 需要根据时区进行转换，所以从毫秒数转换到 TIMESTAMP 时，不仅要调用一个简单的函数，还要调用操作系统底层的系统函数。这个系统函数为了保证操作系统时区的一致性，需要进行加锁操作，这就降低了效率。</p><p>DATETIME 不涉及时区转换，所以不会有这个问题。</p><p>为了避免 TIMESTAMP 的时区转换问题，建议使用指定的时区，而不是依赖于操作系统时区。</p><h2 id="数值时间戳是更好的选择吗" tabindex="-1"><a class="header-anchor" href="#数值时间戳是更好的选择吗" aria-hidden="true">#</a> 数值时间戳是更好的选择吗？</h2><p>很多时候，我们也会使用 int 或者 bigint 类型的数值也就是数值时间戳来表示时间。</p><p>这种存储方式的具有 Timestamp 类型的所具有一些优点，并且使用它的进行日期排序以及对比等操作的效率会更高，跨系统也很方便，毕竟只是存放的数值。缺点也很明显，就是数据的可读性太差了，你无法直观的看到具体时间。</p><p>时间戳的定义如下：</p><blockquote><p>时间戳的定义是从一个基准时间开始算起，这个基准时间是「1970-1-1 00:00:00 +0:00」，从这个时间开始，用整数表示，以秒计时，随着时间的流逝这个时间整数不断增加。这样一来，我只需要一个数值，就可以完美地表示时间了，而且这个数值是一个绝对数值，即无论的身处地球的任何角落，这个表示时间的时间戳，都是一样的，生成的数值都是一样的，并且没有时区的概念，所以在系统的中时间的传输中，都不需要进行额外的转换了，只有在显示给用户的时候，才转换为字符串格式的本地时间。</p></blockquote><p>数据库中实际操作：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token string">&#39;2020-01-11 09:53:32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+</span>
<span class="token operator">|</span> UNIX_TIMESTAMP<span class="token punctuation">(</span><span class="token string">&#39;2020-01-11 09:53:32&#39;</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+</span>
<span class="token operator">|</span>                            <span class="token number">1578707612</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> FROM_UNIXTIME<span class="token punctuation">(</span><span class="token number">1578707612</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token operator">|</span> FROM_UNIXTIME<span class="token punctuation">(</span><span class="token number">1578707612</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token operator">|</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">11</span> <span class="token number">09</span>:<span class="token number">53</span>:<span class="token number">32</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>MySQL 中时间到底怎么存储才好？Datetime?Timestamp?还是数值时间戳？</p><p>并没有一个银弹，很多程序员会觉得数值型时间戳是真的好，效率又高还各种兼容，但是很多人又觉得它表现的不够直观。</p><p>《高性能 MySQL 》这本神书的作者就是推荐 Timestamp，原因是数值表示时间不够直观。下面是原文：</p><img src="https://oss.javaguide.cn/github/javaguide/高性能mysql-不推荐用数值时间戳.jpg" style="zoom:50%;"><p>每种方式都有各自的优势，根据实际场景选择最合适的才是王道。下面再对这三种方式做一个简单的对比，以供大家实际开发中选择正确的存放时间的数据类型：</p><table><thead><tr><th>类型</th><th>存储空间</th><th>日期格式</th><th>日期范围</th><th>是否带时区信息</th></tr></thead><tbody><tr><td>DATETIME</td><td>5~8字节</td><td>YYYY-MM-DD hh:mm:ss[.fraction]</td><td>1000-01-01 00:00:00[.000000] ～ 9999-12-31 23:59:59[.999999]</td><td>否</td></tr><tr><td>TIMESTAMP</td><td>4~7字节</td><td>YYYY-MM-DD hh:mm:ss[.fraction]</td><td>1970-01-01 00:00:01[.000000] ～ 2038-01-19 03:14:07[.999999]</td><td>是</td></tr><tr><td>数值型时间戳</td><td>4字节</td><td>全数字如1578707612</td><td>1970-01-01 00:00:01之后的时间</td><td>否</td></tr></tbody></table><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,24);function k(m,v){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("下图是 MySQL 日期类型所占的存储空间（官方文档传送门："),n("a",d,[s("https://dev.mysql.com/doc/refman/8.0/en/storage-requirements.html"),l(e)]),s("）：")]),u])}const g=t(c,[["render",k],["__file","some-thoughts-on-database-storage-time.html.vue"]]);export{g as default};

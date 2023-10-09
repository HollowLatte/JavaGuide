import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as n,b as s,d as a,w as i,e as r}from"./app-03179461.js";const u={},d=n("p",null,"JDK 21 于 2023 年 9 月 19 日 发布，这是一个非常重要的版本，里程碑式。",-1),m=n("p",null,"JDK21 是 LTS（长期支持版），至此为止，目前有 JDK8、JDK11、JDK17 和 JDK21 这四个长期支持版了。",-1),k=n("p",null,"JDK 21 共有 15 个新特性：",-1),v={href:"https://openjdk.org/jeps/430",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.org/jeps/431",target:"_blank",rel:"noopener noreferrer"},b={href:"https://openjdk.org/jeps/439",target:"_blank",rel:"noopener noreferrer"},h={href:"https://openjdk.org/jeps/440",target:"_blank",rel:"noopener noreferrer"},f=r(`<h2 id="jep-430-字符串模板-预览" tabindex="-1"><a class="header-anchor" href="#jep-430-字符串模板-预览" aria-hidden="true">#</a> JEP 430：字符串模板（预览）</h2><p>String Templates(字符串模板) 目前仍然是 JDK 21 中的一个预览功能。</p><p>String Templates 提供了一种更简洁、更直观的方式来动态构建字符串。通过使用占位符<code>\${}</code>，我们可以将变量的值直接嵌入到字符串中，而不需要手动处理。在运行时，Java 编译器会将这些占位符替换为实际的变量值。并且，表达式支持局部变量、静态/非静态字段甚至方法、计算结果等特性。</p><p>实际上，String Templates（字符串模板）再大多数编程语言中都存在:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string">&quot;Greetings {{ name }}!&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//Angular</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Greetings </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>		<span class="token comment">//Typescript</span>
$<span class="token string">&quot;Greetings { name }!&quot;</span>		<span class="token comment">//Visual basic</span>
f<span class="token string">&quot;Greetings { name }!&quot;</span>		<span class="token comment">//Python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 在没有 String Templates 之前，我们通常使用字符串拼接或格式化方法来构建字符串：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//concatenation</span>
message <span class="token operator">=</span> <span class="token string">&quot;Greetings &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">;</span>	

<span class="token comment">//String.format()</span>
message <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Greetings %s!&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//concatenation</span>

<span class="token comment">//MessageFormat</span>
message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageFormat</span><span class="token punctuation">(</span><span class="token string">&quot;Greetings {0}!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//StringBuilder</span>
message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;Greetings &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些方法或多或少都存在一些缺点，比如难以阅读、冗长、复杂。</p><p>Java 使用 String Templates 进行字符串拼接，可以直接在字符串中嵌入表达式，而无需进行额外的处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{name}!&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的模板表达式中：</p><ul><li><p>STR 是模板处理器。</p></li><li><p><code>\\{name}</code>为表达式，运行时，这些表达式将被相应的变量值替换。</p><p>Java 目前支持三种模板处理器：</p></li><li><p>STR：自动执行字符串插值，即将模板中的每个嵌入式表达式替换为其值（转换为字符串）。</p></li><li><p>FMT：和 STR 类似，但是它还可以接受格式说明符，这些格式说明符出现在嵌入式表达式的左边，用来控制输出的样式</p></li><li><p>RAW：不会像 STR 和 FMT 模板处理器那样自动处理字符串模板，而是返回一个 <code>StringTemplate</code> 对象，这个对象包含了模板中的文本和表达式的信息</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;Lokesh&quot;</span><span class="token punctuation">;</span>	

<span class="token comment">//STR</span>
<span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{name}.&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//FMT</span>
<span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings %-12s\\{name}.&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//RAW</span>
<span class="token class-name">StringTemplate</span> st <span class="token operator">=</span> <span class="token constant">RAW</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{name}.&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 JDK 自带的三种模板处理器外，你还可以实现 <code>StringTemplate.Processor</code> 接口来创建自己的模板处理器。</p><p>我们可以使用局部变量、静态/非静态字段甚至方法作为嵌入表达式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//variable</span>
message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{name}!&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//method</span>
message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{getName()}!&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//field</span>
message <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;Greetings \\{this.name}!&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以在表达式中执行计算并打印结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span><span class="token string">&quot;\\{x} + \\{y} = \\{x + y}&quot;</span><span class="token punctuation">;</span>	<span class="token comment">//&quot;10 + 20 = 30&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了提高可读性，我们可以将嵌入的表达式分成多行:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> time <span class="token operator">=</span> <span class="token constant">STR</span><span class="token punctuation">.</span>&quot;<span class="token class-name">The</span> current time is \\<span class="token punctuation">{</span>
    <span class="token comment">//sample comment - current time in HH:mm:ss</span>
    <span class="token class-name">DateTimeFormatter</span>
      <span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">LocalTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">.</span>&quot;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep431-序列化集合" tabindex="-1"><a class="header-anchor" href="#jep431-序列化集合" aria-hidden="true">#</a> JEP431：序列化集合</h2><p>JDK 21 引入了一种新的集合类型：<strong>Sequenced Collections（序列化集合）</strong>。</p><h2 id="jep-439-分代-zgc" tabindex="-1"><a class="header-anchor" href="#jep-439-分代-zgc" aria-hidden="true">#</a> JEP 439：分代 ZGC</h2><p>JDK21 中对 ZGC 进行了功能扩展，增加了分代 GC 功能。不过，默认是关闭的，需要通过配置打开：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 启用分代ZGC
<span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span> <span class="token parameter variable">-XX:+ZGenerational</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在未来的版本中，官方会把 ZGenerational 设为默认值，即默认打开 ZGC 的分代 GC。在更晚的版本中，非分代 ZGC 就被移除。</p><blockquote><p>In a future release we intend to make Generational ZGC the default, at which point -XX:-ZGenerational will select non-generational ZGC. In an even later release we intend to remove non-generational ZGC, at which point the ZGenerational option will become obsolete.</p><p>在将来的版本中，我们打算将 Generational ZGC 作为默认选项，此时-XX:-ZGenerational 将选择非分代 ZGC。在更晚的版本中，我们打算移除非分代 ZGC，此时 ZGenerational 选项将变得过时。</p></blockquote><p>分代 ZGC 可以显著减少垃圾回收过程中的停顿时间，并提高应用程序的响应性能。这对于大型 Java 应用程序和高并发场景下的性能优化非常有价值。</p><h2 id="jep-440-记录模式" tabindex="-1"><a class="header-anchor" href="#jep-440-记录模式" aria-hidden="true">#</a> JEP 440：记录模式</h2>`,29),j={href:"https://openjdk.org/jeps/405",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openjdk.org/jeps/432",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),G={href:"https://howtodoinjava.com/java/java-string-templates/",target:"_blank",rel:"noopener noreferrer"};function S(T,J){const e=t("ExternalLinkIcon"),p=t("RouterLink");return l(),c("div",null,[d,m,k,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[s("JEP 430：String Templates（字符串模板）"),a(e)]),s("（预览）")])]),n("li",null,[n("p",null,[n("a",g,[s("JEP 431：Sequenced Collections（序列化集合）"),a(e)])])]),n("li",null,[n("p",null,[n("a",b,[s("JEP 439：Generational ZGC（分代 ZGC）"),a(e)])])]),n("li",null,[n("p",null,[n("a",h,[s("JEP 440：Record Patterns（记录模式）"),a(e)])])])]),f,n("p",null,[s("记录模式在 Java 19 进行了第一次预览， 由 "),n("a",j,[s("JEP 405"),a(e)]),s(" 提出。JDK 20 中是第二次预览，由 "),n("a",_,[s("JEP 432"),a(e)]),s(" 提出。最终，记录模式在 JDK21 顺利转正。")]),n("p",null,[a(p,{to:"/java/new-features/java20.html"},{default:i(()=>[s("Java 20 新特性概览")]),_:1}),s("已经详细介绍过记录模式，这里就不重复了。")]),q,n("ul",null,[n("li",null,[s("Java 21 String Templates："),n("a",G,[s("https://howtodoinjava.com/java/java-string-templates/"),a(e)])])])])}const Z=o(u,[["render",S],["__file","java21.html.vue"]]);export{Z as default};
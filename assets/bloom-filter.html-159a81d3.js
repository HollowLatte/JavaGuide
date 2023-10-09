import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as s,d as l,e as a}from"./app-03179461.js";const i={},u=a(`<p>布隆过滤器相信大家没用过的话，也已经听过了。</p><p>布隆过滤器主要是为了解决海量数据的存在性问题。对于海量数据中判定某个数据是否存在且容忍轻微误差这一场景（比如缓存穿透、海量数据去重）来说，非常适合。</p><p>文章内容概览：</p><ol><li>什么是布隆过滤器？</li><li>布隆过滤器的原理介绍。</li><li>布隆过滤器使用场景。</li><li>通过 Java 编程手动实现布隆过滤器。</li><li>利用 Google 开源的 Guava 中自带的布隆过滤器。</li><li>Redis 中的布隆过滤器。</li></ol><h2 id="什么是布隆过滤器" tabindex="-1"><a class="header-anchor" href="#什么是布隆过滤器" aria-hidden="true">#</a> 什么是布隆过滤器？</h2><p>首先，我们需要了解布隆过滤器的概念。</p><p>布隆过滤器（Bloom Filter，BF）是一个叫做 Bloom 的老哥于 1970 年提出的。我们可以把它看作由二进制向量（或者说位数组）和一系列随机映射函数（哈希函数）两部分组成的数据结构。相比于我们平时常用的 List、Map、Set 等数据结构，它占用空间更少并且效率更高，但是缺点是其返回的结果是概率性的，而不是非常准确的。理论情况下添加到集合中的元素越多，误报的可能性就越大。并且，存放在布隆过滤器的数据不容易删除。</p><p>Bloom Filter 会使用一个较大的 bit 数组来保存所有的数据，数组中的每个元素都只占用 1 bit ，并且每个元素只能是 0 或者 1（代表 false 或者 true），这也是 Bloom Filter 节省内存的核心所在。这样来算的话，申请一个 100w 个元素的位数组只占用 1000000Bit / 8 = 125000 Byte = 125000/1024 KB ≈ 122KB 的空间。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/bloom-filter-bit-table.png" alt="位数组" tabindex="0"><figcaption>位数组</figcaption></figure><p>总结：<strong>一个名叫 Bloom 的人提出了一种来检索元素是否在给定大集合中的数据结构，这种数据结构是高效且性能很好的，但缺点是具有一定的错误识别率和删除难度。并且，理论情况下，添加到集合中的元素越多，误报的可能性就越大。</strong></p><h2 id="布隆过滤器的原理介绍" tabindex="-1"><a class="header-anchor" href="#布隆过滤器的原理介绍" aria-hidden="true">#</a> 布隆过滤器的原理介绍</h2><p><strong>当一个元素加入布隆过滤器中的时候，会进行如下操作：</strong></p><ol><li>使用布隆过滤器中的哈希函数对元素值进行计算，得到哈希值（有几个哈希函数得到几个哈希值）。</li><li>根据得到的哈希值，在位数组中把对应下标的值置为 1。</li></ol><p><strong>当我们需要判断一个元素是否存在于布隆过滤器的时候，会进行如下操作：</strong></p><ol><li>对给定元素再次进行相同的哈希计算；</li><li>得到值之后判断位数组中的每个元素是否都为 1，如果值都为 1，那么说明这个值在布隆过滤器中，如果存在一个值不为 1，说明该元素不在布隆过滤器中。</li></ol><p>Bloom Filter 的简单原理图如下：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/bloom-filter-simple-schematic-diagram.png" alt="Bloom Filter 的简单原理示意图" tabindex="0"><figcaption>Bloom Filter 的简单原理示意图</figcaption></figure><p>如图所示，当字符串存储要加入到布隆过滤器中时，该字符串首先由多个哈希函数生成不同的哈希值，然后将对应的位数组的下标设置为 1（当位数组初始化时，所有位置均为 0）。当第二次存储相同字符串时，因为先前的对应位置已设置为 1，所以很容易知道此值已经存在（去重非常方便）。</p><p>如果我们需要判断某个字符串是否在布隆过滤器中时，只需要对给定字符串再次进行相同的哈希计算，得到值之后判断位数组中的每个元素是否都为 1，如果值都为 1，那么说明这个值在布隆过滤器中，如果存在一个值不为 1，说明该元素不在布隆过滤器中。</p><p><strong>不同的字符串可能哈希出来的位置相同，这种情况我们可以适当增加位数组大小或者调整我们的哈希函数。</strong></p><p>综上，我们可以得出：<strong>布隆过滤器说某个元素存在，小概率会误判。布隆过滤器说某个元素不在，那么这个元素一定不在。</strong></p><h2 id="布隆过滤器使用场景" tabindex="-1"><a class="header-anchor" href="#布隆过滤器使用场景" aria-hidden="true">#</a> 布隆过滤器使用场景</h2><ol><li>判断给定数据是否存在：比如判断一个数字是否存在于包含大量数字的数字集中（数字集很大，上亿）、 防止缓存穿透（判断请求的数据是否有效避免直接绕过缓存请求数据库）等等、邮箱的垃圾邮件过滤（判断一个邮件地址是否在垃圾邮件列表中）、黑名单功能（判断一个IP地址或手机号码是否在黑名单中）等等。</li><li>去重：比如爬给定网址的时候对已经爬取过的 URL 去重、对巨量的 QQ号/订单号去重。</li></ol><p>去重场景也需要用到判断给定数据是否存在，因此布隆过滤器主要是为了解决海量数据的存在性问题。</p><h2 id="编码实战" tabindex="-1"><a class="header-anchor" href="#编码实战" aria-hidden="true">#</a> 编码实战</h2><h3 id="通过-java-编程手动实现布隆过滤器" tabindex="-1"><a class="header-anchor" href="#通过-java-编程手动实现布隆过滤器" aria-hidden="true">#</a> 通过 Java 编程手动实现布隆过滤器</h3><p>我们上面已经说了布隆过滤器的原理，知道了布隆过滤器的原理之后就可以自己手动实现一个了。</p><p>如果你想要手动实现一个的话，你需要：</p><ol><li>一个合适大小的位数组保存数据</li><li>几个不同的哈希函数</li><li>添加元素到位数组（布隆过滤器）的方法实现</li><li>判断给定元素是否存在于位数组（布隆过滤器）的方法实现。</li></ol><p>下面给出一个我觉得写的还算不错的代码（参考网上已有代码改进得到，对于所有类型对象皆适用）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">BitSet</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBloomFilter</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 位数组的大小
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_SIZE</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 通过这个数组可以创建 6 个不同的哈希函数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">SEEDS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 位数组。数组中的元素只能是 0 或者 1
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BitSet</span> bits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BitSet</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 存放包含 hash 函数的类的数组
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">SimpleHash</span><span class="token punctuation">[</span><span class="token punctuation">]</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleHash</span><span class="token punctuation">[</span><span class="token constant">SEEDS</span><span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 初始化多个包含 hash 函数的类的数组，每个类中的 hash 函数都不一样
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化多个不同的 Hash 函数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">SEEDS</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            func<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleHash</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_SIZE</span><span class="token punctuation">,</span> <span class="token constant">SEEDS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 添加元素到位数组
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SimpleHash</span> f <span class="token operator">:</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bits<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断指定元素是否存在于位数组
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> ret <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SimpleHash</span> f <span class="token operator">:</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> ret <span class="token operator">&amp;&amp;</span> bits<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 静态内部类。用于 hash 操作！
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SimpleHash</span> <span class="token punctuation">{</span>

        <span class="token keyword">private</span> <span class="token keyword">int</span> cap<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> seed<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">SimpleHash</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">,</span> <span class="token keyword">int</span> seed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cap <span class="token operator">=</span> cap<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>seed <span class="token operator">=</span> seed<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * 计算 hash 值
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> h<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>seed <span class="token operator">*</span> <span class="token punctuation">(</span>cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>h <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> value1 <span class="token operator">=</span> <span class="token string">&quot;https://javaguide.cn/&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> value2 <span class="token operator">=</span> <span class="token string">&quot;https://github.com/Snailclimb&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">MyBloomFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyBloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
filter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">;</span>
filter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false
false
true
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> value1 <span class="token operator">=</span> <span class="token number">13423</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> value2 <span class="token operator">=</span> <span class="token number">22131</span><span class="token punctuation">;</span>
<span class="token class-name">MyBloomFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyBloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
filter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">;</span>
filter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">false</span>
<span class="token boolean">false</span>
<span class="token boolean">true</span>
<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用-google-开源的-guava-中自带的布隆过滤器" tabindex="-1"><a class="header-anchor" href="#利用-google-开源的-guava-中自带的布隆过滤器" aria-hidden="true">#</a> 利用 Google 开源的 Guava 中自带的布隆过滤器</h3><p>自己实现的目的主要是为了让自己搞懂布隆过滤器的原理，Guava 中布隆过滤器的实现算是比较权威的，所以实际项目中我们不需要手动实现一个布隆过滤器。</p><p>首先我们需要在项目中引入 Guava 的依赖：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>guava<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>guava<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">28.0</span><span class="token operator">-</span>jre<span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际使用如下：</p><p>我们创建了一个最多存放 最多 1500 个整数的布隆过滤器，并且我们可以容忍误判的概率为百分之（0.01）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建布隆过滤器对象</span>
<span class="token class-name">BloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> filter <span class="token operator">=</span> <span class="token class-name">BloomFilter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token class-name">Funnels</span><span class="token punctuation">.</span><span class="token function">integerFunnel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">1500</span><span class="token punctuation">,</span>
    <span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 判断指定元素是否存在</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将元素添加进布隆过滤器</span>
filter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
filter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我们的示例中，当 <code>mightContain()</code> 方法返回 <em>true</em> 时，我们可以 99％确定该元素在过滤器中，当过滤器返回 <em>false</em> 时，我们可以 100％确定该元素不存在于过滤器中。</p><p><strong>Guava 提供的布隆过滤器的实现还是很不错的（想要详细了解的可以看一下它的源码实现），但是它有一个重大的缺陷就是只能单机使用（另外，容量扩展也不容易），而现在互联网一般都是分布式的场景。为了解决这个问题，我们就需要用到 Redis 中的布隆过滤器了。</strong></p><h2 id="redis-中的布隆过滤器" tabindex="-1"><a class="header-anchor" href="#redis-中的布隆过滤器" aria-hidden="true">#</a> Redis 中的布隆过滤器</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Redis v4.0 之后有了 Module（模块/插件） 功能，Redis Modules 让 Redis 可以使用外部模块扩展其功能 。布隆过滤器就是其中的 Module。详情可以查看 Redis 官方对 Redis Modules 的介绍：https://redis.io/modules</p><p>另外，官网推荐了一个 RedisBloom 作为 Redis 布隆过滤器的 Module，地址：https://github.com/RedisBloom/RedisBloom 其他还有：</p><ul><li>redis-lua-scaling-bloom-filter（lua 脚本实现）：https://github.com/erikdubbelboer/redis-lua-scaling-bloom-filter</li><li>pyreBloom（Python 中的快速 Redis 布隆过滤器）：https://github.com/seomoz/pyreBloom</li><li>......</li></ul><p>RedisBloom 提供了多种语言的客户端支持，包括：Python、Java、JavaScript 和 PHP。</p><h3 id="使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装" aria-hidden="true">#</a> 使用 Docker 安装</h3><p>如果我们需要体验 Redis 中的布隆过滤器非常简单，通过 Docker 就可以了！我们直接在 Google 搜索 <strong>docker redis bloomfilter</strong> 然后在排除广告的第一条搜素结果就找到了我们想要的答案（这是我平常解决问题的一种方式，分享一下），具体地址：https://hub.docker.com/r/redislabs/rebloom/ （介绍的很详细 ）。</p><p><strong>具体操作如下：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>➜  ~ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis-redisbloom redislabs/rebloom:latest
➜  ~ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis-redisbloom <span class="token function">bash</span>
root@21396d02c252:/data<span class="token comment"># redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),r={href:"https://hub.docker.com/r/redis/redis-stack",target:"_blank",rel:"noopener noreferrer"},k=a(`<h3 id="常用命令一览" tabindex="-1"><a class="header-anchor" href="#常用命令一览" aria-hidden="true">#</a> 常用命令一览</h3><blockquote><p>注意：key : 布隆过滤器的名称，item : 添加的元素。</p></blockquote><ol><li><strong><code>BF.ADD</code></strong>：将元素添加到布隆过滤器中，如果该过滤器尚不存在，则创建该过滤器。格式：<code>BF.ADD {key} {item}</code>。</li><li><strong><code>BF.MADD</code></strong> : 将一个或多个元素添加到“布隆过滤器”中，并创建一个尚不存在的过滤器。该命令的操作方式<code>BF.ADD</code>与之相同，只不过它允许多个输入并返回多个值。格式：<code>BF.MADD {key} {item} [item ...]</code> 。</li><li><strong><code>BF.EXISTS</code></strong> : 确定元素是否在布隆过滤器中存在。格式：<code>BF.EXISTS {key} {item}</code>。</li><li><strong><code>BF.MEXISTS</code></strong>：确定一个或者多个元素是否在布隆过滤器中存在格式：<code>BF.MEXISTS {key} {item} [item ...]</code>。</li></ol><p>另外， <code>BF.RESERVE</code> 命令需要单独介绍一下：</p><p>这个命令的格式如下：</p><p><code>BF.RESERVE {key} {error_rate} {capacity} [EXPANSION expansion]</code> 。</p><p>下面简单介绍一下每个参数的具体含义：</p><ol><li>key：布隆过滤器的名称</li><li>error_rate : 期望的误报率。该值必须介于 0 到 1 之间。例如，对于期望的误报率 0.1％（1000 中为 1），error_rate 应该设置为 0.001。该数字越接近零，则每个项目的内存消耗越大，并且每个操作的 CPU 使用率越高。</li><li>capacity: 过滤器的容量。当实际存储的元素个数超过这个值之后，性能将开始下降。实际的降级将取决于超出限制的程度。随着过滤器元素数量呈指数增长，性能将线性下降。</li></ol><p>可选参数：</p><ul><li>expansion：如果创建了一个新的子过滤器，则其大小将是当前过滤器的大小乘以<code>expansion</code>。默认扩展值为 2。这意味着每个后续子过滤器将是前一个子过滤器的两倍。</li></ul><h3 id="实际使用" tabindex="-1"><a class="header-anchor" href="#实际使用" aria-hidden="true">#</a> 实际使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BF.ADD myFilter <span class="token function">java</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BF.ADD myFilter javaguide
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BF.EXISTS myFilter <span class="token function">java</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BF.EXISTS myFilter javaguide
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> BF.EXISTS myFilter github
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,13);function d(m,v){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("strong",null,[s("注意：当前rebloom镜像已经被废弃，官方推荐使用"),n("a",r,[s("redis-stack"),l(t)])])]),k])}const h=p(i,[["render",d],["__file","bloom-filter.html.vue"]]);export{h as default};

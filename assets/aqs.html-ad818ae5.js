const e=JSON.parse('{"key":"v-49ba2a5a","path":"/java/concurrent/aqs.html","title":"AQS 详解","lang":"zh-CN","frontmatter":{"title":"AQS 详解","category":"Java","tag":["Java并发"],"description":"AQS 介绍 AQS 的全称为 AbstractQueuedSynchronizer ，翻译过来的意思就是抽象队列同步器。这个类在 java.util.concurrent.locks 包下面。 AQS 就是一个抽象类，主要用来构建锁和同步器。 public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements java.io.Serializable { }","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/concurrent/aqs.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"AQS 详解"}],["meta",{"property":"og:description","content":"AQS 介绍 AQS 的全称为 AbstractQueuedSynchronizer ，翻译过来的意思就是抽象队列同步器。这个类在 java.util.concurrent.locks 包下面。 AQS 就是一个抽象类，主要用来构建锁和同步器。 public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements java.io.Serializable { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java并发"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AQS 详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"AQS 介绍","slug":"aqs-介绍","link":"#aqs-介绍","children":[]},{"level":2,"title":"AQS 原理","slug":"aqs-原理","link":"#aqs-原理","children":[{"level":3,"title":"AQS 核心思想","slug":"aqs-核心思想","link":"#aqs-核心思想","children":[]},{"level":3,"title":"AQS 资源共享方式","slug":"aqs-资源共享方式","link":"#aqs-资源共享方式","children":[]},{"level":3,"title":"自定义同步器","slug":"自定义同步器","link":"#自定义同步器","children":[]}]},{"level":2,"title":"常见同步工具类","slug":"常见同步工具类","link":"#常见同步工具类","children":[{"level":3,"title":"Semaphore(信号量)","slug":"semaphore-信号量","link":"#semaphore-信号量","children":[]},{"level":3,"title":"CountDownLatch （倒计时器）","slug":"countdownlatch-倒计时器","link":"#countdownlatch-倒计时器","children":[]},{"level":3,"title":"CyclicBarrier(循环栅栏)","slug":"cyclicbarrier-循环栅栏","link":"#cyclicbarrier-循环栅栏","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{},"readingTime":{"minutes":21.94,"words":6582},"filePathRelative":"java/concurrent/aqs.md","excerpt":"<h2> AQS 介绍</h2>\\n<p>AQS 的全称为 <code>AbstractQueuedSynchronizer</code> ，翻译过来的意思就是抽象队列同步器。这个类在 <code>java.util.concurrent.locks</code> 包下面。</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/AQS.png\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>\\n<p>AQS 就是一个抽象类，主要用来构建锁和同步器。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">abstract</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">AbstractQueuedSynchronizer</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">AbstractOwnableSynchronizer</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span>Serializable</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

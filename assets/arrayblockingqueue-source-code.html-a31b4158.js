const e=JSON.parse('{"key":"v-f71565b2","path":"/java/collection/arrayblockingqueue-source-code.html","title":"ArrayBlockingQueue 源码分析","lang":"zh-CN","frontmatter":{"title":"ArrayBlockingQueue 源码分析","category":"Java","tag":["Java集合"],"description":"阻塞队列简介 阻塞队列的历史 Java 阻塞队列的历史可以追溯到 JDK1.5 版本，当时 Java 平台增加了 java.util.concurrent，即我们常说的 JUC 包，其中包含了各种并发流程控制工具、并发容器、原子类等。这其中自然也包含了我们这篇文章所讨论的阻塞队列。 为了解决高并发场景下多线程之间数据共享的问题，JDK1.5 版本中出现了 ArrayBlockingQueue 和 LinkedBlockingQueue，它们是带有生产者-消费者模式实现的并发容器。其中，ArrayBlockingQueue 是有界队列，即添加的元素达到上限之后，再次添加就会被阻塞或者抛出异常。而 LinkedBlockingQueue 则由链表构成的队列，正是因为链表的特性，所以 LinkedBlockingQueue 在添加元素上并不会向 ArrayBlockingQueue 那样有着较多的约束，所以 LinkedBlockingQueue 设置队列是否有界是可选的(注意这里的无界并不是指可以添加任务数量的元素，而是说队列的大小默认为 Integer.MAX_VALUE，近乎于无限大)。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/collection/arrayblockingqueue-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ArrayBlockingQueue 源码分析"}],["meta",{"property":"og:description","content":"阻塞队列简介 阻塞队列的历史 Java 阻塞队列的历史可以追溯到 JDK1.5 版本，当时 Java 平台增加了 java.util.concurrent，即我们常说的 JUC 包，其中包含了各种并发流程控制工具、并发容器、原子类等。这其中自然也包含了我们这篇文章所讨论的阻塞队列。 为了解决高并发场景下多线程之间数据共享的问题，JDK1.5 版本中出现了 ArrayBlockingQueue 和 LinkedBlockingQueue，它们是带有生产者-消费者模式实现的并发容器。其中，ArrayBlockingQueue 是有界队列，即添加的元素达到上限之后，再次添加就会被阻塞或者抛出异常。而 LinkedBlockingQueue 则由链表构成的队列，正是因为链表的特性，所以 LinkedBlockingQueue 在添加元素上并不会向 ArrayBlockingQueue 那样有着较多的约束，所以 LinkedBlockingQueue 设置队列是否有界是可选的(注意这里的无界并不是指可以添加任务数量的元素，而是说队列的大小默认为 Integer.MAX_VALUE，近乎于无限大)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayBlockingQueue 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"阻塞队列简介","slug":"阻塞队列简介","link":"#阻塞队列简介","children":[{"level":3,"title":"阻塞队列的历史","slug":"阻塞队列的历史","link":"#阻塞队列的历史","children":[]},{"level":3,"title":"阻塞队列的思想","slug":"阻塞队列的思想","link":"#阻塞队列的思想","children":[]}]},{"level":2,"title":"ArrayBlockingQueue 常见方法及测试","slug":"arrayblockingqueue-常见方法及测试","link":"#arrayblockingqueue-常见方法及测试","children":[]},{"level":2,"title":"ArrayBlockingQueue 源码分析","slug":"arrayblockingqueue-源码分析","link":"#arrayblockingqueue-源码分析","children":[{"level":3,"title":"整体设计","slug":"整体设计","link":"#整体设计","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"阻塞式获取和新增元素","slug":"阻塞式获取和新增元素","link":"#阻塞式获取和新增元素","children":[]},{"level":3,"title":"非阻塞式获取和新增元素","slug":"非阻塞式获取和新增元素","link":"#非阻塞式获取和新增元素","children":[]},{"level":3,"title":"指定超时时间内阻塞式获取和新增元素","slug":"指定超时时间内阻塞式获取和新增元素","link":"#指定超时时间内阻塞式获取和新增元素","children":[]},{"level":3,"title":"判断元素是否存在","slug":"判断元素是否存在","link":"#判断元素是否存在","children":[]}]},{"level":2,"title":"ArrayBlockingQueue 获取和新增元素的方法对比","slug":"arrayblockingqueue-获取和新增元素的方法对比","link":"#arrayblockingqueue-获取和新增元素的方法对比","children":[]},{"level":2,"title":"ArrayBlockingQueue 相关面试题","slug":"arrayblockingqueue-相关面试题","link":"#arrayblockingqueue-相关面试题","children":[{"level":3,"title":"ArrayBlockingQueue 是什么？它的特点是什么？","slug":"arrayblockingqueue-是什么-它的特点是什么","link":"#arrayblockingqueue-是什么-它的特点是什么","children":[]},{"level":3,"title":"ArrayBlockingQueue 和 LinkedBlockingQueue 有什么区别？","slug":"arrayblockingqueue-和-linkedblockingqueue-有什么区别","link":"#arrayblockingqueue-和-linkedblockingqueue-有什么区别","children":[]},{"level":3,"title":"ArrayBlockingQueue 和 ConcurrentLinkedQueue 有什么区别？","slug":"arrayblockingqueue-和-concurrentlinkedqueue-有什么区别","link":"#arrayblockingqueue-和-concurrentlinkedqueue-有什么区别","children":[]},{"level":3,"title":"ArrayBlockingQueue 的实现原理是什么？","slug":"arrayblockingqueue-的实现原理是什么","link":"#arrayblockingqueue-的实现原理是什么","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{},"readingTime":{"minutes":26.3,"words":7889},"filePathRelative":"java/collection/arrayblockingqueue-source-code.md","excerpt":"<h2> 阻塞队列简介</h2>\\n<h3> 阻塞队列的历史</h3>\\n<p>Java 阻塞队列的历史可以追溯到 JDK1.5 版本，当时 Java 平台增加了 <code>java.util.concurrent</code>，即我们常说的 JUC 包，其中包含了各种并发流程控制工具、并发容器、原子类等。这其中自然也包含了我们这篇文章所讨论的阻塞队列。</p>\\n<p>为了解决高并发场景下多线程之间数据共享的问题，JDK1.5 版本中出现了 <code>ArrayBlockingQueue</code> 和 <code>LinkedBlockingQueue</code>，它们是带有生产者-消费者模式实现的并发容器。其中，<code>ArrayBlockingQueue</code> 是有界队列，即添加的元素达到上限之后，再次添加就会被阻塞或者抛出异常。而 <code>LinkedBlockingQueue</code> 则由链表构成的队列，正是因为链表的特性，所以 <code>LinkedBlockingQueue</code> 在添加元素上并不会向 <code>ArrayBlockingQueue</code> 那样有着较多的约束，所以 <code>LinkedBlockingQueue</code> 设置队列是否有界是可选的(注意这里的无界并不是指可以添加任务数量的元素，而是说队列的大小默认为 <code>Integer.MAX_VALUE</code>，近乎于无限大)。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

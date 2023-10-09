const e=JSON.parse('{"key":"v-651aaf17","path":"/java/collection/java-collection-questions-01.html","title":"Java集合常见面试题总结(上)","lang":"zh-CN","frontmatter":{"title":"Java集合常见面试题总结(上)","category":"Java","tag":["Java集合"],"head":[["meta",{"name":"keywords","content":"Collection,List,Set,Queue,Deque,PriorityQueue"}],["meta",{"name":"description","content":"Java集合常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/collection/java-collection-questions-01.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Java集合常见面试题总结(上)"}],["meta",{"property":"og:description","content":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合常见面试题总结(上)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"},"headers":[{"level":2,"title":"集合概述","slug":"集合概述","link":"#集合概述","children":[{"level":3,"title":"Java 集合概览","slug":"java-集合概览","link":"#java-集合概览","children":[]},{"level":3,"title":"说说 List, Set, Queue, Map 四者的区别？","slug":"说说-list-set-queue-map-四者的区别","link":"#说说-list-set-queue-map-四者的区别","children":[]},{"level":3,"title":"集合框架底层数据结构总结","slug":"集合框架底层数据结构总结","link":"#集合框架底层数据结构总结","children":[]},{"level":3,"title":"如何选用集合?","slug":"如何选用集合","link":"#如何选用集合","children":[]},{"level":3,"title":"为什么要使用集合？","slug":"为什么要使用集合","link":"#为什么要使用集合","children":[]}]},{"level":2,"title":"List","slug":"list-1","link":"#list-1","children":[{"level":3,"title":"ArrayList 和 Array（数组）的区别？","slug":"arraylist-和-array-数组-的区别","link":"#arraylist-和-array-数组-的区别","children":[]},{"level":3,"title":"ArrayList 和 Vector 的区别?（了解即可）","slug":"arraylist-和-vector-的区别-了解即可","link":"#arraylist-和-vector-的区别-了解即可","children":[]},{"level":3,"title":"Vector 和 Stack 的区别?（了解即可）","slug":"vector-和-stack-的区别-了解即可","link":"#vector-和-stack-的区别-了解即可","children":[]},{"level":3,"title":"ArrayList 可以添加 null 值吗？","slug":"arraylist-可以添加-null-值吗","link":"#arraylist-可以添加-null-值吗","children":[]},{"level":3,"title":"ArrayList 插入和删除元素的时间复杂度？","slug":"arraylist-插入和删除元素的时间复杂度","link":"#arraylist-插入和删除元素的时间复杂度","children":[]},{"level":3,"title":"LinkedList 插入和删除元素的时间复杂度？","slug":"linkedlist-插入和删除元素的时间复杂度","link":"#linkedlist-插入和删除元素的时间复杂度","children":[]},{"level":3,"title":"LinkedList 为什么不能实现 RandomAccess 接口？","slug":"linkedlist-为什么不能实现-randomaccess-接口","link":"#linkedlist-为什么不能实现-randomaccess-接口","children":[]},{"level":3,"title":"ArrayList 与 LinkedList 区别?","slug":"arraylist-与-linkedlist-区别","link":"#arraylist-与-linkedlist-区别","children":[]},{"level":3,"title":"说一说 ArrayList 的扩容机制吧","slug":"说一说-arraylist-的扩容机制吧","link":"#说一说-arraylist-的扩容机制吧","children":[]}]},{"level":2,"title":"Set","slug":"set-1","link":"#set-1","children":[{"level":3,"title":"Comparable 和 Comparator 的区别","slug":"comparable-和-comparator-的区别","link":"#comparable-和-comparator-的区别","children":[]},{"level":3,"title":"无序性和不可重复性的含义是什么","slug":"无序性和不可重复性的含义是什么","link":"#无序性和不可重复性的含义是什么","children":[]},{"level":3,"title":"比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同","slug":"比较-hashset、linkedhashset-和-treeset-三者的异同","link":"#比较-hashset、linkedhashset-和-treeset-三者的异同","children":[]}]},{"level":2,"title":"Queue","slug":"queue-1","link":"#queue-1","children":[{"level":3,"title":"Queue 与 Deque 的区别","slug":"queue-与-deque-的区别","link":"#queue-与-deque-的区别","children":[]},{"level":3,"title":"ArrayDeque 与 LinkedList 的区别","slug":"arraydeque-与-linkedlist-的区别","link":"#arraydeque-与-linkedlist-的区别","children":[]},{"level":3,"title":"说一说 PriorityQueue","slug":"说一说-priorityqueue","link":"#说一说-priorityqueue","children":[]},{"level":3,"title":"什么是 BlockingQueue？","slug":"什么是-blockingqueue","link":"#什么是-blockingqueue","children":[]},{"level":3,"title":"BlockingQueue 的实现类有哪些？","slug":"blockingqueue-的实现类有哪些","link":"#blockingqueue-的实现类有哪些","children":[]},{"level":3,"title":"ArrayBlockingQueue 和 LinkedBlockingQueue 有什么区别？","slug":"arrayblockingqueue-和-linkedblockingqueue-有什么区别","link":"#arrayblockingqueue-和-linkedblockingqueue-有什么区别","children":[]}]}],"git":{},"readingTime":{"minutes":21.05,"words":6316},"filePathRelative":"java/collection/java-collection-questions-01.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">这是一则或许对你有用的小广告</p>\\n<ul>\\n<li><strong>面试专版</strong>：准备 Java 面试的小伙伴可以考虑面试专版：<strong><a href=\\"/JavaGuide/zhuanlan/java-mian-shi-zhi-bei.html\\" target=\\"blank\\">《Java 面试指北 》</a></strong> (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。</li>\\n<li><strong>知识星球</strong>：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 <strong><a href=\\"/JavaGuide/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\">JavaGuide 官方知识星球</a></strong>。</li>\\n</ul>\\n</div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

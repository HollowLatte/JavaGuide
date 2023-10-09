const e=JSON.parse('{"key":"v-7ea03a6e","path":"/java/concurrent/java-concurrent-questions-01.html","title":"Java并发常见面试题总结（上）","lang":"zh-CN","frontmatter":{"title":"Java并发常见面试题总结（上）","category":"Java","tag":["Java并发"],"head":[["meta",{"name":"keywords","content":"线程和进程,并发和并行,多线程,死锁,线程的生命周期"}],["meta",{"name":"description","content":"Java并发常见知识点和面试题总结（含详细解答），希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/concurrent/java-concurrent-questions-01.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Java并发常见面试题总结（上）"}],["meta",{"property":"og:description","content":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java并发"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发常见面试题总结（上）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"},"headers":[{"level":2,"title":"什么是线程和进程?","slug":"什么是线程和进程","link":"#什么是线程和进程","children":[{"level":3,"title":"何为进程?","slug":"何为进程","link":"#何为进程","children":[]},{"level":3,"title":"何为线程?","slug":"何为线程","link":"#何为线程","children":[]}]},{"level":2,"title":"请简要描述线程与进程的关系,区别及优缺点？","slug":"请简要描述线程与进程的关系-区别及优缺点","link":"#请简要描述线程与进程的关系-区别及优缺点","children":[{"level":3,"title":"图解进程和线程的关系","slug":"图解进程和线程的关系","link":"#图解进程和线程的关系","children":[]},{"level":3,"title":"程序计数器为什么是私有的?","slug":"程序计数器为什么是私有的","link":"#程序计数器为什么是私有的","children":[]},{"level":3,"title":"虚拟机栈和本地方法栈为什么是私有的?","slug":"虚拟机栈和本地方法栈为什么是私有的","link":"#虚拟机栈和本地方法栈为什么是私有的","children":[]},{"level":3,"title":"一句话简单了解堆和方法区","slug":"一句话简单了解堆和方法区","link":"#一句话简单了解堆和方法区","children":[]}]},{"level":2,"title":"并发与并行的区别","slug":"并发与并行的区别","link":"#并发与并行的区别","children":[]},{"level":2,"title":"同步和异步的区别","slug":"同步和异步的区别","link":"#同步和异步的区别","children":[]},{"level":2,"title":"为什么要使用多线程?","slug":"为什么要使用多线程","link":"#为什么要使用多线程","children":[]},{"level":2,"title":"使用多线程可能带来什么问题?","slug":"使用多线程可能带来什么问题","link":"#使用多线程可能带来什么问题","children":[]},{"level":2,"title":"如何理解线程安全和不安全？","slug":"如何理解线程安全和不安全","link":"#如何理解线程安全和不安全","children":[]},{"level":2,"title":"单核 CPU 上运行多个线程效率一定会高吗？","slug":"单核-cpu-上运行多个线程效率一定会高吗","link":"#单核-cpu-上运行多个线程效率一定会高吗","children":[]},{"level":2,"title":"说说线程的生命周期和状态?","slug":"说说线程的生命周期和状态","link":"#说说线程的生命周期和状态","children":[]},{"level":2,"title":"什么是线程上下文切换?","slug":"什么是线程上下文切换","link":"#什么是线程上下文切换","children":[]},{"level":2,"title":"什么是线程死锁?如何避免死锁?","slug":"什么是线程死锁-如何避免死锁","link":"#什么是线程死锁-如何避免死锁","children":[{"level":3,"title":"认识线程死锁","slug":"认识线程死锁","link":"#认识线程死锁","children":[]},{"level":3,"title":"如何预防和避免线程死锁?","slug":"如何预防和避免线程死锁","link":"#如何预防和避免线程死锁","children":[]}]},{"level":2,"title":"sleep() 方法和 wait() 方法对比","slug":"sleep-方法和-wait-方法对比","link":"#sleep-方法和-wait-方法对比","children":[]},{"level":2,"title":"为什么 wait() 方法不定义在 Thread 中？","slug":"为什么-wait-方法不定义在-thread-中","link":"#为什么-wait-方法不定义在-thread-中","children":[]},{"level":2,"title":"可以直接调用 Thread 类的 run 方法吗？","slug":"可以直接调用-thread-类的-run-方法吗","link":"#可以直接调用-thread-类的-run-方法吗","children":[]}],"git":{},"readingTime":{"minutes":18.3,"words":5491},"filePathRelative":"java/concurrent/java-concurrent-questions-01.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">这是一则或许对你有用的小广告</p>\\n<ul>\\n<li><strong>面试专版</strong>：准备 Java 面试的小伙伴可以考虑面试专版：<strong><a href=\\"/JavaGuide/zhuanlan/java-mian-shi-zhi-bei.html\\" target=\\"blank\\">《Java 面试指北 》</a></strong> (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。</li>\\n<li><strong>知识星球</strong>：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 <strong><a href=\\"/JavaGuide/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\">JavaGuide 官方知识星球</a></strong>。</li>\\n</ul>\\n</div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
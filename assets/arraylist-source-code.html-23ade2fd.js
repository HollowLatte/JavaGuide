const a=JSON.parse('{"key":"v-886fcfe6","path":"/java/collection/arraylist-source-code.html","title":"ArrayList 源码分析","lang":"zh-CN","frontmatter":{"title":"ArrayList 源码分析","category":"Java","tag":["Java集合"],"description":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/collection/arraylist-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ArrayList 源码分析"}],["meta",{"property":"og:description","content":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayList 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"ArrayList 简介","slug":"arraylist-简介","link":"#arraylist-简介","children":[{"level":3,"title":"ArrayList 和 Vector 的区别?（了解即可）","slug":"arraylist-和-vector-的区别-了解即可","link":"#arraylist-和-vector-的区别-了解即可","children":[]},{"level":3,"title":"ArrayList 可以添加 null 值吗？","slug":"arraylist-可以添加-null-值吗","link":"#arraylist-可以添加-null-值吗","children":[]},{"level":3,"title":"Arraylist 与 LinkedList 区别?","slug":"arraylist-与-linkedlist-区别","link":"#arraylist-与-linkedlist-区别","children":[]}]},{"level":2,"title":"ArrayList 核心源码解读","slug":"arraylist-核心源码解读","link":"#arraylist-核心源码解读","children":[]},{"level":2,"title":"ArrayList 扩容机制分析","slug":"arraylist-扩容机制分析","link":"#arraylist-扩容机制分析","children":[{"level":3,"title":"先从 ArrayList 的构造函数说起","slug":"先从-arraylist-的构造函数说起","link":"#先从-arraylist-的构造函数说起","children":[]},{"level":3,"title":"一步一步分析 ArrayList 扩容机制","slug":"一步一步分析-arraylist-扩容机制","link":"#一步一步分析-arraylist-扩容机制","children":[]},{"level":3,"title":"System.arraycopy() 和 Arrays.copyOf()方法","slug":"system-arraycopy-和-arrays-copyof-方法","link":"#system-arraycopy-和-arrays-copyof-方法","children":[]},{"level":3,"title":"ensureCapacity方法","slug":"ensurecapacity方法","link":"#ensurecapacity方法","children":[]}]}],"git":{},"readingTime":{"minutes":22.66,"words":6798},"filePathRelative":"java/collection/arraylist-source-code.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">这是一则或许对你有用的小广告</p>\\n<ul>\\n<li><strong>面试专版</strong>：准备 Java 面试的小伙伴可以考虑面试专版：<strong><a href=\\"/JavaGuide/zhuanlan/java-mian-shi-zhi-bei.html\\" target=\\"blank\\">《Java 面试指北 》</a></strong> (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。</li>\\n<li><strong>知识星球</strong>：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 <strong><a href=\\"/JavaGuide/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\">JavaGuide 官方知识星球</a></strong>。</li>\\n</ul>\\n</div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{a as data};

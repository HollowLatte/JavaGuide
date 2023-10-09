const e=JSON.parse('{"key":"v-b1da5660","path":"/java/jvm/classloader.html","title":"类加载器详解（重点）","lang":"zh-CN","frontmatter":{"title":"类加载器详解（重点）","category":"Java","tag":["JVM"],"description":"回顾一下类加载过程 开始介绍类加载器和双亲委派模型之前，简单回顾一下类加载过程。 类加载过程：加载-&gt;连接-&gt;初始化。 连接过程又可分为三步：验证-&gt;准备-&gt;解析。 类加载过程","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/java/jvm/classloader.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"类加载器详解（重点）"}],["meta",{"property":"og:description","content":"回顾一下类加载过程 开始介绍类加载器和双亲委派模型之前，简单回顾一下类加载过程。 类加载过程：加载-&gt;连接-&gt;初始化。 连接过程又可分为三步：验证-&gt;准备-&gt;解析。 类加载过程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"JVM"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器详解（重点）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"回顾一下类加载过程","slug":"回顾一下类加载过程","link":"#回顾一下类加载过程","children":[]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[{"level":3,"title":"类加载器介绍","slug":"类加载器介绍","link":"#类加载器介绍","children":[]},{"level":3,"title":"类加载器加载规则","slug":"类加载器加载规则","link":"#类加载器加载规则","children":[]},{"level":3,"title":"类加载器总结","slug":"类加载器总结","link":"#类加载器总结","children":[]},{"level":3,"title":"自定义类加载器","slug":"自定义类加载器","link":"#自定义类加载器","children":[]}]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[{"level":3,"title":"双亲委派模型介绍","slug":"双亲委派模型介绍","link":"#双亲委派模型介绍","children":[]},{"level":3,"title":"双亲委派模型的执行流程","slug":"双亲委派模型的执行流程","link":"#双亲委派模型的执行流程","children":[]},{"level":3,"title":"双亲委派模型的好处","slug":"双亲委派模型的好处","link":"#双亲委派模型的好处","children":[]},{"level":3,"title":"打破双亲委派模型方法","slug":"打破双亲委派模型方法","link":"#打破双亲委派模型方法","children":[]}]},{"level":2,"title":"推荐阅读","slug":"推荐阅读","link":"#推荐阅读","children":[]}],"git":{},"readingTime":{"minutes":17.22,"words":5165},"filePathRelative":"java/jvm/classloader.md","excerpt":"<h2> 回顾一下类加载过程</h2>\\n<p>开始介绍类加载器和双亲委派模型之前，简单回顾一下类加载过程。</p>\\n<ul>\\n<li>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。</li>\\n<li>连接过程又可分为三步：<strong>验证-&gt;准备-&gt;解析</strong>。</li>\\n</ul>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/java/jvm/class-loading-procedure.png\\" alt=\\"类加载过程\\" tabindex=\\"0\\"><figcaption>类加载过程</figcaption></figure>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

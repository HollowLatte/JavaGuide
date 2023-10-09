const e=JSON.parse('{"key":"v-46ceb23b","path":"/system-design/basis/unit-test.html","title":"单元测试到底是什么？应该怎么做？","lang":"zh-CN","frontmatter":{"title":"单元测试到底是什么？应该怎么做？","category":"代码质量","description":"本文重构完善自谈谈为什么写单元测试 - 键盘男 - 2016这篇文章。 何谓单元测试？ 维基百科是这样介绍单元测试的： 在计算机编程中，单元测试（Unit Testing）是针对程序模块（软件设计的最小单位）进行的正确性检验测试工作。 程序单元是应用的 最小可测试部件 。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/system-design/basis/unit-test.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"单元测试到底是什么？应该怎么做？"}],["meta",{"property":"og:description","content":"本文重构完善自谈谈为什么写单元测试 - 键盘男 - 2016这篇文章。 何谓单元测试？ 维基百科是这样介绍单元测试的： 在计算机编程中，单元测试（Unit Testing）是针对程序模块（软件设计的最小单位）进行的正确性检验测试工作。 程序单元是应用的 最小可测试部件 。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单元测试到底是什么？应该怎么做？\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"何谓单元测试？","slug":"何谓单元测试","link":"#何谓单元测试","children":[]},{"level":2,"title":"为什么需要单元测试？","slug":"为什么需要单元测试","link":"#为什么需要单元测试","children":[{"level":3,"title":"为重构保驾护航","slug":"为重构保驾护航","link":"#为重构保驾护航","children":[]},{"level":3,"title":"提高代码质量","slug":"提高代码质量","link":"#提高代码质量","children":[]},{"level":3,"title":"减少 bug","slug":"减少-bug","link":"#减少-bug","children":[]},{"level":3,"title":"快速定位 bug","slug":"快速定位-bug","link":"#快速定位-bug","children":[]},{"level":3,"title":"持续集成依赖单元测试","slug":"持续集成依赖单元测试","link":"#持续集成依赖单元测试","children":[]}]},{"level":2,"title":"谁逼你写单元测试？","slug":"谁逼你写单元测试","link":"#谁逼你写单元测试","children":[{"level":3,"title":"领导要求","slug":"领导要求","link":"#领导要求","children":[]},{"level":3,"title":"大牛都写单元测试","slug":"大牛都写单元测试","link":"#大牛都写单元测试","children":[]},{"level":3,"title":"保住面子","slug":"保住面子","link":"#保住面子","children":[]},{"level":3,"title":"心虚","slug":"心虚","link":"#心虚","children":[]}]},{"level":2,"title":"TDD 测试驱动开发","slug":"tdd-测试驱动开发","link":"#tdd-测试驱动开发","children":[{"level":3,"title":"何谓 TDD？","slug":"何谓-tdd","link":"#何谓-tdd","children":[]},{"level":3,"title":"TDD 优缺点分析","slug":"tdd-优缺点分析","link":"#tdd-优缺点分析","children":[]}]},{"level":2,"title":"单测框架如何选择？","slug":"单测框架如何选择","link":"#单测框架如何选择","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":8.58,"words":2573},"filePathRelative":"system-design/basis/unit-test.md","excerpt":"<blockquote>\\n<p>本文重构完善自<a href=\\"https://www.jianshu.com/p/fa41fb80d2b8\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">谈谈为什么写单元测试 - 键盘男 - 2016</a>这篇文章。</p>\\n</blockquote>\\n<h2> 何谓单元测试？</h2>\\n<p>维基百科是这样介绍单元测试的：</p>\\n<blockquote>\\n<p>在计算机编程中，单元测试（Unit Testing）是针对程序模块（软件设计的最小单位）进行的正确性检验测试工作。</p>\\n<p>程序单元是应用的 <strong>最小可测试部件</strong> 。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。</p>\\n</blockquote>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

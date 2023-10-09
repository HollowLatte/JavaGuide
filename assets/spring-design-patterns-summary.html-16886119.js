const e=JSON.parse('{"key":"v-ea10cfee","path":"/system-design/framework/spring/spring-design-patterns-summary.html","title":"Spring 中的设计模式详解","lang":"zh-CN","frontmatter":{"title":"Spring 中的设计模式详解","category":"框架","tag":["Spring"],"description":"“JDK 中用到了哪些设计模式? Spring 中用到了哪些设计模式? ”这两个问题，在面试中比较常见。 我在网上搜索了一下关于 Spring 中设计模式的讲解几乎都是千篇一律，而且大部分都年代久远。所以，花了几天时间自己总结了一下。 由于我的个人能力有限，文中如有任何错误各位都可以指出。另外，文章篇幅有限，对于设计模式以及一些源码的解读我只是一笔带过，这篇文章的主要目的是回顾一下 Spring 中的设计模式。 控制反转(IoC)和依赖注入(DI) IoC(Inversion of Control,控制反转) 是 Spring 中一个非常非常重要的概念，它不是什么技术，而是一种解耦的设计思想。IoC 的主要目的是借助于“第三方”(Spring 中的 IoC 容器) 实现具有依赖关系的对象之间的解耦(IOC 容器管理对象，你只管使用即可)，从而降低代码之间的耦合度。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/system-design/framework/spring/spring-design-patterns-summary.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Spring 中的设计模式详解"}],["meta",{"property":"og:description","content":"“JDK 中用到了哪些设计模式? Spring 中用到了哪些设计模式? ”这两个问题，在面试中比较常见。 我在网上搜索了一下关于 Spring 中设计模式的讲解几乎都是千篇一律，而且大部分都年代久远。所以，花了几天时间自己总结了一下。 由于我的个人能力有限，文中如有任何错误各位都可以指出。另外，文章篇幅有限，对于设计模式以及一些源码的解读我只是一笔带过，这篇文章的主要目的是回顾一下 Spring 中的设计模式。 控制反转(IoC)和依赖注入(DI) IoC(Inversion of Control,控制反转) 是 Spring 中一个非常非常重要的概念，它不是什么技术，而是一种解耦的设计思想。IoC 的主要目的是借助于“第三方”(Spring 中的 IoC 容器) 实现具有依赖关系的对象之间的解耦(IOC 容器管理对象，你只管使用即可)，从而降低代码之间的耦合度。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Spring"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 中的设计模式详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"控制反转(IoC)和依赖注入(DI)","slug":"控制反转-ioc-和依赖注入-di","link":"#控制反转-ioc-和依赖注入-di","children":[]},{"level":2,"title":"工厂设计模式","slug":"工厂设计模式","link":"#工厂设计模式","children":[]},{"level":2,"title":"单例设计模式","slug":"单例设计模式","link":"#单例设计模式","children":[]},{"level":2,"title":"代理设计模式","slug":"代理设计模式","link":"#代理设计模式","children":[{"level":3,"title":"代理模式在 AOP 中的应用","slug":"代理模式在-aop-中的应用","link":"#代理模式在-aop-中的应用","children":[]},{"level":3,"title":"Spring AOP 和 AspectJ AOP 有什么区别?","slug":"spring-aop-和-aspectj-aop-有什么区别","link":"#spring-aop-和-aspectj-aop-有什么区别","children":[]}]},{"level":2,"title":"模板方法","slug":"模板方法","link":"#模板方法","children":[]},{"level":2,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[{"level":3,"title":"Spring 事件驱动模型中的三种角色","slug":"spring-事件驱动模型中的三种角色","link":"#spring-事件驱动模型中的三种角色","children":[]},{"level":3,"title":"Spring 的事件流程总结","slug":"spring-的事件流程总结","link":"#spring-的事件流程总结","children":[]}]},{"level":2,"title":"适配器模式","slug":"适配器模式","link":"#适配器模式","children":[{"level":3,"title":"Spring AOP 中的适配器模式","slug":"spring-aop-中的适配器模式","link":"#spring-aop-中的适配器模式","children":[]},{"level":3,"title":"Spring MVC 中的适配器模式","slug":"spring-mvc-中的适配器模式","link":"#spring-mvc-中的适配器模式","children":[]}]},{"level":2,"title":"装饰者模式","slug":"装饰者模式","link":"#装饰者模式","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{},"readingTime":{"minutes":14.52,"words":4356},"filePathRelative":"system-design/framework/spring/spring-design-patterns-summary.md","excerpt":"<p>“JDK 中用到了哪些设计模式? Spring 中用到了哪些设计模式? ”这两个问题，在面试中比较常见。</p>\\n<p>我在网上搜索了一下关于 Spring 中设计模式的讲解几乎都是千篇一律，而且大部分都年代久远。所以，花了几天时间自己总结了一下。</p>\\n<p>由于我的个人能力有限，文中如有任何错误各位都可以指出。另外，文章篇幅有限，对于设计模式以及一些源码的解读我只是一笔带过，这篇文章的主要目的是回顾一下 Spring 中的设计模式。</p>\\n<h2> 控制反转(IoC)和依赖注入(DI)</h2>\\n<p><strong>IoC(Inversion of Control,控制反转)</strong> 是 Spring 中一个非常非常重要的概念，它不是什么技术，而是一种解耦的设计思想。IoC 的主要目的是借助于“第三方”(Spring 中的 IoC 容器) 实现具有依赖关系的对象之间的解耦(IOC 容器管理对象，你只管使用即可)，从而降低代码之间的耦合度。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
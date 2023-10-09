const t=JSON.parse('{"key":"v-cec25ace","path":"/system-design/framework/spring/spring-boot-auto-assembly-principles.html","title":"SpringBoot 自动装配原理详解","lang":"zh-CN","frontmatter":{"title":"SpringBoot 自动装配原理详解","category":"框架","tag":["SpringBoot"],"description":"作者：Miki-byte-1024 &amp; Snailclimb 每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/system-design/framework/spring/spring-boot-auto-assembly-principles.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"SpringBoot 自动装配原理详解"}],["meta",{"property":"og:description","content":"作者：Miki-byte-1024 &amp; Snailclimb 每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 自动装配原理详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"什么是 SpringBoot 自动装配？","slug":"什么是-springboot-自动装配","link":"#什么是-springboot-自动装配","children":[]},{"level":2,"title":"SpringBoot 是如何实现自动装配的？","slug":"springboot-是如何实现自动装配的","link":"#springboot-是如何实现自动装配的","children":[{"level":3,"title":"@EnableAutoConfiguration:实现自动装配的核心注解","slug":"enableautoconfiguration-实现自动装配的核心注解","link":"#enableautoconfiguration-实现自动装配的核心注解","children":[]},{"level":3,"title":"AutoConfigurationImportSelector:加载自动装配类","slug":"autoconfigurationimportselector-加载自动装配类","link":"#autoconfigurationimportselector-加载自动装配类","children":[]}]},{"level":2,"title":"如何实现一个 Starter","slug":"如何实现一个-starter","link":"#如何实现一个-starter","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":7.28,"words":2184},"filePathRelative":"system-design/framework/spring/spring-boot-auto-assembly-principles.md","excerpt":"<blockquote>\\n<p>作者：<a href=\\"https://github.com/Miki-byte-1024\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Miki-byte-1024</a> &amp; <a href=\\"https://github.com/Snailclimb\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Snailclimb</a></p>\\n</blockquote>\\n<p>每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{t as data};

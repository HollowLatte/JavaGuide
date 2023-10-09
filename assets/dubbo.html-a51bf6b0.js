const e=JSON.parse('{"key":"v-50751f3c","path":"/distributed-system/rpc/dubbo.html","title":"Dubbo常见问题总结","lang":"zh-CN","frontmatter":{"title":"Dubbo常见问题总结","category":"分布式","tag":["rpc"],"description":"提示 Dubbo3 已经发布，这篇文章是基于 Dubbo2 写的。Dubbo3 基于 Dubbo2 演进而来，在保持原有核心功能特性的同时， Dubbo3 在易用性、超大规模微服务实践、云原生基础设施适配、安全设计等几大方向上进行了全面升级。 本文中的很多链接已经失效，主要原因是因为 Dubbo 官方文档进行了修改导致 URL 失效。 这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/distributed-system/rpc/dubbo.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Dubbo常见问题总结"}],["meta",{"property":"og:description","content":"提示 Dubbo3 已经发布，这篇文章是基于 Dubbo2 写的。Dubbo3 基于 Dubbo2 演进而来，在保持原有核心功能特性的同时， Dubbo3 在易用性、超大规模微服务实践、云原生基础设施适配、安全设计等几大方向上进行了全面升级。 本文中的很多链接已经失效，主要原因是因为 Dubbo 官方文档进行了修改导致 URL 失效。 这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"rpc"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dubbo常见问题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Dubbo 基础","slug":"dubbo-基础","link":"#dubbo-基础","children":[{"level":3,"title":"什么是 Dubbo?","slug":"什么是-dubbo","link":"#什么是-dubbo","children":[]},{"level":3,"title":"为什么要用 Dubbo?","slug":"为什么要用-dubbo","link":"#为什么要用-dubbo","children":[]}]},{"level":2,"title":"分布式基础","slug":"分布式基础","link":"#分布式基础","children":[{"level":3,"title":"什么是分布式?","slug":"什么是分布式","link":"#什么是分布式","children":[]},{"level":3,"title":"为什么要分布式?","slug":"为什么要分布式","link":"#为什么要分布式","children":[]}]},{"level":2,"title":"Dubbo 架构","slug":"dubbo-架构","link":"#dubbo-架构","children":[{"level":3,"title":"Dubbo 架构中的核心角色有哪些？","slug":"dubbo-架构中的核心角色有哪些","link":"#dubbo-架构中的核心角色有哪些","children":[]},{"level":3,"title":"Dubbo 中的 Invoker 概念了解么？","slug":"dubbo-中的-invoker-概念了解么","link":"#dubbo-中的-invoker-概念了解么","children":[]},{"level":3,"title":"Dubbo 的工作原理了解么？","slug":"dubbo-的工作原理了解么","link":"#dubbo-的工作原理了解么","children":[]},{"level":3,"title":"Dubbo 的 SPI 机制了解么？ 如何扩展 Dubbo 中的默认实现？","slug":"dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现","link":"#dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现","children":[]},{"level":3,"title":"Dubbo 的微内核架构了解吗？","slug":"dubbo-的微内核架构了解吗","link":"#dubbo-的微内核架构了解吗","children":[]},{"level":3,"title":"关于 Dubbo 架构的一些自测小问题","slug":"关于-dubbo-架构的一些自测小问题","link":"#关于-dubbo-架构的一些自测小问题","children":[]}]},{"level":2,"title":"Dubbo 的负载均衡策略","slug":"dubbo-的负载均衡策略","link":"#dubbo-的负载均衡策略","children":[{"level":3,"title":"什么是负载均衡？","slug":"什么是负载均衡","link":"#什么是负载均衡","children":[]},{"level":3,"title":"Dubbo 提供的负载均衡策略有哪些？","slug":"dubbo-提供的负载均衡策略有哪些","link":"#dubbo-提供的负载均衡策略有哪些","children":[]}]},{"level":2,"title":"Dubbo 序列化协议","slug":"dubbo-序列化协议","link":"#dubbo-序列化协议","children":[{"level":3,"title":"Dubbo 支持哪些序列化方式呢？","slug":"dubbo-支持哪些序列化方式呢","link":"#dubbo-支持哪些序列化方式呢","children":[]},{"level":3,"title":"谈谈你对这些序列化协议了解？","slug":"谈谈你对这些序列化协议了解","link":"#谈谈你对这些序列化协议了解","children":[]}]}],"git":{},"readingTime":{"minutes":19,"words":5699},"filePathRelative":"distributed-system/rpc/dubbo.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<ul>\\n<li>Dubbo3 已经发布，这篇文章是基于 Dubbo2 写的。Dubbo3 基于 Dubbo2 演进而来，在保持原有核心功能特性的同时， Dubbo3 在易用性、超大规模微服务实践、云原生基础设施适配、安全设计等几大方向上进行了全面升级。</li>\\n<li>本文中的很多链接已经失效，主要原因是因为 Dubbo 官方文档进行了修改导致 URL 失效。</li>\\n</ul>\\n</div>\\n<p>这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
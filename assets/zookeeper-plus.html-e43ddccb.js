const e=JSON.parse('{"key":"v-2b49482c","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html","title":"ZooKeeper相关概念总结(进阶)","lang":"zh-CN","frontmatter":{"title":"ZooKeeper相关概念总结(进阶)","category":"分布式","tag":["ZooKeeper"],"description":"FrancisQ 投稿。 什么是 ZooKeeper ZooKeeper 由 Yahoo 开发，后来捐赠给了 Apache ，现已成为 Apache 顶级项目。ZooKeeper 是一个开源的分布式应用程序协调服务器，其为分布式系统提供一致性服务。其一致性是通过基于 Paxos 算法的 ZAB 协议完成的。其主要功能包括：配置维护、分布式同步、集群管理、分布式事务等。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper相关概念总结(进阶)"}],["meta",{"property":"og:description","content":"FrancisQ 投稿。 什么是 ZooKeeper ZooKeeper 由 Yahoo 开发，后来捐赠给了 Apache ，现已成为 Apache 顶级项目。ZooKeeper 是一个开源的分布式应用程序协调服务器，其为分布式系统提供一致性服务。其一致性是通过基于 Paxos 算法的 ZAB 协议完成的。其主要功能包括：配置维护、分布式同步、集群管理、分布式事务等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"ZooKeeper"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper相关概念总结(进阶)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是 ZooKeeper","slug":"什么是-zookeeper","link":"#什么是-zookeeper","children":[]},{"level":2,"title":"一致性问题","slug":"一致性问题","link":"#一致性问题","children":[]},{"level":2,"title":"一致性协议和算法","slug":"一致性协议和算法","link":"#一致性协议和算法","children":[{"level":3,"title":"2PC（两阶段提交）","slug":"_2pc-两阶段提交","link":"#_2pc-两阶段提交","children":[]},{"level":3,"title":"3PC（三阶段提交）","slug":"_3pc-三阶段提交","link":"#_3pc-三阶段提交","children":[]},{"level":3,"title":"Paxos 算法","slug":"paxos-算法","link":"#paxos-算法","children":[]}]},{"level":2,"title":"引出 ZAB","slug":"引出-zab","link":"#引出-zab","children":[{"level":3,"title":"Zookeeper 架构","slug":"zookeeper-架构","link":"#zookeeper-架构","children":[]},{"level":3,"title":"ZAB 中的三个角色","slug":"zab-中的三个角色","link":"#zab-中的三个角色","children":[]},{"level":3,"title":"消息广播模式","slug":"消息广播模式","link":"#消息广播模式","children":[]},{"level":3,"title":"崩溃恢复模式","slug":"崩溃恢复模式","link":"#崩溃恢复模式","children":[]}]},{"level":2,"title":"Zookeeper 的几个理论知识","slug":"zookeeper-的几个理论知识","link":"#zookeeper-的几个理论知识","children":[{"level":3,"title":"数据模型","slug":"数据模型","link":"#数据模型","children":[]},{"level":3,"title":"会话","slug":"会话","link":"#会话","children":[]},{"level":3,"title":"ACL","slug":"acl","link":"#acl","children":[]},{"level":3,"title":"Watcher 机制","slug":"watcher-机制","link":"#watcher-机制","children":[]}]},{"level":2,"title":"Zookeeper 的几个典型应用场景","slug":"zookeeper-的几个典型应用场景","link":"#zookeeper-的几个典型应用场景","children":[{"level":3,"title":"选主","slug":"选主","link":"#选主","children":[]},{"level":3,"title":"分布式锁","slug":"分布式锁","link":"#分布式锁","children":[]},{"level":3,"title":"命名服务","slug":"命名服务","link":"#命名服务","children":[]},{"level":3,"title":"集群管理和注册中心","slug":"集群管理和注册中心","link":"#集群管理和注册中心","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":33.38,"words":10015},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-plus.md","excerpt":"<blockquote>\\n<p><a href=\\"https://juejin.im/user/5c33853851882525ea106810\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">FrancisQ</a> 投稿。</p>\\n</blockquote>\\n<h2> 什么是 ZooKeeper</h2>\\n<p><code>ZooKeeper</code> 由 <code>Yahoo</code> 开发，后来捐赠给了 <code>Apache</code> ，现已成为 <code>Apache</code> 顶级项目。<code>ZooKeeper</code> 是一个开源的分布式应用程序协调服务器，其为分布式系统提供一致性服务。其一致性是通过基于 <code>Paxos</code> 算法的 <code>ZAB</code> 协议完成的。其主要功能包括：配置维护、分布式同步、集群管理、分布式事务等。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
const e=JSON.parse('{"key":"v-e52695b4","path":"/high-performance/read-and-write-separation-and-library-subtable.html","title":"读写分离和分库分表常见问题总结","lang":"zh-CN","frontmatter":{"title":"读写分离和分库分表常见问题总结","category":"高性能","head":[["meta",{"name":"keywords","content":"读写分离,分库分表,主从复制"}],["meta",{"name":"description","content":"读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。 这样的话，就能够小幅提升写性能，大幅提升读性能。 读写分离基于主从复制，MySQL 主从复制是依赖于 binlog 。分库就是将数据库中的数据分散到不同的数据库上。分表就是对单表的数据进行拆分，可以是垂直拆分，也可以是水平拆分。引入分库分表之后，需要系统解决事务、分布式 id、无法 join 操作问题。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/high-performance/read-and-write-separation-and-library-subtable.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"读写分离和分库分表常见问题总结"}],["meta",{"property":"og:description","content":"读写分离 什么是读写分离？ 见名思意，根据读写分离的名字，我们就可以知道：读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。 这样的话，就能够小幅提升写性能，大幅提升读性能。 我简单画了一张图来帮助不太清楚读写分离的小伙伴理解。 读写分离示意图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"读写分离和分库分表常见问题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"读写分离 什么是读写分离？ 见名思意，根据读写分离的名字，我们就可以知道：读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。 这样的话，就能够小幅提升写性能，大幅提升读性能。 我简单画了一张图来帮助不太清楚读写分离的小伙伴理解。 读写分离示意图"},"headers":[{"level":2,"title":"读写分离","slug":"读写分离","link":"#读写分离","children":[{"level":3,"title":"什么是读写分离？","slug":"什么是读写分离","link":"#什么是读写分离","children":[]},{"level":3,"title":"如何实现读写分离？","slug":"如何实现读写分离","link":"#如何实现读写分离","children":[]},{"level":3,"title":"主从复制原理是什么？","slug":"主从复制原理是什么","link":"#主从复制原理是什么","children":[]},{"level":3,"title":"如何避免主从延迟？","slug":"如何避免主从延迟","link":"#如何避免主从延迟","children":[]},{"level":3,"title":"什么情况下会出现主从延迟？如何尽量减少延迟？","slug":"什么情况下会出现主从延迟-如何尽量减少延迟","link":"#什么情况下会出现主从延迟-如何尽量减少延迟","children":[]}]},{"level":2,"title":"分库分表","slug":"分库分表","link":"#分库分表","children":[{"level":3,"title":"什么是分库？","slug":"什么是分库","link":"#什么是分库","children":[]},{"level":3,"title":"什么是分表？","slug":"什么是分表","link":"#什么是分表","children":[]},{"level":3,"title":"什么情况下需要分库分表？","slug":"什么情况下需要分库分表","link":"#什么情况下需要分库分表","children":[]},{"level":3,"title":"常见的分片算法有哪些？","slug":"常见的分片算法有哪些","link":"#常见的分片算法有哪些","children":[]},{"level":3,"title":"分库分表会带来什么问题呢？","slug":"分库分表会带来什么问题呢","link":"#分库分表会带来什么问题呢","children":[]},{"level":3,"title":"分库分表有没有什么比较推荐的方案？","slug":"分库分表有没有什么比较推荐的方案","link":"#分库分表有没有什么比较推荐的方案","children":[]},{"level":3,"title":"分库分表后，数据怎么迁移呢？","slug":"分库分表后-数据怎么迁移呢","link":"#分库分表后-数据怎么迁移呢","children":[]}]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}],"git":{},"readingTime":{"minutes":20.28,"words":6084},"filePathRelative":"high-performance/read-and-write-separation-and-library-subtable.md","excerpt":"<h2> 读写分离</h2>\\n<h3> 什么是读写分离？</h3>\\n<p>见名思意，根据读写分离的名字，我们就可以知道：<strong>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上。</strong> 这样的话，就能够小幅提升写性能，大幅提升读性能。</p>\\n<p>我简单画了一张图来帮助不太清楚读写分离的小伙伴理解。</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/high-performance/read-and-write-separation-and-library-subtable/read-and-write-separation.png\\" alt=\\"读写分离示意图\\" tabindex=\\"0\\"><figcaption>读写分离示意图</figcaption></figure>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

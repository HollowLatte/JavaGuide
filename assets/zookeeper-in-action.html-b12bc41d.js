const e=JSON.parse('{"key":"v-2fef832e","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.html","title":"ZooKeeper 实战","lang":"zh-CN","frontmatter":{"title":"ZooKeeper 实战","category":"分布式","tag":["ZooKeeper"],"description":"这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java 客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！ ZooKeeper 安装 使用 Docker 安装 zookeeper a.使用 Docker 下载 ZooKeeper docker pull zookeeper:3.5.8","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper 实战"}],["meta",{"property":"og:description","content":"这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java 客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！ ZooKeeper 安装 使用 Docker 安装 zookeeper a.使用 Docker 下载 ZooKeeper docker pull zookeeper:3.5.8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"ZooKeeper"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper 实战\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"ZooKeeper 安装","slug":"zookeeper-安装","link":"#zookeeper-安装","children":[{"level":3,"title":"使用 Docker 安装 zookeeper","slug":"使用-docker-安装-zookeeper","link":"#使用-docker-安装-zookeeper","children":[]},{"level":3,"title":"连接 ZooKeeper 服务","slug":"连接-zookeeper-服务","link":"#连接-zookeeper-服务","children":[]}]},{"level":2,"title":"ZooKeeper 常用命令演示","slug":"zookeeper-常用命令演示","link":"#zookeeper-常用命令演示","children":[{"level":3,"title":"查看常用命令(help 命令)","slug":"查看常用命令-help-命令","link":"#查看常用命令-help-命令","children":[]},{"level":3,"title":"创建节点(create 命令)","slug":"创建节点-create-命令","link":"#创建节点-create-命令","children":[]},{"level":3,"title":"更新节点数据内容(set 命令)","slug":"更新节点数据内容-set-命令","link":"#更新节点数据内容-set-命令","children":[]},{"level":3,"title":"获取节点的数据(get 命令)","slug":"获取节点的数据-get-命令","link":"#获取节点的数据-get-命令","children":[]},{"level":3,"title":"查看某个目录下的子节点(ls 命令)","slug":"查看某个目录下的子节点-ls-命令","link":"#查看某个目录下的子节点-ls-命令","children":[]},{"level":3,"title":"查看节点状态(stat 命令)","slug":"查看节点状态-stat-命令","link":"#查看节点状态-stat-命令","children":[]},{"level":3,"title":"查看节点信息和状态(ls2 命令)","slug":"查看节点信息和状态-ls2-命令","link":"#查看节点信息和状态-ls2-命令","children":[]},{"level":3,"title":"删除节点(delete 命令)","slug":"删除节点-delete-命令","link":"#删除节点-delete-命令","children":[]}]},{"level":2,"title":"ZooKeeper Java 客户端 Curator 简单使用","slug":"zookeeper-java-客户端-curator-简单使用","link":"#zookeeper-java-客户端-curator-简单使用","children":[{"level":3,"title":"连接 ZooKeeper 客户端","slug":"连接-zookeeper-客户端","link":"#连接-zookeeper-客户端","children":[]},{"level":3,"title":"数据节点的增删改查","slug":"数据节点的增删改查","link":"#数据节点的增删改查","children":[]}]}],"git":{},"readingTime":{"minutes":5.75,"words":1724},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.md","excerpt":"<p>这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java 客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。</p>\\n<p>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！</p>\\n<h2> ZooKeeper 安装</h2>\\n<h3> 使用 Docker 安装 zookeeper</h3>\\n<p><strong>a.使用 Docker 下载 ZooKeeper</strong></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull zookeeper:3.5.8\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as t,a as s,b as e,d as a,e as n}from"./app-03179461.js";const c={},l=n(`<p>使用缓存的时候，我们经常需要对内存中的数据进行持久化也就是将内存中的数据写入到硬盘中。大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了做数据同步（比如 Redis 集群的主从节点通过 RDB 文件同步数据）。</p><p>Redis 不同于 Memcached 的很重要一点就是，Redis 支持持久化，而且支持 3 种持久化方式:</p><ul><li>快照（snapshotting，RDB）</li><li>只追加文件（append-only file, AOF）</li><li>RDB 和 AOF 的混合持久化(Redis 4.0 新增)</li></ul><p>官方文档地址：https://redis.io/topics/persistence 。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/redis4.0-persitence.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="rdb-持久化" tabindex="-1"><a class="header-anchor" href="#rdb-持久化" aria-hidden="true">#</a> RDB 持久化</h2><h3 id="什么是-rdb-持久化" tabindex="-1"><a class="header-anchor" href="#什么是-rdb-持久化" aria-hidden="true">#</a> 什么是 RDB 持久化？</h3><p>Redis 可以通过创建快照来获得存储在内存里面的数据在 <strong>某个时间点</strong> 上的副本。Redis 创建快照之后，可以对快照进行备份，可以将快照复制到其他服务器从而创建具有相同数据的服务器副本（Redis 主从结构，主要用来提高 Redis 性能），还可以将快照留在原地以便重启服务器的时候使用。</p><p>快照持久化是 Redis 默认采用的持久化方式，在 <code>redis.conf</code> 配置文件中默认有此下配置：</p><div class="language-clojure line-numbers-mode" data-ext="clojure"><pre class="language-clojure"><code>save <span class="token number">900</span> <span class="token number">1</span>           <span class="token operator">#</span>在<span class="token number">900</span>秒<span class="token punctuation">(</span><span class="token number">15</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">1</span>个key发生变化，Redis就会自动触发bgsave命令创建快照。

save <span class="token number">300</span> <span class="token number">10</span>          <span class="token operator">#</span>在<span class="token number">300</span>秒<span class="token punctuation">(</span><span class="token number">5</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">10</span>个key发生变化，Redis就会自动触发bgsave命令创建快照。

save <span class="token number">60</span> <span class="token number">10000</span>        <span class="token operator">#</span>在<span class="token number">60</span>秒<span class="token punctuation">(</span><span class="token number">1</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">10000</span>个key发生变化，Redis就会自动触发bgsave命令创建快照。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rdb-创建快照时会阻塞主线程吗" tabindex="-1"><a class="header-anchor" href="#rdb-创建快照时会阻塞主线程吗" aria-hidden="true">#</a> RDB 创建快照时会阻塞主线程吗？</h3><p>Redis 提供了两个命令来生成 RDB 快照文件：</p><ul><li><code>save</code> : 同步保存操作，会阻塞 Redis 主线程；</li><li><code>bgsave</code> : fork 出一个子进程，子进程执行，不会阻塞 Redis 主线程，默认选项。</li></ul><blockquote><p>这里说 Redis 主线程而不是主进程的主要是因为 Redis 启动之后主要是通过单线程的方式完成主要的工作。如果你想将其描述为 Redis 主进程，也没毛病。</p></blockquote><h2 id="aof-持久化" tabindex="-1"><a class="header-anchor" href="#aof-持久化" aria-hidden="true">#</a> AOF 持久化</h2><h3 id="什么是-aof-持久化" tabindex="-1"><a class="header-anchor" href="#什么是-aof-持久化" aria-hidden="true">#</a> 什么是 AOF 持久化？</h3><p>与快照持久化相比，AOF 持久化的实时性更好。默认情况下 Redis 没有开启 AOF（append only file）方式的持久化（Redis 6.0 之后已经默认是开启了），可以通过 <code>appendonly</code> 参数开启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启 AOF 持久化后每执行一条会更改 Redis 中的数据的命令，Redis 就会将该命令写入到 AOF 缓冲区 <code>server.aof_buf</code> 中，然后再写入到 AOF 文件中（此时还在系统内核缓存区未同步到磁盘），最后再根据持久化方式（ <code>fsync</code>策略）的配置来决定何时将系统内核缓存区的数据同步到硬盘中的。</p><p>只有同步到磁盘中才算持久化保存了，否则依然存在数据丢失的风险，比如说：系统内核缓存区的数据还未同步，磁盘机器就宕机了，那这部分数据就算丢失了。</p><p>AOF 文件的保存位置和 RDB 文件的位置相同，都是通过 <code>dir</code> 参数设置的，默认的文件名是 <code>appendonly.aof</code>。</p><h3 id="aof-工作基本流程是怎样的" tabindex="-1"><a class="header-anchor" href="#aof-工作基本流程是怎样的" aria-hidden="true">#</a> AOF 工作基本流程是怎样的？</h3><p>AOF 持久化功能的实现可以简单分为 5 步：</p><ol><li><strong>命令追加（append）</strong>：所有的写命令会追加到 AOF 缓冲区中。</li><li><strong>文件写入（write）</strong>：将 AOF 缓冲区的数据写入到 AOF 文件中。这一步需要调用<code>write</code>函数（系统调用），<code>write</code>将数据写入到了系统内核缓冲区之后直接返回了（延迟写）。注意！！！此时并没有同步到磁盘。</li><li><strong>文件同步（fsync）</strong>：AOF 缓冲区根据对应的持久化方式（ <code>fsync</code> 策略）向硬盘做同步操作。这一步需要调用 <code>fsync</code> 函数（系统调用）， <code>fsync</code> 针对单个文件操作，对其进行强制硬盘同步，<code>fsync</code> 将阻塞直到写入磁盘完成后返回，保证了数据持久化。</li><li><strong>文件重写（rewrite）</strong>：随着 AOF 文件越来越大，需要定期对 AOF 文件进行重写，达到压缩的目的。</li><li><strong>重启加载（load）</strong>：当 Redis 重启时，可以加载 AOF 文件进行数据恢复。</li></ol><blockquote><p>Linux 系统直接提供了一些函数用于对文件和设备进行访问和控制，这些函数被称为 <strong>系统调用（syscall）</strong>。</p></blockquote><p>这里对上面提到的一些 Linux 系统调用再做一遍解释：</p><ul><li><code>write</code>：写入系统内核缓冲区之后直接返回（仅仅是写到缓冲区），不会立即同步到硬盘。虽然提高了效率，但也带来了数据丢失的风险。同步硬盘操作通常依赖于系统调度机制，Linux 内核通常为 30s 同步一次，具体值取决于写出的数据量和 I/O 缓冲区的状态。</li><li><code>fsync</code>：<code>fsync</code>用于强制刷新系统内核缓冲区（同步到到磁盘），确保写磁盘操作结束才会返回。</li></ul><p>AOF 工作流程图如下：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/aof-work-process.png" alt="AOF 工作基本流程" tabindex="0"><figcaption>AOF 工作基本流程</figcaption></figure><h3 id="aof-持久化方式有哪些" tabindex="-1"><a class="header-anchor" href="#aof-持久化方式有哪些" aria-hidden="true">#</a> AOF 持久化方式有哪些？</h3><p>在 Redis 的配置文件中存在三种不同的 AOF 持久化方式（ <code>fsync</code>策略），它们分别是：</p><ol><li><code>appendfsync always</code>：主线程调用 <code>write</code> 执行写操作后，后台线程（ <code>aof_fsync</code> 线程）立即会调用 <code>fsync</code> 函数同步 AOF 文件（刷盘），<code>fsync</code> 完成后线程返回，这样会严重降低 Redis 的性能（<code>write</code> + <code>fsync</code>）。</li><li><code>appendfsync everysec</code>：主线程调用 <code>write</code> 执行写操作后立即返回，由后台线程（ <code>aof_fsync</code> 线程）每秒钟调用 <code>fsync</code> 函数（系统调用）同步一次 AOF 文件（<code>write</code>+<code>fsync</code>，<code>fsync</code>间隔为 1 秒）</li><li><code>appendfsync no</code>：主线程调用 <code>write</code> 执行写操作后立即返回，让操作系统决定何时进行同步，Linux 下一般为 30 秒一次（<code>write</code>但不<code>fsync</code>，<code>fsync</code> 的时机由操作系统决定）。</li></ol><p>可以看出：<strong>这 3 种持久化方式的主要区别在于 <code>fsync</code> 同步 AOF 文件的时机（刷盘）</strong>。</p><p>为了兼顾数据和写入性能，可以考虑 <code>appendfsync everysec</code> 选项 ，让 Redis 每秒同步一次 AOF 文件，Redis 性能受到的影响较小。而且这样即使出现系统崩溃，用户最多只会丢失一秒之内产生的数据。当硬盘忙于执行写入操作的时候，Redis 还会优雅的放慢自己的速度以便适应硬盘的最大写入速度。</p><p>从 Redis 7.0.0 开始，Redis 使用了 <strong>Multi Part AOF</strong> 机制。顾名思义，Multi Part AOF 就是将原来的单个 AOF 文件拆分成多个 AOF 文件。在 Multi Part AOF 中，AOF 文件被分为三种类型，分别为：</p><ul><li>BASE：表示基础 AOF 文件，它一般由子进程通过重写产生，该文件最多只有一个。</li><li>INCR：表示增量 AOF 文件，它一般会在 AOFRW 开始执行时被创建，该文件可能存在多个。</li><li>HISTORY：表示历史 AOF 文件，它由 BASE 和 INCR AOF 变化而来，每次 AOFRW 成功完成时，本次 AOFRW 之前对应的 BASE 和 INCR AOF 都将变为 HISTORY，HISTORY 类型的 AOF 会被 Redis 自动删除。</li></ul>`,36),p={href:"https://zhuanlan.zhihu.com/p/467217082",target:"_blank",rel:"noopener noreferrer"},u=s("strong",null,"相关 issue",-1),A={href:"https://github.com/Snailclimb/JavaGuide/issues/783",target:"_blank",rel:"noopener noreferrer"},O=n('<h3 id="aof-为什么是在执行完命令之后记录日志" tabindex="-1"><a class="header-anchor" href="#aof-为什么是在执行完命令之后记录日志" aria-hidden="true">#</a> AOF 为什么是在执行完命令之后记录日志？</h3><p>关系型数据库（如 MySQL）通常都是执行命令之前记录日志（方便故障恢复），而 Redis AOF 持久化机制是在执行完命令之后再记录日志。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/redis-aof-write-log-disc.png" alt="AOF 记录日志过程" tabindex="0"><figcaption>AOF 记录日志过程</figcaption></figure><p><strong>为什么是在执行完命令之后记录日志呢？</strong></p><ul><li>避免额外的检查开销，AOF 记录日志不会对命令进行语法检查；</li><li>在命令执行完之后再记录，不会阻塞当前的命令执行。</li></ul><p>这样也带来了风险（我在前面介绍 AOF 持久化的时候也提到过）：</p><ul><li>如果刚执行完命令 Redis 就宕机会导致对应的修改丢失；</li><li>可能会阻塞后续其他命令的执行（AOF 记录日志是在 Redis 主线程中进行的）。</li></ul><h3 id="aof-重写了解吗" tabindex="-1"><a class="header-anchor" href="#aof-重写了解吗" aria-hidden="true">#</a> AOF 重写了解吗？</h3><p>当 AOF 变得太大时，Redis 能够在后台自动重写 AOF 产生一个新的 AOF 文件，这个新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样，但体积更小。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/aof-rewrite.png" alt="AOF 重写" tabindex="0"><figcaption>AOF 重写</figcaption></figure><blockquote><p>AOF 重写（rewrite） 是一个有歧义的名字，该功能是通过读取数据库中的键值对来实现的，程序无须对现有 AOF 文件进行任何读入、分析或者写入操作。</p></blockquote><p>由于 AOF 重写会进行大量的写入操作，为了避免对 Redis 正常处理命令请求造成影响，Redis 将 AOF 重写程序放到子进程里执行。</p><p>AOF 文件重写期间，Redis 还会维护一个 <strong>AOF 重写缓冲区</strong>，该缓冲区会在子进程创建新 AOF 文件期间，记录服务器执行的所有写命令。当子进程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新的 AOF 文件保存的数据库状态与现有的数据库状态一致。最后，服务器用新的 AOF 文件替换旧的 AOF 文件，以此来完成 AOF 文件重写操作。</p><p>开启 AOF 重写功能，可以调用 <code>BGREWRITEAOF</code> 命令手动执行，也可以设置下面两个配置项，让程序自动决定触发时机：</p><ul><li><code>auto-aof-rewrite-min-size</code>：如果 AOF 文件大小小于该值，则不会触发 AOF 重写。默认值为 64 MB;</li><li><code>auto-aof-rewrite-percentage</code>：执行 AOF 重写时，当前 AOF 大小（aof_current_size）和上一次重写时 AOF 大小（aof_base_size）的比值。如果当前 AOF 文件大小增加了这个百分比值，将触发 AOF 重写。将此值设置为 0 将禁用自动 AOF 重写。默认值为 100。</li></ul><p>Redis 7.0 版本之前，如果在重写期间有写入命令，AOF 可能会使用大量内存，重写期间到达的所有写入命令都会写入磁盘两次。</p>',16),h={href:"https://mp.weixin.qq.com/s/RnoPPL7jiFSKkx3G4p57Pg",target:"_blank",rel:"noopener noreferrer"},F=s("blockquote",null,[s("p",null,"AOF 重写期间的增量数据如何处理一直是个问题，在过去写期间的增量数据需要在内存中保留，写结束后再把这部分增量数据写入新的 AOF 文件中以保证数据完整性。可以看出来 AOF 写会额外消耗内存和磁盘 IO，这也是 Redis AOF 写的痛点，虽然之前也进行过多次改进但是资源消耗的本质问题一直没有解决。"),s("p",null,"阿里云的 Redis 企业版在最初也遇到了这个问题，在内部经过多次迭代开发，实现了 Multi-part AOF 机制来解决，同时也贡献给了社区并随此次 7.0 发布。具体方法是采用 base（全量数据）+inc（增量数据）独立文件存储的方式，彻底解决内存和 IO 资源的浪费，同时也支持对历史 AOF 文件的保存管理，结合 AOF 文件中的时间信息还可以实现 PITR 按时间点恢复（阿里云企业版 Tair 已支持），这进一步增强了 Redis 的数据可靠性，满足用户数据回档等需求。")],-1),f=s("strong",null,"相关 issue",-1),g={href:"https://github.com/Snailclimb/JavaGuide/issues/1439",target:"_blank",rel:"noopener noreferrer"},R=n('<h3 id="aof-校验机制了解吗" tabindex="-1"><a class="header-anchor" href="#aof-校验机制了解吗" aria-hidden="true">#</a> AOF 校验机制了解吗？</h3><p>AOF 校验机制是 Redis 在启动时对 AOF 文件进行检查，以判断文件是否完整，是否有损坏或者丢失的数据。这个机制的原理其实非常简单，就是通过使用一种叫做 <strong>校验和（checksum）</strong> 的数字来验证 AOF 文件。这个校验和是通过对整个 AOF 文件内容进行 CRC64 算法计算得出的数字。如果文件内容发生了变化，那么校验和也会随之改变。因此，Redis 在启动时会比较计算出的校验和与文件末尾保存的校验和（计算的时候会把最后一行保存校验和的内容给忽略点），从而判断 AOF 文件是否完整。如果发现文件有问题，Redis 就会拒绝启动并提供相应的错误信息。AOF 校验机制十分简单有效，可以提高 Redis 数据的可靠性。</p><p>类似地，RDB 文件也有类似的校验机制来保证 RDB 文件的正确性，这里就不重复进行介绍了。</p><h2 id="redis-4-0-对于持久化机制做了什么优化" tabindex="-1"><a class="header-anchor" href="#redis-4-0-对于持久化机制做了什么优化" aria-hidden="true">#</a> Redis 4.0 对于持久化机制做了什么优化？</h2><p>由于 RDB 和 AOF 各有优势，于是，Redis 4.0 开始支持 RDB 和 AOF 的混合持久化（默认关闭，可以通过配置项 <code>aof-use-rdb-preamble</code> 开启）。</p><p>如果把混合持久化打开，AOF 重写的时候就直接把 RDB 的内容写到 AOF 文件开头。这样做的好处是可以结合 RDB 和 AOF 的优点, 快速加载同时避免丢失过多的数据。当然缺点也是有的， AOF 里面的 RDB 部分是压缩格式不再是 AOF 格式，可读性较差。</p><p>官方文档地址：https://redis.io/topics/persistence</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/redis4.0-persitence.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="如何选择-rdb-和-aof" tabindex="-1"><a class="header-anchor" href="#如何选择-rdb-和-aof" aria-hidden="true">#</a> 如何选择 RDB 和 AOF？</h2>',9),b={href:"https://redis.io/docs/manual/persistence/",target:"_blank",rel:"noopener noreferrer"},m=n('<p><strong>RDB 比 AOF 优秀的地方</strong>：</p><ul><li>RDB 文件存储的内容是经过压缩的二进制数据， 保存着某个时间点的数据集，文件很小，适合做数据的备份，灾难恢复。AOF 文件存储的是每一次写命令，类似于 MySQL 的 binlog 日志，通常会比 RDB 文件大很多。当 AOF 变得太大时，Redis 能够在后台自动重写 AOF。新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样，但体积更小。不过， Redis 7.0 版本之前，如果在重写期间有写入命令，AOF 可能会使用大量内存，重写期间到达的所有写入命令都会写入磁盘两次。</li><li>使用 RDB 文件恢复数据，直接解析还原数据即可，不需要一条一条地执行命令，速度非常快。而 AOF 则需要依次执行每个写命令，速度非常慢。也就是说，与 AOF 相比，恢复大数据集的时候，RDB 速度更快。</li></ul><p><strong>AOF 比 RDB 优秀的地方</strong>：</p><ul><li>RDB 的数据安全性不如 AOF，没有办法实时或者秒级持久化数据。生成 RDB 文件的过程是比较繁重的， 虽然 BGSAVE 子进程写入 RDB 文件的工作不会阻塞主线程，但会对机器的 CPU 资源和内存资源产生影响，严重的情况下甚至会直接把 Redis 服务干宕机。AOF 支持秒级数据丢失（取决 fsync 策略，如果是 everysec，最多丢失 1 秒的数据），仅仅是追加命令到 AOF 文件，操作轻量。</li><li>RDB 文件是以特定的二进制格式保存的，并且在 Redis 版本演进中有多个版本的 RDB，所以存在老版本的 Redis 服务不兼容新版本的 RDB 格式的问题。</li><li>AOF 以一种易于理解和解析的格式包含所有操作的日志。你可以轻松地导出 AOF 文件进行分析，你也可以直接操作 AOF 文件来解决一些问题。比如，如果执行<code>FLUSHALL</code>命令意外地刷新了所有内容后，只要 AOF 文件没有被重写，删除最新命令并重启即可恢复之前的状态。</li></ul><p><strong>综上</strong>：</p><ul><li>Redis 保存的数据丢失一些也没什么影响的话，可以选择使用 RDB。</li><li>不建议单独使用 AOF，因为时不时地创建一个 RDB 快照可以进行数据库备份、更快的重启以及解决 AOF 引擎错误。</li><li>如果保存的数据要求安全性比较高的话，建议同时开启 RDB 和 AOF 持久化或者开启 RDB 和 AOF 混合持久化。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>《Redis 设计与实现》</li><li>Redis persistence - Redis 官方文档：https://redis.io/docs/management/persistence/</li><li>The difference between AOF and RDB persistence：https://www.sobyte.net/post/2022-04/redis-rdb-and-aof/</li><li>Redis AOF 持久化详解 - 程序员历小冰：http://remcarpediem.net/article/376c55d8/</li><li>Redis RDB 与 AOF 持久化 · Analyze：https://wingsxdu.com/posts/database/redis/rdb-and-aof/</li></ul><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',9);function v(_,k){const i=o("ExternalLinkIcon");return r(),t("div",null,[l,s("p",null,[e("Multi Part AOF 不是重点，了解即可，详细介绍可以看看阿里开发者的"),s("a",p,[e("Redis 7.0 Multi Part AOF 的设计和实现"),a(i)]),e(" 这篇文章。")]),s("p",null,[u,e("："),s("a",A,[e("Redis 的 AOF 方式 #783"),a(i)]),e("。")]),O,s("p",null,[e("Redis 7.0 版本之后，AOF 重写机制得到了优化改进。下面这段内容摘自阿里开发者的"),s("a",h,[e("从 Redis7.0 发布看 Redis 的过去与未来"),a(i)]),e(" 这篇文章。")]),F,s("p",null,[f,e("："),s("a",g,[e("Redis AOF 重写描述不准确 #1439"),a(i)]),e("。")]),R,s("p",null,[e("关于 RDB 和 AOF 的优缺点，官网上面也给了比较详细的说明"),s("a",b,[e("Redis persistence"),a(i)]),e("，这里结合自己的理解简单总结一下。")]),m])}const x=d(c,[["render",v],["__file","redis-persistence.html.vue"]]);export{x as default};

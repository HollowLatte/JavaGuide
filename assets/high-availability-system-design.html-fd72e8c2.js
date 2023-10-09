import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as h,a as e,b as a,d as r,e as n}from"./app-03179461.js";const s={},d=n('<h2 id="什么是高可用-可用性的判断标准是啥" tabindex="-1"><a class="header-anchor" href="#什么是高可用-可用性的判断标准是啥" aria-hidden="true">#</a> 什么是高可用？可用性的判断标准是啥？</h2><p>高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。</p><p>一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高可用的了！当然，也会有系统如果可用性不太好的话，可能连 9 都上不了。</p><p>除此之外，系统的可用性还可以用某功能的失败次数与总的请求次数之比来衡量，比如对网站请求 1000 次，其中有 10 次请求失败，那么可用性就是 99%。</p><h2 id="哪些情况会导致系统不可用" tabindex="-1"><a class="header-anchor" href="#哪些情况会导致系统不可用" aria-hidden="true">#</a> 哪些情况会导致系统不可用？</h2><ol><li>黑客攻击；</li><li>硬件故障，比如服务器坏掉。</li><li>并发量/用户请求量激增导致整个服务宕掉或者部分服务不可用。</li><li>代码中的坏味道导致内存泄漏或者其他问题导致程序挂掉。</li><li>网站架构某个重要的角色比如 Nginx 或者数据库突然不可用。</li><li>自然灾害或者人为破坏。</li><li>......</li></ol><h2 id="有哪些提高系统可用性的方法" tabindex="-1"><a class="header-anchor" href="#有哪些提高系统可用性的方法" aria-hidden="true">#</a> 有哪些提高系统可用性的方法？</h2><h3 id="注重代码质量-测试严格把关" tabindex="-1"><a class="header-anchor" href="#注重代码质量-测试严格把关" aria-hidden="true">#</a> 注重代码质量，测试严格把关</h3><p>我觉得这个是最最最重要的，代码质量有问题比如比较常见的内存泄漏、循环依赖都是对系统可用性极大的损害。大家都喜欢谈限流、降级、熔断，但是我觉得从代码质量这个源头把关是首先要做好的一件很重要的事情。如何提高代码质量？比较实际可用的就是 CodeReview，不要在乎每天多花的那 1 个小时左右的时间，作用可大着呢！</p><p>另外，安利几个对提高代码质量有实际效果的神器：</p>',10),c={href:"https://www.sonarqube.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://arthas.aliyun.com/doc/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"IDEA 自带的代码分析等工具。",-1),_=e("h3",{id:"使用集群-减少单点故障",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用集群-减少单点故障","aria-hidden":"true"},"#"),a(" 使用集群，减少单点故障")],-1),b=e("p",null,"先拿常用的 Redis 举个例子！我们如何保证我们的 Redis 缓存高可用呢？答案就是使用集群，避免单点故障。当我们使用一个 Redis 实例作为缓存的时候，这个 Redis 实例挂了之后，整个缓存服务可能就挂了。使用了集群之后，即使一台 Redis 实例挂了，不到一秒就会有另外一台 Redis 实例顶上。",-1),f=e("h3",{id:"限流",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#限流","aria-hidden":"true"},"#"),a(" 限流")],-1),x={href:"https://github.com/alibaba/Sentinel",title:"Sentinel",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="超时和重试机制设置" tabindex="-1"><a class="header-anchor" href="#超时和重试机制设置" aria-hidden="true">#</a> 超时和重试机制设置</h3><p>一旦用户请求超过某个时间的得不到响应，就抛出异常。这个是非常重要的，很多线上系统故障都是因为没有进行超时设置或者超时设置的方式不对导致的。我们在读取第三方服务的时候，尤其适合设置超时和重试机制。一般我们使用一些 RPC 框架的时候，这些框架都自带的超时重试的配置。如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法再处理请求。重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。</p><h3 id="熔断机制" tabindex="-1"><a class="header-anchor" href="#熔断机制" aria-hidden="true">#</a> 熔断机制</h3><p>超时和重试机制设置之外，熔断机制也是很重要的。 熔断机制说的是系统自动收集所依赖服务的资源使用情况和性能指标，当所依赖的服务恶化或者调用失败次数达到某个阈值的时候就迅速失败，让当前系统立即切换依赖其他备用服务。 比较常用的流量控制和熔断降级框架是 Netflix 的 Hystrix 和 alibaba 的 Sentinel。</p><h3 id="异步调用" tabindex="-1"><a class="header-anchor" href="#异步调用" aria-hidden="true">#</a> 异步调用</h3><p>异步调用的话我们不需要关心最后的结果，这样我们就可以用户请求完成之后就立即返回结果，具体处理我们可以后续再做，秒杀场景用这个还是蛮多的。但是，使用异步之后我们可能需要 <strong>适当修改业务流程进行配合</strong>，比如<strong>用户在提交订单之后，不能立即返回用户订单提交成功，需要在消息队列的订单消费者进程真正处理完该订单之后，甚至出库后，再通过电子邮件或短信通知用户订单成功</strong>。除了可以在程序中实现异步之外，我们常常还使用消息队列，消息队列可以通过异步处理提高系统性能（削峰、减少响应所需时间）并且可以降低系统耦合性。</p><h3 id="使用缓存" tabindex="-1"><a class="header-anchor" href="#使用缓存" aria-hidden="true">#</a> 使用缓存</h3><p>如果我们的系统属于并发量比较高的话，如果我们单纯使用数据库的话，当大量请求直接落到数据库可能数据库就会直接挂掉。使用缓存缓存热点数据，因为缓存存储在内存中，所以速度相当地快！</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><ul><li><strong>核心应用和服务优先使用更好的硬件</strong></li><li><strong>监控系统资源使用情况增加报警设置。</strong></li><li><strong>注意备份，必要时候回滚。</strong></li><li><strong>灰度发布：</strong> 将服务器集群分成若干部分，每天只发布一部分机器，观察运行稳定没有故障，第二天继续发布一部分机器，持续几天才把整个集群全部发布完毕，期间如果发现问题，只需要回滚已发布的一部分服务器即可</li><li><strong>定期检查/更换硬件：</strong> 如果不是购买的云服务的话，定期还是需要对硬件进行一波检查的，对于一些需要更换或者升级的硬件，要及时更换或者升级。</li><li>.....</li></ul><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',11);function v(k,R){const i=o("ExternalLinkIcon");return l(),h("div",null,[d,e("ul",null,[e("li",null,[e("a",c,[a("Sonarqube"),r(i)]),a("；")]),e("li",null,[a("Alibaba 开源的 Java 诊断工具 "),e("a",u,[a("Arthas"),r(i)]),a("；")]),e("li",null,[e("a",p,[a("阿里巴巴 Java 代码规范"),r(i)]),a("（Alibaba Java Code Guidelines）；")]),g]),_,b,f,e("p",null,[a("流量控制（flow control），其原理是监控应用流量的 QPS 或并发线程数等指标，当达到指定的阈值时对流量进行控制，以避免被瞬时的流量高峰冲垮，从而保障应用的高可用性。——来自 "),e("a",x,[a("alibaba-Sentinel"),r(i)]),a(" 的 wiki。")]),m])}const y=t(s,[["render",v],["__file","high-availability-system-design.html.vue"]]);export{y as default};

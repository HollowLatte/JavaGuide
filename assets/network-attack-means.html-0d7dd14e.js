import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,a as e,b as o,d as a,e as t}from"./app-03179461.js";const p={},g={href:"https://mp.weixin.qq.com/s/AZwWrOlLxRSSi-ywBgZ0fA",target:"_blank",rel:"noopener noreferrer"},c=t('<p>这篇文章的内容主要是介绍 TCP/IP 常见攻击手段，尤其是 DDoS 攻击，也会补充一些其他的常见网络攻击手段。</p><h2 id="ip-欺骗" tabindex="-1"><a class="header-anchor" href="#ip-欺骗" aria-hidden="true">#</a> IP 欺骗</h2><h3 id="ip-是什么" tabindex="-1"><a class="header-anchor" href="#ip-是什么" aria-hidden="true">#</a> IP 是什么?</h3><p>在网络中，所有的设备都会分配一个地址。这个地址就仿佛小蓝的家地址「<strong>多少号多少室</strong>」，这个号就是分配给整个子网的，「<strong>室</strong>」对应的号码即分配给子网中计算机的，这就是网络中的地址。「号」对应的号码为网络号，「<strong>室</strong>」对应的号码为主机号，这个地址的整体就是 <strong>IP 地址</strong>。</p><h3 id="通过-ip-地址我们能知道什么" tabindex="-1"><a class="header-anchor" href="#通过-ip-地址我们能知道什么" aria-hidden="true">#</a> 通过 IP 地址我们能知道什么？</h3><p>通过 IP 地址，我们就可以知道判断访问对象服务器的位置，从而将消息发送到服务器。一般发送者发出的消息首先经过子网的集线器，转发到最近的路由器，然后根据路由位置访问下一个路由器的位置，直到终点</p><p><strong>IP 头部格式</strong> :</p><figure><img src="https://oss.javaguide.cn/p3-juejin/843fd07074874ee0b695eca659411b42~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="ip-欺骗技术是什么" tabindex="-1"><a class="header-anchor" href="#ip-欺骗技术是什么" aria-hidden="true">#</a> IP 欺骗技术是什么？</h3><p>骗呗，拐骗，诱骗！</p><p>IP 欺骗技术就是<strong>伪造</strong>某台主机的 IP 地址的技术。通过 IP 地址的伪装使得某台主机能够<strong>伪装</strong>另外的一台主机，而这台主机往往具有某种特权或者被另外的主机所信任。</p><p>假设现在有一个合法用户 <strong>(1.1.1.1)</strong> 已经同服务器建立正常的连接，攻击者构造攻击的 TCP 数据，伪装自己的 IP 为 <strong>1.1.1.1</strong>，并向服务器发送一个带有 RSI 位的 TCP 数据段。服务器接收到这样的数据后，认为从 <strong>1.1.1.1</strong> 发送的连接有错误，就会清空缓冲区中建立好的连接。</p><p>这时，如果合法用户 <strong>1.1.1.1</strong> 再发送合法数据，服务器就已经没有这样的连接了，该用户就必须从新开始建立连接。攻击时，伪造大量的 IP 地址，向目标发送 RST 数据，使服务器不对合法用户服务。虽然 IP 地址欺骗攻击有着相当难度，但我们应该清醒地意识到，这种攻击非常广泛，入侵往往从这种攻击开始。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/7547a145adf9404aa3a05f01f5ca2e32~tplv-k3u1fbpfcp-zoom-1.png" alt="IP 欺骗 DDoS 攻击" tabindex="0"><figcaption>IP 欺骗 DDoS 攻击</figcaption></figure><h3 id="如何缓解-ip-欺骗" tabindex="-1"><a class="header-anchor" href="#如何缓解-ip-欺骗" aria-hidden="true">#</a> 如何缓解 IP 欺骗？</h3>',15),l=e("strong",null,"入口过滤",-1),h={href:"https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="syn-flood-洪水" tabindex="-1"><a class="header-anchor" href="#syn-flood-洪水" aria-hidden="true">#</a> SYN Flood(洪水)</h2><h3 id="syn-flood-是什么" tabindex="-1"><a class="header-anchor" href="#syn-flood-是什么" aria-hidden="true">#</a> SYN Flood 是什么？</h3><p>SYN Flood 是互联网上最原始、最经典的 DDoS（Distributed Denial of Service，分布式拒绝服务）攻击之一，旨在耗尽可用服务器资源，致使服务器无法传输合法流量</p><p>SYN Flood 利用了 TCP 协议的三次握手机制，攻击者通常利用工具或者控制僵尸主机向服务器发送海量的变源 IP 地址或变源端口的 TCP SYN 报文，服务器响应了这些报文后就会生成大量的半连接，当系统资源被耗尽后，服务器将无法提供正常的服务。 增加服务器性能，提供更多的连接能力对于 SYN Flood 的海量报文来说杯水车薪，防御 SYN Flood 的关键在于判断哪些连接请求来自于真实源，屏蔽非真实源的请求以保障正常的业务请求能得到服务。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/2b3d2d4dc8f24890b5957df1c7d6feb8~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="tcp-syn-flood-攻击原理是什么" tabindex="-1"><a class="header-anchor" href="#tcp-syn-flood-攻击原理是什么" aria-hidden="true">#</a> TCP SYN Flood 攻击原理是什么？</h3><p><strong>TCP SYN Flood</strong> 攻击利用的是 <strong>TCP</strong> 的三次握手（<strong>SYN -&gt; SYN/ACK -&gt; ACK</strong>），假设连接发起方是 A，连接接受方是 B，即 B 在某个端口（<strong>Port</strong>）上监听 A 发出的连接请求，过程如下图所示，左边是 A，右边是 B。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/a39355a1ea404323a11ca6644e009183~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>A 首先发送 <strong>SYN</strong>（Synchronization）消息给 B，要求 B 做好接收数据的准备；B 收到后反馈 <strong>SYN-ACK</strong>（Synchronization-Acknowledgement） 消息给 A，这个消息的目的有两个：</p><ul><li>向 A 确认已做好接收数据的准备，</li><li>同时要求 A 也做好接收数据的准备，此时 B 已向 A 确认好接收状态，并等待 A 的确认，连接处于<strong>半开状态（Half-Open）</strong>，顾名思义只开了一半；A 收到后再次发送 <strong>ACK</strong> (Acknowledgement) 消息给 B，向 B 确认也做好了接收数据的准备，至此三次握手完成，「<strong>连接</strong>」就建立了，</li></ul><p>大家注意到没有，最关键的一点在于双方是否都按对方的要求进入了<strong>可以接收消息</strong>的状态。而这个状态的确认主要是双方将要使用的<strong>消息序号(<strong>SequenceNum)，<strong>TCP</strong> 为保证消息按发送顺序抵达接收方的上层应用，需要用</strong>消息序号</strong>来标记消息的发送先后顺序的。</p><p><strong>TCP</strong>是「<strong>双工</strong>」(Duplex)连接，同时支持双向通信，也就是双方同时可向对方发送消息，其中 <strong>SYN</strong> 和 <strong>SYN-ACK</strong> 消息开启了 A→B 的单向通信通道（B 获知了 A 的消息序号）；<strong>SYN-ACK</strong> 和 <strong>ACK</strong> 消息开启了 B→A 单向通信通道（A 获知了 B 的消息序号）。</p><p>上面讨论的是双方在诚实守信，正常情况下的通信。</p><p>但实际情况是，网络可能不稳定会丢包，使握手消息不能抵达对方，也可能是对方故意不按规矩来，故意延迟或不发送握手确认消息。</p><p>假设 B 通过某 <strong>TCP</strong> 端口提供服务，B 在收到 A 的 <strong>SYN</strong> 消息时，积极的反馈了 <strong>SYN-ACK</strong> 消息，使连接进入<strong>半开状态</strong>，因为 B 不确定自己发给 A 的 <strong>SYN-ACK</strong> 消息或 A 反馈的 ACK 消息是否会丢在半路，所以会给每个待完成的半开连接都设一个<strong>Timer</strong>，如果超过时间还没有收到 A 的 <strong>ACK</strong> 消息，则重新发送一次 <strong>SYN-ACK</strong> 消息给 A，直到重试超过一定次数时才会放弃。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/7ff1daddcec44d61994f254e664987b4~tplv-k3u1fbpfcp-zoom-1.png" alt="图片" tabindex="0"><figcaption>图片</figcaption></figure><p>B 为帮助 A 能顺利连接，需要<strong>分配内核资源</strong>维护半开连接，那么当 B 面临海量的连接 A 时，如上图所示，<strong>SYN Flood</strong> 攻击就形成了。攻击方 A 可以控制肉鸡向 B 发送大量 SYN 消息但不响应 ACK 消息，或者干脆伪造 SYN 消息中的 <strong>Source IP</strong>，使 B 反馈的 <strong>SYN-ACK</strong> 消息石沉大海，导致 B 被大量注定不能完成的半开连接占据，直到资源耗尽，停止响应正常的连接请求。</p><h3 id="syn-flood-的常见形式有哪些" tabindex="-1"><a class="header-anchor" href="#syn-flood-的常见形式有哪些" aria-hidden="true">#</a> SYN Flood 的常见形式有哪些？</h3><p><strong>恶意用户可通过三种不同方式发起 SYN Flood 攻击</strong>：</p>',19),u=e("strong",null,"直接攻击：",-1),b={href:"https://www.cloudflare.com/learning/ddos/glossary/mirai-botnet/",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[e("strong",null,"欺骗攻击："),o(" 恶意用户还可以伪造其发送的各个 SYN 数据包的 IP 地址，以便阻止缓解措施并加大身份暴露难度。虽然数据包可能经过伪装，但还是可以通过这些数据包追根溯源。此类检测工作很难开展，但并非不可实现；特别是，如果 Internet 服务提供商 (ISP) 愿意提供帮助，则更容易实现。")],-1),P=e("li",null,[e("strong",null,"分布式攻击（DDoS）："),o(" 如果使用僵尸网络发起攻击，则追溯攻击源头的可能性很低。随着混淆级别的攀升，攻击者可能还会命令每台分布式设备伪造其发送数据包的 IP 地址。哪怕攻击者使用僵尸网络（如 Mirai 僵尸网络），通常也不会刻意屏蔽受感染设备的 IP。")],-1),D=t('<h3 id="如何缓解-syn-flood" tabindex="-1"><a class="header-anchor" href="#如何缓解-syn-flood" aria-hidden="true">#</a> 如何缓解 SYN Flood？</h3><h4 id="扩展积压工作队列" tabindex="-1"><a class="header-anchor" href="#扩展积压工作队列" aria-hidden="true">#</a> 扩展积压工作队列</h4><p>目标设备安装的每个操作系统都允许具有一定数量的半开连接。若要响应大量 SYN 数据包，一种方法是增加操作系统允许的最大半开连接数目。为成功扩展最大积压工作，系统必须额外预留内存资源以处理各类新请求。如果系统没有足够的内存，无法应对增加的积压工作队列规模，将对系统性能产生负面影响，但仍然好过拒绝服务。</p><h4 id="回收最先创建的-tcp-半开连接" tabindex="-1"><a class="header-anchor" href="#回收最先创建的-tcp-半开连接" aria-hidden="true">#</a> 回收最先创建的 TCP 半开连接</h4><p>另一种缓解策略是在填充积压工作后覆盖最先创建的半开连接。这项策略要求完全建立合法连接的时间低于恶意 SYN 数据包填充积压工作的时间。当攻击量增加或积压工作规模小于实际需求时，这项特定的防御措施将不奏效。</p><h4 id="syn-cookie" tabindex="-1"><a class="header-anchor" href="#syn-cookie" aria-hidden="true">#</a> SYN Cookie</h4><p>此策略要求服务器创建 Cookie。为避免在填充积压工作时断开连接，服务器使用 SYN-ACK 数据包响应每一项连接请求，而后从积压工作中删除 SYN 请求，同时从内存中删除请求，保证端口保持打开状态并做好重新建立连接的准备。如果连接是合法请求并且已将最后一个 ACK 数据包从客户端机器发回服务器，服务器将重建（存在一些限制）SYN 积压工作队列条目。虽然这项缓解措施势必会丢失一些 TCP 连接信息，但好过因此导致对合法用户发起拒绝服务攻击。</p><h2 id="udp-flood-洪水" tabindex="-1"><a class="header-anchor" href="#udp-flood-洪水" aria-hidden="true">#</a> UDP Flood(洪水)</h2><h3 id="udp-flood-是什么" tabindex="-1"><a class="header-anchor" href="#udp-flood-是什么" aria-hidden="true">#</a> UDP Flood 是什么？</h3><p><strong>UDP Flood</strong> 也是一种拒绝服务攻击，将大量的用户数据报协议（<strong>UDP</strong>）数据包发送到目标服务器，目的是压倒该设备的处理和响应能力。防火墙保护目标服务器也可能因 <strong>UDP</strong> 泛滥而耗尽，从而导致对合法流量的拒绝服务。</p><h3 id="udp-flood-攻击原理是什么" tabindex="-1"><a class="header-anchor" href="#udp-flood-攻击原理是什么" aria-hidden="true">#</a> UDP Flood 攻击原理是什么？</h3><p><strong>UDP Flood</strong> 主要通过利用服务器响应发送到其中一个端口的 <strong>UDP</strong> 数据包所采取的步骤。在正常情况下，当服务器在特定端口接收到 <strong>UDP</strong> 数据包时，会经过两个步骤：</p><ul><li>服务器首先检查是否正在运行正在侦听指定端口的请求的程序。</li><li>如果没有程序在该端口接收数据包，则服务器使用 <strong>ICMP</strong>（ping）数据包进行响应，以通知发送方目的地不可达。</li></ul><p>举个例子。假设今天要联系酒店的小蓝，酒店客服接到电话后先查看房间的列表来确保小蓝在客房内，随后转接给小蓝。</p><p>首先，接待员接收到呼叫者要求连接到特定房间的电话。接待员然后需要查看所有房间的清单，以确保客人在房间中可用，并愿意接听电话。碰巧的是，此时如果突然间所有的电话线同时亮起来，那么他们就会很快就变得不堪重负了。</p><p>当服务器接收到每个新的 <strong>UDP</strong> 数据包时，它将通过步骤来处理请求，并利用该过程中的服务器资源。发送 <strong>UDP</strong> 报文时，每个报文将包含源设备的 <strong>IP</strong> 地址。在这种类型的 <strong>DDoS</strong> 攻击期间，攻击者通常不会使用自己的真实 <strong>IP</strong> 地址，而是会欺骗 <strong>UDP</strong> 数据包的源 <strong>IP</strong> 地址，从而阻止攻击者的真实位置被暴露并潜在地饱和来自目标的响应数据包服务器。</p><p>由于目标服务器利用资源检查并响应每个接收到的 <strong>UDP</strong> 数据包的结果，当接收到大量 <strong>UDP</strong> 数据包时，目标的资源可能会迅速耗尽，导致对正常流量的拒绝服务。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/23dbbc8243a84ed181e088e38bffb37a~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="如何缓解-udp-flooding" tabindex="-1"><a class="header-anchor" href="#如何缓解-udp-flooding" aria-hidden="true">#</a> 如何缓解 UDP Flooding？</h3><p>大多数操作系统部分限制了 <strong>ICMP</strong> 报文的响应速率，以中断需要 ICMP 响应的 <strong>DDoS</strong> 攻击。这种缓解的一个缺点是在攻击过程中，合法的数据包也可能被过滤。如果 <strong>UDP Flood</strong> 的容量足够高以使目标服务器的防火墙的状态表饱和，则在服务器级别发生的任何缓解都将不足以应对目标设备上游的瓶颈。</p><h2 id="http-flood-洪水" tabindex="-1"><a class="header-anchor" href="#http-flood-洪水" aria-hidden="true">#</a> HTTP Flood(洪水)</h2><h3 id="http-flood-是什么" tabindex="-1"><a class="header-anchor" href="#http-flood-是什么" aria-hidden="true">#</a> HTTP Flood 是什么？</h3><p>HTTP Flood 是一种大规模的 DDoS（Distributed Denial of Service，分布式拒绝服务）攻击，旨在利用 HTTP 请求使目标服务器不堪重负。目标因请求而达到饱和，且无法响应正常流量后，将出现拒绝服务，拒绝来自实际用户的其他请求。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/aa64869551d94c8d89fa80eaf4395bfa~tplv-k3u1fbpfcp-zoom-1.png" alt="HTTP 洪水攻击" tabindex="0"><figcaption>HTTP 洪水攻击</figcaption></figure><h3 id="http-flood-的攻击原理是什么" tabindex="-1"><a class="header-anchor" href="#http-flood-的攻击原理是什么" aria-hidden="true">#</a> HTTP Flood 的攻击原理是什么？</h3><p>HTTP 洪水攻击是“第 7 层”DDoS 攻击的一种。第 7 层是 OSI 模型的应用程序层，指的是 HTTP 等互联网协议。HTTP 是基于浏览器的互联网请求的基础，通常用于加载网页或通过互联网发送表单内容。缓解应用程序层攻击特别复杂，因为恶意流量和正常流量很难区分。</p><p>为了获得最大效率，恶意行为者通常会利用或创建僵尸网络，以最大程度地扩大攻击的影响。通过利用感染了恶意软件的多台设备，攻击者可以发起大量攻击流量来进行攻击。</p><p>HTTP 洪水攻击有两种：</p><ul><li><strong>HTTP GET 攻击</strong>：在这种攻击形式下，多台计算机或其他设备相互协调，向目标服务器发送对图像、文件或其他资产的多个请求。当目标被传入的请求和响应所淹没时，来自正常流量源的其他请求将被拒绝服务。</li><li><strong>HTTP POST 攻击</strong>：一般而言，在网站上提交表单时，服务器必须处理传入的请求并将数据推送到持久层（通常是数据库）。与发送 POST 请求所需的处理能力和带宽相比，处理表单数据和运行必要数据库命令的过程相对密集。这种攻击利用相对资源消耗的差异，直接向目标服务器发送许多 POST 请求，直到目标服务器的容量饱和并拒绝服务为止。</li></ul><h3 id="如何防护-http-flood" tabindex="-1"><a class="header-anchor" href="#如何防护-http-flood" aria-hidden="true">#</a> 如何防护 HTTP Flood？</h3><p>如前所述，缓解第 7 层攻击非常复杂，而且通常要从多方面进行。一种方法是对发出请求的设备实施质询，以测试它是否是机器人，这与在线创建帐户时常用的 CAPTCHA 测试非常相似。通过提出 JavaScript 计算挑战之类的要求，可以缓解许多攻击。</p><p>其他阻止 HTTP 洪水攻击的途径包括使用 Web 应用程序防火墙 (WAF)、管理 IP 信誉数据库以跟踪和有选择地阻止恶意流量，以及由工程师进行动态分析。Cloudflare 具有超过 2000 万个互联网设备的规模优势，能够分析来自各种来源的流量并通过快速更新的 WAF 规则和其他防护策略来缓解潜在的攻击，从而消除应用程序层 DDoS 流量。</p><h2 id="dns-flood-洪水" tabindex="-1"><a class="header-anchor" href="#dns-flood-洪水" aria-hidden="true">#</a> DNS Flood(洪水)</h2><h3 id="dns-flood-是什么" tabindex="-1"><a class="header-anchor" href="#dns-flood-是什么" aria-hidden="true">#</a> DNS Flood 是什么？</h3><p>域名系统（DNS）服务器是互联网的“电话簿“；互联网设备通过这些服务器来查找特定 Web 服务器以便访问互联网内容。DNS Flood 攻击是一种分布式拒绝服务（DDoS）攻击，攻击者用大量流量淹没某个域的 DNS 服务器，以尝试中断该域的 DNS 解析。如果用户无法找到电话簿，就无法查找到用于调用特定资源的地址。通过中断 DNS 解析，DNS Flood 攻击将破坏网站、API 或 Web 应用程序响应合法流量的能力。很难将 DNS Flood 攻击与正常的大流量区分开来，因为这些大规模流量往往来自多个唯一地址，查询该域的真实记录，模仿合法流量。</p><h3 id="dns-flood-的攻击原理是什么" tabindex="-1"><a class="header-anchor" href="#dns-flood-的攻击原理是什么" aria-hidden="true">#</a> DNS Flood 的攻击原理是什么？</h3><figure><img src="https://oss.javaguide.cn/p3-juejin/97ea11a212924900b10d159226783887~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure>',37),m={href:"https://www.cloudflare.com/learning/ddos/glossary/internet-of-things-iot/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.cloudflare.com/learning/ddos/what-is-a-ddos-botnet/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.cloudflare.com/learning/ddos/glossary/mirai-botnet/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cloudflare.com/zh-cn/learning/ddos/dns-amplification-ddos-attack/",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="如何防护-dns-flood" tabindex="-1"><a class="header-anchor" href="#如何防护-dns-flood" aria-hidden="true">#</a> 如何防护 DNS Flood?</h3><p>DNS Flood 对传统上基于放大的攻击方法做出了改变。借助轻易获得的高带宽僵尸网络，攻击者现能针对大型组织发动攻击。除非被破坏的 IoT 设备得以更新或替换，否则抵御这些攻击的唯一方法是使用一个超大型、高度分布式的 DNS 系统，以便实时监测、吸收和阻止攻击流量。</p><h2 id="tcp-重置攻击" tabindex="-1"><a class="header-anchor" href="#tcp-重置攻击" aria-hidden="true">#</a> TCP 重置攻击</h2><p>在 <strong>TCP</strong> 重置攻击中，攻击者通过向通信的一方或双方发送伪造的消息，告诉它们立即断开连接，从而使通信双方连接中断。正常情况下，如果客户端收发现到达的报文段对于相关连接而言是不正确的，<strong>TCP</strong> 就会发送一个重置报文段，从而导致 <strong>TCP</strong> 连接的快速拆卸。</p><p><strong>TCP</strong> 重置攻击利用这一机制，通过向通信方发送伪造的重置报文段，欺骗通信双方提前关闭 TCP 连接。如果伪造的重置报文段完全逼真，接收者就会认为它有效，并关闭 <strong>TCP</strong> 连接，防止连接被用来进一步交换信息。服务端可以创建一个新的 <strong>TCP</strong> 连接来恢复通信，但仍然可能会被攻击者重置连接。万幸的是，攻击者需要一定的时间来组装和发送伪造的报文，所以一般情况下这种攻击只对长连接有杀伤力，对于短连接而言，你还没攻击呢，人家已经完成了信息交换。</p><p>从某种意义上来说，伪造 <strong>TCP</strong> 报文段是很容易的，因为 <strong>TCP/IP</strong> 都没有任何内置的方法来验证服务端的身份。有些特殊的 IP 扩展协议（例如 <code>IPSec</code>）确实可以验证身份，但并没有被广泛使用。客户端只能接收报文段，并在可能的情况下使用更高级别的协议（如 <code>TLS</code>）来验证服务端的身份。但这个方法对 <strong>TCP</strong> 重置包并不适用，因为 <strong>TCP</strong> 重置包是 <strong>TCP</strong> 协议本身的一部分，无法使用更高级别的协议进行验证。</p><h2 id="模拟攻击" tabindex="-1"><a class="header-anchor" href="#模拟攻击" aria-hidden="true">#</a> 模拟攻击</h2><blockquote><p>以下实验是在 <code>OSX</code> 系统中完成的，其他系统请自行测试。</p></blockquote><p>现在来总结一下伪造一个 <strong>TCP</strong> 重置报文要做哪些事情：</p><ul><li>嗅探通信双方的交换信息。</li><li>截获一个 <code>ACK</code> 标志位置位 1 的报文段，并读取其 <code>ACK</code> 号。</li><li>伪造一个 TCP 重置报文段（<code>RST</code> 标志位置为 1），其序列号等于上面截获的报文的 <code>ACK</code> 号。这只是理想情况下的方案，假设信息交换的速度不是很快。大多数情况下为了增加成功率，可以连续发送序列号不同的重置报文。</li><li>将伪造的重置报文发送给通信的一方或双方，时其中断连接。</li></ul><p>为了实验简单，我们可以使用本地计算机通过 <code>localhost</code> 与自己通信，然后对自己进行 TCP 重置攻击。需要以下几个步骤：</p><ul><li>在两个终端之间建立一个 TCP 连接。</li><li>编写一个能嗅探通信双方数据的攻击程序。</li><li>修改攻击程序，伪造并发送重置报文。</li></ul><p>下面正式开始实验。</p><blockquote><p>建立 TCP 连接</p></blockquote><p>可以使用 netcat 工具来建立 TCP 连接，这个工具很多操作系统都预装了。打开第一个终端窗口，运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> <span class="token parameter variable">-nvl</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会启动一个 TCP 服务，监听端口为 <code>8000</code>。接着再打开第二个终端窗口，运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> <span class="token number">127.0</span>.0.1 <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令会尝试与上面的服务建立连接，在其中一个窗口输入一些字符，就会通过 TCP 连接发送给另一个窗口并打印出来。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/df0508cbf26446708cf98f8ad514dbea~tplv-k3u1fbpfcp-zoom-1.gif" alt="" tabindex="0"><figcaption></figcaption></figure><blockquote><p>嗅探流量</p></blockquote><p>编写一个攻击程序，使用 Python 网络库 <code>scapy</code> 来读取两个终端窗口之间交换的数据，并将其打印到终端上。代码比较长，下面为一部份，完整代码后台回复 TCP 攻击，代码的核心是调用 <code>scapy</code> 的嗅探方法：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/27feb834aa9d4b629fd938611ac9972e~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>这段代码告诉 <code>scapy</code> 在 <code>lo0</code> 网络接口上嗅探数据包，并记录所有 TCP 连接的详细信息。</p><ul><li><strong>iface</strong> : 告诉 scapy 在 <code>lo0</code>（localhost）网络接口上进行监听。</li><li><strong>lfilter</strong> : 这是个过滤器，告诉 scapy 忽略所有不属于指定的 TCP 连接（通信双方皆为 <code>localhost</code>，且端口号为 <code>8000</code>）的数据包。</li><li><strong>prn</strong> : scapy 通过这个函数来操作所有符合 <code>lfilter</code> 规则的数据包。上面的例子只是将数据包打印到终端，下文将会修改函数来伪造重置报文。</li><li><strong>count</strong> : scapy 函数返回之前需要嗅探的数据包数量。</li></ul><blockquote><p>发送伪造的重置报文</p></blockquote><p>下面开始修改程序，发送伪造的 TCP 重置报文来进行 TCP 重置攻击。根据上面的解读，只需要修改 prn 函数就行了，让其检查数据包，提取必要参数，并利用这些参数来伪造 TCP 重置报文并发送。</p><p>例如，假设该程序截获了一个从（<code>src_ip</code>, <code>src_port</code>）发往 （<code>dst_ip</code>, <code>dst_port</code>）的报文段，该报文段的 ACK 标志位已置为 1，ACK 号为 <code>100,000</code>。攻击程序接下来要做的是：</p><ul><li>由于伪造的数据包是对截获的数据包的响应，所以伪造数据包的源 <code>IP/Port</code> 应该是截获数据包的目的 <code>IP/Port</code>，反之亦然。</li><li>将伪造数据包的 <code>RST</code> 标志位置为 1，以表示这是一个重置报文。</li><li>将伪造数据包的序列号设置为截获数据包的 ACK 号，因为这是发送方期望收到的下一个序列号。</li><li>调用 <code>scapy</code> 的 <code>send</code> 方法，将伪造的数据包发送给截获数据包的发送方。</li></ul><p>对于我的程序而言，只需将这一行取消注释，并注释这一行的上面一行，就可以全面攻击了。按照步骤 1 的方法设置 TCP 连接，打开第三个窗口运行攻击程序，然后在 TCP 连接的其中一个终端输入一些字符串，你会发现 TCP 连接被中断了！</p><blockquote><p>进一步实验</p></blockquote><ol><li>可以继续使用攻击程序进行实验，将伪造数据包的序列号加减 1 看看会发生什么，是不是确实需要和截获数据包的 <code>ACK</code> 号完全相同。</li><li>打开 <code>Wireshark</code>，监听 lo0 网络接口，并使用过滤器 <code>ip.src == 127.0.0.1 &amp;&amp; ip.dst == 127.0.0.1 &amp;&amp; tcp.port == 8000</code> 来过滤无关数据。你可以看到 TCP 连接的所有细节。</li><li>在连接上更快速地发送数据流，使攻击更难执行。</li></ol><h2 id="中间人攻击" tabindex="-1"><a class="header-anchor" href="#中间人攻击" aria-hidden="true">#</a> 中间人攻击</h2><p>猪八戒要向小蓝表白，于是写了一封信给小蓝，结果第三者小黑拦截到了这封信，把这封信进行了篡改，于是乎在他们之间进行搞破坏行动。这个马文才就是中间人，实施的就是中间人攻击。好我们继续聊聊什么是中间人攻击。</p><h3 id="什么是中间人" tabindex="-1"><a class="header-anchor" href="#什么是中间人" aria-hidden="true">#</a> 什么是中间人?</h3><p>攻击中间人攻击英文名叫 Man-in-the-MiddleAttack，简称「MITM 攻击」。指攻击者与通讯的两端分别创建独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方 直接对话，但事实上整个会话都被攻击者完全控制。我们画一张图：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/d69b74e63981472b852797f2fa08976f~tplv-k3u1fbpfcp-zoom-1.png" alt="图片" tabindex="0"><figcaption>图片</figcaption></figure><p>从这张图可以看到，中间人其实就是攻击者。通过这种原理，有很多实现的用途，比如说，你在手机上浏览不健康网站的时候，手机就会提示你，此网站可能含有病毒，是否继续访问还是做其他的操作等等。</p><h3 id="中间人攻击的原理是什么" tabindex="-1"><a class="header-anchor" href="#中间人攻击的原理是什么" aria-hidden="true">#</a> 中间人攻击的原理是什么？</h3><p>举个例子，我和公司签了一个一份劳动合同，一人一份合同。不晓得哪个可能改了合同内容，不知道真假了，怎么搞？只好找专业的机构来鉴定，自然就要花钱。</p><p>在安全领域有句话：<strong>我们没有办法杜绝网络犯罪，只好想办法提高网络犯罪的成本</strong>。既然没法杜绝这种情况，那我们就想办法提高作案的成本，今天我们就简单了解下基本的网络安全知识，也是面试中的高频面试题了。</p><p>为了避免双方说活不算数的情况，双方引入第三家机构，将合同原文给可信任的第三方机构，只要这个机构不监守自盗，合同就相对安全。</p><p><strong>如果第三方机构内部不严格或容易出现纰漏？</strong></p><p>虽然我们将合同原文给第三方机构了，为了防止内部人员的更改，需要采取什么措施呢</p><p>一种可行的办法是引入 <strong>摘要算法</strong> 。即合同和摘要一起，为了简单的理解摘要。大家可以想象这个摘要为一个函数，这个函数对原文进行了加密，会产生一个唯一的散列值，一旦原文发生一点点变化，那么这个散列值将会变化。</p><h4 id="有哪些常用的摘要算法呢" tabindex="-1"><a class="header-anchor" href="#有哪些常用的摘要算法呢" aria-hidden="true">#</a> 有哪些常用的摘要算法呢？</h4><p>目前比较常用的加密算法有消息摘要算法和安全散列算法(<strong>SHA</strong>)。<strong>MD5</strong> 是将任意长度的文章转化为一个 128 位的散列值，可是在 2004 年，<strong>MD5</strong> 被证实了容易发生碰撞，即两篇原文产生相同的摘要。这样的话相当于直接给黑客一个后门，轻松伪造摘要。</p><p>所以在大部分的情况下都会选择 <strong>SHA 算法</strong> 。</p><p><strong>出现内鬼了怎么办？</strong></p><p>看似很安全的场面了，理论上来说杜绝了篡改合同的做法。主要某个员工同时具有修改合同和摘要的权利，那搞事儿就是时间的问题了，毕竟没哪个系统可以完全的杜绝员工接触敏感信息，除非敏感信息都不存在。所以能不能考虑将合同和摘要分开存储呢</p><p><strong>那如何确保员工不会修改合同呢？</strong></p><p>这确实蛮难的，不过办法总比困难多。我们将合同放在双方手中，摘要放在第三方机构，篡改难度进一步加大</p><p><strong>那么员工万一和某个用户串通好了呢？</strong></p><p>看来放在第三方的机构还是不好使，同样存在不小风险。所以还需要寻找新的方案，这就出现了 <strong>数字签名和证书</strong>。</p><h4 id="数字证书和签名有什么用" tabindex="-1"><a class="header-anchor" href="#数字证书和签名有什么用" aria-hidden="true">#</a> 数字证书和签名有什么用？</h4><p>同样的，举个例子。Sum 和 Mike 两个人签合同。Sum 首先用 <strong>SHA</strong> 算法计算合同的摘要，然后用自己私钥将摘要加密，得到数字签名。Sum 将合同原文、签名，以及公钥三者都交给 Mike</p><figure><img src="https://oss.javaguide.cn/p3-juejin/e4b7d6fca78b45c8840c12411b717f2f~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>如果 Sum 想要证明合同是 Mike 的，那么就要使用 Mike 的公钥，将这个签名解密得到摘要 x，然后 Mike 计算原文的 sha 摘要 Y，随后对比 x 和 y，如果两者相等，就认为数据没有被篡改</p><p>在这样的过程中，Mike 是不能更改 Sum 的合同，因为要修改合同不仅仅要修改原文还要修改摘要，修改摘要需要提供 Mike 的私钥，私钥即 Sum 独有的密码，公钥即 Sum 公布给他人使用的密码</p><p>总之，公钥加密的数据只能私钥可以解密。私钥加密的数据只有公钥可以解密，这就是 <strong>非对称加密</strong> 。</p><p>隐私保护？不是吓唬大家，信息是透明的兄 die，不过尽量去维护个人的隐私吧，今天学习对称加密和非对称加密。</p><p>大家先读读这个字&quot;钥&quot;,是读&quot;yao&quot;，我以前也是，其实读&quot;yue&quot;</p><h4 id="什么是对称加密" tabindex="-1"><a class="header-anchor" href="#什么是对称加密" aria-hidden="true">#</a> 什么是对称加密？</h4><p>对称加密，顾名思义，加密方与解密方使用同一钥匙(秘钥)。具体一些就是，发送方通过使用相应的加密算法和秘钥，对将要发送的信息进行加密；对于接收方而言，使用解密算法和相同的秘钥解锁信息，从而有能力阅读信息。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/ef81cb5e2f0a4d3d9ac5a44ecf97e3cc~tplv-k3u1fbpfcp-zoom-1.png" alt="图片" tabindex="0"><figcaption>图片</figcaption></figure><h4 id="常见的对称加密算法有哪些" tabindex="-1"><a class="header-anchor" href="#常见的对称加密算法有哪些" aria-hidden="true">#</a> 常见的对称加密算法有哪些？</h4><p><strong>DES</strong></p><p>DES 使用的密钥表面上是 64 位的，然而只有其中的 56 位被实际用于算法，其余 8 位可以被用于奇偶校验，并在算法中被丢弃。因此，<strong>DES</strong> 的有效密钥长度为 56 位，通常称 <strong>DES</strong> 的密钥长度为 56 位。假设秘钥为 56 位，采用暴力破 Jie 的方式，其秘钥个数为 2 的 56 次方，那么每纳秒执行一次解密所需要的时间差不多 1 年的样子。当然，没人这么干。<strong>DES</strong> 现在已经不是一种安全的加密方法，主要因为它使用的 56 位密钥过短。</p><figure><img src="https://oss.javaguide.cn/p3-juejin/9eb3a2bf6cf14132a890bc3447480eeb~tplv-k3u1fbpfcp-zoom-1.jpeg" alt="" tabindex="0"><figcaption></figcaption></figure><p><strong>IDEA</strong></p><p>国际数据加密算法(International Data Encryption Algorithm)。秘钥长度 128 位，优点没有专利的限制。</p><p><strong>AES</strong></p><p>当 DES 被破解以后，没过多久推出了 <strong>AES</strong> 算法，提供了三种长度供选择，128 位、192 位和 256，为了保证性能不受太大的影响，选择 128 即可。</p><p><strong>SM1 和 SM4</strong></p><p>之前几种都是国外的，我们国内自行研究了国密 **SM1 **和 <strong>SM4</strong>。其中 S 都属于国家标准，算法公开。优点就是国家的大力支持和认可</p><p><strong>总结</strong>：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/578961e3175540e081e1432c409b075a~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="常见的非对称加密算法有哪些" tabindex="-1"><a class="header-anchor" href="#常见的非对称加密算法有哪些" aria-hidden="true">#</a> 常见的非对称加密算法有哪些？</h4><p>在对称加密中，发送方与接收方使用相同的秘钥。那么在非对称加密中则是发送方与接收方使用的不同的秘钥。其主要解决的问题是防止在秘钥协商的过程中发生泄漏。比如在对称加密中，小蓝将需要发送的消息加密，然后告诉你密码是 123balala,ok,对于其他人而言，很容易就能劫持到密码是 123balala。那么在非对称的情况下，小蓝告诉所有人密码是 123balala,对于中间人而言，拿到也没用，因为没有私钥。所以，非对称密钥其实主要解决了密钥分发的难题。如下图</p><figure><img src="https://oss.javaguide.cn/p3-juejin/153cf04a0ecc43c38003f3a1ab198cc0~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>其实我们经常都在使用非对称加密，比如使用多台服务器搭建大数据平台 hadoop，为了方便多台机器设置免密登录，是不是就会涉及到秘钥分发。再比如搭建 docker 集群也会使用相关非对称加密算法。</p><p>常见的非对称加密算法：</p><ul><li><p>RSA（RSA 加密算法，RSA Algorithm）：优势是性能比较快，如果想要较高的加密难度，需要很长的秘钥。</p></li><li><p>ECC：基于椭圆曲线提出。是目前加密强度最高的非对称加密算法</p></li><li><p>SM2：同样基于椭圆曲线问题设计。最大优势就是国家认可和大力支持。</p></li></ul><p>总结：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/28b96fb797904d4b818ee237cdc7614c~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="常见的散列算法有哪些" tabindex="-1"><a class="header-anchor" href="#常见的散列算法有哪些" aria-hidden="true">#</a> 常见的散列算法有哪些？</h4><p>这个大家应该更加熟悉了，比如我们平常使用的 MD5 校验，在很多时候，我并不是拿来进行加密，而是用来获得唯一性 ID。在做系统的过程中，存储用户的各种密码信息，通常都会通过散列算法，最终存储其散列值。</p><p><strong>MD5</strong></p><p>MD5 可以用来生成一个 128 位的消息摘要，它是目前应用比较普遍的散列算法，具体的应用场景你可以自行  参阅。虽然，因为算法的缺陷，它的唯一性已经被破解了，但是大部分场景下，这并不会构成安全问题。但是，如果不是长度受限（32 个字符），我还是不推荐你继续使用 <strong>MD5</strong> 的。</p><p><strong>SHA</strong></p><p>安全散列算法。<strong>SHA</strong> 分为 <strong>SHA1</strong> 和 <strong>SH2</strong> 两个版本。该算法的思想是接收一段明文，然后以一种不可逆的方式将它转换成一段（通常更小）密文，也可以简单的理解为取一串输入码（称为预映射或信息），并把它们转化为长度较短、位数固定的输出序列即散列值（也称为信息摘要或信息认证代码）的过程。</p><p><strong>SM3</strong></p><p>国密算法<strong>SM3</strong>。加密强度和 SHA-256 想不多。主要是收到国家的支持。</p><p><strong>总结</strong>：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/79c3c2f72d2f44c7abf2d73a49024495~tplv-k3u1fbpfcp-zoom-1.png" alt="图片" tabindex="0"><figcaption>图片</figcaption></figure><p><strong>大部分情况下使用对称加密，具有比较不错的安全性。如果需要分布式进行秘钥分发，考虑非对称。如果不需要可逆计算则散列算法。</strong> 因为这段时间有这方面需求，就看了一些这方面的资料，入坑信息安全，就怕以后洗发水都不用买。谢谢大家查看！</p><h4 id="第三方机构和证书机制有什么用" tabindex="-1"><a class="header-anchor" href="#第三方机构和证书机制有什么用" aria-hidden="true">#</a> 第三方机构和证书机制有什么用？</h4><p>问题还有，此时如果 Sum 否认给过 Mike 的公钥和合同，不久 gg 了</p><p>所以需要 Sum 过的话做过的事儿需要足够的信誉，这就引入了 <strong>第三方机构和证书机制</strong> 。</p><p>证书之所以会有信用，是因为证书的签发方拥有信用。所以如果 Sum 想让 Mike 承认自己的公钥，Sum 不会直接将公钥给 Mike ，而是提供由第三方机构，含有公钥的证书。如果 Mike 也信任这个机构，法律都认可，那 ik，信任关系成立</p><figure><img src="https://oss.javaguide.cn/p3-juejin/b1a3dbf87e3e41ff894f39512a10f66d~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>如上图所示，Sum 将自己的申请提交给机构，产生证书的原文。机构用自己的私钥签名 Sum 的申请原文（先根据原文内容计算摘要，再用私钥加密），得到带有签名信息的证书。Mike 拿到带签名信息的证书，通过第三方机构的公钥进行解密，获得 Sum 证书的摘要、证书的原文。有了 Sum 证书的摘要和原文，Mike 就可以进行验签。验签通过，Mike 就可以确认 Sum 的证书的确是第三方机构签发的。</p><p>用上面这样一个机制，合同的双方都无法否认合同。这个解决方案的核心在于需要第三方信用服务机构提供信用背书。这里产生了一个最基础的信任链，如果第三方机构的信任崩溃，比如被黑客攻破，那整条信任链条也就断裂了</p><p>为了让这个信任条更加稳固，就需要环环相扣，打造更长的信任链，避免单点信任风险</p><figure><img src="https://oss.javaguide.cn/p3-juejin/1481f0409da94ba6bb0fee69bf0996f8~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>上图中，由信誉最好的根证书机构提供根证书，然后根证书机构去签发二级机构的证书；二级机构去签发三级机构的证书；最后有由三级机构去签发 Sum 证书。</p><p>如果要验证 Sum 证书的合法性，就需要用三级机构证书中的公钥去解密 Sum 证书的数字签名。</p><p>如果要验证三级机构证书的合法性，就需要用二级机构的证书去解密三级机构证书的数字签名。</p><p>如果要验证二级结构证书的合法性，就需要用根证书去解密。</p><p>以上，就构成了一个相对长一些的信任链。如果其中一方想要作弊是非常困难的，除非链条中的所有机构同时联合起来，进行欺诈。</p><h3 id="中间人攻击如何避免" tabindex="-1"><a class="header-anchor" href="#中间人攻击如何避免" aria-hidden="true">#</a> 中间人攻击如何避免?</h3><p>既然知道了中间人攻击的原理也知道了他的危险，现在我们看看如何避免。相信我们都遇到过下面这种状况：</p><figure><img src="https://oss.javaguide.cn/p3-juejin/0dde4b76be6240699312d822a3fe1ed3~tplv-k3u1fbpfcp-zoom-1.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>出现这个界面的很多情况下，都是遇到了中间人攻击的现象，需要对安全证书进行及时地监测。而且大名鼎鼎的 github 网站，也曾遭遇过中间人攻击：</p><p>想要避免中间人攻击的方法目前主要有两个：</p><ul><li>客户端不要轻易相信证书：因为这些证书极有可能是中间人。</li><li>App 可以提前预埋证书在本地：意思是我们本地提前有一些证书，这样其他证书就不能再起作用了。</li></ul><h2 id="ddos" tabindex="-1"><a class="header-anchor" href="#ddos" aria-hidden="true">#</a> DDOS</h2><p>通过上面的描述，总之即好多种攻击都是 <strong>DDOS</strong> 攻击，所以简单总结下这个攻击相关内容。</p><p>其实，像全球互联网各大公司，均遭受过大量的 <strong>DDoS</strong>。</p><p>2018 年，GitHub 在一瞬间遭到高达 1.35Tbps 的带宽攻击。这次 DDoS 攻击几乎可以堪称是互联网有史以来规模最大、威力最大的 DDoS 攻击了。在 GitHub 遭到攻击后，仅仅一周后，DDoS 攻击又开始对 Google、亚马逊甚至 Pornhub 等网站进行了 DDoS 攻击。后续的 DDoS 攻击带宽最高也达到了 1Tbps。</p><h3 id="ddos-攻击究竟是什么" tabindex="-1"><a class="header-anchor" href="#ddos-攻击究竟是什么" aria-hidden="true">#</a> DDoS 攻击究竟是什么？</h3><p>DDos 全名 Distributed Denial of Service，翻译成中文就是<strong>分布式拒绝服务</strong>。指的是处于不同位置的多个攻击者同时向一个或数个目标发动攻击，是一种分布的、协同的大规模攻击方式。单一的 DoS 攻击一般是采用一对一方式的，它利用网络协议和操作系统的一些缺陷，采用<strong>欺骗和伪装</strong>的策略来进行网络攻击，使网站服务器充斥大量要求回复的信息，消耗网络带宽或系统资源，导致网络或系统不胜负荷以至于瘫痪而停止提供正常的网络服务。</p><blockquote><p>举个例子</p></blockquote><p>我开了一家有五十个座位的重庆火锅店，由于用料上等，童叟无欺。平时门庭若市，生意特别红火，而对面二狗家的火锅店却无人问津。二狗为了对付我，想了一个办法，叫了五十个人来我的火锅店坐着却不点菜，让别的客人无法吃饭。</p><p>上面这个例子讲的就是典型的 DDoS 攻击，一般来说是指攻击者利用“肉鸡”对目标网站在较短的时间内发起大量请求，大规模消耗目标网站的主机资源，让它无法正常服务。在线游戏、互联网金融等领域是 DDoS 攻击的高发行业。</p><p>攻击方式很多，比如 <strong>ICMP Flood</strong>、<strong>UDP Flood</strong>、<strong>NTP Flood</strong>、<strong>SYN Flood</strong>、<strong>CC 攻击</strong>、<strong>DNS Query Flood</strong>等等。</p><h3 id="如何应对-ddos-攻击" tabindex="-1"><a class="header-anchor" href="#如何应对-ddos-攻击" aria-hidden="true">#</a> 如何应对 DDoS 攻击？</h3><h4 id="高防服务器" tabindex="-1"><a class="header-anchor" href="#高防服务器" aria-hidden="true">#</a> 高防服务器</h4><p>还是拿开的重庆火锅店举例，高防服务器就是我给重庆火锅店增加了两名保安，这两名保安可以让保护店铺不受流氓骚扰，并且还会定期在店铺周围巡逻防止流氓骚扰。</p><p>高防服务器主要是指能独立硬防御 50Gbps 以上的服务器，能够帮助网站拒绝服务攻击，定期扫描网络主节点等，这东西是不错，就是贵~</p><h4 id="黑名单" tabindex="-1"><a class="header-anchor" href="#黑名单" aria-hidden="true">#</a> 黑名单</h4><p>面对火锅店里面的流氓，我一怒之下将他们拍照入档，并禁止他们踏入店铺，但是有的时候遇到长得像的人也会禁止他进入店铺。这个就是设置黑名单，此方法秉承的就是“错杀一千，也不放一百”的原则，会封锁正常流量，影响到正常业务。</p><h4 id="ddos-清洗" tabindex="-1"><a class="header-anchor" href="#ddos-清洗" aria-hidden="true">#</a> DDoS 清洗</h4><p><strong>DDos</strong> 清洗，就是我发现客人进店几分钟以后，但是一直不点餐，我就把他踢出店里。</p><p><strong>DDoS</strong> 清洗会对用户请求数据进行实时监控，及时发现 <strong>DOS</strong> 攻击等异常流量，在不影响正常业务开展的情况下清洗掉这些异常流量。</p><h4 id="cdn-加速" tabindex="-1"><a class="header-anchor" href="#cdn-加速" aria-hidden="true">#</a> CDN 加速</h4><p>CDN 加速，我们可以这么理解：为了减少流氓骚扰，我干脆将火锅店开到了线上，承接外卖服务，这样流氓找不到店在哪里，也耍不来流氓了。</p><p>在现实中，CDN 服务将网站访问流量分配到了各个节点中，这样一方面隐藏网站的真实 IP，另一方面即使遭遇 <strong>DDoS</strong> 攻击，也可以将流量分散到各个节点中，防止源站崩溃。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>HTTP 洪水攻击 - CloudFlare：https://www.cloudflare.com/zh-cn/learning/ddos/http-flood-ddos-attack/</li><li>SYN 洪水攻击：https://www.cloudflare.com/zh-cn/learning/ddos/syn-flood-ddos-attack/</li><li>什么是 IP 欺骗？：https://www.cloudflare.com/zh-cn/learning/ddos/glossary/ip-spoofing/</li><li>什么是 DNS 洪水？| DNS 洪水 DDoS 攻击：https://www.cloudflare.com/zh-cn/learning/ddos/dns-flood-ddos-attack/</li></ul><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,141);function N(A,v){const n=s("ExternalLinkIcon");return i(),d("div",null,[e("blockquote",null,[e("p",null,[o("本文整理完善自"),e("a",g,[o("TCP/IP 常见攻击手段 - 暖蓝笔记 - 2021"),a(n)]),o("这篇文章。")])]),c,e("p",null,[o("虽然无法预防 IP 欺骗，但可以采取措施来阻止伪造数据包渗透网络。"),l,o(" 是防范欺骗的一种极为常见的防御措施，如 BCP38（通用最佳实践文档）所示。入口过滤是一种数据包过滤形式，通常在"),e("a",h,[o("网络边缘"),a(n)]),o("设备上实施，用于检查传入的 IP 数据包并确定其源标头。如果这些数据包的源标头与其来源不匹配或者看上去很可疑，则拒绝这些数据包。一些网络还实施出口过滤，检查退出网络的 IP 数据包，确保这些数据包具有合法源标头，以防止网络内部用户使用 IP 欺骗技术发起出站恶意攻击。")]),f,e("ol",null,[e("li",null,[u,o(" 不伪造 IP 地址的 SYN 洪水攻击称为直接攻击。在此类攻击中，攻击者完全不屏蔽其 IP 地址。由于攻击者使用具有真实 IP 地址的单一源设备发起攻击，因此很容易发现并清理攻击者。为使目标机器呈现半开状态，黑客将阻止个人机器对服务器的 SYN-ACK 数据包做出响应。为此，通常采用以下两种方式实现：部署防火墙规则，阻止除 SYN 数据包以外的各类传出数据包；或者，对传入的所有 SYN-ACK 数据包进行过滤，防止其到达恶意用户机器。实际上，这种方法很少使用（即便使用过也不多见），因为此类攻击相当容易缓解 – 只需阻止每个恶意系统的 IP 地址。哪怕攻击者使用僵尸网络（如 "),e("a",b,[o("Mirai 僵尸网络"),a(n)]),o("），通常也不会刻意屏蔽受感染设备的 IP。")]),S,P]),D,e("p",null,[o("域名系统的功能是将易于记忆的名称（例如 example.com）转换成难以记住的网站服务器地址（例如 192.168.0.1），因此成功攻击 DNS 基础设施将导致大多数人无法使用互联网。DNS Flood 攻击是一种相对较新的基于 DNS 的攻击，这种攻击是在高带宽"),e("a",m,[o("物联网（IoT）"),a(n)]),e("a",T,[o("僵尸网络"),a(n)]),o("（如 "),e("a",C,[o("Mirai"),a(n)]),o("）兴起后激增的。DNS Flood 攻击使用 IP 摄像头、DVR 盒和其他 IoT 设备的高带宽连接直接淹没主要提供商的 DNS 服务器。来自 IoT 设备的大量请求淹没 DNS 提供商的服务，阻止合法用户访问提供商的 DNS 服务器。")]),e("p",null,[o("DNS Flood 攻击不同于 "),e("a",k,[o("DNS 放大攻击"),a(n)]),o("。与 DNS Flood 攻击不同，DNS 放大攻击反射并放大不安全 DNS 服务器的流量，以便隐藏攻击的源头并提高攻击的有效性。DNS 放大攻击使用连接带宽较小的设备向不安全的 DNS 服务器发送无数请求。这些设备对非常大的 DNS 记录发出小型请求，但在发出请求时，攻击者伪造返回地址为目标受害者。这种放大效果让攻击者能借助有限的攻击资源来破坏较大的目标。")]),x])}const _=r(p,[["render",N],["__file","network-attack-means.html.vue"]]);export{_ as default};

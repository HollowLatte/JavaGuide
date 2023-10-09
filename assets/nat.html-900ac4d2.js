const e=JSON.parse('{"key":"v-97addd82","path":"/cs-basics/network/nat.html","title":"NAT 协议详解（网络层）","lang":"zh-CN","frontmatter":{"title":"NAT 协议详解（网络层）","category":"计算机基础","tag":["计算机网络"],"description":"应用场景 NAT 协议（Network Address Translation） 的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，Local Area Network，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（Wide Area Network，WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。 这个场景其实不难理解。随着一个个小型办公室、家庭办公室（Small Office, Home Office, SOHO）的出现，为了管理这些 SOHO，一个个子网被设计出来，从而在整个 Internet 中的主机数量将非常庞大。如果每个主机都有一个“绝对唯一”的 IP 地址，那么 IPv4 地址的表达能力可能很快达到上限（$2^{32}$）。因此，实际上，SOHO 子网中的 IP 地址是“相对的”，这在一定程度上也缓解了 IPv4 地址的分配压力。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/cs-basics/network/nat.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"NAT 协议详解（网络层）"}],["meta",{"property":"og:description","content":"应用场景 NAT 协议（Network Address Translation） 的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，Local Area Network，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（Wide Area Network，WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。 这个场景其实不难理解。随着一个个小型办公室、家庭办公室（Small Office, Home Office, SOHO）的出现，为了管理这些 SOHO，一个个子网被设计出来，从而在整个 Internet 中的主机数量将非常庞大。如果每个主机都有一个“绝对唯一”的 IP 地址，那么 IPv4 地址的表达能力可能很快达到上限（$2^{32}$）。因此，实际上，SOHO 子网中的 IP 地址是“相对的”，这在一定程度上也缓解了 IPv4 地址的分配压力。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"计算机网络"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NAT 协议详解（网络层）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"细节","slug":"细节","link":"#细节","children":[]},{"level":2,"title":"划重点","slug":"划重点","link":"#划重点","children":[]}],"git":{},"readingTime":{"minutes":5.42,"words":1626},"filePathRelative":"cs-basics/network/nat.md","excerpt":"<h2> 应用场景</h2>\\n<p><strong>NAT 协议（Network Address Translation）</strong> 的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，Local Area Network，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（Wide Area Network，WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。</p>\\n<p>这个场景其实不难理解。随着一个个小型办公室、家庭办公室（Small Office, Home Office, SOHO）的出现，为了管理这些 SOHO，一个个子网被设计出来，从而在整个 Internet 中的主机数量将非常庞大。如果每个主机都有一个“绝对唯一”的 IP 地址，那么 IPv4 地址的表达能力可能很快达到上限（$2^{32}$）。因此，实际上，SOHO 子网中的 IP 地址是“相对的”，这在一定程度上也缓解了 IPv4 地址的分配压力。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};

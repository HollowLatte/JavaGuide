const e=JSON.parse('{"key":"v-6f903654","path":"/cs-basics/data-structure/heap.html","title":"堆","lang":"zh-CN","frontmatter":{"category":"计算机基础","tag":["数据结构"],"description":"堆 什么是堆 堆是一种满足以下条件的树： 堆中的每一个节点值都大于等于（或小于等于）子树中所有节点的值。或者说，任意一个节点的值都大于等于（或小于等于）所有子节点的值。 大家可以把堆(最大堆)理解为一个公司,这个公司很公平,谁能力强谁就当老大,不存在弱的人当老大,老大手底下的人一定不会比他强。这样有助于理解后续堆的操作。 !!!特别提示： 很多博客说堆是完全二叉树，其实并非如此，堆不一定是完全二叉树，只是为了方便存储和索引，我们通常用完全二叉树的形式来表示堆，事实上，广为人知的斐波那契堆和二项堆就不是完全二叉树,它们甚至都不是二叉树。 （二叉）堆是一个数组，它可以被看成是一个 近似的完全二叉树。——《算法导论》第三版","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/JavaGuide/cs-basics/data-structure/heap.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"堆"}],["meta",{"property":"og:description","content":"堆 什么是堆 堆是一种满足以下条件的树： 堆中的每一个节点值都大于等于（或小于等于）子树中所有节点的值。或者说，任意一个节点的值都大于等于（或小于等于）所有子节点的值。 大家可以把堆(最大堆)理解为一个公司,这个公司很公平,谁能力强谁就当老大,不存在弱的人当老大,老大手底下的人一定不会比他强。这样有助于理解后续堆的操作。 !!!特别提示： 很多博客说堆是完全二叉树，其实并非如此，堆不一定是完全二叉树，只是为了方便存储和索引，我们通常用完全二叉树的形式来表示堆，事实上，广为人知的斐波那契堆和二项堆就不是完全二叉树,它们甚至都不是二叉树。 （二叉）堆是一个数组，它可以被看成是一个 近似的完全二叉树。——《算法导论》第三版"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/JavaGuide/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"堆"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"数据结构"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"堆\\",\\"image\\":[\\"https://javaguide.cn/JavaGuide/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是堆","slug":"什么是堆","link":"#什么是堆","children":[]},{"level":2,"title":"堆的用途","slug":"堆的用途","link":"#堆的用途","children":[]},{"level":2,"title":"堆的分类","slug":"堆的分类","link":"#堆的分类","children":[]},{"level":2,"title":"堆的存储","slug":"堆的存储","link":"#堆的存储","children":[]},{"level":2,"title":"堆的操作","slug":"堆的操作","link":"#堆的操作","children":[{"level":3,"title":"插入元素","slug":"插入元素","link":"#插入元素","children":[]},{"level":3,"title":"删除堆顶元素","slug":"删除堆顶元素","link":"#删除堆顶元素","children":[]},{"level":3,"title":"堆的操作总结","slug":"堆的操作总结","link":"#堆的操作总结","children":[]}]},{"level":2,"title":"堆排序","slug":"堆排序","link":"#堆排序","children":[{"level":3,"title":"建堆","slug":"建堆","link":"#建堆","children":[]},{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]}]}],"git":{},"readingTime":{"minutes":9.11,"words":2733},"filePathRelative":"cs-basics/data-structure/heap.md","excerpt":"<h1> 堆</h1>\\n<h2> 什么是堆</h2>\\n<p>堆是一种满足以下条件的树：</p>\\n<p>堆中的每一个节点值都大于等于（或小于等于）子树中所有节点的值。或者说，任意一个节点的值都大于等于（或小于等于）所有子节点的值。</p>\\n<blockquote>\\n<p>大家可以把堆(最大堆)理解为一个公司,这个公司很公平,谁能力强谁就当老大,不存在弱的人当老大,老大手底下的人一定不会比他强。这样有助于理解后续堆的操作。</p>\\n</blockquote>\\n<p><strong>!!!特别提示：</strong></p>\\n<ul>\\n<li>很多博客说堆是完全二叉树，其实并非如此，<strong>堆不一定是完全二叉树</strong>，只是为了方便存储和索引，我们通常用完全二叉树的形式来表示堆，事实上，广为人知的斐波那契堆和二项堆就不是完全二叉树,它们甚至都不是二叉树。</li>\\n<li>（<strong>二叉</strong>）堆是一个数组，它可以被看成是一个 <strong>近似的完全二叉树</strong>。——《算法导论》第三版</li>\\n</ul>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as h,a as e,b as r,d as t,e as n}from"./app-03179461.js";const l={},d={href:"https://book.douban.com/subject/30468597/",target:"_blank",rel:"noopener noreferrer"},p=n('<figure><img src="https://oss.javaguide.cn/github/javaguide/image-20220311155746549.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="何谓重构" tabindex="-1"><a class="header-anchor" href="#何谓重构" aria-hidden="true">#</a> 何谓重构？</h2><p>学习重构必看的一本神书《重构：改善代码既有设计》从两个角度给出了重构的定义：</p><blockquote><ul><li>重构（名词）：对软件内部结构的一种调整，目的是在不改变软件可观察行为的前提下，提高其可理解性，降低其修改成本。</li><li>重构（动词）：使用一系列重构手法，在不改变软件可观察行为的前提下，调整其结构。</li></ul></blockquote><p>用更贴近工程师的语言来说：<strong>重构就是利用设计模式(如组合模式、策略模式、责任链模式)、软件设计原则（如 SOLID 原则、YAGNI 原则、KISS 原则）和重构手段（如封装、继承、构建测试体系）来让代码更容易理解，更易于修改。</strong></p><p>软件设计原则指导着我们组织和规范代码，同时，重构也是为了能够尽量设计出尽量满足软件设计原则的软件。</p><p>正确重构的核心在于 <strong>步子一定要小，每一步的重构都不会影响软件的正常运行，可以随时停止重构。</strong></p><p><strong>常见的设计模式如下</strong>：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/basis/common-design-patterns.png" alt="常见的设计模式" tabindex="0"><figcaption>常见的设计模式</figcaption></figure>',9),c={href:"https://github.com/iluwatar/java-design-patterns",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("strong",null,"常见的软件设计原则如下"),r("：")],-1),u=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/system-design/basis/programming-principles .png",alt:"常见的软件设计原则",tabindex:"0"}),e("figcaption",null,"常见的软件设计原则")],-1),f={href:"https://github.com/iluwatar/java-design-patterns",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/nusr/hacker-laws-zh",target:"_blank",rel:"noopener noreferrer"},_=n('<h2 id="为什么要重构" tabindex="-1"><a class="header-anchor" href="#为什么要重构" aria-hidden="true">#</a> 为什么要重构？</h2><p>在上面介绍重构定义的时候，我从比较抽象的角度介绍了重构的好处：重构的主要目的主要是提升代码&amp;架构的灵活性/可扩展性以及复用性。</p><p>如果对应到一个真实的项目，重构具体能为我们带来什么好处呢？</p><ol><li><strong>让代码更容易理解</strong>：通过添加注释、命名规范、逻辑优化等手段可以让我们的代码更容易被理解；</li><li><strong>避免代码腐化</strong>：通过重构干掉坏味道代码；</li><li><strong>加深对代码的理解</strong>：重构代码的过程会加深你对某部分代码的理解；</li><li><strong>发现潜在 bug</strong>：是这样的，很多潜在的 bug ，都是我们在重构的过程中发现的；</li><li>......</li></ol><p>看了上面介绍的关于重构带来的好处之后，你会发现重构的最终目标是 <strong>提高软件开发速度和质量</strong> 。</p><p>重构并不会减慢软件开发速度，相反，如果代码质量和软件设计较差，当我们想要添加新功能的话，开发速度会越来越慢。到了最后，甚至都有想要重写整个系统的冲动。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/bad&amp;good-design.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>《重构：改善代码既有设计》这本书中这样说：</p><blockquote><p>重构的唯一目的就是让我们开发更快，用更少的工作量创造更大的价值。</p></blockquote><h2 id="何时进行重构" tabindex="-1"><a class="header-anchor" href="#何时进行重构" aria-hidden="true">#</a> 何时进行重构？</h2><p>重构在是开发过程中随时可以进行的，见机行事即可，并不需要单独分配一两天的时间专门用来重构。</p><h3 id="提交代码之前" tabindex="-1"><a class="header-anchor" href="#提交代码之前" aria-hidden="true">#</a> 提交代码之前</h3><p>《重构：改善代码既有设计》这本书介绍了一个 <strong>营地法则</strong> 的概念:</p><blockquote><p>编程时，需要遵循营地法则：保证你离开时的代码库一定比来时更健康。</p></blockquote><p>这个概念表达的核心思想其实很简单：在你提交代码的之前，花一会时间想一想，我这次的提交是让项目代码变得更健康了，还是更腐化了，或者说没什么变化？</p><p>项目团队的每一个人只有保证自己的提交没有让项目代码变得更腐化，项目代码才会朝着健康的方向发展。</p><p><strong>当我们离开营地（项目代码）的时候，请不要留下垃圾（代码坏味道）！尽量确保营地变得更干净了！</strong></p><h3 id="开发一个新功能之后-之前" tabindex="-1"><a class="header-anchor" href="#开发一个新功能之后-之前" aria-hidden="true">#</a> 开发一个新功能之后&amp;之前</h3><p>在开发一个新功能之后，我们应该回过头看看是不是有可以改进的地方。在添加一个新功能之前，我们可以思考一下自己是否可以重构代码以让新功能的开发更容易。</p><p>一个新功能的开发不应该仅仅只有功能验证通过那么简单，我们还应该尽量保证代码质量。</p><p>有一个两顶帽子的比喻：在我开发新功能之前，我发现重构可以让新功能的开发更容易，于是我戴上了重构的帽子。重构之后，我换回原来的帽子，继续开发新能功能。新功能开发完成之后，我又发现自己的代码难以理解，于是我又戴上了重构帽子。比较好的开发状态就是就是这样在重构和开发新功能之间来回切换。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/refractor-two-hats.png" alt="refractor-two-hats" tabindex="0"><figcaption>refractor-two-hats</figcaption></figure><h3 id="code-review-之后" tabindex="-1"><a class="header-anchor" href="#code-review-之后" aria-hidden="true">#</a> Code Review 之后</h3><p>Code Review 可以非常有效提高代码的整体质量，它会帮助我们发现代码中的坏味道以及可能存在问题的地方。并且， Code Review 可以帮助项目团队其他程序员理解你负责的业务模块，有效避免人员方面的单点风险。</p><p>经历一次 Code Review ，你的代码可能会收到很多改进建议。</p><h3 id="捡垃圾式重构" tabindex="-1"><a class="header-anchor" href="#捡垃圾式重构" aria-hidden="true">#</a> 捡垃圾式重构</h3><p>当我们发现坏味道代码（垃圾）的时候，如果我们不想停下手头自己正在做的工作，但又不想放着垃圾不管，我们可以这样做：</p><ul><li>如果这个垃圾很容易重构的话，我们可以立即重构它。</li><li>如果这个垃圾不太容易重构的话，我们可以先记录下来，当完成当下的任务再回来重构它。</li></ul><h3 id="阅读理解代码的时候" tabindex="-1"><a class="header-anchor" href="#阅读理解代码的时候" aria-hidden="true">#</a> 阅读理解代码的时候</h3><p>搞开发的小伙伴应该非常有体会：我们经常需要阅读项目团队中其他人写的代码，也经常需要阅读自己过去写的代码。阅读代码的时候，通常要比我们写代码的时间还要多很多。</p><p>我们在阅读理解代码的时候，如果发现一些坏味道的话，我们就可以对其进行重构。</p><p>就比如说你在阅读张三写的某段代码的时候，你发现这段代码逻辑过于复杂难以理解，你有更好的写法，那你就可以对张三的这段代码逻辑进行重构。</p><h2 id="重构有哪些注意事项" tabindex="-1"><a class="header-anchor" href="#重构有哪些注意事项" aria-hidden="true">#</a> 重构有哪些注意事项？</h2><h3 id="单元测试是重构的保护网" tabindex="-1"><a class="header-anchor" href="#单元测试是重构的保护网" aria-hidden="true">#</a> 单元测试是重构的保护网</h3><p><strong>单元测试可以为重构提供信心，降低重构的成本。我们要像重视生产代码那样，重视单元测试。</strong></p><p>另外，多提一句：持续集成也要依赖单元测试，当持续集成服务自动构建新代码之后，会自动运行单元测试来发现代码错误。</p><p><strong>怎样才能算单元测试呢？</strong> 网上的定义很多，很抽象，很容易把人给看迷糊了。我觉得对于单元测试的定义主要取决于你的项目，一个函数甚至是一个类都可以看作是一个单元。就比如说我们写了一个计算个人股票收益率的方法，我们为了验证它的正确性专门为它写了一个单元测试。再比如说我们代码有一个类专门负责数据脱敏，我们为了验证脱敏是否符合预期专门为这个类写了一个单元测试。</p>',37),m=e("strong",null,"单元测试也是需要重构或者修改的。",-1),k={href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"},v=n('<blockquote><p>测试代码需要随着生产代码的演进而修改，如果测试不能保持整洁，只会越来越难修改。</p></blockquote><h3 id="不要为了重构而重构" tabindex="-1"><a class="header-anchor" href="#不要为了重构而重构" aria-hidden="true">#</a> 不要为了重构而重构</h3><p><strong>重构一定是要为项目带来价值的！</strong> 某些情况下我们不应该进行重构：</p><ul><li>学习了某个设计模式/工程实践之后，不顾项目实际情况，刻意使用在项目上（避免货物崇拜编程）；</li><li>项目进展比较急的时候，重构项目调用的某个 API 的底层代码（重构之后对项目调用这个 API 并没有带来什么价值）；</li><li>重写比重构更容易更省事；</li><li>......</li></ul><h3 id="遵循方法" tabindex="-1"><a class="header-anchor" href="#遵循方法" aria-hidden="true">#</a> 遵循方法</h3><p>《重构：改善代码既有设计》这本书中列举除了代码常见的一些坏味道（比如重复代码、过长函数）和重构手段（如提炼函数、提炼变量、提炼类）。我们应该花时间去学习这些重构相关的理论知识，并在代码中去实践这些重构理论。</p><h2 id="如何练习重构" tabindex="-1"><a class="header-anchor" href="#如何练习重构" aria-hidden="true">#</a> 如何练习重构？</h2><p>除了可以在重构项目代码的过程中练习精进重构之外，你还可以有下面这些手段：</p>',8),x={href:"https://linesh.gitbook.io/refactoring/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://refactoringguru.cn/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.jetbrains.com/help/idea/refactoring-source-code.html#popular-refactorings",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),r(" 参考")],-1),q={href:"https://insights.thoughtworks.cn/reread-refactoring/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://juejin.cn/post/6954378167947624484",target:"_blank",rel:"noopener noreferrer"},C=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function E(N,S){const a=i("ExternalLinkIcon");return s(),h("div",null,[e("p",null,[r("前段时间重读了"),e("a",d,[r("《重构：改善代码既有设计》"),t(a)]),r("，收货颇多。于是，简单写了一篇文章来聊聊我对重构的看法。")]),p,e("p",null,[r("更全面的设计模式总结，可以看 "),e("strong",null,[e("a",c,[r("java-design-patterns"),t(a)])]),r(" 这个开源项目。")]),g,u,e("p",null,[r("更全面的设计原则总结，可以看 "),e("strong",null,[e("a",f,[r("java-design-patterns"),t(a)])]),r(" 和 "),e("strong",null,[e("a",b,[r("hacker-laws-zh"),t(a)])]),r(" 这两个开源项目。")]),_,e("p",null,[m,r(),e("a",k,[r("《代码整洁之道:敏捷软件开发手册》"),t(a)]),r("这本书这样写到：")]),v,e("ul",null,[e("li",null,[e("a",x,[r("重构实战练习"),t(a)]),r("：通过几个小案例一步一步带你学习重构！")]),e("li",null,[e("a",j,[r("设计模式+重构学习网站"),t(a)]),r("：免费在线学习代码重构、 设计模式、 SOLID 原则 （单一职责、 开闭原则、 里氏替换、 接口隔离以及依赖反转） 。")]),e("li",null,[e("a",w,[r("IDEA 官方文档的代码重构教程"),t(a)]),r("：教你如何使用 IDEA 进行重构。")])]),I,e("ul",null,[e("li",null,[e("a",q,[r("再读《重构》- ThoughtWorks 洞见 - 2020"),t(a)]),r("：详细介绍了重构的要点比如小步重构、捡垃圾式的重构，主要是重构概念相关的介绍。")]),e("li",null,[e("a",A,[r("常见代码重构技巧 - VectorJin - 2021"),t(a)]),r("：从软件设计原则、设计模式、代码分层、命名规范等角度介绍了如何进行重构，比较偏实战。")])]),C])}const L=o(l,[["render",E],["__file","refactoring.html.vue"]]);export{L as default};

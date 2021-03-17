(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{83:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return i}));var s=t(3),n=t(7),m=(t(0),t(95)),p={id:"privatePool",title:"DODO Private Pool",sidebar_label:"DODO Private Pool"},r={unversionedId:"privatePool",id:"privatePool",isDocsHomePage:!1,title:"DODO Private Pool",description:"What is DODO Private Pool?",source:"@site/docs/privatePool.md",slug:"/privatePool",permalink:"/docs/docs/privatePool",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/privatePool.md",version:"current",sidebar_label:"DODO Private Pool",sidebar:"someSidebar",previous:{title:"DODO vending machine",permalink:"/docs/docs/publicPool"},next:{title:"DODO CrowdPooling",permalink:"/docs/docs/crowdPooling"}},c=[{value:"What is DODO Private Pool?",id:"what-is-dodo-private-pool",children:[{value:"Use case1: Avoiding Downside Risk",id:"use-case1-avoiding-downside-risk",children:[]},{value:"Use case2: Active Price Discovery",id:"use-case2-active-price-discovery",children:[]},{value:"Use case3: Constant Price Market",id:"use-case3-constant-price-market",children:[]},{value:"Use case4: Reversion to Traditional AMM",id:"use-case4-reversion-to-traditional-amm",children:[]},{value:"Use case5: Market value management",id:"use-case5-market-value-management",children:[]}]},{value:"About the math",id:"about-the-math",children:[]}],b={toc:c};function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(m.b)("wrapper",Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h2",{id:"what-is-dodo-private-pool"},"What is DODO Private Pool?"),Object(m.b)("p",null,"DODO Private Pool (DPP) is a product that is geared towards professional market makers with special requirements that cannot be satisfied by the DODO Vending Machine (DVM), but it is also extremely easy to use. It gives market makers the ability to do the following:"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"Make one-sided deposits/withdrawals (DVM requires two-sided liquidity provision/removal)")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"Change the pricing curve at any time (DVM\u2019s pricing curve cannot be modified after creation)")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"Have liquidity everywhere in the price range from zero to infinity"))),Object(m.b)("p",null,"As we mentioned before, the ",Object(m.b)("a",{parentName:"p",href:"./pmm"},"Proactive Market Making (PMM) algorithm")," is essentially an elegant generalization of the orderbook matching trade settlement system. PMM is easy-to-understand, lightweight, and cheap in terms of operational cost, while at the same time retaining the flexibility of orderbook matching."),Object(m.b)("p",null,"DPP is a product that embodies PMM\u2019s flexibility and configurability well. Let\u2019s use a market depth chart to demonstrate how DPP works and the various use cases it can support and enable."),Object(m.b)("p",null,Object(m.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dpp_1.png",alt:null})),Object(m.b)("h3",{id:"use-case1-avoiding-downside-risk"},"Use case1: Avoiding Downside Risk"),Object(m.b)("p",null,"When market conditions change, market makers need to take measures to avert and reduce downside risk, which is the estimated amount of loss in value of their assets that could be sustained as a result of the market movements. On DPP, they can do so easily by removing some of their bid-side liquidity (i.e. withdrawing the tokens opposite the token asset that is expected to depreciate in value)."),Object(m.b)("p",null,Object(m.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dpp_2.png",alt:null})),Object(m.b)("h3",{id:"use-case2-active-price-discovery"},"Use case2: Active Price Discovery"),Object(m.b)("p",null,"You are a market maker for the apple market. You feel that apples have a lot of potential and their price will go up. Not wanting to sell apples at a low price, you have two options on AMMs:"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"Buy apples yourself: you need a lot of capital to do this")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"Reduce the size of the pool by withdrawing apples from the market: market liquidity will be negatively affected"))),Object(m.b)("p",null,"Neither option is ideal, because you do not have the power to actively influence the price discovery process within the AMM framework. The process of determining the price of apples happens passively as buyers and sellers interact. You believe you have a sound market thesis, but unfortunately you don\u2019t get to apply it."),Object(m.b)("p",null,"DPP drastically improves the market making experience for market makers. It allows them to intervene and adjust the market price directly. This is what we call active price discovery, because market makers actively get involved in the price discovery process, which renders it more efficient."),Object(m.b)("h3",{id:"use-case3-constant-price-market"},"Use case3: Constant Price Market"),Object(m.b)("p",null,"You just issued a new stablecoin, X, that is pegged to 1 USDT. To create a liquid stablecoin market for X and USDT, you can add some USDT and a much larger amount of X to DPP, and set DPP\u2019s k value to 0. This market will guarantee that 1 X is always swapped for exactly 1 USDT."),Object(m.b)("p",null,"You could also set k to a very small non-zero value (e.g. k = 0.001) to get an \u201capproximately constant\u201d pricing curve as seen on Curve."),Object(m.b)("h3",{id:"use-case4-reversion-to-traditional-amm"},"Use case4: Reversion to Traditional AMM"),Object(m.b)("p",null,"Set k = 1 and deposit both base and quote tokens with a ratio of price i to get a market that behaves and performs in the exact same manner as traditional AMMs. For example, if the initial price i is 1 base token = 3 quote tokens, then simply deposit base and quote tokens at a 1:3 ratio."),Object(m.b)("h3",{id:"use-case5-market-value-management"},"Use case5: Market value management"),Object(m.b)("p",null,"If the main liquidity of the market is provided by you, you can set the price and depth as needed. To provide price support or curb speculation."),Object(m.b)("h2",{id:"about-the-math"},"About the math"),Object(m.b)("p",null,"DODO Private Pool also uses the PMM algorithm. All of the parameters can be manually modified by the pool administrator. This algorithm does not require any fixed ratio between the two baseToken and quoteToken. At the same time, it has very strong flexibility, including:"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"If k=0, then change to a constant price model")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"If k=1, then change to Traditional AMM")),Object(m.b)("li",{parentName:"ol"},Object(m.b)("p",{parentName:"li"},"If k is a small amount close to 0, it change into curve"))),Object(m.b)("p",null,"The PMM price curve is plotted by the following pricing formula:"),Object(m.b)("p",null,Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"P"),Object(m.b)("mrow",{parentName:"msub"},Object(m.b)("mi",{parentName:"mrow"},"m"),Object(m.b)("mi",{parentName:"mrow"},"a"),Object(m.b)("mi",{parentName:"mrow"},"r"),Object(m.b)("mi",{parentName:"mrow"},"g"),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mi",{parentName:"mrow"},"n"))),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mi",{parentName:"mrow"},"R")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P_{margin}=iR")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.969438em",verticalAlign:"-0.286108em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.13889em"}},"P"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.311664em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.13889em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"m"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"a"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.02778em"}},"r"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.03588em"}},"g"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"i"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"n"))))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"="),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"i"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R")))))),Object(m.b)("p",null,"Where ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"R")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R")))))," is defined to be the piecewise function below:"),Object(m.b)("p",null,Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mtext",{parentName:"mrow"},"\xa0"),Object(m.b)("mi",{parentName:"mrow"},"B"),Object(m.b)("mo",{parentName:"mrow"},"<"),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"B"),Object(m.b)("mn",{parentName:"msub"},"0")),Object(m.b)("mo",{parentName:"mrow",separator:"true"},","),Object(m.b)("mtext",{parentName:"mrow"},"\xa0"),Object(m.b)("mi",{parentName:"mrow"},"R"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",{parentName:"mrow"},"\u2212"),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mfrac",{parentName:"mrow"},Object(m.b)("msub",{parentName:"mfrac"},Object(m.b)("mi",{parentName:"msub"},"B"),Object(m.b)("mn",{parentName:"msub"},"0")),Object(m.b)("mi",{parentName:"mfrac"},"B")),Object(m.b)("msup",{parentName:"mrow"},Object(m.b)("mo",{parentName:"msup",stretchy:"false"},")"),Object(m.b)("mn",{parentName:"msup"},"2")),Object(m.b)("mi",{parentName:"mrow"},"k")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"if \\ B<B_0, \\ R=1-k+(\\frac{B_0}{B})^2k")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"i"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"mspace"},"\xa0"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.05017em"}},"B"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"<"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.05017em"}},"B"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.05017em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mpunct"},","),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mspace"},"\xa0"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"="),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},"1"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(m.b)("span",{parentName:"span",className:"mbin"},"\u2212"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(m.b)("span",{parentName:"span",className:"mbin"},"+"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1.233431em",verticalAlign:"-0.345em"}}),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mopen nulldelimiter"}),Object(m.b)("span",{parentName:"span",className:"mfrac"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8884309999999999em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.05017em"}},"B")))),Object(m.b)("span",{parentName:"span",style:{top:"-3.23em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),Object(m.b)("span",{parentName:"span",style:{top:"-3.4101em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.05017em"}},"B"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.05017em",marginRight:"0.07142857142857144em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},Object(m.b)("span",{parentName:"span"})))))))))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},Object(m.b)("span",{parentName:"span"}))))),Object(m.b)("span",{parentName:"span",className:"mclose nulldelimiter"})),Object(m.b)("span",{parentName:"span",className:"mclose"},Object(m.b)("span",{parentName:"span",className:"mclose"},")"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},Object(m.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"2")))))))),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k")))))),Object(m.b)("p",null,Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mtext",{parentName:"mrow"},"\xa0"),Object(m.b)("mi",{parentName:"mrow"},"Q"),Object(m.b)("mo",{parentName:"mrow"},"<"),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Q"),Object(m.b)("mn",{parentName:"msub"},"0")),Object(m.b)("mo",{parentName:"mrow",separator:"true"},","),Object(m.b)("mtext",{parentName:"mrow"},"\xa0"),Object(m.b)("mi",{parentName:"mrow"},"R"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",{parentName:"mrow"},"\u2212"),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mfrac",{parentName:"mrow"},Object(m.b)("msub",{parentName:"mfrac"},Object(m.b)("mi",{parentName:"msub"},"Q"),Object(m.b)("mn",{parentName:"msub"},"0")),Object(m.b)("mi",{parentName:"mfrac"},"Q")),Object(m.b)("msup",{parentName:"mrow"},Object(m.b)("mo",{parentName:"msup",stretchy:"false"},")"),Object(m.b)("mn",{parentName:"msup"},"2")),Object(m.b)("mi",{parentName:"mrow"},"k"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},")")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"if \\ Q<Q_0, \\ R=1/(1-k+(\\frac{Q_0}{Q})^2k)")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"i"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"mspace"},"\xa0"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"Q"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"<"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"Q"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mpunct"},","),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mspace"},"\xa0"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"="),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},"1"),Object(m.b)("span",{parentName:"span",className:"mord"},"/"),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord"},"1"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(m.b)("span",{parentName:"span",className:"mbin"},"\u2212"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(m.b)("span",{parentName:"span",className:"mbin"},"+"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1.4055469999999999em",verticalAlign:"-0.481108em"}}),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mopen nulldelimiter"}),Object(m.b)("span",{parentName:"span",className:"mfrac"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.924439em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"Q")))),Object(m.b)("span",{parentName:"span",style:{top:"-3.23em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),Object(m.b)("span",{parentName:"span",style:{top:"-3.446108em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight"},"Q"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.07142857142857144em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},Object(m.b)("span",{parentName:"span"})))))))))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.481108em"}},Object(m.b)("span",{parentName:"span"}))))),Object(m.b)("span",{parentName:"span",className:"mclose nulldelimiter"})),Object(m.b)("span",{parentName:"span",className:"mclose"},Object(m.b)("span",{parentName:"span",className:"mclose"},")"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},Object(m.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"2")))))))),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.03148em"}},"k"),Object(m.b)("span",{parentName:"span",className:"mclose"},")")))))),Object(m.b)("p",null,Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"e"),Object(m.b)("mi",{parentName:"mrow"},"l"),Object(m.b)("mi",{parentName:"mrow"},"s"),Object(m.b)("mi",{parentName:"mrow"},"e"),Object(m.b)("mtext",{parentName:"mrow"},"\xa0"),Object(m.b)("mi",{parentName:"mrow"},"R"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mn",{parentName:"mrow"},"1")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"else \\ R=1")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"e"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.01968em"}},"l"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"s"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault"},"e"),Object(m.b)("span",{parentName:"span",className:"mspace"},"\xa0"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.00773em"}},"R"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(m.b)("span",{parentName:"span",className:"mrel"},"="),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},"1")))))),Object(m.b)("p",null,"In the formula, B and Q represent the token amount in the contract; k, i, B0, and Q0 can all be modified by the pool administrator."))}i.isMDXComponent=!0},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return O}));var s=t(0),n=t.n(s);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},m=Object.keys(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),i=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=i(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},N=n.a.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=i(t),N=s,O=l["".concat(p,".").concat(N)]||l[N]||o[N]||m;return t?n.a.createElement(O,r(r({ref:a},b),{},{components:t})):n.a.createElement(O,r({ref:a},b))}));function O(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,p[1]=r;for(var b=2;b<m;b++)p[b]=t[b];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);
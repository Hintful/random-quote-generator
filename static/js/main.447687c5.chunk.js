(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),a=n(7),c=n.n(a),s=(n(19),n(8)),u=n(9),r=n(5),d=n(14),l=n(13),h=(n.p,n(20),n(3)),j=n.n(h),f=n(10),b=n(6),g=n(1),x=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={quotes:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"}],index:0},i.getNewQuote=i.getNewQuote.bind(Object(r.a)(i)),i.getInitialQuote=i.getInitialQuote.bind(Object(r.a)(i)),fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.quotes.length;e++)i.state.quotes.push(t.quotes[e])})),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getInitialQuote()}},{key:"getInitialQuote",value:function(){var t=this;setTimeout((function(){t.setState((function(t){return{index:Math.floor(Math.random()*t.quotes.length)}}))}),1e3)}},{key:"getNewQuote",value:function(){var t=this;setTimeout((function(){t.setState((function(t){return{index:Math.floor(Math.random()*t.quotes.length)}}))}),1e3),b.a.event({category:"Random-Quote User",action:"Generated new quote"})}},{key:"render",value:function(){var t=this.state.quotes[this.state.index],e='https://twitter.com/intent/tweet?text="'+t.quote+'" - '+t.author+" via&url=https://kurtchoi.dev/random-quote-generator";return Object(g.jsxs)("div",{class:"main",children:[Object(g.jsxs)("div",{id:"quote-box",style:{display:"flex",flexDirection:"column",gap:30,backgroundColor:"white",color:"black",width:"30%",height:"auto",padding:"20px 20px 10px 20px",borderRadius:8},children:[Object(g.jsxs)("div",{id:"quote",style:{paddingLeft:20,paddingRight:20,flex:8,fontFamily:"Playfair Display"},children:[Object(g.jsxs)("h2",{id:"text",children:[Object(g.jsx)("sup",{children:Object(g.jsx)("i",{id:"quotation",class:"fas fa-quote-left"})}),t.quote,Object(g.jsx)("sup",{children:Object(g.jsx)("i",{id:"quotation",class:"fas fa-quote-right"})})]}),Object(g.jsxs)("p",{id:"author",children:["- ",t.author]})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",flex:1,marginBottom:10},children:[Object(g.jsx)("a",{href:e,id:"tweet-quote",children:Object(g.jsx)("div",{class:"tweet",children:Object(g.jsx)("i",{class:"fab fa-twitter"})})}),Object(g.jsx)("div",{id:"new-quote",onClick:this.getNewQuote,children:Object(g.jsx)("i",{class:"fas fa-sync"})})]})]}),Object(g.jsxs)("div",{class:"credit",children:["Coded and designed by ",Object(g.jsx)("a",{href:"https://kurtchoi.dev",target:"_blank",children:"Kurt Choi"})]})]})}}]),n}(o.a.Component);j()(document).ready((function(){setTimeout((function(){j()("*").animate({opacity:"1"},2e3)}),1e3),j()("#new-quote").click((function(){j()("#quote").animate({opacity:"0"},1e3),j()("#quote").animate({opacity:"1"},1e3)}))}));var p=function(){return Object(i.useEffect)((function(){b.a.initialize("G-D3Z7LQS3WW",{gaOptions:{siteSpeedSampleRate:100}}),b.a.pageview(window.location.pathname+window.location.search)})),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f.a,{children:Object(g.jsx)("title",{children:"Random Quote Generator"})}),Object(g.jsx)(x,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),a(t),c(t)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),O()}},[[25,1,2]]]);
//# sourceMappingURL=main.447687c5.chunk.js.map
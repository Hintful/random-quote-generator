(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),a=n(6),c=n.n(a),s=(n(18),n(7)),u=n(8),r=n(5),d=n(13),l=n(12),h=(n.p,n(19),n(3)),f=n.n(h),j=n(9),b=n(1),x=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={quotes:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"}],index:0},i.getNewQuote=i.getNewQuote.bind(Object(r.a)(i)),i.getInitialQuote=i.getInitialQuote.bind(Object(r.a)(i)),fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.quotes.length;e++)i.state.quotes.push(t.quotes[e])})),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getInitialQuote()}},{key:"getInitialQuote",value:function(){var t=this;setTimeout((function(){t.setState((function(t){return{index:Math.floor(Math.random()*t.quotes.length)}}))}),1e3)}},{key:"getNewQuote",value:function(){var t=this;setTimeout((function(){t.setState((function(t){return{index:Math.floor(Math.random()*t.quotes.length)}}))}),1e3)}},{key:"render",value:function(){var t=this.state.quotes[this.state.index],e='https://twitter.com/intent/tweet?text="'+t.quote+'" - '+t.author+" via&url=https://kurtchoi.dev/random-quote-generator";return Object(b.jsxs)("div",{id:"quote-box",style:{display:"flex",flexDirection:"column",gap:30,backgroundColor:"white",color:"black",width:"30%",height:"auto",padding:"20px 20px 10px 20px",borderRadius:8},children:[Object(b.jsxs)("div",{id:"quote",style:{paddingLeft:20,paddingRight:20,flex:8,fontFamily:"Playfair Display"},children:[Object(b.jsxs)("h2",{id:"text",children:[Object(b.jsx)("sup",{children:Object(b.jsx)("i",{id:"quotation",class:"fas fa-quote-left"})}),t.quote,Object(b.jsx)("sup",{children:Object(b.jsx)("i",{id:"quotation",class:"fas fa-quote-right"})})]}),Object(b.jsxs)("p",{id:"author",children:["- ",t.author]})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",flex:1,marginBottom:10},children:[Object(b.jsx)("a",{href:e,id:"tweet-quote",children:Object(b.jsx)("div",{class:"tweet",children:Object(b.jsx)("i",{class:"fab fa-twitter"})})}),Object(b.jsx)("div",{id:"new-quote",onClick:this.getNewQuote,children:Object(b.jsx)("i",{class:"fas fa-sync"})})]})]})}}]),n}(o.a.Component);f()(document).ready((function(){setTimeout((function(){f()("*").animate({opacity:"1"},2e3)}),1e3),f()("#new-quote").click((function(){f()("#quote").animate({opacity:"0"},1e3),f()("#quote").animate({opacity:"1"},1e3)}))}));var g=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j.a,{children:Object(b.jsx)("title",{children:"Random Quote Generator"})}),Object(b.jsx)(x,{})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),a(t),c(t)}))};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[24,1,2]]]);
//# sourceMappingURL=main.a01d63fa.chunk.js.map
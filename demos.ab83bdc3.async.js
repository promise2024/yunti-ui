"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2433],{62476:function(h,r,e){e.d(r,{Z:function(){return d}});var u=e(56920),i=e(50959),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},o=t,a=e(33845),s=function(c,_){return i.createElement(a.Z,(0,u.Z)({},c,{ref:_,icon:o}))},d=i.forwardRef(s)},32952:function(h,r,e){e.r(r);var u=e(47111),i=e(3214),t=e(4377),o=e(4010),a=e(60187),s=e(38804),d=e(81057),n=e(11527),c=[{description:"Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",icon:o.Z,title:"Themeable"},{description:"voids unnecessary styles props at runtime, making it more performant than other UI libraries.",icon:a.Z,title:"Fast"},{description:"Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",icon:s.Z,title:"Light & Dark UI"}],_=`import { ThemeProvider, Button } from '@yuntijs/ui'

export default () => (
  <ThemeProvider>
    <Button>Hello YuntiJS</Button>
  </ThemeProvider>
)`;r.default=function(){var f=(0,t.Fg)();return(0,n.jsxs)(d.Z,{gap:16,children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("h2",{style:{fontSize:20},children:"\u2601\uFE0F Start building your CloudNative web app now"}),(0,n.jsxs)("div",{style:{color:f.colorTextDescription,textAlign:"center"},children:["The YuntiUI components are inspired by"," ",(0,n.jsx)("a",{href:"(https://ui.lobehub.com",rel:"noreferrer",target:"_blank",children:"LobeUI"})," ","and developed based on"," ",(0,n.jsx)("a",{href:"https://ant.design/components/overview",rel:"noreferrer",target:"_blank",children:"Antd components"}),", fully compatible with Antd components, ",(0,n.jsx)("br",{}),"and it is recommended to use"," ",(0,n.jsx)("a",{href:"https://ant-design.github.io/antd-style",rel:"noreferrer",target:"_blank",children:"antd-style"})," ","as the default css-in-js styling solution."]})]}),(0,n.jsx)(u.ZP,{language:"tsx",style:{width:"100%"},type:"ghost",children:_}),(0,n.jsx)(i.Z,{items:c})]})}},13691:function(h,r,e){e.r(r);var u=e(77117),i=e.n(u),t=e(20441),o=e(14785),a=e(2206),s=e(70757),d=e(67744),n=e(11527);r.default=function(){var c=(0,t.WQ)(),_=(0,t.M4)({name:"outputs",title:"\u8F93\u51FA\u53D8\u91CF",readOnly:!1,defaultActive:!0,disabled:!1,addOneFiledDefault:!0,disableRemoveWhenOneField:!0,maxFileds:10,empty:"\u70B9\u51FB\u53F3\u4E0A\u89D2 + \u6DFB\u52A0",variant:{options:["default","block","ghost","pure"],value:"default"}},{store:c});return(0,n.jsx)(o.ZP,{levaStore:c,style:{width:"100%"},children:(0,n.jsx)(s.Z,{style:{width:"100%",height:"100%"},children:(0,n.jsx)(a.FormCollapseList,i()({columns:[{label:"\u53D8\u91CF\u540D",name:"key",width:"40%",render:function(){return(0,n.jsx)(a.Input,{maxLength:30,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D",showCount:!0})}},{label:"\u53D8\u91CF\u503C",name:"value",width:"45%",render:function(){return(0,n.jsx)(a.Input,{placeholder:"\u8F93\u5165\u53D8\u91CF\u503C"})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C"}]}],icon:d.Z},_))})})}},78443:function(h,r,e){e.r(r);var u=e(28152),i=e.n(u),t=e(2206),o=e(67744),a=e(50959),s=e(11527),d=t.Form.CollapseList;r.default=function(){var n=[{key:"class",value:"claas1"},{key:"namespace",value:"ns1"}],c=(0,a.useState)({outputs:n}),_=i()(c,2),f=_[0],C=_[1];return(0,s.jsxs)(t.Flex,{gap:6,style:{width:"100%"},vertical:!0,children:[(0,s.jsx)(t.Form,{onValuesChange:function(O,j){return C(j)},variant:"filled",children:(0,s.jsx)(d,{columns:[{dependencies:function(O){return[["outputs",O.name,"value"]]},label:"\u53D8\u91CF\u540D",name:"key",render:function(){return(0,s.jsx)(t.Input,{maxLength:30,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D",showCount:!0})},rules:function(O,j){return[{whitespace:!0,required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u540D"},function(M){var p=M.getFieldValue;return{validator:function(T,m){var D=p("outputs");return D!=null&&D.some(function(L,B){return B!==j&&L.key===m})?Promise.reject(new Error("\u53D8\u91CF\u540D\u4E0D\u80FD\u91CD\u590D")):Promise.resolve()}}}]}},{label:"\u53D8\u91CF\u503C",name:"value",render:function(){return(0,s.jsx)(t.Input,{placeholder:"\u8F93\u5165\u53D8\u91CF\u503C",style:{width:360}})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C"}]}],icon:o.Z,initialValue:n,name:"outputs",title:"\u8F93\u51FA\u53D8\u91CF",variant:"block"})}),(0,s.jsx)(t.Divider,{content:"Form value \u503C",dashed:!0,defaultOpen:!0,mode:"expanded",orientation:"left",orientationMargin:0,children:(0,s.jsx)(t.Highlighter,{language:"json",children:JSON.stringify(f,null,2)})})]})}},87658:function(h,r,e){e.r(r);var u=e(62476),i=e(2206),t=e(68048),o=e(11527),a=i.Page.Header,s=function(){var n=(0,t.y)(),c=n.styles;return(0,o.jsx)(i.Page,{className:c.root,children:(0,o.jsx)(a,{bordered:!0,descriptions:[{icon:{content:(0,o.jsx)(u.Z,{}),tooltip:"\u521B\u5EFA\u8005"},text:"\u5F20\u841D\u535C"},{text:"2024-05-16 17:36:09"}],extraContent:{items:[{key:"edit",label:"\u7F16\u8F91"},{key:"delete",label:"\u5220\u9664",danger:!0},{key:"test",label:"\u6D4B\u8BD5"}]},icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",status:{status:"processing",text:"\u8FD0\u884C\u4E2D",title:"\u63D2\u4EF6\u8FD0\u884C\u6B63\u5E38"},title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"})})};r.default=s},41834:function(h,r,e){e.r(r);var u=e(2206),i=e(68048),t=e(11527),o=u.Page.Breadcrumb,a=u.Page.Header,s=u.Page.Content,d=function(){var c=(0,i.y)(),_=c.styles;return(0,t.jsxs)(u.Page,{className:_.root,status:404,children:[(0,t.jsx)(o,{items:[{title:"\u63D2\u4EF6\u5217\u8868",path:"/plugins"},{title:"\u63D2\u4EF6\u8BE6\u60C5"}]}),(0,t.jsx)(a,{icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"}),(0,t.jsx)(s,{children:(0,t.jsx)(t.Fragment,{})})]})};r.default=d},49939:function(h,r,e){e.r(r);var u=e(2206),i=e(68048),t=e(11527),o=u.Page.Breadcrumb,a=u.Page.Header,s=u.Page.Content,d=function(){var c=(0,i.y)(),_=c.styles;return(0,t.jsxs)(u.Page,{className:_.root,loading:!0,children:[(0,t.jsx)(o,{items:[{title:"\u63D2\u4EF6\u5217\u8868",path:"/plugins"},{title:"\u63D2\u4EF6\u8BE6\u60C5"}]}),(0,t.jsx)(a,{icon:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",subTitle:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6\u7684\u63CF\u8FF0",title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6"}),(0,t.jsx)(s,{children:(0,t.jsx)(t.Fragment,{})})]})};r.default=d},62760:function(h,r,e){e.r(r),e.d(r,{default:function(){return V}});var u=e(28152),i=e.n(u),t=e(62476),o=e(56920),a=e(50959),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},d=s,n=e(33845),c=function(v,E){return a.createElement(n.Z,(0,o.Z)({},v,{ref:E,icon:d}))},_=a.forwardRef(c),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},C=f,y=function(v,E){return a.createElement(n.Z,(0,o.Z)({},v,{ref:E,icon:C}))},O=a.forwardRef(y),j=e(37194),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},p=M,R=function(v,E){return a.createElement(n.Z,(0,o.Z)({},v,{ref:E,icon:p}))},T=a.forwardRef(R),m=e(2206),D=e(20459),L=e(3024),B=e(40363),l=e(11527),F=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",render:function(v){return(0,l.jsx)("a",{children:v})}},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u6807\u7B7E",key:"tags",dataIndex:"tags",render:function(v,E){var A=E.tags;return(0,l.jsx)(l.Fragment,{children:A.map(function(P){var x=P.length>5?"geekblue":"green";return P==="loser"&&(x="volcano"),(0,l.jsx)(D.Z,{color:x,children:P.toUpperCase()},P)})})}},{title:"\u64CD\u4F5C",key:"action",render:function(v,E){return(0,l.jsxs)(L.Z,{size:"middle",children:[(0,l.jsxs)("a",{children:["Invite ",E.name]}),(0,l.jsx)("a",{children:"Delete"})]})}}],W=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}],S=function(){return(0,l.jsx)(B.Z,{columns:F,dataSource:W})},b=e(68048),K=m.Page.Breadcrumb,Z=m.Page.Header,k=m.Page.Content,z=function(){var v=(0,b.y)(),E=v.styles,A=(0,a.useState)(!0),P=i()(A,2),x=P[0],H=P[1];return(0,a.useEffect)(function(){var I=setTimeout(function(){return H(!1)},1500);return function(){return clearTimeout(I)}},[]),(0,l.jsxs)(m.Page,{className:E.root,loading:x,children:[(0,l.jsx)(K,{items:[{title:"\u63D2\u4EF6\u5217\u8868",path:"/plugins"},{title:"\u63D2\u4EF6\u8BE6\u60C5"}]}),(0,l.jsx)(Z,{descriptions:[{icon:{content:(0,l.jsx)(t.Z,{}),tooltip:"\u521B\u5EFA\u8005"},text:"\u5F20\u841D\u535C"},{icon:{content:(0,l.jsx)(_,{}),tooltip:"\u66F4\u65B0\u65F6\u95F4"},text:"2024-05-16 17:36:09"}],extraContent:{items:[{key:"edit",label:"\u7F16\u8F91"},{key:"delete",label:"\u5220\u9664",danger:!0},{key:"test",label:"\u6D4B\u8BD5"}],onClick:function(U,N){return console.log("key",U,N)}},icon:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},status:{status:"processing",text:"\u8FD0\u884C\u4E2D",title:"\u63D2\u4EF6\u8FD0\u884C\u6B63\u5E38"},subTitle:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6\u7684\u63CF\u8FF0",title:"\u6211\u662F\u4E00\u4E2A\u63D2\u4EF6",titleRender:function(U){return(0,l.jsxs)(m.Space,{children:[U," ",(0,l.jsx)(O,{})]})}}),(0,l.jsxs)(k,{children:[(0,l.jsxs)(m.Space,{size:12,children:[(0,l.jsx)(m.Button,{icon:(0,l.jsx)(j.Z,{}),type:"primary",children:"\u521B\u5EFA"}),(0,l.jsx)(m.Button,{icon:(0,l.jsx)(T,{}),children:"\u5237\u65B0"}),(0,l.jsx)(m.Input.Search,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"})]}),(0,l.jsx)(S,{})]})]})},V=z},68048:function(h,r,e){e.d(r,{y:function(){return a}});var u=e(18840),i=e.n(u),t=e(4377),o,a=(0,t.kc)(function(s){var d=s.css,n=s.token;return{root:d(o||(o=i()([`
      background-color: `,`;
    `])),n.colorBgLayout)}})}}]);

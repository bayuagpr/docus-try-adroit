import{d as C,l as g,a0 as v,au as D,s as w,N as o,W as p}from"./entry.19391a37.js";import _ from"./ContentRenderer.67feac33.js";import S from"./ContentQuery.efd280e4.js";import"./ContentRendererMarkdown.vue.dd336241.js";const q=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:i,path:s,query:a,head:u}=f,r=u===void 0?c:u,l={...a||{},path:s||(a==null?void 0:a.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var d;return r&&p(t),(d=e.default)==null?void 0:d.call(e,{doc:t,refresh:n,isPartial:y,excerpt:i,...this.$attrs})}:({data:t})=>(r&&p(t),o(_,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),b=q;export{b as default};

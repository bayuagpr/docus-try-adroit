import $ from"./ProseTh.b3e4b4cb.js";import B from"./ProseTr.857982c0.js";import V from"./ProseThead.d60636fe.js";import b from"./ProseCodeInline.27213d04.js";import C from"./ProseTd.45e5ab0f.js";import F from"./ProseTbody.0b946629.js";import N from"./ProseTable.163d4b02.js";import{k as R,d as I,a4 as A,ap as E,I as m,b as o,X as l,w as e,g as s,D as d,f,c as S,F as L,ah as X,t as c}from"./entry.19391a37.js";const Y=I({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${A(t.of)}`,{data:h}=await E(t.of,()=>$fetch(k),"$IEimFDAF1g"),i=m(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=m(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),D=m(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),r=m(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=m(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:D,showDescription:r,showDefault:y}}});function j(t,k,h,i,w,D){var q,v,P;const r=$,y=B,a=V,n=b,_=C,g=F,T=N;return t.meta&&((q=t.meta)!=null&&q.props)&&((P=(v=t.meta)==null?void 0:v.props)!=null&&P.length)?(o(),l(T,{key:0},{default:e(()=>[s(a,null,{default:e(()=>[s(y,null,{default:e(()=>[s(r,null,{default:e(()=>[d("Prop")]),_:1}),s(r,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(r,{key:0},{default:e(()=>[d(" Required ")]),_:1})):f("",!0),t.showDefault?(o(),l(r,{key:1},{default:e(()=>[d(" Default ")]),_:1})):f("",!0),t.showValues?(o(),l(r,{key:2},{default:e(()=>[d(" Values ")]),_:1})):f("",!0),t.showDescription?(o(),l(r,{key:3},{default:e(()=>[d(" Description ")]),_:1})):f("",!0)]),_:1})]),_:1}),s(g,null,{default:e(()=>[(o(!0),S(L,null,X(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):f("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):f("",!0)]),_:2},1024)):f("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):f("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.description),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):f("",!0)}const Q=R(Y,[["render",j]]);export{Q as default};

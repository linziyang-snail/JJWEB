import{B as h,k as a,C as m,D as d,E as _,G as x,r as b,o as r,c,a as t,v as n,F as v,t as g,n as f,H as w,w as y,b as B}from"./index-CFs-jgpS.js";const k={class:"container py-5"},I={class:"row py-5"},j={class:"d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white"},C={class:"page-title display-3 mt-5 text-white"},D={class:"breadcrumb"},V={__name:"Banner",setup(E){const e=h(),o=a(()=>{switch(e.path){case"/about":return"關於捷匠";case"/services":return"服務項目";case"/project":return"施工實照";case"/contact":return"聯繫我們";default:return"404"}}),u=a(()=>{switch(e.path){case"/about":return x;case"/services":return _;case"/project":return d;case"/contact":return m;default:return""}}),i=a(()=>{switch(e.path){case"/about":return[{text:"首頁",path:"/"},{text:"關於捷匠",path:"/about"}];case"/services":return[{text:"首頁",path:"/"},{text:"服務項目",path:"/services"}];case"/project":return[{text:"首頁",path:"/"},{text:"施工實照",path:"/project"}];case"/contact":return[{text:"首頁",path:"/"},{text:"聯繫我們",path:"/contact"}];default:return[]}});return(F,N)=>{const l=b("router-link");return r(),c("section",{id:"hero",style:f({backgroundImage:"url("+u.value+")"})},[t("div",k,[t("div",I,[t("div",j,[t("h2",C,n(o.value),1),t("nav",D,[(r(!0),c(v,null,g(i.value,(s,p)=>(r(),w(l,{class:"breadcrumb-item text-white",key:p,to:s.path},{default:y(()=>[B(n(s.text),1)]),_:2},1032,["to"]))),128))])])])])],4)}}};export{V as _};

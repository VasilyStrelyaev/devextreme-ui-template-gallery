"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[462],{63025:function(e,t,a){a.d(t,{e:function(){return y}});var n=a(9783),i=a(72602),r=a(77344),l=n.$K,s=n.J_,o=n.mf,c="min",u="max",d="minVisible",f="maxVisible",g="base",p="axisType";function m(e,t){return t<e}function h(e,t){return t>e}function v(e,t,a,n){var i=l(t);l(e)?i&&n(e,t)&&a(t):i&&a(t)}var y=function(e){e&&(0,i.l)(this,e)},_=y;_.prototype={constructor:_,addRange:function(e){var t=this,a=t.categories,n=e.categories,i="discrete"===t[p],s=function(a,n){v(t[a],e[a],(function(e){t[a]=e}),n)},o=function(e,a,n){v(t[e],t[a],(function(a){l(t[e])&&(t[e]=a)}),n)},y=function(a){t[a]=t[a]||e[a]};return y("invert"),y("containsConstantLine"),y(p),y("dataType"),y("isSpacedMargin"),"logarithmic"===t[p]?y(g):t[g]=void 0,s(c,m),s(u,h),i?(y(d),y(f)):(s(d,m),s(f,h)),s("interval",m),i||(o(c,d,m),o(c,f,m),o(u,f,h),o(u,d,h)),t.categories=void 0===a?n:n?(0,r.Tw)(a.concat(n)):a,"logarithmic"===t[p]&&(y("allowNegatives"),s("linearThreshold",m)),t},isEmpty:function(){return(!l(this[c])||!l(this[u]))&&(!this.categories||0===this.categories.length)},correctValueZeroLevel:function(){var e=this;if(s(e[u])||s(e[c]))return e;function t(t,a){e[t]<0&&e[a]<0&&(e[a]=0),e[t]>0&&e[a]>0&&(e[t]=0)}return t(c,u),t(d,f),e},sortCategories(e){if(!1!==e&&this.categories)if(Array.isArray(e)){var t=e.map((e=>e.valueOf())),a=this.categories.filter((e=>-1===t.indexOf(e.valueOf())));this.categories=e.concat(a)}else{var n=!o(e);n&&"string"!==this.dataType?e=(e,t)=>e.valueOf()-t.valueOf():n&&(e=!1),e&&this.categories.sort(e)}}}},34603:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(73396),i=a(44870),r=a(69119),l=a(93527),s=a(70870),o=(0,n.aZ)({__name:"revenue-analysis-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(s["default"],{title:"Revenue Analysis","content-class":"sales-by-state grid"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxDataGrid),{"data-source":t.data,height:290,"load-panel":{enabled:!1}},{salesBullet:(0,n.w5)((e=>[(0,n.Wm)((0,i.SU)(l.DxBullet),{"show-target":!1,"show-zero-level":!1,value:100*e.data.data?.percentage,"start-scale-value":0,"end-scale-value":100},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxTooltip),{enabled:!1}),(0,n.Wm)((0,i.SU)(l.DxSize),{width:200,height:20})])),_:2},1032,["value"])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxColumn),{caption:"State","data-field":"stateName"}),(0,n.Wm)((0,i.SU)(r.DxColumn),{alignment:"left",caption:"Sales","data-field":"total","data-type":"number",format:"currency","sort-order":"desc","hiding-priority":2}),(0,n.Wm)((0,i.SU)(r.DxColumn),{alignment:"left",caption:"% Sold","data-field":"percentage",name:"percentN",format:"percent","hiding-priority":1}),(0,n.Wm)((0,i.SU)(r.DxColumn),{alignment:"left",caption:"Percentage","data-field":"percentage",name:"percentB","cell-template":"salesBullet","css-class":"sales-bullet",width:200})])),_:1},8,["data-source"])])),_:1}))}}),c=a(40089);const u=(0,c.Z)(o,[["__scopeId","data-v-700131ca"]]);var d=u}}]);
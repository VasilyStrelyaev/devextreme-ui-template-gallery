"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3520,143],{58719:function(e,l,a){a.d(l,{F:function(){return o},b:function(){return t}});const t=["Salaried","Commission","Terminated"],o={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},97166:function(e,l,a){a.r(l),a.d(l,{default:function(){return r}});var t=a(73396),o=a(44870),u=a(94969),n=a(58719),d=a(59433),m=a(45607),i=(0,t.aZ)({__name:"contact-new-form",setup(e){const l=(0,o.iH)({...n.F});return(e,a)=>((0,t.wg)(),(0,t.j4)((0,o.SU)(u.DxForm),{class:"plain-styled-form"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:1,md:1,lg:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{class:"uploader"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(m["default"])])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:1,md:2,lg:2}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{label:"First Name",modelValue:l.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.firstName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{label:"Last Name",modelValue:l.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.lastName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{label:"Company",modelValue:l.value.company,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.company=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{label:"Position",modelValue:l.value.position,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.position=e),"is-editing":!0},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(u.DxColCountByScreen),{xs:1,sm:1,md:2,lg:2}),(0,t.Wm)((0,o.SU)(u.DxItem),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{label:"Assigned to",modelValue:l.value.manager,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.manager=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{modelValue:l.value.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.phone=e),"is-editing":!0,icon:"tel",mask:"+1(000)000-0000"},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{modelValue:l.value.email,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.email=e),"is-editing":!0,icon:"email",validators:[{type:"email"},{type:"required"}]},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(u.DxItem),null,{default:(0,t.w5)((()=>[(0,t.Wm)(d["default"],{modelValue:l.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.address=e),"is-editing":!0,icon:"home"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}))}});const s=i;var r=s},45607:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});var t=a(73396),o=a(87139),u=a(44870),n=a(78517);const d=e=>((0,t.dD)("data-v-d9db00ac"),e=e(),(0,t.Cn)(),e),m=d((()=>(0,t._)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),i=[m];var s=(0,t.aZ)({__name:"form-photo-uploader",setup(e){const l=(0,u.iH)(!1),a=(0,u.iH)(),d=e=>{e.dropZoneElement===a.value&&(l.value=!0)},m=e=>{e.dropZoneElement===a.value&&(l.value=!1)};return(e,s)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{id:"dropzone",ref_key:"dropzone",ref:a,class:(0,o.C_)(l.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},i,2),(0,t.Wm)((0,u.SU)(n.DxFileUploader),{"drop-zone":a.value,"dialog-trigger":a.value,multiple:!1,"show-file-list":!1,visible:!1,accept:"image/*","upload-mode":"instantly",onDropZoneEnter:d,onDropZoneLeave:m},null,8,["drop-zone","dialog-trigger"])],64))}}),r=a(40089);const c=(0,r.Z)(s,[["__scopeId","data-v-d9db00ac"]]);var p=c}}]);
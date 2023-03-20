"use strict";(self.webpackChunkpersonal_backend=self.webpackChunkpersonal_backend||[]).push([[2544],{92100:(V,v,s)=>{s.r(v),s.d(v,{default:()=>D});var e=s(67294),n=s(95489),y=s(49656),b=s(87751),t=s(28702),C=s(80831),T=s(41363),x=s(27361),S=s.n(x),R=s(97132),A=s(28834),I=s(45697),c=s.n(I);const E=({disabled:l,role:a,values:o,errors:r,onChange:p,onBlur:m})=>{const{formatMessage:i}=(0,R.useIntl)();return e.createElement(t.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(t.Stack,{spacing:4},e.createElement(t.Flex,{justifyContent:"space-between"},e.createElement(t.Box,null,e.createElement(t.Box,null,e.createElement(t.Typography,{fontWeight:"bold"},a?a.name:i({id:"global.details",defaultMessage:"Details"}))),e.createElement(t.Box,null,e.createElement(t.Typography,{textColor:"neutral500",variant:"pi"},a?a.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(t.Button,{disabled:!0,variant:"secondary"},i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount}))),e.createElement(t.Grid,{gap:4},e.createElement(t.GridItem,{col:6},e.createElement(t.TextInput,{disabled:l,name:"name",error:r.name&&i({id:r.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:p,onBlur:m,value:o.name||""})),e.createElement(t.GridItem,{col:6},e.createElement(t.Textarea,{disabled:l,label:i({id:"global.description",defaultMessage:"Description"}),name:"description",error:r.name&&i({id:r.name}),onChange:p,onBlur:m},o.description||"")))))};E.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},E.propTypes={disabled:c().bool,errors:c().object.isRequired,onBlur:c().func.isRequired,onChange:c().func.isRequired,role:c().object,values:c().object};const k=E;var P=s(48474),L=s(53209);const U=L.Ry().shape({name:L.Z_().required(n.translatedErrors.required)}),F=()=>{const l=(0,n.useNotification)(),{formatMessage:a}=(0,R.useIntl)(),{params:{id:o}}=(0,y.useRouteMatch)("/settings/roles/:id"),[r,p]=(0,e.useState)(!1),m=(0,e.useRef)(),{lockApp:i,unlockApp:j}=(0,n.useOverlayBlocker)(),{trackUsage:N}=(0,n.useTracking)(),{isLoading:Z,data:z}=(0,P.U_)(o),{role:u,permissions:G,isLoading:M,onSubmitSucceeded:O}=(0,P.Dq)(o),$=async g=>{try{i(),p(!0);const{permissionsToSend:d,didUpdateConditions:f}=m.current.getPermissions();await(0,n.request)(`/admin/roles/${o}`,{method:"PUT",body:g}),u.code!=="strapi-super-admin"&&(await(0,n.request)(`/admin/roles/${o}/permissions`,{method:"PUT",body:{permissions:d}}),f&&N("didUpdateConditions")),m.current.setFormAfterSubmit(),O({name:g.name,description:g.description}),l({type:"success",message:{id:"notification.success.saved"}})}catch(d){console.error(d.response);const f=S()(d,"response.payload.message","An error occured"),h=S()(d,"response.payload.data.permissions[0]",f);l({type:"warning",message:h})}finally{p(!1),j()}},B=u.code==="strapi-super-admin";return e.createElement(t.Main,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(C.Formik,{enableReinitialize:!0,initialValues:{name:u.name,description:u.description},onSubmit:$,validationSchema:U,validateOnChange:!1},({handleSubmit:g,values:d,errors:f,handleChange:h,handleBlur:H})=>e.createElement("form",{onSubmit:g},e.createElement(t.HeaderLayout,{primaryAction:e.createElement(t.Stack,{horizontal:!0,spacing:2},e.createElement(t.Button,{disabled:u.code==="strapi-super-admin",onClick:g,loading:r,size:"L"},a({id:"global.save",defaultMessage:"Save"}))),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(n.Link,{startIcon:e.createElement(T.ArrowLeft,null),to:"/settings/roles"},a({id:"global.back",defaultMessage:"Back"}))}),e.createElement(t.ContentLayout,null,e.createElement(t.Stack,{spacing:6},e.createElement(k,{isLoading:M,disabled:B,errors:f,values:d,onChange:h,onBlur:H,role:u}),!Z&&!M?e.createElement(t.Box,{shadow:"filterShadow",hasRadius:!0},e.createElement(A.Z,{isFormDisabled:B,permissions:G,ref:m,layout:z})):e.createElement(t.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(n.LoadingIndicatorPage,null)))))))},D=()=>{const l=(0,e.useMemo)(()=>({read:b.Z.settings.roles.read,update:b.Z.settings.roles.update}),[]),{isLoading:a,allowedActions:{canRead:o,canUpdate:r}}=(0,n.useRBAC)(l);return a?e.createElement(n.LoadingIndicatorPage,null):!o&&!r?e.createElement(y.Redirect,{to:"/"}):e.createElement(F,null)}}}]);

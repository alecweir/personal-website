"use strict";(self.webpackChunkpersonal_backend=self.webpackChunkpersonal_backend||[]).push([[2812],{94699:(_,P,o)=>{o.d(P,{Z:()=>S});var e=o(67294),u=o(45697),p=o.n(u),y=o(97132),t=o(28702),x=o.n(t),n=o(41363),N=o.n(n),M=o(95489),V=o.n(M);const v=({displayedFilters:T})=>{const[h,b]=(0,e.useState)(!1),{formatMessage:O}=(0,y.useIntl)(),I=(0,e.useRef)(),R=()=>{b(C=>!C)};return e.createElement(e.Fragment,null,e.createElement(t.Box,{paddingTop:1,paddingBottom:1},e.createElement(t.Button,{variant:"tertiary",ref:I,startIcon:e.createElement(n.Filter,null),onClick:R,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),h&&e.createElement(M.FilterPopoverURLQuery,{displayedFilters:T,isVisible:h,onToggle:R,source:I})),e.createElement(M.FilterListURLQuery,{filtersSchema:T}))};v.propTypes={displayedFilters:p().arrayOf(p().shape({name:p().string.isRequired,metadatas:p().shape({label:p().string}),fieldSchema:p().shape({type:p().string})})).isRequired};const S=v},35915:(_,P,o)=>{o.r(P),o.d(P,{default:()=>X});var e=o(67294),u=o(95489),p=o(87751),y=o(97132),t=o(28702),x=o(45697),n=o.n(x),N=o(41363),M=o(51196),V=o.n(M);const S=()=>{const{formatDate:a}=(0,y.useIntl)();return m=>{const i=V()(m),d=a(i,{dateStyle:"long"}),s=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${s}`}},T={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},h=a=>T[a]||a,b=({headers:a,rows:l,onOpenModal:m})=>{const{formatMessage:i}=(0,y.useIntl)(),d=S(),s=({type:r,value:c,model:g})=>r==="date"?d(c):r==="action"?i({id:`Settings.permissions.auditLogs.${c}`,defaultMessage:h(c)},{model:g}):c||"-";return e.createElement(t.Tbody,null,l.map(r=>e.createElement(t.Tr,{key:r.id,...(0,u.onRowClick)({fn:()=>m(r.id)})},a.map(({key:c,name:g,cellFormatter:f})=>e.createElement(t.Td,{key:c},e.createElement(t.Typography,{textColor:"neutral800"},s({type:c,value:f?f(r[g]):r[g],model:r.payload?.model})))),e.createElement(t.Td,{...u.stopPropagation},e.createElement(t.Flex,{justifyContent:"end"},e.createElement(t.IconButton,{onClick:()=>m(r.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${r.action} action`}),noBorder:!0,icon:e.createElement(N.Eye,null)}))))))};b.defaultProps={rows:[]},b.propTypes={headers:n().array.isRequired,rows:n().array,onOpenModal:n().func.isRequired};const O=b,R=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],C=({pagination:a})=>e.createElement(t.Box,{paddingTop:4},e.createElement(t.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(u.PageSizeURLQuery,null),e.createElement(u.PaginationURLQuery,{pagination:a})));C.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},C.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const j=C;var F=o(23724);const W=({actionLabel:a,actionName:l})=>e.createElement(t.Flex,{direction:"column",alignItems:"baseline",gap:1},e.createElement(t.Typography,{textColor:"neutral600",variant:"sigma"},a),e.createElement(t.Typography,{textColor:"neutral600"},l));W.propTypes={actionLabel:n().string.isRequired,actionName:n().string.isRequired};const A=W,U=({status:a,data:l,formattedDate:m})=>{const{formatMessage:i}=(0,y.useIntl)();if(a==="loading")return e.createElement(t.Flex,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(t.Loader,null,"Loading content..."));const{action:d,user:s,payload:r}=l;return e.createElement(e.Fragment,null,e.createElement(t.Box,{marginBottom:3},e.createElement(t.Typography,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(t.Grid,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(A,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:h(d)},{model:r?.model})}),e.createElement(A,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:m}),e.createElement(A,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:s?.displayName||"-"}),e.createElement(A,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:s?.id.toString()||"-"})),e.createElement(t.JSONInput,{value:JSON.stringify(r,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};U.defaultProps={data:{}},U.propTypes={status:n().oneOf(["idle","loading","error","success"]).isRequired,data:n().shape({action:n().string,date:n().string,payload:n().object,user:n().object}),formattedDate:n().string.isRequired};const w=U,$=({handleClose:a,logId:l})=>{const{get:m}=(0,u.useFetchClient)(),i=(0,u.useNotification)(),d=async f=>{const{data:E}=await m(`/admin/audit-logs/${f}`);if(!E)throw new Error("Audit log not found");return E},{data:s,status:r}=(0,F.useQuery)(["audit-log",l],()=>d(l),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),c=S(),g=s?c(s.date):"";return e.createElement(t.ModalLayout,{onClose:a,labelledBy:"title"},e.createElement(t.ModalHeader,null,e.createElement(t.Breadcrumbs,{label:g,id:"title"},e.createElement(t.Crumb,null,g))),e.createElement(t.ModalBody,null,e.createElement(w,{status:r,data:s,formattedDate:g})))};$.propTypes={handleClose:n().func.isRequired,logId:n().string.isRequired};const H=$;var z=o(94699);const B=({value:a,options:l,onChange:m})=>{const{formatMessage:i}=(0,y.useIntl)(),d=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(t.Combobox,{"aria-label":d,value:a,onChange:m},l.map(({label:s,customValue:r})=>e.createElement(t.ComboboxOption,{key:r,value:r},s)))};B.defaultProps={value:null},B.propTypes={value:n().string,options:n().arrayOf(n().shape({label:n().string.isRequired,customValue:n().string.isRequired}).isRequired).isRequired,onChange:n().func.isRequired};const K=B,Q=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Z=({formatMessage:a,users:l})=>{const m=s=>s.username?s.username:s.firstname&&s.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:s.firstname,lastname:s.lastname}):s.email,i=Object.keys(T).map(s=>({label:a({id:`Settings.permissions.auditLogs.${s}`,defaultMessage:h(s)},{model:void 0}),customValue:s})),d=l&&l.results.map(s=>({label:m(s),customValue:s.id.toString()}));return[{name:"action",metadatas:{customOperators:Q,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:i,customInput:K},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}},{name:"user",metadatas:{customOperators:Q,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:d,customInput:K},fieldSchema:{type:"relation",mainField:{name:"id"}}}]};var J=o(49656);const Y=({canRead:a})=>{const{get:l}=(0,u.useFetchClient)(),{search:m}=(0,J.useLocation)(),i=(0,u.useNotification)(),d=async({queryKey:D})=>{const q=D[1],{data:ee}=await l(`/admin/audit-logs${q}`);return ee},s=async()=>{const{data:D}=await l("/admin/users");return D},r={enabled:a,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:D=>i({type:"warning",message:D.message})},{data:c,isLoading:g,isError:f}=(0,F.useQuery)(["auditLogs",m],d,r),{data:E,isError:L}=(0,F.useQuery)(["auditLogsUsers"],s,{...r,staleTime:2*(1e3*60)}),k=f||L;return{auditLogs:c,users:E?.data,isLoading:g,hasError:k}},G=()=>{const{formatMessage:a}=(0,y.useIntl)(),{allowedActions:{canRead:l}}=(0,u.useRBAC)(p.Z.settings.auditLogs),[{query:m},i]=(0,u.useQueryParams)(),{auditLogs:d,users:s,isLoading:r,hasError:c}=Y({canRead:l});(0,u.useFocusWhenNavigate)();const g=Z({formatMessage:a,users:s}),f=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),E=R.map(L=>({...L,metadatas:{...L.metadatas,label:a(L.metadatas.label)}}));return c?e.createElement(t.Layout,null,e.createElement(t.ContentLayout,null,e.createElement(t.Box,{paddingTop:8},e.createElement(u.AnErrorOccurred,null)))):e.createElement(t.Main,{"aria-busy":r},e.createElement(u.SettingsPageTitle,{name:f}),e.createElement(t.HeaderLayout,{title:f,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(t.ActionLayout,{startActions:e.createElement(z.Z,{displayedFilters:g})}),e.createElement(t.ContentLayout,{canRead:l},e.createElement(u.DynamicTable,{contentType:"Audit logs",headers:E,rows:d?.results||[],withBulkActions:!0,isLoading:r},e.createElement(O,{headers:E,rows:d?.results||[],onOpenModal:L=>i({id:L})})),e.createElement(j,{pagination:d?.pagination})),m?.id&&e.createElement(H,{handleClose:()=>i({id:null},"remove"),logId:m.id}))},X=()=>e.createElement(u.CheckPagePermissions,{permissions:p.Z.settings.auditLogs.main},e.createElement(G,null))}}]);

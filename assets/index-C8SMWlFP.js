import{a as R,b as $,s as P,f as s,c as y,l as _,h as m,i as j,r as u,u as A,_ as M,j as D,d as N,e as U}from"./index-BIvQ7OHL.js";import{T as W}from"./Bootstrap-BxXKygFr.js";import{T as E}from"./Tablelvl2Context-aL9eNfYJ.js";function L(a){return R("MuiTableCell",a)}const B=$("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),I=["align","className","component","padding","scope","size","sortDirection","variant"],J=a=>{const{classes:i,variant:e,align:o,padding:n,size:c,stickyHeader:r}=a,g={root:["root",e,r&&"stickyHeader",o!=="inherit"&&`align${s(o)}`,n!=="normal"&&`padding${s(n)}`,`size${s(c)}`]};return U(g,L,i)},q=P("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:e}=a;return[i.root,i[e.variant],i[`size${s(e.size)}`],e.padding!=="normal"&&i[`padding${s(e.padding)}`],e.align!=="inherit"&&i[`align${s(e.align)}`],e.stickyHeader&&i.stickyHeader]}})(({theme:a,ownerState:i})=>y({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?`1px solid ${a.vars.palette.TableCell.border}`:`1px solid
    ${a.palette.mode==="light"?_(m(a.palette.divider,1),.88):j(m(a.palette.divider,1),.68)}`,textAlign:"left",padding:16},i.variant==="head"&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},i.variant==="body"&&{color:(a.vars||a).palette.text.primary},i.variant==="footer"&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},i.size==="small"&&{padding:"6px 16px",[`&.${B.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},i.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},i.padding==="none"&&{padding:0},i.align==="left"&&{textAlign:"left"},i.align==="center"&&{textAlign:"center"},i.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},i.align==="justify"&&{textAlign:"justify"},i.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})),O=u.forwardRef(function(i,e){const o=A({props:i,name:"MuiTableCell"}),{align:n="inherit",className:c,component:r,padding:g,scope:z,size:T,sortDirection:x,variant:h}=o,k=M(o,I),t=u.useContext(W),d=u.useContext(E),f=d&&d.variant==="head";let l;r?l=r:l=f?"th":"td";let p=z;l==="td"?p=void 0:!p&&f&&(p="col");const b=h||d&&d.variant,v=y({},o,{align:n,component:l,padding:g||(t&&t.padding?t.padding:"normal"),size:T||(t&&t.size?t.size:"medium"),sortDirection:x,stickyHeader:b==="head"&&t&&t.stickyHeader,variant:b}),H=J(v);let C=null;return x&&(C=x==="asc"?"ascending":"descending"),D.jsx(q,y({as:l,ref:e,className:N(H.root,c),"aria-sort":C,scope:p,ownerState:v},k))});export{O as default,L as getTableCellUtilityClass,B as tableCellClasses};
//# sourceMappingURL=index-C8SMWlFP.js.map

import{_ as p,af as F,ag as Y,ah as _,ai as H,l as s,d as V,aj as $,ak as U,a0 as q,a5 as z,a1 as P,$ as K,al as Q,am as W,an as Z}from"./diagramElement-Cyw6LVG_.js";import{G as B}from"./graph-BMW6nNU7.js";import{l as I}from"./layout-CKNVIehj.js";import{i as S}from"./_baseUniq--G8EHyJJ.js";import{c as L}from"./clone-BY3-iB1q.js";import{m as A}from"./_basePickBy-sIE1qDX3.js";import"./property-C_111YFZ.js";import"./lit-element-in3Y6axH.js";import"./settings-BQP9c3yA.js";import"./state-B7rdIQBm.js";import"./iframe-GiDawbIz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./timer-CN_v9RCa.js";import"./index-DrFu-skq.js";import"./loading-B6u45s9P.js";import"./carbon-element-ZG_lSGav.js";import"./directive-Bp-AemGL.js";import"./unsafe-html-D-LwtoKn.js";function y(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:ee(e),edges:ne(e)};return S(e.graph())||(t.value=L(e.graph())),t}function ee(e){return A(e.nodes(),function(t){var n=e.node(t),o=e.parent(t),c={v:t};return S(n)||(c.value=n),S(o)||(c.parent=o),c})}function ne(e){return A(e.edges(),function(t){var n=e.edge(t),o={v:t.v,w:t.w};return S(t.name)||(o.name=t.name),S(n)||(o.value=n),o})}var f=new Map,b=new Map,J=new Map,te=p(()=>{b.clear(),J.clear(),f.clear()},"clear"),O=p((e,t)=>{const n=b.get(t)||[];return s.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),ie=p((e,t)=>{const n=b.get(t)||[];return s.info("Descendants of ",t," is ",n),s.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||O(e.v,t)||O(e.w,t)||n.includes(e.w):(s.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),G=p((e,t,n,o)=>{s.warn("Copying children of ",e,"root",o,"data",t.node(e),o);const c=t.children(e)||[];e!==o&&c.push(e),s.warn("Copying (nodes) clusterId",e,"nodes",c),c.forEach(a=>{if(t.children(a).length>0)G(a,t,n,o);else{const r=t.node(a);s.info("cp ",a," to ",o," with parent ",e),n.setNode(a,r),o!==t.parent(a)&&(s.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==o&&a!==e?(s.debug("Setting parent",a,e),n.setParent(a,e)):(s.info("In copy ",e,"root",o,"data",t.node(e),o),s.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==o,"node!==clusterId",a!==e));const u=t.edges(a);s.debug("Copying Edges",u),u.forEach(l=>{s.info("Edge",l);const v=t.edge(l.v,l.w,l.name);s.info("Edge data",v,o);try{ie(l,o)?(s.info("Copying as ",l.v,l.w,v,l.name),n.setEdge(l.v,l.w,v,l.name),s.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):s.info("Skipping copy of edge ",l.v,"-->",l.w," rootId: ",o," clusterId:",e)}catch(C){s.error(C)}})}s.debug("Removing node",a),t.removeNode(a)})},"copy"),R=p((e,t)=>{const n=t.children(e);let o=[...n];for(const c of n)J.set(c,e),o=[...o,...R(c,t)];return o},"extractDescendants"),se=p((e,t,n)=>{const o=e.edges().filter(l=>l.v===t||l.w===t),c=e.edges().filter(l=>l.v===n||l.w===n),a=o.map(l=>({v:l.v===t?n:l.v,w:l.w===t?t:l.w})),r=c.map(l=>({v:l.v,w:l.w}));return a.filter(l=>r.some(v=>l.v===v.v&&l.w===v.w))},"findCommonEdges"),D=p((e,t,n)=>{const o=t.children(e);if(s.trace("Searching children of id ",e,o),o.length<1)return e;let c;for(const a of o){const r=D(a,t,n),u=se(t,n,r);if(r)if(u.length>0)c=r;else return r}return c},"findNonClusterChild"),k=p(e=>!f.has(e)||!f.get(e).externalConnections?e:f.has(e)?f.get(e).id:e,"getAnchorId"),re=p((e,t)=>{if(!e||t>10){s.debug("Opting out, no graph ");return}else s.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(s.warn("Cluster identified",n," Replacement id in edges: ",D(n,e,n)),b.set(n,R(n,e)),f.set(n,{id:D(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){const o=e.children(n),c=e.edges();o.length>0?(s.debug("Cluster identified",n,b),c.forEach(a=>{const r=O(a.v,n),u=O(a.w,n);r^u&&(s.warn("Edge: ",a," leaves cluster ",n),s.warn("Descendants of XXX ",n,": ",b.get(n)),f.get(n).externalConnections=!0)})):s.debug("Not a cluster ",n,b)});for(let n of f.keys()){const o=f.get(n).id,c=e.parent(o);c!==n&&f.has(c)&&!f.get(c).externalConnections&&(f.get(n).id=c)}e.edges().forEach(function(n){const o=e.edge(n);s.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),s.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let c=n.v,a=n.w;if(s.warn("Fix XXX",f,"ids:",n.v,n.w,"Translating: ",f.get(n.v)," --- ",f.get(n.w)),f.get(n.v)||f.get(n.w)){if(s.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),c=k(n.v),a=k(n.w),e.removeEdge(n.v,n.w,n.name),c!==n.v){const r=e.parent(c);f.get(r).externalConnections=!0,o.fromCluster=n.v}if(a!==n.w){const r=e.parent(a);f.get(r).externalConnections=!0,o.toCluster=n.w}s.warn("Fix Replacing with XXX",c,a,n.name),e.setEdge(c,a,o,n.name)}}),s.warn("Adjusted Graph",y(e)),T(e,0),s.trace(f)},"adjustClustersAndEdges"),T=p((e,t)=>{var c,a;if(s.warn("extractor - ",t,y(e),e.children("D")),t>10){s.error("Bailing out");return}let n=e.nodes(),o=!1;for(const r of n){const u=e.children(r);o=o||u.length>0}if(!o){s.debug("Done, no node has children",e.nodes());return}s.debug("Nodes = ",n,t);for(const r of n)if(s.debug("Extracting node",r,f,f.has(r)&&!f.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!f.has(r))s.debug("Not a cluster",r,t);else if(!f.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){s.warn("Cluster without external connections, without a parent and with children",r,t);let l=e.graph().rankdir==="TB"?"LR":"TB";(a=(c=f.get(r))==null?void 0:c.clusterData)!=null&&a.dir&&(l=f.get(r).clusterData.dir,s.warn("Fixing dir",f.get(r).clusterData.dir,l));const v=new B({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});s.warn("Old graph before copy",y(e)),G(r,e,v,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:f.get(r).clusterData,label:f.get(r).label,graph:v}),s.warn("New graph after copy node: (",r,")",y(v)),s.debug("Old graph after copy",y(e))}else s.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!f.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),s.debug(f);n=e.nodes(),s.warn("New list of nodes",n);for(const r of n){const u=e.node(r);s.warn(" Now next level",r,u),u!=null&&u.clusterNode&&T(u.graph,t+1)}},"extractor"),M=p((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(o=>{const c=e.children(o),a=M(e,c);n=[...n,...a]}),n},"sorter"),oe=p(e=>M(e,e.children()),"sortNodesByHierarchy"),j=p(async(e,t,n,o,c,a)=>{s.warn("Graph in recursive render:XAX",y(t),c);const r=t.graph().rankdir;s.trace("Dir in recursive render - dir:",r);const u=e.insert("g").attr("class","root");t.nodes()?s.info("Recursive render XXX",t.nodes()):s.info("No nodes found for",t),t.edges().length>0&&s.info("Recursive edges",t.edge(t.edges()[0]));const l=u.insert("g").attr("class","clusters"),v=u.insert("g").attr("class","edgePaths"),C=u.insert("g").attr("class","edgeLabels"),g=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(d){const i=t.node(d);if(c!==void 0){const m=JSON.parse(JSON.stringify(c.clusterData));s.trace(`Setting data for parent cluster XXX
 Node.id = `,d,`
 data=`,m.height,`
Parent cluster`,c.height),t.setNode(c.id,m),t.parent(d)||(s.trace("Setting parent",d,c.id),t.setParent(d,c.id,m))}if(s.info("(Insert) Node XXX"+d+": "+JSON.stringify(t.node(d))),i!=null&&i.clusterNode){s.info("Cluster identified XBX",d,i.width,t.node(d));const{ranksep:m,nodesep:h}=t.graph();i.graph.setGraph({...i.graph.graph(),ranksep:m+25,nodesep:h});const N=await j(g,i.graph,n,o,t.node(d),a),x=N.elem;$(i,x),i.diff=N.diff||0,s.info("New compound node after recursive render XAX",d,"width",i.width,"height",i.height),U(x,i)}else t.children(d).length>0?(s.trace("Cluster - the non recursive path XBX",d,i.id,i,i.width,"Graph:",t),s.trace(D(i.id,t)),f.set(i.id,{id:D(i.id,t),node:i})):(s.trace("Node - the non recursive path XAX",d,g,t.node(d),r),await q(g,t.node(d),{config:a,dir:r}))})),await p(async()=>{const d=t.edges().map(async function(i){const m=t.edge(i.v,i.w,i.name);s.info("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(i)),s.info("Edge "+i.v+" -> "+i.w+": ",i," ",JSON.stringify(t.edge(i))),s.info("Fix",f,"ids:",i.v,i.w,"Translating: ",f.get(i.v),f.get(i.w)),await Z(C,m)});await Promise.all(d)},"processEdges")(),s.info("Graph before layout:",JSON.stringify(y(t))),s.info("############################################# XXX"),s.info("###                Layout                 ### XXX"),s.info("############################################# XXX"),I(t),s.info("Graph after layout:",JSON.stringify(y(t)));let E=0,{subGraphTitleTotalMargin:X}=z(a);return await Promise.all(oe(t).map(async function(d){var m;const i=t.node(d);if(s.info("Position XBX => "+d+": ("+i.x,","+i.y,") width: ",i.width," height: ",i.height),i!=null&&i.clusterNode)i.y+=X,s.info("A tainted cluster node XBX1",d,i.id,i.width,i.height,i.x,i.y,t.parent(d)),f.get(i.id).node=i,P(i);else if(t.children(d).length>0){s.info("A pure cluster node XBX1",d,i.id,i.x,i.y,i.width,i.height,t.parent(d)),i.height+=X,t.node(i.parentId);const h=(i==null?void 0:i.padding)/2||0,N=((m=i==null?void 0:i.labelBBox)==null?void 0:m.height)||0,x=N-h||0;s.debug("OffsetY",x,"labelHeight",N,"halfPadding",h),await K(l,i),f.get(i.id).node=i}else{const h=t.node(i.parentId);i.y+=X/2,s.info("A regular node XBX1 - using the padding",i.id,"parent",i.parentId,i.width,i.height,i.x,i.y,"offsetY",i.offsetY,"parent",h,h==null?void 0:h.offsetY,i),P(i)}})),t.edges().forEach(function(d){const i=t.edge(d);s.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(i),i),i.points.forEach(x=>x.y+=X/2);const m=t.node(d.v);var h=t.node(d.w);const N=Q(v,i,f,n,m,h,o);W(i,N)}),t.nodes().forEach(function(d){const i=t.node(d);s.info(d,i.type,i.diff),i.isGroup&&(E=i.diff)}),s.warn("Returning from recursive render XAX",u,E),{elem:u,diff:E}},"recursiveRender"),Se=p(async(e,t)=>{var a,r,u,l,v,C;const n=new B({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((a=e.config)==null?void 0:a.nodeSpacing)||((u=(r=e.config)==null?void 0:r.flowchart)==null?void 0:u.nodeSpacing)||e.nodeSpacing,ranksep:((l=e.config)==null?void 0:l.rankSpacing)||((C=(v=e.config)==null?void 0:v.flowchart)==null?void 0:C.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");F(o,e.markers,e.type,e.diagramId),Y(),_(),H(),te(),e.nodes.forEach(g=>{n.setNode(g.id,{...g}),g.parentId&&n.setParent(g.id,g.parentId)}),s.debug("Edges:",e.edges),e.edges.forEach(g=>{if(g.start===g.end){const w=g.start,E=w+"---"+w+"---1",X=w+"---"+w+"---2",d=n.node(w);n.setNode(E,{domId:E,id:E,parentId:d.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(E,d.parentId),n.setNode(X,{domId:X,id:X,parentId:d.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(X,d.parentId);const i=structuredClone(g),m=structuredClone(g),h=structuredClone(g);i.label="",i.arrowTypeEnd="none",i.id=w+"-cyclic-special-1",m.arrowTypeEnd="none",m.id=w+"-cyclic-special-mid",h.label="",d.isGroup&&(i.fromCluster=w,h.toCluster=w),h.id=w+"-cyclic-special-2",n.setEdge(w,E,i,w+"-cyclic-special-0"),n.setEdge(E,X,m,w+"-cyclic-special-1"),n.setEdge(X,w,h,w+"-cyc<lic-special-2")}else n.setEdge(g.start,g.end,{...g},g.id)}),s.warn("Graph at first:",JSON.stringify(y(n))),re(n),s.warn("Graph after XAX:",JSON.stringify(y(n)));const c=V();await j(o,n,e.type,e.diagramId,void 0,c)},"render");export{Se as render};

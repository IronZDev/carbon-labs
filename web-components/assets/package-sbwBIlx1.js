const e="@carbon-labs/ai-chat",s="0.14.0",t={access:"public",provenance:!0},n="module",i="Carbon Labs - chat component",o="Apache-2.0",c={type:"git",url:"https://github.com/carbon-design-system/carbon-labs",directory:"packages/chat"},l="./src/index.js",r="./src/index.js",a={".":{default:"./src/index.js"},"./es/":"./es/"},d=["es/**/*","telemetry.yml","custom-elements.json"],m="./src/index.d.ts",p="custom-elements.json",b={build:"gulp build --option chat","build:dist":"rm -rf dist && rollup --config ../../../tasks/build-dist.js","build:dist:canary":"rm -rf dist && rollup --config ../../../tasks/build-dist.js --configCanary",postinstall:"ibmtelemetry --config=telemetry.yml"},u={"@babel/core":"^7.26.0","@babel/runtime":"^7.23.2","@carbon-labs/utilities":"0.14.0","@carbon/web-components":"2.18.0","@ibm/telemetry-js":"^1.6.0",highlightjs:"^9.16.2",mathjax:"^3.2.2",mermaid:"^11.2.1","smiles-drawer":"^2.1.7",vega:"^5.28.0","vega-embed":"^6.24.0","vega-lite":"^5.17.0"},g={"@types/highlightjs":"^9"},y={name:e,version:s,publishConfig:t,type:n,description:i,license:o,repository:c,main:l,module:r,exports:a,files:d,types:m,customElements:p,scripts:b,dependencies:u,devDependencies:g};export{y as p};

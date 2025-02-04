import{ae as e,af as r}from"./index-CiNx4-_7.js";import{useMDXComponents as s}from"./index-Ca40sVGY.js";import{C as a}from"./chartElement.stories-CjKFRp7A.js";import"./iframe-BpWNze9y.js";import"../sb-preview/runtime.js";import"./index-Bw5jCugi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./property-DRkoNOFH.js";import"./lit-element-CKvUdWNz.js";import"./settings-BQP9c3yA.js";import"./state-BaIcuqWU.js";import"./16-DiV1dIgx.js";import"./directive-CF8sV3Lr.js";import"./carbon-element-Cjizy3rH.js";import"./tooltip-content-B8wyidF3.js";import"./host-listener-BQQ0D0ZC.js";import"./query-BApjzB0v.js";import"./button-BQSJpxOj.js";import"./focus-Dn8ldJgF.js";import"./spread-Cnb5k-G6.js";import"./collection-helpers-cjWplwKn.js";import"./codeElement-YzfAKbJo.js";import"./16-B03IhBLS.js";import"./16-BwWip7mp.js";import"./16-DIDCtVVX.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"chart-handbook",children:"Chart Handbook"}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initiative owner(s):"})," Owen Cornec"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status:"})," Draft"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target library:"})," TBD"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target library maintainer(s) / PR Reviewer(s):"})," N/A"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Support channel:"})," ",e.jsx(n.code,{children:"#carbon-labs"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#installation",children:"Installation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#js-via-import",children:"JS via import"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#implementation",children:"Implementation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#independent-usage",children:"Independent Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#attributes",children:"<clabs-chat-chart> attributes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#events",children:"Events"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#vega-format",children:"Vega formatting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#simple-example",children:"Simple chart specification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#carbonification",children:"Effects of carbonify field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-json",children:"Usage inside Chat within the JSON conversation object"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-text",children:"Usage as plain text response"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#merging-carbon-and-vega",children:"Merging Vega-lite and Carbon Charts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#choice-of-vega",children:"Choice of Vega-lite"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#vega-and-carbon",children:"Vega as the back bone, Carbon as the output"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#advantages",children:"Advantages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disadvantages",children:"Disadvantages"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("a",{id:"overview"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:[`The Chart component renders a large variety of Charts by consuming Vega-lite
JSON specifications in its `,e.jsx(n.code,{children:"content"}),` attribute. These can easily be generated by
LLMs, enabling true conversation-based chart design, editing and streaming.`]})}),`
`,e.jsxs(n.p,{children:[`Like all components in Carbon Labs, Charts are invoked inside the core Chat
component but can easily be imported separately and used independently. By
default the `,e.jsx(n.code,{children:"carbonify"}),` attribute is enabled which extensively edits the
specification styling in order to recreate Carbon Charts styling. This overrides
and edits all axis/legend/title/encoding/gradient/colorscale values to display
the specification as a clone of classic Carbon Charts.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vega-lite reference: ",e.jsx(n.a,{href:"https://vega.github.io/vega-lite/",rel:"nofollow",children:"vega.github.io"})]}),`
`,e.jsxs(n.li,{children:[`Carbon Charts reference:
`,e.jsx(n.a,{href:"https://charts.carbondesignsystem.com/?path=/story/docs--welcome",rel:"nofollow",children:"charts.carbondesignsystem.com"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Feel free to contact Owen Cornec (on Slack or o.cornec@ibm.com) if you have
any issues/questions`})}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx("a",{id:"installation"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx("a",{id:"js-via-import"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"javascript import '@carbon-labs/ai-chat-chart/es/index.js'; "})}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx("a",{id:"implementation"}),`
`,e.jsx(n.h3,{id:"independent-usage",children:"Independent Usage:"}),`
`,e.jsx("a",{id:"independent-usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<clabs-chat-chart
  content="{ ... }"
  container-height="500px"
  container-width="100%"
  theme="g100"></clabs-chat-chart>
`})}),`
`,e.jsx(n.h3,{id:"clabs-chat-chart-attributes",children:"<clabs-chat-chart> attributes"}),`
`,e.jsx("a",{id:"chart-attributes"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:"Attribute"})}),e.jsx("td",{children:e.jsx(n.strong,{children:"Type"})}),e.jsx("td",{children:e.jsx(n.strong,{children:"Default"})}),e.jsx("td",{children:e.jsx(n.strong,{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"content"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"empty"}),e.jsx("td",{children:e.jsx(n.p,{children:`stringified JSON object defining a Vega-lite V5 chart specification.
Specifications must contain $schema, data and encoding`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"debug"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:e.jsx(n.p,{children:`shows specification editor button and displays all errors in component
when in error mode, otherwise show: Chart failed to render, see console
for more details`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"container-height"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:'"300px"'}),e.jsx("td",{children:e.jsx(n.p,{children:`valid CSS string to define chart height, applied to chart container
while specification fills the parent container height`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"container-width"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:'"100%"'}),e.jsx("td",{children:e.jsx(n.p,{children:`same as container-height, a CSS string to define the width, applied to
chart container`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"render-method"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:'"canvas"'}),e.jsx("td",{children:e.jsx(n.p,{children:`render using "svg" (easier to inspect in the DOM) or
"canvas" (better performance)`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"theme"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:'"g100"'}),e.jsx("td",{children:e.jsx(n.p,{children:`this value is either "g100" or "white" and displays
the chart using Carbon Chart theme colors.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"carbonify"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:e.jsx(n.p,{children:`extensively redefine the "config" field of the specification
to apply Carbon Chart styling to chart defined in the specification`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"enable-legend-filtering"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"enable filtering of data points when clicking legend"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"enable-tooltip"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"enable tooltip in the chart component"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"enable-zooming"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"enable user-zooming in the chart component"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"enable-brushing"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"enable user-brush selection to fetch groups of elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"disable-options"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:e.jsx(n.p,{children:`disable all chart option buttons, supercedes all other individual button
options below`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"disable-fullscreen"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"hide fullscreen button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"disable-editor"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"hide vega editor button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"disable-export"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"hide PNG export button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"disable-code-inspector"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"hide spec viewer button"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"loading"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:e.jsx(n.p,{children:`show loading animation. When content is provided chart will auto-render
and this will false. If streaming: raw data is incrementally displayed
until complete and rendered`})})]})]})]}),`
`,e.jsx(n.h3,{id:"clabs-chat-chart-events",children:"<clabs-chat-chart> events"}),`
`,e.jsx("a",{id:"events"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.strong,{children:"Event listener name"})}),e.jsx("td",{children:e.jsx(n.strong,{children:"Trigger condition"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"on-chart-specification-ready"})}),e.jsx("td",{children:"Chart is fully parsed/rendered post-carbonification"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"on-chart-error"})}),e.jsx("td",{children:"Rendering encountered an error"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"on-chart-single-selection"})}),e.jsx("td",{children:"Selection event found one object selected"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"on-chart-multi-selection"})}),e.jsx("td",{children:"Selection event found a range of quantitative/qualitative values"})]})]}),`
`,e.jsx(n.h2,{id:"vega-formatting",children:"Vega formatting"}),`
`,e.jsx("a",{id:"vega-format"}),`
`,e.jsx(n.p,{children:`Vega specifications (i.e specs) are JSON objects containing everything needed to
render charts in one shot.`}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["These must be provided as stringified objects in the ",e.jsx(n.code,{children:"content"})," field:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json", //link to Vega-lite schema to interpret attributes (Only V5 is supported)
  "data", //can contain a 'values' array of data points or 'url' string linking to a dataset
  "encoding", //maps axes/colors/sizes to specific columns
  "config", //global style guide to apply edits to every option in Vega-lite
  //ADVANCED OPTIONS
  "repeat", //contains a 'columns' array of column names or an object with 'column' and 'rows'. If repeat is enabled, the entire spec should be placed in 'spec' below:
  "spec", //sub-specification containing all attributes above (ONLY if repeat is defined)
  "layer", //enables layered-charts, array of spec objects with all the above attributes (data, encoding, config), the core parent config will be retooled to force-apply styling to children with the carbonify option
}
`})}),`
`,e.jsx(n.h3,{id:"simple-bar-chart-specification",children:"Simple bar chart specification:"}),`
`,e.jsx("a",{id:"simple-example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category": "A", "value": 20},
      {"category": "B", "value": 40},
      {"category": "C", "value": 60}
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": {"field": "category", "type": "nominal", "axis": {"title": "Category"}},
      "y": {"field": "value", "type": "quantitative", "axis": {"title": "Value"}}
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"effects-of-carbonify-field",children:"Effects of carbonify field:"}),`
`,e.jsx("a",{id:"carbonification"}),`
`,e.jsxs(n.p,{children:["Enabled by default, the ",e.jsx(n.code,{children:"carbonify"}),` field in <clabs-chat-chart> will
append a `,e.jsx(n.code,{children:"config"}),` object to extensively edit the specification to apply Carbon
Design styling, while retaining all unique user styling. Disabling it will
render the specification as is, useful for debugging.`]}),`
`,e.jsx(n.h3,{id:"usage-inside-chat-within-the-json-conversation-object",children:"Usage inside Chat within the JSON conversation object:"}),`
`,e.jsx("a",{id:"usage-with-json"}),`
`,e.jsxs(n.p,{children:["If specified within a valid JSON ",e.jsx(n.code,{children:"conversation"})," attribute:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<clabs-chat conversation="conversationJSON"> </clabs-chat>
`})}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"conversationJSON"})," object as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`[
  {
  "origin":"user",
  "timestamp":"7:01pm",
  "elements":
      [
        {"type": "text", "content": "Give me line chart using price over time"}
      ]
  },
  {
  "origin":"bot",
  "timestamp":"7:06pm",
  "elements":
      [
        {"type": "text", "content": "Here is the chart your requested:"}
        ,
        {"type": "chart", "content": ChartJSONString }
      ]
  }
]
`})}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"ChartJSONString"})," as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`"{\\"$schema\\":\\"https://vega.github.io/schema/vega-lite/v5.json\\",\\"data\\": [], \\"encoding\\": {}}"
`})}),`
`,e.jsx(n.h3,{id:"usage-as-plain-text-response",children:"Usage as plain text response:"}),`
`,e.jsx("a",{id:"usage-with-text"}),`
`,e.jsxs(n.p,{children:["If streaming or using plain ",e.jsx(n.code,{children:"rawText"}),` field, simply place the JSON specification
in you message item using a \\n then auto-parsing will identify it.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<clabs-chat
conversation = [
  {
  "origin":"user",
  "timestamp":"7:01pm",
  "rawText": "Give me line chart using price over time"
  },
  {
  "origin":"bot",
  "timestamp":"7:06pm",
  "rawText": 'Here is the chart you requested\\n {"$schema":"https://vega.github.io/schema/vega-lite/v5.json","data": ..., "encoding": ...}'
  }
]>
</clabs-chat>
`})}),`
`,e.jsx(n.h2,{id:"merging-vega-lite-and-carbon-charts",children:"Merging Vega-lite and Carbon Charts"}),`
`,e.jsx("a",{id:"merging-carbon-and-vega"}),`
`,e.jsx(n.h3,{id:"choice-of-vega-lite",children:"Choice of Vega-lite"}),`
`,e.jsx("a",{id:"choice-of-vega"}),`
`,e.jsx(n.p,{children:`Countless visualization libraries are available and provide many features to
generate and visualize charts. Many were tested by the Visual AI Lab with a
variety of models.`}),`
`,e.jsxs(n.p,{children:["Vega-lite was chosen due to it's ",e.jsx(n.strong,{children:"longevity"}),", ",e.jsx(n.strong,{children:"succinctness"})," and ",e.jsx(n.strong,{children:`common
usage`}),`, most LLMs have a large training corpus on a variety of Vega-lite
specifications. We found this greatly improved reliability during LLM
generation, as hallucinations and formatting/versioning errors are common in
this space. Additionally, Vega only requires a single JSON object to display any
type of chart, which forgoes the need for multiple context-dependent calls.`]}),`
`,e.jsx(n.h3,{id:"vega-as-the-back-bone-carbon-as-the-output",children:"Vega as the back bone, Carbon as the output"}),`
`,e.jsx("a",{id:"vega-and-carbon"}),`
`,e.jsxs(n.p,{children:[`Carbon Charts is an excellently designed, robust and production-ready library
following core Carbon design guidelines. Regrettably without fine-tuning,
generation accuracy is insufficient due to a lack of examples in common training
data. Carbon Charts also requires a predefined HTML chart tag (such as
<AreaChart> <SimpleBarChart> etc) as well as separate `,e.jsx(n.code,{children:"options"}),` and
`,e.jsx(n.code,{children:"data"}),` fields. This requires multiple queries, with the additional complexity of
shared context and custom doctoring/sanitization.`]}),`
`,e.jsxs(n.p,{children:[`Yet despite it's generative edge, standard Vega styling is ill-fitting in any
Carbon environment which prohibits any product-side adoption. This led us to
adopt a hybrid approach, using Vega-lite as a boilerplate for querying LLMs then
programmatically adding and editing styles/interactions/scaling. `,e.jsx(n.strong,{children:`This
component is not a replacement for Carbon Charts`}),`: it is primarily meant to
reliably handle highly-variable LLM-generated content and allow creation and
editing through conversation.`]}),`
`,e.jsx(n.h3,{id:"advantages",children:"Advantages"}),`
`,e.jsx("a",{id:"advantages"}),`
`,e.jsxs(n.p,{children:[`With Vega a single JSON object string is all that is needed, thus charts can be
generated in a single call to a model. This enables quicker response times,
product-ready reliability and token-by-token streaming. Additionally,
Vega-specific features are now possible, such as repeating charts (Comparative
chart over a matrix of data fields) and multi-layer charts (Multiple types of
any chart layered in sequence). We avoid designed the system to adapt to any
model and refrain from ferrying any data into the model. Only column names are
sent in, saving on token usage and bandwidth. All data should be specified
post-hoc in `,e.jsx(n.code,{children:"spec.data.values"})," or ",e.jsx(n.code,{children:"spec.data.url"}),". Finally, the ",e.jsx(n.code,{children:"config"}),` system
allows us to strategically override styles globally, given the unpredictability
of LLM responses it's imperative to retain specific changes requested by users
and override styling randomly appended by the generation process.`]}),`
`,e.jsx(n.h3,{id:"disadvantages",children:"Disadvantages"}),`
`,e.jsx("a",{id:"disadvantages"}),`
`,e.jsx(n.p,{children:`Some chart types in Classic Carbon Charts are not currently supported, such as
WordClouds, Radar Charts, Treemaps, Network/Tree Diagrams and Alluvial/Flow
charts. Touch/mobile features have not been tested and attributes are still
subject to change. Features such as legend interactions to filter out data,
viewing the source data as a table, locale support, and are not currently
implemented as well. (subject to change)`})]})}function A(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{A as default};

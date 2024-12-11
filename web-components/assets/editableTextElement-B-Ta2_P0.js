import{n as d,t as b}from"./property-C_111YFZ.js";import{i as f,s as u,x as g}from"./lit-element-in3Y6axH.js";import{s as x}from"./settings-BQP9c3yA.js";import{r as y}from"./state-B7rdIQBm.js";const m=f`:host(clabs-chat-editable-text){overflow:hidden}:host(clabs-chat-editable-text) .clabs--chat-editable-text-area{overflow:hidden;box-sizing:border-box;flex-grow:1;padding:0;border:none;margin:0;background:none;block-size:var(--chat-editable-text-height, "24px");color:var(--cds-text-primary, #161616);font-family:IBM Plex Sans,sans-serif;font-size:14px;font-style:normal;font-weight:400;inline-size:var(--chat-editable-text-width, "auto");letter-spacing:.16px;line-height:20px;max-inline-size:var(--chat-editable-text-width, "auto");min-inline-size:var(--chat-editable-text-width, "auto");resize:none;word-break:break-word}:host(clabs-chat-editable-text) .clabs--chat-editable-text-area:focus{outline:none}:host(clabs-chat-editable-text) clabs--chat-editable-text--float-right{display:flex;justify-content:flex-end}:host(clabs-chat-editable-text) clabs--chat-editable-text--float-left{display:flex;justify-content:flex-start}`;var _=Object.defineProperty,o=(a,t,e,r)=>{for(var i=void 0,h=a.length-1,l;h>=0;h--)(l=a[h])&&(i=l(t,e,i)||i);return i&&_(t,e,i),i};const c=class c extends u{constructor(){super(...arguments),this._minWidth=123}updated(t){super.updated(t),t.has("_presetWidth")&&this.style.setProperty("--chat-editable-text-width",Math.max(this._minWidth,this._presetWidth-30)+"px")}firstUpdated(){this.content!==null&&(this._presetWidth&&this._presetHeight?this._presetTextAreaSize():this._initiateTextAreaHeight()),this._presetWidth&&this.style.setProperty("--chat-editable-text-width",Math.max(this._minWidth,this._presetWidth-30)+"px")}_setEditedMessage(t){this._editedMessage=t.target.value;const e=new CustomEvent("message-edited",{detail:{value:this._editedMessage},bubbles:!0,composed:!0});this.dispatchEvent(e),this.updateTextAreaHeight(t)}_initiateTextAreaHeight(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".clabs--chat-editable-text-area");t instanceof HTMLElement&&(t.focus(),setTimeout(()=>{this.style.setProperty("--chat-editable-text-height","auto"),this.style.setProperty("--chat-editable-text-height",t.scrollHeight+"px"),this.requestUpdate()},1))}_presetTextAreaSize(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".clabs--chat-editable-text-area");t instanceof HTMLElement&&(t.focus(),this.style.setProperty("--chat-editable-text-height",this._presetHeight+"px"),this.style.setProperty("--chat-editable-text-height",this._presetWidth+"px"),this.requestUpdate())}updateTextAreaHeight(t){const e=t.target;e instanceof HTMLElement&&setTimeout(()=>{this.style.setProperty("--chat-editable-text-height","auto"),this.style.setProperty("--chat-editable-text-height",e.scrollHeight+"px"),this.requestUpdate()},1)}};c.styles=m;let s=c;o([d({type:String,attribute:"content",reflect:!0})],s.prototype,"content");o([y()],s.prototype,"_editedMessage");o([d({type:Number,attribute:"preset-width"})],s.prototype,"_presetWidth");o([d({type:Number,attribute:"preset-height"})],s.prototype,"_presetHeight");o([d({type:Number,attribute:"min-width"})],s.prototype,"_minWidth");/**
 * @license
 *
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{stablePrefix:n}=x;function v(a){const{content:t,_setEditedMessage:e,alignRight:r}=a;return g`<div class="${n}--chat-editable-text">
    <div
      class="${n}--chat-editable-text--float-${r?"right":"left"}">
      <textarea
        .value="${t}"
        @keydown="${e}"
        @keyup="${e}"
        class="${n}--chat-editable-text-area">
${t}</textarea
      >
    </div>
  </div>`}var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,H=(a,t,e,r)=>{for(var i=r>1?void 0:r?P(t,e):t,h=a.length-1,l;h>=0;h--)(l=a[h])&&(i=(r?l(t,e,i):l(i))||i);return r&&i&&w(t,e,i),i};const{stablePrefix:M}=x;let p=class extends s{render(){return v(this)}};p=H([b(`${M}-chat-editable-text`)],p);

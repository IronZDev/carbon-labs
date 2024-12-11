import{_ as i,e as b,p as r,c as m}from"./carbon-element-ZG_lSGav.js";import{F as u,o as s}from"./focus-CQ1fMjd6.js";import{i as y}from"./lit-element-in3Y6axH.js";import{r as h,x as a}from"./directive-Bp-AemGL.js";import{n}from"./property-C_111YFZ.js";import{e as x}from"./query-BApjzB0v.js";var _=y([".cds--link{border:0;box-sizing:border-box;color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;outline:none;padding:0;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:focus{outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:focus{outline-style:dotted}}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;padding:0;text-decoration:none;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}:host(cds-link){outline:none}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(cds-link) .cds--link__icon[hidden]{display:none}"]);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const $={MEDIUM:"md",SMALL:"sm",LARGE:"lg"};let e=class extends u(h){constructor(){super(...arguments),this._hasIcon=!1,this.disabled=!1,this.inline=!1,this.size=$.MEDIUM,this.visited=!1}_handleSlotChange({target:t}){const{name:o}=t,d=t.assignedNodes().some(l=>l.nodeType!==Node.TEXT_NODE||l.textContent.trim());this[o==="icon"?"_hasIcon":""]=d,this.requestUpdate()}get _classes(){const{disabled:t,size:o,inline:d,visited:l,_hasIcon:c}=this;return b({[`${r}--link`]:!0,[`${r}--link--disabled`]:t,[`${r}--link--icon`]:c,[`${r}--link--inline`]:d,[`${r}--link--${o}`]:o,[`${r}--link--visited`]:l})}_handleClick(t){}_renderInner(){const{_hasIcon:t,_handleSlotChange:o}=this;return a`
      <slot @slotchange="${o}"></slot>
      <div ?hidden="${!t}" class="${r}--link__icon">
        <slot name="icon" @slotchange="${o}"></slot>
      </div>
    `}_renderDisabledLink(){const{_classes:t}=this;return a`
      <p id="link" part="link" class="${t}">${this._renderInner()}</p>
    `}_renderLink(){const{download:t,href:o,hreflang:d,linkRole:l,ping:c,rel:p,target:v,type:k,_classes:f,_handleClick:g}=this;return a`
      <a
        tabindex="0"
        id="link"
        role="${s(l)}"
        class="${f}"
        part="link"
        download="${s(t)}"
        href="${s(o)}"
        hreflang="${s(d)}"
        ping="${s(c)}"
        rel="${s(p)}"
        target="${s(v)}"
        type="${s(k)}"
        @click="${g}">
        ${this._renderInner()}
      </a>
    `}render(){const{disabled:t}=this;return t?this._renderDisabledLink():this._renderLink()}};e.shadowRootOptions=Object.assign(Object.assign({},h.shadowRootOptions),{delegatesFocus:!0});e.styles=_;i([x("#link")],e.prototype,"_linkNode",void 0);i([n({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);i([n({reflect:!0})],e.prototype,"download",void 0);i([n({reflect:!0})],e.prototype,"href",void 0);i([n({reflect:!0})],e.prototype,"hreflang",void 0);i([n({type:Boolean,reflect:!0})],e.prototype,"inline",void 0);i([n({attribute:"link-role"})],e.prototype,"linkRole",void 0);i([n({reflect:!0})],e.prototype,"ping",void 0);i([n({reflect:!0})],e.prototype,"rel",void 0);i([n({reflect:!0})],e.prototype,"size",void 0);i([n({reflect:!0})],e.prototype,"target",void 0);i([n({reflect:!0})],e.prototype,"type",void 0);i([n({type:Boolean,reflect:!0})],e.prototype,"visited",void 0);e=i([m(`${r}-link`)],e);

"use strict";(self.webpackChunk_carbon_labs_react=self.webpackChunk_carbon_labs_react||[]).push([[567],{"../../node_modules/@carbon/icons-react/es/generated/bucket-15.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cP:()=>SquareOutline,i6:()=>SidePanelOpen,kz:()=>SidePanelClose});var _path30,_path32,_path138,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@carbon/icons-react/es/Icon.js");const SidePanelClose=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SidePanelClose(_ref21,ref){let{children,size=16,...rest}=_ref21;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.A,{width:size,height:size,ref,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...rest},_path30||(_path30=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V6C30,4.9,29.1,4,28,4z M10,26H4V6h6V26z M28,15H17.8 l3.6-3.6L20,10l-6,6l6,6l1.4-1.4L17.8,17H28v9H12V6h16V15z"})),children)}));const SidePanelOpen=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SidePanelOpen(_ref23,ref){let{children,size=16,...rest}=_ref23;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.A,{width:size,height:size,ref,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...rest},_path32||(_path32=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V6C30,4.9,29.1,4,28,4z M10,26H4V6h6V26z M28,26H12v-9h10.2 l-3.6,3.6L20,22l6-6l-6-6l-1.4,1.4l3.6,3.6H12V6h16V26z"})),children)}));const SquareOutline=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SquareOutline(_ref82,ref){let{children,size=16,...rest}=_ref82;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.A,{width:size,height:size,ref,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...rest},_path138||(_path138=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeWidth:"0",d:"m26,4H6c-1.1046,0-2,.8954-2,2v20c0,1.1046.8954,2,2,2h20c1.1046,0,2-.8954,2-2V6c0-1.1046-.8954-2-2-2ZM6,26V6h20v20H6Z"})),children)}))},"../../node_modules/@carbon/react/lib/internal/environment.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});const canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);exports.canUseDOM=canUseDOM},"../../node_modules/@carbon/react/lib/internal/keyboard/keys.js":(__unused_webpack_module,exports)=>{exports.uf={key:["Escape","Esc"],which:27,keyCode:27,code:"Esc"},exports.oz={key:"Tab",which:9,keyCode:9,code:"Tab"}},"../../node_modules/@carbon/react/lib/internal/keyboard/match.js":(__unused_webpack_module,exports)=>{function match(eventOrCode){let{key,which,keyCode,code}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof eventOrCode?eventOrCode===key:"number"==typeof eventOrCode?eventOrCode===which||eventOrCode===keyCode:eventOrCode.key&&Array.isArray(key)?-1!==key.indexOf(eventOrCode.key):eventOrCode.key===key||eventOrCode.which===which||eventOrCode.keyCode===keyCode||eventOrCode.code===code}exports.YW=match},"../../node_modules/@carbon/react/lib/internal/useDelayedState.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("../../node_modules/react/index.js");exports.V=function useDelayedState(initialState){const[state,setState]=React.useState(initialState),timeoutId=React.useRef(null),setStateWithDelay=React.useCallback((function(stateToSet){let delayMs=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;window.clearTimeout(timeoutId.current??void 0),timeoutId.current=null,0!==delayMs?timeoutId.current=window.setTimeout((()=>{setState(stateToSet),timeoutId.current=null}),delayMs):setState(stateToSet)}),[]);return React.useEffect((()=>()=>{window.clearTimeout(timeoutId.current??void 0)}),[]),[state,setStateWithDelay]}},"../../node_modules/@carbon/react/lib/internal/useEvent.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("../../node_modules/react/index.js");exports.MN=function useWindowEvent(eventName,callback){const savedCallback=React.useRef(null);React.useEffect((()=>{savedCallback.current=callback}),[callback]),React.useEffect((()=>{function handler(event){savedCallback.current&&savedCallback.current(event)}return window.addEventListener(eventName,handler),()=>{window.removeEventListener(eventName,handler)}}),[eventName])}},"../../node_modules/@carbon/react/lib/internal/useMatchMedia.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("../../node_modules/react/index.js"),environment=__webpack_require__("../../node_modules/@carbon/react/lib/internal/environment.js");exports.N=function useMatchMedia(mediaQueryString){const[matches,setMatches]=React.useState((()=>{if(environment.canUseDOM){return window.matchMedia(mediaQueryString).matches}return!1}));return React.useEffect((()=>{function listener(event){setMatches(event.matches)}const mediaQueryList=window.matchMedia(mediaQueryString);return mediaQueryList.addEventListener?mediaQueryList.addEventListener("change",listener):mediaQueryList.addListener(listener),setMatches(mediaQueryList.matches),()=>{mediaQueryList.addEventListener?mediaQueryList.removeEventListener("change",listener):mediaQueryList.removeListener(listener)}}),[mediaQueryString]),matches}},"../../node_modules/@carbon/react/lib/internal/useMergedRefs.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("../../node_modules/react/index.js");exports.a=refs=>React.useCallback((node=>{refs.forEach((ref=>{"function"==typeof ref?ref(node):null!=ref&&(ref.current=node)}))}),refs)},"../../node_modules/@carbon/react/lib/internal/usePrefix.js":(__unused_webpack_module,exports,__webpack_require__)=>{function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(__webpack_require__("../../node_modules/react/index.js"));const PrefixContext=React__default.default.createContext("cds");exports.Mh=function usePrefix(){return React__default.default.useContext(PrefixContext)}},"../../node_modules/@carbon/react/lib/prop-types/AriaPropTypes.js":(__unused_webpack_module,exports,__webpack_require__)=>{var PropTypes=__webpack_require__("../../node_modules/prop-types/index.js"),isRequiredOneOf=__webpack_require__("../../node_modules/@carbon/react/lib/prop-types/isRequiredOneOf.js");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var PropTypes__default=_interopDefaultLegacy(PropTypes);const AriaLabelPropType=isRequiredOneOf.default({"aria-label":PropTypes__default.default.string,"aria-labelledby":PropTypes__default.default.string});exports.L=AriaLabelPropType},"../../node_modules/@carbon/react/lib/prop-types/isRequiredOneOf.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isRequiredOneOf(propTypes){return Object.keys(propTypes).reduce(((o,name)=>{return{...o,[name]:(propType=propTypes[name],function(props,propName,componentName){for(var _len=arguments.length,rest=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++)rest[_key-3]=arguments[_key];return propType(props,propName,componentName,...rest)})};var propType}),{})}}}]);
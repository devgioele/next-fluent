"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"appWithLocalization",{enumerable:true,get:()=>appWithLocalization});require("intl-pluralrules");const _react=_interopRequireDefault(require("react"));const _react1=require("@fluent/react");const _hoistNonReactStatics=_interopRequireDefault(require("hoist-non-react-statics"));const _bundle=require("@fluent/bundle");const _cheerio=_interopRequireWildcard(require("cheerio"));function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function*lazilyParsedBundles(fetchedMessages){for(const[locale,messages]of fetchedMessages){const resource=new _bundle.FluentResource(messages);const bundle=new _bundle.FluentBundle(locale);bundle.addResource(resource);yield bundle}}const toNodeName=element=>{switch(element.nodeType){case 1:return{name:element.name.toUpperCase(),data:element.type==="directive"?undefined:element.children.reduce((prev,curr)=>curr.nodeType===3?prev+curr.data:prev,"")};case 4:return{name:"#cdata-section"};case 8:return{name:"#comment"};case 9:return{name:"#document"};case 3:default:return{name:"#text",data:element.data}}};const parseMarkup=str=>{const $=_cheerio.load(str);const nodes=$("body").contents().toArray().map(element=>{const{name,data}=toNodeName(element);return{nodeName:name,textContent:data}});return nodes};const appWithLocalization=WrappedComponent=>{const AppWithTranslation=props=>{const{l10nMessages}=props.pageProps;const bundles=lazilyParsedBundles(l10nMessages);const l10n=new _react1.ReactLocalization(bundles,parseMarkup);return l10n?_react.default.createElement(_react1.LocalizationProvider,{l10n:l10n},_react.default.createElement(WrappedComponent,_extends({},props))):_react.default.createElement(WrappedComponent,_extends({},props))};return(0,_hoistNonReactStatics.default)(AppWithTranslation,WrappedComponent)};
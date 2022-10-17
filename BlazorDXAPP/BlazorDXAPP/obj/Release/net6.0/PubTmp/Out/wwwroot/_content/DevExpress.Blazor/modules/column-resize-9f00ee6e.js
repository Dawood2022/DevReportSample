import{d as e}from"./dom-240f808d.js";import{e as t}from"./evt-580669db.js";import{e as i,x as s,R as n,y as o,d as l}from"./dom-utils-3d3da54b.js";import{k as h}from"./key-a6c46d18.js";import{ensureAccentColorStyle as r}from"./dx-style-helper-9c6416e4.js";import"./browser-d96520d8.js";import"./_tslib-158249d5.js";import"./touch-7fab0aa2.js";import"./lit-element-base-3b55fdd3.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-1e675104.js";import"./custom-element-bd7061f2.js";function a(e){window.dxAccessibilityHelper||(window.dxAccessibilityHelper=new d),window.dxAccessibilityHelper.sendMessageToAssistiveTechnology(e)}class d{constructor(){this._helperElement=null}get helperElement(){return null==this._helperElement&&(this._helperElement=this.createHelperElement()),this._helperElement}createHelperElement(){const e=document.createElement("DIV");return e.className="dxAIFE dxAIFME",e.setAttribute("role","note"),e.setAttribute("aria-live","assertive"),document.documentElement.appendChild(e),e}sendMessageToAssistiveTechnology(e){this.helperElement.innerHTML=e,setTimeout((()=>{this.helperElement.innerHTML=""}),300)}}var m,u;!function(e){e[e.Disabled=0]="Disabled",e[e.NextColumn=1]="NextColumn",e[e.Component=2]="Component"}(m||(m={})),function(e){e[e.Default=0]="Default",e[e.Minimization=1]="Minimization",e[e.Maximization=2]="Maximization"}(u||(u={}));const c=30;class _{constructor(e,t,i,s){this._mainElement=e,this._nextHeaderCellElement=e.nextElementSibling,this._blazorComponent=s,this._gridResizeProxy=t,this._mode=i,this._resizeParameters={allowResize:!1,minWidth:-1,currentWidth:-1,maxWidth:-1},this._resizeAnchor=null,this._lastContainerWidth=-1,this._lastWidth=-1,this._lastNextWidth=-1,this._timeoutId=null,this._leftMouseXBoundary=-1,this._rightMouseXBoundary=-1,this._initWidth=-1,this._initNextWidth=-1,this._allWidth=-1,this._totalDiffX=0}get mainElement(){return this._mainElement}get nextHeaderCellElement(){return this._nextHeaderCellElement}get hasNextColumn(){return!!this._nextHeaderCellElement}get hasColumnId(){return this.mainElement.hasAttribute("data-dxdg-column-id")}get gridResizeProxy(){return this._gridResizeProxy}get blazorComponent(){return this._blazorComponent}get resizeAnchor(){return this._resizeAnchor}get caption(){return this.mainElement.innerText}get isResizeAllowed(){return this._mode!==m.Disabled&&this.hasColumnId&&(this.hasNextColumn||this._mode===m.Component)}get step(){let e=Math.ceil((this._resizeParameters.maxWidth-this._resizeParameters.minWidth)/100);return e>5&&(e=5),e}initialize(){this.createResizeAnchor(),S().initializeHeaderCellEvents(this),this.initializeEvents()}initializeEvents(){this.isResizeAllowed&&(this.mainElement.addEventListener("focus",this.onFocus.bind(this)),this.mainElement.addEventListener("keydown",this.onKeyDown.bind(this)),this.mainElement.addEventListener("keyup",this.onKeyUp.bind(this)))}removeEvents(){this.mainElement.removeEventListener("focus",this.onFocus.bind(this)),this.mainElement.removeEventListener("keydown",this.onKeyDown.bind(this)),this.mainElement.removeEventListener("keyup",this.onKeyUp.bind(this))}onFocus(e){t.EvtUtils.getEventSource(e)===this.mainElement&&(this.onFocusCore(),this.updateResizeParameters())}onKeyDown(e){if(t.EvtUtils.getEventSource(e)===this.mainElement)switch(e.keyCode){case h.KeyCode.Left:this.onKeyResize(-this.step),e.stopPropagation(),e.preventDefault();break;case h.KeyCode.Right:this.onKeyResize(this.step),e.stopPropagation(),e.preventDefault()}}onKeyResize(e){-1===this._lastWidth&&this.onStartKeyResize();let t=1500;this.hasNextColumn&&(t=this._lastWidth+this._lastNextWidth);const i=this._lastWidth+e;i>30&&(this._totalDiffX+=e),n((()=>{this.setWidth(i,t,this._totalDiffX)}).bind(this)),this._timeoutId&&clearTimeout(this._timeoutId)}onStartKeyResize(){this._lastWidth=this.mainElement.getBoundingClientRect().width,this._lastNextWidth=this.hasNextColumn?this.nextHeaderCellElement.getBoundingClientRect().width:0,this._lastContainerWidth=y(this.mainElement),this.gridResizeProxy.initializeComponentsWidths(),this._totalDiffX=0}onKeyUp(e){if(t.EvtUtils.getEventSource(e)!==this.mainElement)return;const i=e.keyCode;i!==h.KeyCode.Left&&i!==h.KeyCode.Right||(this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=setTimeout((()=>this.invokeSetWidth()),500))}updateResizeParameters(){const e=this.mainElement.getBoundingClientRect().width,t=this.hasNextColumn?this.nextHeaderCellElement.getBoundingClientRect().width:0,i=this.isResizeAllowed;let s=1500;this._mode===m.NextColumn&&(s=e+t-30),this._resizeParameters={allowResize:i,minWidth:i?30:e,currentWidth:e,maxWidth:i?s:e}}update(e){if(!this._resizeAnchor)return;const t=this.isResizeAllowed;this._nextHeaderCellElement=this.mainElement.nextElementSibling,this._mode=e,this.isResizeAllowed?t||(this.mainElement.appendChild(this._resizeAnchor),S().initializeHeaderCellEvents(this)):t&&(this.mainElement.removeChild(this._resizeAnchor),S().removeHeaderCellEvents(this))}createResizeAnchor(){const t=document.createElement("div");e.DomUtils.addClassName(t,"dxColumnResizeAnchor"),t.dxResizableHeaderCell=this,this._resizeAnchor=t,this.mainElement.appendChild(t)}onMouseDown(){this.updateState()}updateState(){this.setMouseBoundaries(),this.onFocusCore(),this.gridResizeProxy.initializeComponentsWidths()}setMouseBoundaries(){const e=this.mainElement.getBoundingClientRect(),t=Math.min(30,e.width);if(this._leftMouseXBoundary=e.left+t-10,this._initWidth=e.width,this._mode===m.NextColumn){const t=this.nextHeaderCellElement.getBoundingClientRect();this._rightMouseXBoundary=e.right+t.width-30,this._initNextWidth=t.width,this._allWidth=e.width+t.width}}removeMouseBoundaries(){this._leftMouseXBoundary=-1,this._rightMouseXBoundary=-1,this._initWidth=-1,this._initNextWidth=-1,this._allWidth=-1}getResizeType(e){return-1===this._leftMouseXBoundary?u.Default:e<=this._leftMouseXBoundary?u.Minimization:-1!==this._rightMouseXBoundary&&e>=this._rightMouseXBoundary?u.Maximization:u.Default}onFocusCore(){this.isResizeAllowed&&(this.ensureWidthSyncronized(),a(`Width is ${this.mainElement.offsetWidth} pixels. Use arrow keys to resize.`))}onDragResizeAnchor(e,t){if(!this.isResizeAllowed)return;const i=this.getResizeType(t),s=this.getNewWidth(e,i);i===u.Minimization&&(e=s-this._initWidth),this.setWidth(s,this._allWidth,e)}getNewWidth(e,t){switch(t){case u.Minimization:{const e=this.mainElement.getBoundingClientRect().width;return Math.min(30,e)}case u.Maximization:return this._allWidth-30;default:return this._initWidth+e}}onDragResizeAnchorStop(){this.removeMouseBoundaries(),this.invokeSetWidth()}setWidth(e,t,i){if(!t||!this.isWidthChanged(e)||!this.isValidWidth(e,t,i))return!1;const s=(n=this.mainElement,"border-box"===window.getComputedStyle(n,null).getPropertyValue("box-sizing")?0:o(n));var n;const l=t-(e-=s)-s;return this._lastWidth=e,this._lastNextWidth=l,this._lastContainerWidth=y(this.mainElement),this.gridResizeProxy.setWidth(this._mode,e,l,i),!0}isWidthChanged(e){return e!==this._lastWidth}async invokeSetWidth(){-1!==this._lastWidth&&-1!==this._lastNextWidth&&(this.gridResizeProxy.resetWidth(),S().lockResize(),await this.blazorComponent.invokeMethodAsync("SetColumnWidths",E(this.mainElement),this._lastWidth,E(this.nextHeaderCellElement),this._lastNextWidth,this._lastContainerWidth),this._lastWidth=-1,this._lastNextWidth=-1,this._lastContainerWidth=-1,S().unlockResize())}isValidWidth(e,t,i){let s=e>=30||(-1!==this._lastWidth?e>this._lastWidth:i>0);return s&&this._mode!==m.Component&&(s=e<=t-30),s}async ensureWidthSyncronized(){if(this.isWidthSyncronized())return;const e=this.gridResizeProxy,t=await this.blazorComponent.invokeMethodAsync("GetCellCache");e.synchronizeWidth(t)}isWidthSyncronized(){let e=!1;const t=this.gridResizeProxy.getColElementInlineWidth();if(0===t)e=!0;else{e=t===this.mainElement.getBoundingClientRect().width}return e}}class z{constructor(e,t){this.mainElement=e,this._resizeElements=t,this._colElements=null,this._elementsToSetComponentWidth=null,this._elementsToSyncWidth=null,this._elementsToCheckScroll=null,this._elementsToReset=null,this._initWidths=new Map,this._hasHorizontalScroll=null}get colElements(){return v(this._colElements,this._resizeElements.colElements)}get elementsToSetComponentWidth(){return v(this._elementsToSetComponentWidth,this._resizeElements.elementsToSetComponentWidth)}get elementsToSyncWidth(){return v(this._elementsToSyncWidth,this._resizeElements.elementsToSyncWidth)}get elementsToCheckScroll(){return v(this._elementsToCheckScroll,this._resizeElements.elementsToCheckScroll)}get elementsToReset(){return v(this._elementsToReset,this._resizeElements.elementsToReset)}update(e){this._resizeElements=e,this._colElements=null,this._elementsToSetComponentWidth=null,this._elementsToSyncWidth=null,this._elementsToCheckScroll=null,this._elementsToReset=null}setWidth(e,t,i,s){this.colElements&&(a(`${t} pixels`),this.setComponentWidth(s),this.colElements.forEach((s=>{if(s.style.width=x(t),e===m.NextColumn){s.nextElementSibling.style.width=x(i)}})))}setComponentWidth(e){this.elementsToSetComponentWidth&&(this.isScrollExists()?this._hasHorizontalScroll=!0:this.setComponentWidthCore(e))}setComponentWidthCore(e){var t;this._hasHorizontalScroll&&this.onHorizontalScrollDisappears();const i=[],s=this._initWidths;null===(t=this.elementsToSetComponentWidth)||void 0===t||t.forEach((t=>i.push(new p(t,(s.get(t)||0)+e)))),this.elementsToSyncWidth&&i.push(new p(this.elementsToSyncWidth[0],(s.get(this.elementsToSyncWidth[1])||0)+e)),i.forEach((e=>e.apply()))}onHorizontalScrollDisappears(){this._hasHorizontalScroll=!1,this.resetWidth(),S().updateState()}initializeComponentsWidths(){var e;if(!this.elementsToSetComponentWidth)return;const t=new Map;if(null===(e=this.elementsToSetComponentWidth)||void 0===e||e.forEach((e=>t.set(e,e.getBoundingClientRect().width))),this.elementsToSyncWidth){const e=this.elementsToSyncWidth[1];t.set(e,e.getBoundingClientRect().width)}this._initWidths=t}isScrollExists(){if(!1===this._hasHorizontalScroll)return!1;const e=this.elementsToCheckScroll;if(!e)return!1;return e[0].clientWidth<e[1].clientWidth}getColElementInlineWidth(){let e=0;const t=this.colElements;for(let i=0;t&&i<t.length;i++){const s=t[i].style.width;if(""!==s){e=parseInt(s);break}}return e}synchronizeWidth(e){n((function(){const t=e.map((e=>{const t=i(e[0]);return t?{width:t.getBoundingClientRect().width,cols:R(e[1])}:null})).filter((e=>e));for(let e=0;e<t.length;e++){const i=t[e].cols;for(let s=0;s<i.length;s++)i[s].style.width=x(t[e].width)}}))}resetWidth(){this.elementsToReset&&!this.isScrollExists()&&this.elementsToReset.forEach((e=>{e.style.width=""}))}}class p{constructor(e,t){this._element=e,this._width=t}apply(){this._element.style.width=x(this._width)}}class g{constructor(){this._currentPageX=-1,this._pageX=-1,this._resizeLock=0,this._resizableHeaderCell=null}get pageX(){return this._pageX}get resizableHeaderCell(){return this._resizableHeaderCell}initializeHeaderCellEvents(e){e.resizeAnchor&&this.initializeMouseDown(e.resizeAnchor)}initializeMouseDown(e){e.addEventListener("pointerdown",W)}initializeMouseMove(){document.addEventListener("pointermove",f)}initializeMouseUp(){document.addEventListener("pointerup",w)}removeHeaderCellEvents(e){const t=e.resizeAnchor;t&&t.removeEventListener("pointerdown",W)}onMouseDown(e,t){this._resizableHeaderCell=e,e.onMouseDown(),this._pageX=t,this.initializeMouseMove(),this.initializeMouseUp()}lockResize(){this._resizeLock++}unlockResize(){this._resizeLock--}isResizeLocked(){return this._resizeLock>0}setCurrentPageX(e){this._currentPageX=e}updateState(){var e;this._pageX=this._currentPageX,null===(e=this._resizableHeaderCell)||void 0===e||e.updateState()}invalidateState(){this._pageX=-1,this._resizableHeaderCell=null}}function E(e){if(!e)return(-1).toString();const t=e.getAttribute("data-dxdg-column-id");return(t?t.split("|"):[])[0]}function C(e){return!1!==e.isPrimary?e.pageX:0}function W(e){const i=t.EvtUtils.getEventSource(e);if(!i)return;const s=S(),n=i.dxResizableHeaderCell;if(n&&n.isResizeAllowed){const t=C(e);s.onMouseDown(n,t)}}function f(e){const t=S();if(t.isResizeLocked()||-1===t.pageX)return;const i=C(e);t.setCurrentPageX(i);const s=i-t.pageX;if(0!==s){const e=t.resizableHeaderCell;e&&n((function(){e.onDragResizeAnchor(s,i)}))}}function w(){const e=S();e.resizableHeaderCell&&e.resizableHeaderCell.onDragResizeAnchorStop(),e.invalidateState(),document.removeEventListener("pointermove",f),document.removeEventListener("pointerup",w)}function y(e){return l(e,"dxbs-gridview").getBoundingClientRect().width}function x(e){return e+"px"}function v(e,t){return t?(e||(e=R(t)),e):null}function R(e){return e.map((e=>document.getElementById(e)))}function S(){return null===window.dxResizeEventManagerInstance&&(window.dxResizeEventManagerInstance=new g),window.dxResizeEventManagerInstance}window.dxResizeEventManagerInstance=null;const M=new Map;function b(e,t,n,o){if(!(e=i(e)))return Promise.reject("failed");let l=M.get(e);if(l)l.update(n),l.gridResizeProxy.update(t);else{const i=new z(e,t);l=new _(e,i,n,o),l.isResizeAllowed&&(l.initialize(),M.set(e,l))}return r(),s(e,(function(){l.removeEvents(),M.delete(e)})),Promise.resolve("ok")}const T={initResizeColumn:b};export{m as ColumnResizeMode,T as default,b as initResizeColumn,c as minColumnWidth};
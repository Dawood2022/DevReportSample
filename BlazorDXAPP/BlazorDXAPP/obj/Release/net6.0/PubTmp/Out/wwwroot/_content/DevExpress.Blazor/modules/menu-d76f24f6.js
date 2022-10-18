import{D as e}from"./dom-95153cd1.js";import{e as t,f as s,t as i,k as n,u as l}from"./dom-utils-2919d18e.js";import"./browser-a3d50e79.js";import"./_tslib-158249d5.js";const a=new Map;function h(e,s,i){const n=t(e);if(null===n)return;let l=a.get(n);l||(l=new o(n),a.set(n,l)),l.init(s,i)}class o{constructor(e){this.mainElement=e,this.menu=null,this.itemsWidth=new c(0,0),this.items=[],this.itemsOffset=0,this.isCalculated=!1,this.currentWidth=-1,this.collapseToHamburgerWidth=-1,this.sizeChanged=null}init(e,t){this.sizeChanged&&(l(this.sizeChanged),this.sizeChanged=null),e.canCollapse&&(e.collapseToIcons||e.collapseToIconsAll||e.collapseToHamburgerMenu)?(this.currentWidth=this.mainElement.offsetWidth,this.menu||(this.menu=new r),this.menu.update(e),this.updateMenuItems(e.items),e.isCollapsed||(this.menu.isVertical?(this.itemsOffset=0,this.itemsWidth=new c(Math.max(...this.items.map((e=>e.width))),0),this.collapseToHamburgerWidth=-1):(this.itemsOffset=this.calculateItemsOffset(this.mainElement),this.itemsWidth=new c(this.calculateItemsWidth(),this.calculateItemsMinWidth()),this.collapseToHamburgerWidth=this.menu.collapseToIcons||this.menu.collapseToIconsAll?this.itemsWidth.minWidth+this.itemsOffset:this.itemsWidth.width+this.itemsOffset)),this.sizeChanged=s(this.mainElement,(e=>this.resizeMenuItemsByWidth(e.width,t))),this.resizeMenuItemsByWidth(this.mainElement.offsetWidth,t)):e.isCollapsed?t.invokeMethodAsync("OnMenuCollapse",!1):this.increaseAllItems(),this.toggleMainElementCssClass("ul.invisible","invisible",!1),this.toggleMainElementCssClass(".dx-menu-bar ul.dx-menu-loading","dx-menu-loading",!1)}toggleMainElementCssClass(e,t,s){const n=this.mainElement.querySelector(e);n&&i(n,t,s)}dispose(){this.sizeChanged&&l(this.sizeChanged)}updateMenuItems(e){this.items=[],e&&(Array.from(e).forEach((e=>{const t=this.mainElement.querySelector("[data-dxmenu-item-id="+e.id+"]");if(!t)return;const s=new m(t);s.update(e),!s.needUpdateSizes&&s.textElement||this.updateMenuItemSizes(s),this.items.push(s)})),this.items.sort((function(e,t){return e.adaptivePriority-t.adaptivePriority})))}updateMenuItemSizes(t){var s;const i=t.element.querySelector("div.dx-menu-item-text-container");let n=e.getCurrentStyle(t.element),l=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.marginLeft)+parseFloat(n.marginRight),a=0;const h=null===(s=t.element.firstElementChild)||void 0===s?void 0:s.firstElementChild;if(h){n=e.getCurrentStyle(h),l+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.marginLeft)+parseFloat(n.marginRight);for(let e=0;e<h.children.length;e++){const t=h.children[e],s=t.offsetWidth;l+=s,t.isSameNode(i)&&(a=s)}}t.updateSizes(i,l,a)}resizeMenuItemsByWidth(e,t){if(this.menu){if(this.menu.isCollapsed)(e>this.collapseToHamburgerWidth||!this.menu.collapseToHamburgerMenu)&&t.invokeMethodAsync("OnMenuCollapse",!1);else{const s=e-this.currentWidth;if(this.menu.isVertical)this.menu.collapseToIconsAll&&(s<=0&&this.itemsWidth.width>e?this.reduceAllItems():this.itemsWidth.width<e&&this.increaseAllItems());else{if(this.menu.collapseToIcons){let t=this.itemsOffset;this.items.forEach((e=>{t+=e.width,e.canIncrease()&&(t-=e.textWidth)})),s<=0&&t>e?this.reduceItems(e,t):s>=0&&this.increaseItems(e,t)}else if(this.menu.collapseToIconsAll){const t=this.itemsWidth.width+this.itemsOffset;s<=0&&t>e?this.reduceAllItems():s>=0&&t<e&&this.increaseAllItems()}else this.increaseAllItems();this.menu.collapseToHamburgerMenu&&s<=0&&e<this.collapseToHamburgerWidth&&t.invokeMethodAsync("OnMenuCollapse",!0)}}this.currentWidth=e}}reduceItems(e,t){for(let s=this.items.length-1;s>=0&&t>e;s--){const e=this.items[s];e.canReduce()&&(e.hideTextElement(),t-=e.textWidth)}}increaseItems(e,t){for(let s=0;s<this.items.length;s++){const i=this.items[s];if(i.canIncrease()){if(t+i.textWidth>e)break;i.showTextElement(),t+=i.textWidth}}}reduceAllItems(){for(let e=0;e<this.items.length;e++){const t=this.items[e];t.canReduce()&&t.hideTextElement()}}increaseAllItems(){for(let e=0;e<this.items.length;e++){const t=this.items[e];t.canIncrease()&&t.showTextElement()}}calculateItemsOffset(e){const t=e.querySelector(".dxbs-menu ul.nav");return t?t.offsetLeft-e.offsetLeft:0}calculateItemsWidth(){let e=0;return this.items.forEach((t=>e+=t.width)),e}calculateItemsMinWidth(){let e=0;return this.items.forEach((t=>{e+=t.width,t.canCollapse()&&(e-=t.textWidth)})),e}}class r{constructor(){this.isVertical=!1,this.isCollapsed=!1,this.canCollapse=!1,this.collapseToIcons=!1,this.collapseToIconsAll=!1,this.collapseToHamburgerMenu=!1}update(e){this.isVertical=e.isVertical,this.isCollapsed=e.isCollapsed,this.canCollapse=e.canCollapse,this.collapseToIcons=e.collapseToIcons,this.collapseToIconsAll=e.collapseToIconsAll,this.collapseToHamburgerMenu=e.collapseToHamburgerMenu}}class c{constructor(e,t){this.width=e,this.minWidth=t}}class m{constructor(e){this.id=null,this.width=-1,this.adaptivePriority=-1,this.canCrop=!1,this.element=e,this.textElement=null,this.needUpdateSizes=!0,this.textWidth=-1}update(e){this.id=e.id,this.canCrop=e.canCrop,this.adaptivePriority=e.adaptivePriority}updateSizes(e,t,s){this.needUpdateSizes=!1,this.width=t,this.textWidth=s,this.textElement=e}canCollapse(){return this.canCrop&&null!==this.textElement}canReduce(){return this.canCollapse()&&!e.hasClassName(this.textElement,"dx-menu-text-hidden")}canIncrease(){return this.canCollapse()&&e.hasClassName(this.textElement,"dx-menu-text-hidden")}showTextElement(){i(this.textElement,"dx-menu-text-hidden",!1)}hideTextElement(){i(this.textElement,"dx-menu-text-hidden",!0)}}function d(e){e.currentTarget&&e.currentTarget.addEventListener("focusin",u)}function u(e){e.currentTarget&&(e.currentTarget.removeEventListener("focusin",u),e.currentTarget.blur())}const p={init:h,dispose:function(e){return s(e=t(e),a),Array.from(a.keys()).forEach((e=>{n(e)&&s(e,a)})),Promise.resolve("ok");function s(e,t){if(!e)return;const s=t.get(e);null==s||s.dispose(),t.delete(e)}},addNavItemClickHandler:function(e){e.addEventListener("mousedown",d)},resetFocusForDropDownItem:function(){if(document.activeElement&&"A"===document.activeElement.tagName&&document.activeElement.classList.contains("dropdown-item")){document.activeElement.blur()}}};export{p as default,h as init};

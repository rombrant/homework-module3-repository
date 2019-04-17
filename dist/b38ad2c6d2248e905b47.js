(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{371:function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return o});var n=r(348),i=function(t){var e=new FileReader;return new Promise(function(r,n){try{e.readAsDataURL(t),e.onloadend=function(){r(e.result)}}catch(t){throw new Error("Ошибка при чтении файла")}})},o=function(t){var e=n.a.defaults.baseURL;return"".concat(e,"/").concat(t)}},382:function(t,e,r){},397:function(t,e){},414:function(t,e,r){"use strict";var n=r(382);r.n(n).a},437:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=this,r=e.$createElement,n=e._self._c||r;return n("adding-form",{attrs:{title:e.editFormTitle,disabled:e.disableForm},on:{cancel:e.cancelAdding,submit:function(t){"add"===e.mode?e.addNewWork():e.editWork()}}},[n("template",{slot:"form-content"},[n("div",{staticClass:"edit-form__container"},[n("div",{staticClass:"edit-form__col"},[e.renderedPhoto.length?n("div",{staticClass:"edit-form__btn"},[n("div",{staticClass:"edit-form__pic",style:{backgroundImage:e.workPhotoUrl}}),n("label",{staticClass:"edit-form__change-preview"},[n("a",{staticClass:"edit-form__change-pic"},[e._v("Изменить превью")]),n("input",{staticClass:"edit-form__preview-input",attrs:{type:"file"},on:{change:e.handlePhotoUpload}})])]):n("label",{staticClass:"edit-form__picture",class:{error:e.validation.hasError("work.photo")}},[n("div",{staticClass:"edit-form__picture-text"},[e._v("Перетащите либо загрузите изображения")]),n("app-button",{attrs:{elem:"file",text:"Загрузить"},on:{change:e.handlePhotoUpload}}),n("div",{staticClass:"edit-form__file-error"},[n("errors-tooltip")],1)],1)]),n("div",{staticClass:"edit-form__col"},[n("div",{staticClass:"edit-form__row"},[n("app-input",{attrs:{title:"Название",errorText:e.validation.firstError("work.title")},model:{value:e.work.title,callback:function(t){e.$set(e.work,"title",t)},expression:"work.title"}})],1),n("div",{staticClass:"edit-form__row"},[n("app-input",{attrs:{title:"Ссылка",errorText:e.validation.firstError("work.link")},model:{value:e.work.link,callback:function(t){e.$set(e.work,"link",t)},expression:"work.link"}})],1),n("div",{staticClass:"edit-form__row"},[n("app-input",{attrs:{title:"Описание",fieldType:"textarea",errorText:e.validation.firstError("work.description")},model:{value:e.work.description,callback:function(t){e.$set(e.work,"description",t)},expression:"work.description"}})],1),n("div",{staticClass:"edit-form__row"},[n("add-tags",{attrs:{errorText:e.validation.firstError("work.techs")},on:{removeTag:function(e){return t.work.techs=e}},model:{value:e.work.techs,callback:function(t){e.$set(e.work,"techs",t)},expression:"work.techs"}})],1)])])])],2)};n._withStripped=!0;var i=r(136),o=r(371),a=r(373);function s(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){s(o,n,i,a,c,"next",t)}function c(t){s(o,n,i,a,c,"throw",t)}a(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){l(t,e,r[e])})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={mixins:[r(373).mixin],validators:{"work.title":function(t){return a.Validator.value(t).required("Заполните название")},"work.techs":function(t){return a.Validator.value(t).required("Заполните технологии")},"work.link":function(t){return a.Validator.value(t).required("Заполните ссылку")},"work.description":function(t){return a.Validator.value(t).required("Заполните описание")},"work.photo":function(t){return a.Validator.value(t).required("Вставьте файл")}},props:{mode:{type:String,default:"add",validator:function(t){return["add","edit"].includes(t)}},disabled:{type:Boolean,default:!1}},components:{appInput:function(){return r.e(0).then(r.bind(null,435))},addTags:function(){return r.e(16).then(r.bind(null,441))},addingForm:function(){return r.e(6).then(r.bind(null,443))},appButton:function(){return r.e(1).then(r.bind(null,445))},errorsTooltip:function(){return r.e(3).then(r.bind(null,446))}},data:function(){return{disableForm:this.disabled,renderedPhoto:"",work:{id:0,title:"",techs:"",link:"",photo:"",description:""}}},computed:u({},Object(i.d)("works",{currentWork:function(t){return t.currentWork}}),{workPhotoUrl:function(){return"url(".concat(this.renderedPhoto,")")},editFormTitle:function(){switch(this.mode){case"edit":return"Редактирование работы";case"add":return"Добавление работы"}}}),created:function(){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},watch:{currentWork:function(t){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},mode:function(t){"add"===t&&this.clearFormFields()}},methods:u({},Object(i.b)("works",["storeWork","updateWork"]),{editWork:function(){var t=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return this.disableForm=!0,t.prev=6,t.next=9,this.updateWork(this.work);case 9:t.sent,this.$emit("closeForm"),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(6),alert(t.t1.message);case 16:return t.prev=16,this.disableForm=!1,this.validation.reset(),t.finish(16);case 20:case"end":return t.stop()}},t,this,[[6,13,16,20]])}));return function(){return t.apply(this,arguments)}}(),addNewWork:function(){var t=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return this.disableForm=!0,t.prev=6,t.next=9,this.storeWork(this.work);case 9:t.sent,this.clearFormFields(),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(6),alert(t.t1.message);case 16:return t.prev=16,this.disableForm=!1,this.validation.reset(),t.finish(16);case 20:case"end":return t.stop()}},t,this,[[6,13,16,20]])}));return function(){return t.apply(this,arguments)}}(),cancelAdding:function(){this.clearFormFields(),this.$emit("closeForm")},clearFormFields:function(){this.work={},this.renderedPhoto=""},fillFormWithCurrentWorkData:function(){this.work=u({},this.currentWork),this.renderedPhoto=Object(o.a)(this.currentWork.photo)},handlePhotoUpload:function(){var t=c(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.files[0],this.work.photo=r,t.prev=2,t.next=5,Object(o.b)(r);case 5:n=t.sent,this.renderedPhoto=n,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),alert(t.t0.message);case 12:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e){return t.apply(this,arguments)}}()})},f=(r(414),r(96)),h=Object(f.a)(d,n,[],!1,null,"07f536f6",null);h.options.__file="src/admin/components/works-add.vue";e.default=h.exports}}]);
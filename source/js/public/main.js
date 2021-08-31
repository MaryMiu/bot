/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/botui/build/botui.min.js":
/*!***********************************************!*\
  !*** ./node_modules/botui/build/botui.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * botui 0.3.9
 * A JS library to build the UI for your bot
 * https://botui.org
 *
 * Copyright 2019, Moin Uddin
 * Released under the MIT license.
*/

!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t.BotUI=e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof window?window:this,function(t,e){"use strict";return function(e,n){function o(t,e,n,o){return"<a class='botui-message-content-link' target='"+(o?"blank":"")+"' href='"+n+"'>"+e+"</a>"}function i(t){return t.replace(b.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(b.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(b.link,o)}function a(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,e&&(n.onload=e),document.body.appendChild(n)}function s(t){x.action.addMessage&&m.message.human({delay:100,content:t}),x.action.show=!x.action.autoHide}function c(t){if(!t.loading&&!t.content)throw Error('BotUI: "content" is required in a non-loading message object.');t.type=t.type||"text",t.visible=!t.delay&&!t.loading;var e=x.messages.push(t)-1;return new Promise(function(n,o){setTimeout(function(){t.delay&&(t.visible=!0,t.loading&&(t.loading=!1)),n(e)},t.delay||0)})}function u(t){return"string"==typeof t&&(t={content:t}),t||{}}function r(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function l(t){if(!t.action&&!t.actionButton&&!t.actionText)throw Error('BotUI: "action" property is required.')}function h(t){return l(t),r({type:"text",cssClass:"",autoHide:!0,addMessage:!0},t),x.action.type=t.type,x.action.cssClass=t.cssClass,x.action.autoHide=t.autoHide,x.action.addMessage=t.addMessage,new Promise(function(e,n){v=e,setTimeout(function(){x.action.show=!0},t.delay||0)})}if(n=n||{},!e)throw Error("BotUI: Container id is required as first argument.");if(!document.getElementById(e))throw Error("BotUI: Element with id #"+e+" does not exist.");if(!t.Vue&&!n.vue)throw Error("BotUI: Vue is required but not found.");var f,d,v,p={debug:!1,fontawesome:!0,searchselect:!0},m={},b={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim};t.Vue=t.Vue||n.vue;for(var g in p)n.hasOwnProperty(g)&&(p[g]=n[g]);t.Promise||"undefined"!=typeof Promise||n.promise||a("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");var y={template:"<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><transition name=\"slide-fade\"><div v-if=\"msg.visible\"><div v-if=\"msg.photo && !msg.loading\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.photo\" :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span><span v-if=\"msg.type == \'html\'\" v-html=\"msg.content\"></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></div></transition><div v-if=\"msg.photo && msg.loading && !msg.human\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.photo\" :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\" action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><form v-if=\"action.type == \'select\'\" class=\"botui-actions-select\" @submit.prevent=\"handle_action_select()\" :class=\"action.cssClass\"><i v-if=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa\" :class=\"\'fa-\' + action.select.icon\"></i><v-select v-if=\"action.select.searchselect && !action.select.multipleselect\" v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select><v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select> <select v-else v-model=\"action.select.value\" class=\"botui-actions-text-select\" :placeholder=\"action.select.placeholder\" :size=\"action.select.size\" :class=\"action.select.cssClass\" required v-focus><option v-for=\"option in action.select.options\" :class=\"action.select.optionClass\" v-bind:value=\"option.value\" :disabled=\"(option.value == \'\')?true:false\" :selected=\"(action.select.value == option.value)?\'selected\':\'\'\"> {{ option.text }}</option></select> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}\"><i v-if=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.select.button.icon\"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-botui-scroll v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\"><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div><form v-if=\"action.type == \'buttontext\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button><div class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></form></div></transition></div></div>",data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:!1,type:"text",autoHide:!0,addMessage:!0},messages:[]}},computed:{isMobile:function(){return t.innerWidth&&t.innerWidth<=768}},methods:{handle_action_button:function(t){for(var e=0;e<this.action.button.buttons.length;e++)if(this.action.button.buttons[e].value==t.value&&"function"==typeof this.action.button.buttons[e].event){if(this.action.button.buttons[e].event(t),this.action.button.buttons[e].actionStop)return!1;break}s(t.text);var n={type:"button",text:t.text,value:t.value};for(var o in t)t.hasOwnProperty(o)&&"type"!==o&&"text"!==o&&"value"!==o&&(n[o]=t[o]);v(n)},handle_action_text:function(){this.action.text.value&&(s(this.action.text.value),v({type:"text",value:this.action.text.value}),this.action.text.value="")},handle_action_select:function(){if(this.action.select.searchselect&&!this.action.select.multipleselect){if(!this.action.select.value.value)return;s(this.action.select.value[this.action.select.label]),v({type:"text",value:this.action.select.value.value,text:this.action.select.value.text,obj:this.action.select.value})}if(this.action.select.searchselect&&this.action.select.multipleselect){if(!this.action.select.value)return;for(var t=new Array,e=new Array,n=0;n<this.action.select.value.length;n++)t.push(this.action.select.value[n].value),e.push(this.action.select.value[n][this.action.select.label]);s(e.join(", ")),v({type:"text",value:t.join(", "),text:e.join(", "),obj:this.action.select.value})}else{if(!this.action.select.value)return;for(var n=0;n<this.action.select.options.length;n++)this.action.select.options[n].value==this.action.select.value&&(s(this.action.select.options[n].text),v({type:"text",value:this.action.select.value,text:this.action.select.options[n].text}))}}}};t.Vue.directive("botui-markdown",function(t,e){"false"!=e.value&&(t.innerHTML=i(t.textContent))}),t.Vue.directive("botui-scroll",{inserted:function(t){d.scrollTop=d.scrollHeight,t.scrollIntoView(!0)}}),t.Vue.directive("focus",{inserted:function(t){t.focus()}}),t.Vue.directive("botui-container",{inserted:function(t){d=t}}),f=new t.Vue({components:{"bot-ui":y}}).$mount("#"+e);var x=f.$children[0];return m.message={add:function(t){return c(u(t))},bot:function(t){return t=u(t),c(t)},human:function(t){return t=u(t),t.human=!0,c(t)},get:function(t){return Promise.resolve(x.messages[t])},remove:function(t){return x.messages.splice(t,1),Promise.resolve()},update:function(t,e){var n=x.messages[t];return n.content=e.content,n.visible=!e.loading,n.loading=!!e.loading,Promise.resolve(e.content)},removeAll:function(){return x.messages.splice(0,x.messages.length),Promise.resolve()}},m.action={show:h,hide:function(){return x.action.show=!1,Promise.resolve()},text:function(t){return l(t),x.action.text=t.action,h(t)},button:function(t){return l(t),t.type="button",x.action.button.buttons=t.action,h(t)},select:function(t){if(l(t),t.type="select",t.action.label=t.action.label||"text",t.action.value=t.action.value||"",t.action.searchselect=void 0!==t.action.searchselect?t.action.searchselect:p.searchselect,t.action.multipleselect=t.action.multipleselect||!1,t.action.searchselect&&"string"==typeof t.action.value)if(t.action.multipleselect){var e=t.action.value.split(",");t.action.value=new Array;for(var n=0;n<t.action.options.length;n++)for(var o=0;o<e.length;o++)t.action.options[n].value==e[o]&&t.action.value.push(t.action.options[n])}else for(var n=0;n<t.action.options.length;n++)t.action.options[n].value==t.action.value&&(t.action.value=t.action.options[n]);return t.action.searchselect||t.action.options.unshift({value:"",text:t.action.placeholder}),x.action.button=t.action.button,x.action.select=t.action,h(t)},buttontext:function(t){return l(t),t.type="buttontext",x.action.button.buttons=t.actionButton,x.action.text=t.actionText,h(t)}},p.fontawesome&&a("https://use.fontawesome.com/ea731dcb6f.js"),p.searchselect&&a("https://unpkg.com/vue-select@2.4.0/dist/vue-select.js",function(){Vue.component("v-select",VueSelect.VueSelect)}),p.debug&&(m._botApp=f),m}});

/***/ }),

/***/ "./source/js/src/const.js":
/*!********************************!*\
  !*** ./source/js/src/const.js ***!
  \********************************/
/*! exports provided: Poetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poetry", function() { return Poetry; });
const Poetry = {
  MAN: 'Мудрости, достатка и харизмы<br>Вам не занимать в расцвете лет,<br>Я вам пожелаю оптимизма,<br>Чтобы жизнь вас берегла от бед,<br>Чтоб друзья любили и родные,<br>И каким бы ни был поворот,<br>За спиной всегда пусть будут крылья,<br>И душа пусть просится в полет!',
  COLLEAGUE: 'Хочу пожелать, чтоб все было отлично<br/>В бумажник отличную сумму наличных<br/>Отличных коллег на отличной работе<br/>На «пять» отдохнуть от работы в субботу<br/><br/>Различных вопросов, отличных решений<br/>С родными отличных тебе отношений,<br/>Здоровья отличного, и в жизни личной<br/>Пусть все у тебя будет лишь на «отлично»!',
  PROGRAMMER: 'Желаю тебе отличного переноса 😉',
  CHIEF: 'Здесь не будет стихов. Просто скажу, что у ты отличный руководитель. Честно-пречестно.'
};

/***/ }),

/***/ "./source/js/src/main.js":
/*!*******************************!*\
  !*** ./source/js/src/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var botui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! botui */ "./node_modules/botui/build/botui.min.js");
/* harmony import */ var botui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(botui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./source/js/src/const.js");


const botui = new botui__WEBPACK_IMPORTED_MODULE_0___default.a('my-botui-app');
const choice = {
  name: 'Саша',
  car: null,
  alkohol: null,
  woman: null
};
botui.message.add({
  content: 'Дорогой Саша!'
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'В этот замечательный день хочу поздравить тебя с Днём Рождения! 🥳'
  });
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'Но так как сегодня дел, мне нужна твоя помощь'
  });
}).then(function () {
  return botui.message.add({
    delay: 2000,
    content: 'Оформим открытку твоей мечты?'
  });
}).then(function () {
  return botui.action.button({
    delay: 2000,
    action: [{
      text: 'Да, давай',
      value: 'yes'
    }, {
      text: 'Нет, сразу поздравляй',
      value: 'no'
    }]
  });
}).then(function (res) {
  if (res.value === 'yes') {
    card();
  }

  if (res.value === 'no') {
    poetry();
  }
});

const card = function () {
  botui.message.add({
    delay: 2000,
    content: 'Сначала выбери тачку'
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'mercedes',
        value: 'mercedes'
      }, {
        text: 'bmw',
        value: 'bmw'
      }, {
        text: 'audi',
        value: 'audi'
      }]
    });
  }).then(function (res) {
    choice.car = res.value;
    const container = document.querySelector('.board__car');
    const car = document.createElement('img');
    car.src = `img/${res.value}.png`;
    container.appendChild(car);
    return botui.message.add({
      delay: 2000,
      content: `Отлично. Теперь добавим девочку. Выбери:`
    });
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'Блондинка',
        value: 'blonde'
      }, {
        text: 'Брюнетка',
        value: 'brunette'
      }]
    });
  }).then(function (res) {
    choice.woman = res.value;
    const container = document.querySelector('.board__woman');
    const image = document.createElement('img');
    image.src = `img/${res.value}.png`;
    container.appendChild(image);
    return botui.message.add({
      delay: 2000,
      content: `Ок. Осталось добавить бухлишко`
    });
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'Пиво',
        value: 'beer'
      }, {
        text: 'Вино',
        value: 'wine'
      }, {
        text: 'Виски',
        value: 'whiskey'
      }]
    });
  }).then(function (res) {
    choice.alkohol = res.value;
    const container = document.querySelector('.board__alkohol');
    const image = document.createElement('img');
    image.src = `img/${res.value}.png`;
    container.appendChild(image);
    return botui.message.add({
      delay: 2000,
      content: `Прекрасно! Открытка мечты готова, можно читать поздравления.`
    });
  }).then(poetry);
};

const poetry = function () {
  botui.message.add({
    delay: 2000,
    content: 'У меня тут коллекция'
  }).then(function () {
    return botui.action.button({
      delay: 2000,
      action: [{
        text: 'Мужчине',
        value: 'MAN'
      }, {
        text: 'Коллеге',
        value: 'COLLEAGUE'
      }, {
        text: 'Программисту',
        value: 'PROGRAMMER'
      }, {
        text: 'Начальнику',
        value: 'CHIEF'
      }]
    });
  }).then(function (res) {
    let text = '';

    switch (res.value) {
      case 'MAN':
        text = _const__WEBPACK_IMPORTED_MODULE_1__["Poetry"].MAN;
        break;

      case 'COLLEAGUE':
        text = _const__WEBPACK_IMPORTED_MODULE_1__["Poetry"].COLLEAGUE;
        break;

      case 'PROGRAMMER':
        text = _const__WEBPACK_IMPORTED_MODULE_1__["Poetry"].PROGRAMMER;
        break;

      case 'CHIEF':
        text = _const__WEBPACK_IMPORTED_MODULE_1__["Poetry"].CHIEF;
        break;

      default:
        break;
    }

    const container = document.querySelector('.board__text');
    container.innerHTML = text;
    return botui.message.add({
      delay: 2000,
      content: `Мои поздравления!`
    });
  });
};

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./source/js/src/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Esti\Documents\GitHub\bot\source\js\src\main.js */"./source/js/src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
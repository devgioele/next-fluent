function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}import{promises as fs}from"fs";function fetchMessages(locale){return _fetchMessages.apply(this,arguments)}function _fetchMessages(){_fetchMessages=_asyncToGenerator(function*(locale){const response=yield fs.readFile(`public/locales/${locale}.ftl`);const messages=response.toString();return[locale,messages]});return _fetchMessages.apply(this,arguments)}export const serverSideTranslations=function(){var _ref=_asyncToGenerator(function*(locale){const locales=(locale===null||locale===void 0?void 0:locale.constructor)===Array?locale:[locale];const definedLocales=locales.filter(o=>!!o);const fetchedMessages=yield Promise.all(definedLocales.map(fetchMessages));return{l10nMessages:fetchedMessages}});return function serverSideTranslations(locale){return _ref.apply(this,arguments)}}();
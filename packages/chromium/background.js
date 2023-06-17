"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
      (function(global2, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports2 !== "undefined") {
          factory(module2);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global2.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports2, function(module3) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty6 = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache3 = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache3;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache3) {
                    return cache3[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty6(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty6(wrappers, prop) || hasOwnProperty6(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty6(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache3, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache3[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache3) {
                    cache3[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache3, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache3, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module3.exports = wrapAPIs(chrome);
        } else {
          module3.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/.pnpm/p-defer@1.0.0/node_modules/p-defer/index.js
  var require_p_defer = __commonJS({
    "node_modules/.pnpm/p-defer@1.0.0/node_modules/p-defer/index.js"(exports2, module2) {
      "use strict";
      module2.exports = () => {
        const ret = {};
        ret.promise = new Promise((resolve, reject) => {
          ret.resolve = resolve;
          ret.reject = reject;
        });
        return ret;
      };
    }
  });

  // node_modules/.pnpm/map-age-cleaner@0.2.0/node_modules/map-age-cleaner/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/map-age-cleaner@0.2.0/node_modules/map-age-cleaner/dist/index.js"(exports2, module2) {
      "use strict";
      var pDefer = require_p_defer();
      function mapAgeCleaner(map, property = "maxAge") {
        let processingKey;
        let processingTimer;
        let processingDeferred;
        const cleanup = async () => {
          if (processingKey !== void 0) {
            return;
          }
          const setupTimer = async (item) => {
            processingDeferred = pDefer();
            const delay = item[1][property] - Date.now();
            if (delay <= 0) {
              map.delete(item[0]);
              processingDeferred.resolve();
              return;
            }
            processingKey = item[0];
            processingTimer = setTimeout(() => {
              map.delete(item[0]);
              if (processingDeferred) {
                processingDeferred.resolve();
              }
            }, delay);
            if (typeof processingTimer.unref === "function") {
              processingTimer.unref();
            }
            return processingDeferred.promise;
          };
          try {
            for (const entry of map) {
              await setupTimer(entry);
            }
          } catch (_a) {
          }
          processingKey = void 0;
        };
        const reset = () => {
          processingKey = void 0;
          if (processingTimer !== void 0) {
            clearTimeout(processingTimer);
            processingTimer = void 0;
          }
          if (processingDeferred !== void 0) {
            processingDeferred.reject(void 0);
            processingDeferred = void 0;
          }
        };
        const originalSet = map.set.bind(map);
        map.set = (key, value) => {
          if (map.has(key)) {
            map.delete(key);
          }
          const result = originalSet(key, value);
          if (processingKey && processingKey === key) {
            reset();
          }
          cleanup();
          return result;
        };
        cleanup();
        return map;
      }
      module2.exports = mapAgeCleaner;
    }
  });

  // node_modules/.pnpm/expiry-map@2.0.0/node_modules/expiry-map/dist/index.js
  var require_dist2 = __commonJS({
    "node_modules/.pnpm/expiry-map@2.0.0/node_modules/expiry-map/dist/index.js"(exports2, module2) {
      "use strict";
      var mapAgeCleaner = require_dist();
      var ExpiryMap3 = class {
        constructor(maxAge, data) {
          this.maxAge = maxAge;
          this[Symbol.toStringTag] = "Map";
          this.data = /* @__PURE__ */ new Map();
          mapAgeCleaner(this.data);
          if (data) {
            for (const [key, value] of data) {
              this.set(key, value);
            }
          }
        }
        get size() {
          return this.data.size;
        }
        clear() {
          this.data.clear();
        }
        delete(key) {
          return this.data.delete(key);
        }
        has(key) {
          return this.data.has(key);
        }
        get(key) {
          const value = this.data.get(key);
          if (value) {
            return value.data;
          }
          return;
        }
        set(key, value) {
          this.data.set(key, {
            maxAge: Date.now() + this.maxAge,
            data: value
          });
          return this;
        }
        values() {
          return this.createIterator((item) => item[1].data);
        }
        keys() {
          return this.data.keys();
        }
        entries() {
          return this.createIterator((item) => [item[0], item[1].data]);
        }
        forEach(callbackfn, thisArg) {
          for (const [key, value] of this.entries()) {
            callbackfn.apply(thisArg, [value, key, this]);
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        *createIterator(projection) {
          for (const item of this.data.entries()) {
            yield projection(item);
          }
        }
      };
      module2.exports = ExpiryMap3;
    }
  });

  // src/background/index.ts
  var import_webextension_polyfill3 = __toESM(require_browser_polyfill());

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_default = isLength;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty4.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag2 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
  var mapTag3 = "[object Map]";
  var setTag3 = "[object Set]";
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
      return !value.length;
    }
    var tag = getTag_default(value);
    if (tag == mapTag3 || tag == setTag3) {
      return !value.size;
    }
    if (isPrototype_default(value)) {
      return !baseKeys_default(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty5.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_default = isEmpty;

  // src/config/index.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  async function getProviderConfigs() {
    const { provider = "bard" /* BARD */ } = await import_webextension_polyfill.default.storage.local.get("provider");
    const configKey = `provider:${"bard" /* BARD */}`;
    const result = await import_webextension_polyfill.default.storage.local.get(configKey);
    return {
      provider,
      configs: {
        ["bard" /* BARD */]: result[configKey]
      }
    };
  }
  var BASE_URL = "https://bard.google.com";
  var DEFAULT_MODEL = "gpt-3.5-turbo";
  var DEFAULT_API_HOST = "api.openai.com";

  // src/background/providers/bard.ts
  var import_expiry_map = __toESM(require_dist2());

  // node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs
  var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
  var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  var JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
  function jsonParseTransform(key, value) {
    if (key === "__proto__") {
      return;
    }
    if (key === "constructor" && value && typeof value === "object" && "prototype" in value) {
      return;
    }
    return value;
  }
  function destr(value, options = {}) {
    if (typeof value !== "string") {
      return value;
    }
    const _lval = value.toLowerCase().trim();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (!JsonSigRx.test(value)) {
      if (options.strict) {
        throw new SyntaxError("Invalid JSON");
      }
      return value;
    }
    try {
      if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
        return JSON.parse(value, jsonParseTransform);
      }
      return JSON.parse(value);
    } catch (error) {
      if (options.strict) {
        throw error;
      }
      return value;
    }
  }

  // node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs
  var r = String.fromCharCode;
  var HASH_RE = /#/g;
  var AMPERSAND_RE = /&/g;
  var EQUAL_RE = /=/g;
  var PLUS_RE = /\+/g;
  var ENC_CARET_RE = /%5e/gi;
  var ENC_BACKTICK_RE = /%60/gi;
  var ENC_PIPE_RE = /%7c/gi;
  var ENC_SPACE_RE = /%20/gi;
  function encode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
  }
  function encodeQueryValue(input) {
    return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function decode(text = "") {
    try {
      return decodeURIComponent("" + text);
    } catch {
      return "" + text;
    }
  }
  function decodeQueryValue(text) {
    return decode(text.replace(PLUS_RE, " "));
  }
  function parseQuery(parametersString = "") {
    const object = {};
    if (parametersString[0] === "?") {
      parametersString = parametersString.slice(1);
    }
    for (const parameter of parametersString.split("&")) {
      const s = parameter.match(/([^=]+)=?(.*)/) || [];
      if (s.length < 2) {
        continue;
      }
      const key = decode(s[1]);
      if (key === "__proto__" || key === "constructor") {
        continue;
      }
      const value = decodeQueryValue(s[2] || "");
      if (typeof object[key] !== "undefined") {
        if (Array.isArray(object[key])) {
          object[key].push(value);
        } else {
          object[key] = [object[key], value];
        }
      } else {
        object[key] = value;
      }
    }
    return object;
  }
  function encodeQueryItem(key, value) {
    if (typeof value === "number" || typeof value === "boolean") {
      value = String(value);
    }
    if (!value) {
      return encodeQueryKey(key);
    }
    if (Array.isArray(value)) {
      return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
    }
    return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
  }
  function stringifyQuery(query) {
    return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).join("&");
  }
  var PROTOCOL_STRICT_REGEX = /^\w{2,}:([/\\]{1,2})/;
  var PROTOCOL_REGEX = /^\w{2,}:([/\\]{2})?/;
  var PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
  function hasProtocol(inputString, opts = {}) {
    if (typeof opts === "boolean") {
      opts = { acceptRelative: opts };
    }
    if (opts.strict) {
      return PROTOCOL_STRICT_REGEX.test(inputString);
    }
    return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
  }
  var TRAILING_SLASH_RE = /\/$|\/\?/;
  function hasTrailingSlash(input = "", queryParameters = false) {
    if (!queryParameters) {
      return input.endsWith("/");
    }
    return TRAILING_SLASH_RE.test(input);
  }
  function withoutTrailingSlash(input = "", queryParameters = false) {
    if (!queryParameters) {
      return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    }
    if (!hasTrailingSlash(input, true)) {
      return input || "/";
    }
    const [s0, ...s] = input.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
  }
  function withTrailingSlash(input = "", queryParameters = false) {
    if (!queryParameters) {
      return input.endsWith("/") ? input : input + "/";
    }
    if (hasTrailingSlash(input, true)) {
      return input || "/";
    }
    const [s0, ...s] = input.split("?");
    return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
  }
  function hasLeadingSlash(input = "") {
    return input.startsWith("/");
  }
  function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
  }
  function withBase(input, base) {
    if (isEmptyURL(base) || hasProtocol(input)) {
      return input;
    }
    const _base = withoutTrailingSlash(base);
    if (input.startsWith(_base)) {
      return input;
    }
    return joinURL(_base, input);
  }
  function withQuery(input, query) {
    const parsed = parseURL(input);
    const mergedQuery = { ...parseQuery(parsed.search), ...query };
    parsed.search = stringifyQuery(mergedQuery);
    return stringifyParsedURL(parsed);
  }
  function isEmptyURL(url) {
    return !url || url === "/";
  }
  function isNonEmptyURL(url) {
    return url && url !== "/";
  }
  function joinURL(base, ...input) {
    let url = base || "";
    for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
      url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
    }
    return url;
  }
  function parseURL(input = "", defaultProto) {
    if (!hasProtocol(input, { acceptRelative: true })) {
      return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
    }
    const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
    const [host = "", path = ""] = (hostAndPath.match(/([^#/?]*)(.*)?/) || []).splice(1);
    const { pathname, search, hash } = parsePath(
      path.replace(/\/(?=[A-Za-z]:)/, "")
    );
    return {
      protocol,
      auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
      host,
      pathname,
      search,
      hash
    };
  }
  function parsePath(input = "") {
    const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname,
      search,
      hash
    };
  }
  function stringifyParsedURL(parsed) {
    const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
    if (!parsed.protocol) {
      return fullpath;
    }
    return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
  }

  // node_modules/.pnpm/ofetch@1.1.0/node_modules/ofetch/dist/shared/ofetch.d438bb6f.mjs
  var FetchError = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "FetchError";
    }
  };
  function createFetchError(request2, error, response) {
    let message = "";
    if (error) {
      message = error.message;
    }
    if (request2 && response) {
      message = `${message} (${response.status} ${response.statusText} (${request2.toString()}))`;
    } else if (request2) {
      message = `${message} (${request2.toString()})`;
    }
    const fetchError = new FetchError(message);
    Object.defineProperty(fetchError, "request", {
      get() {
        return request2;
      }
    });
    Object.defineProperty(fetchError, "response", {
      get() {
        return response;
      }
    });
    Object.defineProperty(fetchError, "data", {
      get() {
        return response && response._data;
      }
    });
    Object.defineProperty(fetchError, "status", {
      get() {
        return response && response.status;
      }
    });
    Object.defineProperty(fetchError, "statusText", {
      get() {
        return response && response.statusText;
      }
    });
    Object.defineProperty(fetchError, "statusCode", {
      get() {
        return response && response.status;
      }
    });
    Object.defineProperty(fetchError, "statusMessage", {
      get() {
        return response && response.statusText;
      }
    });
    return fetchError;
  }
  var payloadMethods = new Set(
    Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
  );
  function isPayloadMethod(method = "GET") {
    return payloadMethods.has(method.toUpperCase());
  }
  function isJSONSerializable(value) {
    if (value === void 0) {
      return false;
    }
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) {
      return true;
    }
    if (t !== "object") {
      return false;
    }
    if (Array.isArray(value)) {
      return true;
    }
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
  }
  var textTypes = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]);
  var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function detectResponseType(_contentType = "") {
    if (!_contentType) {
      return "json";
    }
    const contentType = _contentType.split(";").shift() || "";
    if (JSON_RE.test(contentType)) {
      return "json";
    }
    if (textTypes.has(contentType) || contentType.startsWith("text/")) {
      return "text";
    }
    return "blob";
  }
  function mergeFetchOptions(input, defaults, Headers2 = globalThis.Headers) {
    const merged = {
      ...defaults,
      ...input
    };
    if (defaults?.params && input?.params) {
      merged.params = {
        ...defaults?.params,
        ...input?.params
      };
    }
    if (defaults?.query && input?.query) {
      merged.query = {
        ...defaults?.query,
        ...input?.query
      };
    }
    if (defaults?.headers && input?.headers) {
      merged.headers = new Headers2(defaults?.headers || {});
      for (const [key, value] of new Headers2(input?.headers || {})) {
        merged.headers.set(key, value);
      }
    }
    return merged;
  }
  var retryStatusCodes = /* @__PURE__ */ new Set([
    408,
    // Request Timeout
    409,
    // Conflict
    425,
    // Too Early
    429,
    // Too Many Requests
    500,
    // Internal Server Error
    502,
    // Bad Gateway
    503,
    // Service Unavailable
    504
    //  Gateway Timeout
  ]);
  function createFetch(globalOptions) {
    const { fetch: fetch3, Headers: Headers2 } = globalOptions;
    function onError(context) {
      const isAbort = context.error && context.error.name === "AbortError" || false;
      if (context.options.retry !== false && !isAbort) {
        let retries;
        if (typeof context.options.retry === "number") {
          retries = context.options.retry;
        } else {
          retries = isPayloadMethod(context.options.method) ? 0 : 1;
        }
        const responseCode = context.response && context.response.status || 500;
        if (retries > 0 && retryStatusCodes.has(responseCode)) {
          return $fetchRaw(context.request, {
            ...context.options,
            retry: retries - 1
          });
        }
      }
      const error = createFetchError(
        context.request,
        context.error,
        context.response
      );
      if (Error.captureStackTrace) {
        Error.captureStackTrace(error, $fetchRaw);
      }
      throw error;
    }
    const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
      const context = {
        request: _request,
        options: mergeFetchOptions(_options, globalOptions.defaults, Headers2),
        response: void 0,
        error: void 0
      };
      if (context.options.onRequest) {
        await context.options.onRequest(context);
      }
      if (typeof context.request === "string") {
        if (context.options.baseURL) {
          context.request = withBase(context.request, context.options.baseURL);
        }
        if (context.options.query || context.options.params) {
          context.request = withQuery(context.request, {
            ...context.options.params,
            ...context.options.query
          });
        }
        if (context.options.body && isPayloadMethod(context.options.method) && isJSONSerializable(context.options.body)) {
          context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
          context.options.headers = new Headers2(context.options.headers || {});
          if (!context.options.headers.has("content-type")) {
            context.options.headers.set("content-type", "application/json");
          }
          if (!context.options.headers.has("accept")) {
            context.options.headers.set("accept", "application/json");
          }
        }
      }
      try {
        context.response = await fetch3(
          context.request,
          context.options
        );
      } catch (error) {
        context.error = error;
        if (context.options.onRequestError) {
          await context.options.onRequestError(context);
        }
        return await onError(context);
      }
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      if (responseType === "json") {
        const data = await context.response.text();
        const parseFunction = context.options.parseResponse || destr;
        context.response._data = parseFunction(data);
      } else if (responseType === "stream") {
        context.response._data = context.response.body;
      } else {
        context.response._data = await context.response[responseType]();
      }
      if (context.options.onResponse) {
        await context.options.onResponse(context);
      }
      if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
        if (context.options.onResponseError) {
          await context.options.onResponseError(context);
        }
        return await onError(context);
      }
      return context.response;
    };
    const $fetch = async function $fetch2(request2, options) {
      const r2 = await $fetchRaw(request2, options);
      return r2._data;
    };
    $fetch.raw = $fetchRaw;
    $fetch.native = fetch3;
    $fetch.create = (defaultOptions = {}) => createFetch({
      ...globalOptions,
      defaults: {
        ...globalOptions.defaults,
        ...defaultOptions
      }
    });
    return $fetch;
  }

  // node_modules/.pnpm/ofetch@1.1.0/node_modules/ofetch/dist/index.mjs
  var _globalThis = function() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  }();
  var fetch2 = _globalThis.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
  var Headers = _globalThis.Headers;
  var ofetch = createFetch({ fetch: fetch2, Headers });

  // src/background/providers/bard.ts
  var ChatError = class extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  };
  async function sendMessageFeedbackBard(data) {
    console.log("TODO: Currently it is dummy, no feedback is actually sent");
    console.log("data:", data);
  }
  async function setConversationProperty(token, conversationId, propertyObject) {
  }
  var cache = new import_expiry_map.default(10 * 1e3);
  var BARDProvider = class {
    constructor(token) {
      this.token = token;
      this.token = token;
    }
    extractFromHTML(variableName, html) {
      const regex = new RegExp(`"${variableName}":"([^"]+)"`);
      const match = regex.exec(html);
      return match == null ? void 0 : match[1];
    }
    async fetchRequestParams() {
      const html = await ofetch("https://bard.google.com/faq");
      const atValue = this.extractFromHTML("SNlM0e", html);
      const blValue = this.extractFromHTML("cfb2h", html);
      return { atValue, blValue };
    }
    async parseBartResponse(resp) {
      const data = JSON.parse(resp.split("\n")[3]);
      const payload = JSON.parse(data[0][2]);
      if (!payload) {
        throw new ChatError("Failed to access Bard", "BARD_EMPTY_RESPONSE" /* BARD_EMPTY_RESPONSE */);
      }
      const text = payload[0][0];
      return {
        text,
        ids: [...payload[1], payload[4][0][0]]
      };
    }
    async generateReqId() {
      return Math.floor(Math.random() * 9e5) + 1e5;
    }
    async generateAnswer(params) {
      let conversationId;
      const cleanup = () => {
        if (conversationId) {
          console.log("conversationId", conversationId);
          setConversationProperty(this.token, conversationId, { is_visible: false });
        }
      };
      this.conversationContext = params.conversationContext;
      if (!this.conversationContext) {
        this.conversationContext = {
          requestParams: await this.fetchRequestParams(),
          contextIds: ["", "", ""]
        };
      }
      const { requestParams, contextIds } = this.conversationContext;
      console.debug("request ids:", contextIds);
      const resp = await ofetch(
        "https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
        {
          method: "POST",
          signal: params.signal,
          query: {
            bl: requestParams.blValue,
            _reqid: this.generateReqId(),
            rt: "c"
          },
          body: new URLSearchParams({
            at: requestParams.atValue,
            "f.req": JSON.stringify([
              null,
              `[[${JSON.stringify(params.prompt)}],null,${JSON.stringify(contextIds)}]`
            ])
          }),
          parseResponse: (txt) => txt
        }
      );
      const { text, ids } = await this.parseBartResponse(resp);
      console.debug("text:", text);
      console.debug("response ids:", ids);
      this.conversationContext.contextIds = ids;
      if (text) {
        conversationId = "dataconversation_id";
        params.onEvent({
          type: "answer",
          data: {
            text,
            // messageId: 'datamessage.id',
            // conversationId: 'dataconversation_id',
            // parentMessageId: 'dataparent_message_id',
            conversationContext: this.conversationContext
          }
        });
      }
      params.onEvent({ type: "done" });
      cleanup();
      return { cleanup };
    }
    resetConversation() {
      this.conversationContext = void 0;
    }
  };

  // src/background/providers/chatgpt.ts
  var import_expiry_map2 = __toESM(require_dist2());

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/.pnpm/eventsource-parser@0.0.5/node_modules/eventsource-parser/dist/index.mjs
  function createParser(onParse) {
    let isFirstChunk;
    let buffer;
    let startingPosition;
    let startingFieldLength;
    let eventId;
    let eventName;
    let data;
    reset();
    return {
      feed,
      reset
    };
    function reset() {
      isFirstChunk = true;
      buffer = "";
      startingPosition = 0;
      startingFieldLength = -1;
      eventId = void 0;
      eventName = void 0;
      data = "";
    }
    function feed(chunk) {
      buffer = buffer ? buffer + chunk : chunk;
      if (isFirstChunk && hasBom(buffer)) {
        buffer = buffer.slice(BOM.length);
      }
      isFirstChunk = false;
      const length = buffer.length;
      let position = 0;
      let discardTrailingNewline = false;
      while (position < length) {
        if (discardTrailingNewline) {
          if (buffer[position] === "\n") {
            ++position;
          }
          discardTrailingNewline = false;
        }
        let lineLength = -1;
        let fieldLength = startingFieldLength;
        let character;
        for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
          character = buffer[index];
          if (character === ":" && fieldLength < 0) {
            fieldLength = index - position;
          } else if (character === "\r") {
            discardTrailingNewline = true;
            lineLength = index - position;
          } else if (character === "\n") {
            lineLength = index - position;
          }
        }
        if (lineLength < 0) {
          startingPosition = length - position;
          startingFieldLength = fieldLength;
          break;
        } else {
          startingPosition = 0;
          startingFieldLength = -1;
        }
        parseEventStreamLine(buffer, position, fieldLength, lineLength);
        position += lineLength + 1;
      }
      if (position === length) {
        buffer = "";
      } else if (position > 0) {
        buffer = buffer.slice(position);
      }
    }
    function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
      if (lineLength === 0) {
        if (data.length > 0) {
          onParse({
            type: "event",
            id: eventId,
            event: eventName || void 0,
            data: data.slice(0, -1)
          });
          data = "";
          eventId = void 0;
        }
        eventName = void 0;
        return;
      }
      const noValue = fieldLength < 0;
      const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
      let step = 0;
      if (noValue) {
        step = lineLength;
      } else if (lineBuffer[index + fieldLength + 1] === " ") {
        step = fieldLength + 2;
      } else {
        step = fieldLength + 1;
      }
      const position = index + step;
      const valueLength = lineLength - step;
      const value = lineBuffer.slice(position, position + valueLength).toString();
      if (field === "data") {
        data += value ? "".concat(value, "\n") : "\n";
      } else if (field === "event") {
        eventName = value;
      } else if (field === "id" && !value.includes("\0")) {
        eventId = value;
      } else if (field === "retry") {
        const retry = parseInt(value, 10);
        if (!Number.isNaN(retry)) {
          onParse({
            type: "reconnect-interval",
            value: retry
          });
        }
      }
    }
  }
  var BOM = [239, 187, 191];
  function hasBom(buffer) {
    return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
  }

  // src/background/stream-async-iterable.ts
  async function* streamAsyncIterable(stream) {
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          return;
        }
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }

  // src/background/fetch-sse.ts
  async function fetchSSE(resource, options) {
    const { onMessage, ...fetchOptions } = options;
    const resp = await fetch(resource, fetchOptions);
    if (!resp.ok) {
      const error = await resp.json().catch(() => ({}));
      throw new Error(!isEmpty_default(error) ? JSON.stringify(error) : `${resp.status} ${resp.statusText}`);
    }
    const parser = createParser((event) => {
      if (event.type === "event") {
        onMessage(event.data);
      }
    });
    for await (const chunk of streamAsyncIterable(resp.body)) {
      const str = new TextDecoder().decode(chunk);
      parser.feed(str);
    }
  }

  // src/background/providers/chatgpt.ts
  async function request(token, method, path, data) {
    return fetch(`${BASE_URL}/backend-api${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: data === void 0 ? void 0 : JSON.stringify(data)
    });
  }
  async function sendMessageFeedback(token, data) {
    await request(token, "POST", "/conversation/message_feedback", data);
  }
  async function setConversationProperty2(token, conversationId, propertyObject) {
    await request(token, "PATCH", `/conversation/${conversationId}`, propertyObject);
  }
  var KEY_ACCESS_TOKEN = "accessToken";
  var cache2 = new import_expiry_map2.default(10 * 1e3);
  async function getChatGPTAccessToken() {
    if (cache2.get(KEY_ACCESS_TOKEN)) {
      return cache2.get(KEY_ACCESS_TOKEN);
    }
    const resp = await fetch(`${BASE_URL}/api/auth/session`);
    if (resp.status === 403) {
      throw new Error("CLOUDFLARE");
    }
    const data = await resp.json().catch(() => ({}));
    if (!data.accessToken) {
      throw new Error("UNAUTHORIZED");
    }
    cache2.set(KEY_ACCESS_TOKEN, data.accessToken);
    return data.accessToken;
  }
  var ChatGPTProvider = class {
    constructor(token) {
      this.token = token;
      this.token = token;
    }
    async fetchModels() {
      const resp = await request(this.token, "GET", "/models").then((r2) => r2.json());
      return resp.models;
    }
    async getModelName() {
      try {
        const models = await this.fetchModels();
        return models[0].slug;
      } catch (err) {
        console.error(err);
        return "text-davinci-002-render-sha";
      }
    }
    async generateAnswer(params) {
      let conversationId;
      const cleanup = () => {
        if (conversationId) {
          setConversationProperty2(this.token, conversationId, { is_visible: true });
        }
      };
      const modelName = await this.getModelName();
      await fetchSSE(`${BASE_URL}/backend-api/conversation`, {
        method: "POST",
        signal: params.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify({
          action: "next",
          messages: [
            {
              id: v4_default(),
              role: "user",
              content: {
                content_type: "text",
                parts: [params.prompt]
              }
            }
          ],
          model: modelName,
          parent_message_id: v4_default()
        }),
        onMessage(message) {
          var _a, _b, _c;
          console.debug("sse message", message);
          if (message === "[DONE]") {
            params.onEvent({ type: "done" });
            cleanup();
            return;
          }
          let data;
          try {
            data = JSON.parse(message);
          } catch (err) {
            console.error(err);
            return;
          }
          const text = (_c = (_b = (_a = data.message) == null ? void 0 : _a.content) == null ? void 0 : _b.parts) == null ? void 0 : _c[0];
          if (text) {
            conversationId = data.conversation_id;
            params.onEvent({
              type: "answer",
              data: {
                text,
                messageId: data.message.id,
                conversationId: data.conversation_id
              }
            });
          }
        }
      });
      return { cleanup };
    }
  };

  // src/background/providers/openai.ts
  var OpenAIProvider = class {
    constructor(token, model) {
      this.token = token;
      this.model = model;
      this.token = token;
      this.model = model;
    }
    buildPrompt(prompt) {
      if (this.model.startsWith("text-chat-davinci")) {
        return `Respond conversationally.<|im_end|>

User: ${prompt}<|im_sep|>
ChatGPT:`;
      }
      return prompt;
    }
    buildMessages(prompt) {
      return [{ role: "user", content: prompt }];
    }
    async generateAnswer(params) {
      var _a, _b, _c;
      const [config] = await Promise.all([getProviderConfigs()]);
      const gptModel = (_b = (_a = config.configs["gpt3" /* GPT3 */]) == null ? void 0 : _a.model) != null ? _b : DEFAULT_MODEL;
      const apiHost = ((_c = config.configs["gpt3" /* GPT3 */]) == null ? void 0 : _c.apiHost) || DEFAULT_API_HOST;
      let url = "";
      let reqParams = {
        model: this.model,
        // prompt: this.buildPrompt(params.prompt),
        // messages: this.buildMessages(params.prompt),
        stream: true,
        max_tokens: 800
        // temperature: 0.5,
      };
      if (gptModel === "text-davinci-003") {
        url = `https://${apiHost}/v1/completions`;
        reqParams = { ...reqParams, ...{ prompt: this.buildPrompt(params.prompt) } };
      } else {
        url = `https://${apiHost}/v1/chat/completions`;
        reqParams = { ...reqParams, ...{ messages: this.buildMessages(params.prompt) } };
      }
      let result = "";
      await fetchSSE(url, {
        method: "POST",
        signal: params.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(reqParams),
        onMessage(message) {
          console.debug("sse message", message);
          if (message === "[DONE]") {
            params.onEvent({ type: "done" });
            return;
          }
          let data;
          try {
            data = JSON.parse(message);
            const text = gptModel === "text-davinci-003" ? data.choices[0].text : data.choices[0].delta.content;
            if (text === void 0 || text === "<|im_end|>" || text === "<|im_sep|>") {
              return;
            }
            result += text;
            params.onEvent({
              type: "answer",
              data: {
                text: result,
                messageId: data.id,
                conversationId: data.id
              }
            });
          } catch (err) {
            return;
          }
        }
      });
      return {};
    }
  };

  // src/utils/utils.ts
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  function tabSendMsg(tab) {
    const { id, url } = tab;
    if (url.includes(`${BASE_URL}/chat`)) {
      import_webextension_polyfill2.default.tabs.sendMessage(id, { type: "CHATGPT_TAB_CURRENT", data: { isLogin: true } }).catch(() => {
      });
    } else {
      import_webextension_polyfill2.default.tabs.sendMessage(id, { type: "CHATGPT_TAB_CURRENT", data: { isLogin: false } }).catch(() => {
      });
    }
  }

  // src/background/index.ts
  async function generateAnswers(port, question, conversationId, parentMessageId, conversationContext) {
    const providerConfigs = await getProviderConfigs();
    let provider;
    if (providerConfigs.provider === "bard" /* BARD */) {
      provider = new BARDProvider();
    } else if (providerConfigs.provider === "chatgpt" /* ChatGPT */) {
      const token = await getChatGPTAccessToken();
      provider = new ChatGPTProvider(token);
    } else if (providerConfigs.provider === "gpt3" /* GPT3 */) {
      const { apiKey, model } = providerConfigs.configs["gpt3" /* GPT3 */];
      provider = new OpenAIProvider(apiKey, model);
    } else {
      throw new Error(`Unknown provider ${providerConfigs.provider}`);
    }
    const controller = new AbortController();
    port.onDisconnect.addListener(() => {
      controller.abort();
      cleanup == null ? void 0 : cleanup();
    });
    const { cleanup } = await provider.generateAnswer({
      prompt: question,
      signal: controller.signal,
      onEvent(event) {
        if (event.type === "done") {
          port.postMessage({ event: "DONE" });
          return;
        }
        port.postMessage(event.data);
      },
      conversationId,
      //used for chatGPT
      parentMessageId,
      //used for chatGPT
      conversationContext
      //used for BARD
    });
  }
  async function createTab(url) {
    import_webextension_polyfill3.default.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
      console.log("getCurrent", tabs);
      const tab2 = tabs[0];
      if (tab2.id) {
        import_webextension_polyfill3.default.storage.local.set({ beyondbardTabId: tab2.id });
      }
    });
    const oldTabId = await import_webextension_polyfill3.default.storage.local.get("pinnedTabId");
    let tab;
    if (oldTabId.pinnedTabId) {
      try {
        tab = await import_webextension_polyfill3.default.tabs.get(oldTabId.pinnedTabId);
        import_webextension_polyfill3.default.tabs.update(tab.id, { active: true, pinned: true });
      } catch (error) {
        console.error(error);
      }
    }
    if (!tab) {
      tab = await import_webextension_polyfill3.default.tabs.create({
        url,
        pinned: true,
        active: true
      });
    }
    import_webextension_polyfill3.default.storage.local.set({ pinnedTabId: tab.id });
    return { pinnedTabId: tab.id };
  }
  import_webextension_polyfill3.default.runtime.onConnect.addListener(async (port) => {
    port.onMessage.addListener(async (msg) => {
      console.debug("received msg", msg);
      try {
        await generateAnswers(
          port,
          msg.question,
          msg.conversationId,
          msg.parentMessageId,
          msg.conversationContext
        );
      } catch (err) {
        port.postMessage({ error: err.message });
      }
    });
  });
  import_webextension_polyfill3.default.runtime.onMessage.addListener(async (message) => {
    if (message.type === "FEEDBACK") {
      const providerConfigs = await getProviderConfigs();
      if (providerConfigs.provider === "chatgpt" /* ChatGPT */) {
        const token = await getChatGPTAccessToken();
        await sendMessageFeedback(token, message.data);
      } else {
        await sendMessageFeedbackBard(message.data);
      }
    } else if (message.type === "OPEN_OPTIONS_PAGE") {
      import_webextension_polyfill3.default.runtime.openOptionsPage();
    } else if (message.type === "GET_ACCESS_TOKEN") {
      return getChatGPTAccessToken();
    } else if (message.type === "NEW_TAB") {
      return createTab(message.data.url);
    } else if (message.type === "GO_BACK") {
      const tab = await import_webextension_polyfill3.default.storage.local.get("beyondbardTabId");
      if (tab.beyondbardTabId) {
        import_webextension_polyfill3.default.tabs.update(tab.beyondbardTabId, { active: true }).catch(() => {
          import_webextension_polyfill3.default.tabs.create({ url: "about:newtab", active: true });
        });
      } else {
        import_webextension_polyfill3.default.tabs.create({ url: "about:newtab", active: true });
      }
    }
  });
  import_webextension_polyfill3.default.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === "install") {
      import_webextension_polyfill3.default.runtime.openOptionsPage();
    }
  });
  import_webextension_polyfill3.default.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
    const oldTabId = await import_webextension_polyfill3.default.storage.local.get("pinnedTabId");
    import_webextension_polyfill3.default.tabs.get(tabId).then((tab) => {
      var _a;
      if (((_a = tab.url) == null ? void 0 : _a.includes(BASE_URL)) && changeInfo.status === "complete" && tab.id && oldTabId.pinnedTabId === tab.id) {
        console.log("onUpdated", oldTabId, tab);
        tabSendMsg(tab);
      }
    });
  });
  async function openPageSummary(tab) {
    const { id } = tab;
    if (!id) {
      return;
    }
    import_webextension_polyfill3.default.tabs.sendMessage(id, { type: "OPEN_WEB_SUMMARY", data: {} }).catch(() => {
    });
  }
  if (isFirefox) {
    import_webextension_polyfill3.default.browserAction.onClicked.addListener(async (tab) => {
      await openPageSummary(tab);
    });
  } else {
    import_webextension_polyfill3.default.action.onClicked.addListener(async (tab) => {
      await openPageSummary(tab);
    });
  }
})();

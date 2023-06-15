"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/preact@10.13.1/node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function v(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, r3, o4, f3 = {};
    for (o4 in u3)
      "key" == o4 ? t3 = u3[o4] : "ref" == o4 ? r3 = u3[o4] : f3[o4] = u3[o4];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (o4 in l3.defaultProps)
        void 0 === f3[o4] && (f3[o4] = l3.defaultProps[o4]);
    return p(l3, f3, t3, r3, null);
  }
  function p(n2, i3, t3, r3, o4) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o4 ? ++u : o4 };
    return null == o4 && null != l.vnode && l.vnode(f3), f3;
  }
  function d() {
    return { current: null };
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function b(n2, l3) {
    if (null == l3)
      return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? b(n2) : null;
  }
  function g(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return g(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n2, l3, u3, i3, r3, o4, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, r3 = void 0, e3 = (o4 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (r3 = h({}, o4)).__v = o4.__v + 1, L(c3, o4, r3, u3.__n, void 0 !== c3.ownerSVGElement, null != o4.__h ? [e3] : null, i3, null == e3 ? b(o4) : e3, o4.__h), M(i3, o4), o4.__e != e3 && g(o4)), t.length > l3 && t.sort(f));
    w.__r = 0;
  }
  function x(n2, l3, u3, i3, t3, r3, o4, f3, e3, a3) {
    var h3, v3, y3, d3, k4, g4, m3, w4 = i3 && i3.__k || s, x4 = w4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (d3 = u3.__k[h3] = null == (d3 = l3[h3]) || "boolean" == typeof d3 || "function" == typeof d3 ? null : "string" == typeof d3 || "number" == typeof d3 || "bigint" == typeof d3 ? p(null, d3, null, null, d3) : Array.isArray(d3) ? p(_, { children: d3 }, null, null, null) : d3.__b > 0 ? p(d3.type, d3.props, d3.key, d3.ref ? d3.ref : null, d3.__v) : d3)) {
        if (d3.__ = u3, d3.__b = u3.__b + 1, null === (y3 = w4[h3]) || y3 && d3.key == y3.key && d3.type === y3.type)
          w4[h3] = void 0;
        else
          for (v3 = 0; v3 < x4; v3++) {
            if ((y3 = w4[v3]) && d3.key == y3.key && d3.type === y3.type) {
              w4[v3] = void 0;
              break;
            }
            y3 = null;
          }
        L(n2, d3, y3 = y3 || c, t3, r3, o4, f3, e3, a3), k4 = d3.__e, (v3 = d3.ref) && y3.ref != v3 && (m3 || (m3 = []), y3.ref && m3.push(y3.ref, null, d3), m3.push(v3, d3.__c || k4, d3)), null != k4 ? (null == g4 && (g4 = k4), "function" == typeof d3.type && d3.__k === y3.__k ? d3.__d = e3 = A(d3, e3, n2) : e3 = C(n2, d3, y3, w4, k4, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = b(y3));
      }
    for (u3.__e = g4, h3 = x4; h3--; )
      null != w4[h3] && ("function" == typeof u3.type && null != w4[h3].__e && w4[h3].__e == u3.__d && (u3.__d = $(i3).nextSibling), S(w4[h3], w4[h3]));
    if (m3)
      for (h3 = 0; h3 < m3.length; h3++)
        O(m3[h3], m3[++h3], m3[++h3]);
  }
  function A(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? A(i3, l3, u3) : C(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      P(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function C(n2, l3, u3, i3, t3, r3) {
    var o4, f3, e3;
    if (void 0 !== l3.__d)
      o4 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != r3 || null == t3.parentNode)
      n:
        if (null == r3 || r3.parentNode !== n2)
          n2.appendChild(t3), o4 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o4 = r3;
        }
    return void 0 !== o4 ? o4 : t3.nextSibling;
  }
  function $(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = $(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      "children" === r3 || "key" === r3 || r3 in l3 || T(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || T(n2, r3, l3[r3], u3[r3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? z : j, r3) : n2.removeEventListener(l3, r3 ? z : j, r3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, r3, o4, f3, e3, c3) {
    var s3, a3, v3, y3, p3, d3, b3, g4, m3, w4, A4, P4, C3, $3, H3, I3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o4 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I3) {
          if (g4 = u3.props, m3 = (s3 = I3.contextType) && t3[s3.__c], w4 = s3 ? m3 ? m3.props.value : s3.__ : t3, i3.__c ? b3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(g4, w4) : (u3.__c = a3 = new k(g4, w4), a3.constructor = I3, a3.render = q), m3 && m3.sub(a3), a3.props = g4, a3.state || (a3.state = {}), a3.context = w4, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(g4, a3.__s))), y3 = a3.props, p3 = a3.state, a3.__v = u3, v3)
            null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && g4 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(g4, w4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(g4, a3.__s, w4) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = g4, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A4 = 0; A4 < a3._sb.length; A4++)
                a3.__h.push(a3._sb[A4]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(g4, a3.__s, w4), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, p3, d3);
            });
          }
          if (a3.context = w4, a3.props = g4, a3.__P = n2, P4 = l.__r, C3 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, P4 && P4(u3), s3 = a3.render(a3.props, a3.state, a3.context), $3 = 0; $3 < a3._sb.length; $3++)
              a3.__h.push(a3._sb[$3]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, P4 && P4(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++C3 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d3 = a3.getSnapshotBeforeUpdate(y3, p3)), H3 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, x(n2, Array.isArray(H3) ? H3 : [H3], u3, i3, t3, r3, o4, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), b3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == o4 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, r3, o4, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != o4) && (u3.__e = e3, u3.__h = !!c3, o4[o4.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, r3, o4, f3, e3) {
    var s3, a3, h3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _4 = 0;
    if ("svg" === d3 && (r3 = true), null != o4) {
      for (; _4 < o4.length; _4++)
        if ((s3 = o4[_4]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
          l3 = s3, o4[_4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), o4 = null, e3 = false;
    }
    if (null === d3)
      y3 === p3 || e3 && l3.data === p3 || (l3.data = p3);
    else {
      if (o4 = o4 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = p3.dangerouslySetInnerHTML, !e3) {
        if (null != o4)
          for (y3 = {}, _4 = 0; _4 < l3.attributes.length; _4++)
            y3[l3.attributes[_4].name] = l3.attributes[_4].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, p3, y3, r3, e3), h3)
        u3.__k = [];
      else if (_4 = u3.props.children, x(l3, Array.isArray(_4) ? _4 : [_4], u3, i3, t3, r3 && "foreignObject" !== d3, o4, f3, o4 ? o4[0] : i3.__k && b(i3, 0), e3), null != o4)
        for (_4 = o4.length; _4--; )
          null != o4[_4] && v(o4[_4]);
      e3 || ("value" in p3 && void 0 !== (_4 = p3.value) && (_4 !== l3.value || "progress" === d3 && !_4 || "option" === d3 && _4 !== y3.value) && T(l3, "value", _4, y3.value, false), "checked" in p3 && void 0 !== (_4 = p3.checked) && _4 !== l3.checked && T(l3, "checked", _4, y3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function S(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && S(t3[r3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, i3, t3) {
    var r3, o4, f3;
    l.__ && l.__(u3, i3), o4 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o4 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o4 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o4 ? o4.__e : i3.firstChild, r3), M(f3, u3);
  }
  function D(n2, l3) {
    B(n2, l3, D);
  }
  function E(l3, u3, i3) {
    var t3, r3, o4, f3 = h({}, l3.props);
    for (o4 in u3)
      "key" == o4 ? t3 = u3[o4] : "ref" == o4 ? r3 = u3[o4] : f3[o4] = u3[o4];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), p(l3.type, f3, t3 || l3.key, r3 || l3.ref, null);
  }
  function F(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, m(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, r, o, f, e, c, s, a;
  var init_preact_module = __esm({
    "node_modules/.pnpm/preact@10.13.1/node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, r3, o4; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o4 = t3.__d), o4)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, k.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), m(this));
      }, k.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, w.__r = 0, e = 0;
    }
  });

  // node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
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
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache2 = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache2;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache2) {
                    return cache2[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache2, prop, {
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
                  cache2[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache2) {
                    cache2[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache2, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache2, prop);
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
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/.pnpm/preact@10.13.1/node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o4 = d2(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o4.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o4.__N || o4.__;
  }
  function p2(u3, i3) {
    var o4 = d2(t2++, 3);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__H.__h.push(o4));
  }
  function y2(u3, i3) {
    var o4 = d2(t2++, 4);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__h.push(o4));
  }
  function _2(n2) {
    return o2 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, y2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F2(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function P2(n2) {
    var u3 = d2(t2++, 10), i3 = h2();
    return u3.__ = n2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, t3) {
      u3.__ && u3.__(n3, t3), i3[1](n3);
    }), [i3[0], function() {
      i3[1](void 0);
    }];
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/.pnpm/preact@10.13.1/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o4 = t3.__c;
        o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/.pnpm/preact@10.13.1/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, y(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2(n2) {
    var e3, r3, u3;
    function o4(o5) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return y(r3, o5);
    }
    return o4.displayName = "Lazy", o4.__f = true, o4;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P3(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      B(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), B(y(P3, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function G(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), B(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J(n2, t3, e3) {
    return D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n2) {
    return y.bind(null, n2);
  }
  function an(n2) {
    return !!n2 && n2.$$typeof === B3;
  }
  function sn(n2) {
    return an(n2) ? E.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (B(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  function gn(n2, t3) {
    var e3 = t3(), r3 = h2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o4 = r3[1];
    return y2(function() {
      u3.__ = e3, u3.v = t3, E2(u3.__, t3()) || o4({ h: u3 });
    }, [n2, e3, t3]), p2(function() {
      return E2(u3.__, u3.v()) || o4({ h: u3 }), n2(function() {
        E2(u3.__, u3.v()) || o4({ h: u3 });
      });
    }, [n2]), e3;
  }
  var R, N2, A3, O2, T3, I2, W, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, cn, dn, pn, mn, Sn, Cn;
  var init_compat_module = __esm({
    "node_modules/.pnpm/preact@10.13.1/node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new k()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      R = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n2, t3) {
        return null == n2 ? null : P(P(n2).map(t3));
      };
      O2 = { map: A3, forEach: A3, count: function(n2) {
        return n2 ? P(n2).length : 0;
      }, only: function(n2) {
        var t3 = P(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: P };
      T3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o4 = t3; o4 = o4.__; )
            if ((u3 = o4.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        T3(n2, t3, e3, r3);
      };
      I2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
      }, (D2.prototype = new k()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = F3(r3.__v), o4 = false, i3 = function() {
          o4 || (o4 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = true === t3.__h;
        r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, D2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r3, o4.__O = o4.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && y(_, null, n2.fallback);
        return i3 && (i3.__h = null), [y(_, null, e3.__a ? null : n2.children), i3];
      };
      W = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (V2.prototype = new k()).__a = function(n2) {
        var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o4 = function() {
            t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
          };
          e3 ? e3(o4) : o4();
        };
      }, V2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = P(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          W(n2, e3, t3);
        });
      };
      B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $2 = "undefined" != typeof document;
      q3 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(k.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      K = l.event;
      l.event = function(n2) {
        return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
      };
      en = { configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n2) {
        var t3 = n2.type, e3 = n2.props, u3 = e3;
        if ("string" == typeof t3) {
          for (var o4 in u3 = {}, e3) {
            var i3 = e3[o4];
            if (!("value" === o4 && "defaultValue" in e3 && null == i3 || $2 && "children" === o4 && "noscript" === t3)) {
              var l3 = o4.toLowerCase();
              "defaultValue" === o4 && "value" in e3 && null == e3.value ? o4 = "value" : "download" === o4 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o4 = "ondblclick" : "onchange" !== l3 || "input" !== t3 && "textarea" !== t3 || q3(e3.type) ? "onfocus" === l3 ? o4 = "onfocusin" : "onblur" === l3 ? o4 = "onfocusout" : Z.test(o4) ? o4 = l3 : -1 === t3.indexOf("-") && H2.test(o4) ? o4 = o4.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o4 = "oninput", "oninput" === l3 && u3[o4 = l3] && (o4 = "oninputCapture"), u3[o4] = i3;
            }
          }
          "select" == t3 && u3.multiple && Array.isArray(u3.value) && (u3.value = P(e3.children).forEach(function(n3) {
            n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
          })), "select" == t3 && null != u3.defaultValue && (u3.value = P(e3.children).forEach(function(n3) {
            n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
          })), n2.props = u3, e3.class != e3.className && (en.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", en));
        }
        n2.$$typeof = B3, rn && rn(n2);
      };
      un = l.__r;
      l.__r = function(n2) {
        un && un(n2), tn = n2.__c;
      };
      on = l.diffed;
      l.diffed = function(n2) {
        on && on(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return tn.__n[n2.__c].props.value;
      } } } };
      cn = "17.0.2";
      dn = function(n2, t3) {
        return n2(t3);
      };
      pn = function(n2, t3) {
        return n2(t3);
      };
      mn = _;
      Sn = y2;
      Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: F, createFactory: fn, cloneElement: sn, createRef: d, Fragment: _, isValidElement: an, findDOMNode: vn, Component: k, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // node_modules/.pnpm/@preact+compat@17.1.2_preact@10.13.1/node_modules/@preact/compat/index.mjs
  var compat_exports = {};
  __export(compat_exports, {
    Children: () => O2,
    Component: () => k,
    Fragment: () => _,
    PureComponent: () => w3,
    StrictMode: () => mn,
    Suspense: () => D2,
    SuspenseList: () => V2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
    cloneElement: () => sn,
    createContext: () => F,
    createElement: () => y,
    createFactory: () => fn,
    createPortal: () => z3,
    createRef: () => d,
    default: () => Cn,
    findDOMNode: () => vn,
    flushSync: () => pn,
    forwardRef: () => k3,
    hydrate: () => J,
    isValidElement: () => an,
    lazy: () => M2,
    memo: () => x3,
    render: () => G,
    startTransition: () => yn,
    unmountComponentAtNode: () => hn,
    unstable_batchedUpdates: () => dn,
    useCallback: () => T2,
    useContext: () => q2,
    useDebugValue: () => x2,
    useDeferredValue: () => _n,
    useEffect: () => p2,
    useErrorBoundary: () => P2,
    useId: () => V,
    useImperativeHandle: () => A2,
    useInsertionEffect: () => Sn,
    useLayoutEffect: () => y2,
    useMemo: () => F2,
    useReducer: () => s2,
    useRef: () => _2,
    useState: () => h2,
    useSyncExternalStore: () => gn,
    useTransition: () => bn,
    version: () => cn
  });
  var init_compat = __esm({
    "node_modules/.pnpm/@preact+compat@17.1.2_preact@10.13.1/node_modules/@preact/compat/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
  var require_use_sync_external_store_shim_production_min = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
      "use strict";
      var e3 = (init_compat(), __toCommonJS(compat_exports));
      function h3(a3, b3) {
        return a3 === b3 && (0 !== a3 || 1 / a3 === 1 / b3) || a3 !== a3 && b3 !== b3;
      }
      var k4 = "function" === typeof Object.is ? Object.is : h3;
      var l3 = e3.useState;
      var m3 = e3.useEffect;
      var n2 = e3.useLayoutEffect;
      var p3 = e3.useDebugValue;
      function q4(a3, b3) {
        var d3 = b3(), f3 = l3({ inst: { value: d3, getSnapshot: b3 } }), c3 = f3[0].inst, g4 = f3[1];
        n2(function() {
          c3.value = d3;
          c3.getSnapshot = b3;
          r3(c3) && g4({ inst: c3 });
        }, [a3, d3, b3]);
        m3(function() {
          r3(c3) && g4({ inst: c3 });
          return a3(function() {
            r3(c3) && g4({ inst: c3 });
          });
        }, [a3]);
        p3(d3);
        return d3;
      }
      function r3(a3) {
        var b3 = a3.getSnapshot;
        a3 = a3.value;
        try {
          var d3 = b3();
          return !k4(a3, d3);
        } catch (f3) {
          return true;
        }
      }
      function t3(a3, b3) {
        return b3();
      }
      var u3 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t3 : q4;
      exports.useSyncExternalStore = void 0 !== e3.useSyncExternalStore ? e3.useSyncExternalStore : u3;
    }
  });

  // node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/.pnpm/use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_use_sync_external_store_shim_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/popup/index.tsx
  init_preact_module();

  // src/assets/img/logo.png
  var logo_default = "data:image/png;base64,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";

  // src/config/index.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  var APP_TITLE = `BeyondBard`;

  // src/popup/App.tsx
  init_compat();

  // node_modules/.pnpm/swr@2.0.3_@preact+compat@17.1.2/node_modules/swr/core/dist/index.mjs
  init_compat();
  var import_shim = __toESM(require_shim(), 1);

  // node_modules/.pnpm/swr@2.0.3_@preact+compat@17.1.2/node_modules/swr/_internal/dist/index.mjs
  init_compat();
  var SWRGlobalState = /* @__PURE__ */ new WeakMap();
  var EMPTY_CACHE = {};
  var INITIAL_CACHE = {};
  var noop = () => {
  };
  var UNDEFINED = (
    /*#__NOINLINE__*/
    noop()
  );
  var OBJECT = Object;
  var isUndefined = (v3) => v3 === UNDEFINED;
  var isFunction = (v3) => typeof v3 == "function";
  var mergeObjects = (a3, b3) => ({
    ...a3,
    ...b3
  });
  var STR_UNDEFINED = "undefined";
  var isWindowDefined = typeof window != STR_UNDEFINED;
  var isDocumentDefined = typeof document != STR_UNDEFINED;
  var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
  var createCacheHelper = (cache2, key) => {
    const state = SWRGlobalState.get(cache2);
    return [
      // Getter
      () => cache2.get(key) || EMPTY_CACHE,
      // Setter
      (info) => {
        if (!isUndefined(key)) {
          const prev = cache2.get(key);
          if (!(key in INITIAL_CACHE)) {
            INITIAL_CACHE[key] = prev;
          }
          state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
        }
      },
      // Subscriber
      state[6],
      // Get server cache snapshot
      () => {
        if (!isUndefined(key)) {
          if (key in INITIAL_CACHE)
            return INITIAL_CACHE[key];
        }
        return cache2.get(key) || EMPTY_CACHE;
      }
    ];
  };
  var table = /* @__PURE__ */ new WeakMap();
  var counter = 0;
  var stableHash = (arg) => {
    const type = typeof arg;
    const constructor = arg && arg.constructor;
    const isDate = constructor == Date;
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
      result = table.get(arg);
      if (result)
        return result;
      result = ++counter + "~";
      table.set(arg, result);
      if (constructor == Array) {
        result = "@";
        for (index = 0; index < arg.length; index++) {
          result += stableHash(arg[index]) + ",";
        }
        table.set(arg, result);
      }
      if (constructor == OBJECT) {
        result = "#";
        const keys = OBJECT.keys(arg).sort();
        while (!isUndefined(index = keys.pop())) {
          if (!isUndefined(arg[index])) {
            result += index + ":" + stableHash(arg[index]) + ",";
          }
        }
        table.set(arg, result);
      }
    } else {
      result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
    }
    return result;
  };
  var online = true;
  var isOnline = () => online;
  var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
  ] : [
    noop,
    noop
  ];
  var isVisible = () => {
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== "hidden";
  };
  var initFocus = (callback) => {
    if (isDocumentDefined) {
      document.addEventListener("visibilitychange", callback);
    }
    onWindowEvent("focus", callback);
    return () => {
      if (isDocumentDefined) {
        document.removeEventListener("visibilitychange", callback);
      }
      offWindowEvent("focus", callback);
    };
  };
  var initReconnect = (callback) => {
    const onOnline = () => {
      online = true;
      callback();
    };
    const onOffline = () => {
      online = false;
    };
    onWindowEvent("online", onOnline);
    onWindowEvent("offline", onOffline);
    return () => {
      offWindowEvent("online", onOnline);
      offWindowEvent("offline", onOffline);
    };
  };
  var preset = {
    isOnline,
    isVisible
  };
  var defaultConfigOptions = {
    initFocus,
    initReconnect
  };
  var IS_REACT_LEGACY = !Cn.useId;
  var IS_SERVER = !isWindowDefined || "Deno" in window;
  var rAF = (f3) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f3) : setTimeout(f3, 1);
  var useIsomorphicLayoutEffect = IS_SERVER ? p2 : y2;
  var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
  var slowConnection = !IS_SERVER && navigatorConnection && ([
    "slow-2g",
    "2g"
  ].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
  var serialize = (key) => {
    if (isFunction(key)) {
      try {
        key = key();
      } catch (err) {
        key = "";
      }
    }
    const args = key;
    key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
    return [
      key,
      args
    ];
  };
  var __timestamp = 0;
  var getTimestamp = () => ++__timestamp;
  var FOCUS_EVENT = 0;
  var RECONNECT_EVENT = 1;
  var MUTATE_EVENT = 2;
  var constants = {
    __proto__: null,
    FOCUS_EVENT,
    RECONNECT_EVENT,
    MUTATE_EVENT
  };
  async function internalMutate(...args) {
    const [cache2, _key, _data, _opts] = args;
    const options = mergeObjects({
      populateCache: true,
      throwOnError: true
    }, typeof _opts === "boolean" ? {
      revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const revalidate = options.revalidate !== false;
    const rollbackOnError = (error) => {
      return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    if (isFunction(_key)) {
      const keyFilter = _key;
      const matchedKeys = [];
      const it = cache2.keys();
      for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
        const key = keyIt.value;
        if (
          // Skip the special useSWRInfinite keys.
          !key.startsWith("$inf$") && keyFilter(cache2.get(key)._k)
        ) {
          matchedKeys.push(key);
        }
      }
      return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
      const [key] = serialize(_k);
      if (!key)
        return;
      const [get, set] = createCacheHelper(cache2, key);
      const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
      const revalidators = EVENT_REVALIDATORS[key];
      const startRevalidate = () => {
        if (revalidate) {
          delete FETCH[key];
          if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(() => get().data);
          }
        }
        return get().data;
      };
      if (args.length < 3) {
        return startRevalidate();
      }
      let data = _data;
      let error;
      const beforeMutationTs = getTimestamp();
      MUTATION[key] = [
        beforeMutationTs,
        0
      ];
      const hasOptimisticData = !isUndefined(optimisticData);
      const state = get();
      const displayedData = state.data;
      const currentData = state._c;
      const committedData = isUndefined(currentData) ? displayedData : currentData;
      if (hasOptimisticData) {
        optimisticData = isFunction(optimisticData) ? optimisticData(committedData) : optimisticData;
        set({
          data: optimisticData,
          _c: committedData
        });
      }
      if (isFunction(data)) {
        try {
          data = data(committedData);
        } catch (err) {
          error = err;
        }
      }
      if (data && isFunction(data.then)) {
        data = await data.catch((err) => {
          error = err;
        });
        if (beforeMutationTs !== MUTATION[key][0]) {
          if (error)
            throw error;
          return data;
        } else if (error && hasOptimisticData && rollbackOnError(error)) {
          populateCache = true;
          data = committedData;
          set({
            data,
            _c: UNDEFINED
          });
        }
      }
      if (populateCache) {
        if (!error) {
          if (isFunction(populateCache)) {
            data = populateCache(data, committedData);
          }
          set({
            data,
            _c: UNDEFINED
          });
        }
      }
      MUTATION[key][1] = getTimestamp();
      const res = await startRevalidate();
      set({
        _c: UNDEFINED
      });
      if (error) {
        if (throwOnError)
          throw error;
        return;
      }
      return populateCache ? res : data;
    }
  }
  var revalidateAllKeys = (revalidators, type) => {
    for (const key in revalidators) {
      if (revalidators[key][0])
        revalidators[key][0](type);
    }
  };
  var initCache = (provider, options) => {
    if (!SWRGlobalState.has(provider)) {
      const opts = mergeObjects(defaultConfigOptions, options);
      const EVENT_REVALIDATORS = {};
      const mutate2 = internalMutate.bind(UNDEFINED, provider);
      let unmount = noop;
      const subscriptions = {};
      const subscribe = (key, callback) => {
        const subs = subscriptions[key] || [];
        subscriptions[key] = subs;
        subs.push(callback);
        return () => subs.splice(subs.indexOf(callback), 1);
      };
      const setter = (key, value, prev) => {
        provider.set(key, value);
        const subs = subscriptions[key];
        if (subs) {
          for (let i3 = subs.length; i3--; ) {
            subs[i3](value, prev);
          }
        }
      };
      const initProvider = () => {
        if (!SWRGlobalState.has(provider)) {
          SWRGlobalState.set(provider, [
            EVENT_REVALIDATORS,
            {},
            {},
            {},
            mutate2,
            setter,
            subscribe
          ]);
          if (!IS_SERVER) {
            const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = () => {
              releaseFocus && releaseFocus();
              releaseReconnect && releaseReconnect();
              SWRGlobalState.delete(provider);
            };
          }
        }
      };
      initProvider();
      return [
        provider,
        mutate2,
        initProvider,
        unmount
      ];
    }
    return [
      provider,
      SWRGlobalState.get(provider)[4]
    ];
  };
  var onErrorRetry = (_4, __, config, revalidate, opts) => {
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
      return;
    }
    setTimeout(revalidate, timeout, opts);
  };
  var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
  var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
  var defaultConfig = mergeObjects(
    {
      // events
      onLoadingSlow: noop,
      onSuccess: noop,
      onError: noop,
      onErrorRetry,
      onDiscarded: noop,
      // switches
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      shouldRetryOnError: true,
      // timeouts
      errorRetryInterval: slowConnection ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: slowConnection ? 5e3 : 3e3,
      // providers
      compare,
      isPaused: () => false,
      cache,
      mutate,
      fallback: {}
    },
    // use web preset by default
    preset
  );
  var mergeConfigs = (a3, b3) => {
    const v3 = mergeObjects(a3, b3);
    if (b3) {
      const { use: u1, fallback: f1 } = a3;
      const { use: u22, fallback: f22 } = b3;
      if (u1 && u22) {
        v3.use = u1.concat(u22);
      }
      if (f1 && f22) {
        v3.fallback = mergeObjects(f1, f22);
      }
    }
    return v3;
  };
  var SWRConfigContext = F({});
  var SWRConfig = (props) => {
    const { value } = props;
    const parentConfig = q2(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = F2(() => isFunctionalConfig ? value(parentConfig) : value, [
      isFunctionalConfig,
      parentConfig,
      value
    ]);
    const extendedConfig = F2(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
      isFunctionalConfig,
      parentConfig,
      config
    ]);
    const provider = config && config.provider;
    const [cacheContext] = h2(() => provider ? initCache(provider(extendedConfig.cache || cache), config) : UNDEFINED);
    if (cacheContext) {
      extendedConfig.cache = cacheContext[0];
      extendedConfig.mutate = cacheContext[1];
    }
    useIsomorphicLayoutEffect(() => {
      if (cacheContext) {
        cacheContext[2] && cacheContext[2]();
        return cacheContext[3];
      }
    }, []);
    return y(SWRConfigContext.Provider, mergeObjects(props, {
      value: extendedConfig
    }));
  };
  var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
  var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
  var setupDevTools = () => {
    if (enableDevtools) {
      window.__SWR_DEVTOOLS_REACT__ = Cn;
    }
  };
  var normalize = (args) => {
    return isFunction(args[1]) ? [
      args[0],
      args[1],
      args[2] || {}
    ] : [
      args[0],
      null,
      (args[1] === null ? args[2] : args[1]) || {}
    ];
  };
  var useSWRConfig = () => {
    return mergeObjects(defaultConfig, q2(SWRConfigContext));
  };
  var middleware = (useSWRNext) => (key_, fetcher_, config) => {
    const fetcher = fetcher_ && ((...args) => {
      const key = serialize(key_)[0];
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      const req = PRELOAD[key];
      if (req) {
        delete PRELOAD[key];
        return req;
      }
      return fetcher_(...args);
    });
    return useSWRNext(key_, fetcher, config);
  };
  var BUILT_IN_MIDDLEWARE = use.concat(middleware);
  var withArgs = (hook) => {
    return function useSWRArgs(...args) {
      const fallbackConfig = useSWRConfig();
      const [key, fn2, _config] = normalize(args);
      const config = mergeConfigs(fallbackConfig, _config);
      let next = hook;
      const { use: use2 } = config;
      const middleware2 = (use2 || []).concat(BUILT_IN_MIDDLEWARE);
      for (let i3 = middleware2.length; i3--; ) {
        next = middleware2[i3](next);
      }
      return next(key, fn2 || config.fetcher || null, config);
    };
  };
  var subscribeCallback = (key, callbacks, callback) => {
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return () => {
      const index = keyedRevalidators.indexOf(callback);
      if (index >= 0) {
        keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
        keyedRevalidators.pop();
      }
    };
  };
  setupDevTools();

  // node_modules/.pnpm/swr@2.0.3_@preact+compat@17.1.2/node_modules/swr/core/dist/index.mjs
  var WITH_DEDUPE = {
    dedupe: true
  };
  var useSWRHandler = (_key, fetcher, config) => {
    const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const [key, fnArg] = serialize(_key);
    const initialMountedRef = _2(false);
    const unmountedRef = _2(false);
    const keyRef = _2(key);
    const fetcherRef = _2(fetcher);
    const configRef = _2(config);
    const getConfig = () => configRef.current;
    const isActive = () => getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
    const stateDependencies = _2({}).current;
    const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual = (prev, current) => {
      let equal = true;
      for (const _4 in stateDependencies) {
        const t3 = _4;
        if (t3 === "data") {
          if (!compare2(current[t3], prev[t3])) {
            if (isUndefined(prev[t3])) {
              if (!compare2(current[t3], returnedData)) {
                equal = false;
              }
            } else {
              equal = false;
            }
          }
        } else {
          if (current[t3] !== prev[t3]) {
            equal = false;
          }
        }
      }
      return equal;
    };
    const getSnapshot = F2(() => {
      const shouldStartRequest = (() => {
        if (!key)
          return false;
        if (!fetcher)
          return false;
        if (!isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return false;
        if (!isUndefined(revalidateIfStale))
          return revalidateIfStale;
        return true;
      })();
      const getSelectedCache = (state) => {
        const snapshot = mergeObjects(state);
        delete snapshot._k;
        if (!shouldStartRequest) {
          return snapshot;
        }
        return {
          isValidating: true,
          isLoading: true,
          ...snapshot
        };
      };
      let memorizedSnapshot = getSelectedCache(getCache());
      const memorizedInitialSnapshot = getSelectedCache(getInitialCache());
      return [
        () => {
          const newSnapshot = getSelectedCache(getCache());
          return isEqual(newSnapshot, memorizedSnapshot) ? memorizedSnapshot : memorizedSnapshot = newSnapshot;
        },
        () => memorizedInitialSnapshot
      ];
    }, [
      cache2,
      key
    ]);
    const cached = (0, import_shim.useSyncExternalStore)(T2(
      (callback) => subscribeCache(key, (current, prev) => {
        if (!isEqual(prev, current))
          callback();
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        cache2,
        key
      ]
    ), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = isUndefined(cachedData) ? fallback : cachedData;
    const error = cached.error;
    const laggyDataRef = _2(data);
    const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
    const shouldDoInitialRevalidation = (() => {
      if (hasRevalidator && !isUndefined(error))
        return false;
      if (isInitialMount && !isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return isUndefined(data) ? false : revalidateIfStale;
      return isUndefined(data) || revalidateIfStale;
    })();
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    const revalidate = T2(
      async (revalidateOpts) => {
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
          return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        const callbackSafeguard = () => {
          if (IS_REACT_LEGACY) {
            return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
          }
          return key === keyRef.current;
        };
        const finalState = {
          isValidating: false,
          isLoading: false
        };
        const finishRequestAndUpdateState = () => {
          setCache(finalState);
        };
        const cleanupState = () => {
          const requestInfo = FETCH[key];
          if (requestInfo && requestInfo[1] === startAt) {
            delete FETCH[key];
          }
        };
        const initialState = {
          isValidating: true
        };
        if (isUndefined(getCache().data)) {
          initialState.isLoading = true;
        }
        try {
          if (shouldStartNewRequest) {
            setCache(initialState);
            if (config.loadingTimeout && isUndefined(getCache().data)) {
              setTimeout(() => {
                if (loading && callbackSafeguard()) {
                  getConfig().onLoadingSlow(key, config);
                }
              }, config.loadingTimeout);
            }
            FETCH[key] = [
              currentFetcher(fnArg),
              getTimestamp()
            ];
          }
          [newData, startAt] = FETCH[key];
          newData = await newData;
          if (shouldStartNewRequest) {
            setTimeout(cleanupState, config.dedupingInterval);
          }
          if (!FETCH[key] || FETCH[key][1] !== startAt) {
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          finalState.error = UNDEFINED;
          const mutationInfo = MUTATION[key];
          if (!isUndefined(mutationInfo) && // case 1
          (startAt <= mutationInfo[0] || // case 2
          startAt <= mutationInfo[1] || // case 3
          mutationInfo[1] === 0)) {
            finishRequestAndUpdateState();
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          const cacheData = getCache().data;
          finalState.data = compare2(cacheData, newData) ? cacheData : newData;
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onSuccess(newData, key, config);
            }
          }
        } catch (err) {
          cleanupState();
          const currentConfig = getConfig();
          const { shouldRetryOnError } = currentConfig;
          if (!currentConfig.isPaused()) {
            finalState.error = err;
            if (shouldStartNewRequest && callbackSafeguard()) {
              currentConfig.onError(err, key, currentConfig);
              if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
                if (isActive()) {
                  currentConfig.onErrorRetry(err, key, currentConfig, revalidate, {
                    retryCount: (opts.retryCount || 0) + 1,
                    dedupe: true
                  });
                }
              }
            }
          }
        }
        loading = false;
        finishRequestAndUpdateState();
        return true;
      },
      // `setState` is immutable, and `eventsCallback`, `fnArg`, and
      // `keyValidating` are depending on `key`, so we can exclude them from
      // the deps array.
      //
      // FIXME:
      // `fn` and `config` might be changed during the lifecycle,
      // but they might be changed every render like this.
      // `useSWR('key', () => fetch('/api/'), { suspense: true })`
      // So we omit the values from the deps array
      // even though it might cause unexpected behaviors.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        key,
        cache2
      ]
    );
    const boundMutate = T2(
      // Use callback to make sure `keyRef.current` returns latest result every time
      (...args) => {
        return internalMutate(cache2, keyRef.current, ...args);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    useIsomorphicLayoutEffect(() => {
      fetcherRef.current = fetcher;
      configRef.current = config;
      if (!isUndefined(cachedData)) {
        laggyDataRef.current = cachedData;
      }
    });
    useIsomorphicLayoutEffect(() => {
      if (!key)
        return;
      const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
      let nextFocusRevalidatedAt = 0;
      const onRevalidate = (type) => {
        if (type == constants.FOCUS_EVENT) {
          const now = Date.now();
          if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
            softRevalidate();
          }
        } else if (type == constants.RECONNECT_EVENT) {
          if (getConfig().revalidateOnReconnect && isActive()) {
            softRevalidate();
          }
        } else if (type == constants.MUTATE_EVENT) {
          return revalidate();
        }
        return;
      };
      const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
      unmountedRef.current = false;
      keyRef.current = key;
      initialMountedRef.current = true;
      setCache({
        _k: fnArg
      });
      if (shouldDoInitialRevalidation) {
        if (isUndefined(data) || IS_SERVER) {
          softRevalidate();
        } else {
          rAF(softRevalidate);
        }
      }
      return () => {
        unmountedRef.current = true;
        unsubEvents();
      };
    }, [
      key
    ]);
    useIsomorphicLayoutEffect(() => {
      let timer;
      function next() {
        const interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
        if (interval && timer !== -1) {
          timer = setTimeout(execute, interval);
        }
      }
      function execute() {
        if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
          revalidate(WITH_DEDUPE).then(next);
        } else {
          next();
        }
      }
      next();
      return () => {
        if (timer) {
          clearTimeout(timer);
          timer = -1;
        }
      };
    }, [
      refreshInterval,
      refreshWhenHidden,
      refreshWhenOffline,
      key
    ]);
    x2(returnedData);
    if (suspense && isUndefined(data) && key) {
      if (!IS_REACT_LEGACY && IS_SERVER) {
        throw new Error("Fallback data is required when using suspense in SSR.");
      }
      fetcherRef.current = fetcher;
      configRef.current = config;
      unmountedRef.current = false;
      throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
      mutate: boundMutate,
      get data() {
        stateDependencies.data = true;
        return returnedData;
      },
      get error() {
        stateDependencies.error = true;
        return error;
      },
      get isValidating() {
        stateDependencies.isValidating = true;
        return isValidating;
      },
      get isLoading() {
        stateDependencies.isLoading = true;
        return isLoading;
      }
    };
  };
  var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
    value: defaultConfig
  });
  var useSWR = withArgs(useSWRHandler);

  // src/popup/App.tsx
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());

  // node_modules/.pnpm/preact@10.13.1/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var _3 = 0;
  function o3(o4, e3, n2, t3, f3, l3) {
    var s3, u3, a3 = {};
    for (u3 in e3)
      "ref" == u3 ? s3 = e3[u3] : a3[u3] = e3[u3];
    var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f3, __self: l3 };
    if ("function" == typeof o4 && (s3 = o4.defaultProps))
      for (u3 in s3)
        void 0 === a3[u3] && (a3[u3] = s3[u3]);
    return l.vnode && l.vnode(i3), i3;
  }

  // src/popup/App.tsx
  var isChrome = /chrome/i.test(navigator.userAgent);
  function App() {
    const [question, setQuestion] = h2("");
    const accessTokenQuery = useSWR(
      "accessToken",
      () => import_webextension_polyfill2.default.runtime.sendMessage({ type: "GET_ACCESS_TOKEN" }),
      { shouldRetryOnError: false }
    );
    const hideShortcutsTipQuery = useSWR("hideShortcutsTip", async () => {
      const { hideShortcutsTip } = await import_webextension_polyfill2.default.storage.local.get("hideShortcutsTip");
      return !!hideShortcutsTip;
    });
    const openOptionsPage = T2(() => {
      import_webextension_polyfill2.default.runtime.sendMessage({ type: "OPEN_OPTIONS_PAGE" });
    }, []);
    const openShortcutsPage = T2(() => {
      import_webextension_polyfill2.default.storage.local.set({ hideShortcutsTip: true });
      import_webextension_polyfill2.default.tabs.create({ url: "chrome://extensions/shortcuts" });
    }, []);
    return /* @__PURE__ */ o3("div", { className: "beyondbard--flex beyondbard--flex-col beyondbard--h-full beyondbard--popup", children: [
      /* @__PURE__ */ o3("div", { className: "beyondbard--mb-1 beyondbard--flex beyondbard--flex-row beyondbard--items-center beyondbard--px-1", children: [
        /* @__PURE__ */ o3("img", { src: logo_default, className: "beyondbard--w-5 beyondbard--h-5 beyondbard--rounded-sm" }),
        /* @__PURE__ */ o3("p", { className: "beyondbard--text-sm beyondbard--font-semibold beyondbard--m-0 beyondbard--ml-1", children: APP_TITLE })
      ] }),
      isChrome && !hideShortcutsTipQuery.isLoading && !hideShortcutsTipQuery.data && /* @__PURE__ */ o3("p", { className: "beyondbard--m-0 beyondbard--mb-1", children: [
        "Tip:",
        " ",
        /* @__PURE__ */ o3("a", { onClick: openShortcutsPage, className: "beyondbard--underline beyondbard--cursor-pointer", children: "setup shortcuts" }),
        " ",
        "for faster access."
      ] })
    ] });
  }
  var App_default = App;

  // src/popup/index.tsx
  B(/* @__PURE__ */ o3(App_default, {}), document.getElementById("app"));
})();

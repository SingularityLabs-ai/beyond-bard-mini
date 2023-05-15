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

  // node_modules/preact/dist/preact.module.js
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
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
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
    "node_modules/preact/dist/preact.module.js"() {
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

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
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

  // node_modules/preact/hooks/dist/hooks.module.js
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
    "node_modules/preact/hooks/dist/hooks.module.js"() {
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

  // node_modules/preact/compat/dist/compat.module.js
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
    "node_modules/preact/compat/dist/compat.module.js"() {
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
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o4 in t3) {
            var i3 = t3[o4];
            if (!("value" === o4 && "defaultValue" in t3 && null == i3 || $2 && "children" === o4 && "noscript" === e3 || "class" === o4 || "className" === o4)) {
              var l3 = o4.toLowerCase();
              "defaultValue" === o4 && "value" in t3 && null == t3.value ? o4 = "value" : "download" === o4 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o4 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o4 = "onfocusin" : "onblur" === l3 ? o4 = "onfocusout" : Z.test(o4) ? o4 = l3 : -1 === e3.indexOf("-") && H2.test(o4) ? o4 = o4.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o4 = "oninput", "oninput" === l3 && u3[o4 = l3] && (o4 = "oninputCapture"), u3[o4] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = P(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = P(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = B3, rn && rn(n2);
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

  // node_modules/react/index.mjs
  var react_exports = {};
  __export(react_exports, {
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
  var init_react = __esm({
    "node_modules/react/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
  var require_use_sync_external_store_shim_production_min = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
      "use strict";
      var e3 = (init_react(), __toCommonJS(react_exports));
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

  // node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
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
  var APP_TITLE = `BeyondBard Summary`;

  // src/popup/App.tsx
  init_react();

  // node_modules/swr/core/dist/index.mjs
  init_react();
  var import_shim = __toESM(require_shim(), 1);

  // node_modules/swr/_internal/dist/index.mjs
  init_react();
  var SWRGlobalState = /* @__PURE__ */ new WeakMap();
  var EMPTY_CACHE = {};
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
        const prev = cache2.get(key);
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      },
      // Subscriber
      state[6]
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
            subs[i3](prev, value);
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

  // node_modules/swr/core/dist/index.mjs
  var WITH_DEDUPE = {
    dedupe: true
  };
  var useSWRHandler = (_key, fetcher, config) => {
    const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const [key, fnArg] = serialize(_key);
    const initialMountedRef = _2(false);
    const unmountedRef = _2(false);
    const keyRef = _2(key);
    const fetcherRef = _2(fetcher);
    const configRef = _2(config);
    const getConfig = () => configRef.current;
    const isActive = () => getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache] = createCacheHelper(cache2, key);
    const stateDependencies = _2({}).current;
    const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual = (prev, current) => {
      let equal = true;
      for (const _4 in stateDependencies) {
        const t3 = _4;
        if (!compare2(current[t3], prev[t3])) {
          if (t3 === "data" && isUndefined(prev[t3])) {
            if (!compare2(current[t3], returnedData)) {
              equal = false;
            }
          } else {
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
        return true;
      })();
      const getSelectedCache = () => {
        const state = getCache();
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
      let memorizedSnapshot = getSelectedCache();
      return () => {
        const snapshot = getSelectedCache();
        return isEqual(snapshot, memorizedSnapshot) ? memorizedSnapshot : memorizedSnapshot = snapshot;
      };
    }, [
      cache2,
      key
    ]);
    const cached = (0, import_shim.useSyncExternalStore)(T2(
      (callback) => subscribeCache(key, (prev, current) => {
        if (!isEqual(prev, current))
          callback();
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        cache2,
        key
      ]
    ), getSnapshot, getSnapshot);
    const isInitialMount = !initialMountedRef.current;
    const cachedData = cached.data;
    const data = isUndefined(cachedData) ? fallback : cachedData;
    const error = cached.error;
    const laggyDataRef = _2(data);
    const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
    const shouldDoInitialRevalidation = (() => {
      if (isInitialMount && !isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return isUndefined(data) ? false : config.revalidateIfStale;
      return isUndefined(data) || config.revalidateIfStale;
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

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
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
    return /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-col glarity--h-full glarity--popup", children: [
      /* @__PURE__ */ o3("div", { className: "glarity--mb-1 glarity--flex glarity--flex-row glarity--items-center glarity--px-1", children: [
        /* @__PURE__ */ o3("img", { src: logo_default, className: "glarity--w-5 glarity--h-5 glarity--rounded-sm" }),
        /* @__PURE__ */ o3("p", { className: "glarity--text-sm glarity--font-semibold glarity--m-0 glarity--ml-1", children: APP_TITLE })
      ] }),
      isChrome && !hideShortcutsTipQuery.isLoading && !hideShortcutsTipQuery.data && /* @__PURE__ */ o3("p", { className: "glarity--m-0 glarity--mb-1", children: [
        "Tip:",
        " ",
        /* @__PURE__ */ o3("a", { onClick: openShortcutsPage, className: "glarity--underline glarity--cursor-pointer", children: "setup shortcuts" }),
        " ",
        "for faster access."
      ] })
    ] });
  }
  var App_default = App;

  // src/popup/index.tsx
  B(/* @__PURE__ */ o3(App_default, {}), document.getElementById("app"));
})();

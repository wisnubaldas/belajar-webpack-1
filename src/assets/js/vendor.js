/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
(function () {
    function t(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }
    var e, i, n, s, o, r, a, l, h, c, u, d, p, f, g, m, v, _, b, y, w, x, k, C, T, D, E, S, A, I, P, O, M, N, L, H, W, R, z, j, F, q, B, Y, X, U, $ = [].slice,
        K = {}.hasOwnProperty,
        V = function (t, e) {
            for (var i in e) K.call(e, i) && (t[i] = e[i]);

            function n() {
                this.constructor = t
            }
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        G = [].indexOf || function (t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };

    function Q() { }
    for (_ = {
        className: "",
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, D = function () {
        var t;
        return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
    }, S = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, v = window.cancelAnimationFrame || window.mozCancelAnimationFrame, d = function (t, e, i) {
        if ("function" == typeof t.addEventListener) return t.addEventListener(e, i, !1);
        var n;
        "function" != typeof t["on" + e] || "object" != typeof t["on" + e].eventListeners ? (n = new s, "function" == typeof t["on" + e] && n.on(e, t["on" + e]), t["on" + e] = function (t) {
            return n.trigger(e, t)
        }, t["on" + e].eventListeners = n) : n = t["on" + e].eventListeners, n.on(e, i)
    }, null == S && (S = function (t) {
        return setTimeout(t, 50)
    }, v = function (t) {
        return clearTimeout(t)
    }), I = function (t) {
        var e = D(),
            i = function () {
                var n = D() - e;
                return 33 <= n ? (e = D(), t(n, (function () {
                    return S(i)
                }))) : setTimeout(i, 33 - n)
            };
        return i()
    }, A = function () {
        var t = arguments[0],
            e = arguments[1],
            i = 3 <= arguments.length ? $.call(arguments, 2) : [];
        return "function" == typeof t[e] ? t[e].apply(t, i) : t[e]
    }, b = function () {
        for (var t, e, i, n = arguments[0], s = 2 <= arguments.length ? $.call(arguments, 1) : [], o = 0, r = s.length; o < r; o++)
            if (e = s[o])
                for (t in e) K.call(e, t) && (i = e[t], null != n[t] && "object" == typeof n[t] && null != i && "object" == typeof i ? b(n[t], i) : n[t] = i);
        return n
    }, f = function (t) {
        for (var e, i, n = e = 0, s = 0, o = t.length; s < o; s++) i = t[s], n += Math.abs(i), e++;
        return n / e
    }, w = function (t, e) {
        var i, n;
        if (null == t && (t = "options"), null == e && (e = !0), n = document.querySelector("[data-pace-" + t + "]")) {
            if (i = n.getAttribute("data-pace-" + t), !e) return i;
            try {
                return JSON.parse(i)
            } catch (t) {
                return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0
            }
        }
    }, Q.prototype.on = function (t, e, i, n) {
        var s;
        return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
            handler: e,
            ctx: i,
            once: n
        })
    }, Q.prototype.once = function (t, e, i) {
        return this.on(t, e, i, !0)
    }, Q.prototype.off = function (t, e) {
        var i, n, s;
        if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
            if (null == e) return delete this.bindings[t];
            for (i = 0, s = []; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? s.push(this.bindings[t].splice(i, 1)) : s.push(i++);
            return s
        }
    }, Q.prototype.trigger = function () {
        var t, e, i, n, s, o, r = arguments[0],
            a = 2 <= arguments.length ? $.call(arguments, 1) : [];
        if (null != (n = this.bindings) && n[r]) {
            for (i = 0, o = []; i < this.bindings[r].length;) e = (s = this.bindings[r][i]).handler, t = s.ctx, s = s.once, e.apply(null != t ? t : this, a), s ? o.push(this.bindings[r].splice(i, 1)) : o.push(i++);
            return o
        }
    }, U = Q, r = window.Pace || {}, window.Pace = r, b(r, U.prototype), E = r.options = b({}, _, window.paceOptions, w()), j = 0, q = (Y = ["ajax", "document", "eventLag", "elements"]).length; j < q; j++) !0 === E[N = Y[j]] && (E[N] = _[N]);

    function J() {
        return J.__super__.constructor.apply(this, arguments)
    }

    function Z() {
        this.progress = 0
    }

    function tt() {
        this.bindings = {}
    }

    function et() {
        var t, e = this;
        et.__super__.constructor.apply(this, arguments), t = function (t) {
            var i = t.open;
            return t.open = function (n, s, o) {
                return M(n) && e.trigger("request", {
                    type: n,
                    url: s,
                    request: t
                }), i.apply(t, arguments)
            }
        }, window.XMLHttpRequest = function (e) {
            return e = new z(e), t(e), e
        };
        try {
            y(window.XMLHttpRequest, z)
        } catch (t) { }
        if (null != R) {
            window.XDomainRequest = function () {
                var e = new R;
                return t(e), e
            };
            try {
                y(window.XDomainRequest, R)
            } catch (t) { }
        }
        if (null != W && E.ajax.trackWebSockets) {
            window.WebSocket = function (t, i) {
                var n = null != i ? new W(t, i) : new W(t);
                return M("socket") && e.trigger("request", {
                    type: "socket",
                    url: t,
                    protocols: i,
                    request: n
                }), n
            };
            try {
                y(window.WebSocket, W)
            } catch (t) { }
        }
    }

    function it() {
        this.complete = t(this.complete, this);
        var e = this;
        this.elements = [], x().on("request", (function () {
            return e.watch.apply(e, arguments)
        }))
    }

    function nt(e) {
        var i, s, o, r;
        for (null == e && (e = {}), this.complete = t(this.complete, this), this.elements = [], null == e.selectors && (e.selectors = []), s = 0, o = (r = e.selectors).length; s < o; s++) i = r[s], this.elements.push(new n(i, this.complete))
    }

    function st(t, e) {
        this.selector = t, this.completeCallback = e, this.progress = 0, this.check()
    }

    function ot() {
        var t, e, i = this;
        this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
            return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
        }
    }

    function rt(t) {
        this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = E.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = A(this.source, "progress"))
    }
    V(J, U = Error), o = J, Z.prototype.getElement = function () {
        var t;
        if (null == this.el) {
            if (!(t = document.querySelector(E.target))) throw new o;
            this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");
            var e = "" !== E.className ? " " + E.className : "";
            this.el.innerHTML = '<div class="pace-progress' + e + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
        }
        return this.el
    }, Z.prototype.finish = function () {
        var t = this.getElement();
        return t.className = t.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ")
    }, Z.prototype.update = function (t) {
        return this.progress = t, r.trigger("progress", t), this.render()
    }, Z.prototype.destroy = function () {
        try {
            this.getElement().parentNode.removeChild(this.getElement())
        } catch (t) {
            o = t
        }
        return this.el = void 0
    }, Z.prototype.render = function () {
        var t, e, i, n, s, o, a;
        if (null == document.querySelector(E.target)) return !1;
        for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (a = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) e = a[s], t.children[0].style[e] = n;
        return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), r.trigger("change", this.progress), this.lastRenderedProgress = this.progress
    }, Z.prototype.done = function () {
        return 100 <= this.progress
    }, i = Z, tt.prototype.trigger = function (t, e) {
        var i, n, s, o, r;
        if (null != this.bindings[t]) {
            for (r = [], n = 0, s = (o = this.bindings[t]).length; n < s; n++) i = o[n], r.push(i.call(this, e));
            return r
        }
    }, tt.prototype.on = function (t, e) {
        var i;
        return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
    }, s = tt, z = window.XMLHttpRequest, R = window.XDomainRequest, W = window.WebSocket, y = function (t, e) {
        var i, n = [];
        for (i in e.prototype) try {
            null == t[i] && "function" != typeof e[i] ? "function" == typeof Object.defineProperty ? n.push(Object.defineProperty(t, i, {
                get: function (t) {
                    return function () {
                        return e.prototype[t]
                    }
                }(i),
                configurable: !0,
                enumerable: !0
            })) : n.push(t[i] = e.prototype[i]) : n.push(void 0)
        } catch (t) { }
        return n
    }, C = [], r.ignore = function () {
        var t = arguments[0],
            e = 2 <= arguments.length ? $.call(arguments, 1) : [];
        return C.unshift("ignore"), e = t.apply(null, e), C.shift(), e
    }, r.track = function () {
        var t = arguments[0],
            e = 2 <= arguments.length ? $.call(arguments, 1) : [];
        return C.unshift("track"), e = t.apply(null, e), C.shift(), e
    }, M = function (t) {
        if (null == t && (t = "GET"), "track" === C[0]) return "force";
        if (!C.length && E.ajax) {
            if ("socket" === t && E.ajax.trackWebSockets) return !0;
            if (t = t.toUpperCase(), 0 <= G.call(E.ajax.trackMethods, t)) return !0
        }
        return !1
    }, V(et, s), a = et, F = null, O = function (t) {
        for (var e, i = E.ajax.ignoreURLs, n = 0, s = i.length; n < s; n++)
            if ("string" == typeof (e = i[n])) {
                if (-1 !== t.indexOf(e)) return !0
            } else if (e.test(t)) return !0;
        return !1
    }, (x = function () {
        return F = null == F ? new a : F
    })().on("request", (function (t) {
        var i, n = t.type,
            s = t.request,
            o = t.url;
        if (!O(o)) return r.running || !1 === E.restartOnRequestAfter && "force" !== M(n) ? void 0 : (i = arguments, "boolean" == typeof (o = E.restartOnRequestAfter || 0) && (o = 0), setTimeout((function () {
            var t, o, a, l, h = "socket" === n ? s.readyState < 1 : 0 < (h = s.readyState) && h < 4;
            if (h) {
                for (r.restart(), l = [], t = 0, o = (a = r.sources).length; t < o; t++) {
                    if ((N = a[t]) instanceof e) {
                        N.watch.apply(N, i);
                        break
                    }
                    l.push(void 0)
                }
                return l
            }
        }), o))
    })), it.prototype.watch = function (t) {
        var e = t.type,
            i = t.request;
        t = t.url;
        if (!O(t)) return i = new ("socket" === e ? c : u)(i, this.complete), this.elements.push(i)
    }, it.prototype.complete = function (t) {
        return this.elements = this.elements.filter((function (e) {
            return e !== t
        }))
    }, e = it, u = function (t, e) {
        var i, n, s, o, r = this;
        if (this.progress = 0, null != window.ProgressEvent)
            for (d(t, "progress", (function (t) {
                return t.lengthComputable ? r.progress = 100 * t.loaded / t.total : r.progress = r.progress + (100 - r.progress) / 2
            })), i = 0, n = (o = ["load", "abort", "timeout", "error"]).length; i < n; i++) d(t, o[i], (function () {
                return e(r), r.progress = 100
            }));
        else s = t.onreadystatechange, t.onreadystatechange = function () {
            var i;
            return 0 === (i = t.readyState) || 4 === i ? (e(r), r.progress = 100) : 3 === t.readyState && (r.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0
        }
    }, c = function (t, e) {
        for (var i, n = this, s = this.progress = 0, o = (i = ["error", "open"]).length; s < o; s++) d(t, i[s], (function () {
            return e(n), n.progress = 100
        }))
    }, nt.prototype.complete = function (t) {
        return this.elements = this.elements.filter((function (e) {
            return e !== t
        }))
    }, w = nt, st.prototype.check = function () {
        var t = this;
        return document.querySelector(this.selector) ? this.done() : setTimeout((function () {
            return t.check()
        }), E.elements.checkInterval)
    }, st.prototype.done = function () {
        return this.completeCallback(this), this.completeCallback = null, this.progress = 100
    }, n = st, ot.prototype.states = {
        loading: 0,
        interactive: 50,
        complete: 100
    }, U = ot, V = function () {
        var t, e, i, n, s, o = this;
        this.progress = 0, s = [], n = 0, i = D(), e = setInterval((function () {
            var r = D() - i - 50;
            return i = D(), s.push(r), s.length > E.eventLag.sampleCount && s.shift(), t = f(s), ++n >= E.eventLag.minSamples && t < E.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 3 / (t + 3) * 100
        }), 50)
    }, rt.prototype.tick = function (t, e) {
        return 100 <= (e = null == e ? A(this.source, "progress") : e) && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / E.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), e = 1 - Math.pow(this.progress / 100, E.easeFactor), this.progress += e * this.rate * t, this.progress = Math.min(this.lastProgress + E.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    }, h = rt, m = p = H = g = P = L = null, r.running = !1, k = function () {
        if (E.restartOnPushState) return r.restart()
    }, null != window.history.pushState && (B = window.history.pushState, window.history.pushState = function () {
        return k(), B.apply(window.history, arguments)
    }), null != window.history.replaceState && (X = window.history.replaceState, window.history.replaceState = function () {
        return k(), X.apply(window.history, arguments)
    }), l = {
        ajax: e,
        elements: w,
        document: U,
        eventLag: V
    }, (T = function () {
        var t, e, n, s, o, a, c, u;
        for (r.sources = L = [], e = 0, s = (a = ["ajax", "elements", "document", "eventLag"]).length; e < s; e++) !1 !== E[t = a[e]] && L.push(new l[t](E[t]));
        for (n = 0, o = (u = null != (c = E.extraSources) ? c : []).length; n < o; n++) N = u[n], L.push(new N(E));
        return r.bar = g = new i, P = [], H = new h
    })(), r.stop = function () {
        return r.trigger("stop"), r.running = !1, g.destroy(), m = !0, null != p && ("function" == typeof v && v(p), p = null), T()
    }, r.restart = function () {
        return r.trigger("restart"), r.stop(), r.start()
    }, r.go = function () {
        var t;
        return r.running = !0, g.render(), t = D(), m = !1, p = I((function (e, i) {
            g.progress;
            for (var n, s, o, a, l, c, u, d, p, f, v = c = 0, _ = !0, b = u = 0, y = L.length; u < y; b = ++u)
                for (N = L[b], l = null != P[b] ? P[b] : P[b] = [], o = d = 0, p = (s = null != (f = N.elements) ? f : [N]).length; d < p; o = ++d) a = s[o], _ &= (a = null != l[o] ? l[o] : l[o] = new h(a)).done, a.done || (v++, c += a.tick(e));
            return n = c / v, g.update(H.tick(e, n)), g.done() || _ || m ? (g.update(100), r.trigger("done"), setTimeout((function () {
                return g.finish(), r.running = !1, r.trigger("hide")
            }), Math.max(E.ghostTime, Math.max(E.minTime - (D() - t), 0)))) : i()
        }))
    }, r.start = function (t) {
        b(E, t), r.running = !0;
        try {
            g.render()
        } catch (t) {
            o = t
        }
        return document.querySelector(".pace") ? (r.trigger("start"), r.go()) : setTimeout(r.start, 50)
    }, "function" == typeof define && define.amd ? define((function () {
        return r
    })) : "object" == typeof exports ? module.exports = r : E.startOnPageLoad && r.start()
}).call(this),
    function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, (function (t, e) {
        "use strict";
        var i = [],
            n = Object.getPrototypeOf,
            s = i.slice,
            o = i.flat ? function (t) {
                return i.flat.call(t)
            } : function (t) {
                return i.concat.apply([], t)
            },
            r = i.push,
            a = i.indexOf,
            l = {},
            h = l.toString,
            c = l.hasOwnProperty,
            u = c.toString,
            d = u.call(Object),
            p = {},
            f = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
            },
            g = function (t) {
                return null != t && t === t.window
            },
            m = t.document,
            v = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function _(t, e, i) {
            var n, s, o = (i = i || m).createElement("script");
            if (o.text = t, e)
                for (n in v) (s = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, s);
            i.head.appendChild(o).parentNode.removeChild(o)
        }

        function b(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[h.call(t)] || "object" : typeof t
        }
        var y = "3.6.0",
            w = function (t, e) {
                return new w.fn.init(t, e)
            };

        function x(t) {
            var e = !!t && "length" in t && t.length,
                i = b(t);
            return !f(t) && !g(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        w.fn = w.prototype = {
            jquery: y,
            constructor: w,
            length: 0,
            toArray: function () {
                return s.call(this)
            },
            get: function (t) {
                return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = w.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return w.each(this, t)
            },
            map: function (t) {
                return this.pushStack(w.map(this, (function (e, i) {
                    return t.call(e, i, e)
                })))
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            even: function () {
                return this.pushStack(w.grep(this, (function (t, e) {
                    return (e + 1) % 2
                })))
            },
            odd: function () {
                return this.pushStack(w.grep(this, (function (t, e) {
                    return e % 2
                })))
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: r,
            sort: i.sort,
            splice: i.splice
        }, w.extend = w.fn.extend = function () {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || f(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = t[e], "__proto__" !== e && r !== n && (h && n && (w.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[e], o = s && !Array.isArray(i) ? [] : s || w.isPlainObject(i) ? i : {}, s = !1, r[e] = w.extend(h, o, n)) : void 0 !== n && (r[e] = n));
            return r
        }, w.extend({
            expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () { },
            isPlainObject: function (t) {
                var e, i;
                return !(!t || "[object Object]" !== h.call(t) || (e = n(t)) && ("function" != typeof (i = c.call(e, "constructor") && e.constructor) || u.call(i) !== d))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function (t, e, i) {
                _(t, {
                    nonce: e && e.nonce
                }, i)
            },
            each: function (t, e) {
                var i, n = 0;
                if (x(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (x(Object(t)) ? w.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)), i
            },
            inArray: function (t, e, i) {
                return null == e ? -1 : a.call(e, t, i)
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function (t, e, i) {
                for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
                return n
            },
            map: function (t, e, i) {
                var n, s, r = 0,
                    a = [];
                if (x(t))
                    for (n = t.length; r < n; r++) null != (s = e(t[r], r, i)) && a.push(s);
                else
                    for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
                return o(a)
            },
            guid: 1,
            support: p
        }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase()
        }));
        var k = function (t) {
            var e, i, n, s, o, r, a, l, h, c, u, d, p, f, g, m, v, _, b, y = "sizzle" + 1 * new Date,
                w = t.document,
                x = 0,
                k = 0,
                C = lt(),
                T = lt(),
                D = lt(),
                E = lt(),
                S = function (t, e) {
                    return t === e && (u = !0), 0
                },
                A = {}.hasOwnProperty,
                I = [],
                P = I.pop,
                O = I.push,
                M = I.push,
                N = I.slice,
                L = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                W = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                z = "\\[" + W + "*(" + R + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + W + "*\\]",
                j = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                F = new RegExp(W + "+", "g"),
                q = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                B = new RegExp("^" + W + "*," + W + "*"),
                Y = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                X = new RegExp(W + "|>"),
                U = new RegExp(j),
                $ = new RegExp("^" + R + "$"),
                K = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + j),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])", "g"),
                it = function (t, e) {
                    var i = "0x" + t.slice(1) - 65536;
                    return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                },
                nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                st = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                ot = function () {
                    d()
                },
                rt = yt((function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(I = N.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: I.length ? function (t, e) {
                        O.apply(t, N.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function at(t, e, n, s) {
                var o, a, h, c, u, f, v, _ = e && e.ownerDocument,
                    w = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
                if (!s && (d(e), e = e || p, g)) {
                    if (11 !== w && (u = Z.exec(t)))
                        if (o = u[1]) {
                            if (9 === w) {
                                if (!(h = e.getElementById(o))) return n;
                                if (h.id === o) return n.push(h), n
                            } else if (_ && (h = _.getElementById(o)) && b(e, h) && h.id === o) return n.push(h), n
                        } else {
                            if (u[2]) return M.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return M.apply(n, e.getElementsByClassName(o)), n
                        } if (i.qsa && !E[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                            if (v = t, _ = e, 1 === w && (X.test(t) || Y.test(t))) {
                                for ((_ = tt.test(t) && vt(e.parentNode) || e) === e && i.scope || ((c = e.getAttribute("id")) ? c = c.replace(nt, st) : e.setAttribute("id", c = y)), a = (f = r(t)).length; a--;) f[a] = (c ? "#" + c : ":scope") + " " + bt(f[a]);
                                v = f.join(",")
                            }
                            try {
                                return M.apply(n, _.querySelectorAll(v)), n
                            } catch (e) {
                                E(t, !0)
                            } finally {
                                c === y && e.removeAttribute("id")
                            }
                        }
                }
                return l(t.replace(q, "$1"), e, n, s)
            }

            function lt() {
                var t = [];
                return function e(i, s) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
                }
            }

            function ht(t) {
                return t[y] = !0, t
            }

            function ct(t) {
                var e = p.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ut(t, e) {
                for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
            }

            function dt(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function pt(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ft(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function gt(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function mt(t) {
                return ht((function (e) {
                    return e = +e, ht((function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    }))
                }))
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = at.support = {}, o = at.isXML = function (t) {
                var e = t && t.namespaceURI,
                    i = t && (t.ownerDocument || t).documentElement;
                return !V.test(e || i && i.nodeName || "HTML")
            }, d = at.setDocument = function (t) {
                var e, s, r = t ? t.ownerDocument || t : w;
                return r != p && 9 === r.nodeType && r.documentElement && (f = (p = r).documentElement, g = !o(p), w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ot, !1) : s.attachEvent && s.attachEvent("onunload", ot)), i.scope = ct((function (t) {
                    return f.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                })), i.attributes = ct((function (t) {
                    return t.className = "i", !t.getAttribute("className")
                })), i.getElementsByTagName = ct((function (t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                })), i.getElementsByClassName = J.test(p.getElementsByClassName), i.getById = ct((function (t) {
                    return f.appendChild(t).id = y, !p.getElementsByName || !p.getElementsByName(y).length
                })), i.getById ? (n.filter.ID = function (t) {
                    var e = t.replace(et, it);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function (t) {
                    var e = t.replace(et, it);
                    return function (t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                }, v = [], m = [], (i.qsa = J.test(p.querySelectorAll)) && (ct((function (t) {
                    var e;
                    f.appendChild(t).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + y + "-]").length || m.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), ct((function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (i.matchesSelector = J.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ct((function (t) {
                    i.disconnectedMatch = _.call(t, "*"), _.call(t, "[s!='']:x"), v.push("!=", j)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(f.compareDocumentPosition), b = e || J.test(f.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, S = e ? function (t, e) {
                    if (t === e) return u = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == p || t.ownerDocument == w && b(w, t) ? -1 : e == p || e.ownerDocument == w && b(w, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return u = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        r = [t],
                        a = [e];
                    if (!s || !o) return t == p ? -1 : e == p ? 1 : s ? -1 : o ? 1 : c ? L(c, t) - L(c, e) : 0;
                    if (s === o) return dt(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? dt(r[n], a[n]) : r[n] == w ? -1 : a[n] == w ? 1 : 0
                }), p
            }, at.matches = function (t, e) {
                return at(t, null, null, e)
            }, at.matchesSelector = function (t, e) {
                if (d(t), i.matchesSelector && g && !E[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                    var n = _.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {
                    E(e, !0)
                }
                return 0 < at(e, p, null, [t]).length
            }, at.contains = function (t, e) {
                return (t.ownerDocument || t) != p && d(t), b(t, e)
            }, at.attr = function (t, e) {
                (t.ownerDocument || t) != p && d(t);
                var s = n.attrHandle[e.toLowerCase()],
                    o = s && A.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
                return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, at.escape = function (t) {
                return (t + "").replace(nt, st)
            }, at.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function (t) {
                var e, n = [],
                    s = 0,
                    o = 0;
                if (u = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(S), u) {
                    for (; e = t[o++];) e === t[o] && (s = n.push(o));
                    for (; s--;) t.splice(n[s], 1)
                }
                return c = null, t
            }, s = at.getText = function (t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += s(e);
                return i
            }, (n = at.selectors = {
                cacheLength: 50,
                createPseudo: ht,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, it).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = C[t + " "];
                        return e || (e = new RegExp("(^|" + W + ")" + t + "(" + W + "|$)")) && C(t, (function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (t, e, i) {
                        return function (n) {
                            var s = at.attr(n, t);
                            return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && -1 < s.indexOf(i) : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? -1 < (" " + s.replace(F, " ") + " ").indexOf(i) : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var h, c, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                _ = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && _) {
                                    for (b = (p = (h = (c = (u = (d = m)[y] || (d[y] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]) && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            c[t] = [x, p, b];
                                            break
                                        }
                                } else if (_ && (b = p = (h = (c = (u = (d = e)[y] || (d[y] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]), !1 === b)
                                    for (;
                                        (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && ((c = (u = d[y] || (d[y] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, b]), d !== e)););
                                return (b -= s) === n || b % n == 0 && 0 <= b / n
                            }
                        }
                    },
                    PSEUDO: function (t, e) {
                        var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return s[y] ? s(e) : 1 < s.length ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ht((function (t, i) {
                            for (var n, o = s(t, e), r = o.length; r--;) t[n = L(t, o[r])] = !(i[n] = o[r])
                        })) : function (t) {
                            return s(t, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: ht((function (t) {
                        var e = [],
                            i = [],
                            n = a(t.replace(q, "$1"));
                        return n[y] ? ht((function (t, e, i, s) {
                            for (var o, r = n(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        })) : function (t, s, o) {
                            return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                        }
                    })),
                    has: ht((function (t) {
                        return function (e) {
                            return 0 < at(t, e).length
                        }
                    })),
                    contains: ht((function (t) {
                        return t = t.replace(et, it),
                            function (e) {
                                return -1 < (e.textContent || s(e)).indexOf(t)
                            }
                    })),
                    lang: ht((function (t) {
                        return $.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                            function (e) {
                                var i;
                                do {
                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    })),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === f
                    },
                    focus: function (t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: gt(!1),
                    disabled: gt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function (t) {
                        return Q.test(t.nodeName)
                    },
                    input: function (t) {
                        return G.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: mt((function () {
                        return [0]
                    })),
                    last: mt((function (t, e) {
                        return [e - 1]
                    })),
                    eq: mt((function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    })),
                    even: mt((function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    })),
                    odd: mt((function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    })),
                    lt: mt((function (t, e, i) {
                        for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                        return t
                    })),
                    gt: mt((function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[e] = pt(e);
            for (e in {
                submit: !0,
                reset: !0
            }) n.pseudos[e] = ft(e);

            function _t() { }

            function bt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function yt(t, e, i) {
                var n = e.dir,
                    s = e.next,
                    o = s || n,
                    r = i && "parentNode" === o,
                    a = k++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s);
                    return !1
                } : function (e, i, l) {
                    var h, c, u, d = [x, a];
                    if (l) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r)
                                if (c = (u = e[y] || (e[y] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((h = c[o]) && h[0] === x && h[1] === a) return d[2] = h[2];
                                    if ((c[o] = d)[2] = t(e, i, l)) return !0
                                } return !1
                }
            }

            function wt(t) {
                return 1 < t.length ? function (e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function xt(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
                return r
            }

            function kt(t, e, i, n, s, o) {
                return n && !n[y] && (n = kt(n)), s && !s[y] && (s = kt(s, o)), ht((function (o, r, a, l) {
                    var h, c, u, d = [],
                        p = [],
                        f = r.length,
                        g = o || function (t, e, i) {
                            for (var n = 0, s = e.length; n < s; n++) at(t, e[n], i);
                            return i
                        }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !o && e ? g : xt(g, d, t, a, l),
                        v = i ? s || (o ? t : f || n) ? [] : r : m;
                    if (i && i(m, v, a, l), n)
                        for (h = xt(v, p), n(h, [], a, l), c = h.length; c--;)(u = h[c]) && (v[p[c]] = !(m[p[c]] = u));
                    if (o) {
                        if (s || t) {
                            if (s) {
                                for (h = [], c = v.length; c--;)(u = v[c]) && h.push(m[c] = u);
                                s(null, v = [], h, l)
                            }
                            for (c = v.length; c--;)(u = v[c]) && -1 < (h = s ? L(o, u) : d[c]) && (o[h] = !(r[h] = u))
                        }
                    } else v = xt(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : M.apply(r, v)
                }))
            }

            function Ct(t) {
                for (var e, i, s, o = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, c = yt((function (t) {
                    return t === e
                }), a, !0), u = yt((function (t) {
                    return -1 < L(e, t)
                }), a, !0), d = [function (t, i, n) {
                    var s = !r && (n || i !== h) || ((e = i).nodeType ? c(t, i, n) : u(t, i, n));
                    return e = null, s
                }]; l < o; l++)
                    if (i = n.relative[t[l].type]) d = [yt(wt(d), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[y]) {
                            for (s = ++l; s < o && !n.relative[t[s].type]; s++);
                            return kt(1 < l && wt(d), 1 < l && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(q, "$1"), i, l < s && Ct(t.slice(l, s)), s < o && Ct(t = t.slice(s)), s < o && bt(t))
                        }
                        d.push(i)
                    } return wt(d)
            }
            return _t.prototype = n.filters = n.pseudos, n.setFilters = new _t, r = at.tokenize = function (t, e) {
                var i, s, o, r, a, l, h, c = T[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], h = n.preFilter; a;) {
                    for (r in i && !(s = B.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = Y.exec(a)) && (i = s.shift(), o.push({
                        value: i,
                        type: s[0].replace(q, " ")
                    }), a = a.slice(i.length)), n.filter) !(s = K[r].exec(a)) || h[r] && !(s = h[r](s)) || (i = s.shift(), o.push({
                        value: i,
                        type: r,
                        matches: s
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? at.error(t) : T(t, l).slice(0)
            }, a = at.compile = function (t, e) {
                var i, s, o, a, l, c, u = [],
                    f = [],
                    m = D[t + " "];
                if (!m) {
                    for (e || (e = r(t)), i = e.length; i--;)(m = Ct(e[i]))[y] ? u.push(m) : f.push(m);
                    (m = D(t, (s = f, a = 0 < (o = u).length, l = 0 < s.length, c = function (t, e, i, r, c) {
                        var u, f, m, v = 0,
                            _ = "0",
                            b = t && [],
                            y = [],
                            w = h,
                            k = t || l && n.find.TAG("*", c),
                            C = x += null == w ? 1 : Math.random() || .1,
                            T = k.length;
                        for (c && (h = e == p || e || c); _ !== T && null != (u = k[_]); _++) {
                            if (l && u) {
                                for (f = 0, e || u.ownerDocument == p || (d(u), i = !g); m = s[f++];)
                                    if (m(u, e || p, i)) {
                                        r.push(u);
                                        break
                                    } c && (x = C)
                            }
                            a && ((u = !m && u) && v--, t && b.push(u))
                        }
                        if (v += _, a && _ !== v) {
                            for (f = 0; m = o[f++];) m(b, y, e, i);
                            if (t) {
                                if (0 < v)
                                    for (; _--;) b[_] || y[_] || (y[_] = P.call(r));
                                y = xt(y)
                            }
                            M.apply(r, y), c && !t && 0 < y.length && 1 < v + o.length && at.uniqueSort(r)
                        }
                        return c && (x = C, h = w), b
                    }, a ? ht(c) : c))).selector = t
                }
                return m
            }, l = at.select = function (t, e, i, s) {
                var o, l, h, c, u, d = "function" == typeof t && t,
                    p = !s && r(t = d.selector || t);
                if (i = i || [], 1 === p.length) {
                    if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (h = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                        if (!(e = (n.find.ID(h.matches[0].replace(et, it), e) || [])[0])) return i;
                        d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (o = K.needsContext.test(t) ? 0 : l.length; o-- && (h = l[o], !n.relative[c = h.type]);)
                        if ((u = n.find[c]) && (s = u(h.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = s.length && bt(l))) return M.apply(i, s), i;
                            break
                        }
                }
                return (d || a(t, p))(s, e, !g, i, !e || tt.test(t) && vt(e.parentNode) || e), i
            }, i.sortStable = y.split("").sort(S).join("") === y, i.detectDuplicates = !!u, d(), i.sortDetached = ct((function (t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
            })), ct((function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            })) || ut("type|href|height|width", (function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            })), i.attributes && ct((function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            })) || ut("value", (function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            })), ct((function (t) {
                return null == t.getAttribute("disabled")
            })) || ut(H, (function (t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            })), at
        }(t);
        w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
        var C = function (t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && w(t).is(i)) break;
                    n.push(t)
                } return n
        },
            T = function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            D = w.expr.match.needsContext;

        function E(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(t, e, i) {
            return f(e) ? w.grep(t, (function (t, n) {
                return !!e.call(t, n, t) !== i
            })) : e.nodeType ? w.grep(t, (function (t) {
                return t === e !== i
            })) : "string" != typeof e ? w.grep(t, (function (t) {
                return -1 < a.call(e, t) !== i
            })) : w.filter(e, t, i)
        }
        w.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? w.find.matchesSelector(n, t) ? [n] : [] : w.find.matches(t, w.grep(e, (function (t) {
                return 1 === t.nodeType
            })))
        }, w.fn.extend({
            find: function (t) {
                var e, i, n = this.length,
                    s = this;
                if ("string" != typeof t) return this.pushStack(w(t).filter((function () {
                    for (e = 0; e < n; e++)
                        if (w.contains(s[e], this)) return !0
                })));
                for (i = this.pushStack([]), e = 0; e < n; e++) w.find(t, s[e], i);
                return 1 < n ? w.uniqueSort(i) : i
            },
            filter: function (t) {
                return this.pushStack(A(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(A(this, t || [], !0))
            },
            is: function (t) {
                return !!A(this, "string" == typeof t && D.test(t) ? w(t) : t || [], !1).length
            }
        });
        var I, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (w.fn.init = function (t, e, i) {
            var n, s;
            if (!t) return this;
            if (i = i || I, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : P.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), S.test(n[1]) && w.isPlainObject(e))
                        for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (s = m.getElementById(n[2])) && (this[0] = s, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== i.ready ? i.ready(t) : t(w) : w.makeArray(t, this)
        }).prototype = w.fn, I = w(m);
        var O = /^(?:parents|prev(?:Until|All))/,
            M = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        w.fn.extend({
            has: function (t) {
                var e = w(t, this),
                    i = e.length;
                return this.filter((function () {
                    for (var t = 0; t < i; t++)
                        if (w.contains(this, e[t])) return !0
                }))
            },
            closest: function (t, e) {
                var i, n = 0,
                    s = this.length,
                    o = [],
                    r = "string" != typeof t && w(t);
                if (!D.test(t))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && w.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), w.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return C(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return C(t, "parentNode", i)
            },
            next: function (t) {
                return N(t, "nextSibling")
            },
            prev: function (t) {
                return N(t, "previousSibling")
            },
            nextAll: function (t) {
                return C(t, "nextSibling")
            },
            prevAll: function (t) {
                return C(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return C(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return C(t, "previousSibling", i)
            },
            siblings: function (t) {
                return T((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return T(t.firstChild)
            },
            contents: function (t) {
                return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (E(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
            }
        }, (function (t, e) {
            w.fn[t] = function (i, n) {
                var s = w.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = w.filter(n, s)), 1 < this.length && (M[t] || w.uniqueSort(s), O.test(t) && s.reverse()), this.pushStack(s)
            }
        }));
        var L = /[^\x20\t\r\n\f]+/g;

        function H(t) {
            return t
        }

        function W(t) {
            throw t
        }

        function R(t, e, i, n) {
            var s;
            try {
                t && f(s = t.promise) ? s.call(t).done(e).fail(i) : t && f(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        w.Callbacks = function (t) {
            var e, i;
            t = "string" == typeof t ? (e = t, i = {}, w.each(e.match(L) || [], (function (t, e) {
                i[e] = !0
            })), i) : w.extend({}, t);
            var n, s, o, r, a = [],
                l = [],
                h = -1,
                c = function () {
                    for (r = r || t.once, o = n = !0; l.length; h = -1)
                        for (s = l.shift(); ++h < a.length;) !1 === a[h].apply(s[0], s[1]) && t.stopOnFalse && (h = a.length, s = !1);
                    t.memory || (s = !1), n = !1, r && (a = s ? [] : "")
                },
                u = {
                    add: function () {
                        return a && (s && !n && (h = a.length - 1, l.push(s)), function e(i) {
                            w.each(i, (function (i, n) {
                                f(n) ? t.unique && u.has(n) || a.push(n) : n && n.length && "string" !== b(n) && e(n)
                            }))
                        }(arguments), s && !n && c()), this
                    },
                    remove: function () {
                        return w.each(arguments, (function (t, e) {
                            for (var i; - 1 < (i = w.inArray(e, a, i));) a.splice(i, 1), i <= h && h--
                        })), this
                    },
                    has: function (t) {
                        return t ? -1 < w.inArray(t, a) : 0 < a.length
                    },
                    empty: function () {
                        return a && (a = []), this
                    },
                    disable: function () {
                        return r = l = [], a = s = "", this
                    },
                    disabled: function () {
                        return !a
                    },
                    lock: function () {
                        return r = l = [], s || n || (a = s = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, e) {
                        return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || c()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!o
                    }
                };
            return u
        }, w.extend({
            Deferred: function (e) {
                var i = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                    n = "pending",
                    s = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return s.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return w.Deferred((function (e) {
                                w.each(i, (function (i, n) {
                                    var s = f(t[n[4]]) && t[n[4]];
                                    o[n[1]]((function () {
                                        var t = s && s.apply(this, arguments);
                                        t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        then: function (e, n, s) {
                            var o = 0;

                            function r(e, i, n, s) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        h = function () {
                                            var t, h;
                                            if (!(e < o)) {
                                                if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                h = t && ("object" == typeof t || "function" == typeof t) && t.then, f(h) ? s ? h.call(t, r(o, i, H, s), r(o, i, W, s)) : (o++, h.call(t, r(o, i, H, s), r(o, i, W, s), r(o, i, H, i.notifyWith))) : (n !== H && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                            }
                                        },
                                        c = s ? h : function () {
                                            try {
                                                h()
                                            } catch (t) {
                                                w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), o <= e + 1 && (n !== W && (a = void 0, l = [t]), i.rejectWith(a, l))
                                            }
                                        };
                                    e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                }
                            }
                            return w.Deferred((function (t) {
                                i[0][3].add(r(0, t, f(s) ? s : H, t.notifyWith)), i[1][3].add(r(0, t, f(e) ? e : H)), i[2][3].add(r(0, t, f(n) ? n : W))
                            })).promise()
                        },
                        promise: function (t) {
                            return null != t ? w.extend(t, s) : s
                        }
                    },
                    o = {};
                return w.each(i, (function (t, e) {
                    var r = e[2],
                        a = e[5];
                    s[e[1]] = r.add, a && r.add((function () {
                        n = a
                    }), i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), r.add(e[3].fire), o[e[0]] = function () {
                        return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[e[0] + "With"] = r.fireWith
                })), s.promise(o), e && e.call(o, o), o
            },
            when: function (t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    o = s.call(arguments),
                    r = w.Deferred(),
                    a = function (t) {
                        return function (i) {
                            n[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : i, --e || r.resolveWith(n, o)
                        }
                    };
                if (e <= 1 && (R(t, r.done(a(i)).resolve, r.reject, !e), "pending" === r.state() || f(o[i] && o[i].then))) return r.then();
                for (; i--;) R(o[i], a(i), r.reject);
                return r.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function (e, i) {
            t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
        }, w.readyException = function (e) {
            t.setTimeout((function () {
                throw e
            }))
        };
        var j = w.Deferred();

        function F() {
            m.removeEventListener("DOMContentLoaded", F), t.removeEventListener("load", F), w.ready()
        }
        w.fn.ready = function (t) {
            return j.then(t).catch((function (t) {
                w.readyException(t)
            })), this
        }, w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || j.resolveWith(m, [w])
            }
        }), w.ready.then = j.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", F), t.addEventListener("load", F));
        var q = function (t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === b(i))
                for (a in s = !0, i) q(t, e, a, i[a], !0, o, r);
            else if (void 0 !== n && (s = !0, f(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                return h.call(w(t), i)
            })), e))
                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        },
            B = /^-ms-/,
            Y = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function U(t) {
            return t.replace(B, "ms-").replace(Y, X)
        }
        var $ = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function K() {
            this.expando = w.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e) s[U(e)] = i;
                else
                    for (n in e) s[U(n)] = e[n];
                return s
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
            },
            access: function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function (t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(L) || []).length;
                        for (; i--;) delete n[e[i]]
                    } (void 0 === e || w.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !w.isEmptyObject(e)
            }
        };
        var V = new K,
            G = new K,
            Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            J = /[A-Z]/g;

        function Z(t, e, i) {
            var n, s;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Q.test(s) ? JSON.parse(s) : s)
                    } catch (t) { }
                    G.set(t, e, i)
                } else i = void 0;
            return i
        }
        w.extend({
            hasData: function (t) {
                return G.hasData(t) || V.hasData(t)
            },
            data: function (t, e, i) {
                return G.access(t, e, i)
            },
            removeData: function (t, e) {
                G.remove(t, e)
            },
            _data: function (t, e, i) {
                return V.access(t, e, i)
            },
            _removeData: function (t, e) {
                V.remove(t, e)
            }
        }), w.fn.extend({
            data: function (t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = G.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = U(n.slice(5)), Z(o, n, s[n]));
                        V.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each((function () {
                    G.set(this, t)
                })) : q(this, (function (e) {
                    var i;
                    if (o && void 0 === e) return void 0 !== (i = G.get(o, t)) || void 0 !== (i = Z(o, t)) ? i : void 0;
                    this.each((function () {
                        G.set(this, t, e)
                    }))
                }), null, e, 1 < arguments.length, null, !0)
            },
            removeData: function (t) {
                return this.each((function () {
                    G.remove(this, t)
                }))
            }
        }), w.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = V.get(t, e), i && (!n || Array.isArray(i) ? n = V.access(t, e, w.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = w.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = w._queueHooks(t, e);
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, (function () {
                    w.dequeue(t, e)
                }), o)), !n && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return V.get(t, i) || V.access(t, i, {
                    empty: w.Callbacks("once memory").add((function () {
                        V.remove(t, [e + "queue", i])
                    }))
                })
            }
        }), w.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? w.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                    var i = w.queue(this, t, e);
                    w._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && w.dequeue(this, t)
                }))
            },
            dequeue: function (t) {
                return this.each((function () {
                    w.dequeue(this, t)
                }))
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    s = w.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = V.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
            }
        });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            nt = m.documentElement,
            st = function (t) {
                return w.contains(t.ownerDocument, t)
            },
            ot = {
                composed: !0
            };
        nt.getRootNode && (st = function (t) {
            return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
        });
        var rt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === w.css(t, "display")
        };

        function at(t, e, i, n) {
            var s, o, r = 20,
                a = n ? function () {
                    return n.cur()
                } : function () {
                    return w.css(t, e, "")
                },
                l = a(),
                h = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (w.cssNumber[e] || "px" !== h && +l) && et.exec(w.css(t, e));
            if (c && c[3] !== h) {
                for (l /= 2, h = h || c[3], c = +l || 1; r--;) w.style(t, e, c + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), c /= o;
                c *= 2, w.style(t, e, c + h), i = i || []
            }
            return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
        }
        var lt = {};

        function ht(t, e) {
            for (var i, n, s, o, r, a, l, h = [], c = 0, u = t.length; c < u; c++)(n = t[c]).style && (i = n.style.display, e ? ("none" === i && (h[c] = V.get(n, "display") || null, h[c] || (n.style.display = "")), "" === n.style.display && rt(n) && (h[c] = (l = r = o = void 0, r = (s = n).ownerDocument, a = s.nodeName, (l = lt[a]) || (o = r.body.appendChild(r.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), lt[a] = l)))) : "none" !== i && (h[c] = "none", V.set(n, "display", i)));
            for (c = 0; c < u; c++) null != h[c] && (t[c].style.display = h[c]);
            return t
        }
        w.fn.extend({
            show: function () {
                return ht(this, !0)
            },
            hide: function () {
                return ht(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                    rt(this) ? w(this).show() : w(this).hide()
                }))
            }
        });
        var ct, ut, dt = /^(?:checkbox|radio)$/i,
            pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ft = /^$|^module$|\/(?:java|ecma)script/i;
        ct = m.createDocumentFragment().appendChild(m.createElement("div")), (ut = m.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), ct.appendChild(ut), p.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue, ct.innerHTML = "<option></option>", p.option = !!ct.lastChild;
        var gt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function mt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? w.merge([t], i) : i
        }

        function vt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) V.set(t[i], "globalEval", !e || V.get(e[i], "globalEval"))
        }
        gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, p.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var _t = /<|&#?\w+;/;

        function bt(t, e, i, n, s) {
            for (var o, r, a, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                    else if (_t.test(o)) {
                        for (r = r || u.appendChild(e.createElement("div")), a = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, r.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) r = r.lastChild;
                        w.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
                    } else d.push(e.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if (n && -1 < w.inArray(o, n)) s && s.push(o);
                else if (h = st(o), r = mt(u.appendChild(o), "script"), h && vt(r), i)
                    for (c = 0; o = r[c++];) ft.test(o.type || "") && i.push(o);
            return u
        }
        var yt = /^([^.]*)(?:\.(.+)|)/;

        function wt() {
            return !0
        }

        function xt() {
            return !1
        }

        function kt(t, e) {
            return t === function () {
                try {
                    return m.activeElement
                } catch (t) { }
            }() == ("focus" === e)
        }

        function Ct(t, e, i, n, s, o) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) Ct(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = xt;
            else if (!s) return t;
            return 1 === o && (r = s, (s = function (t) {
                return w().off(t), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = w.guid++)), t.each((function () {
                w.event.add(this, e, s, n, i)
            }))
        }

        function Tt(t, e, i) {
            i ? (V.set(t, e, !1), w.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                    var n, o, r = V.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (r.length) (w.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (r = s.call(arguments), V.set(this, e, r), n = i(this, e), this[e](), r !== (o = V.get(this, e)) || n ? V.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                    } else r.length && (V.set(this, e, {
                        value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === V.get(t, e) && w.event.add(t, e, wt)
        }
        w.event = {
            global: {},
            add: function (t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = V.get(t);
                if ($(t))
                    for (i.handler && (i = (o = i).handler, s = o.selector), s && w.find.matchesSelector(nt, s), i.guid || (i.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function (e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), h = (e = (e || "").match(L) || [""]).length; h--;) p = g = (a = yt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = w.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = w.event.special[p] || {}, c = w.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && w.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0)
            },
            remove: function (t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = V.hasData(t) && V.get(t);
                if (m && (l = m.events)) {
                    for (h = (e = (e || "").match(L) || [""]).length; h--;)
                        if (p = g = (a = yt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = w.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !s && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                            r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || w.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) w.event.remove(t, p + e[h], i, n, !0);
                    w.isEmptyObject(l) && V.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, i, n, s, o, r, a = new Array(arguments.length),
                    l = w.event.fix(t),
                    h = (V.get(this, "events") || Object.create(null))[l.type] || [],
                    c = w.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (r = w.event.handlers.call(this, l, h), e = 0;
                        (s = r[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (n = ((w.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function (t, e) {
                var i, n, s, o, r, a = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? -1 < w(s, this).index(h) : w.find(s, this, null, [h]).length), r[s] && o.push(n);
                            o.length && a.push({
                                elem: h,
                                handlers: o
                            })
                        } return h = this, l < e.length && a.push({
                            elem: h,
                            handlers: e.slice(l)
                        }), a
            },
            addProp: function (t, e) {
                Object.defineProperty(w.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: f(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function (t) {
                return t[w.expando] ? t : new w.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (t) {
                        var e = this || t;
                        return dt.test(e.type) && e.click && E(e, "input") && Tt(e, "click", wt), !1
                    },
                    trigger: function (t) {
                        var e = this || t;
                        return dt.test(e.type) && e.click && E(e, "input") && Tt(e, "click"), !0
                    },
                    _default: function (t) {
                        var e = t.target;
                        return dt.test(e.type) && e.click && E(e, "input") && V.get(e, "click") || E(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, w.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, w.Event = function (t, e) {
            if (!(this instanceof w.Event)) return new w.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
        }, w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: xt,
            isPropagationStopped: xt,
            isImmediatePropagationStopped: xt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, w.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, w.event.addProp), w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (t, e) {
            w.event.special[t] = {
                setup: function () {
                    return Tt(this, t, kt), !1
                },
                trigger: function () {
                    return Tt(this, t), !0
                },
                _default: function () {
                    return !0
                },
                delegateType: e
            }
        })), w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (t, e) {
            w.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = t.relatedTarget,
                        s = t.handleObj;
                    return n && (n === this || w.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        })), w.fn.extend({
            on: function (t, e, i, n) {
                return Ct(this, t, e, i, n)
            },
            one: function (t, e, i, n) {
                return Ct(this, t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, w(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = xt), this.each((function () {
                    w.event.remove(this, t, i, e)
                }))
            }
        });
        var Dt = /<script|<style|<link/i,
            Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
            St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function At(t, e) {
            return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
        }

        function It(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Pt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Ot(t, e) {
            var i, n, s, o, r, a;
            if (1 === e.nodeType) {
                if (V.hasData(t) && (a = V.get(t).events))
                    for (s in V.remove(e, "handle events"), a)
                        for (i = 0, n = a[s].length; i < n; i++) w.event.add(e, s, a[s][i]);
                G.hasData(t) && (o = G.access(t), r = w.extend({}, o), G.set(e, r))
            }
        }

        function Mt(t, e, i, n) {
            e = o(e);
            var s, r, a, l, h, c, u = 0,
                d = t.length,
                g = d - 1,
                m = e[0],
                v = f(m);
            if (v || 1 < d && "string" == typeof m && !p.checkClone && Et.test(m)) return t.each((function (s) {
                var o = t.eq(s);
                v && (e[0] = m.call(this, s, o.html())), Mt(o, e, i, n)
            }));
            if (d && (r = (s = bt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
                for (l = (a = w.map(mt(s, "script"), It)).length; u < d; u++) h = s, u !== g && (h = w.clone(h, !0, !0), l && w.merge(a, mt(h, "script"))), i.call(t[u], h, u);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, w.map(a, Pt), u = 0; u < l; u++) h = a[u], ft.test(h.type || "") && !V.access(h, "globalEval") && w.contains(c, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? w._evalUrl && !h.noModule && w._evalUrl(h.src, {
                        nonce: h.nonce || h.getAttribute("nonce")
                    }, c) : _(h.textContent.replace(St, ""), h, c))
            }
            return t
        }

        function Nt(t, e, i) {
            for (var n, s = e ? w.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || w.cleanData(mt(n)), n.parentNode && (i && st(n) && vt(mt(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        w.extend({
            htmlPrefilter: function (t) {
                return t
            },
            clone: function (t, e, i) {
                var n, s, o, r, a, l, h, c = t.cloneNode(!0),
                    u = st(t);
                if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                    for (r = mt(c), n = 0, s = (o = mt(t)).length; n < s; n++) a = o[n], "input" === (h = (l = r[n]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
                if (e)
                    if (i)
                        for (o = o || mt(t), r = r || mt(c), n = 0, s = o.length; n < s; n++) Ot(o[n], r[n]);
                    else Ot(t, c);
                return 0 < (r = mt(c, "script")).length && vt(r, !u && mt(t, "script")), c
            },
            cleanData: function (t) {
                for (var e, i, n, s = w.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if ($(i)) {
                        if (e = i[V.expando]) {
                            if (e.events)
                                for (n in e.events) s[n] ? w.event.remove(i, n) : w.removeEvent(i, n, e.handle);
                            i[V.expando] = void 0
                        }
                        i[G.expando] && (i[G.expando] = void 0)
                    }
            }
        }), w.fn.extend({
            detach: function (t) {
                return Nt(this, t, !0)
            },
            remove: function (t) {
                return Nt(this, t)
            },
            text: function (t) {
                return q(this, (function (t) {
                    return void 0 === t ? w.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            },
            append: function () {
                return Mt(this, arguments, (function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
                }))
            },
            prepend: function () {
                return Mt(this, arguments, (function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = At(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function () {
                return Mt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function () {
                return Mt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function () {
                    return w.clone(this, t, e)
                }))
            },
            html: function (t) {
                return q(this, (function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Dt.test(t) && !gt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = w.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) { }
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return Mt(this, arguments, (function (e) {
                    var i = this.parentNode;
                    w.inArray(this, t) < 0 && (w.cleanData(mt(this)), i && i.replaceChild(e, this))
                }), t)
            }
        }), w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (t, e) {
            w.fn[t] = function (t) {
                for (var i, n = [], s = w(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), w(s[a])[e](i), r.apply(n, i.get());
                return this.pushStack(n)
            }
        }));
        var Lt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
            Ht = function (e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Wt = function (t, e, i) {
                var n, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                for (s in n = i.call(t), e) t.style[s] = o[s];
                return n
            },
            Rt = new RegExp(it.join("|"), "i");

        function zt(t, e, i) {
            var n, s, o, r, a = t.style;
            return (i = i || Ht(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || st(t) || (r = w.style(t, e)), !p.pixelBoxStyles() && Lt.test(r) && Rt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
        }

        function jt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        } ! function () {
            function e() {
                if (c) {
                    h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(h).appendChild(c);
                    var e = t.getComputedStyle(c);
                    n = "1%" !== e.top, l = 12 === i(e.marginLeft), c.style.right = "60%", r = 36 === i(e.right), s = 36 === i(e.width), c.style.position = "absolute", o = 12 === i(c.offsetWidth / 3), nt.removeChild(h), c = null
                }
            }

            function i(t) {
                return Math.round(parseFloat(t))
            }
            var n, s, o, r, a, l, h = m.createElement("div"),
                c = m.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
                boxSizingReliable: function () {
                    return e(), s
                },
                pixelBoxStyles: function () {
                    return e(), r
                },
                pixelPosition: function () {
                    return e(), n
                },
                reliableMarginLeft: function () {
                    return e(), l
                },
                scrollboxSize: function () {
                    return e(), o
                },
                reliableTrDimensions: function () {
                    var e, i, n, s;
                    return null == a && (e = m.createElement("table"), i = m.createElement("tr"), n = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", nt.appendChild(e).appendChild(i).appendChild(n), s = t.getComputedStyle(i), a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === i.offsetHeight, nt.removeChild(e)), a
                }
            }))
        }();
        var Ft = ["Webkit", "Moz", "ms"],
            qt = m.createElement("div").style,
            Bt = {};

        function Yt(t) {
            return w.cssProps[t] || Bt[t] || (t in qt ? t : Bt[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Ft.length; i--;)
                    if ((t = Ft[i] + e) in qt) return t
            }(t) || t)
        }
        var Xt = /^(none|table(?!-c[ea]).+)/,
            Ut = /^--/,
            $t = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Kt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Vt(t, e, i) {
            var n = et.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Gt(t, e, i, n, s, o) {
            var r = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; r < 4; r += 2) "margin" === i && (l += w.css(t, i + it[r], !0, s)), n ? ("content" === i && (l -= w.css(t, "padding" + it[r], !0, s)), "margin" !== i && (l -= w.css(t, "border" + it[r] + "Width", !0, s))) : (l += w.css(t, "padding" + it[r], !0, s), "padding" !== i ? l += w.css(t, "border" + it[r] + "Width", !0, s) : a += w.css(t, "border" + it[r] + "Width", !0, s));
            return !n && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
        }

        function Qt(t, e, i) {
            var n = Ht(t),
                s = (!p.boxSizingReliable() || i) && "border-box" === w.css(t, "boxSizing", !1, n),
                o = s,
                r = zt(t, e, n),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Lt.test(r)) {
                if (!i) return r;
                r = "auto"
            }
            return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && E(t, "tr") || "auto" === r || !parseFloat(r) && "inline" === w.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === w.css(t, "boxSizing", !1, n), (o = a in t) && (r = t[a])), (r = parseFloat(r) || 0) + Gt(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
        }

        function Jt(t, e, i, n, s) {
            return new Jt.prototype.init(t, e, i, n, s)
        }
        w.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = zt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = U(e),
                        l = Ut.test(e),
                        h = t.style;
                    if (l || (e = Yt(a)), r = w.cssHooks[e] || w.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : h[e];
                    "string" == (o = typeof i) && (s = et.exec(i)) && s[1] && (i = at(t, e, s), o = "number"), null != i && i == i && ("number" !== o || l || (i += s && s[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
                }
            },
            css: function (t, e, i, n) {
                var s, o, r, a = U(e);
                return Ut.test(e) || (e = Yt(a)), (r = w.cssHooks[e] || w.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = zt(t, e, n)), "normal" === s && e in Kt && (s = Kt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
            }
        }), w.each(["height", "width"], (function (t, e) {
            w.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return !Xt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, n) : Wt(t, $t, (function () {
                        return Qt(t, e, n)
                    }))
                },
                set: function (t, i, n) {
                    var s, o = Ht(t),
                        r = !p.scrollboxSize() && "absolute" === o.position,
                        a = (r || n) && "border-box" === w.css(t, "boxSizing", !1, o),
                        l = n ? Gt(t, e, n, a, o) : 0;
                    return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Gt(t, e, "border", !1, o) - .5)), l && (s = et.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = w.css(t, e)), Vt(0, i, l)
                }
            }
        })), w.cssHooks.marginLeft = jt(p.reliableMarginLeft, (function (t, e) {
            if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {
                marginLeft: 0
            }, (function () {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (t, e) {
            w.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + it[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, "margin" !== t && (w.cssHooks[t + e].set = Vt)
        })), w.fn.extend({
            css: function (t, e) {
                return q(this, (function (t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (Array.isArray(e)) {
                        for (n = Ht(t), s = e.length; r < s; r++) o[e[r]] = w.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? w.style(t, e, i) : w.css(t, e)
                }), t, e, 1 < arguments.length)
            }
        }), ((w.Tween = Jt).prototype = {
            constructor: Jt,
            init: function (t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (w.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = Jt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = Jt.propHooks[this.prop];
                return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Jt.propHooks._default.set(this), this
            }
        }).init.prototype = Jt.prototype, (Jt.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function (t) {
                    w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = Jt.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, w.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, w.fx = Jt.prototype.init, w.fx.step = {};
        var Zt, te, ee, ie, ne = /^(?:toggle|show|hide)$/,
            se = /queueHooks$/;

        function oe() {
            te && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, w.fx.interval), w.fx.tick())
        }

        function re() {
            return t.setTimeout((function () {
                Zt = void 0
            })), Zt = Date.now()
        }

        function ae(t, e) {
            var i, n = 0,
                s = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = it[n])] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function le(t, e, i) {
            for (var n, s = (he.tweeners[e] || []).concat(he.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function he(t, e, i) {
            var n, s, o = 0,
                r = he.prefilters.length,
                a = w.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (s) return !1;
                    for (var e = Zt || re(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(n);
                    return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: w.extend({}, e),
                    opts: w.extend(!0, {
                        specialEasing: {},
                        easing: w.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Zt || re(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = w.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i < n; i++) h.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (function (t, e) {
                var i, n, s, o, r;
                for (i in t)
                    if (s = e[n = U(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = w.cssHooks[n]) && "expand" in r)
                        for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                    else e[n] = s
            }(c, h.opts.specialEasing); o < r; o++)
                if (n = he.prefilters[o].call(h, t, c, h.opts)) return f(n.stop) && (w._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
            return w.map(c, le, h), f(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), w.fx.timer(w.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h
        }
        w.Animation = w.extend(he, {
            tweeners: {
                "*": [function (t, e) {
                    var i = this.createTween(t, e);
                    return at(i.elem, t, et.exec(e), i), i
                }]
            },
            tweener: function (t, e) {
                f(t) ? (e = t, t = ["*"]) : t = t.match(L);
                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], he.tweeners[i] = he.tweeners[i] || [], he.tweeners[i].unshift(e)
            },
            prefilters: [function (t, e, i) {
                var n, s, o, r, a, l, h, c, u = "width" in e || "height" in e,
                    d = this,
                    p = {},
                    f = t.style,
                    g = t.nodeType && rt(t),
                    m = V.get(t, "fxshow");
                for (n in i.queue || (null == (r = w._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                    r.unqueued || a()
                }), r.unqueued++, d.always((function () {
                    d.always((function () {
                        r.unqueued--, w.queue(t, "fx").length || r.empty.fire()
                    }))
                }))), e)
                    if (s = e[n], ne.test(s)) {
                        if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                            if ("show" !== s || !m || void 0 === m[n]) continue;
                            g = !0
                        }
                        p[n] = m && m[n] || w.style(t, n)
                    } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p))
                    for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = V.get(t, "display")), "none" === (c = w.css(t, "display")) && (h ? c = h : (ht([t], !0), h = t.style.display || h, c = w.css(t, "display"), ht([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === w.css(t, "float") && (l || (d.done((function () {
                        f.display = h
                    })), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always((function () {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    }))), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(t, "fxshow", {
                        display: h
                    }), o && (m.hidden = !g), g && ht([t], !0), d.done((function () {
                        for (n in g || ht([t]), V.remove(t, "fxshow"), p) w.style(t, n, p[n])
                    }))), l = le(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (t, e) {
                e ? he.prefilters.unshift(t) : he.prefilters.push(t)
            }
        }), w.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? w.extend({}, t) : {
                complete: i || !i && e || f(t) && t,
                duration: t,
                easing: i && e || e && !f(e) && e
            };
            return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                f(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue)
            }, n
        }, w.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(rt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (t, e, i, n) {
                var s = w.isEmptyObject(t),
                    o = w.speed(e, i, n),
                    r = function () {
                        var e = he(this, w.extend({}, t), o);
                        (s || V.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = w.timers,
                        r = V.get(this);
                    if (s) r[s] && r[s].stop && n(r[s]);
                    else
                        for (s in r) r[s] && r[s].stop && se.test(s) && n(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    !e && i || w.dequeue(this, t)
                }))
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each((function () {
                    var e, i = V.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = w.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, w.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                }))
            }
        }), w.each(["toggle", "show", "hide"], (function (t, e) {
            var i = w.fn[e];
            w.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ae(e, !0), t, n, s)
            }
        })), w.each({
            slideDown: ae("show"),
            slideUp: ae("hide"),
            slideToggle: ae("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (t, e) {
            w.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        })), w.timers = [], w.fx.tick = function () {
            var t, e = 0,
                i = w.timers;
            for (Zt = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || w.fx.stop(), Zt = void 0
        }, w.fx.timer = function (t) {
            w.timers.push(t), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            te || (te = !0, oe())
        }, w.fx.stop = function () {
            te = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (e, i) {
            return e = w.fx && w.fx.speeds[e] || e, i = i || "fx", this.queue(i, (function (i, n) {
                var s = t.setTimeout(i, e);
                n.stop = function () {
                    t.clearTimeout(s)
                }
            }))
        }, ee = m.createElement("input"), ie = m.createElement("select").appendChild(m.createElement("option")), ee.type = "checkbox", p.checkOn = "" !== ee.value, p.optSelected = ie.selected, (ee = m.createElement("input")).value = "t", ee.type = "radio", p.radioValue = "t" === ee.value;
        var ce, ue = w.expr.attrHandle;
        w.fn.extend({
            attr: function (t, e) {
                return q(this, w.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function (t) {
                return this.each((function () {
                    w.removeAttr(this, t)
                }))
            }
        }), w.extend({
            attr: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, i) : (1 === o && w.isXMLDoc(t) || (s = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ce : void 0)), void 0 !== i ? null === i ? void w.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = w.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!p.radioValue && "radio" === e && E(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var i, n = 0,
                    s = e && e.match(L);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++];) t.removeAttribute(i)
            }
        }), ce = {
            set: function (t, e, i) {
                return !1 === e ? w.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, w.each(w.expr.match.bool.source.match(/\w+/g), (function (t, e) {
            var i = ue[e] || w.find.attr;
            ue[e] = function (t, e, n) {
                var s, o, r = e.toLowerCase();
                return n || (o = ue[r], ue[r] = s, s = null != i(t, e, n) ? r : null, ue[r] = o), s
            }
        }));
        var de = /^(?:input|select|textarea|button)$/i,
            pe = /^(?:a|area)$/i;

        function fe(t) {
            return (t.match(L) || []).join(" ")
        }

        function ge(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function me(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
        }
        w.fn.extend({
            prop: function (t, e) {
                return q(this, w.prop, t, e, 1 < arguments.length)
            },
            removeProp: function (t) {
                return this.each((function () {
                    delete this[w.propFix[t] || t]
                }))
            }
        }), w.extend({
            prop: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, s = w.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = w.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), p.optSelected || (w.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            w.propFix[this.toLowerCase()] = this
        })), w.fn.extend({
            addClass: function (t) {
                var e, i, n, s, o, r, a, l = 0;
                if (f(t)) return this.each((function (e) {
                    w(this).addClass(t.call(this, e, ge(this)))
                }));
                if ((e = me(t)).length)
                    for (; i = this[l++];)
                        if (s = ge(i), n = 1 === i.nodeType && " " + fe(s) + " ") {
                            for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s !== (a = fe(n)) && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function (t) {
                var e, i, n, s, o, r, a, l = 0;
                if (f(t)) return this.each((function (e) {
                    w(this).removeClass(t.call(this, e, ge(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = me(t)).length)
                    for (; i = this[l++];)
                        if (s = ge(i), n = 1 === i.nodeType && " " + fe(s) + " ") {
                            for (r = 0; o = e[r++];)
                                for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            s !== (a = fe(n)) && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (t, e) {
                var i = typeof t,
                    n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each((function (i) {
                    w(this).toggleClass(t.call(this, i, ge(this), e), e)
                })) : this.each((function () {
                    var e, s, o, r;
                    if (n)
                        for (s = 0, o = w(this), r = me(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ge(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : V.get(this, "__className__") || ""))
                }))
            },
            hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && -1 < (" " + fe(ge(i)) + " ").indexOf(e)) return !0;
                return !1
            }
        });
        var ve = /\r/g;
        w.fn.extend({
            val: function (t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = f(t), this.each((function (i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? t.call(this, i, w(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = w.map(s, (function (t) {
                        return null == t ? "" : t + ""
                    }))), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                }))) : s ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(ve, "") : null == i ? "" : i : void 0
            }
        }), w.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = w.find.attr(t, "value");
                        return null != e ? e : fe(w.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, i, n, s = t.options,
                            o = t.selectedIndex,
                            r = "select-one" === t.type,
                            a = r ? null : [],
                            l = r ? o + 1 : s.length;
                        for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                            if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                                if (e = w(i).val(), r) return e;
                                a.push(e)
                            } return a
                    },
                    set: function (t, e) {
                        for (var i, n, s = t.options, o = w.makeArray(e), r = s.length; r--;)((n = s[r]).selected = -1 < w.inArray(w.valHooks.option.get(n), o)) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), w.each(["radio", "checkbox"], (function () {
            w.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
                }
            }, p.checkOn || (w.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), p.focusin = "onfocusin" in t;
        var _e = /^(?:focusinfocus|focusoutblur)$/,
            be = function (t) {
                t.stopPropagation()
            };
        w.extend(w.event, {
            trigger: function (e, i, n, s) {
                var o, r, a, l, h, u, d, p, v = [n || m],
                    _ = c.call(e, "type") ? e.type : e,
                    b = c.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = p = a = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(_ + w.event.triggered) && (-1 < _.indexOf(".") && (_ = (b = _.split(".")).shift(), b.sort()), h = _.indexOf(":") < 0 && "on" + _, (e = e[w.expando] ? e : new w.Event(_, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : w.makeArray(i, [e]), d = w.event.special[_] || {}, s || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                    if (!s && !d.noBubble && !g(n)) {
                        for (l = d.delegateType || _, _e.test(l + _) || (r = r.parentNode); r; r = r.parentNode) v.push(r), a = r;
                        a === (n.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (r = v[o++]) && !e.isPropagationStopped();) p = r, e.type = 1 < o ? l : d.bindType || _, (u = (V.get(r, "events") || Object.create(null))[e.type] && V.get(r, "handle")) && u.apply(r, i), (u = h && r[h]) && u.apply && $(r) && (e.result = u.apply(r, i), !1 === e.result && e.preventDefault());
                    return e.type = _, s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), i) || !$(n) || h && f(n[_]) && !g(n) && ((a = n[h]) && (n[h] = null), w.event.triggered = _, e.isPropagationStopped() && p.addEventListener(_, be), n[_](), e.isPropagationStopped() && p.removeEventListener(_, be), w.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            simulate: function (t, e, i) {
                var n = w.extend(new w.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                w.event.trigger(n, null, e)
            }
        }), w.fn.extend({
            trigger: function (t, e) {
                return this.each((function () {
                    w.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return w.event.trigger(t, e, i, !0)
            }
        }), p.focusin || w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (t, e) {
            var i = function (t) {
                w.event.simulate(e, t.target, w.event.fix(t))
            };
            w.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this.document || this,
                        s = V.access(n, e);
                    s || n.addEventListener(t, i, !0), V.access(n, e, (s || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this.document || this,
                        s = V.access(n, e) - 1;
                    s ? V.access(n, e, s) : (n.removeEventListener(t, i, !0), V.remove(n, e))
                }
            }
        }));
        var ye = t.location,
            we = {
                guid: Date.now()
            },
            xe = /\?/;
        w.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (e) { }
            return n = i && i.getElementsByTagName("parsererror")[0], i && !n || w.error("Invalid XML: " + (n ? w.map(n.childNodes, (function (t) {
                return t.textContent
            })).join("\n") : e)), i
        };
        var ke = /\[\]$/,
            Ce = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;

        function Ee(t, e, i, n) {
            var s;
            if (Array.isArray(e)) w.each(e, (function (e, s) {
                i || ke.test(t) ? n(t, s) : Ee(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
            }));
            else if (i || "object" !== b(e)) n(t, e);
            else
                for (s in e) Ee(t + "[" + s + "]", e[s], i, n)
        }
        w.param = function (t, e) {
            var i, n = [],
                s = function (t, e) {
                    var i = f(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, (function () {
                s(this.name, this.value)
            }));
            else
                for (i in t) Ee(i, t[i], e, s);
            return n.join("&")
        }, w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                    var t = w.prop(this, "elements");
                    return t ? w.makeArray(t) : this
                })).filter((function () {
                    var t = this.type;
                    return this.name && !w(this).is(":disabled") && De.test(this.nodeName) && !Te.test(t) && (this.checked || !dt.test(t))
                })).map((function (t, e) {
                    var i = w(this).val();
                    return null == i ? null : Array.isArray(i) ? w.map(i, (function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Ce, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: i.replace(Ce, "\r\n")
                    }
                })).get()
            }
        });
        var Se = /%20/g,
            Ae = /#.*$/,
            Ie = /([?&])_=[^&]*/,
            Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Oe = /^(?:GET|HEAD)$/,
            Me = /^\/\//,
            Ne = {},
            Le = {},
            He = "*/".concat("*"),
            We = m.createElement("a");

        function Re(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(L) || [];
                if (f(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function ze(t, e, i, n) {
            var s = {},
                o = t === Le;

            function r(a) {
                var l;
                return s[a] = !0, w.each(t[a] || [], (function (t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
                })), l
            }
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function je(t, e) {
            var i, n, s = w.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && w.extend(!0, t, n), t
        }
        We.href = ye.href, w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ye.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": He,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? je(je(t, w.ajaxSettings), e) : je(w.ajaxSettings, t)
            },
            ajaxPrefilter: Re(Ne),
            ajaxTransport: Re(Le),
            ajax: function (e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var n, s, o, r, a, l, h, c, u, d, p = w.ajaxSetup({}, i),
                    f = p.context || p,
                    g = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
                    v = w.Deferred(),
                    _ = w.Callbacks("once memory"),
                    b = p.statusCode || {},
                    y = {},
                    x = {},
                    k = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (h) {
                                if (!r)
                                    for (r = {}; e = Pe.exec(o);) r[e[1].toLowerCase() + " "] = (r[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = r[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return h ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == h && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, y[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == h && (p.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (h) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || k;
                            return n && n.abort(e), T(0, e), this
                        }
                    };
                if (v.promise(C), p.url = ((e || p.url || ye.href) + "").replace(Me, ye.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""], null == p.crossDomain) {
                    l = m.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = We.protocol + "//" + We.host != l.protocol + "//" + l.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), ze(Ne, p, i, C), h) return C;
                for (u in (c = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Oe.test(p.type), s = p.url.replace(Ae, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Se, "+")) : (d = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (xe.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ie, "$1"), d = (xe.test(s) ? "&" : "?") + "_=" + we.guid++ + d), p.url = s + d), p.ifModified && (w.lastModified[s] && C.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && C.setRequestHeader("If-None-Match", w.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || h)) return C.abort();
                if (k = "abort", _.add(p.complete), C.done(p.success), C.fail(p.error), n = ze(Le, p, i, C)) {
                    if (C.readyState = 1, c && g.trigger("ajaxSend", [C, p]), h) return C;
                    p.async && 0 < p.timeout && (a = t.setTimeout((function () {
                        C.abort("timeout")
                    }), p.timeout));
                    try {
                        h = !1, n.send(y, T)
                    } catch (e) {
                        if (h) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(e, i, r, l) {
                    var u, d, m, y, x, k = i;
                    h || (h = !0, a && t.clearTimeout(a), n = void 0, o = l || "", C.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, r && (y = function (t, e, i) {
                        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (s in a)
                                if (a[s] && a[s].test(n)) {
                                    l.unshift(s);
                                    break
                                } if (l[0] in i) o = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    o = s;
                                    break
                                }
                                r || (r = s)
                            }
                            o = o || r
                        }
                        if (o) return o !== l[0] && l.unshift(o), i[o]
                    }(p, C, r)), !u && -1 < w.inArray("script", p.dataTypes) && w.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () { }), y = function (t, e, i, n) {
                        var s, o, r, a, l, h = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
                        for (o = c.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(r = h[l + " " + o] || h["* " + o]))
                                        for (s in h)
                                            if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                                                !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], c.unshift(a[1]));
                                                break
                                            } if (!0 !== r)
                                        if (r && t.throws) e = r(e);
                                        else try {
                                            e = r(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: r ? t : "No conversion from " + l + " to " + o
                                            }
                                        }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, y, C, u), u ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (w.etag[s] = x)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, u = !(m = y.error))) : (m = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || k) + "", u ? v.resolveWith(f, [d, k, C]) : v.rejectWith(f, [C, k, m]), C.statusCode(b), b = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? d : m]), _.fireWith(f, [C, k]), c && (g.trigger("ajaxComplete", [C, p]), --w.active || w.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (t, e, i) {
                return w.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return w.get(t, void 0, e, "script")
            }
        }), w.each(["get", "post"], (function (t, e) {
            w[e] = function (t, i, n, s) {
                return f(i) && (s = s || n, n = i, i = void 0), w.ajax(w.extend({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                }, w.isPlainObject(t) && t))
            }
        })), w.ajaxPrefilter((function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), w._evalUrl = function (t, e, i) {
            return w.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () { }
                },
                dataFilter: function (t) {
                    w.globalEval(t, e, i)
                }
            })
        }, w.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (f(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            },
            wrapInner: function (t) {
                return f(t) ? this.each((function (e) {
                    w(this).wrapInner(t.call(this, e))
                })) : this.each((function () {
                    var e = w(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function (t) {
                var e = f(t);
                return this.each((function (i) {
                    w(this).wrapAll(e ? t.call(this, i) : t)
                }))
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each((function () {
                    w(this).replaceWith(this.childNodes)
                })), this
            }
        }), w.expr.pseudos.hidden = function (t) {
            return !w.expr.pseudos.visible(t)
        }, w.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, w.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) { }
        };
        var Fe = {
            0: 200,
            1223: 204
        },
            qe = w.ajaxSettings.xhr();
        p.cors = !!qe && "withCredentials" in qe, p.ajax = qe = !!qe, w.ajaxTransport((function (e) {
            var i, n;
            if (p.cors || qe && !e.crossDomain) return {
                send: function (s, o) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                    i = function (t) {
                        return function () {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                        4 === a.readyState && t.setTimeout((function () {
                            i && n()
                        }))
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (s) {
                        if (i) throw s
                    }
                },
                abort: function () {
                    i && i()
                }
            }
        })), w.ajaxPrefilter((function (t) {
            t.crossDomain && (t.contents.script = !1)
        })), w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return w.globalEval(t), t
                }
            }
        }), w.ajaxPrefilter("script", (function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), w.ajaxTransport("script", (function (t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function (n, s) {
                    e = w("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function (t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                    }), m.head.appendChild(e[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }));
        var Be, Ye = [],
            Xe = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ye.pop() || w.expando + "_" + we.guid++;
                return this[t] = !0, t
            }
        }), w.ajaxPrefilter("json jsonp", (function (e, i, n) {
            var s, o, r, a = !1 !== e.jsonp && (Xe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xe, "$1" + s) : !1 !== e.jsonp && (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return r || w.error(s + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
                r = arguments
            }, n.always((function () {
                void 0 === o ? w(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ye.push(s)), r && f(o) && o(r[0]), r = o = void 0
            })), "script"
        })), p.createHTMLDocument = ((Be = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Be.childNodes.length), w.parseHTML = function (t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (p.createHTMLDocument ? ((n = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(n)) : e = m), o = !i && [], (s = S.exec(t)) ? [e.createElement(s[1])] : (s = bt([t], e, o), o && o.length && w(o).remove(), w.merge([], s.childNodes)));
            var n, s, o
        }, w.fn.load = function (t, e, i) {
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return -1 < a && (n = fe(t.slice(a)), t = t.slice(0, a)), f(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && w.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: e
            }).done((function (t) {
                o = arguments, r.html(n ? w("<div>").append(w.parseHTML(t)).find(n) : t)
            })).always(i && function (t, e) {
                r.each((function () {
                    i.apply(this, o || [t.responseText, e, t])
                }))
            }), this
        }, w.expr.pseudos.animated = function (t) {
            return w.grep(w.timers, (function (e) {
                return t === e.elem
            })).length
        }, w.offset = {
            setOffset: function (t, e, i) {
                var n, s, o, r, a, l, h = w.css(t, "position"),
                    c = w(t),
                    u = {};
                "static" === h && (t.style.position = "relative"), a = c.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === h || "fixed" === h) && -1 < (o + l).indexOf("auto") ? (r = (n = c.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), f(e) && (e = e.call(t, i, w.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, w.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                    w.offset.setOffset(this, t, e)
                }));
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, i, n = this[0],
                        s = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === w.css(n, "position")) e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0), s.left += w.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - s.top - w.css(n, "marginTop", !0),
                        left: e.left - s.left - w.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                    for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                    return t || nt
                }))
            }
        }), w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (t, e) {
            var i = "pageYOffset" === e;
            w.fn[t] = function (n) {
                return q(this, (function (t, n, s) {
                    var o;
                    if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[n];
                    o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s
                }), t, n, arguments.length)
            }
        })), w.each(["top", "left"], (function (t, e) {
            w.cssHooks[e] = jt(p.pixelPosition, (function (t, i) {
                if (i) return i = zt(t, e), Lt.test(i) ? w(t).position()[e] + "px" : i
            }))
        })), w.each({
            Height: "height",
            Width: "width"
        }, (function (t, e) {
            w.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function (i, n) {
                w.fn[n] = function (s, o) {
                    var r = arguments.length && (i || "boolean" != typeof s),
                        a = i || (!0 === s || !0 === o ? "margin" : "border");
                    return q(this, (function (e, i, s) {
                        var o;
                        return g(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? w.css(e, i, a) : w.style(e, i, s, a)
                    }), e, r ? s : void 0, r)
                }
            }))
        })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
            w.fn[e] = function (t) {
                return this.on(e, t)
            }
        })), w.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
            w.fn[e] = function (t, i) {
                return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
            }
        }));
        var Ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        w.proxy = function (t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e], e = t, t = i), f(t)) return n = s.call(arguments, 2), (o = function () {
                return t.apply(e || this, n.concat(s.call(arguments)))
            }).guid = t.guid = t.guid || w.guid++, o
        }, w.holdReady = function (t) {
            t ? w.readyWait++ : w.ready(!0)
        }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = f, w.isWindow = g, w.camelCase = U, w.type = b, w.now = Date.now, w.isNumeric = function (t) {
            var e = w.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, w.trim = function (t) {
            return null == t ? "" : (t + "").replace(Ue, "")
        }, "function" == typeof define && define.amd && define("jquery", [], (function () {
            return w
        }));
        var $e = t.jQuery,
            Ke = t.$;
        return w.noConflict = function (e) {
            return t.$ === w && (t.$ = Ke), e && t.jQuery === w && (t.jQuery = $e), w
        }, void 0 === e && (t.jQuery = t.$ = w), w
    })),

    /*! jQuery UI - v1.12.1 - 2016-09-14
     * http://jqueryui.com
     * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
     * Copyright jQuery Foundation and other contributors; Licensed MIT */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }
    ((function (t) {
        function e() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, (function () {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            })).on("mouseover", i, n)
        }

        function n() {
            t.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function s(e, i) {
            for (var n in t.extend(e, i), i) null == i[n] && (e[n] = i[n]);
            return e
        }

        function o(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.ui = t.ui || {}, t.ui.version = "1.12.1";
        var r = 0,
            a = Array.prototype.slice;
        t.cleanData = function (e) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (t) { }
                e(i)
            }
        }(t.cleanData), t.widget = function (e, i, n) {
            var s, o, r, a = {},
                l = e.split(".")[0],
                h = l + "-" + (e = e.split(".")[1]);
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function (e) {
                return !!t.data(e, h)
            }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function (t, e) {
                return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), (r = new i).options = t.widget.extend({}, r.options), t.each(n, (function (e, n) {
                return t.isFunction(n) ? void (a[e] = function () {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function () {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void (a[e] = n)
            })), o.prototype = t.widget.extend(r, {
                widgetEventPrefix: s && r.widgetEventPrefix || e
            }, a, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: h
            }), s ? (t.each(s._childConstructors, (function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            })), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function (e) {
            for (var i, n, s = a.call(arguments, 1), o = 0, r = s.length; r > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (s) {
                var o = "string" == typeof s,
                    r = a.call(arguments, 1),
                    l = this;
                return o ? this.length || "instance" !== s ? this.each((function () {
                    var i, o = t.data(this, n);
                    return "instance" === s ? (l = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                })) : l = void 0 : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each((function () {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                }))), l
            }
        }, t.Widget = function () { }, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, (function (t, i) {
                    e._removeClass(i, t)
                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    } return this._setOptions(r), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function (e) {
                var i, n, s;
                for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function (e) {
                function i(i, o) {
                    var r, a;
                    for (a = 0; i.length > a; a++) r = s.classesElementLookup[i[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]])
                }
                var n = [],
                    s = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (e) {
                var i = this;
                t.each(i.classesElementLookup, (function (n, s) {
                    -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                }))
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function (e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, (function (n, r) {
                    function a() {
                        return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, a) : i.on(h, a)
                }))
            },
            _off: function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                var i = this;
                return setTimeout((function () {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }), e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, (function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var r, a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                "number" == typeof (s = s || {}) && (s = {
                    duration: s
                }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue((function (i) {
                    t(this)[e](), o && o.call(n[0]), i()
                }))
            }
        })), t.widget,
            function () {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }

                function n(e) {
                    var i = e[0];
                    return 9 === i.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(i) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }
                var s, o = Math.max,
                    r = Math.abs,
                    a = /left|center|right/,
                    l = /top|center|bottom/,
                    h = /[\+\-]\d+(\.[\d]+)?%?/,
                    c = /^\w+/,
                    u = /%$/,
                    d = t.fn.position;
                t.position = {
                    scrollbarWidth: function () {
                        if (void 0 !== s) return s;
                        var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            o = n.children()[0];
                        return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = n[0].clientWidth), n.remove(), s = e - i
                    },
                    getScrollInfo: function (e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                        return {
                            width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                            height: s ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function (e) {
                        var i = t(e || window),
                            n = t.isWindow(i[0]),
                            s = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: s,
                            offset: !n && !s ? t(e).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }
                    }
                }, t.fn.position = function (s) {
                    if (!s || !s.of) return d.apply(this, arguments);
                    s = t.extend({}, s);
                    var u, p, f, g, m, v, _ = t(s.of),
                        b = t.position.getWithinInfo(s.within),
                        y = t.position.getScrollInfo(b),
                        w = (s.collision || "flip").split(" "),
                        x = {};
                    return v = n(_), _[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], (function () {
                        var t, e, i = (s[this] || "").split(" ");
                        1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    })), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? m.left += p : "center" === s.at[0] && (m.left += p / 2), "bottom" === s.at[1] ? m.top += f : "center" === s.at[1] && (m.top += f / 2), u = e(x.at, p, f), m.left += u[0], m.top += u[1], this.each((function () {
                        var n, a, l = t(this),
                            h = l.outerWidth(),
                            c = l.outerHeight(),
                            d = i(this, "marginLeft"),
                            v = i(this, "marginTop"),
                            k = h + d + i(this, "marginRight") + y.width,
                            C = c + v + i(this, "marginBottom") + y.height,
                            T = t.extend({}, m),
                            D = e(x.my, l.outerWidth(), l.outerHeight());
                        "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= c : "center" === s.my[1] && (T.top -= c / 2), T.left += D[0], T.top += D[1], n = {
                            marginLeft: d,
                            marginTop: v
                        }, t.each(["left", "top"], (function (e, i) {
                            t.ui.position[w[e]] && t.ui.position[w[e]][i](T, {
                                targetWidth: p,
                                targetHeight: f,
                                elemWidth: h,
                                elemHeight: c,
                                collisionPosition: n,
                                collisionWidth: k,
                                collisionHeight: C,
                                offset: [u[0] + D[0], u[1] + D[1]],
                                my: s.my,
                                at: s.at,
                                within: b,
                                elem: l
                            })
                        })), s.using && (a = function (t) {
                            var e = g.left - T.left,
                                i = e + p - h,
                                n = g.top - T.top,
                                a = n + f - c,
                                u = {
                                    target: {
                                        element: _,
                                        left: g.left,
                                        top: g.top,
                                        width: p,
                                        height: f
                                    },
                                    element: {
                                        element: l,
                                        left: T.left,
                                        top: T.top,
                                        width: h,
                                        height: c
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                                };
                            h > p && p > r(e + i) && (u.horizontal = "center"), c > f && f > r(n + a) && (u.vertical = "middle"), u.important = o(r(e), r(i)) > o(r(n), r(a)) ? "horizontal" : "vertical", s.using.call(this, t, u)
                        }), l.offset(t.extend(T, {
                            using: a
                        }))
                    }))
                }, t.ui.position = {
                    fit: {
                        left: function (t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollLeft : n.offset.left,
                                r = n.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = s - a,
                                h = a + e.collisionWidth - r - s;
                            e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                        },
                        top: function (t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollTop : n.offset.top,
                                r = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = s - a,
                                h = a + e.collisionHeight - r - s;
                            e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function (t, e) {
                            var i, n, s = e.within,
                                o = s.offset.left + s.scrollLeft,
                                a = s.width,
                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - a - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(c) > i) && (t.left += d + p + f) : u > 0 && (((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > r(n)) && (t.left += d + p + f))
                        },
                        top: function (t, e) {
                            var i, n, s = e.within,
                                o = s.offset.top + s.scrollTop,
                                a = s.height,
                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - a - l,
                                d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                f = -2 * e.offset[1];
                            0 > c ? (0 > (n = t.top + d + p + f + e.collisionHeight - a - o) || r(c) > n) && (t.top += d + p + f) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > r(i)) && (t.top += d + p + f))
                        }
                    },
                    flipfit: {
                        left: function () {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function () {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo((function (e) {
                    return function (i) {
                        return !!t.data(i, e)
                    }
                })) : function (e, i, n) {
                    return !!t.data(e, n[3])
                }
            }), t.fn.extend({
                disableSelection: function () {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.on(t + ".ui-disableSelection", (function (t) {
                            t.preventDefault()
                        }))
                    }
                }(),
                enableSelection: function () {
                    return this.off(".ui-disableSelection")
                }
            });
        var l = "ui-effects-",
            h = "ui-effects-style",
            c = "ui-effects-animated",
            u = t;
        t.effects = {
            effect: {}
        },
            function (t, e) {
                function i(t, e, i) {
                    var n = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
                }

                function n(i) {
                    var n = l(),
                        s = n._rgba = [];
                    return i = i.toLowerCase(), p(a, (function (t, o) {
                        var r, a = o.re.exec(i),
                            l = a && o.parse(a),
                            c = o.space || "rgba";
                        return l ? (r = n[c](l), n[h[c].cache] = r[h[c].cache], s = n._rgba = r._rgba, !1) : e
                    })), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
                }

                function s(t, e, i) {
                    return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var o, r = /^([\-+])=\s*(\d+\.?\d*)/,
                    a = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function (t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    l = t.Color = function (e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    h = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    c = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    u = l.support = {},
                    d = t("<p>")[0],
                    p = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, (function (t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                })), l.fn = t.extend(l.prototype, {
                    parse: function (s, r, a, c) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                        var u = this,
                            d = t.type(s),
                            f = this._rgba = [];
                        return r !== e && (s = [s, r, a, c], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(h.rgba.props, (function (t, e) {
                            f[e.idx] = i(s[e.idx], e)
                        })), this) : "object" === d ? (p(h, s instanceof l ? function (t, e) {
                            s[e.cache] && (u[e.cache] = s[e.cache].slice())
                        } : function (e, n) {
                            var o = n.cache;
                            p(n.props, (function (t, e) {
                                if (!u[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    u[o] = n.to(u._rgba)
                                }
                                u[o][e.idx] = i(s[t], e, !0)
                            })), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                        }), this) : e
                    },
                    is: function (t) {
                        var i = l(t),
                            n = !0,
                            s = this;
                        return p(h, (function (t, o) {
                            var r, a = i[o.cache];
                            return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, (function (t, i) {
                                return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e
                            }))), n
                        })), n
                    },
                    _space: function () {
                        var t = [],
                            e = this;
                        return p(h, (function (i, n) {
                            e[n.cache] && t.push(i)
                        })), t.pop()
                    },
                    transition: function (t, e) {
                        var n = l(t),
                            s = n._space(),
                            o = h[s],
                            r = 0 === this.alpha() ? l("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            u = a.slice();
                        return n = n[o.cache], p(o.props, (function (t, s) {
                            var o = s.idx,
                                r = a[o],
                                l = n[o],
                                h = c[s.type] || {};
                            null !== l && (null === r ? u[o] = l : (h.mod && (l - r > h.mod / 2 ? r += h.mod : r - l > h.mod / 2 && (r -= h.mod)), u[o] = i((l - r) * e + r, s)))
                        })), this[s](u)
                    },
                    blend: function (e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = l(e)._rgba;
                        return l(t.map(i, (function (t, e) {
                            return (1 - n) * s[e] + n * t
                        })))
                    },
                    toRgbaString: function () {
                        var e = "rgba(",
                            i = t.map(this._rgba, (function (t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            }));
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function () {
                        var e = "hsla(",
                            i = t.map(this.hsla(), (function (t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            }));
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function (e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, (function (t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        })).join("")
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), l.fn.parse.prototype = l.fn, h.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = a - l,
                        c = a + l,
                        u = .5 * c;
                    return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
                }, h.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = .5 >= n ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                }, p(h, (function (n, s) {
                    var o = s.props,
                        a = s.cache,
                        h = s.to,
                        c = s.from;
                    l.fn[n] = function (n) {
                        if (h && !this[a] && (this[a] = h(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            u = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return p(o, (function (t, e) {
                            var n = u["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        })), c ? ((s = l(c(d)))[a] = d, s) : l(d)
                    }, p(o, (function (e, i) {
                        l.fn[e] || (l.fn[e] = function (s) {
                            var o, a = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                h = this[l](),
                                c = h[i.idx];
                            return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = t.type(s)), null == s && i.empty ? this : ("string" === a && ((o = r.exec(s)) && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                        })
                    }))
                })), l.hook = function (e) {
                    var i = e.split(" ");
                    p(i, (function (e, i) {
                        t.cssHooks[i] = {
                            set: function (e, s) {
                                var o, r, a = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = l(o || s), !u.rgba && 1 !== s._rgba[3]) {
                                        for (r = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try {
                                                a = t.css(r, "backgroundColor"), r = r.parentNode
                                            } catch (t) { }
                                        s = s.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (t) { }
                            }
                        }, t.fx.step[i] = function (e) {
                            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    }))
                }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                    expand: function (t) {
                        var e = {};
                        return p(["Top", "Right", "Bottom", "Left"], (function (i, n) {
                            e["border" + n + "Color"] = t
                        })), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(u),
            function () {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) "string" == typeof s[i = s[n]] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function i(e, i) {
                    var n, o, r = {};
                    for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o));
                    return r
                }
                var n = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function (e, i) {
                    t.fx.step[i] = function (t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                })), t.fn.addBack || (t.fn.addBack = function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function (s, o, r, a) {
                    var l = t.speed(o, r, a);
                    return this.queue((function () {
                        var o, r = t(this),
                            a = r.attr("class") || "",
                            h = l.children ? r.find("*").addBack() : r;
                        h = h.map((function () {
                            return {
                                el: t(this),
                                start: e(this)
                            }
                        })), (o = function () {
                            t.each(n, (function (t, e) {
                                s[e] && r[e + "Class"](s[e])
                            }))
                        })(), h = h.map((function () {
                            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                        })), r.attr("class", a), h = h.map((function () {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function () {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        })), t.when.apply(t, h.get()).done((function () {
                            o(), t.each(arguments, (function () {
                                var e = this.el;
                                t.each(this.diff, (function (t) {
                                    e.css(t, "")
                                }))
                            })), l.complete.call(r[0])
                        }))
                    }))
                }, t.fn.extend({
                    addClass: function (e) {
                        return function (i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function (e) {
                        return function (i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function (e) {
                        return function (i, n, s, o, r) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function (e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function () {
                function e(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function n(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(s[1]) || 0,
                        right: "auto" === s[2] ? i : parseFloat(s[2]),
                        bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                        left: parseFloat(s[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
                    return function (i) {
                        return !!t(i).data(c) || e(i)
                    }
                }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                    save: function (t, e) {
                        for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(l + e[i], t[0].style[e[i]])
                    },
                    restore: function (t, e) {
                        for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(l + e[n]), t.css(e[n], i))
                    },
                    setMode: function (t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function (e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            float: e.css("float")
                        },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (t) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], (function (t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        })), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function (e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.1",
                    define: function (e, i, n) {
                        return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                    },
                    scaledDimensions: function (t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * s,
                            width: t.width() * n,
                            outerHeight: t.outerHeight() * s,
                            outerWidth: t.outerWidth() * n
                        }
                    },
                    clipToBox: function (t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function (t, e, i) {
                        var n = t.queue();
                        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function (t) {
                        t.data(h, t[0].style.cssText)
                    },
                    restoreStyle: function (t) {
                        t[0].style.cssText = t.data(h) || "", t.removeData(h)
                    },
                    mode: function (t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function (t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function (e) {
                        var i, n = e.css("position"),
                            s = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            float: e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(l + "placeholder", i)), e.css({
                            position: n,
                            left: s.left,
                            top: s.top
                        }), i
                    },
                    removePlaceholder: function (t) {
                        var e = l + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function (e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function (e, i, n, s) {
                        return s = s || {}, t.each(i, (function (t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        })), s
                    }
                }), t.fn.extend({
                    effect: function () {
                        function i(e) {
                            function i() {
                                t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                            }
                            var r = t(this);
                            n.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (r[h](), i()) : s.call(r[0], n, (function () {
                                r.removeData(c), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), i()
                            })) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), i()) : s.call(r[0], n, i)
                        }
                        var n = e.apply(this, arguments),
                            s = t.effects.effect[n.effect],
                            o = s.mode,
                            r = n.queue,
                            a = r || "fx",
                            l = n.complete,
                            h = n.mode,
                            u = [],
                            d = function (e) {
                                var i = t(this),
                                    n = t.effects.mode(i, h) || o;
                                i.data(c, !0), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                            };
                        return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each((function () {
                            l && l.call(this)
                        })) : !1 === r ? this.each(d).each(i) : this.queue(a, d).queue(a, i)
                    },
                    show: function (t) {
                        return function (n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(t.fn.show),
                    hide: function (t) {
                        return function (n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(t.fn.hide),
                    toggle: function (t) {
                        return function (n) {
                            if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(t.fn.toggle),
                    cssUnit: function (e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], (function (t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        })), n
                    },
                    cssClip: function (t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
                    },
                    transfer: function (e, i) {
                        var n = t(this),
                            s = t(e.to),
                            o = "fixed" === s.css("position"),
                            r = t("body"),
                            a = o ? r.scrollTop() : 0,
                            l = o ? r.scrollLeft() : 0,
                            h = s.offset(),
                            c = {
                                top: h.top - a,
                                left: h.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth()
                            },
                            u = n.offset(),
                            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: u.top - a,
                                left: u.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(c, e.duration, e.easing, (function () {
                                d.remove(), t.isFunction(i) && i()
                            }))
                    }
                }), t.fx.step.clip = function (e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(),
            function () {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function (t, i) {
                    e[i] = function (e) {
                        return Math.pow(e, t + 2)
                    }
                })), t.extend(e, {
                    Sine: function (t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function (t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function (t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function (t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function (t) {
                        for (var e, i = 4;
                            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, (function (e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function (t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                }))
            }();
        t.effects;
        t.effects.define("blind", "hide", (function (e, i) {
            var n = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
                s = t(this),
                o = e.direction || "up",
                r = s.cssClip(),
                a = {
                    clip: t.extend({}, r)
                },
                l = t.effects.createPlaceholder(s);
            a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), t.effects.define("bounce", (function (e, i) {
            var n, s, o, r = t(this),
                a = e.mode,
                l = "hide" === a,
                h = "show" === a,
                c = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (h || l ? 1 : 0),
                f = e.duration / p,
                g = e.easing,
                m = "up" === c || "down" === c ? "top" : "left",
                v = "up" === c || "left" === c,
                _ = 0,
                b = r.queue().length;
            for (t.effects.createPlaceholder(r), o = r.css(m), u || (u = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && ((s = {
                opacity: 1
            })[m] = o, r.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(s, f, g)), l && (u /= Math.pow(2, d - 1)), (s = {})[m] = o; d > _; _++)(n = {})[m] = (v ? "-=" : "+=") + u, r.animate(n, f, g).animate(s, f, g), u = l ? 2 * u : u / 2;
            l && ((n = {
                opacity: 0
            })[m] = (v ? "-=" : "+=") + u, r.animate(n, f, g)), r.queue(i), t.effects.unshift(r, b, p + 1)
        })), t.effects.define("clip", "hide", (function (e, i) {
            var n, s = {},
                o = t(this),
                r = e.direction || "vertical",
                a = "both" === r,
                l = a || "horizontal" === r,
                h = a || "vertical" === r;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), t.effects.define("drop", "hide", (function (e, i) {
            var n, s = t(this),
                o = "show" === e.mode,
                r = e.direction || "left",
                a = "up" === r || "down" === r ? "top" : "left",
                l = "up" === r || "left" === r ? "-=" : "+=",
                h = "+=" === l ? "-=" : "+=",
                c = {
                    opacity: 0
                };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, c[a] = l + n, o && (s.css(c), c[a] = h + n, c.opacity = 1), s.animate(c, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), t.effects.define("explode", "hide", (function (e, i) {
            function n() {
                v.push(this), v.length === c * u && (d.css({
                    visibility: "visible"
                }), t(v).remove(), i())
            }
            var s, o, r, a, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                u = c,
                d = t(this),
                p = "show" === e.mode,
                f = d.show().css("visibility", "hidden").offset(),
                g = Math.ceil(d.outerWidth() / u),
                m = Math.ceil(d.outerHeight() / c),
                v = [];
            for (s = 0; c > s; s++)
                for (a = f.top + s * m, h = s - (c - 1) / 2, o = 0; u > o; o++) r = f.left + o * g, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * g,
                    top: -s * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: g,
                    height: m,
                    left: r + (p ? l * g : 0),
                    top: a + (p ? h * m : 0),
                    opacity: p ? 0 : 1
                }).animate({
                    left: r + (p ? 0 : l * g),
                    top: a + (p ? 0 : h * m),
                    opacity: p ? 1 : 0
                }, e.duration || 500, e.easing, n)
        })), t.effects.define("fade", "toggle", (function (e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), t.effects.define("fold", "hide", (function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                r = "hide" === s,
                a = e.size || 15,
                l = /([0-9]+)%/.exec(a),
                h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                c = e.duration / 2,
                u = t.effects.createPlaceholder(n),
                d = n.cssClip(),
                p = {
                    clip: t.extend({}, d)
                },
                f = {
                    clip: t.extend({}, d)
                },
                g = [d[h[0]], d[h[1]]],
                m = n.queue().length;
            l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), p.clip[h[0]] = a, f.clip[h[0]] = a, f.clip[h[1]] = 0, o && (n.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), n.queue((function (i) {
                u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i()
            })).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(n, m, 4)
        })), t.effects.define("highlight", "show", (function (e, i) {
            var n = t(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), t.effects.define("size", (function (e, i) {
            var n, s, o, r = t(this),
                a = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.mode,
                u = "effect" !== c,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = r.css("position"),
                g = r.position(),
                m = t.effects.scaledDimensions(r),
                v = e.from || m,
                _ = e.to || t.effects.scaledDimensions(r, 0);
            t.effects.createPlaceholder(r), "show" === c && (o = v, v = _, _ = o), s = {
                from: {
                    y: v.height / m.height,
                    x: v.width / m.width
                },
                to: {
                    y: _.height / m.height,
                    x: _.width / m.width
                }
            }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), _ = t.effects.setTransition(r, l, s.to.y, _)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, h, s.from.x, v), _ = t.effects.setTransition(r, h, s.to.x, _))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), _ = t.effects.setTransition(r, a, s.to.y, _)), p && (n = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * n.y + g.top, v.left = (m.outerWidth - v.outerWidth) * n.x + g.left, _.top = (m.outerHeight - _.outerHeight) * n.y + g.top, _.left = (m.outerWidth - _.outerWidth) * n.x + g.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each((function () {
                var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    r = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), r = t.effects.setTransition(i, h, s.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, (function () {
                    u && t.effects.restoreStyle(i)
                }))
            }))), r.animate(_, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    var e = r.offset();
                    0 === _.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
                }
            })
        })), t.effects.define("scale", (function (e, i) {
            var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) || "effect" !== s ? 0 : 100),
                r = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
        })), t.effects.define("puff", "hide", (function (e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        })), t.effects.define("pulsate", "show", (function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                r = o || "hide" === s,
                a = 2 * (e.times || 5) + (r ? 1 : 0),
                l = e.duration / a,
                h = 0,
                c = 1,
                u = n.queue().length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), h = 1); a > c; c++) n.animate({
                opacity: h
            }, l, e.easing), h = 1 - h;
            n.animate({
                opacity: h
            }, l, e.easing), n.queue(i), t.effects.unshift(n, u, a + 1)
        })), t.effects.define("shake", (function (e, i) {
            var n = 1,
                s = t(this),
                o = e.direction || "left",
                r = e.distance || 20,
                a = e.times || 3,
                l = 2 * a + 1,
                h = Math.round(e.duration / l),
                c = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                g = s.queue().length;
            for (t.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + r, p[c] = (u ? "+=" : "-=") + 2 * r, f[c] = (u ? "-=" : "+=") + 2 * r, s.animate(d, h, e.easing); a > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
            s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, g, l + 1)
        })), t.effects.define("slide", "show", (function (e, i) {
            var n, s, o = t(this),
                r = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                a = e.mode,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (c ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })), !1 !== t.uiBackCompat && t.effects.define("transfer", (function (e, i) {
            t(this).transfer(e, i)
        })), t.ui.focusable = function (e, i) {
            var n, s, o, r, a, l = e.nodeName.toLowerCase();
            return "area" === l ? (s = (n = e.parentNode).name, !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + s + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !e.disabled) && ((a = t(e).closest("fieldset")[0]) && (r = !a.disabled)) : r = "a" === l && e.href || i, r && t(e).is(":visible") && function (t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) e = (t = t.parent()).css("visibility");
                return "hidden" !== e
            }(t(e)))
        }, t.extend(t.expr[":"], {
            focusable: function (e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable, t.fn.form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = t(this);
                setTimeout((function () {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, (function () {
                        this.refresh()
                    }))
                }))
            },
            _bindFormResetHandler: function () {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], (function (e, i) {
            function n(e, i, n, o) {
                return t.each(s, (function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                })), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function (e) {
                return void 0 === e ? r["inner" + i].call(this) : this.each((function () {
                    t(this).css(o, n(this, e) + "px")
                }))
            }, t.fn["outer" + i] = function (e, s) {
                return "number" != typeof e ? r["outer" + i].call(this, e) : this.each((function () {
                    t(this).css(o, n(this, e, !0, s) + "px")
                }))
            }
        })), t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.ui.escapeSelector = function () {
            var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
            return function (e) {
                return e.replace(t, "\\$1")
            }
        }(), t.fn.labels = function () {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, t.fn.scrollParent = function (e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter((function () {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                })).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function (e) {
                var i = t.attr(e, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        }), t.fn.extend({
            uniqueId: function () {
                var t = 0;
                return function () {
                    return this.each((function () {
                        this.id || (this.id = "ui-id-" + ++t)
                    }))
                }
            }(),
            removeUniqueId: function () {
                return this.each((function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                }))
            }
        }), t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function () {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function () {
                var e = this.options;
                this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function () {
                var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each((function () {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                })).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each((function () {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                })), this.headers.each((function () {
                    e -= t(this).outerHeight(!0)
                })), this.headers.next().each((function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                })).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each((function () {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                })).height(e))
            },
            _activate: function (e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), (function (t, e) {
                    i[e] = "_eventHandler"
                })), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (e) {
                var i, n, s = this.options,
                    o = this.active,
                    r = t(e.currentTarget),
                    a = r[0] === o[0],
                    l = a && s.collapsible,
                    h = l ? t() : r.next(),
                    c = o.next(),
                    u = {
                        oldHeader: o,
                        oldPanel: c,
                        newHeader: l ? t() : r,
                        newPanel: h
                    };
                e.preventDefault(), a && !s.collapsible || !1 === this._trigger("beforeActivate", e, u) || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter((function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                })).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (t, e, i) {
                var n, s, o, r = this,
                    a = 0,
                    l = t.css("box-sizing"),
                    h = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    u = h && c.down || c,
                    d = function () {
                        r._toggleComplete(i)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
                    }
                })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.ui.safeActiveElement = function (t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        }, t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function (e) {
                        var i = t(e.target),
                            n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"),
                                n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function (e) {
                        this._delay((function () {
                            !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                        }))
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each((function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                }))
            },
            _keydown: function (e) {
                var i, n, s, o, r = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        r = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay((function () {
                            delete this.previousFilter
                        }), 1e3)) : delete this.previousFilter
                }
                r && e.preventDefault()
            },
            _activate: function (t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, i, n, s, o = this,
                    r = this.options.icons.submenu,
                    a = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each((function () {
                    var e = t(this),
                        i = e.prev(),
                        n = t("<span>").data("ui-menu-submenu-caret", !0);
                    o._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                })), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function () {
                    var e = t(this);
                    o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
                })), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function (t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay((function () {
                    this._close()
                }), this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function (e) {
                var i, n, s, o, r, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay((function () {
                    this._close(), this._open(t)
                }), this.delay))
            },
            _open: function (e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay((function () {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }), this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay((function () {
                    this.focus(t, e)
                })))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function (e) {
                var i, n, s;
                return this.active ? void (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each((function () {
                    return 0 > (i = t(this)).offset().top - n - s
                })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function (e) {
                var i, n, s;
                return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each((function () {
                    return (i = t(this)).offset().top - n + s > 0
                })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function (e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function () {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                }))
            }
        }), t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    r = "input" === s;
                this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void (i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function (n) {
                        if (e) return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function (t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay((function () {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        }))
                    },
                    menufocus: function (e, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", (function () {
                            t(e.target).trigger(e.originalEvent)
                        }))) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void ((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function (e, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay((function () {
                            this.previous = s, this.selectedItem = n
                        }))), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function (e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function (t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function () {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function (t) {
                            s(t)
                        },
                        error: function () {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay((function () {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }), this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy((function (t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }), this)
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, (function (e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                }))
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, (function (t, i) {
                    n._renderItemData(e, i)
                }))
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function (t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (e, i) {
                var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, (function (t) {
                    return n.test(t.label || t.value || t)
                }))
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function (e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete;
        var d, p = /ui-corner-([a-z]){2,6}/g;
        t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function () {
                this._enhance()
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function () {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function () {
                var e = this,
                    i = [];
                t.each(this.options.items, (function (n, s) {
                    var o, r = {};
                    return s ? "controlgroupLabel" === n ? ((o = e.element.find(s)).each((function () {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    })), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                        classes: {}
                    }, e.element.find(s).each((function () {
                        var s = t(this),
                            o = s[n]("instance"),
                            a = t.widget.extend({}, r);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a);
                            var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                        }
                    })))) : void 0
                })), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (e) {
                this.childWidgets.each((function () {
                    var i = t(this).data("ui-controlgroup-data");
                    i && i[e] && i[e]()
                }))
            },
            _updateCornerClass: function (t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], n
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function (e, i) {
                var n = {};
                return t.each(e, (function (s) {
                    var o = i.options.classes[s] || "";
                    o = t.trim(o.replace(p, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
                })), n
            },
            _setOption: function (t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function () {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], (function (t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(e[n](), n)
                })), this._callChildMethod("refresh"))
            }
        }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function () {
                var e, i, n = this,
                    s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each((function () {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                })), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s
            },
            _create: function () {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function () {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function () {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function () {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked)
            },
            widget: function () {
                return this.label
            },
            _getRadioGroup: function () {
                var e = this.element[0].name,
                    i = "input[name='" + t.ui.escapeSelector(e) + "']";
                return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter((function () {
                    return 0 === t(this).form().length
                }))).not(this.element) : t([])
            },
            _toggleClasses: function () {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each((function () {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                }))
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function (t, e) {
                return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0
            },
            _updateIcon: function (e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function () {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
            },
            refresh: function () {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]), t.ui.checkboxradio, t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function () {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function (e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function () {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function (e, i) {
                var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function (t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function (t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function (t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function (t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function () {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function (t, e) {
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), t.fn.button = function (e) {
            return function () {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(t.fn.button), t.fn.buttonset = function () {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), t.ui.button, t.extend(t.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }), t.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return s(this._defaults, t || {}), this
            },
            _attachDatepicker: function (e, i) {
                var n, s, o;
                s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function (e, n) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function (e, i) {
                var n, s, o, r = this._get(i, "appendText"),
                    a = this._get(i, "isRTL");
                i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (n = this._get(i, "showOn")) || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", (function () {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                })))
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function (t) {
                        for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function (e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (e, i, n, o, r) {
                var a, l, h, c, u, d = this._dialogInst;
                return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), s(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function (e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), d === s && (d = null))
            },
            _enableDatepicker: function (e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each((function () {
                    this.disabled = !1
                })).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, (function (t) {
                    return t === e ? null : t
                })))
            },
            _disableDatepicker: function (e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each((function () {
                    this.disabled = !0
                })).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, (function (t) {
                    return t === e ? null : t
                })), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; this._disabledInputs.length > e; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function (e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (e, i, n) {
                var o, r, a, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (o = i || {}, "string" == typeof i && ((o = {})[i] = n), void (h && (this._curInst === h && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), s(h.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, r), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function (e) {
                var i, n, s, o = t.datepicker._getInst(e.target),
                    r = !0,
                    a = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), r = !1;
                        break;
                    case 13:
                        return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        r = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
                r && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function (e) {
                var i, n, s = t.datepicker._getInst(e.target);
                return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function (e) {
                var i = t.datepicker._getInst(e.target);
                if (i.input.val() !== i.lastVal) try {
                    t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
                } catch (t) { }
                return !0
            },
            _showDatepicker: function (e) {
                var i, n, o, r, a, l, h;
                ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (n = t.datepicker._get(i, "beforeShow")) ? n.apply(e, [e, i]) : {}) && (s(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each((function () {
                    return !(r |= "fixed" === t(this).css("position"))
                })), a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function (t) {
                    for (var e, i; t.length && t[0] !== document;) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                        t = t.parent()
                    }
                    return 0
                }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
            },
            _updateDatepicker: function (e) {
                this.maxRows = 4, d = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, s = this._getNumberOfMonths(e),
                    o = s[1],
                    r = e.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && n.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout((function () {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }), 0))
            },
            _shouldFocusInput: function (t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function (e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    r = e.input ? e.input.outerWidth() : 0,
                    a = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
            },
            _findPos: function (e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return [(i = t(e).offset()).left, i.top]
            },
            _hideDatepicker: function (e) {
                var i, n, s, o, r = this._curInst;
                !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function () {
                    t.datepicker._tidyDialog(r)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function (e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function (e, i, n, s) {
                var o, r = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((o = this._getInst(r[0])).selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function (e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function (e, i) {
                var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function (e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function (t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function (e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
                var s, o, r, a, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    _ = -1,
                    b = !1,
                    y = function (t) {
                        var i = e.length > s + 1 && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    w = function (t) {
                        var e = y(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                            o = i.substring(l).match(s);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    x = function (e, n, s) {
                        var o = -1,
                            r = t.map(y(e) ? s : n, (function (t, e) {
                                return [
                                    [e, t]
                                ]
                            })).sort((function (t, e) {
                                return -(t[1].length - e[1].length)
                            }));
                        if (t.each(r, (function (t, e) {
                            var n = e[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                        })), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function () {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; e.length > s; s++)
                    if (b) "'" !== e.charAt(s) || y("'") ? k() : b = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", u, d);
                            break;
                        case "o":
                            _ = w("o");
                            break;
                        case "m":
                            m = w("m");
                            break;
                        case "M":
                            m = x("M", p, f);
                            break;
                        case "y":
                            g = w("y");
                            break;
                        case "@":
                            g = (a = new Date(w("@"))).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "!":
                            g = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "'":
                            y("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
                if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), _ > -1)
                    for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= o;
                if ((a = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
                return a
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function (e) {
                        var i = t.length > n + 1 && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function (t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; i > n.length;) n = "0" + n;
                        return n
                    },
                    c = function (t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; t.length > n; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), s, o);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), r, a);
                                break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += t.charAt(n)
                        }
                return u
            },
            _possibleChars: function (t) {
                var e, i = "",
                    n = !1,
                    s = function (i) {
                        var n = t.length > e + 1 && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; t.length > e; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                return i
            },
            _get: function (t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        r = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, r) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (e, i, n) {
                var s = null == i || "" === i ? n : "string" == typeof i ? function (i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (t) { }
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o))
                        }
                        l = a.exec(i)
                    }
                    return new Date(s, o, r)
                }(i) : "number" == typeof i ? isNaN(i) ? n : function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }(i) : new Date(i.getTime());
                return (s = s && "Invalid Date" == "" + s ? n : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function (e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map((function () {
                    var e = {
                        prev: function () {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function () {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function () {
                            t.datepicker._hideDatepicker()
                        },
                        today: function () {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function () {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function () {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                }))
            },
            _generateHTML: function (t) {
                var e, i, n, s, o, r, a, l, h, c, u, d, p, f, g, m, v, _, b, y, w, x, k, C, T, D, E, S, A, I, P, O, M, N, L, H, W, R, z, j = new Date,
                    F = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                    q = this._get(t, "isRTL"),
                    B = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"),
                    X = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    $ = this._get(t, "showCurrentAtPos"),
                    K = this._get(t, "stepMonths"),
                    V = 1 !== U[0] || 1 !== U[1],
                    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    J = this._getMinMaxDate(t, "max"),
                    Z = t.drawMonth - $,
                    tt = t.drawYear;
                if (0 > Z && (Z += 12, tt--), J)
                    for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) 0 > --Z && (Z = 11, tt--);
                for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = X ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : F, r = X ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (q ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; U[0] > x; x++) {
                    for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                        if (T = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", E = "", V) {
                            if (E += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                case 0:
                                    E += " ui-datepicker-group-first", D = " ui-corner-" + (q ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    E += " ui-datepicker-group-last", D = " ui-corner-" + (q ? "left" : "right");
                                    break;
                                default:
                                    E += " ui-datepicker-group-middle", D = ""
                            }
                            E += "'>"
                        }
                        for (E += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? q ? o : n : "") + (/all|right/.test(D) && 0 === x ? q ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A = (w + c) % 7] + "'>" + p[A] + "</span></th>";
                        for (E += S + "</tr></thead><tbody>", I = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, O = Math.ceil((P + I) / 7), M = V && this.maxRows > O ? this.maxRows : O, this.maxRows = M, N = this._daylightSavingAdjust(new Date(tt, Z, 1 - P)), L = 0; M > L; L++) {
                            for (E += "<tr>", H = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) W = m ? m.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], z = (R = N.getMonth() !== Z) && !_ || !W[0] || Q && Q > N || J && N > J, H += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (R ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (R && !v ? "" : " " + W[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (R && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (R && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === F.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (R ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                            E += H + "</tr>"
                        } ++Z > 11 && (Z = 0, tt++), k += E += "</tbody></table>" + (V ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    y += k
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
                var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    _ = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !m) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        })(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    } return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b + "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function (t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    r = null,
                    a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function (e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function () {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            })) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var f = !1;
        t(document).on("mouseup", (function () {
            f = !1
        })), t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var e = this;
                this.element.on("mousedown." + this.widgetName, (function (t) {
                    return e._mouseDown(t)
                })).on("click." + this.widgetName, (function (i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                })), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (e) {
                if (!f) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function () {
                        i.mouseDelayMet = !0
                    }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return i._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), f = !0, !0))
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function (e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, f = !1, e.preventDefault()
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () { },
            _mouseDrag: function () { },
            _mouseStop: function () { },
            _mouseCapture: function () {
                return !0
            }
        }), t.ui.plugin = {
            add: function (e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function (t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, t.ui.safeBlur = function (e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        }, t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
            },
            _blockFrames: function (e) {
                this.iframeBlocks = this.document.find(e).map((function () {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                }))
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function (e) {
                var i = t.ui.safeActiveElement(this.document[0]);
                t(e.target).closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function (e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter((function () {
                    return "fixed" === t(this).css("position")
                })).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function (t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function (e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function (e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function () {
                    !1 !== i._trigger("stop", e) && i._clear()
                })) : !1 !== this._trigger("stop", e) && this._clear(), !1
            },
            _mouseUp: function (e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function (e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function () {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function (t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function () {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void (this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), void ((n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void (this.containment = null)
            },
            _convertPositionTo: function (t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function (t, e) {
                var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function (e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function (e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], t(n.options.connectToSortable).each((function () {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                }))
            },
            stop: function (e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, t.each(n.sortables, (function () {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                }))
            },
            drag: function (e, i, n) {
                t.each(n.sortables, (function () {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, (function () {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    }))), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, (function () {
                        this.refreshPositions()
                    })), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, (function () {
                        this.refreshPositions()
                    })))
                }))
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function (e, i, n) {
                var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function (e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function (t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function (e, i, n) {
                var s = n.options,
                    o = !1,
                    r = n.scrollParentNotHidden[0],
                    a = n.document[0];
                r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function (e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each((function () {
                    var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                }))
            },
            drag: function (e, i, n) {
                var s, o, r, a, l, h, c, u, d, p, f = n.options,
                    g = f.snapTolerance,
                    m = i.offset.left,
                    v = m + n.helperProportions.width,
                    _ = i.offset.top,
                    b = _ + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) h = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width, u = (c = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height, l - g > v || m > h + g || c - g > b || _ > u + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(c - b), o = g >= Math.abs(u - _), r = g >= Math.abs(l - v), a = g >= Math.abs(h - m), s && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = g >= Math.abs(c - _), o = g >= Math.abs(u - b), r = g >= Math.abs(l - m), a = g >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = s || o || r || a || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function (e, i, n) {
                var s, o = n.options,
                    r = t.makeArray(t(o.stack)).sort((function (e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    }));
                r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each((function (e) {
                    t(this).css("zIndex", s + e)
                })), this.css("zIndex", s + r.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function (e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function (t) {
                return parseFloat(t) || 0
            },
            _isNumber: function (t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function () {
                var e, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", (function () {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                })).on("mouseleave", (function () {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var e, i = function (e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function (t, e) {
                switch (this._super(t, e), t) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function () {
                var e, i, n, s, o, r = this.options,
                    a = this;
                if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) s = "ui-resizable-" + (e = t.trim(n[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                        zIndex: r.zIndex
                    }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function (e) {
                    var i, n, s, o;
                    for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: a._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", (function () {
                    a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                })), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function () {
                this._handles.remove()
            },
            _mouseCapture: function (e) {
                var i, n, s = !1;
                for (i in this.handles) ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function (e) {
                var i, n, s, o = this.options,
                    r = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                }, this.originalPosition = {
                    left: i,
                    top: n
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    r = e.pageX - s.left || 0,
                    a = e.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i, n, s, o, r, a, l, h = this.options,
                    c = this;
                return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, r = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - s
                }, a = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                    top: l,
                    left: a
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function () {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function () {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function (t) {
                var e, i, n, s, o, r = this.options;
                o = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function (t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function (t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function (t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function (t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function () {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function (t, e) {
                    var i = this.originalSize;
                    return {
                        left: this.originalPosition.left + e,
                        width: i.width - e
                    }
                },
                n: function (t, e, i) {
                    var n = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: n.height - i
                    }
                },
                s: function (t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function (e) {
                var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    a = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - a,
                        height: i.size.height - r
                    },
                    h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function () {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function () {
                var e, i, n, s, o, r, a, l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each((function (t, n) {
                    i[t] = l._num(e.css("padding" + n))
                })), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: r,
                    height: a
                }))
            },
            resize: function (e) {
                var i, n, s, o, r = t(this).resizable("instance"),
                    a = r.options,
                    l = r.containerOffset,
                    h = r.position,
                    c = r._aspectRatio || e.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = r.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
            },
            stop: function () {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    r = t(e.helper),
                    a = r.offset(),
                    l = r.outerWidth() - e.sizeDiff.width,
                    h = r.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var e = t(this).resizable("instance").options;
                t(e.alsoResize).each((function () {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                }))
            },
            resize: function (e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    r = n.originalPosition,
                    a = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - r.top || 0,
                        left: n.position.left - r.left || 0
                    };
                t(s.alsoResize).each((function () {
                    var e = t(this),
                        n = t(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, (function (t, e) {
                        var i = (n[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    })), e.css(s)
                }))
            },
            stop: function () {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
            },
            resize: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    r = i.originalPosition,
                    a = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((s.width - o.width) / h) * h,
                    d = Math.round((s.height - o.height) / c) * c,
                    p = o.width + u,
                    f = o.height + d,
                    g = n.maxWidth && p > n.maxWidth,
                    m = n.maxHeight && f > n.maxHeight,
                    v = n.minWidth && n.minWidth > p,
                    _ = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), _ && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
            }
        }), t.ui.resizable, t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function (e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function () {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function (e) {
                var i = this;
                this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, (function () {
                    i._trigger("close", e)
                })))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map((function () {
                        return +t(this).css("z-index")
                    })).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function () {
                var e = this;
                return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, (function () {
                    e._focusTabbable(), e._trigger("focus")
                })), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function () {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function (e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function () {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function (e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay((function () {
                                s.trigger("focus")
                            })), e.preventDefault()) : (this._delay((function () {
                                n.trigger("focus")
                            })), e.preventDefault())
                        }
                    },
                    mousedown: function (t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function () {
                var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function (e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function (t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function (t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function () {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, (function (i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", (function () {
                        s.apply(e.element[0], arguments)
                    }))
                })), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function () {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function (t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function (s, o) {
                        var r = o.offset.left - i.document.scrollLeft(),
                            a = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                    }
                })
            },
            _makeResizable: function () {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: r,
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function (t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function (s, o) {
                        var r = i.uiDialog.offset(),
                            a = r.left - i.document.scrollLeft(),
                            l = r.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function () {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function () {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function () {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function () {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function (e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, (function (t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                })), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function (e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map((function () {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                }))
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var e = !0;
                    this._delay((function () {
                        e = !1
                    })), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function (t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function () {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function (t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), t.ui.dialog, t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var e, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function (t) {
                    return t.is(n)
                }, this.proportions = function () {
                    return arguments.length ? void (e = arguments[0]) : e || (e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    })
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function (e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function (t) {
                for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function () {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function (e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function (e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function () {
                    var i = t(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && g(n, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e) ? (s = !0, !1) : void 0
                })), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
            },
            ui: function (t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function () {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function () {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function () {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function () {
                this._removeClass("ui-droppable-active")
            }
        });
        var g = t.ui.intersect = function () {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function (e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    a = o + e.helperProportions.width,
                    l = r + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= h && u >= a && r >= c && d >= l;
                    case "intersect":
                        return o + e.helperProportions.width / 2 > h && u > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case "touch":
                        return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= h && u >= o || a >= h && u >= a || h > o && a > u);
                    default:
                        return !1
                }
            }
        }();
        t.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function (e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    r = i ? i.type : null,
                    a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; o.length > n; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; a.length > s; s++)
                            if (a[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            } o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                                width: o[n].element[0].offsetWidth,
                                height: o[n].element[0].offsetHeight
                            }))
                    }
            },
            drop: function (e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), (function () {
                    this.options && (!this.options.disabled && this.visible && g(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                })), n
            },
            dragStart: function (e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", (function () {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                }))
            },
            drag: function (e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, r = g(e, this, this.options.tolerance, i),
                            a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                        a && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter((function () {
                            return t(this).droppable("instance").options.scope === s
                        }))).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                }))
            },
            dragStop: function (e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function () {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function () {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), t.ui.droppable, t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function (t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function (t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function (t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function (t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each((function () {
                        var i = t(this),
                            n = i.offset(),
                            s = {
                                left: n.left - e.elementPos.left,
                                top: n.top - e.elementPos.top
                            };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    }))
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function () {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function (e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each((function () {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                })), t(e.target).parents().addBack().each((function () {
                    var n, s = t.data(this, "selectable-item");
                    return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                        selecting: s.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: s.element
                    }), !1) : void 0
                })))
            },
            _mouseDrag: function (e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        r = this.opos[1],
                        a = e.pageX,
                        l = e.pageY;
                    return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                        left: o,
                        top: r,
                        width: a - o,
                        height: l - r
                    }), this.selectees.each((function () {
                        var i = t.data(this, "selectable-item"),
                            h = !1,
                            c = {};
                        i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > a || o > c.right || c.top > l || r > c.bottom) : "fit" === s.tolerance && (h = c.left > o && a > c.right && c.top > r && l > c.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    })), !1
                }
            },
            _mouseStop: function (e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each((function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                })), t(".ui-selecting", this.element[0]).each((function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                })), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function () {
                var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function (t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", (function () {
                    i._rendered || i._refreshMenu()
                }))
            },
            _drawMenu: function () {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function (t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function (t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function () {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function () {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function (t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderButtonItem: function (e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function (e, i) {
                var n = this,
                    s = "";
                t.each(i, (function (i, o) {
                    var r;
                    o.optgroup !== s && (r = t("<li>", {
                        text: o.optgroup
                    }), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                }))
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function (e, i) {
                var n = t("<li>"),
                    s = t("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
            },
            _setText: function (t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function (t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function (t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function () {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                },
                click: function (t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function (e) {
                    var i = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1;
                            break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e);
                            break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e);
                            break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e);
                            break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e);
                            break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e);
                            break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e);
                            break;
                        default:
                            this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function (t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function (t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function (t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function () {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var t = this.options.width;
                return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function (e) {
                var i = this,
                    n = [];
                e.each((function (e, s) {
                    n.push(i._parseOption(t(s), e))
                })), this.items = n
            },
            _parseOption: function (t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
                this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function (e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                }))
            },
            _createRange: function () {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i, n, s, o, r, a, l, h = this,
                    c = this.options;
                return !c.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each((function (e) {
                    var i = Math.abs(n - h.values(e));
                    (s > i || s === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (s = i, o = t(this), r = e)
                })), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - a.left - o.width() / 2,
                    top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function (t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function (t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function (t, e, i) {
                var n, s = this.value(),
                    o = this.values();
                this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function (t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function (e, i) {
                var n, s = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function () {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function () {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function () {
                var e, i, n, s, o, r = this.options.range,
                    a = this.options,
                    l = this,
                    h = !this._animateOff && a.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each((function (n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i
                })) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, a.animate))
            },
            _handleEvents: {
                keydown: function (e) {
                    var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                    }
                    switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            n = this._trimAlignValue(i + s);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            n = this._trimAlignValue(i - s)
                    }
                    this._slide(e, o, n)
                },
                keyup: function (e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function (t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, (function () {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                }))
            },
            _destroy: function () {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (e, i) {
                var n = null,
                    s = !1,
                    o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each((function () {
                    return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
                })), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each((function () {
                    this === e.target && (s = !0)
                })), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function (e, i, n) {
                var s, o, r = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s, o, r = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (s = (n = this.items[i]).item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            r = {};
                        o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, (function () {
                            n._clear(e)
                        }))
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each((function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                })), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each((function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                })), n
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    r = o + t.width,
                    a = t.top,
                    l = a + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || n + h > a && l > n + h,
                    d = "y" === this.options.axis || e + c > o && r > e + c,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function (t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                function i() {
                    a.push(this)
                }
                var n, s, o, r, a = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (n = h.length - 1; n >= 0; n--)
                        for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)(r = t.data(o[s], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(a)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, (function (t) {
                    for (var i = 0; e.length > i; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                }))
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, r, a, l, h, c = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (r = u[i][1], n = 0, h = (a = u[i][0]).length; h > n; n++)(l = t(a[n])).data(this.widgetName + "-item", r), c.push({
                        item: l,
                        instance: r,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (e) {
                var i, n, s, o;
                for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (e) {
                var i, n = (e = e || this).options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function () {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function (t, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function (e, i) {
                var n = this;
                e.children().each((function () {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                }))
            },
            _contactContainers: function (e) {
                var i, n, s, o, r, a, l, h, c, u, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4, o = null, r = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = c ? "width" : "height", u = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = !1, e[u] - l > this.items[n][a] / 2 && (h = !0), s > Math.abs(e[u] - l) && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i, n, s = this.options,
                    o = e.pageX,
                    r = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function (t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay((function () {
                    s === this.counter && this.refreshPositions(!n)
                }))
            },
            _clear: function (t, e) {
                function i(t, e, i) {
                    return function (n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS) ("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push((function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                })), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push((function (t) {
                    this._trigger("update", t, this._uiHash())
                })), this !== this.currentContainer && (e || (s.push((function (t) {
                    this._trigger("remove", t, this._uiHash())
                })), s.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; s.length > n; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        }), t.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var e = this._super(),
                    i = this.element;
                return t.each(["min", "max", "step"], (function (t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
                })), e
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay((function () {
                            this.spinning && this._stop(t)
                        }), 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (e) {
                    function i() {
                        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay((function () {
                            this.previous = n
                        })))
                    }
                    var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay((function () {
                        delete this.cancelBlur, i.call(this)
                    })), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function () {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function (e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _start: function (t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function (t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay((function () {
                    this._repeat(40, e, i)
                }), t), this._spin(e * this.options.step, i)
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i), this.counter++)
            },
            _increment: function (e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function (t) {
                var e, i, n = this.options;
                return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: o((function (t) {
                this._super(t)
            })),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function (t, e) {
                var i;
                "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: o((function (t) {
                this._stepUp(t)
            })),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: o((function (t) {
                this._stepDown(t)
            })),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: o((function (t) {
                this._stepUp((t || 1) * this.options.page)
            })),
            pageDown: o((function (t) {
                this._stepDown((t || 1) * this.options.page)
            })),
            value: function (t) {
                return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function () {
                return "<span>"
            },
            _buttonHtml: function () {
                return "<a></a><a></a>"
            }
        }), t.ui.spinner, t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var t = /#.*$/;
                return function (e) {
                    var i, n;
                    i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) { }
                    try {
                        n = decodeURIComponent(n)
                    } catch (t) { }
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function () {
                var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function (t) {
                    return e.tabs.index(t)
                })))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each((function (i, s) {
                    return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                })), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function (e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay((function () {
                        this.option("active", n)
                    }), this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, i) {
                for (var n = this.tabs.length - 1; - 1 !== t.inArray((e > n && (e = 0), 0 > e && (e = n), e), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), (function (t) {
                    return i.index(t)
                })), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", (function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                })).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function () {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                })), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map((function () {
                    return t("a", this)[0]
                })).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each((function (i, n) {
                    var s, o, r, a = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(n) ? (r = (s = n.hash).substring(1), o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (r = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(s)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": r,
                        "aria-labelledby": a
                    }), o.attr("aria-labelledby", a)
                })), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function (e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
            },
            _setupEvents: function (e) {
                var i = {};
                e && t.each(e.split(" "), (function (t, e) {
                    i[e] = "_eventHandler"
                })), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function (t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each((function () {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                })), this.element.children().not(this.panels).each((function () {
                    i -= t(this).outerHeight(!0)
                })), this.panels.each((function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                })).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each((function () {
                    i = Math.max(i, t(this).height("").height())
                })).height(i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget).closest("li"),
                    o = s[0] === n[0],
                    r = o && i.collapsible,
                    a = r ? t() : this._getPanelForTab(s),
                    l = n.length ? this._getPanelForTab(n) : t(),
                    h = {
                        oldTab: n,
                        oldPanel: l,
                        newTab: r ? t() : s,
                        newPanel: a
                    };
                e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), e), this._toggle(e, h))
            },
            _toggle: function (e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
                }
                var o = this,
                    r = i.newPanel,
                    a = i.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, (function () {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
                })) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter((function () {
                    return 0 === t(this).attr("tabIndex")
                })).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each((function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                })), this.tabs.each((function () {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                })), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (e) {
                var i = this.options.disabled;
                !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, (function (t) {
                    return t !== e ? t : null
                })) : t.map(this.tabs, (function (t, i) {
                    return i !== e ? i : null
                }))), this._setOptionDisabled(i))
            },
            disable: function (e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    r = this._getPanelForTab(s),
                    a = {
                        tab: s,
                        panel: r
                    },
                    l = function (t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done((function (t, e, s) {
                    setTimeout((function () {
                        r.html(t), n._trigger("load", i, a), l(s, e)
                    }), 1)
                })).fail((function (t, e) {
                    setTimeout((function () {
                        l(t, e)
                    }), 1)
                }))))
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function (e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function () {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), t.ui.tabs, t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function () {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function (e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function (e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function (e, i) {
                var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, (function (t, e) {
                    n._updateContent(e.element)
                }))
            },
            _setOptionDisabled: function (t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, (function (i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                })), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function () {
                    var e = t(this);
                    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                })))
            },
            _enable: function () {
                this.disabledTitles.each((function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })), this.disabledTitles = t([])
            },
            open: function (e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each((function () {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                })), this._registerCloseHandlers(e, n), this._updateContent(n, e))
            },
            _updateContent: function (t, e) {
                var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void ((i = n.call(t[0], (function (i) {
                    s._delay((function () {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    }))
                }))) && this._open(e, t, i))
            },
            _open: function (e, i, n) {
                function s(t) {
                    h.of = t, r.is(":hidden") || r.position(h)
                }
                var o, r, a, l, h = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(e)) : r.position(t.extend({
                        of: i
                    }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval((function () {
                        r.is(":visible") && (s(h.of), clearInterval(a))
                    }), t.fx.interval)), this._trigger("open", e, {
                        tooltip: r
                    })
                }
            },
            _registerCloseHandlers: function (e, i) {
                var n = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function () {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function (e) {
                var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                return o ? (i = o.tooltip, void (o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, (function () {
                    n._removeTooltip(t(this))
                })), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, (function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                })), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
            },
            _tooltip: function (e) {
                var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function (t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function (t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, (function (i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                })), this.liveRegion.remove()
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function () {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip
    })),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
    }(this, (function () {
        "use strict";
        const t = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            }
        },
            e = t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            i = t => {
                let e = t.getAttribute("data-bs-target");
                if (!e || "#" === e) {
                    let i = t.getAttribute("href");
                    if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                    i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
                }
                return e
            },
            n = t => {
                const e = i(t);
                return e && document.querySelector(e) ? e : null
            },
            s = t => {
                const e = i(t);
                return e ? document.querySelector(e) : null
            },
            o = t => {
                t.dispatchEvent(new Event("transitionend"))
            },
            r = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
            a = e => r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
            l = (t, e, i) => {
                Object.keys(i).forEach(n => {
                    const s = i[n],
                        o = e[n],
                        a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    var l;
                    if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
                })
            },
            h = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
            c = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
            u = t => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    const e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null
            },
            d = () => { },
            p = t => t.offsetHeight,
            f = () => {
                const {
                    jQuery: t
                } = window;
                return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
            },
            g = [],
            m = () => "rtl" === document.documentElement.dir,
            v = t => {
                var e;
                e = () => {
                    const e = f();
                    if (e) {
                        const i = t.NAME,
                            n = e.fn[i];
                        e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                    }
                }, "loading" === document.readyState ? (g.length || document.addEventListener("DOMContentLoaded", () => {
                    g.forEach(t => t())
                }), g.push(e)) : e()
            },
            _ = t => {
                "function" == typeof t && t()
            },
            b = (t, e, i = !0) => {
                if (!i) return void _(t);
                const n = (t => {
                    if (!t) return 0;
                    let {
                        transitionDuration: e,
                        transitionDelay: i
                    } = window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
                })(e) + 5;
                let s = !1;
                const r = ({
                    target: i
                }) => {
                    i === e && (s = !0, e.removeEventListener("transitionend", r), _(t))
                };
                e.addEventListener("transitionend", r), setTimeout(() => {
                    s || o(e)
                }, n)
            },
            y = (t, e, i, n) => {
                let s = t.indexOf(e);
                if (-1 === s) return t[!i && n ? t.length - 1 : 0];
                const o = t.length;
                return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
            },
            w = /[^.]*(?=\..*)\.|.*/,
            x = /\..*/,
            k = /::\d+$/,
            C = {};
        let T = 1;
        const D = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
            E = /^(mouseenter|mouseleave)/i,
            S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function A(t, e) {
            return e && `${e}::${T++}` || t.uidEvent || T++
        }

        function I(t) {
            const e = A(t);
            return t.uidEvent = e, C[e] = C[e] || {}, C[e]
        }

        function P(t, e, i = null) {
            const n = Object.keys(t);
            for (let s = 0, o = n.length; s < o; s++) {
                const o = t[n[s]];
                if (o.originalHandler === e && o.delegationSelector === i) return o
            }
            return null
        }

        function O(t, e, i) {
            const n = "string" == typeof e,
                s = n ? i : e;
            let o = L(t);
            return S.has(o) || (o = t), [n, s, o]
        }

        function M(t, e, i, n, s) {
            if ("string" != typeof e || !t) return;
            if (i || (i = n, n = null), E.test(e)) {
                const t = t => function (e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                };
                n ? n = t(n) : i = t(i)
            }
            const [o, r, a] = O(e, i, n), l = I(t), h = l[a] || (l[a] = {}), c = P(h, r, o ? i : null);
            if (c) return void (c.oneOff = c.oneOff && s);
            const u = A(r, e.replace(w, "")),
                d = o ? function (t, e, i) {
                    return function n(s) {
                        const o = t.querySelectorAll(e);
                        for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                            for (let a = o.length; a--;)
                                if (o[a] === r) return s.delegateTarget = r, n.oneOff && H.off(t, s.type, e, i), i.apply(r, [s]);
                        return null
                    }
                }(t, i, n) : function (t, e) {
                    return function i(n) {
                        return n.delegateTarget = t, i.oneOff && H.off(t, n.type, e), e.apply(t, [n])
                    }
                }(t, i);
            d.delegationSelector = o ? i : null, d.originalHandler = r, d.oneOff = s, d.uidEvent = u, h[u] = d, t.addEventListener(a, d, o)
        }

        function N(t, e, i, n, s) {
            const o = P(e[i], n, s);
            o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
        }

        function L(t) {
            return t = t.replace(x, ""), D[t] || t
        }
        const H = {
            on(t, e, i, n) {
                M(t, e, i, n, !1)
            },
            one(t, e, i, n) {
                M(t, e, i, n, !0)
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = O(e, i, n), a = r !== e, l = I(t), h = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void N(t, l, r, o, s ? i : null)
                }
                h && Object.keys(l).forEach(i => {
                    ! function (t, e, i, n) {
                        const s = e[i] || {};
                        Object.keys(s).forEach(o => {
                            if (o.includes(n)) {
                                const n = s[o];
                                N(t, e, i, n.originalHandler, n.delegationSelector)
                            }
                        })
                    }(t, l, i, e.slice(1))
                });
                const c = l[r] || {};
                Object.keys(c).forEach(i => {
                    const n = i.replace(k, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        N(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                })
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = f(),
                    s = L(e),
                    o = e !== s,
                    r = S.has(s);
                let a, l = !0,
                    h = !0,
                    c = !1,
                    u = null;
                return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), h = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented()), r ? (u = document.createEvent("HTMLEvents"), u.initEvent(s, l, !0)) : u = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== i && Object.keys(i).forEach(t => {
                    Object.defineProperty(u, t, {
                        get: () => i[t]
                    })
                }), c && u.preventDefault(), h && t.dispatchEvent(u), u.defaultPrevented && void 0 !== a && a.preventDefault(), u
            }
        },
            W = new Map;
        var R = {
            set(t, e, i) {
                W.has(t) || W.set(t, new Map);
                const n = W.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (t, e) => W.has(t) && W.get(t).get(e) || null,
            remove(t, e) {
                if (!W.has(t)) return;
                const i = W.get(t);
                i.delete(e), 0 === i.size && W.delete(t)
            }
        };
        class z {
            constructor(t) {
                (t = a(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
                R.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                    this[t] = null
                })
            }
            _queueCallback(t, e, i = !0) {
                b(t, e, i)
            }
            static getInstance(t) {
                return R.get(t, this.DATA_KEY)
            }
            static getOrCreateInstance(t, e = {}) {
                return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
            }
            static get VERSION() {
                return "5.0.2"
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
            static get DATA_KEY() {
                return "bs." + this.NAME
            }
            static get EVENT_KEY() {
                return "." + this.DATA_KEY
            }
        }
        class j extends z {
            static get NAME() {
                return "alert"
            }
            close(t) {
                const e = t ? this._getRootElement(t) : this._element,
                    i = this._triggerCloseEvent(e);
                null === i || i.defaultPrevented || this._removeElement(e)
            }
            _getRootElement(t) {
                return s(t) || t.closest(".alert")
            }
            _triggerCloseEvent(t) {
                return H.trigger(t, "close.bs.alert")
            }
            _removeElement(t) {
                t.classList.remove("show");
                const e = t.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(t), t, e)
            }
            _destroyElement(t) {
                t.remove(), H.trigger(t, "closed.bs.alert")
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = j.getOrCreateInstance(this);
                    "close" === t && e[t](this)
                }))
            }
            static handleDismiss(t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }
        }
        H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', j.handleDismiss(new j)), v(j);
        class F extends z {
            static get NAME() {
                return "button"
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = F.getOrCreateInstance(this);
                    "toggle" === t && e[t]()
                }))
            }
        }

        function q(t) {
            return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
        }

        function B(t) {
            return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
        }
        H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
            t.preventDefault();
            const e = t.target.closest('[data-bs-toggle="button"]');
            F.getOrCreateInstance(e).toggle()
        }), v(F);
        const Y = {
            setDataAttribute(t, e, i) {
                t.setAttribute("data-bs-" + B(e), i)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + B(e))
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i])
                }), e
            },
            getDataAttribute: (t, e) => q(t.getAttribute("data-bs-" + B(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
            X = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            U = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            $ = "next",
            K = "prev",
            V = "left",
            G = "right",
            Q = {
                ArrowLeft: G,
                ArrowRight: V
            };
        class J extends z {
            constructor(e, i) {
                super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(i), this._indicatorsElement = t.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
            }
            static get Default() {
                return X
            }
            static get NAME() {
                return "carousel"
            }
            next() {
                this._slide($)
            }
            nextWhenVisible() {
                !document.hidden && h(this._element) && this.next()
            }
            prev() {
                this._slide(K)
            }
            pause(e) {
                e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }
            cycle(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            to(e) {
                this._activeElement = t.findOne(".active.carousel-item", this._element);
                const i = this._getItemIndex(this._activeElement);
                if (e > this._items.length - 1 || e < 0) return;
                if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", () => this.to(e));
                if (i === e) return this.pause(), void this.cycle();
                const n = e > i ? $ : K;
                this._slide(n, this._items[e])
            }
            _getConfig(t) {
                return t = {
                    ...X,
                    ...Y.getDataAttributes(this._element),
                    ..."object" == typeof t ? t : {}
                }, l("carousel", t, U), t
            }
            _handleSwipe() {
                const t = Math.abs(this.touchDeltaX);
                if (t <= 40) return;
                const e = t / this.touchDeltaX;
                this.touchDeltaX = 0, e && this._slide(e > 0 ? G : V)
            }
            _addEventListeners() {
                this._config.keyboard && H.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), H.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                const e = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
                },
                    i = t => {
                        this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                    },
                    n = t => {
                        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
                    };
                t.find(".carousel-item img", this._element).forEach(t => {
                    H.on(t, "dragstart.bs.carousel", t => t.preventDefault())
                }), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", t => e(t)), H.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", t => e(t)), H.on(this._element, "touchmove.bs.carousel", t => i(t)), H.on(this._element, "touchend.bs.carousel", t => n(t)))
            }
            _keydown(t) {
                if (/input|textarea/i.test(t.target.tagName)) return;
                const e = Q[t.key];
                e && (t.preventDefault(), this._slide(e))
            }
            _getItemIndex(e) {
                return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
            }
            _getItemByOrder(t, e) {
                const i = t === $;
                return y(this._items, e, i, this._config.wrap)
            }
            _triggerSlideEvent(e, i) {
                const n = this._getItemIndex(e),
                    s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));
                return H.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: e,
                    direction: i,
                    from: s,
                    to: n
                })
            }
            _setActiveIndicatorElement(e) {
                if (this._indicatorsElement) {
                    const i = t.findOne(".active", this._indicatorsElement);
                    i.classList.remove("active"), i.removeAttribute("aria-current");
                    const n = t.find("[data-bs-target]", this._indicatorsElement);
                    for (let t = 0; t < n.length; t++)
                        if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                            n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
                            break
                        }
                }
            }
            _updateInterval() {
                const e = this._activeElement || t.findOne(".active.carousel-item", this._element);
                if (!e) return;
                const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
            _slide(e, i) {
                const n = this._directionToOrder(e),
                    s = t.findOne(".active.carousel-item", this._element),
                    o = this._getItemIndex(s),
                    r = i || this._getItemByOrder(n, s),
                    a = this._getItemIndex(r),
                    l = Boolean(this._interval),
                    h = n === $,
                    c = h ? "carousel-item-start" : "carousel-item-end",
                    u = h ? "carousel-item-next" : "carousel-item-prev",
                    d = this._orderToDirection(n);
                if (r && r.classList.contains("active")) return void (this._isSliding = !1);
                if (this._isSliding) return;
                if (this._triggerSlideEvent(r, d).defaultPrevented) return;
                if (!s || !r) return;
                this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
                const f = () => {
                    H.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: r,
                        direction: d,
                        from: o,
                        to: a
                    })
                };
                if (this._element.classList.contains("slide")) {
                    r.classList.add(u), p(r), s.classList.add(c), r.classList.add(c);
                    const t = () => {
                        r.classList.remove(c, u), r.classList.add("active"), s.classList.remove("active", u, c), this._isSliding = !1, setTimeout(f, 0)
                    };
                    this._queueCallback(t, s, !0)
                } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();
                l && this.cycle()
            }
            _directionToOrder(t) {
                return [G, V].includes(t) ? m() ? t === V ? K : $ : t === V ? $ : K : t
            }
            _orderToDirection(t) {
                return [$, K].includes(t) ? m() ? t === K ? V : G : t === K ? G : V : t
            }
            static carouselInterface(t, e) {
                const i = J.getOrCreateInstance(t, e);
                let {
                    _config: n
                } = i;
                "object" == typeof e && (n = {
                    ...n,
                    ...e
                });
                const s = "string" == typeof e ? e : n.slide;
                if ("number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                    i[s]()
                } else n.interval && n.ride && (i.pause(), i.cycle())
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    J.carouselInterface(this, t)
                }))
            }
            static dataApiClickHandler(t) {
                const e = s(this);
                if (!e || !e.classList.contains("carousel")) return;
                const i = {
                    ...Y.getDataAttributes(e),
                    ...Y.getDataAttributes(this)
                },
                    n = this.getAttribute("data-bs-slide-to");
                n && (i.interval = !1), J.carouselInterface(e, i), n && J.getInstance(e).to(n), t.preventDefault()
            }
        }
        H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", () => {
            const e = t.find('[data-bs-ride="carousel"]');
            for (let t = 0, i = e.length; t < i; t++) J.carouselInterface(e[t], J.getInstance(e[t]))
        }), v(J);
        const Z = {
            toggle: !0,
            parent: ""
        },
            tt = {
                toggle: "boolean",
                parent: "(string|element)"
            };
        class et extends z {
            constructor(e, i) {
                super(e), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
                const s = t.find('[data-bs-toggle="collapse"]');
                for (let e = 0, i = s.length; e < i; e++) {
                    const i = s[e],
                        o = n(i),
                        r = t.find(o).filter(t => t === this._element);
                    null !== o && r.length && (this._selector = o, this._triggerArray.push(i))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            static get Default() {
                return Z
            }
            static get NAME() {
                return "collapse"
            }
            toggle() {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }
            show() {
                if (this._isTransitioning || this._element.classList.contains("show")) return;
                let e, i;
                this._parent && (e = t.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === e.length && (e = null));
                const n = t.findOne(this._selector);
                if (e) {
                    const t = e.find(t => n !== t);
                    if (i = t ? et.getInstance(t) : null, i && i._isTransitioning) return
                }
                if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                e && e.forEach(t => {
                    n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null)
                });
                const s = this._getDimension();
                this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
                    t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                }), this.setTransitioning(!0);
                const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
                this._queueCallback(() => {
                    this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), H.trigger(this._element, "shown.bs.collapse")
                }, this._element, !0), this._element.style[s] = this._element[o] + "px"
            }
            hide() {
                if (this._isTransitioning || !this._element.classList.contains("show")) return;
                if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                const t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", p(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                const e = this._triggerArray.length;
                if (e > 0)
                    for (let t = 0; t < e; t++) {
                        const e = this._triggerArray[t],
                            i = s(e);
                        i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
                    }
                this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
                    this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), H.trigger(this._element, "hidden.bs.collapse")
                }, this._element, !0)
            }
            setTransitioning(t) {
                this._isTransitioning = t
            }
            _getConfig(t) {
                return (t = {
                    ...Z,
                    ...t
                }).toggle = Boolean(t.toggle), l("collapse", t, tt), t
            }
            _getDimension() {
                return this._element.classList.contains("width") ? "width" : "height"
            }
            _getParent() {
                let {
                    parent: e
                } = this._config;
                e = a(e);
                const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
                return t.find(i, e).forEach(t => {
                    const e = s(t);
                    this._addAriaAndCollapsedClass(e, [t])
                }), e
            }
            _addAriaAndCollapsedClass(t, e) {
                if (!t || !e.length) return;
                const i = t.classList.contains("show");
                e.forEach(t => {
                    i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
                })
            }
            static collapseInterface(t, e) {
                let i = et.getInstance(t);
                const n = {
                    ...Z,
                    ...Y.getDataAttributes(t),
                    ..."object" == typeof e && e ? e : {}
                };
                if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                    i[e]()
                }
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    et.collapseInterface(this, t)
                }))
            }
        }
        H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (e) {
            ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
            const i = Y.getDataAttributes(this),
                s = n(this);
            t.find(s).forEach(t => {
                const e = et.getInstance(t);
                let n;
                e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, et.collapseInterface(t, n)
            })
        })), v(et);
        var it = "top",
            nt = "bottom",
            st = "right",
            ot = "left",
            rt = [it, nt, st, ot],
            at = rt.reduce((function (t, e) {
                return t.concat([e + "-start", e + "-end"])
            }), []),
            lt = [].concat(rt, ["auto"]).reduce((function (t, e) {
                return t.concat([e, e + "-start", e + "-end"])
            }), []),
            ht = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

        function ct(t) {
            return t ? (t.nodeName || "").toLowerCase() : null
        }

        function ut(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return e && e.defaultView || window
            }
            return t
        }

        function dt(t) {
            return t instanceof ut(t).Element || t instanceof Element
        }

        function pt(t) {
            return t instanceof ut(t).HTMLElement || t instanceof HTMLElement
        }

        function ft(t) {
            return "undefined" != typeof ShadowRoot && (t instanceof ut(t).ShadowRoot || t instanceof ShadowRoot)
        }
        var gt = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (t) {
                var e = t.state;
                Object.keys(e.elements).forEach((function (t) {
                    var i = e.styles[t] || {},
                        n = e.attributes[t] || {},
                        s = e.elements[t];
                    pt(s) && ct(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) {
                        var e = n[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                    })))
                }))
            },
            effect: function (t) {
                var e = t.state,
                    i = {
                        popper: {
                            position: e.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                    function () {
                        Object.keys(e.elements).forEach((function (t) {
                            var n = e.elements[t],
                                s = e.attributes[t] || {},
                                o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                                    return t[e] = "", t
                                }), {});
                            pt(n) && ct(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) {
                                n.removeAttribute(t)
                            })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        };

        function mt(t) {
            return t.split("-")[0]
        }

        function vt(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top
            }
        }

        function _t(t) {
            var e = vt(t),
                i = t.offsetWidth,
                n = t.offsetHeight;
            return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: i,
                height: n
            }
        }

        function bt(t, e) {
            var i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && ft(i)) {
                var n = e;
                do {
                    if (n && t.isSameNode(n)) return !0;
                    n = n.parentNode || n.host
                } while (n)
            }
            return !1
        }

        function yt(t) {
            return ut(t).getComputedStyle(t)
        }

        function wt(t) {
            return ["table", "td", "th"].indexOf(ct(t)) >= 0
        }

        function xt(t) {
            return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement
        }

        function kt(t) {
            return "html" === ct(t) ? t : t.assignedSlot || t.parentNode || (ft(t) ? t.host : null) || xt(t)
        }

        function Ct(t) {
            return pt(t) && "fixed" !== yt(t).position ? t.offsetParent : null
        }

        function Tt(t) {
            for (var e = ut(t), i = Ct(t); i && wt(i) && "static" === yt(i).position;) i = Ct(i);
            return i && ("html" === ct(i) || "body" === ct(i) && "static" === yt(i).position) ? e : i || function (t) {
                var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (-1 !== navigator.userAgent.indexOf("Trident") && pt(t) && "fixed" === yt(t).position) return null;
                for (var i = kt(t); pt(i) && ["html", "body"].indexOf(ct(i)) < 0;) {
                    var n = yt(i);
                    if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                    i = i.parentNode
                }
                return null
            }(t) || e
        }

        function Dt(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
        }
        var Et = Math.max,
            St = Math.min,
            At = Math.round;

        function It(t, e, i) {
            return Et(t, St(e, i))
        }

        function Pt(t) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, t)
        }

        function Ot(t, e) {
            return e.reduce((function (e, i) {
                return e[i] = t, e
            }), {})
        }
        var Mt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e, i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = mt(i.placement),
                    l = Dt(a),
                    h = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var c = function (t, e) {
                        return Pt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : Ot(t, rt))
                    }(s.padding, i),
                        u = _t(o),
                        d = "y" === l ? it : ot,
                        p = "y" === l ? nt : st,
                        f = i.rects.reference[h] + i.rects.reference[l] - r[l] - i.rects.popper[h],
                        g = r[l] - i.rects.reference[l],
                        m = Tt(o),
                        v = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                        _ = f / 2 - g / 2,
                        b = c[d],
                        y = v - u[h] - c[p],
                        w = v / 2 - u[h] / 2 + _,
                        x = It(b, w, y),
                        k = l;
                    i.modifiersData[n] = ((e = {})[k] = x, e.centerOffset = x - w, e)
                }
            },
            effect: function (t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && bt(e.elements.popper, n) && (e.elements.arrow = n)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
            Nt = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

        function Lt(t) {
            var e, i = t.popper,
                n = t.popperRect,
                s = t.placement,
                o = t.offsets,
                r = t.position,
                a = t.gpuAcceleration,
                l = t.adaptive,
                h = t.roundOffsets,
                c = !0 === h ? function (t) {
                    var e = t.x,
                        i = t.y,
                        n = window.devicePixelRatio || 1;
                    return {
                        x: At(At(e * n) / n) || 0,
                        y: At(At(i * n) / n) || 0
                    }
                }(o) : "function" == typeof h ? h(o) : o,
                u = c.x,
                d = void 0 === u ? 0 : u,
                p = c.y,
                f = void 0 === p ? 0 : p,
                g = o.hasOwnProperty("x"),
                m = o.hasOwnProperty("y"),
                v = ot,
                _ = it,
                b = window;
            if (l) {
                var y = Tt(i),
                    w = "clientHeight",
                    x = "clientWidth";
                y === ut(i) && "static" !== yt(y = xt(i)).position && (w = "scrollHeight", x = "scrollWidth"), y = y, s === it && (_ = nt, f -= y[w] - n.height, f *= a ? 1 : -1), s === ot && (v = st, d -= y[x] - n.width, d *= a ? 1 : -1)
            }
            var k, C = Object.assign({
                position: r
            }, l && Nt);
            return a ? Object.assign({}, C, ((k = {})[_] = m ? "0" : "", k[v] = g ? "0" : "", k.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", k)) : Object.assign({}, C, ((e = {})[_] = m ? f + "px" : "", e[v] = g ? d + "px" : "", e.transform = "", e))
        }
        var Ht = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    h = {
                        placement: mt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Lt(Object.assign({}, h, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Lt(Object.assign({}, h, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                })
            },
            data: {}
        },
            Wt = {
                passive: !0
            },
            Rt = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () { },
                effect: function (t) {
                    var e = t.state,
                        i = t.instance,
                        n = t.options,
                        s = n.scroll,
                        o = void 0 === s || s,
                        r = n.resize,
                        a = void 0 === r || r,
                        l = ut(e.elements.popper),
                        h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                    return o && h.forEach((function (t) {
                        t.addEventListener("scroll", i.update, Wt)
                    })), a && l.addEventListener("resize", i.update, Wt),
                        function () {
                            o && h.forEach((function (t) {
                                t.removeEventListener("scroll", i.update, Wt)
                            })), a && l.removeEventListener("resize", i.update, Wt)
                        }
                },
                data: {}
            },
            zt = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

        function jt(t) {
            return t.replace(/left|right|bottom|top/g, (function (t) {
                return zt[t]
            }))
        }
        var Ft = {
            start: "end",
            end: "start"
        };

        function qt(t) {
            return t.replace(/start|end/g, (function (t) {
                return Ft[t]
            }))
        }

        function Bt(t) {
            var e = ut(t);
            return {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }

        function Yt(t) {
            return vt(xt(t)).left + Bt(t).scrollLeft
        }

        function Xt(t) {
            var e = yt(t),
                i = e.overflow,
                n = e.overflowX,
                s = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + s + n)
        }

        function Ut(t, e) {
            var i;
            void 0 === e && (e = []);
            var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : pt(e) && Xt(e) ? e : t(kt(e))
            }(t),
                s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                o = ut(n),
                r = s ? [o].concat(o.visualViewport || [], Xt(n) ? n : []) : n,
                a = e.concat(r);
            return s ? a : a.concat(Ut(kt(r)))
        }

        function $t(t) {
            return Object.assign({}, t, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height
            })
        }

        function Kt(t, e) {
            return "viewport" === e ? $t(function (t) {
                var e = ut(t),
                    i = xt(t),
                    n = e.visualViewport,
                    s = i.clientWidth,
                    o = i.clientHeight,
                    r = 0,
                    a = 0;
                return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                    width: s,
                    height: o,
                    x: r + Yt(t),
                    y: a
                }
            }(t)) : pt(e) ? function (t) {
                var e = vt(t);
                return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
            }(e) : $t(function (t) {
                var e, i = xt(t),
                    n = Bt(t),
                    s = null == (e = t.ownerDocument) ? void 0 : e.body,
                    o = Et(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                    r = Et(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                    a = -n.scrollLeft + Yt(t),
                    l = -n.scrollTop;
                return "rtl" === yt(s || i).direction && (a += Et(i.clientWidth, s ? s.clientWidth : 0) - o), {
                    width: o,
                    height: r,
                    x: a,
                    y: l
                }
            }(xt(t)))
        }

        function Vt(t) {
            return t.split("-")[1]
        }

        function Gt(t) {
            var e, i = t.reference,
                n = t.element,
                s = t.placement,
                o = s ? mt(s) : null,
                r = s ? Vt(s) : null,
                a = i.x + i.width / 2 - n.width / 2,
                l = i.y + i.height / 2 - n.height / 2;
            switch (o) {
                case it:
                    e = {
                        x: a,
                        y: i.y - n.height
                    };
                    break;
                case nt:
                    e = {
                        x: a,
                        y: i.y + i.height
                    };
                    break;
                case st:
                    e = {
                        x: i.x + i.width,
                        y: l
                    };
                    break;
                case ot:
                    e = {
                        x: i.x - n.width,
                        y: l
                    };
                    break;
                default:
                    e = {
                        x: i.x,
                        y: i.y
                    }
            }
            var h = o ? Dt(o) : null;
            if (null != h) {
                var c = "y" === h ? "height" : "width";
                switch (r) {
                    case "start":
                        e[h] = e[h] - (i[c] / 2 - n[c] / 2);
                        break;
                    case "end":
                        e[h] = e[h] + (i[c] / 2 - n[c] / 2)
                }
            }
            return e
        }

        function Qt(t, e) {
            void 0 === e && (e = {});
            var i = e,
                n = i.placement,
                s = void 0 === n ? t.placement : n,
                o = i.boundary,
                r = void 0 === o ? "clippingParents" : o,
                a = i.rootBoundary,
                l = void 0 === a ? "viewport" : a,
                h = i.elementContext,
                c = void 0 === h ? "popper" : h,
                u = i.altBoundary,
                d = void 0 !== u && u,
                p = i.padding,
                f = void 0 === p ? 0 : p,
                g = Pt("number" != typeof f ? f : Ot(f, rt)),
                m = "popper" === c ? "reference" : "popper",
                v = t.elements.reference,
                _ = t.rects.popper,
                b = t.elements[d ? m : c],
                y = function (t, e, i) {
                    var n = "clippingParents" === e ? function (t) {
                        var e = Ut(kt(t)),
                            i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && pt(t) ? Tt(t) : t;
                        return dt(i) ? e.filter((function (t) {
                            return dt(t) && bt(t, i) && "body" !== ct(t)
                        })) : []
                    }(t) : [].concat(e),
                        s = [].concat(n, [i]),
                        o = s[0],
                        r = s.reduce((function (e, i) {
                            var n = Kt(t, i);
                            return e.top = Et(n.top, e.top), e.right = St(n.right, e.right), e.bottom = St(n.bottom, e.bottom), e.left = Et(n.left, e.left), e
                        }), Kt(t, o));
                    return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
                }(dt(b) ? b : b.contextElement || xt(t.elements.popper), r, l),
                w = vt(v),
                x = Gt({
                    reference: w,
                    element: _,
                    strategy: "absolute",
                    placement: s
                }),
                k = $t(Object.assign({}, _, x)),
                C = "popper" === c ? k : w,
                T = {
                    top: y.top - C.top + g.top,
                    bottom: C.bottom - y.bottom + g.bottom,
                    left: y.left - C.left + g.left,
                    right: C.right - y.right + g.right
                },
                D = t.modifiersData.offset;
            if ("popper" === c && D) {
                var E = D[s];
                Object.keys(T).forEach((function (t) {
                    var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
                        i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
                    T[t] += E[i] * e
                }))
            }
            return T
        }
        var Jt = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name;
                if (!e.modifiersData[n]._skip) {
                    for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, h = i.padding, c = i.boundary, u = i.rootBoundary, d = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, g = i.allowedAutoPlacements, m = e.options.placement, v = mt(m), _ = l || (v !== m && f ? function (t) {
                        if ("auto" === mt(t)) return [];
                        var e = jt(t);
                        return [qt(t), e, qt(e)]
                    }(m) : [jt(m)]), b = [m].concat(_).reduce((function (t, i) {
                        return t.concat("auto" === mt(i) ? function (t, e) {
                            void 0 === e && (e = {});
                            var i = e,
                                n = i.placement,
                                s = i.boundary,
                                o = i.rootBoundary,
                                r = i.padding,
                                a = i.flipVariations,
                                l = i.allowedAutoPlacements,
                                h = void 0 === l ? lt : l,
                                c = Vt(n),
                                u = c ? a ? at : at.filter((function (t) {
                                    return Vt(t) === c
                                })) : rt,
                                d = u.filter((function (t) {
                                    return h.indexOf(t) >= 0
                                }));
                            0 === d.length && (d = u);
                            var p = d.reduce((function (e, i) {
                                return e[i] = Qt(t, {
                                    placement: i,
                                    boundary: s,
                                    rootBoundary: o,
                                    padding: r
                                })[mt(i)], e
                            }), {});
                            return Object.keys(p).sort((function (t, e) {
                                return p[t] - p[e]
                            }))
                        }(e, {
                            placement: i,
                            boundary: c,
                            rootBoundary: u,
                            padding: h,
                            flipVariations: f,
                            allowedAutoPlacements: g
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, x = new Map, k = !0, C = b[0], T = 0; T < b.length; T++) {
                        var D = b[T],
                            E = mt(D),
                            S = "start" === Vt(D),
                            A = [it, nt].indexOf(E) >= 0,
                            I = A ? "width" : "height",
                            P = Qt(e, {
                                placement: D,
                                boundary: c,
                                rootBoundary: u,
                                altBoundary: d,
                                padding: h
                            }),
                            O = A ? S ? st : ot : S ? nt : it;
                        y[I] > w[I] && (O = jt(O));
                        var M = jt(O),
                            N = [];
                        if (o && N.push(P[E] <= 0), a && N.push(P[O] <= 0, P[M] <= 0), N.every((function (t) {
                            return t
                        }))) {
                            C = D, k = !1;
                            break
                        }
                        x.set(D, N)
                    }
                    if (k)
                        for (var L = function (t) {
                            var e = b.find((function (e) {
                                var i = x.get(e);
                                if (i) return i.slice(0, t).every((function (t) {
                                    return t
                                }))
                            }));
                            if (e) return C = e, "break"
                        }, H = f ? 3 : 1; H > 0 && "break" !== L(H); H--);
                    e.placement !== C && (e.modifiersData[n]._skip = !0, e.placement = C, e.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };

        function Zt(t, e, i) {
            return void 0 === i && (i = {
                x: 0,
                y: 0
            }), {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x
            }
        }

        function te(t) {
            return [it, st, nt, ot].some((function (e) {
                return t[e] >= 0
            }))
        }
        var ee = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Qt(e, {
                        elementContext: "reference"
                    }),
                    a = Qt(e, {
                        altBoundary: !0
                    }),
                    l = Zt(r, n),
                    h = Zt(a, s, o),
                    c = te(l),
                    u = te(h);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: h,
                    isReferenceHidden: c,
                    hasPopperEscaped: u
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": c,
                    "data-popper-escaped": u
                })
            }
        },
            ie = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        s = i.offset,
                        o = void 0 === s ? [0, 0] : s,
                        r = lt.reduce((function (t, i) {
                            return t[i] = function (t, e, i) {
                                var n = mt(t),
                                    s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                                    o = "function" == typeof i ? i(Object.assign({}, e, {
                                        placement: t
                                    })) : i,
                                    r = o[0],
                                    a = o[1];
                                return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
                                    x: a,
                                    y: r
                                } : {
                                    x: r,
                                    y: a
                                }
                            }(i, e.rects, o), t
                        }), {}),
                        a = r[e.placement],
                        l = a.x,
                        h = a.y;
                    null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += h), e.modifiersData[n] = r
                }
            },
            ne = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (t) {
                    var e = t.state,
                        i = t.name;
                    e.modifiersData[i] = Gt({
                        reference: e.rects.reference,
                        element: e.rects.popper,
                        strategy: "absolute",
                        placement: e.placement
                    })
                },
                data: {}
            },
            se = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 !== r && r,
                        l = i.boundary,
                        h = i.rootBoundary,
                        c = i.altBoundary,
                        u = i.padding,
                        d = i.tether,
                        p = void 0 === d || d,
                        f = i.tetherOffset,
                        g = void 0 === f ? 0 : f,
                        m = Qt(e, {
                            boundary: l,
                            rootBoundary: h,
                            padding: u,
                            altBoundary: c
                        }),
                        v = mt(e.placement),
                        _ = Vt(e.placement),
                        b = !_,
                        y = Dt(v),
                        w = "x" === y ? "y" : "x",
                        x = e.modifiersData.popperOffsets,
                        k = e.rects.reference,
                        C = e.rects.popper,
                        T = "function" == typeof g ? g(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : g,
                        D = {
                            x: 0,
                            y: 0
                        };
                    if (x) {
                        if (o || a) {
                            var E = "y" === y ? it : ot,
                                S = "y" === y ? nt : st,
                                A = "y" === y ? "height" : "width",
                                I = x[y],
                                P = x[y] + m[E],
                                O = x[y] - m[S],
                                M = p ? -C[A] / 2 : 0,
                                N = "start" === _ ? k[A] : C[A],
                                L = "start" === _ ? -C[A] : -k[A],
                                H = e.elements.arrow,
                                W = p && H ? _t(H) : {
                                    width: 0,
                                    height: 0
                                },
                                R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                z = R[E],
                                j = R[S],
                                F = It(0, k[A], W[A]),
                                q = b ? k[A] / 2 - M - F - z - T : N - F - z - T,
                                B = b ? -k[A] / 2 + M + F + j + T : L + F + j + T,
                                Y = e.elements.arrow && Tt(e.elements.arrow),
                                X = Y ? "y" === y ? Y.clientTop || 0 : Y.clientLeft || 0 : 0,
                                U = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                                $ = x[y] + q - U - X,
                                K = x[y] + B - U;
                            if (o) {
                                var V = It(p ? St(P, $) : P, I, p ? Et(O, K) : O);
                                x[y] = V, D[y] = V - I
                            }
                            if (a) {
                                var G = "x" === y ? it : ot,
                                    Q = "x" === y ? nt : st,
                                    J = x[w],
                                    Z = J + m[G],
                                    tt = J - m[Q],
                                    et = It(p ? St(Z, $) : Z, J, p ? Et(tt, K) : tt);
                                x[w] = et, D[w] = et - J
                            }
                        }
                        e.modifiersData[n] = D
                    }
                },
                requiresIfExists: ["offset"]
            };

        function oe(t, e, i) {
            void 0 === i && (i = !1);
            var n, s, o = xt(e),
                r = vt(t),
                a = pt(e),
                l = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                h = {
                    x: 0,
                    y: 0
                };
            return (a || !a && !i) && (("body" !== ct(e) || Xt(o)) && (l = (n = e) !== ut(n) && pt(n) ? {
                scrollLeft: (s = n).scrollLeft,
                scrollTop: s.scrollTop
            } : Bt(n)), pt(e) ? ((h = vt(e)).x += e.clientLeft, h.y += e.clientTop) : o && (h.x = Yt(o))), {
                x: r.left + l.scrollLeft - h.x,
                y: r.top + l.scrollTop - h.y,
                width: r.width,
                height: r.height
            }
        }
        var re = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function ae() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return !e.some((function (t) {
                return !(t && "function" == typeof t.getBoundingClientRect)
            }))
        }

        function le(t) {
            void 0 === t && (t = {});
            var e = t,
                i = e.defaultModifiers,
                n = void 0 === i ? [] : i,
                s = e.defaultOptions,
                o = void 0 === s ? re : s;
            return function (t, e, i) {
                void 0 === i && (i = o);
                var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, re, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                    l = [],
                    h = !1,
                    c = {
                        state: a,
                        setOptions: function (i) {
                            u(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
                                reference: dt(t) ? Ut(t) : t.contextElement ? Ut(t.contextElement) : [],
                                popper: Ut(e)
                            };
                            var s, r, h = function (t) {
                                var e = function (t) {
                                    var e = new Map,
                                        i = new Set,
                                        n = [];
                                    return t.forEach((function (t) {
                                        e.set(t.name, t)
                                    })), t.forEach((function (t) {
                                        i.has(t.name) || function t(s) {
                                            i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (n) {
                                                if (!i.has(n)) {
                                                    var s = e.get(n);
                                                    s && t(s)
                                                }
                                            })), n.push(s)
                                        }(t)
                                    })), n
                                }(t);
                                return ht.reduce((function (t, i) {
                                    return t.concat(e.filter((function (t) {
                                        return t.phase === i
                                    })))
                                }), [])
                            }((s = [].concat(n, a.options.modifiers), r = s.reduce((function (t, e) {
                                var i = t[e.name];
                                return t[e.name] = i ? Object.assign({}, i, e, {
                                    options: Object.assign({}, i.options, e.options),
                                    data: Object.assign({}, i.data, e.data)
                                }) : e, t
                            }), {}), Object.keys(r).map((function (t) {
                                return r[t]
                            }))));
                            return a.orderedModifiers = h.filter((function (t) {
                                return t.enabled
                            })), a.orderedModifiers.forEach((function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: c,
                                        options: n
                                    });
                                    l.push(o || function () { })
                                }
                            })), c.update()
                        },
                        forceUpdate: function () {
                            if (!h) {
                                var t = a.elements,
                                    e = t.reference,
                                    i = t.popper;
                                if (ae(e, i)) {
                                    a.rects = {
                                        reference: oe(e, Tt(i), "fixed" === a.options.strategy),
                                        popper: _t(i)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                        return a.modifiersData[t.name] = Object.assign({}, t.data)
                                    }));
                                    for (var n = 0; n < a.orderedModifiers.length; n++)
                                        if (!0 !== a.reset) {
                                            var s = a.orderedModifiers[n],
                                                o = s.fn,
                                                r = s.options,
                                                l = void 0 === r ? {} : r,
                                                u = s.name;
                                            "function" == typeof o && (a = o({
                                                state: a,
                                                options: l,
                                                name: u,
                                                instance: c
                                            }) || a)
                                        } else a.reset = !1, n = -1
                                }
                            }
                        },
                        update: (s = function () {
                            return new Promise((function (t) {
                                c.forceUpdate(), t(a)
                            }))
                        }, function () {
                            return r || (r = new Promise((function (t) {
                                Promise.resolve().then((function () {
                                    r = void 0, t(s())
                                }))
                            }))), r
                        }),
                        destroy: function () {
                            u(), h = !0
                        }
                    };
                if (!ae(t, e)) return c;

                function u() {
                    l.forEach((function (t) {
                        return t()
                    })), l = []
                }
                return c.setOptions(i).then((function (t) {
                    !h && i.onFirstUpdate && i.onFirstUpdate(t)
                })), c
            }
        }
        var he = le(),
            ce = le({
                defaultModifiers: [Rt, ne, Ht, gt]
            }),
            ue = le({
                defaultModifiers: [Rt, ne, Ht, gt, ie, Jt, se, Mt, ee]
            }),
            de = Object.freeze({
                __proto__: null,
                popperGenerator: le,
                detectOverflow: Qt,
                createPopperBase: he,
                createPopper: ue,
                createPopperLite: ce,
                top: it,
                bottom: nt,
                right: st,
                left: ot,
                auto: "auto",
                basePlacements: rt,
                start: "start",
                end: "end",
                clippingParents: "clippingParents",
                viewport: "viewport",
                popper: "popper",
                reference: "reference",
                variationPlacements: at,
                placements: lt,
                beforeRead: "beforeRead",
                read: "read",
                afterRead: "afterRead",
                beforeMain: "beforeMain",
                main: "main",
                afterMain: "afterMain",
                beforeWrite: "beforeWrite",
                write: "write",
                afterWrite: "afterWrite",
                modifierPhases: ht,
                applyStyles: gt,
                arrow: Mt,
                computeStyles: Ht,
                eventListeners: Rt,
                flip: Jt,
                hide: ee,
                offset: ie,
                popperOffsets: ne,
                preventOverflow: se
            });
        const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
            fe = m() ? "top-end" : "top-start",
            ge = m() ? "top-start" : "top-end",
            me = m() ? "bottom-end" : "bottom-start",
            ve = m() ? "bottom-start" : "bottom-end",
            _e = m() ? "left-start" : "right-start",
            be = m() ? "right-start" : "left-start",
            ye = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0
            },
            we = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)"
            };
        class xe extends z {
            constructor(t, e) {
                super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            static get Default() {
                return ye
            }
            static get DefaultType() {
                return we
            }
            static get NAME() {
                return "dropdown"
            }
            toggle() {
                c(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
            }
            show() {
                if (c(this._element) || this._menu.classList.contains("show")) return;
                const t = xe.getParentFromElement(this._element),
                    e = {
                        relatedTarget: this._element
                    };
                if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (this._inNavbar) Y.setDataAttribute(this._menu, "popper", "none");
                    else {
                        if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        let e = this._element;
                        "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = a(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                        const i = this._getPopperConfig(),
                            n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                        this._popper = ue(e, this._menu, i), n && Y.setDataAttribute(this._menu, "popper", "static")
                    }
                    "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => H.on(t, "mouseover", d)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(this._element, "shown.bs.dropdown", e)
                }
            }
            hide() {
                if (c(this._element) || !this._menu.classList.contains("show")) return;
                const t = {
                    relatedTarget: this._element
                };
                this._completeHide(t)
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }
            _addEventListeners() {
                H.on(this._element, "click.bs.dropdown", t => {
                    t.preventDefault(), this.toggle()
                })
            }
            _completeHide(t) {
                H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => H.off(t, "mouseover", d)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Y.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t))
            }
            _getConfig(t) {
                if (t = {
                    ...this.constructor.Default,
                    ...Y.getDataAttributes(this._element),
                    ...t
                }, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
                return t
            }
            _getMenuElement() {
                return t.next(this._element, ".dropdown-menu")[0]
            }
            _getPlacement() {
                const t = this._element.parentNode;
                if (t.classList.contains("dropend")) return _e;
                if (t.classList.contains("dropstart")) return be;
                const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? ge : fe : e ? ve : me
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar")
            }
            _getOffset() {
                const {
                    offset: t
                } = this._config;
                return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
            }
            _getPopperConfig() {
                const t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), {
                    ...t,
                    ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                }
            }
            _selectMenuItem({
                key: e,
                target: i
            }) {
                const n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
                n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus()
            }
            static dropdownInterface(t, e) {
                const i = xe.getOrCreateInstance(t, e);
                if ("string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                    i[e]()
                }
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    xe.dropdownInterface(this, t)
                }))
            }
            static clearMenus(e) {
                if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
                const i = t.find('[data-bs-toggle="dropdown"]');
                for (let t = 0, n = i.length; t < n; t++) {
                    const n = xe.getInstance(i[t]);
                    if (!n || !1 === n._config.autoClose) continue;
                    if (!n._element.classList.contains("show")) continue;
                    const s = {
                        relatedTarget: n._element
                    };
                    if (e) {
                        const t = e.composedPath(),
                            i = t.includes(n._menu);
                        if (t.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                        if (n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                        "click" === e.type && (s.clickEvent = e)
                    }
                    n._completeHide(s)
                }
            }
            static getParentFromElement(t) {
                return s(t) || t.parentNode
            }
            static dataApiKeydownHandler(e) {
                if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !pe.test(e.key)) return;
                const i = this.classList.contains("show");
                if (!i && "Escape" === e.key) return;
                if (e.preventDefault(), e.stopPropagation(), c(this)) return;
                const n = () => this.matches('[data-bs-toggle="dropdown"]') ? this : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
                return "Escape" === e.key ? (n().focus(), void xe.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (i || n().click(), void xe.getInstance(n())._selectMenuItem(e)) : void (i && "Space" !== e.key || xe.clearMenus())
            }
        }
        H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', xe.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", xe.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", xe.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", xe.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
            t.preventDefault(), xe.dropdownInterface(this)
        })), v(xe);
        class ke {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const t = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t)
            }
            hide() {
                const t = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
            }
            _setElementAttributes(t, e, i) {
                const n = this.getWidth();
                this._applyManipulationCallback(t, t => {
                    if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                    this._saveInitialAttribute(t, e);
                    const s = window.getComputedStyle(t)[e];
                    t.style[e] = i(Number.parseFloat(s)) + "px"
                })
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
            }
            _saveInitialAttribute(t, e) {
                const i = t.style[e];
                i && Y.setDataAttribute(t, e, i)
            }
            _resetElementAttributes(t, e) {
                this._applyManipulationCallback(t, t => {
                    const i = Y.getDataAttribute(t, e);
                    void 0 === i ? t.style.removeProperty(e) : (Y.removeDataAttribute(t, e), t.style[e] = i)
                })
            }
            _applyManipulationCallback(e, i) {
                r(e) ? i(e) : t.find(e, this._element).forEach(i)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
        }
        const Ce = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
            Te = {
                isVisible: "boolean",
                isAnimated: "boolean",
                rootElement: "(element|string)",
                clickCallback: "(function|null)"
            };
        class De {
            constructor(t) {
                this._config = this._getConfig(t), this._isAppended = !1, this._element = null
            }
            show(t) {
                this._config.isVisible ? (this._append(), this._config.isAnimated && p(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                    _(t)
                })) : _(t)
            }
            hide(t) {
                this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                    this.dispose(), _(t)
                })) : _(t)
            }
            _getElement() {
                if (!this._element) {
                    const t = document.createElement("div");
                    t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
                }
                return this._element
            }
            _getConfig(t) {
                return (t = {
                    ...Ce,
                    ..."object" == typeof t ? t : {}
                }).rootElement = a(t.rootElement), l("backdrop", t, Te), t
            }
            _append() {
                this._isAppended || (this._config.rootElement.appendChild(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", () => {
                    _(this._config.clickCallback)
                }), this._isAppended = !0)
            }
            dispose() {
                this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
            }
            _emulateAnimation(t) {
                b(t, this._getElement(), this._config.isAnimated)
            }
        }
        const Ee = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
            Se = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean"
            };
        class Ae extends z {
            constructor(e, i) {
                super(e), this._config = this._getConfig(i), this._dialog = t.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ke
            }
            static get Default() {
                return Ee
            }
            static get NAME() {
                return "modal"
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            show(t) {
                this._isShown || this._isTransitioning || H.trigger(this._element, "show.bs.modal", {
                    relatedTarget: t
                }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), H.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                    H.one(this._element, "mouseup.dismiss.bs.modal", t => {
                        t.target === this._element && (this._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(() => this._showElement(t)))
            }
            hide(t) {
                if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
                if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                this._isShown = !1;
                const e = this._isAnimated();
                e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
            }
            dispose() {
                [window, this._dialog].forEach(t => H.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.modal")
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new De({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                })
            }
            _getConfig(t) {
                return t = {
                    ...Ee,
                    ...Y.getDataAttributes(this._element),
                    ..."object" == typeof t ? t : {}
                }, l("modal", t, Se), t
            }
            _showElement(e) {
                const i = this._isAnimated(),
                    n = t.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && p(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
                    this._config.focus && this._element.focus(), this._isTransitioning = !1, H.trigger(this._element, "shown.bs.modal", {
                        relatedTarget: e
                    })
                }, this._dialog, i)
            }
            _enforceFocus() {
                H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", t => {
                    document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
                })
            }
            _setEscapeEvent() {
                this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", t => {
                    this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
                }) : H.off(this._element, "keydown.dismiss.bs.modal")
            }
            _setResizeEvent() {
                this._isShown ? H.on(window, "resize.bs.modal", () => this._adjustDialog()) : H.off(window, "resize.bs.modal")
            }
            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                    document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), H.trigger(this._element, "hidden.bs.modal")
                })
            }
            _showBackdrop(t) {
                H.on(this._element, "click.dismiss.bs.modal", t => {
                    this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                }), this._backdrop.show(t)
            }
            _isAnimated() {
                return this._element.classList.contains("fade")
            }
            _triggerBackdropTransition() {
                if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                const {
                    classList: t,
                    scrollHeight: e,
                    style: i
                } = this._element, n = e > document.documentElement.clientHeight;
                !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(() => {
                    t.remove("modal-static"), n || this._queueCallback(() => {
                        i.overflowY = ""
                    }, this._dialog)
                }, this._dialog), this._element.focus())
            }
            _adjustDialog() {
                const t = this._element.scrollHeight > document.documentElement.clientHeight,
                    e = this._scrollBar.getWidth(),
                    i = e > 0;
                (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = e + "px")
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }
            static jQueryInterface(t, e) {
                return this.each((function () {
                    const i = Ae.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                        i[t](e)
                    }
                }))
            }
        }
        H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
            const e = s(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, "show.bs.modal", t => {
                t.defaultPrevented || H.one(e, "hidden.bs.modal", () => {
                    h(this) && this.focus()
                })
            }), Ae.getOrCreateInstance(e).toggle(this)
        })), v(Ae);
        const Ie = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
            Pe = {
                backdrop: "boolean",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class Oe extends z {
            constructor(t, e) {
                super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
            }
            static get NAME() {
                return "offcanvas"
            }
            static get Default() {
                return Ie
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            show(t) {
                this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: t
                }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new ke).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                    H.trigger(this._element, "shown.bs.offcanvas", {
                        relatedTarget: t
                    })
                }, this._element, !0))
            }
            hide() {
                this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (H.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                    this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new ke).reset(), H.trigger(this._element, "hidden.bs.offcanvas")
                }, this._element, !0)))
            }
            dispose() {
                this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.offcanvas")
            }
            _getConfig(t) {
                return t = {
                    ...Ie,
                    ...Y.getDataAttributes(this._element),
                    ..."object" == typeof t ? t : {}
                }, l("offcanvas", t, Pe), t
            }
            _initializeBackDrop() {
                return new De({
                    isVisible: this._config.backdrop,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: () => this.hide()
                })
            }
            _enforceFocusOnElement(t) {
                H.off(document, "focusin.bs.offcanvas"), H.on(document, "focusin.bs.offcanvas", e => {
                    document === e.target || t === e.target || t.contains(e.target) || t.focus()
                }), t.focus()
            }
            _addEventListeners() {
                H.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), H.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                    this._config.keyboard && "Escape" === t.key && this.hide()
                })
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = Oe.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t](this)
                    }
                }))
            }
        }
        H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (e) {
            const i = s(this);
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), c(this)) return;
            H.one(i, "hidden.bs.offcanvas", () => {
                h(this) && this.focus()
            });
            const n = t.findOne(".offcanvas.show");
            n && n !== i && Oe.getInstance(n).hide(), Oe.getOrCreateInstance(i).toggle(this)
        })), H.on(window, "load.bs.offcanvas.data-api", () => t.find(".offcanvas.show").forEach(t => Oe.getOrCreateInstance(t).show())), v(Oe);
        const Me = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
            Le = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            He = (t, e) => {
                const i = t.nodeName.toLowerCase();
                if (e.includes(i)) return !Me.has(i) || Boolean(Ne.test(t.nodeValue) || Le.test(t.nodeValue));
                const n = e.filter(t => t instanceof RegExp);
                for (let t = 0, e = n.length; t < e; t++)
                    if (n[t].test(i)) return !0;
                return !1
            };

        function We(t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = (new window.DOMParser).parseFromString(t, "text/html"),
                s = Object.keys(e),
                o = [].concat(...n.body.querySelectorAll("*"));
            for (let t = 0, i = o.length; t < i; t++) {
                const i = o[t],
                    n = i.nodeName.toLowerCase();
                if (!s.includes(n)) {
                    i.remove();
                    continue
                }
                const r = [].concat(...i.attributes),
                    a = [].concat(e["*"] || [], e[n] || []);
                r.forEach(t => {
                    He(t, a) || i.removeAttribute(t.nodeName)
                })
            }
            return n.body.innerHTML
        }
        const Re = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            ze = new Set(["sanitize", "allowList", "sanitizeFn"]),
            je = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)"
            },
            Fe = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: m() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: m() ? "right" : "left"
            },
            qe = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                popperConfig: null
            },
            Be = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            };
        class Ye extends z {
            constructor(t, e) {
                if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            static get Default() {
                return qe
            }
            static get NAME() {
                return "tooltip"
            }
            static get Event() {
                return Be
            }
            static get DefaultType() {
                return je
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle(t) {
                if (this._isEnabled)
                    if (t) {
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            dispose() {
                clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this.isWithContent() || !this._isEnabled) return;
                const t = H.trigger(this._element, this.constructor.Event.SHOW),
                    i = u(this._element),
                    n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
                if (t.defaultPrevented || !n) return;
                const s = this.getTipElement(),
                    o = e(this.constructor.NAME);
                s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");
                const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                    a = this._getAttachment(r);
                this._addAttachmentClass(a);
                const {
                    container: l
                } = this._config;
                R.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ue(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
                const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
                h && s.classList.add(...h.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                    H.on(t, "mouseover", d)
                });
                const c = this.tip.classList.contains("fade");
                this._queueCallback(() => {
                    const t = this._hoverState;
                    this._hoverState = null, H.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
                }, this.tip, c)
            }
            hide() {
                if (!this._popper) return;
                const t = this.getTipElement();
                if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => H.off(t, "mouseover", d)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                const e = this.tip.classList.contains("fade");
                this._queueCallback(() => {
                    this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                }, this.tip, e), this._hoverState = ""
            }
            update() {
                null !== this._popper && this._popper.update()
            }
            isWithContent() {
                return Boolean(this.getTitle())
            }
            getTipElement() {
                if (this.tip) return this.tip;
                const t = document.createElement("div");
                return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
            }
            setContent() {
                const e = this.getTipElement();
                this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show")
            }
            setElementContent(t, e) {
                if (null !== t) return r(e) ? (e = a(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = We(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }
            getTitle() {
                let t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
            }
            updateAttachment(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }
            _initializeOnDelegatedTarget(t, e) {
                const i = this.constructor.DATA_KEY;
                return (e = e || R.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), R.set(t.delegateTarget, i, e)), e
            }
            _getOffset() {
                const {
                    offset: t
                } = this._config;
                return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
            }
            _getPopperConfig(t) {
                const e = {
                    placement: t,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: t => this._handlePopperPlacementChange(t)
                    }],
                    onFirstUpdate: t => {
                        t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                    }
                };
                return {
                    ...e,
                    ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                }
            }
            _addAttachmentClass(t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }
            _getAttachment(t) {
                return Fe[t.toUpperCase()]
            }
            _setListeners() {
                this._config.trigger.split(" ").forEach(t => {
                    if ("click" === t) H.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                    else if ("manual" !== t) {
                        const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                            i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                        H.on(this._element, e, this._config.selector, t => this._enter(t)), H.on(this._element, i, this._config.selector, t => this._leave(t))
                    }
                }), this._hideModalHandler = () => {
                    this._element && this.hide()
                }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
                    ...this._config,
                    trigger: "manual",
                    selector: ""
                } : this._fixTitle()
            }
            _fixTitle() {
                const t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }
            _enter(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                    "show" === e._hoverState && e.show()
                }, e._config.delay.show) : e.show())
            }
            _leave(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                    "out" === e._hoverState && e.hide()
                }, e._config.delay.hide) : e.hide())
            }
            _isWithActiveTrigger() {
                for (const t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }
            _getConfig(t) {
                const e = Y.getDataAttributes(this._element);
                return Object.keys(e).forEach(t => {
                    ze.has(t) && delete e[t]
                }), (t = {
                    ...this.constructor.Default,
                    ...e,
                    ..."object" == typeof t && t ? t : {}
                }).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = We(t.template, t.allowList, t.sanitizeFn)), t
            }
            _getDelegateConfig() {
                const t = {};
                if (this._config)
                    for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                return t
            }
            _cleanTipClass() {
                const t = this.getTipElement(),
                    e = t.getAttribute("class").match(Re);
                null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
            }
            _handlePopperPlacementChange(t) {
                const {
                    state: e
                } = t;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = Ye.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }
        v(Ye);
        const Xe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            Ue = {
                ...Ye.Default,
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            },
            $e = {
                ...Ye.DefaultType,
                content: "(string|element|function)"
            },
            Ke = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            };
        class Ve extends Ye {
            static get Default() {
                return Ue
            }
            static get NAME() {
                return "popover"
            }
            static get Event() {
                return Ke
            }
            static get DefaultType() {
                return $e
            }
            isWithContent() {
                return this.getTitle() || this._getContent()
            }
            getTipElement() {
                return this.tip || (this.tip = super.getTipElement(), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip
            }
            setContent() {
                const e = this.getTipElement();
                this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
                let i = this._getContent();
                "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show")
            }
            _addAttachmentClass(t) {
                this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
            }
            _getContent() {
                return this._element.getAttribute("data-bs-content") || this._config.content
            }
            _cleanTipClass() {
                const t = this.getTipElement(),
                    e = t.getAttribute("class").match(Xe);
                null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = Ve.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }
        v(Ve);
        const Ge = {
            offset: 10,
            method: "auto",
            target: ""
        },
            Qe = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            };
        class Je extends z {
            constructor(t, e) {
                super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, H.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
            }
            static get Default() {
                return Ge
            }
            static get NAME() {
                return "scrollspy"
            }
            refresh() {
                const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    i = "auto" === this._config.method ? e : this._config.method,
                    s = "position" === i ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(e => {
                    const o = n(e),
                        r = o ? t.findOne(o) : null;
                    if (r) {
                        const t = r.getBoundingClientRect();
                        if (t.width || t.height) return [Y[i](r).top + s, o]
                    }
                    return null
                }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                    this._offsets.push(t[0]), this._targets.push(t[1])
                })
            }
            dispose() {
                H.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
            }
            _getConfig(t) {
                if ("string" != typeof (t = {
                    ...Ge,
                    ...Y.getDataAttributes(this._element),
                    ..."object" == typeof t && t ? t : {}
                }).target && r(t.target)) {
                    let {
                        id: i
                    } = t.target;
                    i || (i = e("scrollspy"), t.target.id = i), t.target = "#" + i
                }
                return l("scrollspy", t, Qe), t
            }
            _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            _process() {
                const t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= i) {
                    const t = this._targets[this._targets.length - 1];
                    this._activeTarget !== t && this._activate(t)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
            _activate(e) {
                this._activeTarget = e, this._clear();
                const i = this._selector.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                    n = t.findOne(i.join(","));
                n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(e => {
                    t.prev(e, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), t.prev(e, ".nav-item").forEach(e => {
                        t.children(e, ".nav-link").forEach(t => t.classList.add("active"))
                    })
                })), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: e
                })
            }
            _clear() {
                t.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = Je.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }
        H.on(window, "load.bs.scrollspy.data-api", () => {
            t.find('[data-bs-spy="scroll"]').forEach(t => new Je(t))
        }), v(Je);
        class Ze extends z {
            static get NAME() {
                return "tab"
            }
            show() {
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
                let e;
                const i = s(this._element),
                    n = this._element.closest(".nav, .list-group");
                if (n) {
                    const i = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                    e = t.find(i, n), e = e[e.length - 1]
                }
                const o = e ? H.trigger(e, "hide.bs.tab", {
                    relatedTarget: this._element
                }) : null;
                if (H.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== o && o.defaultPrevented) return;
                this._activate(this._element, n);
                const r = () => {
                    H.trigger(e, "hidden.bs.tab", {
                        relatedTarget: this._element
                    }), H.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: e
                    })
                };
                i ? this._activate(i, i.parentNode, r) : r()
            }
            _activate(e, i, n) {
                const s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
                    o = n && s && s.classList.contains("fade"),
                    r = () => this._transitionComplete(e, s, n);
                s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
            }
            _transitionComplete(e, i, n) {
                if (i) {
                    i.classList.remove("active");
                    const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
                    e && e.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), p(e), e.classList.contains("fade") && e.classList.add("show");
                let s = e.parentNode;
                if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
                    const i = e.closest(".dropdown");
                    i && t.find(".dropdown-toggle", i).forEach(t => t.classList.add("active")), e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = Ze.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }
        H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || Ze.getOrCreateInstance(this).show()
        })), v(Ze);
        const ti = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
            ei = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class ii extends z {
            constructor(t, e) {
                super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
            }
            static get DefaultType() {
                return ti
            }
            static get Default() {
                return ei
            }
            static get NAME() {
                return "toast"
            }
            show() {
                H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), p(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
                    this._element.classList.remove("showing"), this._element.classList.add("show"), H.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                }, this._element, this._config.animation))
            }
            hide() {
                this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
                    this._element.classList.add("hide"), H.trigger(this._element, "hidden.bs.toast")
                }, this._element, this._config.animation)))
            }
            dispose() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
            }
            _getConfig(t) {
                return t = {
                    ...ei,
                    ...Y.getDataAttributes(this._element),
                    ..."object" == typeof t && t ? t : {}
                }, l("toast", t, this.constructor.DefaultType), t
            }
            _maybeScheduleHide() {
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                    this.hide()
                }, this._config.delay)))
            }
            _onInteraction(t, e) {
                switch (t.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = e;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = e
                }
                if (e) return void this._clearTimeout();
                const i = t.relatedTarget;
                this._element === i || this._element.contains(i) || this._maybeScheduleHide()
            }
            _setListeners() {
                H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), H.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), H.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), H.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), H.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
            }
            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }
            static jQueryInterface(t) {
                return this.each((function () {
                    const e = ii.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t](this)
                    }
                }))
            }
        }
        return v(ii), {
            Alert: j,
            Button: F,
            Carousel: J,
            Collapse: et,
            Dropdown: xe,
            Modal: Ae,
            Offcanvas: Oe,
            Popover: Ve,
            ScrollSpy: Je,
            Tab: Ze,
            Toast: ii,
            Tooltip: Ye
        }
    })),
    /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).PerfectScrollbar = e()
    }(this, (function () {
        "use strict";
        var t = Math.abs,
            e = Math.floor;

        function i(t) {
            return getComputedStyle(t)
        }

        function n(t, e) {
            for (var i in e) {
                var n = e[i];
                "number" == typeof n && (n += "px"), t.style[i] = n
            }
            return t
        }

        function s(t) {
            var e = document.createElement("div");
            return e.className = t, e
        }

        function o(t, e) {
            if (!b) throw new Error("No element matching method supported");
            return b.call(t, e)
        }

        function r(t) {
            t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }

        function a(t, e) {
            return Array.prototype.filter.call(t.children, (function (t) {
                return o(t, e)
            }))
        }

        function l(t, e) {
            var i = t.element.classList,
                n = y.state.scrolling(e);
            i.contains(n) ? clearTimeout(w[e]) : i.add(n)
        }

        function h(t, e) {
            w[e] = setTimeout((function () {
                return t.isAlive && t.element.classList.remove(y.state.scrolling(e))
            }), t.settings.scrollingThreshold)
        }

        function c(t, e) {
            l(t, e), h(t, e)
        }

        function u(t) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
            var e = document.createEvent("CustomEvent");
            return e.initCustomEvent(t, !1, !1, void 0), e
        }

        function d(t, e, i, n, s) {
            var o;
            if (void 0 === n && (n = !0), void 0 === s && (s = !1), "top" === e) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== e) throw new Error("A proper axis should be provided");
                o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
            } ! function (t, e, i, n, s) {
                var o = i[0],
                    r = i[1],
                    a = i[2],
                    l = i[3],
                    h = i[4],
                    d = i[5];
                void 0 === n && (n = !0), void 0 === s && (s = !1);
                var p = t.element;
                t.reach[l] = null, 1 > p[a] && (t.reach[l] = "start"), p[a] > t[o] - t[r] - 1 && (t.reach[l] = "end"), e && (p.dispatchEvent(u("ps-scroll-" + l)), 0 > e ? p.dispatchEvent(u("ps-scroll-" + h)) : 0 < e && p.dispatchEvent(u("ps-scroll-" + d)), n && c(t, l)), t.reach[l] && (e || s) && p.dispatchEvent(u("ps-" + l + "-reach-" + t.reach[l]))
            }(t, i, o, n, s)
        }

        function p(t) {
            return parseInt(t, 10) || 0
        }

        function f(t) {
            return o(t, "input,[contenteditable]") || o(t, "select,[contenteditable]") || o(t, "textarea,[contenteditable]") || o(t, "button,[contenteditable]")
        }

        function g(t) {
            var i = Math.ceil,
                n = t.element,
                s = e(n.scrollTop),
                o = n.getBoundingClientRect();
            t.containerWidth = i(o.width), t.containerHeight = i(o.height), t.contentWidth = n.scrollWidth, t.contentHeight = n.scrollHeight, n.contains(t.scrollbarXRail) || (a(n, y.element.rail("x")).forEach((function (t) {
                return r(t)
            })), n.appendChild(t.scrollbarXRail)), n.contains(t.scrollbarYRail) || (a(n, y.element.rail("y")).forEach((function (t) {
                return r(t)
            })), n.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = m(t, p(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = p((t.negativeScrollAdjustment + n.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = m(t, p(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = p(s * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), v(n, t), t.scrollbarXActive ? n.classList.add(y.state.active("x")) : (n.classList.remove(y.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, n.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? n.classList.add(y.state.active("y")) : (n.classList.remove(y.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, n.scrollTop = 0)
        }

        function m(t, e) {
            var i = Math.min,
                n = Math.max;
            return t.settings.minScrollbarLength && (e = n(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = i(e, t.settings.maxScrollbarLength)), e
        }

        function v(t, i) {
            var s = {
                width: i.railXWidth
            },
                o = e(t.scrollTop);
            s.left = i.isRtl ? i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : t.scrollLeft, i.isScrollbarXUsingBottom ? s.bottom = i.scrollbarXBottom - o : s.top = i.scrollbarXTop + o, n(i.scrollbarXRail, s);
            var r = {
                top: o,
                height: i.railYHeight
            };
            i.isScrollbarYUsingRight ? i.isRtl ? r.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9 : r.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : r.left = i.scrollbarYLeft + t.scrollLeft, n(i.scrollbarYRail, r), n(i.scrollbarX, {
                left: i.scrollbarXLeft,
                width: i.scrollbarXWidth - i.railBorderXWidth
            }), n(i.scrollbarY, {
                top: i.scrollbarYTop,
                height: i.scrollbarYHeight - i.railBorderYWidth
            })
        }

        function _(t, e) {
            function i(e) {
                e.touches && e.touches[0] && (e[a] = e.touches[0].pageY), v[p] = _ + w * (e[a] - b), l(t, f), g(t), e.stopPropagation(), e.preventDefault()
            }

            function n() {
                h(t, f), t[m].classList.remove(y.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i)
            }

            function s(e, s) {
                _ = v[p], s && e.touches && (e[a] = e.touches[0].pageY), b = e[a], w = (t[r] - t[o]) / (t[c] - t[d]), s ? t.event.bind(t.ownerDocument, "touchmove", i) : (t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", n), e.preventDefault()), t[m].classList.add(y.state.clicking), e.stopPropagation()
            }
            var o = e[0],
                r = e[1],
                a = e[2],
                c = e[3],
                u = e[4],
                d = e[5],
                p = e[6],
                f = e[7],
                m = e[8],
                v = t.element,
                _ = null,
                b = null,
                w = null;
            t.event.bind(t[u], "mousedown", (function (t) {
                s(t)
            })), t.event.bind(t[u], "touchstart", (function (t) {
                s(t, !0)
            }))
        }
        var b = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            y = {
                main: "ps",
                rtl: "ps__rtl",
                element: {
                    thumb: function (t) {
                        return "ps__thumb-" + t
                    },
                    rail: function (t) {
                        return "ps__rail-" + t
                    },
                    consuming: "ps__child--consume"
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function (t) {
                        return "ps--active-" + t
                    },
                    scrolling: function (t) {
                        return "ps--scrolling-" + t
                    }
                }
            },
            w = {
                x: null,
                y: null
            },
            x = function (t) {
                this.element = t, this.handlers = {}
            },
            k = {
                isEmpty: {
                    configurable: !0
                }
            };
        x.prototype.bind = function (t, e) {
            void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
        }, x.prototype.unbind = function (t, e) {
            var i = this;
            this.handlers[t] = this.handlers[t].filter((function (n) {
                return !(!e || n === e) || (i.element.removeEventListener(t, n, !1), !1)
            }))
        }, x.prototype.unbindAll = function () {
            for (var t in this.handlers) this.unbind(t)
        }, k.isEmpty.get = function () {
            var t = this;
            return Object.keys(this.handlers).every((function (e) {
                return 0 === t.handlers[e].length
            }))
        }, Object.defineProperties(x.prototype, k);
        var C = function () {
            this.eventElements = []
        };
        C.prototype.eventElement = function (t) {
            var e = this.eventElements.filter((function (e) {
                return e.element === t
            }))[0];
            return e || (e = new x(t), this.eventElements.push(e)), e
        }, C.prototype.bind = function (t, e, i) {
            this.eventElement(t).bind(e, i)
        }, C.prototype.unbind = function (t, e, i) {
            var n = this.eventElement(t);
            n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
        }, C.prototype.unbindAll = function () {
            this.eventElements.forEach((function (t) {
                return t.unbindAll()
            })), this.eventElements = []
        }, C.prototype.once = function (t, e, i) {
            var n = this.eventElement(t),
                s = function (t) {
                    n.unbind(e, s), i(t)
                };
            n.bind(e, s)
        };
        var T = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
            D = {
                "click-rail": function (t) {
                    t.element, t.event.bind(t.scrollbarY, "mousedown", (function (t) {
                        return t.stopPropagation()
                    })), t.event.bind(t.scrollbarYRail, "mousedown", (function (e) {
                        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                        t.element.scrollTop += i * t.containerHeight, g(t), e.stopPropagation()
                    })), t.event.bind(t.scrollbarX, "mousedown", (function (t) {
                        return t.stopPropagation()
                    })), t.event.bind(t.scrollbarXRail, "mousedown", (function (e) {
                        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                        t.element.scrollLeft += i * t.containerWidth, g(t), e.stopPropagation()
                    }))
                },
                "drag-thumb": function (t) {
                    _(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), _(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                },
                keyboard: function (t) {
                    var i = t.element,
                        n = function () {
                            return o(i, ":hover")
                        },
                        s = function () {
                            return o(t.scrollbarX, ":focus") || o(t.scrollbarY, ":focus")
                        };
                    t.event.bind(t.ownerDocument, "keydown", (function (o) {
                        if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && (n() || s())) {
                            var r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (r) {
                                if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                                else
                                    for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                                if (f(r)) return
                            }
                            var a = 0,
                                l = 0;
                            switch (o.which) {
                                case 37:
                                    a = o.metaKey ? -t.contentWidth : o.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    l = o.metaKey ? t.contentHeight : o.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    a = o.metaKey ? t.contentWidth : o.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    l = o.metaKey ? -t.contentHeight : o.altKey ? -t.containerHeight : -30;
                                    break;
                                case 32:
                                    l = o.shiftKey ? t.containerHeight : -t.containerHeight;
                                    break;
                                case 33:
                                    l = t.containerHeight;
                                    break;
                                case 34:
                                    l = -t.containerHeight;
                                    break;
                                case 36:
                                    l = t.contentHeight;
                                    break;
                                case 35:
                                    l = -t.contentHeight;
                                    break;
                                default:
                                    return
                            }
                            t.settings.suppressScrollX && 0 !== a || t.settings.suppressScrollY && 0 !== l || (i.scrollTop -= l, i.scrollLeft += a, g(t), function (n, s) {
                                var o = e(i.scrollTop);
                                if (0 === n) {
                                    if (!t.scrollbarYActive) return !1;
                                    if (0 === o && 0 < s || o >= t.contentHeight - t.containerHeight && 0 > s) return !t.settings.wheelPropagation
                                }
                                var r = i.scrollLeft;
                                if (0 === s) {
                                    if (!t.scrollbarXActive) return !1;
                                    if (0 === r && 0 > n || r >= t.contentWidth - t.containerWidth && 0 < n) return !t.settings.wheelPropagation
                                }
                                return !0
                            }(a, l) && o.preventDefault())
                        }
                    }))
                },
                wheel: function (n) {
                    function s(t, e, n) {
                        if (!T.isWebKit && r.querySelector("select:focus")) return !0;
                        if (!r.contains(t)) return !1;
                        for (var s = t; s && s !== r;) {
                            if (s.classList.contains(y.element.consuming)) return !0;
                            var o = i(s);
                            if (n && o.overflowY.match(/(scroll|auto)/)) {
                                var a = s.scrollHeight - s.clientHeight;
                                if (0 < a && (0 < s.scrollTop && 0 > n || s.scrollTop < a && 0 < n)) return !0
                            }
                            if (e && o.overflowX.match(/(scroll|auto)/)) {
                                var l = s.scrollWidth - s.clientWidth;
                                if (0 < l && (0 < s.scrollLeft && 0 > e || s.scrollLeft < l && 0 < e)) return !0
                            }
                            s = s.parentNode
                        }
                        return !1
                    }

                    function o(i) {
                        var o = function (t) {
                            var e = t.deltaX,
                                i = -1 * t.deltaY;
                            return (void 0 === e || void 0 === i) && (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
                        }(i),
                            a = o[0],
                            l = o[1];
                        if (!s(i.target, a, l)) {
                            var h = !1;
                            n.settings.useBothWheelAxes ? n.scrollbarYActive && !n.scrollbarXActive ? (l ? r.scrollTop -= l * n.settings.wheelSpeed : r.scrollTop += a * n.settings.wheelSpeed, h = !0) : n.scrollbarXActive && !n.scrollbarYActive && (a ? r.scrollLeft += a * n.settings.wheelSpeed : r.scrollLeft -= l * n.settings.wheelSpeed, h = !0) : (r.scrollTop -= l * n.settings.wheelSpeed, r.scrollLeft += a * n.settings.wheelSpeed), g(n), (h = h || function (i, s) {
                                var o = e(r.scrollTop),
                                    a = 0 === r.scrollTop,
                                    l = o + r.offsetHeight === r.scrollHeight,
                                    h = 0 === r.scrollLeft,
                                    c = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                                return !(t(s) > t(i) ? a || l : h || c) || !n.settings.wheelPropagation
                            }(a, l)) && !i.ctrlKey && (i.stopPropagation(), i.preventDefault())
                        }
                    }
                    var r = n.element;
                    void 0 === window.onwheel ? void 0 !== window.onmousewheel && n.event.bind(r, "mousewheel", o) : n.event.bind(r, "wheel", o)
                },
                touch: function (n) {
                    function s(i, s) {
                        var o = e(d.scrollTop),
                            r = d.scrollLeft,
                            a = t(i),
                            l = t(s);
                        if (l > a) {
                            if (0 > s && o === n.contentHeight - n.containerHeight || 0 < s && 0 === o) return 0 === window.scrollY && 0 < s && T.isChrome
                        } else if (a > l && (0 > i && r === n.contentWidth - n.containerWidth || 0 < i && 0 === r)) return !0;
                        return !0
                    }

                    function o(t, e) {
                        d.scrollTop -= e, d.scrollLeft -= t, g(n)
                    }

                    function r(t) {
                        return t.targetTouches ? t.targetTouches[0] : t
                    }

                    function a(t) {
                        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                    }

                    function l(t) {
                        if (a(t)) {
                            var e = r(t);
                            p.pageX = e.pageX, p.pageY = e.pageY, f = (new Date).getTime(), null !== v && clearInterval(v)
                        }
                    }

                    function h(t, e, n) {
                        if (!d.contains(t)) return !1;
                        for (var s = t; s && s !== d;) {
                            if (s.classList.contains(y.element.consuming)) return !0;
                            var o = i(s);
                            if (n && o.overflowY.match(/(scroll|auto)/)) {
                                var r = s.scrollHeight - s.clientHeight;
                                if (0 < r && (0 < s.scrollTop && 0 > n || s.scrollTop < r && 0 < n)) return !0
                            }
                            if (e && o.overflowX.match(/(scroll|auto)/)) {
                                var a = s.scrollWidth - s.clientWidth;
                                if (0 < a && (0 < s.scrollLeft && 0 > e || s.scrollLeft < a && 0 < e)) return !0
                            }
                            s = s.parentNode
                        }
                        return !1
                    }

                    function c(t) {
                        if (a(t)) {
                            var e = r(t),
                                i = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                },
                                n = i.pageX - p.pageX,
                                l = i.pageY - p.pageY;
                            if (h(t.target, n, l)) return;
                            o(n, l), p = i;
                            var c = (new Date).getTime(),
                                u = c - f;
                            0 < u && (m.x = n / u, m.y = l / u, f = c), s(n, l) && t.preventDefault()
                        }
                    }

                    function u() {
                        n.settings.swipeEasing && (clearInterval(v), v = setInterval((function () {
                            return n.isInitialized ? void clearInterval(v) : m.x || m.y ? .01 > t(m.x) && .01 > t(m.y) ? void clearInterval(v) : (o(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(v)
                        }), 10))
                    }
                    if (T.supportsTouch || T.supportsIePointer) {
                        var d = n.element,
                            p = {},
                            f = 0,
                            m = {},
                            v = null;
                        T.supportsTouch ? (n.event.bind(d, "touchstart", l), n.event.bind(d, "touchmove", c), n.event.bind(d, "touchend", u)) : T.supportsIePointer && (window.PointerEvent ? (n.event.bind(d, "pointerdown", l), n.event.bind(d, "pointermove", c), n.event.bind(d, "pointerup", u)) : window.MSPointerEvent && (n.event.bind(d, "MSPointerDown", l), n.event.bind(d, "MSPointerMove", c), n.event.bind(d, "MSPointerUp", u)))
                    }
                }
            },
            E = function (t, o) {
                var r = this;
                if (void 0 === o && (o = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                for (var a in this.element = t, t.classList.add(y.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, o) this.settings[a] = o[a];
                this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                var l = function () {
                    return t.classList.add(y.state.focus)
                },
                    h = function () {
                        return t.classList.remove(y.state.focus)
                    };
                this.isRtl = "rtl" === i(t).direction, !0 === this.isRtl && t.classList.add(y.rtl), this.isNegativeScroll = function () {
                    var e, i = t.scrollLeft;
                    return t.scrollLeft = -1, e = 0 > t.scrollLeft, t.scrollLeft = i, e
                }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new C, this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = s(y.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = s(y.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", l), this.event.bind(this.scrollbarX, "blur", h), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                var c = i(this.scrollbarXRail);
                this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = p(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = p(c.borderLeftWidth) + p(c.borderRightWidth), n(this.scrollbarXRail, {
                    display: "block"
                }), this.railXMarginWidth = p(c.marginLeft) + p(c.marginRight), n(this.scrollbarXRail, {
                    display: ""
                }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = s(y.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = s(y.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", l), this.event.bind(this.scrollbarY, "blur", h), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                var u = i(this.scrollbarYRail);
                this.scrollbarYRight = parseInt(u.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = p(u.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
                    var e = i(t);
                    return p(e.width) + p(e.paddingLeft) + p(e.paddingRight) + p(e.borderLeftWidth) + p(e.borderRightWidth)
                }(this.scrollbarY) : null, this.railBorderYWidth = p(u.borderTopWidth) + p(u.borderBottomWidth), n(this.scrollbarYRail, {
                    display: "block"
                }), this.railYMarginHeight = p(u.marginTop) + p(u.marginBottom), n(this.scrollbarYRail, {
                    display: ""
                }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                    x: 0 >= t.scrollLeft ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: 0 >= t.scrollTop ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                }, this.isAlive = !0, this.settings.handlers.forEach((function (t) {
                    return D[t](r)
                })), this.lastScrollTop = e(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", (function (t) {
                    return r.onScroll(t)
                })), g(this)
            };
        return E.prototype.update = function () {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, n(this.scrollbarXRail, {
                display: "block"
            }), n(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = p(i(this.scrollbarXRail).marginLeft) + p(i(this.scrollbarXRail).marginRight), this.railYMarginHeight = p(i(this.scrollbarYRail).marginTop) + p(i(this.scrollbarYRail).marginBottom), n(this.scrollbarXRail, {
                display: "none"
            }), n(this.scrollbarYRail, {
                display: "none"
            }), g(this), d(this, "top", 0, !1, !0), d(this, "left", 0, !1, !0), n(this.scrollbarXRail, {
                display: ""
            }), n(this.scrollbarYRail, {
                display: ""
            }))
        }, E.prototype.onScroll = function () {
            this.isAlive && (g(this), d(this, "top", this.element.scrollTop - this.lastScrollTop), d(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = e(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, E.prototype.destroy = function () {
            this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, E.prototype.removePsClasses = function () {
            this.element.className = this.element.className.split(" ").filter((function (t) {
                return !t.match(/^ps([-_].+|)$/)
            })).join(" ")
        }, E
    })),
    function (t) {
        var e;
        if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
            var i = window.Cookies,
                n = window.Cookies = t();
            n.noConflict = function () {
                return window.Cookies = i, n
            }
        }
    }((function () {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) e[n] = i[n]
            }
            return e
        }

        function e(t) {
            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function i(n) {
            function s() { }

            function o(e, i, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = t({
                        path: "/"
                    }, s.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        var r = JSON.stringify(i);
                        /^[\{\[]/.test(r) && (i = r)
                    } catch (t) { }
                    i = n.write ? n.write(i, e) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var a = "";
                    for (var l in o) o[l] && (a += "; " + l, !0 !== o[l] && (a += "=" + o[l].split(";")[0]));
                    return document.cookie = e + "=" + i + a
                }
            }

            function r(t, i) {
                if ("undefined" != typeof document) {
                    for (var s = {}, o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                        var a = o[r].split("="),
                            l = a.slice(1).join("=");
                        i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                            var h = e(a[0]);
                            if (l = (n.read || n)(l, h) || e(l), i) try {
                                l = JSON.parse(l)
                            } catch (t) { }
                            if (s[h] = l, t === h) break
                        } catch (t) { }
                    }
                    return t ? s[t] : s
                }
            }
            return s.set = o, s.get = function (t) {
                return r(t, !1)
            }, s.getJSON = function (t) {
                return r(t, !0)
            }, s.remove = function (e, i) {
                o(e, "", t(i, {
                    expires: -1
                }))
            }, s.defaults = {}, s.withConverter = i, s
        }((function () { }))
    }));
!(function () {
  "use strict";
  var e = {},
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, loaded: !1, exports: {} }),
      c = !0;
    try {
      e[r].call(a.exports, a, a.exports, n), (c = !1);
    } finally {
      c && delete t[r];
    }
    return (a.loaded = !0), a.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, a) {
        if (!r) {
          var c = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (r = e[d][0]), (o = e[d][1]), (a = e[d][2]);
            for (var i = !0, f = 0; f < r.length; f++)
              (!1 & a || c >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[f]);
              })
                ? r.splice(f--, 1)
                : ((i = !1), a < c && (c = a));
            if (i) {
              e.splice(d--, 1);
              var u = o();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        a = a || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
        e[d] = [r, o, a];
      };
    })(),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return 207 === e
        ? "static/chunks/207-09abaaa91d7f62b7.js"
        : 325 === e
        ? "static/chunks/325-47ec824324946c94.js"
        : 577 === e
        ? "static/chunks/60c830e2-fa7ac315fb520d03.js"
        : 499 === e
        ? "static/chunks/499-112bc411e210b490.js"
        : 669 === e
        ? "static/chunks/669-9b11a8e9a071fb62.js"
        : "static/chunks/" +
          ({
            90: "cd1b5bfc",
            160: "Navbar",
            200: "Jumbotron",
            277: "SocialShare",
            301: "Link",
            383: "Placeholder",
            489: "Layouts",
            558: "Callout",
            643: "NextJSSSG",
            686: "Image",
            754: "cfda81d2",
            768: "e0dceef3",
            877: "Projects",
            890: "d76cafc6",
            909: "NextJSSSR",
            973: "Articles",
          }[e] || e) +
          "." +
          {
            90: "83224def69bbfd77",
            92: "ea65139122666af7",
            160: "eb6d1d4ffcb79535",
            200: "50f1353285bc0463",
            277: "8a44a5c739641b61",
            301: "f2ac95b06f9fee89",
            322: "c59d5b6d6c5b7da6",
            383: "23db3bdd9cf14820",
            404: "d872828700a691b0",
            489: "9d7d53d6f66755e7",
            558: "624195cb96d91b14",
            583: "454bec2588f3716d",
            643: "8b06982a0f60b242",
            675: "d9abc11bdebaa121",
            686: "12ad8e5c36f6f2ea",
            754: "0a0c5942a2c958ae",
            768: "2d863416af9b28fd",
            828: "876c5f314be3b9d4",
            877: "19b1982f00d83f57",
            890: "3e0f1ba6a5a09883",
            909: "e04aab68b4bc29c5",
            973: "baa4deb4aa1936a9",
          }[e] +
          ".js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "_N_E:";
      n.l = function (r, o, a, c) {
        if (e[r]) e[r].push(o);
        else {
          var i, f;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), d = 0;
              d < u.length;
              d++
            ) {
              var l = u[d];
              if (
                l.getAttribute("src") == r ||
                l.getAttribute("data-webpack") == t + a
              ) {
                i = l;
                break;
              }
            }
          i ||
            ((f = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + a),
            (i.src = r)),
            (e[r] = [o]);
          var s = function (t, n) {
              (i.onerror = i.onload = null), clearTimeout(b);
              var o = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            b = setTimeout(
              s.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = s.bind(null, i.onerror)),
            (i.onload = s.bind(null, i.onload)),
            f && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (n.p = "/_next/"),
    (function () {
      var e = { 272: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else if (272 != t) {
            var a = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = a));
            var c = n.p + n.u(t),
              i = new Error();
            n.l(
              c,
              function (r) {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + c + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = c),
                    o[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          } else e[t] = 0;
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            a,
            c = r[0],
            i = r[1],
            f = r[2],
            u = 0;
          if (
            c.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (f) var d = f(n);
          }
          for (t && t(r); u < c.length; u++)
            (a = c[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(d);
        },
        r = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
})();

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    1983: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(2800);
        },
      ]);
    },
    1815: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                l = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !e || o.length !== e);
                  a = !0
                );
              } catch (u) {
                (l = !0), (i = u);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (l) throw i;
                }
              }
              return o;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootRef,
            n = t.rootMargin,
            r = t.disabled || !l,
            s = o.useRef(),
            f = i(o.useState(!1), 2),
            d = f[0],
            g = f[1],
            h = i(o.useState(e ? e.current : null), 2),
            p = h[0],
            m = h[1],
            b = o.useCallback(
              function (t) {
                s.current && (s.current(), (s.current = void 0)),
                  r ||
                    d ||
                    (t &&
                      t.tagName &&
                      (s.current = (function (t, e, n) {
                        var r = (function (t) {
                            var e,
                              n = {
                                root: t.root || null,
                                margin: t.rootMargin || "",
                              },
                              r = c.find(function (t) {
                                return (
                                  t.root === n.root && t.margin === n.margin
                                );
                              });
                            r ? (e = u.get(r)) : ((e = u.get(n)), c.push(n));
                            if (e) return e;
                            var i = new Map(),
                              o = new IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                  var e = i.get(t.target),
                                    n =
                                      t.isIntersecting ||
                                      t.intersectionRatio > 0;
                                  e && n && e(n);
                                });
                              }, t);
                            return (
                              u.set(
                                n,
                                (e = { id: n, observer: o, elements: i })
                              ),
                              e
                            );
                          })(n),
                          i = r.id,
                          o = r.observer,
                          a = r.elements;
                        return (
                          a.set(t, e),
                          o.observe(t),
                          function () {
                            if ((a.delete(t), o.unobserve(t), 0 === a.size)) {
                              o.disconnect(), u.delete(i);
                              var e = c.findIndex(function (t) {
                                return (
                                  t.root === i.root && t.margin === i.margin
                                );
                              });
                              e > -1 && c.splice(e, 1);
                            }
                          }
                        );
                      })(
                        t,
                        function (t) {
                          return t && g(t);
                        },
                        { root: p, rootMargin: n }
                      )));
              },
              [r, p, n, d]
            ),
            v = o.useCallback(function () {
              g(!1);
            }, []);
          return (
            o.useEffect(
              function () {
                if (!l && !d) {
                  var t = a.requestIdleCallback(function () {
                    return g(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(t);
                  };
                }
              },
              [d]
            ),
            o.useEffect(
              function () {
                e && m(e.current);
              },
              [e]
            ),
            [b, d, v]
          );
        });
      var o = n(5473),
        a = n(2216),
        l = "undefined" !== typeof IntersectionObserver;
      var u = new Map(),
        c = [];
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        (Object.assign(e.default, e), (t.exports = e.default));
    },
    2800: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return g;
          },
        });
      var r = n(3312),
        i = n(9207),
        o = n(4499),
        a = n.n(o),
        l = {
          src: "/_next/static/media/avatar.dcec5d11.png",
          height: 750,
          width: 764,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42h2PvUrDUBhAv+R+SX+uTcQmFYIQghUEk6GKksao+AAu4iJ09p30HXRwdqxgyWRxdVEoFH9ikhuav3oNnuEsZzoC1Gzunjqapl7LzcaBtzfgmroaRD/fV3V6wVp2E/k4/PpQjvxjnuclpIwN1/SNsWnZHjm7uLzNsmzLMIyyT5HoqiIwEAuFdugiLx3xZDhwy3IJ7FeQLKygG75DOHuTJQkhiUIX13s9vmN2YVYgrBgmkGUCSioDYzEkaQ74OZ9PXNfzrW2/ZBGTUCjgkNLieRrInJMn0oofAtsbjRrYaiOKPOMIEhLsUCmaTF/PBai5u390qkV806Z0v6iAI4Ggb+n/m39W0mQSWOgqcAAAAABJRU5ErkJggg==",
        },
        u = n(8652),
        c = n(7511),
        s = function (t) {
          var e = t.href,
            n = t.bg,
            o = t.icon,
            a = t.label;
          return (0, r.tZ)(i.rU, {
            py: 2,
            px: 4,
            href: e,
            rounded: "sm",
            bg: n,
            color: "#fff",
            fontWeight: "bold",
            isExternal: !0,
            borderWidth: 1,
            borderColor: "gray.600",
            _hover: {},
            children: (0, r.BX)(i.Ug, {
              spacing: 2,
              alignItems: "center",
              children: [
                (0, r.tZ)(i.xu, { as: null !== o && void 0 !== o ? o : c.YBZ }),
                " ",
                (0, r.tZ)(i.xv, { children: a }),
              ],
            }),
          });
        },
        f = function () {
          return (0, r.tZ)(i.xu, {
            as: "main",
            maxW: "2xl",
            mx: "auto",
            p: 8,
            children: (0, r.BX)(i.gC, {
              spacing: 4,
              align: "left",
              children: [
                (0, r.BX)(i.Ug, {
                  spacing: 4,
                  alignItems: "center",
                  children: [
                    (0, r.tZ)(i.xu, {
                      bgGradient: "linear(to-l, #79c2ff, #4a5888)",
                      rounded: "full",
                      p: 1,
                      w: 100,
                      h: 100,
                      children: (0, r.tZ)(a(), {
                        src: l,
                        alt: "Nguy\u1ec5n Tr\u01b0\u1eddng Minh",
                        height: 100,
                        width: 100,
                        quality: 100,
                        priority: !0,
                        placeholder: "blur",
                      }),
                    }),
                    (0, r.tZ)(i.xu, {
                      children: (0, r.BX)(i.gC, {
                        spacing: 2,
                        align: "left",
                        children: [
                          (0, r.tZ)(i.X6, {
                            as: "h1",
                            size: "lg",
                            color: "white",
                            children: "Nguy\u1ec5n Tr\u01b0\u1eddng Minh",
                          }),
                          (0, r.tZ)(i.xv, {
                            fontWeight: "bold",
                            children: "Software Engineer",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.tZ)(i.xu, {
                  className: "article",
                  children: (0, r.tZ)(i.xv, {
                    fontWeight: "bold",
                    children:
                      "Computer Science Engineer having interest in web-designing and development.",
                  }),
                }),
                (0, r.tZ)(i.xu, {
                  d: "flex",
                  alignItems: "center",
                  children: (0, r.BX)(i.Ug, {
                    spacing: 4,
                    children: [
                      (0, r.tZ)(s, {
                        href: "https://github.com/TMinh25",
                        bg: "#333",
                        icon: u.JOq,
                        label: "Github",
                      }),
                      (0, r.tZ)(s, {
                        href: "https://www.facebook.com/sipp.minhh",
                        bg: "#2374E1",
                        icon: u.egd,
                        label: "Facebook",
                      }),
                      (0, r.tZ)(s, {
                        href: "https://www.instagram.com/not.gr4y/",
                        bg: "#EF4E6D",
                        icon: u.oVe,
                        label: "Instagram",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        d = n(5060),
        g = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(d.default, {
                children: (0, r.tZ)("title", { children: "About Me" }),
              }),
              (0, r.tZ)(f, {}),
            ],
          });
        };
    },
    3908: function (t, e, n) {
      "use strict";
      n.d(e, {
        w_: function () {
          return c;
        },
      });
      var r = n(5473),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = r.default.createContext && r.default.createContext(i),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
            a.apply(this, arguments)
          );
        },
        l = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        };
      function u(t) {
        return (
          t &&
          t.map(function (t, e) {
            return r.default.createElement(
              t.tag,
              a({ key: e }, t.attr),
              u(t.child)
            );
          })
        );
      }
      function c(t) {
        return function (e) {
          return r.default.createElement(
            s,
            a({ attr: a({}, t.attr) }, e),
            u(t.child)
          );
        };
      }
      function s(t) {
        var e = function (e) {
          var n,
            i = t.attr,
            o = t.size,
            u = t.title,
            c = l(t, ["attr", "size", "title"]),
            s = o || e.size || "1em";
          return (
            e.className && (n = e.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            r.default.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                i,
                c,
                {
                  className: n,
                  style: a(a({ color: t.color || e.color }, e.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && r.default.createElement("title", null, u),
              t.children
            )
          );
        };
        return void 0 !== o
          ? r.default.createElement(o.Consumer, null, function (t) {
              return e(t);
            })
          : e(i);
      }
    },
  },
  function (t) {
    t.O(0, [577, 511, 207, 499, 888, 179], function () {
      return (e = 1983), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);

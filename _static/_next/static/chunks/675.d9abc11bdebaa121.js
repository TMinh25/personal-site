(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [675],
  {
    320: function (e, t, r) {
      "use strict";
      r.d(t, {
        hE: function () {
          return f;
        },
        h_: function () {
          return x;
        },
      });
      var n = r(41),
        o = r(7136),
        a = r(5473),
        i = r(325),
        s = r(3412),
        l = (0, o.kr)({ strict: !1, name: "PortalManagerContext" }),
        c = l[0],
        u = l[1];
      function f(e) {
        var t = e.children,
          r = e.zIndex;
        return a.createElement(c, { value: { zIndex: r } }, t);
      }
      function p() {
        return (
          (p =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          p.apply(this, arguments)
        );
      }
      n.Ts && (f.displayName = "PortalManager");
      var d = ["containerRef"],
        v = (0, o.kr)({ strict: !1, name: "PortalContext" }),
        m = v[0],
        h = v[1],
        g = "chakra-portal",
        y = function (e) {
          return a.createElement(
            "div",
            {
              className: "chakra-portal-zIndex",
              style: {
                position: "absolute",
                zIndex: e.zIndex,
                top: 0,
                left: 0,
                right: 0,
              },
            },
            e.children
          );
        },
        b = function (e) {
          var t = e.appendToParentPortal,
            r = e.children,
            n = a.useRef(null),
            o = a.useRef(null),
            l = (0, i.NW)(),
            c = h(),
            f = u();
          (0, s.a)(function () {
            if (n.current) {
              var e = n.current.ownerDocument,
                r = t && null != c ? c : e.body;
              if (r) {
                (o.current = e.createElement("div")),
                  (o.current.className = g),
                  r.appendChild(o.current),
                  l();
                var a = o.current;
                return function () {
                  r.contains(a) && r.removeChild(a);
                };
              }
            }
          }, []);
          var p =
            null != f && f.zIndex
              ? a.createElement(y, { zIndex: null == f ? void 0 : f.zIndex }, r)
              : r;
          return o.current
            ? (0, a.createPortal)(
                a.createElement(m, { value: o.current }, p),
                o.current
              )
            : a.createElement("span", { ref: n });
        },
        w = function (e) {
          var t = e.children,
            r = e.containerRef,
            o = e.appendToParentPortal,
            l = r.current,
            c = null != l ? l : n.jU ? document.body : void 0,
            u = a.useMemo(
              function () {
                var e =
                  null == l ? void 0 : l.ownerDocument.createElement("div");
                return e && (e.className = g), e;
              },
              [l]
            ),
            f = (0, i.NW)();
          return (
            (0, s.a)(function () {
              f();
            }, []),
            (0, s.a)(
              function () {
                if (u && c)
                  return (
                    c.appendChild(u),
                    function () {
                      c.removeChild(u);
                    }
                  );
              },
              [u, c]
            ),
            c && u
              ? (0, a.createPortal)(
                  a.createElement(m, { value: o ? u : null }, t),
                  u
                )
              : null
          );
        };
      function x(e) {
        var t = e.containerRef,
          r = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, d);
        return t
          ? a.createElement(w, p({ containerRef: t }, r))
          : a.createElement(b, r);
      }
      (x.defaultProps = { appendToParentPortal: !0 }),
        (x.className = g),
        (x.selector = ".chakra-portal"),
        n.Ts && (x.displayName = "Portal");
    },
    8399: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return Xe;
        },
      });
      var n = r(7136);
      function o(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function a(e) {
        return e instanceof o(e).Element || e instanceof Element;
      }
      function i(e) {
        return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
      }
      function s(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var l = Math.max,
        c = Math.min,
        u = Math.round;
      function f(e, t) {
        void 0 === t && (t = !1);
        var r = e.getBoundingClientRect(),
          n = 1,
          o = 1;
        if (i(e) && t) {
          var a = e.offsetHeight,
            s = e.offsetWidth;
          s > 0 && (n = u(r.width) / s || 1),
            a > 0 && (o = u(r.height) / a || 1);
        }
        return {
          width: r.width / n,
          height: r.height / o,
          top: r.top / o,
          right: r.right / n,
          bottom: r.bottom / o,
          left: r.left / n,
          x: r.left / n,
          y: r.top / o,
        };
      }
      function p(e) {
        var t = o(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function d(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function v(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function m(e) {
        return f(v(e)).left + p(e).scrollLeft;
      }
      function h(e) {
        return o(e).getComputedStyle(e);
      }
      function g(e) {
        var t = h(e),
          r = t.overflow,
          n = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + o + n);
      }
      function y(e, t, r) {
        void 0 === r && (r = !1);
        var n = i(t),
          a =
            i(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = u(t.width) / e.offsetWidth || 1,
                n = u(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== n;
            })(t),
          s = v(t),
          l = f(e, a),
          c = { scrollLeft: 0, scrollTop: 0 },
          h = { x: 0, y: 0 };
        return (
          (n || (!n && !r)) &&
            (("body" !== d(t) || g(s)) &&
              (c = (function (e) {
                return e !== o(e) && i(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : p(e);
                var t;
              })(t)),
            i(t)
              ? (((h = f(t, !0)).x += t.clientLeft), (h.y += t.clientTop))
              : s && (h.x = m(s))),
          {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function b(e) {
        var t = f(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function w(e) {
        return "html" === d(e)
          ? e
          : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || v(e);
      }
      function x(e) {
        return ["html", "body", "#document"].indexOf(d(e)) >= 0
          ? e.ownerDocument.body
          : i(e) && g(e)
          ? e
          : x(w(e));
      }
      function O(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = x(e),
          a = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = o(n),
          s = a ? [i].concat(i.visualViewport || [], g(n) ? n : []) : n,
          l = t.concat(s);
        return a ? l : l.concat(O(w(s)));
      }
      function E(e) {
        return ["table", "td", "th"].indexOf(d(e)) >= 0;
      }
      function C(e) {
        return i(e) && "fixed" !== h(e).position ? e.offsetParent : null;
      }
      function k(e) {
        for (var t = o(e), r = C(e); r && E(r) && "static" === h(r).position; )
          r = C(r);
        return r &&
          ("html" === d(r) || ("body" === d(r) && "static" === h(r).position))
          ? t
          : r ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  i(e) &&
                  "fixed" === h(e).position
                )
                  return null;
                var r = w(e);
                for (
                  s(r) && (r = r.host);
                  i(r) && ["html", "body"].indexOf(d(r)) < 0;

                ) {
                  var n = h(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var P = "top",
        j = "bottom",
        R = "right",
        A = "left",
        S = "auto",
        D = [P, j, R, A],
        M = "start",
        I = "end",
        T = "viewport",
        z = "popper",
        L = D.reduce(function (e, t) {
          return e.concat([t + "-" + M, t + "-" + I]);
        }, []),
        W = [].concat(D, [S]).reduce(function (e, t) {
          return e.concat([t, t + "-" + M, t + "-" + I]);
        }, []),
        N = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function _(e) {
        var t = new Map(),
          r = new Set(),
          n = [];
        function o(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var n = t.get(e);
                  n && o(n);
                }
              }),
            n.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || o(e);
          }),
          n
        );
      }
      function H(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (r) {
                Promise.resolve().then(function () {
                  (t = void 0), r(e());
                });
              })),
            t
          );
        };
      }
      var B = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function q() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function U(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.defaultModifiers,
          n = void 0 === r ? [] : r,
          o = t.defaultOptions,
          i = void 0 === o ? B : o;
        return function (e, t, r) {
          void 0 === r && (r = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, B, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            l = !1,
            c = {
              state: o,
              setOptions: function (r) {
                var l = "function" === typeof r ? r(o.options) : r;
                u(),
                  (o.options = Object.assign({}, i, o.options, l)),
                  (o.scrollParents = {
                    reference: a(e)
                      ? O(e)
                      : e.contextElement
                      ? O(e.contextElement)
                      : [],
                    popper: O(t),
                  });
                var f = (function (e) {
                  var t = _(e);
                  return N.reduce(function (e, r) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === r;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var r = e[t.name];
                      return (
                        (e[t.name] = r
                          ? Object.assign({}, r, t, {
                              options: Object.assign({}, r.options, t.options),
                              data: Object.assign({}, r.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = f.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      n = void 0 === r ? {} : r,
                      a = e.effect;
                    if ("function" === typeof a) {
                      var i = a({ state: o, name: t, instance: c, options: n }),
                        l = function () {};
                      s.push(i || l);
                    }
                  }),
                  c.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = o.elements,
                    t = e.reference,
                    r = e.popper;
                  if (q(t, r)) {
                    (o.rects = {
                      reference: y(t, k(r), "fixed" === o.options.strategy),
                      popper: b(r),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var n = 0; n < o.orderedModifiers.length; n++)
                      if (!0 !== o.reset) {
                        var a = o.orderedModifiers[n],
                          i = a.fn,
                          s = a.options,
                          u = void 0 === s ? {} : s,
                          f = a.name;
                        "function" === typeof i &&
                          (o =
                            i({ state: o, options: u, name: f, instance: c }) ||
                            o);
                      } else (o.reset = !1), (n = -1);
                  }
                }
              },
              update: H(function () {
                return new Promise(function (e) {
                  c.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                u(), (l = !0);
              },
            };
          if (!q(e, t)) return c;
          function u() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            c.setOptions(r).then(function (e) {
              !l && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            c
          );
        };
      }
      var V = { passive: !0 };
      function F(e) {
        return e.split("-")[0];
      }
      function $(e) {
        return e.split("-")[1];
      }
      function K(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function X(e) {
        var t,
          r = e.reference,
          n = e.element,
          o = e.placement,
          a = o ? F(o) : null,
          i = o ? $(o) : null,
          s = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (a) {
          case P:
            t = { x: s, y: r.y - n.height };
            break;
          case j:
            t = { x: s, y: r.y + r.height };
            break;
          case R:
            t = { x: r.x + r.width, y: l };
            break;
          case A:
            t = { x: r.x - n.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = a ? K(a) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (i) {
            case M:
              t[c] = t[c] - (r[u] / 2 - n[u] / 2);
              break;
            case I:
              t[c] = t[c] + (r[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      var Y = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function G(e) {
        var t,
          r = e.popper,
          n = e.popperRect,
          a = e.placement,
          i = e.variation,
          s = e.offsets,
          l = e.position,
          c = e.gpuAcceleration,
          f = e.adaptive,
          p = e.roundOffsets,
          d = e.isFixed,
          m = s.x,
          g = void 0 === m ? 0 : m,
          y = s.y,
          b = void 0 === y ? 0 : y,
          w = "function" === typeof p ? p({ x: g, y: b }) : { x: g, y: b };
        (g = w.x), (b = w.y);
        var x = s.hasOwnProperty("x"),
          O = s.hasOwnProperty("y"),
          E = A,
          C = P,
          S = window;
        if (f) {
          var D = k(r),
            M = "clientHeight",
            T = "clientWidth";
          if (
            (D === o(r) &&
              "static" !== h((D = v(r))).position &&
              "absolute" === l &&
              ((M = "scrollHeight"), (T = "scrollWidth")),
            (D = D),
            a === P || ((a === A || a === R) && i === I))
          )
            (C = j),
              (b -=
                (d && D === S && S.visualViewport
                  ? S.visualViewport.height
                  : D[M]) - n.height),
              (b *= c ? 1 : -1);
          if (a === A || ((a === P || a === j) && i === I))
            (E = R),
              (g -=
                (d && D === S && S.visualViewport
                  ? S.visualViewport.width
                  : D[T]) - n.width),
              (g *= c ? 1 : -1);
        }
        var z,
          L = Object.assign({ position: l }, f && Y),
          W =
            !0 === p
              ? (function (e) {
                  var t = e.x,
                    r = e.y,
                    n = window.devicePixelRatio || 1;
                  return { x: u(t * n) / n || 0, y: u(r * n) / n || 0 };
                })({ x: g, y: b })
              : { x: g, y: b };
        return (
          (g = W.x),
          (b = W.y),
          c
            ? Object.assign(
                {},
                L,
                (((z = {})[C] = O ? "0" : ""),
                (z[E] = x ? "0" : ""),
                (z.transform =
                  (S.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + b + "px)"
                    : "translate3d(" + g + "px, " + b + "px, 0)"),
                z)
              )
            : Object.assign(
                {},
                L,
                (((t = {})[C] = O ? b + "px" : ""),
                (t[E] = x ? g + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var J = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              r = e.options,
              n = e.name,
              o = r.offset,
              a = void 0 === o ? [0, 0] : o,
              i = W.reduce(function (e, r) {
                return (
                  (e[r] = (function (e, t, r) {
                    var n = F(e),
                      o = [A, P].indexOf(n) >= 0 ? -1 : 1,
                      a =
                        "function" === typeof r
                          ? r(Object.assign({}, t, { placement: e }))
                          : r,
                      i = a[0],
                      s = a[1];
                    return (
                      (i = i || 0),
                      (s = (s || 0) * o),
                      [A, R].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
                    );
                  })(r, t.rects, a)),
                  e
                );
              }, {}),
              s = i[t.placement],
              l = s.x,
              c = s.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += l),
              (t.modifiersData.popperOffsets.y += c)),
              (t.modifiersData[n] = i);
          },
        },
        Q = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Z(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Q[e];
        });
      }
      var ee = { start: "end", end: "start" };
      function te(e) {
        return e.replace(/start|end/g, function (e) {
          return ee[e];
        });
      }
      function re(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && s(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function ne(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function oe(e, t) {
        return t === T
          ? ne(
              (function (e) {
                var t = o(e),
                  r = v(e),
                  n = t.visualViewport,
                  a = r.clientWidth,
                  i = r.clientHeight,
                  s = 0,
                  l = 0;
                return (
                  n &&
                    ((a = n.width),
                    (i = n.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((s = n.offsetLeft), (l = n.offsetTop))),
                  { width: a, height: i, x: s + m(e), y: l }
                );
              })(e)
            )
          : a(t)
          ? (function (e) {
              var t = f(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : ne(
              (function (e) {
                var t,
                  r = v(e),
                  n = p(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = l(
                    r.scrollWidth,
                    r.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  i = l(
                    r.scrollHeight,
                    r.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  s = -n.scrollLeft + m(e),
                  c = -n.scrollTop;
                return (
                  "rtl" === h(o || r).direction &&
                    (s += l(r.clientWidth, o ? o.clientWidth : 0) - a),
                  { width: a, height: i, x: s, y: c }
                );
              })(v(e))
            );
      }
      function ae(e, t, r) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = O(w(e)),
                    r =
                      ["absolute", "fixed"].indexOf(h(e).position) >= 0 && i(e)
                        ? k(e)
                        : e;
                  return a(r)
                    ? t.filter(function (e) {
                        return a(e) && re(e, r) && "body" !== d(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(n, [r]),
          s = o[0],
          u = o.reduce(function (t, r) {
            var n = oe(e, r);
            return (
              (t.top = l(n.top, t.top)),
              (t.right = c(n.right, t.right)),
              (t.bottom = c(n.bottom, t.bottom)),
              (t.left = l(n.left, t.left)),
              t
            );
          }, oe(e, s));
        return (
          (u.width = u.right - u.left),
          (u.height = u.bottom - u.top),
          (u.x = u.left),
          (u.y = u.top),
          u
        );
      }
      function ie(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function se(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      function le(e, t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.placement,
          o = void 0 === n ? e.placement : n,
          i = r.boundary,
          s = void 0 === i ? "clippingParents" : i,
          l = r.rootBoundary,
          c = void 0 === l ? T : l,
          u = r.elementContext,
          p = void 0 === u ? z : u,
          d = r.altBoundary,
          m = void 0 !== d && d,
          h = r.padding,
          g = void 0 === h ? 0 : h,
          y = ie("number" !== typeof g ? g : se(g, D)),
          b = p === z ? "reference" : z,
          w = e.rects.popper,
          x = e.elements[m ? b : p],
          O = ae(a(x) ? x : x.contextElement || v(e.elements.popper), s, c),
          E = f(e.elements.reference),
          C = X({
            reference: E,
            element: w,
            strategy: "absolute",
            placement: o,
          }),
          k = ne(Object.assign({}, w, C)),
          A = p === z ? k : E,
          S = {
            top: O.top - A.top + y.top,
            bottom: A.bottom - O.bottom + y.bottom,
            left: O.left - A.left + y.left,
            right: A.right - O.right + y.right,
          },
          M = e.modifiersData.offset;
        if (p === z && M) {
          var I = M[o];
          Object.keys(S).forEach(function (e) {
            var t = [R, j].indexOf(e) >= 0 ? 1 : -1,
              r = [P, j].indexOf(e) >= 0 ? "y" : "x";
            S[e] += I[r] * t;
          });
        }
        return S;
      }
      function ce(e, t, r) {
        return l(e, c(t, r));
      }
      var ue = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            o = r.mainAxis,
            a = void 0 === o || o,
            i = r.altAxis,
            s = void 0 !== i && i,
            u = r.boundary,
            f = r.rootBoundary,
            p = r.altBoundary,
            d = r.padding,
            v = r.tether,
            m = void 0 === v || v,
            h = r.tetherOffset,
            g = void 0 === h ? 0 : h,
            y = le(t, {
              boundary: u,
              rootBoundary: f,
              padding: d,
              altBoundary: p,
            }),
            w = F(t.placement),
            x = $(t.placement),
            O = !x,
            E = K(w),
            C = "x" === E ? "y" : "x",
            S = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            I = t.rects.popper,
            T =
              "function" === typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            z =
              "number" === typeof T
                ? { mainAxis: T, altAxis: T }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
            L = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            W = { x: 0, y: 0 };
          if (S) {
            if (a) {
              var N,
                _ = "y" === E ? P : A,
                H = "y" === E ? j : R,
                B = "y" === E ? "height" : "width",
                q = S[E],
                U = q + y[_],
                V = q - y[H],
                X = m ? -I[B] / 2 : 0,
                Y = x === M ? D[B] : I[B],
                G = x === M ? -I[B] : -D[B],
                J = t.elements.arrow,
                Q = m && J ? b(J) : { width: 0, height: 0 },
                Z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                ee = Z[_],
                te = Z[H],
                re = ce(0, D[B], Q[B]),
                ne = O
                  ? D[B] / 2 - X - re - ee - z.mainAxis
                  : Y - re - ee - z.mainAxis,
                oe = O
                  ? -D[B] / 2 + X + re + te + z.mainAxis
                  : G + re + te + z.mainAxis,
                ae = t.elements.arrow && k(t.elements.arrow),
                ie = ae
                  ? "y" === E
                    ? ae.clientTop || 0
                    : ae.clientLeft || 0
                  : 0,
                se = null != (N = null == L ? void 0 : L[E]) ? N : 0,
                ue = q + oe - se,
                fe = ce(m ? c(U, q + ne - se - ie) : U, q, m ? l(V, ue) : V);
              (S[E] = fe), (W[E] = fe - q);
            }
            if (s) {
              var pe,
                de = "x" === E ? P : A,
                ve = "x" === E ? j : R,
                me = S[C],
                he = "y" === C ? "height" : "width",
                ge = me + y[de],
                ye = me - y[ve],
                be = -1 !== [P, A].indexOf(w),
                we = null != (pe = null == L ? void 0 : L[C]) ? pe : 0,
                xe = be ? ge : me - D[he] - I[he] - we + z.altAxis,
                Oe = be ? me + D[he] + I[he] - we - z.altAxis : ye,
                Ee =
                  m && be
                    ? (function (e, t, r) {
                        var n = ce(e, t, r);
                        return n > r ? r : n;
                      })(xe, me, Oe)
                    : ce(m ? xe : ge, me, m ? Oe : ye);
              (S[C] = Ee), (W[C] = Ee - me);
            }
            t.modifiersData[n] = W;
          }
        },
        requiresIfExists: ["offset"],
      };
      var fe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            n = e.name,
            o = e.options,
            a = r.elements.arrow,
            i = r.modifiersData.popperOffsets,
            s = F(r.placement),
            l = K(s),
            c = [A, R].indexOf(s) >= 0 ? "height" : "width";
          if (a && i) {
            var u = (function (e, t) {
                return ie(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : se(e, D)
                );
              })(o.padding, r),
              f = b(a),
              p = "y" === l ? P : A,
              d = "y" === l ? j : R,
              v =
                r.rects.reference[c] +
                r.rects.reference[l] -
                i[l] -
                r.rects.popper[c],
              m = i[l] - r.rects.reference[l],
              h = k(a),
              g = h
                ? "y" === l
                  ? h.clientHeight || 0
                  : h.clientWidth || 0
                : 0,
              y = v / 2 - m / 2,
              w = u[p],
              x = g - f[c] - u[d],
              O = g / 2 - f[c] / 2 + y,
              E = ce(w, O, x),
              C = l;
            r.modifiersData[n] =
              (((t = {})[C] = E), (t.centerOffset = E - O), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            n = void 0 === r ? "[data-popper-arrow]" : r;
          null != n &&
            ("string" !== typeof n ||
              (n = t.elements.popper.querySelector(n))) &&
            re(t.elements.popper, n) &&
            (t.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function pe(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function de(e) {
        return [P, R, j, A].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ve = U({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  r = e.instance,
                  n = e.options,
                  a = n.scroll,
                  i = void 0 === a || a,
                  s = n.resize,
                  l = void 0 === s || s,
                  c = o(t.elements.popper),
                  u = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  i &&
                    u.forEach(function (e) {
                      e.addEventListener("scroll", r.update, V);
                    }),
                  l && c.addEventListener("resize", r.update, V),
                  function () {
                    i &&
                      u.forEach(function (e) {
                        e.removeEventListener("scroll", r.update, V);
                      }),
                      l && c.removeEventListener("resize", r.update, V);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  r = e.name;
                t.modifiersData[r] = X({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  n = r.gpuAcceleration,
                  o = void 0 === n || n,
                  a = r.adaptive,
                  i = void 0 === a || a,
                  s = r.roundOffsets,
                  l = void 0 === s || s,
                  c = {
                    placement: F(t.placement),
                    variation: $(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    G(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      G(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var r = t.styles[e] || {},
                    n = t.attributes[e] || {},
                    o = t.elements[e];
                  i(o) &&
                    d(o) &&
                    (Object.assign(o.style, r),
                    Object.keys(n).forEach(function (e) {
                      var t = n[e];
                      !1 === t
                        ? o.removeAttribute(e)
                        : o.setAttribute(e, !0 === t ? "" : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  r = {
                    popper: {
                      position: t.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, r.popper),
                  (t.styles = r),
                  t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, r.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var n = t.elements[e],
                        o = t.attributes[e] || {},
                        a = Object.keys(
                          t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]
                        ).reduce(function (e, t) {
                          return (e[t] = ""), e;
                        }, {});
                      i(n) &&
                        d(n) &&
                        (Object.assign(n.style, a),
                        Object.keys(o).forEach(function (e) {
                          n.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ["computeStyles"],
            },
            J,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  r = e.options,
                  n = e.name;
                if (!t.modifiersData[n]._skip) {
                  for (
                    var o = r.mainAxis,
                      a = void 0 === o || o,
                      i = r.altAxis,
                      s = void 0 === i || i,
                      l = r.fallbackPlacements,
                      c = r.padding,
                      u = r.boundary,
                      f = r.rootBoundary,
                      p = r.altBoundary,
                      d = r.flipVariations,
                      v = void 0 === d || d,
                      m = r.allowedAutoPlacements,
                      h = t.options.placement,
                      g = F(h),
                      y =
                        l ||
                        (g === h || !v
                          ? [Z(h)]
                          : (function (e) {
                              if (F(e) === S) return [];
                              var t = Z(e);
                              return [te(e), t, te(t)];
                            })(h)),
                      b = [h].concat(y).reduce(function (e, r) {
                        return e.concat(
                          F(r) === S
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var r = t,
                                  n = r.placement,
                                  o = r.boundary,
                                  a = r.rootBoundary,
                                  i = r.padding,
                                  s = r.flipVariations,
                                  l = r.allowedAutoPlacements,
                                  c = void 0 === l ? W : l,
                                  u = $(n),
                                  f = u
                                    ? s
                                      ? L
                                      : L.filter(function (e) {
                                          return $(e) === u;
                                        })
                                    : D,
                                  p = f.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === p.length && (p = f);
                                var d = p.reduce(function (t, r) {
                                  return (
                                    (t[r] = le(e, {
                                      placement: r,
                                      boundary: o,
                                      rootBoundary: a,
                                      padding: i,
                                    })[F(r)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(d).sort(function (e, t) {
                                  return d[e] - d[t];
                                });
                              })(t, {
                                placement: r,
                                boundary: u,
                                rootBoundary: f,
                                padding: c,
                                flipVariations: v,
                                allowedAutoPlacements: m,
                              })
                            : r
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      O = new Map(),
                      E = !0,
                      C = b[0],
                      k = 0;
                    k < b.length;
                    k++
                  ) {
                    var I = b[k],
                      T = F(I),
                      z = $(I) === M,
                      N = [P, j].indexOf(T) >= 0,
                      _ = N ? "width" : "height",
                      H = le(t, {
                        placement: I,
                        boundary: u,
                        rootBoundary: f,
                        altBoundary: p,
                        padding: c,
                      }),
                      B = N ? (z ? R : A) : z ? j : P;
                    w[_] > x[_] && (B = Z(B));
                    var q = Z(B),
                      U = [];
                    if (
                      (a && U.push(H[T] <= 0),
                      s && U.push(H[B] <= 0, H[q] <= 0),
                      U.every(function (e) {
                        return e;
                      }))
                    ) {
                      (C = I), (E = !1);
                      break;
                    }
                    O.set(I, U);
                  }
                  if (E)
                    for (
                      var V = function (e) {
                          var t = b.find(function (t) {
                            var r = O.get(t);
                            if (r)
                              return r.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (C = t), "break";
                        },
                        K = v ? 3 : 1;
                      K > 0;
                      K--
                    ) {
                      if ("break" === V(K)) break;
                    }
                  t.placement !== C &&
                    ((t.modifiersData[n]._skip = !0),
                    (t.placement = C),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            ue,
            fe,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  n = t.rects.reference,
                  o = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  i = le(t, { elementContext: "reference" }),
                  s = le(t, { altBoundary: !0 }),
                  l = pe(i, n),
                  c = pe(s, o, a),
                  u = de(l),
                  f = de(c);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": f,
                    }
                  ));
              },
            },
          ],
        }),
        me = r(5473);
      function he() {
        return (
          (he =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          he.apply(this, arguments)
        );
      }
      var ge = function (e, t) {
          return {
            var: e,
            varRef: t ? "var(" + e + ", " + t + ")" : "var(" + e + ")",
          };
        },
        ye = {
          arrowShadowColor: ge("--popper-arrow-shadow-color"),
          arrowSize: ge("--popper-arrow-size", "8px"),
          arrowSizeHalf: ge("--popper-arrow-size-half"),
          arrowBg: ge("--popper-arrow-bg"),
          transformOrigin: ge("--popper-transform-origin"),
          arrowOffset: ge("--popper-arrow-offset"),
        };
      var be = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom",
        },
        we = { scroll: !0, resize: !0 };
      var xe = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (e) {
            var t = e.state;
            t.styles.popper.width = t.rects.reference.width + "px";
          },
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements.reference;
              t.elements.popper.style.width = e.offsetWidth + "px";
            };
          },
        },
        Oe = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Ee(t);
          },
          effect: function (e) {
            var t = e.state;
            return function () {
              Ee(t);
            };
          },
        },
        Ee = function (e) {
          var t;
          e.elements.popper.style.setProperty(
            ye.transformOrigin.var,
            ((t = e.placement), be[t])
          );
        },
        Ce = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: function (e) {
            var t = e.state;
            ke(t);
          },
        },
        ke = function (e) {
          var t;
          if (e.placement) {
            var r = Pe(e.placement);
            if (null != (t = e.elements) && t.arrow && r) {
              var n, o;
              Object.assign(
                e.elements.arrow.style,
                (((n = {})[r.property] = r.value),
                (n.width = ye.arrowSize.varRef),
                (n.height = ye.arrowSize.varRef),
                (n.zIndex = -1),
                n)
              );
              var a =
                (((o = {})[ye.arrowSizeHalf.var] =
                  "calc(" + ye.arrowSize.varRef + " / 2)"),
                (o[ye.arrowOffset.var] =
                  "calc(" + ye.arrowSizeHalf.varRef + " * -1)"),
                o);
              for (var i in a) e.elements.arrow.style.setProperty(i, a[i]);
            }
          }
        },
        Pe = function (e) {
          return e.startsWith("top")
            ? { property: "bottom", value: ye.arrowOffset.varRef }
            : e.startsWith("bottom")
            ? { property: "top", value: ye.arrowOffset.varRef }
            : e.startsWith("left")
            ? { property: "right", value: ye.arrowOffset.varRef }
            : e.startsWith("right")
            ? { property: "left", value: ye.arrowOffset.varRef }
            : void 0;
        },
        je = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: function (e) {
            var t = e.state;
            Re(t);
          },
          effect: function (e) {
            var t = e.state;
            return function () {
              Re(t);
            };
          },
        },
        Re = function (e) {
          if (e.elements.arrow) {
            var t,
              r = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
            if (r)
              Object.assign(r.style, {
                transform: "rotate(45deg)",
                background: ye.arrowBg.varRef,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "inherit",
                boxShadow:
                  ((t = e.placement),
                  t.includes("top")
                    ? "1px 1px 1px 0 var(--popper-arrow-shadow-color)"
                    : t.includes("bottom")
                    ? "-1px -1px 1px 0 var(--popper-arrow-shadow-color)"
                    : t.includes("right")
                    ? "-1px 1px 1px 0 var(--popper-arrow-shadow-color)"
                    : t.includes("left")
                    ? "1px -1px 1px 0 var(--popper-arrow-shadow-color)"
                    : void 0),
              });
          }
        },
        Ae = {
          "start-start": { ltr: "left-start", rtl: "right-start" },
          "start-end": { ltr: "left-end", rtl: "right-end" },
          "end-start": { ltr: "right-start", rtl: "left-start" },
          "end-end": { ltr: "right-end", rtl: "left-end" },
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        },
        Se = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start",
        };
      var De = ["size", "shadowColor", "bg", "style"];
      function Me(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.enabled,
          o = void 0 === r || r,
          a = t.modifiers,
          i = t.placement,
          s = void 0 === i ? "bottom" : i,
          l = t.strategy,
          c = void 0 === l ? "absolute" : l,
          u = t.arrowPadding,
          f = void 0 === u ? 8 : u,
          p = t.eventListeners,
          d = void 0 === p || p,
          v = t.offset,
          m = t.gutter,
          h = void 0 === m ? 8 : m,
          g = t.flip,
          y = void 0 === g || g,
          b = t.boundary,
          w = void 0 === b ? "clippingParents" : b,
          x = t.preventOverflow,
          O = void 0 === x || x,
          E = t.matchWidth,
          C = t.direction,
          k = void 0 === C ? "ltr" : C,
          P = (0, me.useRef)(null),
          j = (0, me.useRef)(null),
          R = (0, me.useRef)(null),
          A = (function (e, t) {
            var r, n;
            void 0 === t && (t = "ltr");
            var o = (null == (r = Ae[e]) ? void 0 : r[t]) || e;
            return "ltr" === t ? o : null != (n = Se[e]) ? n : o;
          })(s, k),
          S = (0, me.useRef)(function () {}),
          D = (0, me.useCallback)(
            function () {
              var e;
              o &&
                P.current &&
                j.current &&
                (null == S.current || S.current(),
                (R.current = ve(P.current, j.current, {
                  placement: A,
                  modifiers: [
                    je,
                    Ce,
                    Oe,
                    he({}, xe, { enabled: !!E }),
                    he(
                      { name: "eventListeners" },
                      ((e = d),
                      "object" === typeof e
                        ? { enabled: !0, options: he({}, we, e) }
                        : { enabled: e, options: we })
                    ),
                    { name: "arrow", options: { padding: f } },
                    {
                      name: "offset",
                      options: { offset: null != v ? v : [0, h] },
                    },
                    { name: "flip", enabled: !!y, options: { padding: 8 } },
                    {
                      name: "preventOverflow",
                      enabled: !!O,
                      options: { boundary: w },
                    },
                  ].concat(null != a ? a : []),
                  strategy: c,
                })),
                R.current.forceUpdate(),
                (S.current = R.current.destroy));
            },
            [A, o, a, E, d, f, v, h, y, O, w, c]
          );
        (0, me.useEffect)(function () {
          return function () {
            var e;
            P.current ||
              j.current ||
              (null == (e = R.current) || e.destroy(), (R.current = null));
          };
        }, []);
        var M = (0, me.useCallback)(
            function (e) {
              (P.current = e), D();
            },
            [D]
          ),
          I = (0, me.useCallback)(
            function (e, t) {
              return (
                void 0 === e && (e = {}),
                void 0 === t && (t = null),
                he({}, e, { ref: (0, n.lq)(M, t) })
              );
            },
            [M]
          ),
          T = (0, me.useCallback)(
            function (e) {
              (j.current = e), D();
            },
            [D]
          ),
          z = (0, me.useCallback)(
            function (e, t) {
              return (
                void 0 === e && (e = {}),
                void 0 === t && (t = null),
                he({}, e, {
                  ref: (0, n.lq)(T, t),
                  style: he({}, e.style, {
                    position: c,
                    minWidth: "max-content",
                    inset: "0 auto auto 0",
                  }),
                })
              );
            },
            [c, T]
          ),
          L = (0, me.useCallback)(function (e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = null);
            var r = e;
            return (
              r.size,
              r.shadowColor,
              r.bg,
              r.style,
              he(
                {},
                (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++)
                    (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o;
                })(r, De),
                { ref: t, "data-popper-arrow": "", style: Ie(e) }
              )
            );
          }, []),
          W = (0, me.useCallback)(function (e, t) {
            return (
              void 0 === e && (e = {}),
              void 0 === t && (t = null),
              he({}, e, { ref: t, "data-popper-arrow-inner": "" })
            );
          }, []);
        return {
          update: function () {
            var e;
            null == (e = R.current) || e.update();
          },
          forceUpdate: function () {
            var e;
            null == (e = R.current) || e.forceUpdate();
          },
          transformOrigin: ye.transformOrigin.varRef,
          referenceRef: M,
          popperRef: T,
          getPopperProps: z,
          getArrowProps: L,
          getArrowInnerProps: W,
          getReferenceProps: I,
        };
      }
      function Ie(e) {
        var t = e.size,
          r = e.shadowColor,
          n = e.bg,
          o = he({}, e.style, { position: "absolute" });
        return (
          t && (o["--popper-arrow-size"] = t),
          r && (o["--popper-arrow-shadow-color"] = r),
          n && (o["--popper-arrow-bg"] = n),
          o
        );
      }
      var Te = r(320),
        ze = r(2364),
        Le = r(41),
        We = r(9384),
        Ne = r(9427),
        _e = r(9676),
        He = r(325),
        Be = r(3412);
      function qe() {
        return (
          (qe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          qe.apply(this, arguments)
        );
      }
      function Ue(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var Ve = {
          exit: {
            scale: 0.85,
            opacity: 0,
            transition: {
              opacity: { duration: 0.15, easings: "easeInOut" },
              scale: { duration: 0.2, easings: "easeInOut" },
            },
          },
          enter: {
            scale: 1,
            opacity: 1,
            transition: {
              opacity: { easings: "easeOut", duration: 0.2 },
              scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] },
            },
          },
        },
        Fe = [
          "openDelay",
          "closeDelay",
          "closeOnClick",
          "closeOnMouseDown",
          "closeOnEsc",
          "onOpen",
          "onClose",
          "placement",
          "id",
          "isOpen",
          "defaultIsOpen",
          "arrowSize",
          "arrowShadowColor",
          "arrowPadding",
          "modifiers",
          "isDisabled",
          "gutter",
          "offset",
          "direction",
        ];
      var $e = [
          "children",
          "label",
          "shouldWrapChildren",
          "aria-label",
          "hasArrow",
          "bg",
          "portalProps",
          "background",
          "backgroundColor",
          "bgColor",
        ],
        Ke = (0, ze.m$)(Ne.E.div),
        Xe = (0, ze.Gp)(function (e, t) {
          var r,
            o,
            a = (0, ze.mq)("Tooltip", e),
            i = (0, ze.Lr)(e),
            s = (0, ze.Fg)(),
            l = i.children,
            c = i.label,
            u = i.shouldWrapChildren,
            f = i["aria-label"],
            p = i.hasArrow,
            d = i.bg,
            v = i.portalProps,
            m = i.background,
            h = i.backgroundColor,
            g = i.bgColor,
            y = Ue(i, $e),
            b = null != (r = null != (o = null != m ? m : h) ? o : d) ? r : g;
          b && ((a.bg = b), (a[ye.arrowBg.var] = (0, Le.K1)(s, "colors", b)));
          var w,
            x = (function (e) {
              void 0 === e && (e = {});
              var t = e,
                r = t.openDelay,
                o = void 0 === r ? 0 : r,
                a = t.closeDelay,
                i = void 0 === a ? 0 : a,
                s = t.closeOnClick,
                l = void 0 === s || s,
                c = t.closeOnMouseDown,
                u = t.closeOnEsc,
                f = void 0 === u || u,
                p = t.onOpen,
                d = t.onClose,
                v = t.placement,
                m = t.id,
                h = t.isOpen,
                g = t.defaultIsOpen,
                y = t.arrowSize,
                b = void 0 === y ? 10 : y,
                w = t.arrowShadowColor,
                x = t.arrowPadding,
                O = t.modifiers,
                E = t.isDisabled,
                C = t.gutter,
                k = t.offset,
                P = t.direction,
                j = Ue(t, Fe),
                R = (0, He.qY)({
                  isOpen: h,
                  defaultIsOpen: g,
                  onOpen: p,
                  onClose: d,
                }),
                A = R.isOpen,
                S = R.onOpen,
                D = R.onClose,
                M = Me({
                  enabled: A,
                  placement: v,
                  arrowPadding: x,
                  modifiers: O,
                  gutter: C,
                  offset: k,
                  direction: P,
                }),
                I = M.referenceRef,
                T = M.getPopperProps,
                z = M.getArrowInnerProps,
                L = M.getArrowProps,
                W = (0, He.Me)(m, "tooltip"),
                N = me.useRef(null),
                _ = me.useRef(),
                H = me.useRef(),
                B = me.useCallback(
                  function () {
                    E || (_.current = window.setTimeout(S, o));
                  },
                  [E, S, o]
                ),
                q = me.useCallback(
                  function () {
                    _.current && clearTimeout(_.current),
                      (H.current = window.setTimeout(D, i));
                  },
                  [i, D]
                ),
                U = me.useCallback(
                  function () {
                    l && q();
                  },
                  [l, q]
                ),
                V = me.useCallback(
                  function () {
                    c && q();
                  },
                  [c, q]
                ),
                F = me.useCallback(
                  function (e) {
                    A && "Escape" === e.key && q();
                  },
                  [A, q]
                );
              (0, Be.b)("keydown", f ? F : void 0),
                me.useEffect(function () {
                  return function () {
                    clearTimeout(_.current), clearTimeout(H.current);
                  };
                }, []),
                (0, Be.b)("mouseleave", q, function () {
                  return N.current;
                });
              var $ = me.useCallback(
                  function (e, t) {
                    return (
                      void 0 === e && (e = {}),
                      void 0 === t && (t = null),
                      qe({}, e, {
                        ref: (0, n.lq)(N, t, I),
                        onMouseEnter: (0, Le.v0)(e.onMouseEnter, B),
                        onClick: (0, Le.v0)(e.onClick, U),
                        onMouseDown: (0, Le.v0)(e.onMouseDown, V),
                        onFocus: (0, Le.v0)(e.onFocus, B),
                        onBlur: (0, Le.v0)(e.onBlur, q),
                        "aria-describedby": A ? W : void 0,
                      })
                    );
                  },
                  [B, q, V, A, W, U, I]
                ),
                K = me.useCallback(
                  function (e, t) {
                    var r;
                    return (
                      void 0 === e && (e = {}),
                      void 0 === t && (t = null),
                      T(
                        qe({}, e, {
                          style: qe(
                            {},
                            e.style,
                            ((r = {}),
                            (r[ye.arrowSize.var] = b ? (0, Le.px)(b) : void 0),
                            (r[ye.arrowShadowColor.var] = w),
                            r)
                          ),
                        }),
                        t
                      )
                    );
                  },
                  [T, b, w]
                ),
                X = me.useCallback(
                  function (e, t) {
                    return (
                      void 0 === e && (e = {}),
                      void 0 === t && (t = null),
                      qe({ ref: t }, j, e, {
                        id: W,
                        role: "tooltip",
                        style: qe({}, e.style, {
                          position: "relative",
                          transformOrigin: ye.transformOrigin.varRef,
                        }),
                      })
                    );
                  },
                  [j, W]
                );
              return {
                isOpen: A,
                show: B,
                hide: q,
                getTriggerProps: $,
                getTooltipProps: X,
                getTooltipPositionerProps: K,
                getArrowProps: L,
                getArrowInnerProps: z,
              };
            })(qe({}, y, { direction: s.direction }));
          if ((0, Le.HD)(l) || u)
            w = me.createElement(
              ze.m$.span,
              qe({ tabIndex: 0 }, x.getTriggerProps()),
              l
            );
          else {
            var O = me.Children.only(l);
            w = me.cloneElement(O, x.getTriggerProps(O.props, O.ref));
          }
          var E = !!f,
            C = x.getTooltipProps({}, t),
            k = E ? (0, Le.CE)(C, ["role", "id"]) : C,
            P = (0, Le.ei)(C, ["role", "id"]);
          return c
            ? me.createElement(
                me.Fragment,
                null,
                w,
                me.createElement(
                  _e.M,
                  null,
                  x.isOpen &&
                    me.createElement(
                      Te.h_,
                      v,
                      me.createElement(
                        ze.m$.div,
                        qe({}, x.getTooltipPositionerProps(), {
                          __css: { zIndex: a.zIndex, pointerEvents: "none" },
                        }),
                        me.createElement(
                          Ke,
                          qe({ variants: Ve }, k, {
                            initial: "exit",
                            animate: "enter",
                            exit: "exit",
                            __css: a,
                          }),
                          c,
                          E && me.createElement(We.TX, P, f),
                          p &&
                            me.createElement(
                              ze.m$.div,
                              {
                                "data-popper-arrow": !0,
                                className: "chakra-tooltip__arrow-wrapper",
                              },
                              me.createElement(ze.m$.div, {
                                "data-popper-arrow-inner": !0,
                                className: "chakra-tooltip__arrow",
                                __css: { bg: a.bg },
                              })
                            )
                        )
                      )
                    )
                )
              )
            : me.createElement(me.Fragment, null, l);
        });
      Le.Ts && (Xe.displayName = "Tooltip");
    },
    9384: function (e, t, r) {
      "use strict";
      r.d(t, {
        TX: function () {
          return i;
        },
      });
      var n = r(2364),
        o = r(41),
        a = {
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        i = (0, n.m$)("span", { baseStyle: a });
      o.Ts && (i.displayName = "VisuallyHidden");
      var s = (0, n.m$)("input", { baseStyle: a });
      o.Ts && (s.displayName = "VisuallyHiddenInput");
    },
    8942: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                a = [],
                i = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(i = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  i = !0
                );
              } catch (l) {
                (s = !0), (o = l);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a,
        i = (a = r(5473)) && a.__esModule ? a : { default: a },
        s = r(1195),
        l = r(916),
        c = r(1815);
      var u = {};
      function f(e, t, r, n) {
        if (e && s.isLocalURL(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          u[t + "%" + r + (o ? "%" + o : "")] = !0;
        }
      }
      var p = function (e) {
        var t,
          r = !1 !== e.prefetch,
          n = l.useRouter(),
          a = i.default.useMemo(
            function () {
              var t = o(s.resolveHref(n, e.href, !0), 2),
                r = t[0],
                a = t[1];
              return { href: r, as: e.as ? s.resolveHref(n, e.as) : a || r };
            },
            [n, e.href, e.as]
          ),
          p = a.href,
          d = a.as,
          v = i.default.useRef(p),
          m = i.default.useRef(d),
          h = e.children,
          g = e.replace,
          y = e.shallow,
          b = e.scroll,
          w = e.locale;
        "string" === typeof h && (h = i.default.createElement("a", null, h));
        var x =
            (t = i.default.Children.only(h)) && "object" === typeof t && t.ref,
          O = o(c.useIntersection({ rootMargin: "200px" }), 3),
          E = O[0],
          C = O[1],
          k = O[2],
          P = i.default.useCallback(
            function (e) {
              (m.current === d && v.current === p) ||
                (k(), (m.current = d), (v.current = p)),
                E(e),
                x &&
                  ("function" === typeof x
                    ? x(e)
                    : "object" === typeof x && (x.current = e));
            },
            [d, x, p, k, E]
          );
        i.default.useEffect(
          function () {
            var e = C && r && s.isLocalURL(p),
              t = "undefined" !== typeof w ? w : n && n.locale,
              o = u[p + "%" + d + (t ? "%" + t : "")];
            e && !o && f(n, p, d, { locale: t });
          },
          [d, p, C, w, r, n]
        );
        var j = {
          ref: P,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, a, i, l) {
                  ("A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(r))) &&
                    (e.preventDefault(),
                    t[o ? "replace" : "push"](r, n, {
                      shallow: a,
                      locale: l,
                      scroll: i,
                    }));
                })(e, n, p, d, g, y, b, w);
          },
          onMouseEnter: function (e) {
            t.props &&
              "function" === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              s.isLocalURL(p) && f(n, p, d, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var R = "undefined" !== typeof w ? w : n && n.locale,
            A =
              n &&
              n.isLocaleDomain &&
              s.getDomainLocale(d, R, n && n.locales, n && n.domainLocales);
          j.href = A || s.addBasePath(s.addLocale(d, R, n && n.defaultLocale));
        }
        return i.default.cloneElement(t, j);
      };
      (t.default = p),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          (Object.assign(t.default, t), (e.exports = t.default));
    },
    1815: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                a = [],
                i = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(i = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  i = !0
                );
              } catch (l) {
                (s = !0), (o = l);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            n = e.disabled || !s,
            u = a.useRef(),
            f = o(a.useState(!1), 2),
            p = f[0],
            d = f[1],
            v = o(a.useState(t ? t.current : null), 2),
            m = v[0],
            h = v[1],
            g = a.useCallback(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  n ||
                    p ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t,
                              r = {
                                root: e.root || null,
                                margin: e.rootMargin || "",
                              },
                              n = c.find(function (e) {
                                return (
                                  e.root === r.root && e.margin === r.margin
                                );
                              });
                            n ? (t = l.get(n)) : ((t = l.get(r)), c.push(r));
                            if (t) return t;
                            var o = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              l.set(
                                r,
                                (t = { id: r, observer: a, elements: o })
                              ),
                              t
                            );
                          })(r),
                          o = n.id,
                          a = n.observer,
                          i = n.elements;
                        return (
                          i.set(e, t),
                          a.observe(e),
                          function () {
                            if ((i.delete(e), a.unobserve(e), 0 === i.size)) {
                              a.disconnect(), l.delete(o);
                              var t = c.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && c.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { root: m, rootMargin: r }
                      )));
              },
              [n, m, r, p]
            ),
            y = a.useCallback(function () {
              d(!1);
            }, []);
          return (
            a.useEffect(
              function () {
                if (!s && !p) {
                  var e = i.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return i.cancelIdleCallback(e);
                  };
                }
              },
              [p]
            ),
            a.useEffect(
              function () {
                t && h(t.current);
              },
              [t]
            ),
            [g, p, y]
          );
        });
      var a = r(5473),
        i = r(2216),
        s = "undefined" !== typeof IntersectionObserver;
      var l = new Map(),
        c = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    3556: function (e, t, r) {
      e.exports = r(8942);
    },
    3908: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var n = r(5473),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.default.createContext && n.default.createContext(o),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        s = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        };
      function l(e) {
        return (
          e &&
          e.map(function (e, t) {
            return n.default.createElement(
              e.tag,
              i({ key: t }, e.attr),
              l(e.child)
            );
          })
        );
      }
      function c(e) {
        return function (t) {
          return n.default.createElement(
            u,
            i({ attr: i({}, e.attr) }, t),
            l(e.child)
          );
        };
      }
      function u(e) {
        var t = function (t) {
          var r,
            o = e.attr,
            a = e.size,
            l = e.title,
            c = s(e, ["attr", "size", "title"]),
            u = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.default.createElement(
              "svg",
              i(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                c,
                {
                  className: r,
                  style: i(i({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.default.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== a
          ? n.default.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
  },
]);

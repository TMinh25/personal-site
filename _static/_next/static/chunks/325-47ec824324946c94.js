(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [325],
  {
    325: function (e, n, t) {
      "use strict";
      t.d(n, {
        Me: function () {
          return s;
        },
        NW: function () {
          return p;
        },
        qY: function () {
          return f;
        },
        qq: function () {
          return m;
        },
        vc: function () {
          return l;
        },
      });
      var r = t(5473),
        o = t(3412),
        u = (t(5912), t(41));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      var c = { current: 1 },
        i = r.createContext(c),
        l = r.memo(function (e) {
          var n = e.children;
          return r.createElement(i.Provider, { value: { current: 1 } }, n);
        });
      function s(e, n) {
        var t = r.useContext(i),
          o = r.useState(t.current),
          u = o[0],
          a = o[1];
        return (
          r.useEffect(
            function () {
              a(
                (function (e) {
                  return e.current++;
                })(t)
              );
            },
            [t]
          ),
          r.useMemo(
            function () {
              return e || [n, u].filter(Boolean).join("-");
            },
            [e, n, u]
          )
        );
      }
      function f(e) {
        void 0 === e && (e = {});
        var n = e,
          t = n.onClose,
          c = n.onOpen,
          i = n.isOpen,
          l = n.id,
          f = (0, o.u)(c),
          d = (0, o.u)(t),
          p = r.useState(e.defaultIsOpen || !1),
          v = p[0],
          m = p[1],
          y = (function (e, n) {
            var t = void 0 !== e;
            return [t, t && "undefined" !== typeof e ? e : n];
          })(i, v),
          g = y[0],
          C = y[1],
          b = s(l, "disclosure"),
          w = r.useCallback(
            function () {
              g || m(!1), null == d || d();
            },
            [g, d]
          ),
          h = r.useCallback(
            function () {
              g || m(!0), null == f || f();
            },
            [g, f]
          ),
          E = r.useCallback(
            function () {
              (C ? w : h)();
            },
            [C, h, w]
          );
        return {
          isOpen: !!C,
          onOpen: h,
          onClose: w,
          onToggle: E,
          isControlled: g,
          getButtonProps: function (e) {
            return (
              void 0 === e && (e = {}),
              a({}, e, {
                "aria-expanded": "true",
                "aria-controls": b,
                onClick: (0, u.v0)(e.onClick, E),
              })
            );
          },
          getDisclosureProps: function (e) {
            return void 0 === e && (e = {}), a({}, e, { hidden: !C, id: b });
          },
        };
      }
      function d(e, n) {
        return (
          void 0 === n && (n = []),
          r.useEffect(function () {
            return function () {
              return e();
            };
          }, n)
        );
      }
      function p() {
        var e = r.useRef(!1),
          n = r.useState(0),
          t = n[0],
          o = n[1];
        return (
          d(function () {
            e.current = !0;
          }),
          r.useCallback(
            function () {
              e.current || o(t + 1);
            },
            [t]
          )
        );
      }
      function v(e, n) {
        if (null != e)
          if ("function" !== typeof e)
            try {
              e.current = n;
            } catch (t) {
              throw new Error(
                "Cannot assign value '" + n + "' to ref '" + e + "'"
              );
            }
          else e(n);
      }
      function m() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return r.useMemo(function () {
          return n.every(function (e) {
            return null == e;
          })
            ? null
            : function (e) {
                n.forEach(function (n) {
                  n && v(n, e);
                });
              };
        }, n);
      }
    },
    3412: function (e, n, t) {
      "use strict";
      t.d(n, {
        a: function () {
          return u;
        },
        b: function () {
          return c;
        },
        u: function () {
          return a;
        },
      });
      var r = t(41),
        o = t(5473),
        u = r.jU ? o.useLayoutEffect : o.useEffect;
      function a(e, n) {
        void 0 === n && (n = []);
        var t = o.useRef(e);
        return (
          u(function () {
            t.current = e;
          }),
          o.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current.apply(t, n);
          }, n)
        );
      }
      function c(e, n, t, u) {
        var c = a(n);
        return (
          o.useEffect(
            function () {
              var o,
                a = null != (o = (0, r.Pu)(t)) ? o : document;
              if (n)
                return (
                  a.addEventListener(e, c, u),
                  function () {
                    a.removeEventListener(e, c, u);
                  }
                );
            },
            [e, t, u, c, n]
          ),
          function () {
            var n;
            (null != (n = (0, r.Pu)(t)) ? n : document).removeEventListener(
              e,
              c,
              u
            );
          }
        );
      }
    },
    5912: function (e, n, t) {
      "use strict";
      var r = t(6935),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, n) {
        var t,
          u,
          a,
          c,
          i,
          l,
          s = !1;
        n || (n = {}), (t = n.debug || !1);
        try {
          if (
            ((a = r()),
            (c = document.createRange()),
            (i = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), n.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  t && console.warn("unable to use e.clipboardData"),
                    t && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var u = o[n.format] || o.default;
                  window.clipboardData.setData(u, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(n.format, e);
              n.onCopy && (r.preventDefault(), n.onCopy(r.clipboardData));
            }),
            document.body.appendChild(l),
            c.selectNodeContents(l),
            i.addRange(c),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (f) {
          t && console.error("unable to copy using execCommand: ", f),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(n.format || "text", e),
              n.onCopy && n.onCopy(window.clipboardData),
              (s = !0);
          } catch (f) {
            t && console.error("unable to copy using clipboardData: ", f),
              t && console.error("falling back to prompt"),
              (u = (function (e) {
                var n =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, n);
              })(
                "message" in n ? n.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(u, e);
          }
        } finally {
          i &&
            ("function" == typeof i.removeRange
              ? i.removeRange(c)
              : i.removeAllRanges()),
            l && document.body.removeChild(l),
            a();
        }
        return s;
      };
    },
    6935: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var n = document.activeElement, t = [], r = 0;
          r < e.rangeCount;
          r++
        )
          t.push(e.getRangeAt(r));
        switch (n.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            n.blur();
            break;
          default:
            n = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                t.forEach(function (n) {
                  e.addRange(n);
                }),
              n && n.focus();
          }
        );
      };
    },
  },
]);

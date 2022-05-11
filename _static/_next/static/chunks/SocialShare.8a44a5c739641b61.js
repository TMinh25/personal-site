"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    6007: function (t, e, r) {
      r.r(e);
      var n = r(3312),
        o = r(9207),
        l = (r(5473), r(8652));
      e.default = function (t) {
        var e = t.title,
          r = t.url,
          c = void 0 === r ? window.location.href : r,
          a = [
            {
              href: "https://twitter.com/intent/tweet?text="
                .concat(e, "&url=")
                .concat(c),
              label: "Twitter",
              icon: l.JUd,
              bg: "#1DA1F2",
            },
            {
              href: "https://www.facebook.com/sharer/sharer.php?u=".concat(c),
              label: "Facebook",
              icon: l.egd,
              bg: "#4267B2",
            },
            {
              href: "https://www.linkedin.com/shareArticle?url="
                .concat(c, "&title=")
                .concat(e),
              label: "LinkedIn",
              icon: l.gXb,
              bg: "#2867B2",
            },
          ];
        return (0, n.BX)(o.gC, {
          alignItems: "left",
          children: [
            (0, n.tZ)(o.X6, { size: "sm", children: "Share" }),
            (0, n.tZ)(o.Ug, {
              spacing: 2,
              children: a.map(function (t, e) {
                return (0,
                n.tZ)(o.rU, { py: 2, px: 4, href: t.href, rounded: "sm", bg: t.bg, isExternal: !0, _hover: { textDecoration: "none" }, borderWidth: 1, borderColor: "blue.400", children: (0, n.tZ)(o.Ug, { spacing: 2, alignItems: "center", children: (0, n.tZ)(o.xu, { as: t.icon }) }) }, e);
              }),
            }),
          ],
        });
      };
    },
    3908: function (t, e, r) {
      r.d(e, {
        w_: function () {
          return u;
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
        l = n.default.createContext && n.default.createContext(o),
        c = function () {
          return (
            (c =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            c.apply(this, arguments)
          );
        },
        a = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
              e.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
                (r[n[o]] = t[n[o]]);
          }
          return r;
        };
      function i(t) {
        return (
          t &&
          t.map(function (t, e) {
            return n.default.createElement(
              t.tag,
              c({ key: e }, t.attr),
              i(t.child)
            );
          })
        );
      }
      function u(t) {
        return function (e) {
          return n.default.createElement(
            s,
            c({ attr: c({}, t.attr) }, e),
            i(t.child)
          );
        };
      }
      function s(t) {
        var e = function (e) {
          var r,
            o = t.attr,
            l = t.size,
            i = t.title,
            u = a(t, ["attr", "size", "title"]),
            s = l || e.size || "1em";
          return (
            e.className && (r = e.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            n.default.createElement(
              "svg",
              c(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                o,
                u,
                {
                  className: r,
                  style: c(c({ color: t.color || e.color }, e.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && n.default.createElement("title", null, i),
              t.children
            )
          );
        };
        return void 0 !== l
          ? n.default.createElement(l.Consumer, null, function (t) {
              return e(t);
            })
          : e(o);
      }
    },
  },
]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [558],
  {
    2871: function (r, e, t) {
      t.r(e);
      var o = t(3312),
        n = t(9207),
        l = t(3855),
        a = (t(5473), t(7404)),
        c = t(8652);
      e.default = function (r) {
        var e = r.type,
          t = void 0 === e ? "info" : e,
          i = r.children,
          u = {
            error: { icon: c.eyB, bgColor: "red.800", color: "red.200" },
            info: { icon: c.nj5, bgColor: "gray.900", color: "gray.200" },
            warning: {
              icon: c.SVk,
              bgColor: "yellow.800",
              color: "yellow.200",
            },
          };
        return (0, o.tZ)(n.xu, {
          p: 4,
          rounded: "sm",
          bgColor: u[t].bgColor,
          color: u[t].color,
          mr: 2,
          borderWidth: 1,
          borderColor: "gray.700",
          children: (0, o.BX)(n.Ug, {
            spacing: 2,
            pos: "relative",
            children: [
              (0, o.tZ)(l.JO, {
                as: u[t].icon,
                fontSize: 40,
                pos: "absolute",
                top: "-30px",
                right: "-25px",
                bgColor: "gray.900",
                rounded: "full",
                padding: 1,
                color: u[t].color,
                borderWidth: 1,
                borderColor: "gray.700",
              }),
              (0, o.tZ)(n.xu, {
                sx: {
                  "> p": {
                    margin: 0,
                    color: a.rS.colors.gray[200],
                    fontSize: a.rS.fontSizes.md,
                    letterSpacing: a.rS.letterSpacings.wide,
                  },
                },
                children: i,
              }),
            ],
          }),
        });
      };
    },
    3908: function (r, e, t) {
      t.d(e, {
        w_: function () {
          return u;
        },
      });
      var o = t(5473),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = o.default.createContext && o.default.createContext(n),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (r) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var n in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r;
              }),
            a.apply(this, arguments)
          );
        },
        c = function (r, e) {
          var t = {};
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) &&
              e.indexOf(o) < 0 &&
              (t[o] = r[o]);
          if (null != r && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(r); n < o.length; n++)
              e.indexOf(o[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(r, o[n]) &&
                (t[o[n]] = r[o[n]]);
          }
          return t;
        };
      function i(r) {
        return (
          r &&
          r.map(function (r, e) {
            return o.default.createElement(
              r.tag,
              a({ key: e }, r.attr),
              i(r.child)
            );
          })
        );
      }
      function u(r) {
        return function (e) {
          return o.default.createElement(
            s,
            a({ attr: a({}, r.attr) }, e),
            i(r.child)
          );
        };
      }
      function s(r) {
        var e = function (e) {
          var t,
            n = r.attr,
            l = r.size,
            i = r.title,
            u = c(r, ["attr", "size", "title"]),
            s = l || e.size || "1em";
          return (
            e.className && (t = e.className),
            r.className && (t = (t ? t + " " : "") + r.className),
            o.default.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                n,
                u,
                {
                  className: t,
                  style: a(a({ color: r.color || e.color }, e.style), r.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && o.default.createElement("title", null, i),
              r.children
            )
          );
        };
        return void 0 !== l
          ? o.default.createElement(l.Consumer, null, function (r) {
              return e(r);
            })
          : e(n);
      }
    },
  },
]);

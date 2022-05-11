"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [200],
  {
    7932: function (e, t, r) {
      r.r(t);
      var n = r(3312),
        l = r(9207),
        i = (r(5473), r(8652));
      t.default = function (e) {
        var t = e.description,
          r = e.githubLink,
          o = e.demoLink;
        return (0, n.BX)(l.gC, {
          spacing: 0,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pb: 12,
          children: [
            (0, n.tZ)(l.xu, { children: (0, n.tZ)(l.xv, { children: t }) }),
            (0, n.tZ)(l.xu, {
              children: (0, n.tZ)(l.xu, {
                d: "flex",
                alignItems: "center",
                children: (0, n.BX)(l.Ug, {
                  spacing: 4,
                  children: [
                    !!r &&
                      (0, n.tZ)(l.rU, {
                        py: 2,
                        px: 4,
                        href: r,
                        rounded: "sm",
                        bg: "gray.600",
                        color: "white",
                        fontWeight: "bold",
                        isExternal: !0,
                        textDecoration: "none",
                        borderWidth: 1,
                        borderColor: "gray.500",
                        children: (0, n.BX)(l.Ug, {
                          spacing: 2,
                          alignItems: "center",
                          children: [
                            (0, n.tZ)(l.xu, { as: i.JOq }),
                            (0, n.tZ)(l.xu, { children: "View source" }),
                          ],
                        }),
                      }),
                    !!o &&
                      (0, n.tZ)(l.rU, {
                        py: 2,
                        px: 4,
                        href: o,
                        rounded: "sm",
                        bg: "blue.600",
                        color: "white",
                        fontWeight: "bold",
                        isExternal: !0,
                        borderWidth: 1,
                        borderColor: "blue.400",
                        children: (0, n.BX)(l.Ug, {
                          spacing: 2,
                          alignItems: "center",
                          children: [
                            (0, n.tZ)(l.xu, { as: i.qVU }),
                            (0, n.tZ)(l.xu, { children: "View demo" }),
                          ],
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    7457: function (e, t, r) {
      r.r(t);
      var n = r(3312),
        l = r(9207);
      r(5473);
      t.default = function () {
        return (0, n.BX)(l.gC, {
          spacing: 8,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pt: 24,
          pb: 12,
          children: [
            (0, n.tZ)(l.xu, {
              children: (0, n.tZ)(l.X6, {
                as: "h1",
                fontFamily: "body",
                bgColor: "blue.400",
                bgClip: "text",
                size: "4xl",
                bgGradient: "linear(to-l, #79c2ff, #4a5888)",
                className: "jumbotron-name-heading",
                children: "Tr\u01b0\u1eddng Minh",
              }),
            }),
            (0, n.tZ)(l.xu, {
              children: (0, n.BX)(l.X6, {
                as: "h2",
                size: "lg",
                lineHeight: "tall",
                color: "gray.500",
                fontWeight: "medium",
                children: [
                  "I'm a",
                  " ",
                  (0, n.tZ)(l.xu, {
                    as: "span",
                    color: "gray.300",
                    children: "Developer",
                  }),
                  ", who likes",
                  " ",
                  (0, n.BX)(l.xu, {
                    as: "span",
                    color: "gray.300",
                    children: ["Designing,", " "],
                  }),
                  " ",
                  "and",
                  " ",
                  (0, n.tZ)(l.xu, {
                    as: "span",
                    color: "gray.300",
                    children: "Building Open Source",
                  }),
                  " ",
                  "projects.",
                ],
              }),
            }),
          ],
        });
      };
    },
    3908: function (e, t, r) {
      r.d(t, {
        w_: function () {
          return u;
        },
      });
      var n = r(5473),
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.default.createContext && n.default.createContext(l),
        o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var l in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }),
            o.apply(this, arguments)
          );
        },
        a = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (n = Object.getOwnPropertySymbols(e); l < n.length; l++)
              t.indexOf(n[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (r[n[l]] = e[n[l]]);
          }
          return r;
        };
      function c(e) {
        return (
          e &&
          e.map(function (e, t) {
            return n.default.createElement(
              e.tag,
              o({ key: t }, e.attr),
              c(e.child)
            );
          })
        );
      }
      function u(e) {
        return function (t) {
          return n.default.createElement(
            s,
            o({ attr: o({}, e.attr) }, t),
            c(e.child)
          );
        };
      }
      function s(e) {
        var t = function (t) {
          var r,
            l = e.attr,
            i = e.size,
            c = e.title,
            u = a(e, ["attr", "size", "title"]),
            s = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.default.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                l,
                u,
                {
                  className: r,
                  style: o(o({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && n.default.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.default.createElement(i.Consumer, null, function (e) {
              return t(e);
            })
          : t(l);
      }
    },
  },
]);

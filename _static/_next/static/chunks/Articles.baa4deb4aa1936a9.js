"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [973],
  {
    8651: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var n = r(3312),
        i = r(3855),
        l = r(2364),
        a = r(41),
        c = r(5473);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      var s = (0, l.Gp)(function (e, t) {
        var r = (0, l.jC)("Tag", e),
          n = (0, l.Lr)(e),
          i = o(
            {
              display: "inline-flex",
              verticalAlign: "top",
              alignItems: "center",
              maxWidth: "100%",
            },
            r.container
          );
        return c.createElement(
          l.Fo,
          { value: r },
          c.createElement(l.m$.span, o({ ref: t }, n, { __css: i }))
        );
      });
      a.Ts && (s.displayName = "Tag");
      var d = (0, l.Gp)(function (e, t) {
        var r = (0, l.yK)();
        return c.createElement(
          l.m$.span,
          o({ ref: t, isTruncated: !0 }, e, { __css: r.label })
        );
      });
      a.Ts && (d.displayName = "TagLabel");
      var h = (0, l.Gp)(function (e, t) {
        return c.createElement(
          i.JO,
          o({ ref: t, verticalAlign: "top", marginEnd: "0.5rem" }, e)
        );
      });
      a.Ts && (h.displayName = "TagLeftIcon");
      var u = (0, l.Gp)(function (e, t) {
        return c.createElement(
          i.JO,
          o({ ref: t, verticalAlign: "top", marginStart: "0.5rem" }, e)
        );
      });
      a.Ts && (u.displayName = "TagRightIcon");
      var g = function (e) {
        return c.createElement(
          i.JO,
          o({ verticalAlign: "inherit", viewBox: "0 0 512 512" }, e),
          c.createElement("path", {
            fill: "currentColor",
            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z",
          })
        );
      };
      a.Ts && (g.displayName = "TagCloseIcon");
      a.Ts;
      var f = r(9207),
        p = r(9624),
        m = r.n(p),
        v = r(4576),
        b = r.n(v),
        Z = r(3556),
        x = r.n(Z);
      m().extend(b());
      var w = function (e) {
        var t = e.articles,
          r = void 0 === t ? [] : t,
          i = e.hideViewAllLinksNode,
          l = void 0 !== i && i,
          a = e.currentTag,
          o = e.currentCategory,
          h = e.heading,
          u = (0, c.useState)(""),
          g = u[0],
          p =
            (u[1],
            r
              .sort(function (e, t) {
                return Number(new Date(t.date)) - Number(new Date(e.date));
              })
              .filter(function (e) {
                return e.title.toLowerCase().includes(g.toLowerCase());
              })),
          v = function (e, t) {
            return (0, n.BX)(f.Ug, {
              spacing: 4,
              alignItems: "center",
              children: [
                (0, n.tZ)(f.xv, {
                  fontSize: "sm",
                  color: "gray.400",
                  children: m()(e).format("LL"),
                }),
                "publication" === t &&
                  (0, n.BX)(n.HY, {
                    children: [
                      (0, n.tZ)(f.xu, { children: "\u2022" }),
                      (0, n.tZ)(s, {
                        size: "sm",
                        colorScheme: "blue",
                        borderRadius: "full",
                        variant: "subtle",
                        children: (0, n.tZ)(d, { children: "Publication" }),
                      }),
                    ],
                  }),
              ],
            });
          },
          b = function (e) {
            return (0, n.tZ)(f.X6, {
              as: "h3",
              size: "md",
              color: "blue.400",
              fontWeight: "bold",
              children: e,
            });
          },
          Z = function (e) {
            return (0, n.tZ)(f.xv, { color: "gray.400", children: e });
          };
        return (0, n.BX)(f.gC, {
          spacing: 8,
          align: "left",
          children: [
            a
              ? (0, n.BX)(f.gC, {
                  spacing: 2,
                  align: "left",
                  children: [
                    (0, n.tZ)(f.X6, {
                      as: "h1",
                      size: "lg",
                      color: "white",
                      children: "Articles",
                    }),
                    (0, n.BX)(f.xv, {
                      children: ['Posts tagged with "', a, '"'],
                    }),
                  ],
                })
              : o
              ? (0, n.BX)(f.gC, {
                  spacing: 2,
                  align: "left",
                  children: [
                    (0, n.tZ)(f.X6, {
                      as: "h1",
                      size: "lg",
                      color: "white",
                      children: "Articles",
                    }),
                    (0, n.BX)(f.xv, {
                      children: [
                        'Posts which belong to the "',
                        o,
                        '" category',
                      ],
                    }),
                  ],
                })
              : h
              ? (0, n.tZ)(f.X6, { as: "h2", size: "lg", children: h })
              : l
              ? (0, n.BX)(f.gC, {
                  spacing: 2,
                  align: "left",
                  children: [
                    (0, n.tZ)(f.X6, {
                      as: "h1",
                      size: "lg",
                      color: "white",
                      children: "Articles",
                    }),
                    (0, n.tZ)(f.xv, {
                      children:
                        "Posts related to some of the latest technologies",
                    }),
                  ],
                })
              : (0, n.BX)(f.xu, {
                  d: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [
                    (0, n.tZ)(f.X6, {
                      as: "h2",
                      size: "lg",
                      color: "white",
                      children: "Articles",
                    }),
                    (0, n.tZ)(x(), {
                      href: "/articles",
                      passHref: !0,
                      children: (0, n.tZ)(f.rU, {
                        p: 2,
                        href: "/articles",
                        rounded: "sm",
                        fontSize: "sm",
                        borderWidth: 1,
                        borderColor: "transparent",
                        _hover: {
                          textDecoration: "none",
                          borderWidth: 1,
                          borderColor: "gray.700",
                          bg: "gray.900",
                        },
                        children: (0, n.tZ)(f.xu, {
                          color: "gray.300",
                          children: "View all articles",
                        }),
                      }),
                    }),
                  ],
                }),
            p.length
              ? p.map(function (e, t) {
                  return e.slug
                    ? (0, n.tZ)(
                        f.xu,
                        {
                          children: (0, n.tZ)(x(), {
                            href: "/articles/".concat(e.slug),
                            children: (0, n.tZ)("a", {
                              children: (0, n.tZ)(f.xu, {
                                children: (0, n.BX)(f.gC, {
                                  spacing: 1,
                                  align: "left",
                                  children: [
                                    v(e.date, "article"),
                                    b(e.title),
                                    Z(e.description),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        },
                        t
                      )
                    : (0, n.tZ)(
                        f.xu,
                        {
                          children: (0, n.tZ)(f.xu, {
                            children: (0, n.BX)(f.gC, {
                              spacing: 1,
                              align: "left",
                              children: [
                                v(e.date, "publication"),
                                b(e.title),
                                Z(e.description),
                              ],
                            }),
                          }),
                        },
                        t
                      );
                })
              : (0, n.tZ)(f.gC, {
                  mx: "auto",
                  textAlign: "center",
                  w: "100%",
                  children: (0, n.tZ)(f.xv, { children: "No articles found!" }),
                }),
          ],
        });
      };
    },
  },
]);

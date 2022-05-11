"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [877],
  {
    5121: function (e, r, t) {
      t.r(r);
      var n = t(3312),
        i = t(9207),
        l = t(5473);
      r.default = function (e) {
        var r = e.projects,
          t = void 0 === r ? [] : r,
          o = (0, l.useState)(""),
          c = o[0],
          a =
            (o[1],
            t.filter(function (e) {
              return e.title.toLowerCase().includes(c.toLowerCase());
            }));
        return (0, n.BX)(i.gC, {
          spacing: 8,
          align: "left",
          children: [
            (0, n.tZ)(i.xu, {
              children: (0, n.BX)(i.gC, {
                spacing: 2,
                align: "left",
                children: [
                  (0, n.tZ)(i.X6, {
                    as: "h1",
                    size: "lg",
                    color: "white",
                    children: "Projects",
                  }),
                  (0, n.tZ)(i.xv, {
                    children:
                      "Open Source Projects developed and available on Github",
                  }),
                ],
              }),
            }),
            a.length
              ? (0, n.tZ)(i.rj, {
                  templateColumns: [
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ],
                  gap: 8,
                  children: a.map(function (e, r) {
                    return (0,
                    n.tZ)(i.xu, { bg: "gray.900", color: "white", rounded: "sm", borderWidth: 1, borderColor: "gray.700", children: (0, n.tZ)("a", { href: e.url, target: "_blank", rel: "noopener noreferrer", children: (0, n.tZ)(i.xu, { p: 8, children: (0, n.tZ)(i.gC, { spacing: 4, minH: 24, justifyContent: "space-between", align: "left", children: (0, n.BX)(i.gC, { spacing: 1, align: "left", children: [((l = e.title), (0, n.tZ)(i.X6, { as: "h3", size: "md", lineHeight: "tall", color: "blue.400", children: l })), ((t = e.description), (0, n.tZ)(i.xv, { color: "gray.400", children: t }))] }) }) }) }) }, r);
                    var t, l;
                  }),
                })
              : (0, n.tZ)(i.gC, {
                  mx: "auto",
                  textAlign: "center",
                  w: "100%",
                  children: (0, n.tZ)(i.xv, { children: "No projects found!" }),
                }),
          ],
        });
      };
    },
    676: function (e, r, t) {
      t.r(r);
      var n = t(3312),
        i = t(9207),
        l = t(8399),
        o = t(3855),
        c = t(3556),
        a = t.n(c),
        d = t(5473),
        h = t(8652);
      r.default = function (e) {
        var r = e.projects,
          t = void 0 === r ? [] : r,
          c = e.hideViewAllLinksNode,
          s = void 0 !== c && c,
          g = (0, d.useState)(""),
          u = g[0],
          p =
            (g[1],
            t.filter(function (e) {
              return e.title.toLowerCase().includes(u.toLowerCase());
            }));
        return (0, n.BX)(i.gC, {
          spacing: 8,
          align: "left",
          children: [
            (0, n.BX)(i.xu, {
              pb: 4,
              d: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              children: [
                (0, n.tZ)(i.X6, {
                  as: "h2",
                  size: "lg",
                  color: "white",
                  children: "Projects",
                }),
                !s &&
                  (0, n.BX)(i.Ug, {
                    children: [
                      (0, n.tZ)(a(), {
                        href: "/projects",
                        passHref: !0,
                        children: (0, n.tZ)(i.rU, {
                          p: 2,
                          href: "/projects",
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
                          children: (0, n.tZ)(i.xu, {
                            color: "gray.300",
                            children: "View all projects",
                          }),
                        }),
                      }),
                      (0, n.tZ)("a", {
                        href: "https://github.com/TMinh25",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, n.tZ)(l.u, {
                          label: "View on Github",
                          children: (0, n.tZ)(i.xu, {
                            color: "gray.300",
                            children: (0, n.tZ)(o.JO, { as: h.JOq }),
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            p.length
              ? (0, n.tZ)(i.gC, {
                  spacing: 8,
                  children: p.map(function (e, r) {
                    return (0,
                    n.tZ)(i.rU, { bg: "gray.900", color: "white", rounded: "sm", href: e.url, isExternal: !0, w: "100%", _hover: {}, borderWidth: 1, borderColor: "gray.700", children: (0, n.tZ)(i.xu, { p: 4, children: (0, n.tZ)(i.gC, { spacing: 4, justifyContent: "space-between", align: "left", children: (0, n.BX)(i.gC, { spacing: 1, align: "left", children: [((l = e.title), (0, n.tZ)(i.X6, { as: "h3", size: "md", lineHeight: "tall", color: "blue.400", children: l })), ((t = e.description), (0, n.tZ)(i.xv, { color: "gray.400", children: t }))] }) }) }) }, r);
                    var t, l;
                  }),
                })
              : (0, n.tZ)(i.gC, {
                  mx: "auto",
                  textAlign: "center",
                  w: "100%",
                  children: (0, n.tZ)(i.xv, { children: "No projects found!" }),
                }),
          ],
        });
      };
    },
  },
]);

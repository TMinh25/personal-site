"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686],
  {
    9788: function (e, r, n) {
      n.r(r);
      var t = n(3312),
        a = n(9207),
        s = n(5473),
        i = n(4499),
        l = n.n(i);
      r.default = function (e) {
        var r = e.src,
          n = e.alt,
          i = e.height,
          o = e.width,
          u = (0, s.useState)(!1),
          h = u[0],
          c = u[1];
        return (0, t.tZ)(a.rU, {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          children: (0, t.BX)(a.gC, {
            bg: "gray.900",
            borderRadius: "sm",
            mx: 0,
            spacing: 0,
            as: "span",
            borderWidth: 1,
            borderColor: "gray.700",
            children: [
              (0, t.tZ)(a.xu, {
                pos: "relative",
                w: "100%",
                h: "100%",
                className: "image",
                children: (0, t.tZ)(l(), {
                  src: r,
                  alt: n,
                  height: i,
                  width: o,
                  layout: "responsive",
                  className: h ? "unblur" : "",
                  onLoadingComplete: function () {
                    return c(!0);
                  },
                }),
              }),
              (0, t.tZ)(a.xu, {
                fontSize: "sm",
                p: 2,
                as: "span",
                children: n,
              }),
            ],
          }),
        });
      };
    },
  },
]);

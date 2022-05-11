(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [591],
  {
    6112: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/categories/[slug]",
        function () {
          return t(9647);
        },
      ]);
    },
    9647: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return o;
          },
          config: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      var r = t(3312),
        u = t(9207),
        i = t(3697),
        a =
          (t(5473),
          (0, i.default)(
            function () {
              return Promise.all([t.e(669), t.e(973)]).then(t.bind(t, 8651));
            },
            {
              loadableGenerated: {
                webpack: function () {
                  return [8651];
                },
              },
            }
          )),
        c = function (e) {
          var n = e.articles,
            t = void 0 === n ? [] : n,
            i = e.currentCategory,
            c = t.sort(function (e, n) {
              return Number(new Date(n.date)) - Number(new Date(e.date));
            });
          return (0, r.tZ)(u.xu, {
            maxW: "2xl",
            mx: "auto",
            px: 4,
            py: 8,
            children: (0, r.tZ)(u.rj, {
              templateColumns: "1fr",
              children: (0, r.tZ)(u.xu, {
                as: "section",
                children: (0, r.tZ)(a, {
                  articles: c,
                  hideViewAllLinksNode: !0,
                  currentCategory: i,
                }),
              }),
            }),
          });
        },
        o = !0,
        l = { unstable_runtimeJS: !1 },
        s = function (e) {
          var n = e.articles,
            t = e.currentCategory;
          return (0, r.tZ)(c, { articles: n, currentCategory: t });
        };
    },
  },
  function (e) {
    e.O(0, [207, 888, 179], function () {
      return (n = 6112), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);

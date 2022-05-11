(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [44],
  {
    3972: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tags/[slug]",
        function () {
          return e(7540);
        },
      ]);
    },
    7540: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
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
      var r = e(3312),
        u = e(9207),
        a = e(3697),
        i =
          (e(5473),
          (0, a.default)(
            function () {
              return Promise.all([e.e(669), e.e(973)]).then(e.bind(e, 8651));
            },
            {
              loadableGenerated: {
                webpack: function () {
                  return [8651];
                },
              },
            }
          )),
        c = function (n) {
          var t = n.articles,
            e = void 0 === t ? [] : t,
            a = n.currentTag,
            c = e.sort(function (n, t) {
              return Number(new Date(t.date)) - Number(new Date(n.date));
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
                children: (0, r.tZ)(i, {
                  articles: c,
                  hideViewAllLinksNode: !0,
                  currentTag: a,
                }),
              }),
            }),
          });
        },
        o = !0,
        l = { unstable_runtimeJS: !1 },
        s = function (n) {
          var t = n.articles,
            e = n.currentTag;
          return (0, r.tZ)(c, { articles: t, currentTag: e });
        };
    },
  },
  function (n) {
    n.O(0, [207, 888, 179], function () {
      return (t = 3972), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);

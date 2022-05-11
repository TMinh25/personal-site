(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7242: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(7969);
        },
      ]);
    },
    7969: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return s;
          },
          config: function () {
            return d;
          },
          default: function () {
            return f;
          },
        });
      var r = t(3312),
        u = t(9207),
        a = t(3697),
        i =
          (t(5473),
          (0, a.default)(
            function () {
              return Promise.all([t.e(577), t.e(200)]).then(t.bind(t, 7457));
            },
            {
              loadableGenerated: {
                webpack: function () {
                  return [7457];
                },
              },
            }
          )),
        c = (0, a.default)(
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
        ),
        o = (0, a.default)(
          function () {
            return Promise.all([
              t.e(577),
              t.e(92),
              t.e(325),
              t.e(675),
              t.e(877),
            ]).then(t.bind(t, 676));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [676];
              },
            },
          }
        ),
        l = function (e) {
          var n = e.articles,
            t = void 0 === n ? [] : n,
            a = e.projects,
            l = void 0 === a ? [] : a,
            s = t.sort(function (e, n) {
              return Number(new Date(n.date)) - Number(new Date(e.date));
            });
          return (0, r.BX)(u.gC, {
            spacing: 32,
            as: "main",
            p: 8,
            children: [
              (0, r.tZ)(u.xu, {
                as: "section",
                maxW: "2xl",
                mx: "auto",
                w: "100%",
                children: (0, r.tZ)(i, {}),
              }),
              (0, r.tZ)(u.xu, {
                as: "section",
                maxW: "2xl",
                mx: "auto",
                w: "100%",
                pb: 8,
                children: (0, r.tZ)(o, { projects: l.slice(0, 10) }),
              }),
              (0, r.tZ)(u.xu, {
                as: "section",
                maxW: "2xl",
                mx: "auto",
                w: "100%",
                children: (0, r.tZ)(c, { articles: s.slice(0, 10) }),
              }),
            ],
          });
        },
        s = !0,
        d = { unstable_runtimeJS: !1 },
        f = function (e) {
          var n = e.articles,
            t = e.projects;
          return (0, r.tZ)(l, { projects: t, articles: n });
        };
    },
  },
  function (e) {
    e.O(0, [207, 888, 179], function () {
      return (n = 7242), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);

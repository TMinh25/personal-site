(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    9929: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects",
        function () {
          return n(8113);
        },
      ]);
    },
    8113: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          config: function () {
            return a;
          },
          default: function () {
            return s;
          },
        });
      var i = n(3312),
        r = n(9207),
        o = (0, n(3697).default)(
          function () {
            return Promise.all([
              n.e(577),
              n.e(92),
              n.e(325),
              n.e(675),
              n.e(877),
            ]).then(n.bind(n, 5121));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5121];
              },
            },
          }
        ),
        l = function (t) {
          var e = t.projects,
            n = void 0 === e ? [] : e;
          return (0, i.tZ)(r.xu, {
            as: "main",
            maxW: "6xl",
            mx: "auto",
            p: 8,
            children: (0, i.tZ)(o, { projects: n }),
          });
        },
        c = JSON.parse(
          '[{"title":"HLU Timetable","description":"Web Application for arranging timetable for Ha Long University","url":"https://github.com/TMinh25/hlu-timetable","demoUrl":""},{"title":"Airbnb Clone","description":"Like the title, this is a airbnb clone","url":"https://github.com/TMinh25/min.bnb","demoUrl":""},{"title":"Microsoft ToDo clone with SQL Server","description":"...","url":"https://github.com/TMinh25/ToDo","demoUrl":""},{"title":"Ha Long University Technologies Journal API","description":"Backend API for Ha Long University Technologies Journal","url":"https://github.com/TMinh25/HLU-tech-journal-api","demoUrl":""},{"title":"Ha Long University Technologies Journal","description":"React Application for Ha Long University Technologies Journal","url":"https://github.com/TMinh25/HLU-tech-journal","demoUrl":""}]'
        ),
        u = n(5060),
        a = { unstable_runtimeJS: !1 },
        s = function () {
          var t = c;
          return (0, i.BX)(i.HY, {
            children: [
              (0, i.tZ)(u.default, {
                children: (0, i.tZ)("title", { children: "Projects" }),
              }),
              (0, i.tZ)(l, { projects: t }),
            ],
          });
        };
    },
  },
  function (t) {
    t.O(0, [207, 888, 179], function () {
      return (e = 9929), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);

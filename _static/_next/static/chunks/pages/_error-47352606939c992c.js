(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    5212: function (r, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return n(7353);
        },
      ]);
    },
    7353: function (r, t, n) {
      "use strict";
      n.r(t);
      var e = n(1136),
        u = n.n(e),
        a = n(3312),
        o = n(101);
      function s(r, t, n, e, u, a, o) {
        try {
          var s = r[a](o),
            i = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(i) : Promise.resolve(i).then(e, u);
      }
      var i = function (r) {
        var t = r.statusCode;
        r.hasGetInitialPropsRun, r.err;
        return (0, a.tZ)(o.default, { statusCode: t });
      };
      (i.getInitialProps = (function () {
        var r,
          t =
            ((r = u().mark(function r(t) {
              var n, e, a;
              return u().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = t.res),
                        (e = t.err),
                        t.asPath,
                        (r.next = 3),
                        o.default.getInitialProps({ res: n, err: e })
                      );
                    case 3:
                      if (
                        (((a = r.sent).hasGetInitialPropsRun = !0),
                        404 !==
                          (null === n || void 0 === n ? void 0 : n.statusCode))
                      ) {
                        r.next = 7;
                        break;
                      }
                      return r.abrupt("return", { statusCode: 404 });
                    case 7:
                      if (!e) {
                        r.next = 9;
                        break;
                      }
                      return r.abrupt("return", a);
                    case 9:
                      return r.abrupt("return", a);
                    case 10:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (e, u) {
                var a = r.apply(t, n);
                function o(r) {
                  s(a, e, u, o, i, "next", r);
                }
                function i(r) {
                  s(a, e, u, o, i, "throw", r);
                }
                o(void 0);
              });
            });
        return function (r) {
          return t.apply(this, arguments);
        };
      })()),
        (t.default = i);
    },
    101: function (r, t, n) {
      r.exports = n(7421);
    },
  },
  function (r) {
    r.O(0, [888, 179], function () {
      return (t = 5212), r((r.s = t));
      var t;
    });
    var t = r.O();
    _N_E = t;
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [91],
  {
    794: function (t, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/articles",
        function () {
          return n(2393);
        },
      ]);
    },
    2393: function (t, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          __N_SSG: function () {
            return f;
          },
          config: function () {
            return s;
          },
          default: function () {
            return d;
          },
        });
      var e = n(3312),
        i = n(9207);
      function u(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
        return e;
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return u(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (!t) return;
            if ("string" === typeof t) return u(t, r);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(t, r);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var o = (0, n(3697).default)(
          function () {
            return Promise.all([n.e(669), n.e(973)]).then(n.bind(n, 8651));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8651];
              },
            },
          }
        ),
        c = function (t) {
          var r = t.articles,
            n = a(void 0 === r ? [] : r).sort(function (t, r) {
              return Number(new Date(r.date)) - Number(new Date(t.date));
            });
          return (0, e.tZ)(i.xu, {
            as: "main",
            maxW: "2xl",
            mx: "auto",
            p: 8,
            children: (0, e.tZ)(o, { articles: n, hideViewAllLinksNode: !0 }),
          });
        },
        l = n(5060),
        f = !0,
        s = { unstable_runtimeJS: !1 },
        d = function (t) {
          var r = t.articles;
          return (0, e.BX)(e.HY, {
            children: [
              (0, e.tZ)(l.default, {
                children: (0, e.tZ)("title", { children: "Articles" }),
              }),
              (0, e.tZ)(c, { articles: r }),
            ],
          });
        };
    },
  },
  function (t) {
    t.O(0, [207, 888, 179], function () {
      return (r = 794), t((t.s = r));
      var r;
    });
    var r = t.O();
    _N_E = r;
  },
]);

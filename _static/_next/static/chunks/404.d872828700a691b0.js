"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [404],
  {
    7404: function (e, r, t) {
      t.d(r, {
        gk: function () {
          return Oo;
        },
        rS: function () {
          return qo;
        },
      });
      var o = {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      };
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      var a = n(
        {},
        o,
        {
          max: "max-content",
          min: "min-content",
          full: "100%",
          "3xs": "14rem",
          "2xs": "16rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          "8xl": "90rem",
        },
        { container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" } }
      );
      function i(e, r) {
        (function (e) {
          return (
            "string" === typeof e &&
            -1 !== e.indexOf(".") &&
            1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var t = (function (e) {
          return "string" === typeof e && -1 !== e.indexOf("%");
        })(e);
        return (
          (e = 360 === r ? e : Math.min(r, Math.max(0, parseFloat(e)))),
          t && (e = parseInt(String(e * r), 10) / 100),
          Math.abs(e - r) < 1e-6
            ? 1
            : (e =
                360 === r
                  ? (e < 0 ? (e % r) + r : e % r) / parseFloat(String(r))
                  : (e % r) / parseFloat(String(r)))
        );
      }
      function l(e) {
        return Math.min(1, Math.max(0, e));
      }
      function s(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function d(e) {
        return e <= 1 ? "".concat(100 * Number(e), "%") : e;
      }
      function c(e) {
        return 1 === e.length ? "0" + e : String(e);
      }
      function u(e, r, t) {
        (e = i(e, 255)), (r = i(r, 255)), (t = i(t, 255));
        var o = Math.max(e, r, t),
          n = Math.min(e, r, t),
          a = 0,
          l = 0,
          s = (o + n) / 2;
        if (o === n) (l = 0), (a = 0);
        else {
          var d = o - n;
          switch (((l = s > 0.5 ? d / (2 - o - n) : d / (o + n)), o)) {
            case e:
              a = (r - t) / d + (r < t ? 6 : 0);
              break;
            case r:
              a = (t - e) / d + 2;
              break;
            case t:
              a = (e - r) / d + 4;
          }
          a /= 6;
        }
        return { h: a, s: l, l: s };
      }
      function h(e, r, t) {
        return (
          t < 0 && (t += 1),
          t > 1 && (t -= 1),
          t < 1 / 6
            ? e + 6 * t * (r - e)
            : t < 0.5
            ? r
            : t < 2 / 3
            ? e + (r - e) * (2 / 3 - t) * 6
            : e
        );
      }
      function f(e, r, t) {
        (e = i(e, 255)), (r = i(r, 255)), (t = i(t, 255));
        var o = Math.max(e, r, t),
          n = Math.min(e, r, t),
          a = 0,
          l = o,
          s = o - n,
          d = 0 === o ? 0 : s / o;
        if (o === n) a = 0;
        else {
          switch (o) {
            case e:
              a = (r - t) / s + (r < t ? 6 : 0);
              break;
            case r:
              a = (t - e) / s + 2;
              break;
            case t:
              a = (e - r) / s + 4;
          }
          a /= 6;
        }
        return { h: a, s: d, v: l };
      }
      function p(e, r, t, o) {
        var n = [
          c(Math.round(e).toString(16)),
          c(Math.round(r).toString(16)),
          c(Math.round(t).toString(16)),
        ];
        return o &&
          n[0].startsWith(n[0].charAt(1)) &&
          n[1].startsWith(n[1].charAt(1)) &&
          n[2].startsWith(n[2].charAt(1))
          ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
          : n.join("");
      }
      function b(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function m(e) {
        return g(e) / 255;
      }
      function g(e) {
        return parseInt(e, 16);
      }
      var x = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      };
      function y(e) {
        var r,
          t,
          o,
          n = { r: 0, g: 0, b: 0 },
          a = 1,
          l = null,
          c = null,
          u = null,
          f = !1,
          p = !1;
        return (
          "string" === typeof e &&
            (e = (function (e) {
              if (0 === (e = e.trim().toLowerCase()).length) return !1;
              var r = !1;
              if (x[e]) (e = x[e]), (r = !0);
              else if ("transparent" === e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              var t = k.rgb.exec(e);
              if (t) return { r: t[1], g: t[2], b: t[3] };
              if ((t = k.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = k.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = k.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = k.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = k.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = k.hex8.exec(e)))
                return {
                  r: g(t[1]),
                  g: g(t[2]),
                  b: g(t[3]),
                  a: m(t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = k.hex6.exec(e)))
                return {
                  r: g(t[1]),
                  g: g(t[2]),
                  b: g(t[3]),
                  format: r ? "name" : "hex",
                };
              if ((t = k.hex4.exec(e)))
                return {
                  r: g(t[1] + t[1]),
                  g: g(t[2] + t[2]),
                  b: g(t[3] + t[3]),
                  a: m(t[4] + t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = k.hex3.exec(e)))
                return {
                  r: g(t[1] + t[1]),
                  g: g(t[2] + t[2]),
                  b: g(t[3] + t[3]),
                  format: r ? "name" : "hex",
                };
              return !1;
            })(e)),
          "object" === typeof e &&
            (A(e.r) && A(e.g) && A(e.b)
              ? ((r = e.r),
                (t = e.g),
                (o = e.b),
                (n = {
                  r: 255 * i(r, 255),
                  g: 255 * i(t, 255),
                  b: 255 * i(o, 255),
                }),
                (f = !0),
                (p = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : A(e.h) && A(e.s) && A(e.v)
              ? ((l = d(e.s)),
                (c = d(e.v)),
                (n = (function (e, r, t) {
                  (e = 6 * i(e, 360)), (r = i(r, 100)), (t = i(t, 100));
                  var o = Math.floor(e),
                    n = e - o,
                    a = t * (1 - r),
                    l = t * (1 - n * r),
                    s = t * (1 - (1 - n) * r),
                    d = o % 6;
                  return {
                    r: 255 * [t, l, a, a, s, t][d],
                    g: 255 * [s, t, t, l, a, a][d],
                    b: 255 * [a, a, s, t, t, l][d],
                  };
                })(e.h, l, c)),
                (f = !0),
                (p = "hsv"))
              : A(e.h) &&
                A(e.s) &&
                A(e.l) &&
                ((l = d(e.s)),
                (u = d(e.l)),
                (n = (function (e, r, t) {
                  var o, n, a;
                  if (
                    ((e = i(e, 360)), (r = i(r, 100)), (t = i(t, 100)), 0 === r)
                  )
                    (n = t), (a = t), (o = t);
                  else {
                    var l = t < 0.5 ? t * (1 + r) : t + r - t * r,
                      s = 2 * t - l;
                    (o = h(s, l, e + 1 / 3)),
                      (n = h(s, l, e)),
                      (a = h(s, l, e - 1 / 3));
                  }
                  return { r: 255 * o, g: 255 * n, b: 255 * a };
                })(e.h, l, u)),
                (f = !0),
                (p = "hsl")),
            Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)),
          (a = s(a)),
          {
            ok: f,
            format: e.format || p,
            r: Math.min(255, Math.max(n.r, 0)),
            g: Math.min(255, Math.max(n.g, 0)),
            b: Math.min(255, Math.max(n.b, 0)),
            a: a,
          }
        );
      }
      var v = "(?:"
          .concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:")
          .concat("[-\\+]?\\d+%?", ")"),
        w = "[\\s|\\(]+("
          .concat(v, ")[,|\\s]+(")
          .concat(v, ")[,|\\s]+(")
          .concat(v, ")\\s*\\)?"),
        S = "[\\s|\\(]+("
          .concat(v, ")[,|\\s]+(")
          .concat(v, ")[,|\\s]+(")
          .concat(v, ")[,|\\s]+(")
          .concat(v, ")\\s*\\)?"),
        k = {
          CSS_UNIT: new RegExp(v),
          rgb: new RegExp("rgb" + w),
          rgba: new RegExp("rgba" + S),
          hsl: new RegExp("hsl" + w),
          hsla: new RegExp("hsla" + S),
          hsv: new RegExp("hsv" + w),
          hsva: new RegExp("hsva" + S),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      function A(e) {
        return Boolean(k.CSS_UNIT.exec(String(e)));
      }
      var C = (function () {
        function e(r, t) {
          var o;
          if (
            (void 0 === r && (r = ""), void 0 === t && (t = {}), r instanceof e)
          )
            return r;
          "number" === typeof r &&
            (r = (function (e) {
              return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
            })(r)),
            (this.originalInput = r);
          var n = y(r);
          (this.originalInput = r),
            (this.r = n.r),
            (this.g = n.g),
            (this.b = n.b),
            (this.a = n.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format =
              null !== (o = t.format) && void 0 !== o ? o : n.format),
            (this.gradientType = t.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = n.ok);
        }
        return (
          (e.prototype.isDark = function () {
            return this.getBrightness() < 128;
          }),
          (e.prototype.isLight = function () {
            return !this.isDark();
          }),
          (e.prototype.getBrightness = function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
          }),
          (e.prototype.getLuminance = function () {
            var e = this.toRgb(),
              r = e.r / 255,
              t = e.g / 255,
              o = e.b / 255;
            return (
              0.2126 *
                (r <= 0.03928
                  ? r / 12.92
                  : Math.pow((r + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4))
            );
          }),
          (e.prototype.getAlpha = function () {
            return this.a;
          }),
          (e.prototype.setAlpha = function (e) {
            return (
              (this.a = s(e)),
              (this.roundA = Math.round(100 * this.a) / 100),
              this
            );
          }),
          (e.prototype.toHsv = function () {
            var e = f(this.r, this.g, this.b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
          }),
          (e.prototype.toHsvString = function () {
            var e = f(this.r, this.g, this.b),
              r = Math.round(360 * e.h),
              t = Math.round(100 * e.s),
              o = Math.round(100 * e.v);
            return 1 === this.a
              ? "hsv(".concat(r, ", ").concat(t, "%, ").concat(o, "%)")
              : "hsva("
                  .concat(r, ", ")
                  .concat(t, "%, ")
                  .concat(o, "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toHsl = function () {
            var e = u(this.r, this.g, this.b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
          }),
          (e.prototype.toHslString = function () {
            var e = u(this.r, this.g, this.b),
              r = Math.round(360 * e.h),
              t = Math.round(100 * e.s),
              o = Math.round(100 * e.l);
            return 1 === this.a
              ? "hsl(".concat(r, ", ").concat(t, "%, ").concat(o, "%)")
              : "hsla("
                  .concat(r, ", ")
                  .concat(t, "%, ")
                  .concat(o, "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toHex = function (e) {
            return void 0 === e && (e = !1), p(this.r, this.g, this.b, e);
          }),
          (e.prototype.toHexString = function (e) {
            return void 0 === e && (e = !1), "#" + this.toHex(e);
          }),
          (e.prototype.toHex8 = function (e) {
            return (
              void 0 === e && (e = !1),
              (function (e, r, t, o, n) {
                var a = [
                  c(Math.round(e).toString(16)),
                  c(Math.round(r).toString(16)),
                  c(Math.round(t).toString(16)),
                  c(b(o)),
                ];
                return n &&
                  a[0].startsWith(a[0].charAt(1)) &&
                  a[1].startsWith(a[1].charAt(1)) &&
                  a[2].startsWith(a[2].charAt(1)) &&
                  a[3].startsWith(a[3].charAt(1))
                  ? a[0].charAt(0) +
                      a[1].charAt(0) +
                      a[2].charAt(0) +
                      a[3].charAt(0)
                  : a.join("");
              })(this.r, this.g, this.b, this.a, e)
            );
          }),
          (e.prototype.toHex8String = function (e) {
            return void 0 === e && (e = !1), "#" + this.toHex8(e);
          }),
          (e.prototype.toRgb = function () {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a,
            };
          }),
          (e.prototype.toRgbString = function () {
            var e = Math.round(this.r),
              r = Math.round(this.g),
              t = Math.round(this.b);
            return 1 === this.a
              ? "rgb(".concat(e, ", ").concat(r, ", ").concat(t, ")")
              : "rgba("
                  .concat(e, ", ")
                  .concat(r, ", ")
                  .concat(t, ", ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toPercentageRgb = function () {
            var e = function (e) {
              return "".concat(Math.round(100 * i(e, 255)), "%");
            };
            return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
          }),
          (e.prototype.toPercentageRgbString = function () {
            var e = function (e) {
              return Math.round(100 * i(e, 255));
            };
            return 1 === this.a
              ? "rgb("
                  .concat(e(this.r), "%, ")
                  .concat(e(this.g), "%, ")
                  .concat(e(this.b), "%)")
              : "rgba("
                  .concat(e(this.r), "%, ")
                  .concat(e(this.g), "%, ")
                  .concat(e(this.b), "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toName = function () {
            if (0 === this.a) return "transparent";
            if (this.a < 1) return !1;
            for (
              var e = "#" + p(this.r, this.g, this.b, !1),
                r = 0,
                t = Object.entries(x);
              r < t.length;
              r++
            ) {
              var o = t[r],
                n = o[0];
              if (e === o[1]) return n;
            }
            return !1;
          }),
          (e.prototype.toString = function (e) {
            var r = Boolean(e);
            e = null !== e && void 0 !== e ? e : this.format;
            var t = !1,
              o = this.a < 1 && this.a >= 0;
            return r || !o || (!e.startsWith("hex") && "name" !== e)
              ? ("rgb" === e && (t = this.toRgbString()),
                "prgb" === e && (t = this.toPercentageRgbString()),
                ("hex" !== e && "hex6" !== e) || (t = this.toHexString()),
                "hex3" === e && (t = this.toHexString(!0)),
                "hex4" === e && (t = this.toHex8String(!0)),
                "hex8" === e && (t = this.toHex8String()),
                "name" === e && (t = this.toName()),
                "hsl" === e && (t = this.toHslString()),
                "hsv" === e && (t = this.toHsvString()),
                t || this.toHexString())
              : "name" === e && 0 === this.a
              ? this.toName()
              : this.toRgbString();
          }),
          (e.prototype.toNumber = function () {
            return (
              (Math.round(this.r) << 16) +
              (Math.round(this.g) << 8) +
              Math.round(this.b)
            );
          }),
          (e.prototype.clone = function () {
            return new e(this.toString());
          }),
          (e.prototype.lighten = function (r) {
            void 0 === r && (r = 10);
            var t = this.toHsl();
            return (t.l += r / 100), (t.l = l(t.l)), new e(t);
          }),
          (e.prototype.brighten = function (r) {
            void 0 === r && (r = 10);
            var t = this.toRgb();
            return (
              (t.r = Math.max(
                0,
                Math.min(255, t.r - Math.round((-r / 100) * 255))
              )),
              (t.g = Math.max(
                0,
                Math.min(255, t.g - Math.round((-r / 100) * 255))
              )),
              (t.b = Math.max(
                0,
                Math.min(255, t.b - Math.round((-r / 100) * 255))
              )),
              new e(t)
            );
          }),
          (e.prototype.darken = function (r) {
            void 0 === r && (r = 10);
            var t = this.toHsl();
            return (t.l -= r / 100), (t.l = l(t.l)), new e(t);
          }),
          (e.prototype.tint = function (e) {
            return void 0 === e && (e = 10), this.mix("white", e);
          }),
          (e.prototype.shade = function (e) {
            return void 0 === e && (e = 10), this.mix("black", e);
          }),
          (e.prototype.desaturate = function (r) {
            void 0 === r && (r = 10);
            var t = this.toHsl();
            return (t.s -= r / 100), (t.s = l(t.s)), new e(t);
          }),
          (e.prototype.saturate = function (r) {
            void 0 === r && (r = 10);
            var t = this.toHsl();
            return (t.s += r / 100), (t.s = l(t.s)), new e(t);
          }),
          (e.prototype.greyscale = function () {
            return this.desaturate(100);
          }),
          (e.prototype.spin = function (r) {
            var t = this.toHsl(),
              o = (t.h + r) % 360;
            return (t.h = o < 0 ? 360 + o : o), new e(t);
          }),
          (e.prototype.mix = function (r, t) {
            void 0 === t && (t = 50);
            var o = this.toRgb(),
              n = new e(r).toRgb(),
              a = t / 100;
            return new e({
              r: (n.r - o.r) * a + o.r,
              g: (n.g - o.g) * a + o.g,
              b: (n.b - o.b) * a + o.b,
              a: (n.a - o.a) * a + o.a,
            });
          }),
          (e.prototype.analogous = function (r, t) {
            void 0 === r && (r = 6), void 0 === t && (t = 30);
            var o = this.toHsl(),
              n = 360 / t,
              a = [this];
            for (o.h = (o.h - ((n * r) >> 1) + 720) % 360; --r; )
              (o.h = (o.h + n) % 360), a.push(new e(o));
            return a;
          }),
          (e.prototype.complement = function () {
            var r = this.toHsl();
            return (r.h = (r.h + 180) % 360), new e(r);
          }),
          (e.prototype.monochromatic = function (r) {
            void 0 === r && (r = 6);
            for (
              var t = this.toHsv(),
                o = t.h,
                n = t.s,
                a = t.v,
                i = [],
                l = 1 / r;
              r--;

            )
              i.push(new e({ h: o, s: n, v: a })), (a = (a + l) % 1);
            return i;
          }),
          (e.prototype.splitcomplement = function () {
            var r = this.toHsl(),
              t = r.h;
            return [
              this,
              new e({ h: (t + 72) % 360, s: r.s, l: r.l }),
              new e({ h: (t + 216) % 360, s: r.s, l: r.l }),
            ];
          }),
          (e.prototype.onBackground = function (r) {
            var t = this.toRgb(),
              o = new e(r).toRgb();
            return new e({
              r: o.r + (t.r - o.r) * t.a,
              g: o.g + (t.g - o.g) * t.a,
              b: o.b + (t.b - o.b) * t.a,
            });
          }),
          (e.prototype.triad = function () {
            return this.polyad(3);
          }),
          (e.prototype.tetrad = function () {
            return this.polyad(4);
          }),
          (e.prototype.polyad = function (r) {
            for (
              var t = this.toHsl(), o = t.h, n = [this], a = 360 / r, i = 1;
              i < r;
              i++
            )
              n.push(new e({ h: (o + i * a) % 360, s: t.s, l: t.l }));
            return n;
          }),
          (e.prototype.equals = function (r) {
            return this.toRgbString() === new e(r).toRgbString();
          }),
          e
        );
      })();
      function z(e) {
        if (
          (void 0 === e && (e = {}), void 0 !== e.count && null !== e.count)
        ) {
          var r = e.count,
            t = [];
          for (e.count = void 0; r > t.length; )
            (e.count = null), e.seed && (e.seed += 1), t.push(z(e));
          return (e.count = r), t;
        }
        var o = (function (e, r) {
            var t = B(
              (function (e) {
                var r = parseInt(e, 10);
                if (!Number.isNaN(r) && r < 360 && r > 0) return [r, r];
                if ("string" === typeof e) {
                  var t = E.find(function (r) {
                    return r.name === e;
                  });
                  if (t) {
                    var o = _(t);
                    if (o.hueRange) return o.hueRange;
                  }
                  var n = new C(e);
                  if (n.isValid) {
                    var a = n.toHsv().h;
                    return [a, a];
                  }
                }
                return [0, 360];
              })(e),
              r
            );
            t < 0 && (t = 360 + t);
            return t;
          })(e.hue, e.seed),
          n = (function (e, r) {
            if ("monochrome" === r.hue) return 0;
            if ("random" === r.luminosity) return B([0, 100], r.seed);
            var t = F(e).saturationRange,
              o = t[0],
              n = t[1];
            switch (r.luminosity) {
              case "bright":
                o = 55;
                break;
              case "dark":
                o = n - 10;
                break;
              case "light":
                n = 55;
            }
            return B([o, n], r.seed);
          })(o, e),
          a = (function (e, r, t) {
            var o = (function (e, r) {
                for (var t = F(e).lowerBounds, o = 0; o < t.length - 1; o++) {
                  var n = t[o][0],
                    a = t[o][1],
                    i = t[o + 1][0],
                    l = t[o + 1][1];
                  if (r >= n && r <= i) {
                    var s = (l - a) / (i - n);
                    return s * r + (a - s * n);
                  }
                }
                return 0;
              })(e, r),
              n = 100;
            switch (t.luminosity) {
              case "dark":
                n = o + 20;
                break;
              case "light":
                o = (n + o) / 2;
                break;
              case "random":
                (o = 0), (n = 100);
            }
            return B([o, n], t.seed);
          })(o, n, e),
          i = { h: o, s: n, v: a };
        return void 0 !== e.alpha && (i.a = e.alpha), new C(i);
      }
      function F(e) {
        e >= 334 && e <= 360 && (e -= 360);
        for (var r = 0, t = E; r < t.length; r++) {
          var o = _(t[r]);
          if (o.hueRange && e >= o.hueRange[0] && e <= o.hueRange[1]) return o;
        }
        throw Error("Color not found");
      }
      function B(e, r) {
        if (void 0 === r)
          return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
        var t = e[1] || 1,
          o = e[0] || 0,
          n = (r = (9301 * r + 49297) % 233280) / 233280;
        return Math.floor(o + n * (t - o));
      }
      function _(e) {
        var r = e.lowerBounds[0][0],
          t = e.lowerBounds[e.lowerBounds.length - 1][0],
          o = e.lowerBounds[e.lowerBounds.length - 1][1],
          n = e.lowerBounds[0][1];
        return {
          name: e.name,
          hueRange: e.hueRange,
          lowerBounds: e.lowerBounds,
          saturationRange: [r, t],
          brightnessRange: [o, n],
        };
      }
      var E = [
          {
            name: "monochrome",
            hueRange: null,
            lowerBounds: [
              [0, 0],
              [100, 0],
            ],
          },
          {
            name: "red",
            hueRange: [-26, 18],
            lowerBounds: [
              [20, 100],
              [30, 92],
              [40, 89],
              [50, 85],
              [60, 78],
              [70, 70],
              [80, 60],
              [90, 55],
              [100, 50],
            ],
          },
          {
            name: "orange",
            hueRange: [19, 46],
            lowerBounds: [
              [20, 100],
              [30, 93],
              [40, 88],
              [50, 86],
              [60, 85],
              [70, 70],
              [100, 70],
            ],
          },
          {
            name: "yellow",
            hueRange: [47, 62],
            lowerBounds: [
              [25, 100],
              [40, 94],
              [50, 89],
              [60, 86],
              [70, 84],
              [80, 82],
              [90, 80],
              [100, 75],
            ],
          },
          {
            name: "green",
            hueRange: [63, 178],
            lowerBounds: [
              [30, 100],
              [40, 90],
              [50, 85],
              [60, 81],
              [70, 74],
              [80, 64],
              [90, 50],
              [100, 40],
            ],
          },
          {
            name: "blue",
            hueRange: [179, 257],
            lowerBounds: [
              [20, 100],
              [30, 86],
              [40, 80],
              [50, 74],
              [60, 60],
              [70, 52],
              [80, 44],
              [90, 39],
              [100, 35],
            ],
          },
          {
            name: "purple",
            hueRange: [258, 282],
            lowerBounds: [
              [20, 100],
              [30, 87],
              [40, 79],
              [50, 70],
              [60, 65],
              [70, 59],
              [80, 52],
              [90, 45],
              [100, 42],
            ],
          },
          {
            name: "pink",
            hueRange: [283, 334],
            lowerBounds: [
              [20, 100],
              [30, 90],
              [40, 86],
              [60, 84],
              [80, 80],
              [90, 75],
              [100, 73],
            ],
          },
        ],
        R = t(41),
        D = function (e, r, t) {
          var o = (0, R.Wf)(e, "colors." + r, r);
          return new C(o).isValid ? o : t;
        },
        M = function (e) {
          return function (r) {
            var t = D(r, e);
            return new C(t).isDark() ? "dark" : "light";
          };
        },
        H = function (e, r) {
          return function (t) {
            var o = D(t, e);
            return new C(o).setAlpha(r).toRgbString();
          };
        };
      function P(e, r) {
        return (
          void 0 === e && (e = "1rem"),
          void 0 === r && (r = "rgba(255, 255, 255, 0.15)"),
          {
            backgroundImage:
              "linear-gradient(\n    45deg,\n    " +
              r +
              " 25%,\n    transparent 25%,\n    transparent 50%,\n    " +
              r +
              " 50%,\n    " +
              r +
              " 75%,\n    transparent 75%,\n    transparent\n  )",
            backgroundSize: e + " " + e,
          }
        );
      }
      function W(e) {
        var r = z().toHexString();
        return !e || (0, R.Qr)(e)
          ? r
          : e.string && e.colors
          ? (function (e, r) {
              var t = 0;
              if (0 === e.length) return r[0];
              for (var o = 0; o < e.length; o += 1)
                (t = e.charCodeAt(o) + ((t << 5) - t)), (t &= t);
              return (t = ((t % r.length) + r.length) % r.length), r[t];
            })(e.string, e.colors)
          : e.string && !e.colors
          ? (function (e) {
              var r = 0;
              if (0 === e.length) return r.toString();
              for (var t = 0; t < e.length; t += 1)
                (r = e.charCodeAt(t) + ((r << 5) - r)), (r &= r);
              for (var o = "#", n = 0; n < 3; n += 1) {
                o += ("00" + ((r >> (8 * n)) & 255).toString(16)).substr(-2);
              }
              return o;
            })(e.string)
          : e.colors && !e.string
          ? (function (e) {
              return e[Math.floor(Math.random() * e.length)];
            })(e.colors)
          : r;
      }
      function I(e, r) {
        return function (t) {
          return "dark" === t.colorMode ? r : e;
        };
      }
      function T(e) {
        var r = e.orientation,
          t = e.vertical,
          o = e.horizontal;
        return r ? ("vertical" === r ? t : o) : {};
      }
      function j() {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }),
          j.apply(this, arguments)
        );
      }
      function N(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      var O = (function () {
        function e(e) {
          var r = this;
          (this.map = {}),
            (this.called = !1),
            (this.assert = function () {
              if (r.called)
                throw new Error(
                  "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
                );
              r.called = !0;
            }),
            (this.parts = function () {
              r.assert();
              for (
                var e = arguments.length, t = new Array(e), o = 0;
                o < e;
                o++
              )
                t[o] = arguments[o];
              for (var n = 0, a = t; n < a.length; n++) {
                var i = a[n];
                r.map[i] = r.toPart(i);
              }
              return r;
            }),
            (this.extend = function () {
              for (
                var e = arguments.length, t = new Array(e), o = 0;
                o < e;
                o++
              )
                t[o] = arguments[o];
              for (var n = 0, a = t; n < a.length; n++) {
                var i = a[n];
                i in r.map || (r.map[i] = r.toPart(i));
              }
              return r;
            }),
            (this.toPart = function (e) {
              var t =
                "chakra-" +
                (["container", "root"].includes(null != e ? e : "")
                  ? [r.name]
                  : [r.name, e]
                )
                  .filter(Boolean)
                  .join("__");
              return {
                className: t,
                selector: "." + t,
                toString: function () {
                  return e;
                },
              };
            }),
            (this.__type = {});
        }
        var r, t, o;
        return (
          (r = e),
          (t = [
            {
              key: "selectors",
              get: function () {
                return (0, R.sq)(
                  Object.entries(this.map).map(function (e) {
                    return [e[0], e[1].selector];
                  })
                );
              },
            },
            {
              key: "classNames",
              get: function () {
                return (0, R.sq)(
                  Object.entries(this.map).map(function (e) {
                    return [e[0], e[1].className];
                  })
                );
              },
            },
            {
              key: "keys",
              get: function () {
                return Object.keys(this.map);
              },
            },
          ]) && N(r.prototype, t),
          o && N(r, o),
          e
        );
      })();
      function q(e) {
        return new O(e);
      }
      function L(e) {
        return (0, R.Kn)(e) && e.reference ? e.reference : String(e);
      }
      var U = function (e) {
          for (
            var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            t[o - 1] = arguments[o];
          return t
            .map(L)
            .join(" " + e + " ")
            .replace(/calc/g, "");
        },
        V = function () {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return "calc(" + U.apply(void 0, ["+"].concat(r)) + ")";
        },
        K = function () {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return "calc(" + U.apply(void 0, ["-"].concat(r)) + ")";
        },
        $ = function () {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return "calc(" + U.apply(void 0, ["*"].concat(r)) + ")";
        },
        X = function () {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return "calc(" + U.apply(void 0, ["/"].concat(r)) + ")";
        },
        Y = function (e) {
          var r = L(e);
          return null == r || Number.isNaN(parseFloat(r))
            ? $(r, -1)
            : String(r).startsWith("-")
            ? String(r).slice(1)
            : "-" + r;
        },
        G = Object.assign(
          function (e) {
            return {
              add: function () {
                for (
                  var r = arguments.length, t = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  t[o] = arguments[o];
                return G(V.apply(void 0, [e].concat(t)));
              },
              subtract: function () {
                for (
                  var r = arguments.length, t = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  t[o] = arguments[o];
                return G(K.apply(void 0, [e].concat(t)));
              },
              multiply: function () {
                for (
                  var r = arguments.length, t = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  t[o] = arguments[o];
                return G($.apply(void 0, [e].concat(t)));
              },
              divide: function () {
                for (
                  var r = arguments.length, t = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  t[o] = arguments[o];
                return G(X.apply(void 0, [e].concat(t)));
              },
              negate: function () {
                return G(Y(e));
              },
              toString: function () {
                return e.toString();
              },
            };
          },
          { add: V, subtract: K, multiply: $, divide: X, negate: Y }
        );
      function Q(e) {
        var r = (function (e, r) {
          return void 0 === r && (r = "-"), e.replace(/\s+/g, r);
        })(e.toString());
        return r.includes("\\.")
          ? e
          : (function (e) {
              return !Number.isInteger(parseFloat(e.toString()));
            })(e)
          ? r.replace(".", "\\.")
          : e;
      }
      function Z(e, r) {
        return "var(" + Q(e) + (r ? ", " + r : "") + ")";
      }
      function J(e, r) {
        return (
          void 0 === r && (r = ""),
          "--" +
            (function (e, r) {
              return (
                void 0 === r && (r = ""), [r, Q(e)].filter(Boolean).join("-")
              );
            })(e, r)
        );
      }
      function ee(e, r) {
        var t = J(e, null == r ? void 0 : r.prefix);
        return {
          variable: t,
          reference: Z(t, re(null == r ? void 0 : r.fallback)),
        };
      }
      function re(e) {
        return "string" === typeof e ? e : null == e ? void 0 : e.reference;
      }
      var te = q("accordion")
          .parts("root", "container", "button", "panel")
          .extend("icon"),
        oe = q("alert")
          .parts("title", "description", "container")
          .extend("icon"),
        ne = q("avatar")
          .parts("label", "badge", "container")
          .extend("excessLabel", "group"),
        ae = q("breadcrumb")
          .parts("link", "item", "container")
          .extend("separator"),
        ie =
          (q("button").parts(),
          q("checkbox").parts("control", "icon", "container").extend("label")),
        le =
          (q("progress").parts("track", "filledTrack").extend("label"),
          q("drawer")
            .parts("overlay", "dialogContainer", "dialog")
            .extend("header", "closeButton", "body", "footer")),
        se = q("editable").parts("preview", "input", "textarea"),
        de = q("form").parts("container", "requiredIndicator", "helperText"),
        ce = q("formError").parts("text", "icon"),
        ue = q("input").parts("addon", "field", "element"),
        he = q("list").parts("container", "item", "icon"),
        fe = q("menu")
          .parts("button", "list", "item")
          .extend("groupTitle", "command", "divider"),
        pe = q("modal")
          .parts("overlay", "dialogContainer", "dialog")
          .extend("header", "closeButton", "body", "footer"),
        be = q("numberinput").parts("root", "field", "stepperGroup", "stepper"),
        me =
          (q("pininput").parts("field"),
          q("popover")
            .parts("content", "header", "body", "footer")
            .extend("popper", "arrow", "closeButton")),
        ge = q("progress").parts("label", "filledTrack", "track"),
        xe = q("radio").parts("container", "control", "label"),
        ye = q("select").parts("field", "icon"),
        ve = q("slider").parts("container", "track", "thumb", "filledTrack"),
        we = q("stat").parts(
          "container",
          "label",
          "helpText",
          "number",
          "icon"
        ),
        Se = q("switch").parts("container", "track", "thumb"),
        ke = q("table").parts(
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td",
          "tfoot",
          "caption"
        ),
        Ae = q("tabs").parts(
          "root",
          "tab",
          "tablist",
          "tabpanel",
          "tabpanels",
          "indicator"
        ),
        Ce = q("tag").parts("container", "label", "closeButton"),
        ze = {
          letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
          },
          lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
          },
        },
        Fe = t(1138),
        Be = t.n(Fe),
        _e = t(695),
        Ee = {
          root: {},
          container: {
            borderTopWidth: "1px",
            borderColor: "inherit",
            _last: { borderBottomWidth: "1px" },
          },
          button: {
            transitionProperty: "common",
            transitionDuration: "normal",
            fontSize: "1rem",
            _focus: { boxShadow: "outline" },
            _hover: { bg: "blackAlpha.50" },
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
            px: 4,
            py: 2,
          },
          panel: { pt: 2, px: 4, pb: 5 },
          icon: { fontSize: "1.25em" },
        },
        Re = { parts: te.keys, baseStyle: Ee };
      function De(e) {
        var r = e.theme,
          t = e.colorScheme;
        return I(D(r, t + ".100", t), H(t + ".200", 0.16)(r))(e);
      }
      var Me = {
          subtle: function (e) {
            var r = e.colorScheme;
            return {
              container: { bg: De(e) },
              icon: { color: I(r + ".500", r + ".200")(e) },
            };
          },
          "left-accent": function (e) {
            var r = e.colorScheme;
            return {
              container: {
                paddingStart: 3,
                borderStartWidth: "4px",
                borderStartColor: I(r + ".500", r + ".200")(e),
                bg: De(e),
              },
              icon: { color: I(r + ".500", r + ".200")(e) },
            };
          },
          "top-accent": function (e) {
            var r = e.colorScheme;
            return {
              container: {
                pt: 2,
                borderTopWidth: "4px",
                borderTopColor: I(r + ".500", r + ".200")(e),
                bg: De(e),
              },
              icon: { color: I(r + ".500", r + ".200")(e) },
            };
          },
          solid: function (e) {
            var r = e.colorScheme;
            return {
              container: {
                bg: I(r + ".500", r + ".200")(e),
                color: I("white", "gray.900")(e),
              },
            };
          },
        },
        He = {
          parts: oe.keys,
          baseStyle: {
            container: { px: 4, py: 3 },
            title: { fontWeight: "bold", lineHeight: 6, marginEnd: 2 },
            description: { lineHeight: 6 },
            icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
          },
          variants: Me,
          defaultProps: { variant: "subtle", colorScheme: "blue" },
        },
        Pe = function (e) {
          return {
            transform: "translate(25%, 25%)",
            borderRadius: "full",
            border: "0.2em solid",
            borderColor: I("white", "gray.800")(e),
          };
        },
        We = function (e) {
          return { bg: I("gray.200", "whiteAlpha.400")(e) };
        },
        Ie = function (e) {
          var r = e.name,
            t = e.theme,
            o = r ? W({ string: r }) : "gray.400",
            n = (function (e) {
              return function (r) {
                return "dark" === M(e)(r);
              };
            })(o)(t),
            a = "white";
          return (
            n || (a = "gray.800"),
            {
              bg: o,
              color: a,
              borderColor: I("white", "gray.800")(e),
              verticalAlign: "top",
            }
          );
        };
      function Te(e) {
        var r = a[e];
        return {
          container: {
            width: e,
            height: e,
            fontSize: "calc(" + (null != r ? r : e) + " / 2.5)",
          },
          excessLabel: { width: e, height: e },
          label: {
            fontSize: "calc(" + (null != r ? r : e) + " / 2.5)",
            lineHeight: "100%" !== e ? (null != r ? r : e) : void 0,
          },
        };
      }
      var je,
        Ne,
        Oe,
        qe = {
          "2xs": Te("4"),
          xs: Te("6"),
          sm: Te("8"),
          md: Te("12"),
          lg: Te("16"),
          xl: Te("24"),
          "2xl": Te("32"),
          full: Te("100%"),
        },
        Le = {
          parts: ne.keys,
          baseStyle: function (e) {
            return { badge: Pe(e), excessLabel: We(e), container: Ie(e) };
          },
          sizes: qe,
          defaultProps: { size: "md" },
        },
        Ue = {
          solid: function (e) {
            var r = e.colorScheme,
              t = e.theme;
            return {
              bg: I(r + ".500", H(r + ".500", 0.6)(t))(e),
              color: I("white", "whiteAlpha.800")(e),
            };
          },
          subtle: function (e) {
            var r = e.colorScheme,
              t = e.theme;
            return {
              bg: I(r + ".100", H(r + ".200", 0.16)(t))(e),
              color: I(r + ".800", r + ".200")(e),
            };
          },
          outline: function (e) {
            var r = e.colorScheme,
              t = e.theme,
              o = H(r + ".200", 0.8)(t),
              n = I(D(t, r + ".500"), o)(e);
            return { color: n, boxShadow: "inset 0 0 0px 1px " + n };
          },
        },
        Ve = {
          baseStyle: {
            px: 1,
            textTransform: "uppercase",
            fontSize: "xs",
            borderRadius: "sm",
            fontWeight: "bold",
          },
          variants: Ue,
          defaultProps: { variant: "subtle", colorScheme: "gray" },
        },
        Ke = {
          link: {
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "inherit",
            _hover: { textDecoration: "underline" },
            _focus: { boxShadow: "outline" },
          },
        },
        $e = { parts: ae.keys, baseStyle: Ke },
        Xe = function (e) {
          var r = e.colorScheme,
            t = e.theme;
          if ("gray" === r)
            return {
              color: I("inherit", "whiteAlpha.900")(e),
              _hover: { bg: I("gray.100", "whiteAlpha.200")(e) },
              _active: { bg: I("gray.200", "whiteAlpha.300")(e) },
            };
          var o = H(r + ".200", 0.12)(t),
            n = H(r + ".200", 0.24)(t);
          return {
            color: I(r + ".600", r + ".200")(e),
            bg: "transparent",
            _hover: { bg: I(r + ".50", o)(e) },
            _active: { bg: I(r + ".100", n)(e) },
          };
        },
        Ye = {
          yellow: {
            bg: "yellow.400",
            color: "black",
            hoverBg: "yellow.500",
            activeBg: "yellow.600",
          },
          cyan: {
            bg: "cyan.400",
            color: "black",
            hoverBg: "cyan.500",
            activeBg: "cyan.600",
          },
        },
        Ge = {
          baseStyle: {
            lineHeight: "1.2",
            borderRadius: "md",
            fontWeight: "semibold",
            transitionProperty: "common",
            transitionDuration: "normal",
            _focus: { boxShadow: "outline" },
            _disabled: {
              opacity: 0.4,
              cursor: "not-allowed",
              boxShadow: "none",
            },
            _hover: { _disabled: { bg: "initial" } },
          },
          variants: {
            ghost: Xe,
            outline: function (e) {
              var r = e.colorScheme,
                t = I("gray.200", "whiteAlpha.300")(e);
              return n(
                {
                  border: "1px solid",
                  borderColor: "gray" === r ? t : "currentColor",
                },
                Xe(e)
              );
            },
            solid: function (e) {
              var r,
                t = e.colorScheme;
              if ("gray" === t) {
                var o = I("gray.100", "whiteAlpha.200")(e);
                return {
                  bg: o,
                  _hover: {
                    bg: I("gray.200", "whiteAlpha.300")(e),
                    _disabled: { bg: o },
                  },
                  _active: { bg: I("gray.300", "whiteAlpha.400")(e) },
                };
              }
              var n = null != (r = Ye[t]) ? r : {},
                a = n.bg,
                i = void 0 === a ? t + ".500" : a,
                l = n.color,
                s = void 0 === l ? "white" : l,
                d = n.hoverBg,
                c = void 0 === d ? t + ".600" : d,
                u = n.activeBg,
                h = void 0 === u ? t + ".700" : u,
                f = I(i, t + ".200")(e);
              return {
                bg: f,
                color: I(s, "gray.800")(e),
                _hover: { bg: I(c, t + ".300")(e), _disabled: { bg: f } },
                _active: { bg: I(h, t + ".400")(e) },
              };
            },
            link: function (e) {
              var r = e.colorScheme;
              return {
                padding: 0,
                height: "auto",
                lineHeight: "normal",
                verticalAlign: "baseline",
                color: I(r + ".500", r + ".200")(e),
                _hover: {
                  textDecoration: "underline",
                  _disabled: { textDecoration: "none" },
                },
                _active: { color: I(r + ".700", r + ".500")(e) },
              };
            },
            unstyled: {
              bg: "none",
              color: "inherit",
              display: "inline",
              lineHeight: "inherit",
              m: 0,
              p: 0,
            },
          },
          sizes: {
            lg: { h: 12, minW: 12, fontSize: "lg", px: 6 },
            md: { h: 10, minW: 10, fontSize: "md", px: 4 },
            sm: { h: 8, minW: 8, fontSize: "sm", px: 3 },
            xs: { h: 6, minW: 6, fontSize: "xs", px: 2 },
          },
          defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
        },
        Qe = function (e) {
          var r = e.colorScheme;
          return {
            w: "100%",
            transitionProperty: "box-shadow",
            transitionDuration: "normal",
            border: "2px solid",
            borderRadius: "sm",
            borderColor: "inherit",
            color: "white",
            _checked: {
              bg: I(r + ".500", r + ".200")(e),
              borderColor: I(r + ".500", r + ".200")(e),
              color: I("white", "gray.900")(e),
              _hover: {
                bg: I(r + ".600", r + ".300")(e),
                borderColor: I(r + ".600", r + ".300")(e),
              },
              _disabled: {
                borderColor: I("gray.200", "transparent")(e),
                bg: I("gray.200", "whiteAlpha.300")(e),
                color: I("gray.500", "whiteAlpha.500")(e),
              },
            },
            _indeterminate: {
              bg: I(r + ".500", r + ".200")(e),
              borderColor: I(r + ".500", r + ".200")(e),
              color: I("white", "gray.900")(e),
            },
            _disabled: {
              bg: I("gray.100", "whiteAlpha.100")(e),
              borderColor: I("gray.100", "transparent")(e),
            },
            _focus: { boxShadow: "outline" },
            _invalid: { borderColor: I("red.500", "red.300")(e) },
          };
        },
        Ze = { _disabled: { cursor: "not-allowed" } },
        Je = { userSelect: "none", _disabled: { opacity: 0.4 } },
        er = { transitionProperty: "transform", transitionDuration: "normal" },
        rr = {
          parts: ie.keys,
          baseStyle: function (e) {
            return { icon: er, container: Ze, control: Qe(e), label: Je };
          },
          sizes: {
            sm: {
              control: { h: 3, w: 3 },
              label: { fontSize: "sm" },
              icon: { fontSize: "0.45rem" },
            },
            md: {
              control: { w: 4, h: 4 },
              label: { fontSize: "md" },
              icon: { fontSize: "0.625rem" },
            },
            lg: {
              control: { w: 5, h: 5 },
              label: { fontSize: "lg" },
              icon: { fontSize: "0.625rem" },
            },
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        },
        tr = ee("close-button-size"),
        or = {
          baseStyle: function (e) {
            var r = I("blackAlpha.100", "whiteAlpha.100")(e),
              t = I("blackAlpha.200", "whiteAlpha.200")(e);
            return {
              w: [tr.reference],
              h: [tr.reference],
              borderRadius: "md",
              transitionProperty: "common",
              transitionDuration: "normal",
              _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
                boxShadow: "none",
              },
              _hover: { bg: r },
              _active: { bg: t },
              _focus: { boxShadow: "outline" },
            };
          },
          sizes: {
            lg:
              ((je = {}),
              (je[tr.variable] = "40px"),
              (je.fontSize = "16px"),
              je),
            md:
              ((Ne = {}),
              (Ne[tr.variable] = "32px"),
              (Ne.fontSize = "12px"),
              Ne),
            sm:
              ((Oe = {}),
              (Oe[tr.variable] = "24px"),
              (Oe.fontSize = "10px"),
              Oe),
          },
          defaultProps: { size: "md" },
        },
        nr = {
          baseStyle: {
            fontFamily: "mono",
            fontSize: "sm",
            px: "0.2em",
            borderRadius: "sm",
          },
          variants: Ve.variants,
          defaultProps: Ve.defaultProps,
        },
        ar = { baseStyle: { w: "100%", mx: "auto", maxW: "60ch", px: "1rem" } },
        ir = {
          baseStyle: { opacity: 0.6, borderColor: "inherit" },
          variants: {
            solid: { borderStyle: "solid" },
            dashed: { borderStyle: "dashed" },
          },
          defaultProps: { variant: "solid" },
        };
      function lr(e) {
        return "full" === e
          ? { dialog: { maxW: "100vw", h: "100vh" } }
          : { dialog: { maxW: e } };
      }
      var sr = { bg: "blackAlpha.600", zIndex: "overlay" },
        dr = { display: "flex", zIndex: "modal", justifyContent: "center" },
        cr = function (e) {
          return n({}, e.isFullHeight && { height: "100vh" }, {
            zIndex: "modal",
            maxH: "100vh",
            bg: I("white", "gray.700")(e),
            color: "inherit",
            boxShadow: I("lg", "dark-lg")(e),
          });
        },
        ur = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
        hr = { position: "absolute", top: 2, insetEnd: 3 },
        fr = { px: 6, py: 2, flex: 1, overflow: "auto" },
        pr = { px: 6, py: 4 },
        br = {
          xs: lr("xs"),
          sm: lr("md"),
          md: lr("lg"),
          lg: lr("2xl"),
          xl: lr("4xl"),
          full: lr("full"),
        },
        mr = {
          parts: le.keys,
          baseStyle: function (e) {
            return {
              overlay: sr,
              dialogContainer: dr,
              dialog: cr(e),
              header: ur,
              closeButton: hr,
              body: fr,
              footer: pr,
            };
          },
          sizes: br,
          defaultProps: { size: "xs" },
        },
        gr = {
          preview: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal",
          },
          input: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focus: { boxShadow: "outline" },
            _placeholder: { opacity: 0.6 },
          },
          textarea: {
            borderRadius: "md",
            py: "3px",
            transitionProperty: "common",
            transitionDuration: "normal",
            width: "full",
            _focus: { boxShadow: "outline" },
            _placeholder: { opacity: 0.6 },
          },
        },
        xr = { parts: se.keys, baseStyle: gr },
        yr = function (e) {
          return { marginStart: 1, color: I("red.500", "red.300")(e) };
        },
        vr = function (e) {
          return {
            mt: 2,
            color: I("gray.500", "whiteAlpha.600")(e),
            lineHeight: "normal",
            fontSize: "sm",
          };
        },
        wr = {
          parts: de.keys,
          baseStyle: function (e) {
            return {
              container: { width: "100%", position: "relative" },
              requiredIndicator: yr(e),
              helperText: vr(e),
            };
          },
        },
        Sr = function (e) {
          return {
            color: I("red.500", "red.300")(e),
            mt: 2,
            fontSize: "sm",
            lineHeight: "normal",
          };
        },
        kr = function (e) {
          return { marginEnd: "0.5em", color: I("red.500", "red.300")(e) };
        },
        Ar = {
          parts: ce.keys,
          baseStyle: function (e) {
            return { text: Sr(e), icon: kr(e) };
          },
        },
        Cr = {
          baseStyle: {
            fontSize: "md",
            marginEnd: 3,
            mb: 2,
            fontWeight: "medium",
            transitionProperty: "common",
            transitionDuration: "normal",
            opacity: 1,
            _disabled: { opacity: 0.4 },
          },
        },
        zr = {
          baseStyle: { fontFamily: "heading", fontWeight: "bold" },
          sizes: {
            "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
            "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
            "2xl": {
              fontSize: ["4xl", null, "5xl"],
              lineHeight: [1.2, null, 1],
            },
            xl: {
              fontSize: ["3xl", null, "4xl"],
              lineHeight: [1.33, null, 1.2],
            },
            lg: {
              fontSize: ["2xl", null, "3xl"],
              lineHeight: [1.33, null, 1.2],
            },
            md: { fontSize: "xl", lineHeight: 1.2 },
            sm: { fontSize: "md", lineHeight: 1.2 },
            xs: { fontSize: "sm", lineHeight: 1.2 },
          },
          defaultProps: { size: "xl" },
        },
        Fr = {
          lg: { fontSize: "lg", px: 4, h: 12, borderRadius: "md" },
          md: { fontSize: "md", px: 4, h: 10, borderRadius: "md" },
          sm: { fontSize: "sm", px: 3, h: 8, borderRadius: "sm" },
          xs: { fontSize: "xs", px: 2, h: 6, borderRadius: "sm" },
        },
        Br = {
          lg: { field: Fr.lg, addon: Fr.lg },
          md: { field: Fr.md, addon: Fr.md },
          sm: { field: Fr.sm, addon: Fr.sm },
          xs: { field: Fr.xs, addon: Fr.xs },
        };
      function _r(e) {
        var r = e.focusBorderColor,
          t = e.errorBorderColor;
        return {
          focusBorderColor: r || I("blue.500", "blue.300")(e),
          errorBorderColor: t || I("red.500", "red.300")(e),
        };
      }
      var Er = {
          outline: function (e) {
            var r = e.theme,
              t = _r(e),
              o = t.focusBorderColor,
              n = t.errorBorderColor;
            return {
              field: {
                border: "1px solid",
                borderColor: "inherit",
                bg: "inherit",
                _hover: { borderColor: I("gray.300", "whiteAlpha.400")(e) },
                _readOnly: { boxShadow: "none !important", userSelect: "all" },
                _disabled: { opacity: 0.4, cursor: "not-allowed" },
                _invalid: {
                  borderColor: D(r, n),
                  boxShadow: "0 0 0 1px " + D(r, n),
                },
                _focus: {
                  zIndex: 1,
                  borderColor: D(r, o),
                  boxShadow: "0 0 0 1px " + D(r, o),
                },
              },
              addon: {
                border: "1px solid",
                borderColor: I("inherit", "whiteAlpha.50")(e),
                bg: I("gray.100", "whiteAlpha.300")(e),
              },
            };
          },
          filled: function (e) {
            var r = e.theme,
              t = _r(e),
              o = t.focusBorderColor,
              n = t.errorBorderColor;
            return {
              field: {
                border: "2px solid",
                borderColor: "transparent",
                bg: I("gray.100", "whiteAlpha.50")(e),
                _hover: { bg: I("gray.200", "whiteAlpha.100")(e) },
                _readOnly: { boxShadow: "none !important", userSelect: "all" },
                _disabled: { opacity: 0.4, cursor: "not-allowed" },
                _invalid: { borderColor: D(r, n) },
                _focus: { bg: "transparent", borderColor: D(r, o) },
              },
              addon: {
                border: "2px solid",
                borderColor: "transparent",
                bg: I("gray.100", "whiteAlpha.50")(e),
              },
            };
          },
          flushed: function (e) {
            var r = e.theme,
              t = _r(e),
              o = t.focusBorderColor,
              n = t.errorBorderColor;
            return {
              field: {
                borderBottom: "1px solid",
                borderColor: "inherit",
                borderRadius: 0,
                px: 0,
                bg: "transparent",
                _readOnly: { boxShadow: "none !important", userSelect: "all" },
                _invalid: {
                  borderColor: D(r, n),
                  boxShadow: "0px 1px 0px 0px " + D(r, n),
                },
                _focus: {
                  borderColor: D(r, o),
                  boxShadow: "0px 1px 0px 0px " + D(r, o),
                },
              },
              addon: {
                borderBottom: "2px solid",
                borderColor: "inherit",
                borderRadius: 0,
                px: 0,
                bg: "transparent",
              },
            };
          },
          unstyled: {
            field: { bg: "transparent", px: 0, height: "auto" },
            addon: { bg: "transparent", px: 0, height: "auto" },
          },
        },
        Rr = {
          parts: ue.keys,
          baseStyle: {
            field: {
              width: "100%",
              minWidth: 0,
              outline: 0,
              position: "relative",
              appearance: "none",
              transitionProperty: "common",
              transitionDuration: "normal",
            },
          },
          sizes: Br,
          variants: Er,
          defaultProps: { size: "md", variant: "outline" },
        },
        Dr = {
          baseStyle: function (e) {
            return {
              bg: I("gray.100", "whiteAlpha")(e),
              borderRadius: "md",
              borderWidth: "1px",
              borderBottomWidth: "3px",
              fontSize: "0.8em",
              fontWeight: "bold",
              lineHeight: "normal",
              px: "0.4em",
              whiteSpace: "nowrap",
            };
          },
        },
        Mr = {
          baseStyle: {
            transitionProperty: "common",
            transitionDuration: "fast",
            transitionTimingFunction: "ease-out",
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "inherit",
            _hover: { textDecoration: "underline" },
            _focus: { boxShadow: "outline" },
          },
        },
        Hr = {
          container: {},
          item: {},
          icon: {
            marginEnd: "0.5rem",
            display: "inline",
            verticalAlign: "text-bottom",
          },
        },
        Pr = { parts: he.keys, baseStyle: Hr },
        Wr = function (e) {
          return {
            bg: I("#fff", "gray.700")(e),
            boxShadow: I("sm", "dark-lg")(e),
            color: "inherit",
            minW: "3xs",
            py: "2",
            zIndex: 1,
            borderRadius: "md",
            borderWidth: "1px",
          };
        },
        Ir = function (e) {
          return {
            py: "0.4rem",
            px: "0.8rem",
            transitionProperty: "background",
            transitionDuration: "ultra-fast",
            transitionTimingFunction: "ease-in",
            _focus: { bg: I("gray.100", "whiteAlpha.100")(e) },
            _active: { bg: I("gray.200", "whiteAlpha.200")(e) },
            _expanded: { bg: I("gray.100", "whiteAlpha.100")(e) },
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
          };
        },
        Tr = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
        jr = { opacity: 0.6 },
        Nr = {
          border: 0,
          borderBottom: "1px solid",
          borderColor: "inherit",
          my: "0.5rem",
          opacity: 0.6,
        },
        Or = { transitionProperty: "common", transitionDuration: "normal" },
        qr = {
          parts: fe.keys,
          baseStyle: function (e) {
            return {
              button: Or,
              list: Wr(e),
              item: Ir(e),
              groupTitle: Tr,
              command: jr,
              divider: Nr,
            };
          },
        },
        Lr = { bg: "blackAlpha.600", zIndex: "modal" },
        Ur = function (e) {
          return {
            display: "flex",
            zIndex: "modal",
            justifyContent: "center",
            alignItems: e.isCentered ? "center" : "flex-start",
            overflow: "inside" === e.scrollBehavior ? "hidden" : "auto",
          };
        },
        Vr = function (e) {
          var r = e.scrollBehavior;
          return {
            borderRadius: "md",
            bg: I("white", "gray.700")(e),
            color: "inherit",
            my: "3.75rem",
            zIndex: "modal",
            maxH: "inside" === r ? "calc(100% - 7.5rem)" : void 0,
            boxShadow: I("lg", "dark-lg")(e),
          };
        },
        Kr = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
        $r = { position: "absolute", top: 2, insetEnd: 3 },
        Xr = function (e) {
          return {
            px: 6,
            py: 2,
            flex: 1,
            overflow: "inside" === e.scrollBehavior ? "auto" : void 0,
          };
        },
        Yr = { px: 6, py: 4 };
      function Gr(e) {
        return "full" === e
          ? {
              dialog: {
                maxW: "100vw",
                minH: "100vh",
                "@supports(min-height: -webkit-fill-available)": {
                  minH: "-webkit-fill-available",
                },
                my: 0,
              },
            }
          : { dialog: { maxW: e } };
      }
      var Qr,
        Zr,
        Jr,
        et = {
          xs: Gr("xs"),
          sm: Gr("sm"),
          md: Gr("md"),
          lg: Gr("lg"),
          xl: Gr("xl"),
          "2xl": Gr("2xl"),
          "3xl": Gr("3xl"),
          "4xl": Gr("4xl"),
          "5xl": Gr("5xl"),
          "6xl": Gr("6xl"),
          full: Gr("full"),
        },
        rt = {
          parts: pe.keys,
          baseStyle: function (e) {
            return {
              overlay: Lr,
              dialogContainer: Ur(e),
              dialog: Vr(e),
              header: Kr,
              closeButton: $r,
              body: Xr(e),
              footer: Yr,
            };
          },
          sizes: et,
          defaultProps: { size: "md" },
        },
        tt = Rr.variants,
        ot = Rr.defaultProps,
        nt = ee("number-input-stepper-width"),
        at = ee("number-input-input-padding"),
        it = G(nt).add("0.5rem").toString(),
        lt = (((Qr = {})[nt.variable] = "24px"), (Qr[at.variable] = it), Qr),
        st =
          null != (Zr = null == (Jr = Rr.baseStyle) ? void 0 : Jr.field)
            ? Zr
            : {},
        dt = { width: [nt.reference] },
        ct = function (e) {
          return {
            borderStart: "1px solid",
            borderStartColor: I("inherit", "whiteAlpha.300")(e),
            color: I("inherit", "whiteAlpha.800")(e),
            _active: { bg: I("gray.200", "whiteAlpha.300")(e) },
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
          };
        };
      function ut(e) {
        var r,
          t,
          o = Rr.sizes[e],
          a = { lg: "md", md: "md", sm: "sm", xs: "sm" },
          i =
            null != (r = null == (t = o.field) ? void 0 : t.fontSize)
              ? r
              : "md",
          l = ze.fontSizes[i.toString()];
        return {
          field: n({}, o.field, {
            paddingInlineEnd: at.reference,
            verticalAlign: "top",
          }),
          stepper: {
            fontSize: G(l).multiply(0.75).toString(),
            _first: { borderTopEndRadius: a[e] },
            _last: {
              borderBottomEndRadius: a[e],
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        };
      }
      var ht,
        ft = { xs: ut("xs"), sm: ut("sm"), md: ut("md"), lg: ut("lg") },
        pt = {
          parts: be.keys,
          baseStyle: function (e) {
            return { root: lt, field: st, stepperGroup: dt, stepper: ct(e) };
          },
          sizes: ft,
          variants: tt,
          defaultProps: ot,
        },
        bt = {
          baseStyle: n({}, Rr.baseStyle.field, { textAlign: "center" }),
          sizes: {
            lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
            md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
            sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
            xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
          },
          variants: {
            outline: function (e) {
              var r;
              return null != (r = Rr.variants.outline(e).field) ? r : {};
            },
            flushed: function (e) {
              var r;
              return null != (r = Rr.variants.flushed(e).field) ? r : {};
            },
            filled: function (e) {
              var r;
              return null != (r = Rr.variants.filled(e).field) ? r : {};
            },
            unstyled: null != (ht = Rr.variants.unstyled.field) ? ht : {},
          },
          defaultProps: Rr.defaultProps,
        },
        mt = ee("popper-bg"),
        gt = ee("popper-arrow-bg"),
        xt = ee("popper-arrow-shadow-color"),
        yt = { zIndex: 10 },
        vt = function (e) {
          var r,
            t = I("white", "gray.700")(e),
            o = I("gray.200", "whiteAlpha.300")(e);
          return (
            ((r = {})[mt.variable] = "colors." + t),
            (r.bg = mt.reference),
            (r[gt.variable] = mt.reference),
            (r[xt.variable] = "colors." + o),
            (r.width = "xs"),
            (r.border = "1px solid"),
            (r.borderColor = "inherit"),
            (r.borderRadius = "md"),
            (r.boxShadow = "sm"),
            (r.zIndex = "inherit"),
            (r._focus = { outline: 0, boxShadow: "outline" }),
            r
          );
        },
        wt = { px: 3, py: 2, borderBottomWidth: "1px" },
        St = { px: 3, py: 2 },
        kt = { px: 3, py: 2, borderTopWidth: "1px" },
        At = {
          position: "absolute",
          borderRadius: "md",
          top: 1,
          insetEnd: 2,
          padding: 2,
        },
        Ct = {
          parts: me.keys,
          baseStyle: function (e) {
            return {
              popper: yt,
              content: vt(e),
              header: wt,
              body: St,
              footer: kt,
              arrow: {},
              closeButton: At,
            };
          },
        };
      var zt = {
          lineHeight: "1",
          fontSize: "0.25em",
          fontWeight: "bold",
          color: "white",
        },
        Ft = function (e) {
          return { bg: I("gray.100", "whiteAlpha.300")(e) };
        },
        Bt = function (e) {
          return n(
            { transitionProperty: "common", transitionDuration: "slow" },
            (function (e) {
              var r = e.colorScheme,
                t = e.theme,
                o = e.isIndeterminate,
                a = e.hasStripe,
                i = I(P(), P("1rem", "rgba(0,0,0,0.1)"))(e),
                l = I(r + ".500", r + ".200")(e),
                s =
                  "linear-gradient(\n    to right,\n    transparent 0%,\n    " +
                  D(t, l) +
                  " 50%,\n    transparent 100%\n  )";
              return n({}, !o && a && i, o ? { bgImage: s } : { bgColor: l });
            })(e)
          );
        },
        _t = {
          parts: ge.keys,
          sizes: {
            xs: { track: { h: "0.25rem" } },
            sm: { track: { h: "0.5rem" } },
            md: { track: { h: "0.75rem" } },
            lg: { track: { h: "1rem" } },
          },
          baseStyle: function (e) {
            return { label: zt, filledTrack: Bt(e), track: Ft(e) };
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        },
        Et = function (e) {
          var r = rr.baseStyle(e).control,
            t = void 0 === r ? {} : r;
          return n({}, t, {
            borderRadius: "full",
            _checked: n({}, t._checked, {
              _before: {
                content: '""',
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor",
              },
            }),
          });
        },
        Rt = {
          parts: xe.keys,
          baseStyle: function (e) {
            return {
              label: rr.baseStyle(e).label,
              container: rr.baseStyle(e).container,
              control: Et(e),
            };
          },
          sizes: {
            md: { control: { w: 4, h: 4 }, label: { fontSize: "md" } },
            lg: { control: { w: 5, h: 5 }, label: { fontSize: "lg" } },
            sm: { control: { width: 3, height: 3 }, label: { fontSize: "sm" } },
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        },
        Dt = function (e) {
          return n({}, Rr.baseStyle.field, {
            bg: I("white", "gray.700")(e),
            appearance: "none",
            paddingBottom: "1px",
            lineHeight: "normal",
            "> option, > optgroup": { bg: I("white", "gray.700")(e) },
          });
        },
        Mt = {
          width: "1.5rem",
          height: "100%",
          insetEnd: "0.5rem",
          position: "relative",
          color: "currentColor",
          fontSize: "1.25rem",
          _disabled: { opacity: 0.5 },
        },
        Ht = { paddingInlineEnd: "2rem" },
        Pt = Be()({}, Rr.sizes, {
          lg: { field: Ht },
          md: { field: Ht },
          sm: { field: Ht },
          xs: { field: Ht, icon: { insetEnd: "0.25rem" } },
        }),
        Wt = {
          parts: ye.keys,
          baseStyle: function (e) {
            return { field: Dt(e), icon: Mt };
          },
          sizes: Pt,
          variants: Rr.variants,
          defaultProps: Rr.defaultProps,
        },
        It = function (e, r) {
          return (0, _e.F4)({
            from: { borderColor: e, background: e },
            to: { borderColor: r, background: r },
          });
        },
        Tt = {
          baseStyle: function (e) {
            var r = I("gray.100", "gray.800")(e),
              t = I("gray.400", "gray.600")(e),
              o = e.startColor,
              n = void 0 === o ? r : o,
              a = e.endColor,
              i = void 0 === a ? t : a,
              l = e.speed,
              s = e.theme,
              d = D(s, n),
              c = D(s, i);
            return {
              opacity: 0.7,
              borderRadius: "2px",
              borderColor: d,
              background: c,
              animation: l + "s linear infinite alternate " + It(d, c),
            };
          },
        },
        jt = {
          baseStyle: function (e) {
            return {
              borderRadius: "md",
              fontWeight: "semibold",
              _focus: {
                boxShadow: "outline",
                padding: "1rem",
                position: "fixed",
                top: "1.5rem",
                insetStart: "1.5rem",
                bg: I("white", "gray.700")(e),
              },
            };
          },
        };
      var Nt,
        Ot,
        qt,
        Lt,
        Ut,
        Vt,
        Kt,
        $t,
        Xt,
        Yt,
        Gt,
        Qt,
        Zt,
        Jt = function (e) {
          return n(
            {
              display: "inline-block",
              position: "relative",
              cursor: "pointer",
              _disabled: {
                opacity: 0.6,
                cursor: "default",
                pointerEvents: "none",
              },
            },
            T({
              orientation: e.orientation,
              vertical: { h: "100%" },
              horizontal: { w: "100%" },
            })
          );
        },
        eo = function (e) {
          return {
            overflow: "hidden",
            borderRadius: "sm",
            bg: I("gray.200", "whiteAlpha.200")(e),
            _disabled: { bg: I("gray.300", "whiteAlpha.300")(e) },
          };
        },
        ro = function (e) {
          return n(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              outline: 0,
              zIndex: 1,
              borderRadius: "full",
              bg: "white",
              boxShadow: "base",
              border: "1px solid",
              borderColor: "transparent",
              transitionProperty: "transform",
              transitionDuration: "normal",
              _focus: { boxShadow: "outline" },
              _disabled: { bg: "gray.300" },
            },
            (function (e) {
              return T({
                orientation: e.orientation,
                vertical: {
                  left: "50%",
                  transform: "translateX(-50%)",
                  _active: { transform: "translateX(-50%) scale(1.15)" },
                },
                horizontal: {
                  top: "50%",
                  transform: "translateY(-50%)",
                  _active: { transform: "translateY(-50%) scale(1.15)" },
                },
              });
            })(e)
          );
        },
        to = function (e) {
          var r = e.colorScheme;
          return {
            width: "inherit",
            height: "inherit",
            bg: I(r + ".500", r + ".200")(e),
          };
        },
        oo = {
          lg: function (e) {
            return {
              thumb: { w: "16px", h: "16px" },
              track: T({
                orientation: e.orientation,
                horizontal: { h: "4px" },
                vertical: { w: "4px" },
              }),
            };
          },
          md: function (e) {
            return {
              thumb: { w: "14px", h: "14px" },
              track: T({
                orientation: e.orientation,
                horizontal: { h: "4px" },
                vertical: { w: "4px" },
              }),
            };
          },
          sm: function (e) {
            return {
              thumb: { w: "10px", h: "10px" },
              track: T({
                orientation: e.orientation,
                horizontal: { h: "2px" },
                vertical: { w: "2px" },
              }),
            };
          },
        },
        no = {
          parts: ve.keys,
          sizes: oo,
          baseStyle: function (e) {
            return {
              container: Jt(e),
              track: eo(e),
              thumb: ro(e),
              filledTrack: to(e),
            };
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        },
        ao = ee("spinner-size"),
        io = {
          baseStyle: { width: [ao.reference], height: [ao.reference] },
          sizes: {
            xs: ((Nt = {}), (Nt[ao.variable] = "0.75rem"), Nt),
            sm: ((Ot = {}), (Ot[ao.variable] = "1rem"), Ot),
            md: ((qt = {}), (qt[ao.variable] = "1.5rem"), qt),
            lg: ((Lt = {}), (Lt[ao.variable] = "2rem"), Lt),
            xl: ((Ut = {}), (Ut[ao.variable] = "3rem"), Ut),
          },
          defaultProps: { size: "md" },
        },
        lo = {
          container: {},
          label: { fontWeight: "medium" },
          helpText: { opacity: 0.8, marginBottom: 2 },
          number: { verticalAlign: "baseline", fontWeight: "semibold" },
          icon: { marginEnd: 1, w: "14px", h: "14px", verticalAlign: "middle" },
        },
        so = {
          parts: we.keys,
          baseStyle: lo,
          sizes: {
            md: {
              label: { fontSize: "sm" },
              helpText: { fontSize: "sm" },
              number: { fontSize: "2xl" },
            },
          },
          defaultProps: { size: "md" },
        },
        co = ee("switch-track-width"),
        uo = ee("switch-track-height"),
        ho = ee("switch-track-diff"),
        fo = G.subtract(co, uo),
        po = ee("switch-thumb-x"),
        bo = function (e) {
          var r = e.colorScheme;
          return {
            borderRadius: "full",
            p: "2px",
            width: [co.reference],
            height: [uo.reference],
            transitionProperty: "common",
            transitionDuration: "fast",
            bg: I("gray.300", "whiteAlpha.400")(e),
            _focus: { boxShadow: "outline" },
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
            _checked: { bg: I(r + ".500", r + ".200")(e) },
          };
        },
        mo = {
          bg: "white",
          transitionProperty: "transform",
          transitionDuration: "normal",
          borderRadius: "inherit",
          width: [uo.reference],
          height: [uo.reference],
          _checked: { transform: "translateX(" + po.reference + ")" },
        },
        go = {
          sm: {
            container:
              ((Vt = {}),
              (Vt[co.variable] = "1.375rem"),
              (Vt[uo.variable] = "0.75rem"),
              Vt),
          },
          md: {
            container:
              ((Kt = {}),
              (Kt[co.variable] = "1.875rem"),
              (Kt[uo.variable] = "1rem"),
              Kt),
          },
          lg: {
            container:
              (($t = {}),
              ($t[co.variable] = "2.875rem"),
              ($t[uo.variable] = "1.5rem"),
              $t),
          },
        },
        xo = {
          parts: Se.keys,
          baseStyle: function (e) {
            var r, t;
            return {
              container:
                ((t = {}),
                (t[ho.variable] = fo),
                (t[po.variable] = ho.reference),
                (t._rtl =
                  ((r = {}), (r[po.variable] = G(ho).negate().toString()), r)),
                t),
              track: bo(e),
              thumb: mo,
            };
          },
          sizes: go,
          defaultProps: { size: "md", colorScheme: "blue" },
        },
        yo = { "&[data-is-numeric=true]": { textAlign: "end" } },
        vo = {
          simple: function (e) {
            var r = e.colorScheme;
            return {
              th: n(
                {
                  color: I("gray.600", "gray.400")(e),
                  borderBottom: "1px",
                  borderColor: I(r + ".100", r + ".700")(e),
                },
                yo
              ),
              td: n(
                {
                  borderBottom: "1px",
                  borderColor: I(r + ".100", r + ".700")(e),
                },
                yo
              ),
              caption: { color: I("gray.600", "gray.100")(e) },
              tfoot: {
                tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } },
              },
            };
          },
          striped: function (e) {
            var r = e.colorScheme;
            return {
              th: n(
                {
                  color: I("gray.600", "gray.400")(e),
                  borderBottom: "1px",
                  borderColor: I(r + ".100", r + ".700")(e),
                },
                yo
              ),
              td: n(
                {
                  borderBottom: "1px",
                  borderColor: I(r + ".100", r + ".700")(e),
                },
                yo
              ),
              caption: { color: I("gray.600", "gray.100")(e) },
              tbody: {
                tr: {
                  "&:nth-of-type(odd)": {
                    "th, td": {
                      borderBottomWidth: "1px",
                      borderColor: I(r + ".100", r + ".700")(e),
                    },
                    td: { background: I(r + ".100", r + ".700")(e) },
                  },
                },
              },
              tfoot: {
                tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } },
              },
            };
          },
          unstyled: {},
        },
        wo = {
          parts: ke.keys,
          baseStyle: {
            table: {
              fontVariantNumeric: "lining-nums tabular-nums",
              borderCollapse: "collapse",
              width: "full",
            },
            th: {
              fontFamily: "heading",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "wider",
              textAlign: "start",
            },
            td: { textAlign: "start" },
            caption: {
              mt: 4,
              fontFamily: "heading",
              textAlign: "center",
              fontWeight: "medium",
            },
          },
          variants: vo,
          sizes: {
            sm: {
              th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
              td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
              caption: { px: "4", py: "2", fontSize: "xs" },
            },
            md: {
              th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
              td: { px: "6", py: "4", lineHeight: "5" },
              caption: { px: "6", py: "2", fontSize: "sm" },
            },
            lg: {
              th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
              td: { px: "8", py: "5", lineHeight: "6" },
              caption: { px: "6", py: "2", fontSize: "md" },
            },
          },
          defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
        },
        So = function (e) {
          return { display: "vertical" === e.orientation ? "flex" : "block" };
        },
        ko = function (e) {
          return {
            flex: e.isFitted ? 1 : void 0,
            transitionProperty: "common",
            transitionDuration: "normal",
            _focus: { zIndex: 1, boxShadow: "outline" },
          };
        },
        Ao = function (e) {
          var r = e.align,
            t = void 0 === r ? "start" : r,
            o = e.orientation;
          return {
            justifyContent: {
              end: "flex-end",
              center: "center",
              start: "flex-start",
            }[t],
            flexDirection: "vertical" === o ? "column" : "row",
          };
        },
        Co = { p: 4 },
        zo = {
          line: function (e) {
            var r,
              t,
              o = e.colorScheme,
              n = e.orientation,
              a = "vertical" === n ? "borderStart" : "borderBottom",
              i = "vertical" === n ? "marginStart" : "marginBottom";
            return {
              tablist:
                ((r = {}),
                (r[a] = "2px solid"),
                (r.borderColor = "inherit"),
                r),
              tab:
                ((t = {}),
                (t[a] = "2px solid"),
                (t.borderColor = "transparent"),
                (t[i] = "-2px"),
                (t._selected = {
                  color: I(o + ".600", o + ".300")(e),
                  borderColor: "currentColor",
                }),
                (t._active = { bg: I("gray.200", "whiteAlpha.300")(e) }),
                (t._disabled = { opacity: 0.4, cursor: "not-allowed" }),
                t),
            };
          },
          enclosed: function (e) {
            var r = e.colorScheme;
            return {
              tab: {
                borderTopRadius: "md",
                border: "1px solid",
                borderColor: "transparent",
                mb: "-1px",
                _selected: {
                  color: I(r + ".600", r + ".300")(e),
                  borderColor: "inherit",
                  borderBottomColor: I("white", "gray.800")(e),
                },
              },
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit",
              },
            };
          },
          "enclosed-colored": function (e) {
            var r = e.colorScheme;
            return {
              tab: {
                border: "1px solid",
                borderColor: "inherit",
                bg: I("gray.50", "whiteAlpha.50")(e),
                mb: "-1px",
                _notLast: { marginEnd: "-1px" },
                _selected: {
                  bg: I("#fff", "gray.800")(e),
                  color: I(r + ".600", r + ".300")(e),
                  borderColor: "inherit",
                  borderTopColor: "currentColor",
                  borderBottomColor: "transparent",
                },
              },
              tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit",
              },
            };
          },
          "soft-rounded": function (e) {
            var r = e.colorScheme,
              t = e.theme;
            return {
              tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: "gray.600",
                _selected: { color: D(t, r + ".700"), bg: D(t, r + ".100") },
              },
            };
          },
          "solid-rounded": function (e) {
            var r = e.colorScheme;
            return {
              tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: I("gray.600", "inherit")(e),
                _selected: {
                  color: I("#fff", "gray.800")(e),
                  bg: I(r + ".600", r + ".300")(e),
                },
              },
            };
          },
          unstyled: {},
        },
        Fo = {
          parts: Ae.keys,
          baseStyle: function (e) {
            return { root: So(e), tab: ko(e), tablist: Ao(e), tabpanel: Co };
          },
          sizes: {
            sm: { tab: { py: 1, px: 4, fontSize: "sm" } },
            md: { tab: { fontSize: "md", py: 2, px: 4 } },
            lg: { tab: { fontSize: "lg", py: 3, px: 4 } },
          },
          variants: zo,
          defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
        },
        Bo = {
          container: {
            fontWeight: "medium",
            lineHeight: 1.2,
            outline: 0,
            _focus: { boxShadow: "outline" },
          },
          label: { lineHeight: 1.2, overflow: "visible" },
          closeButton: {
            fontSize: "18px",
            w: "1.25rem",
            h: "1.25rem",
            transitionProperty: "common",
            transitionDuration: "normal",
            borderRadius: "full",
            marginStart: "0.375rem",
            marginEnd: "-1",
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focus: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 },
          },
        },
        _o = {
          subtle: function (e) {
            return { container: Ve.variants.subtle(e) };
          },
          solid: function (e) {
            return { container: Ve.variants.solid(e) };
          },
          outline: function (e) {
            return { container: Ve.variants.outline(e) };
          },
        },
        Eo = {
          parts: Ce.keys,
          variants: _o,
          baseStyle: Bo,
          sizes: {
            sm: {
              container: {
                minH: "1.25rem",
                minW: "1.25rem",
                fontSize: "xs",
                px: 2,
                borderRadius: "md",
              },
              closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
            },
            md: {
              container: {
                minH: "1.5rem",
                minW: "1.5rem",
                fontSize: "sm",
                borderRadius: "md",
                px: 2,
              },
            },
            lg: {
              container: {
                minH: 8,
                minW: 8,
                fontSize: "md",
                borderRadius: "md",
                px: 3,
              },
            },
          },
          defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
        },
        Ro = n({}, Rr.baseStyle.field, {
          paddingY: "8px",
          minHeight: "80px",
          lineHeight: "short",
          verticalAlign: "top",
        }),
        Do = {
          outline: function (e) {
            var r;
            return null != (r = Rr.variants.outline(e).field) ? r : {};
          },
          flushed: function (e) {
            var r;
            return null != (r = Rr.variants.flushed(e).field) ? r : {};
          },
          filled: function (e) {
            var r;
            return null != (r = Rr.variants.filled(e).field) ? r : {};
          },
          unstyled: null != (Xt = Rr.variants.unstyled.field) ? Xt : {},
        },
        Mo = {
          baseStyle: Ro,
          sizes: {
            xs: null != (Yt = Rr.sizes.xs.field) ? Yt : {},
            sm: null != (Gt = Rr.sizes.sm.field) ? Gt : {},
            md: null != (Qt = Rr.sizes.md.field) ? Qt : {},
            lg: null != (Zt = Rr.sizes.lg.field) ? Zt : {},
          },
          variants: Do,
          defaultProps: { size: "md", variant: "outline" },
        },
        Ho = ee("tooltip-bg"),
        Po = ee("popper-arrow-bg"),
        Wo = {
          baseStyle: function (e) {
            var r,
              t = I("gray.700", "gray.300")(e);
            return (
              ((r = {})[Ho.variable] = "colors." + t),
              (r.px = "8px"),
              (r.py = "2px"),
              (r.bg = [Ho.reference]),
              (r[Po.variable] = [Ho.reference]),
              (r.color = I("whiteAlpha.900", "gray.900")(e)),
              (r.borderRadius = "sm"),
              (r.fontWeight = "medium"),
              (r.fontSize = "sm"),
              (r.boxShadow = "md"),
              (r.maxW = "320px"),
              (r.zIndex = "tooltip"),
              r
            );
          },
        },
        Io = Object.freeze({
          __proto__: null,
          Accordion: Re,
          Alert: He,
          Avatar: Le,
          Badge: Ve,
          Breadcrumb: $e,
          Button: Ge,
          Checkbox: rr,
          CloseButton: or,
          Code: nr,
          Container: ar,
          Divider: ir,
          Drawer: mr,
          Editable: xr,
          Form: wr,
          FormError: Ar,
          FormLabel: Cr,
          Heading: zr,
          Input: Rr,
          Kbd: Dr,
          Link: Mr,
          List: Pr,
          Menu: qr,
          Modal: rt,
          NumberInput: pt,
          PinInput: bt,
          Popover: Ct,
          Progress: _t,
          Radio: Rt,
          Select: Wt,
          Skeleton: Tt,
          SkipLink: jt,
          Slider: no,
          Spinner: io,
          Stat: so,
          Switch: xo,
          Table: wo,
          Tabs: Fo,
          Tag: Eo,
          Textarea: Mo,
          Tooltip: Wo,
        }),
        To = (function (e) {
          return (
            (0, R.ZK)({
              condition: !0,
              message: [
                "[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon",
                "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call",
              ].join(""),
            }),
            j({ base: "0em" }, e)
          );
        })({ sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" }),
        jo = n(
          {
            breakpoints: To,
            zIndices: {
              hide: -1,
              auto: "auto",
              base: 0,
              docked: 10,
              dropdown: 1e3,
              sticky: 1100,
              banner: 1200,
              overlay: 1300,
              modal: 1400,
              popover: 1500,
              skipLink: 1600,
              toast: 1700,
              tooltip: 1800,
            },
            radii: {
              none: "0",
              sm: "0.125rem",
              base: "0.25rem",
              md: "0.375rem",
              lg: "0.5rem",
              xl: "0.75rem",
              "2xl": "1rem",
              "3xl": "1.5rem",
              full: "9999px",
            },
            blur: {
              none: 0,
              sm: "4px",
              base: "8px",
              md: "12px",
              lg: "16px",
              xl: "24px",
              "2xl": "40px",
              "3xl": "64px",
            },
            colors: {
              transparent: "transparent",
              current: "currentColor",
              black: "#000000",
              white: "#FFFFFF",
              whiteAlpha: {
                50: "rgba(255, 255, 255, 0.04)",
                100: "rgba(255, 255, 255, 0.06)",
                200: "rgba(255, 255, 255, 0.08)",
                300: "rgba(255, 255, 255, 0.16)",
                400: "rgba(255, 255, 255, 0.24)",
                500: "rgba(255, 255, 255, 0.36)",
                600: "rgba(255, 255, 255, 0.48)",
                700: "rgba(255, 255, 255, 0.64)",
                800: "rgba(255, 255, 255, 0.80)",
                900: "rgba(255, 255, 255, 0.92)",
              },
              blackAlpha: {
                50: "rgba(0, 0, 0, 0.04)",
                100: "rgba(0, 0, 0, 0.06)",
                200: "rgba(0, 0, 0, 0.08)",
                300: "rgba(0, 0, 0, 0.16)",
                400: "rgba(0, 0, 0, 0.24)",
                500: "rgba(0, 0, 0, 0.36)",
                600: "rgba(0, 0, 0, 0.48)",
                700: "rgba(0, 0, 0, 0.64)",
                800: "rgba(0, 0, 0, 0.80)",
                900: "rgba(0, 0, 0, 0.92)",
              },
              gray: {
                50: "#F7FAFC",
                100: "#EDF2F7",
                200: "#E2E8F0",
                300: "#CBD5E0",
                400: "#A0AEC0",
                500: "#718096",
                600: "#4A5568",
                700: "#2D3748",
                800: "#1A202C",
                900: "#171923",
              },
              red: {
                50: "#FFF5F5",
                100: "#FED7D7",
                200: "#FEB2B2",
                300: "#FC8181",
                400: "#F56565",
                500: "#E53E3E",
                600: "#C53030",
                700: "#9B2C2C",
                800: "#822727",
                900: "#63171B",
              },
              orange: {
                50: "#FFFAF0",
                100: "#FEEBC8",
                200: "#FBD38D",
                300: "#F6AD55",
                400: "#ED8936",
                500: "#DD6B20",
                600: "#C05621",
                700: "#9C4221",
                800: "#7B341E",
                900: "#652B19",
              },
              yellow: {
                50: "#FFFFF0",
                100: "#FEFCBF",
                200: "#FAF089",
                300: "#F6E05E",
                400: "#ECC94B",
                500: "#D69E2E",
                600: "#B7791F",
                700: "#975A16",
                800: "#744210",
                900: "#5F370E",
              },
              green: {
                50: "#F0FFF4",
                100: "#C6F6D5",
                200: "#9AE6B4",
                300: "#68D391",
                400: "#48BB78",
                500: "#38A169",
                600: "#2F855A",
                700: "#276749",
                800: "#22543D",
                900: "#1C4532",
              },
              teal: {
                50: "#E6FFFA",
                100: "#B2F5EA",
                200: "#81E6D9",
                300: "#4FD1C5",
                400: "#38B2AC",
                500: "#319795",
                600: "#2C7A7B",
                700: "#285E61",
                800: "#234E52",
                900: "#1D4044",
              },
              blue: {
                50: "#ebf8ff",
                100: "#bee3f8",
                200: "#90cdf4",
                300: "#63b3ed",
                400: "#4299e1",
                500: "#3182ce",
                600: "#2b6cb0",
                700: "#2c5282",
                800: "#2a4365",
                900: "#1A365D",
              },
              cyan: {
                50: "#EDFDFD",
                100: "#C4F1F9",
                200: "#9DECF9",
                300: "#76E4F7",
                400: "#0BC5EA",
                500: "#00B5D8",
                600: "#00A3C4",
                700: "#0987A0",
                800: "#086F83",
                900: "#065666",
              },
              purple: {
                50: "#FAF5FF",
                100: "#E9D8FD",
                200: "#D6BCFA",
                300: "#B794F4",
                400: "#9F7AEA",
                500: "#805AD5",
                600: "#6B46C1",
                700: "#553C9A",
                800: "#44337A",
                900: "#322659",
              },
              pink: {
                50: "#FFF5F7",
                100: "#FED7E2",
                200: "#FBB6CE",
                300: "#F687B3",
                400: "#ED64A6",
                500: "#D53F8C",
                600: "#B83280",
                700: "#97266D",
                800: "#702459",
                900: "#521B41",
              },
              linkedin: {
                50: "#E8F4F9",
                100: "#CFEDFB",
                200: "#9BDAF3",
                300: "#68C7EC",
                400: "#34B3E4",
                500: "#00A0DC",
                600: "#008CC9",
                700: "#0077B5",
                800: "#005E93",
                900: "#004471",
              },
              facebook: {
                50: "#E8F4F9",
                100: "#D9DEE9",
                200: "#B7C2DA",
                300: "#6482C0",
                400: "#4267B2",
                500: "#385898",
                600: "#314E89",
                700: "#29487D",
                800: "#223B67",
                900: "#1E355B",
              },
              messenger: {
                50: "#D0E6FF",
                100: "#B9DAFF",
                200: "#A2CDFF",
                300: "#7AB8FF",
                400: "#2E90FF",
                500: "#0078FF",
                600: "#0063D1",
                700: "#0052AC",
                800: "#003C7E",
                900: "#002C5C",
              },
              whatsapp: {
                50: "#dffeec",
                100: "#b9f5d0",
                200: "#90edb3",
                300: "#65e495",
                400: "#3cdd78",
                500: "#22c35e",
                600: "#179848",
                700: "#0c6c33",
                800: "#01421c",
                900: "#001803",
              },
              twitter: {
                50: "#E5F4FD",
                100: "#C8E9FB",
                200: "#A8DCFA",
                300: "#83CDF7",
                400: "#57BBF5",
                500: "#1DA1F2",
                600: "#1A94DA",
                700: "#1681BF",
                800: "#136B9E",
                900: "#0D4D71",
              },
              telegram: {
                50: "#E3F2F9",
                100: "#C5E4F3",
                200: "#A2D4EC",
                300: "#7AC1E4",
                400: "#47A9DA",
                500: "#0088CC",
                600: "#007AB8",
                700: "#006BA1",
                800: "#005885",
                900: "#003F5E",
              },
            },
          },
          ze,
          {
            sizes: a,
            shadows: {
              xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
              sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
              inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
              none: "none",
              "dark-lg":
                "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
            },
            space: o,
            borders: {
              none: 0,
              "1px": "1px solid",
              "2px": "2px solid",
              "4px": "4px solid",
              "8px": "8px solid",
            },
            transition: {
              property: {
                common:
                  "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                colors: "background-color, border-color, color, fill, stroke",
                dimensions: "width, height",
                position: "left, right, top, bottom",
                background:
                  "background-color, background-image, background-position",
              },
              easing: {
                "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
                "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
                "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
              },
              duration: {
                "ultra-fast": "50ms",
                faster: "100ms",
                fast: "150ms",
                normal: "200ms",
                slow: "300ms",
                slower: "400ms",
                "ultra-slow": "500ms",
              },
            },
          }
        ),
        No = [
          "borders",
          "breakpoints",
          "colors",
          "components",
          "config",
          "direction",
          "fonts",
          "fontSizes",
          "fontWeights",
          "letterSpacings",
          "lineHeights",
          "radii",
          "shadows",
          "sizes",
          "space",
          "styles",
          "transition",
          "zIndices",
        ];
      function Oo(e) {
        return (
          !!(0, R.Kn)(e) &&
          No.every(function (r) {
            return Object.prototype.hasOwnProperty.call(e, r);
          })
        );
      }
      var qo = n({ direction: "ltr" }, jo, {
        components: Io,
        styles: {
          global: function (e) {
            return {
              body: {
                fontFamily: "body",
                color: I("gray.800", "whiteAlpha.900")(e),
                bg: I("white", "gray.800")(e),
                transitionProperty: "background-color",
                transitionDuration: "normal",
                lineHeight: "base",
              },
              "*::placeholder": { color: I("gray.400", "whiteAlpha.400")(e) },
              "*, *::before, &::after": {
                borderColor: I("gray.200", "whiteAlpha.300")(e),
                wordWrap: "break-word",
              },
            };
          },
        },
        config: {
          useSystemColorMode: !1,
          initialColorMode: "light",
          cssVarPrefix: "chakra",
        },
      });
    },
  },
]);

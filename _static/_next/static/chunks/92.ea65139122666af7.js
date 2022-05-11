"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92],
  {
    6157: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        });
    },
    9676: function (t, e, n) {
      n.d(e, {
        M: function () {
          return m;
        },
      });
      var r = n(6984),
        i = n(5473),
        o = n(4842),
        a = n(2239);
      function s() {
        var t = (0, i.useRef)(!1);
        return (
          (0, a.L)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var u = n(2761),
        l = n(1400),
        c = n(5035),
        d = function (t) {
          var e = t.children,
            n = t.initial,
            o = t.isPresent,
            a = t.onExitComplete,
            s = t.custom,
            d = t.presenceAffectsLayout,
            f = (0, l.h)(p),
            v = (0, c.M)(),
            h = (0, i.useMemo)(
              function () {
                return {
                  id: v,
                  initial: n,
                  isPresent: o,
                  custom: s,
                  onExitComplete: function (t) {
                    var e, n;
                    f.set(t, !0);
                    try {
                      for (
                        var i = (0, r.XA)(f.values()), o = i.next();
                        !o.done;
                        o = i.next()
                      ) {
                        if (!o.value) return;
                      }
                    } catch (s) {
                      e = { error: s };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    null === a || void 0 === a || a();
                  },
                  register: function (t) {
                    return (
                      f.set(t, !1),
                      function () {
                        return f.delete(t);
                      }
                    );
                  },
                };
              },
              d ? void 0 : [o]
            );
          return (
            (0, i.useMemo)(
              function () {
                f.forEach(function (t, e) {
                  return f.set(e, !1);
                });
              },
              [o]
            ),
            i.useEffect(
              function () {
                !o && !f.size && (null === a || void 0 === a || a());
              },
              [o]
            ),
            i.createElement(u.O.Provider, { value: h }, e)
          );
        };
      function p() {
        return new Map();
      }
      var f = n(2595),
        v = n(3114),
        h = function (t) {
          return t.key || "";
        };
      var m = function (t) {
        var e = t.children,
          n = t.custom,
          u = t.initial,
          l = void 0 === u || u,
          c = t.onExitComplete,
          p = t.exitBeforeEnter,
          m = t.presenceAffectsLayout,
          y = void 0 === m || m,
          g = (0, r.CR)(
            (function () {
              var t = s(),
                e = (0, r.CR)((0, i.useState)(0), 2),
                n = e[0],
                a = e[1],
                u = (0, i.useCallback)(
                  function () {
                    t.current && a(n + 1);
                  },
                  [n]
                );
              return [
                (0, i.useCallback)(
                  function () {
                    return o.ZP.postRender(u);
                  },
                  [u]
                ),
                n,
              ];
            })(),
            1
          ),
          x = g[0],
          b = (0, i.useContext)(f.p).forceRender;
        b && (x = b);
        var P = s(),
          E = (function (t) {
            var e = [];
            return (
              i.Children.forEach(t, function (t) {
                (0, i.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          w = E,
          T = new Set(),
          S = (0, i.useRef)(w),
          A = (0, i.useRef)(new Map()).current,
          C = (0, i.useRef)(!0);
        if (
          ((0, a.L)(function () {
            (C.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var n = h(t);
                  e.set(n, t);
                });
              })(E, A),
              (S.current = w);
          }),
          (0, v.z)(function () {
            (C.current = !0), A.clear(), T.clear();
          }),
          C.current)
        )
          return i.createElement(
            i.Fragment,
            null,
            w.map(function (t) {
              return i.createElement(
                d,
                {
                  key: h(t),
                  isPresent: !0,
                  initial: !!l && void 0,
                  presenceAffectsLayout: y,
                },
                t
              );
            })
          );
        w = (0, r.ev)([], (0, r.CR)(w), !1);
        for (
          var V = S.current.map(h), R = E.map(h), k = V.length, M = 0;
          M < k;
          M++
        ) {
          var L = V[M];
          -1 === R.indexOf(L) && T.add(L);
        }
        return (
          p && T.size && (w = []),
          T.forEach(function (t) {
            if (-1 === R.indexOf(t)) {
              var e = A.get(t);
              if (e) {
                var r = V.indexOf(t);
                w.splice(
                  r,
                  0,
                  i.createElement(
                    d,
                    {
                      key: h(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        A.delete(t), T.delete(t);
                        var e = S.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        if ((S.current.splice(e, 1), !T.size)) {
                          if (((S.current = E), !1 === P.current)) return;
                          x(), c && c();
                        }
                      },
                      custom: n,
                      presenceAffectsLayout: y,
                    },
                    e
                  )
                );
              }
            }
          }),
          (w = w.map(function (t) {
            var e = t.key;
            return T.has(e)
              ? t
              : i.createElement(
                  d,
                  { key: h(t), isPresent: !0, presenceAffectsLayout: y },
                  t
                );
          })),
          i.createElement(
            i.Fragment,
            null,
            T.size
              ? w
              : w.map(function (t) {
                  return (0, i.cloneElement)(t);
                })
          )
        );
      };
    },
    2595: function (t, e, n) {
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var r = (0, n(5473).createContext)({});
    },
    2761: function (t, e, n) {
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(5473).createContext)(null);
    },
    9427: function (t, e, n) {
      n.d(e, {
        E: function () {
          return ia;
        },
      });
      var r = n(6984),
        i = n(5473),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        a = {
          measureLayout: o(["layout", "layoutId", "drag"]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: o(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var s = (0, i.createContext)({ strict: !1 }),
        u = Object.keys(a),
        l = u.length;
      var c = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        d = (0, i.createContext)({});
      var p = n(2761),
        f = n(2239),
        v = { current: null },
        h = !1;
      function m() {
        return (
          !h &&
            (function () {
              if (((h = !0), "undefined" !== typeof window))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (v.current = t.matches);
                    };
                  t.addListener(e), e();
                } else v.current = !1;
            })(),
          (0, r.CR)((0, i.useState)(v.current), 1)[0]
        );
      }
      function y(t, e, n, r) {
        var o = (0, i.useContext)(s),
          a = (0, i.useContext)(d).visualElement,
          u = (0, i.useContext)(p.O),
          l = (function () {
            var t = m(),
              e = (0, i.useContext)(c).reducedMotion;
            return "never" !== e && ("always" === e || t);
          })(),
          v = (0, i.useRef)(void 0);
        r || (r = o.renderer),
          !v.current &&
            r &&
            (v.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === u || void 0 === u ? void 0 : u.id,
              blockInitialAnimation:
                !1 === (null === u || void 0 === u ? void 0 : u.initial),
              shouldReduceMotion: l,
            }));
        var h = v.current;
        return (
          (0, f.L)(function () {
            null === h || void 0 === h || h.syncRender();
          }),
          (0, i.useEffect)(function () {
            var t;
            null ===
              (t = null === h || void 0 === h ? void 0 : h.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          (0, f.L)(function () {
            return function () {
              return null === h || void 0 === h ? void 0 : h.notifyUnmount();
            };
          }, []),
          h
        );
      }
      function g(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function x(t) {
        return Array.isArray(t);
      }
      function b(t) {
        return "string" === typeof t || x(t);
      }
      function P(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function E(t, e, n) {
        var r = t.getProps();
        return P(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function w(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          b(t.initial) ||
          b(t.animate) ||
          b(t.whileHover) ||
          b(t.whileDrag) ||
          b(t.whileTap) ||
          b(t.whileFocus) ||
          b(t.exit)
        );
      }
      function T(t) {
        return Boolean(w(t) || t.variants);
      }
      function S(t) {
        var e = (function (t, e) {
            if (w(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || b(n) ? n : void 0,
                animate: b(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(d)),
          n = e.initial,
          r = e.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [A(n), A(r)]
        );
      }
      function A(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var C = n(8898),
        V = n(1400),
        R = n(4842);
      const k = (t, e, n) => -n * t + n * e + t;
      function M(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function L(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function O(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var D = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                L(this.subscriptions, t),
                function () {
                  return O(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        j = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new D()),
              (this.velocityUpdateSubscribers = new D()),
              (this.renderSubscribers = new D()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = (0, R.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  R.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return R.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? M(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function F(t) {
        return new j(t);
      }
      var B = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
      const U = (t, e, n) => Math.min(Math.max(n, t), e),
        I = 0.001;
      function N({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let i,
          o,
          a = 1 - e;
        (a = U(0.05, 1, a)),
          (t = U(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = (e) => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = z(e, a),
                  u = Math.exp(-i);
                return I - (o / s) * u;
              }),
              (o = (e) => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = z(Math.pow(e, 2), a);
                return ((-i(e) + I > 0 ? -1 : 1) * ((o - s) * u)) / l;
              }))
            : ((i = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(i, o, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function z(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const H = ["duration", "bounce"],
        Y = ["stiffness", "damping", "mass"];
      function W(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function X(t) {
        var { from: e = 0, to: n = 1, restSpeed: i = 2, restDelta: o } = t,
          a = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]);
        const s = { done: !1, value: e };
        let {
            stiffness: u,
            damping: l,
            mass: c,
            velocity: d,
            duration: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!W(t, Y) && W(t, H)) {
              const n = N(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(a),
          v = Z,
          h = Z;
        function m() {
          const t = d ? -d / 1e3 : 0,
            r = n - e,
            i = l / (2 * Math.sqrt(u * c)),
            a = Math.sqrt(u / c) / 1e3;
          if (
            (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, 0.4)), i < 1)
          ) {
            const e = z(a, i);
            (v = (o) => {
              const s = Math.exp(-i * a * o);
              return (
                n -
                s *
                  (((t + i * a * r) / e) * Math.sin(e * o) +
                    r * Math.cos(e * o))
              );
            }),
              (h = (n) => {
                const o = Math.exp(-i * a * n);
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * n) * (t + i * a * r)) / e +
                      r * Math.cos(e * n)) -
                  o *
                    (Math.cos(e * n) * (t + i * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === i)
            v = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(i * i - 1);
            v = (o) => {
              const s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300);
              return (
                n -
                (s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const e = v(t);
              if (f) s.done = t >= p;
              else {
                const r = 1e3 * h(t),
                  a = Math.abs(r) <= i,
                  u = Math.abs(n - e) <= o;
                s.done = a && u;
              }
              return (s.value = s.done ? n : e), s;
            },
            flipTarget: () => {
              (d = -d), ([e, n] = [n, e]), m();
            },
          }
        );
      }
      X.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const Z = (t) => 0,
        _ = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        q = (t, e) => (n) => Math.max(Math.min(n, e), t),
        G = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        $ = /(-)?([\d]*\.?[\d])+/g,
        K =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        J =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function Q(t) {
        return "string" === typeof t;
      }
      const tt = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        et = Object.assign(Object.assign({}, tt), { transform: q(0, 1) }),
        nt = Object.assign(Object.assign({}, tt), { default: 1 }),
        rt = (t, e) => (n) =>
          Boolean(
            (Q(n) && J.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        it = (t, e, n) => (r) => {
          if (!Q(r)) return r;
          const [i, o, a, s] = r.match($);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        ot = q(0, 255),
        at = Object.assign(Object.assign({}, tt), {
          transform: (t) => Math.round(ot(t)),
        }),
        st = {
          test: rt("rgb", "red"),
          parse: it("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            at.transform(t) +
            ", " +
            at.transform(e) +
            ", " +
            at.transform(n) +
            ", " +
            G(et.transform(r)) +
            ")",
        };
      const ut = {
          test: rt("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: st.transform,
        },
        lt = (t) => ({
          test: (e) => Q(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ct = lt("deg"),
        dt = lt("%"),
        pt = lt("px"),
        ft = lt("vh"),
        vt = lt("vw"),
        ht = Object.assign(Object.assign({}, dt), {
          parse: (t) => dt.parse(t) / 100,
          transform: (t) => dt.transform(100 * t),
        }),
        mt = {
          test: rt("hsl", "hue"),
          parse: it("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            dt.transform(G(e)) +
            ", " +
            dt.transform(G(n)) +
            ", " +
            G(et.transform(r)) +
            ")",
        };
      function yt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function gt({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = yt(s, r, t + 1 / 3)),
            (o = yt(s, r, t)),
            (a = yt(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const xt = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        bt = [ut, st, mt],
        Pt = (t) => bt.find((e) => e.test(t)),
        Et = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        wt = (t, e) => {
          let n = Pt(t),
            r = Pt(e);
          Et(t), Et(e);
          let i = n.parse(t),
            o = r.parse(e);
          n === mt && ((i = gt(i)), (n = st)),
            r === mt && ((o = gt(o)), (r = st));
          const a = Object.assign({}, i);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = xt(i[e], o[e], t));
            return (a.alpha = k(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        Tt = {
          test: (t) => st.test(t) || ut.test(t) || mt.test(t),
          parse: (t) =>
            st.test(t) ? st.parse(t) : mt.test(t) ? mt.parse(t) : ut.parse(t),
          transform: (t) =>
            Q(t)
              ? t
              : t.hasOwnProperty("red")
              ? st.transform(t)
              : mt.transform(t),
        },
        St = "${c}",
        At = "${n}";
      function Ct(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(K);
        r &&
          ((n = r.length), (t = t.replace(K, St)), e.push(...r.map(Tt.parse)));
        const i = t.match($);
        return (
          i && ((t = t.replace($, At)), e.push(...i.map(tt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function Vt(t) {
        return Ct(t).values;
      }
      function Rt(t) {
        const { values: e, numColors: n, tokenised: r } = Ct(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? St : At,
              r < n ? Tt.transform(t[r]) : G(t[r])
            );
          return e;
        };
      }
      const kt = (t) => ("number" === typeof t ? 0 : t);
      const Mt = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              Q(t) &&
              (null !==
                (n =
                  null === (e = t.match($)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(K)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: Vt,
          createTransformer: Rt,
          getAnimatableNone: function (t) {
            const e = Vt(t);
            return Rt(t)(e.map(kt));
          },
        },
        Lt = (t) => "number" === typeof t,
        Ot = (t, e) => (n) => e(t(n)),
        Dt = (...t) => t.reduce(Ot);
      function jt(t, e) {
        return Lt(t) ? (n) => k(t, e, n) : Tt.test(t) ? wt(t, e) : It(t, e);
      }
      const Ft = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => jt(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        Bt = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = jt(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function Ut(t) {
        const e = Mt.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const It = (t, e) => {
          const n = Mt.createTransformer(e),
            r = Ut(t),
            i = Ut(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? Dt(Ft(r.parsed, i.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        Nt = (t, e) => (n) => k(t, e, n);
      function zt(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? Nt
              : "string" === typeof o
              ? Tt.test(o)
                ? wt
                : It
              : Array.isArray(o)
              ? Ft
              : "object" === typeof o
              ? Bt
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = Dt(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function Ht(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = zt(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(_(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1;
                    }
                    const s = _(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(U(t[0], t[o - 1], e)) : s;
      }
      const Yt = (t) => (e) => 1 - t(1 - e),
        Wt = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Xt = (t) => (e) => e * e * ((t + 1) * e - t),
        Zt = (t) => t,
        _t = ((qt = 2), (t) => Math.pow(t, qt));
      var qt;
      const Gt = Yt(_t),
        $t = Wt(_t),
        Kt = (t) => 1 - Math.sin(Math.acos(t)),
        Jt = Yt(Kt),
        Qt = Wt(Jt),
        te = Xt(1.525),
        ee = Yt(te),
        ne = Wt(te),
        re = ((t) => {
          const e = Xt(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        ie = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        oe = Yt(ie);
      function ae(t, e) {
        return t.map(() => e || $t).splice(0, t.length - 1);
      }
      function se({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function u() {
          return Ht(s, a, { ease: Array.isArray(n) ? n : ae(a, n) });
        }
        let l = u();
        return {
          next: (t) => ((o.value = l(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      const ue = {
        keyframes: se,
        spring: X,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const u = e + s,
            l = void 0 === o ? u : o(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      function le(t, e, n = 0) {
        return t - e - n;
      }
      const ce = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => R.ZP.update(e, !0), stop: () => R.qY.update(e) };
      };
      function de(t) {
        var e,
          n,
          {
            from: i,
            autoplay: o = !0,
            driver: a = ce,
            elapsed: s = 0,
            repeat: u = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: d,
            onStop: p,
            onComplete: f,
            onRepeat: v,
            onUpdate: h,
          } = t,
          m = (0, r._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let y,
          g,
          x,
          { to: b } = m,
          P = 0,
          E = m.duration,
          w = !1,
          T = !0;
        const S = (function (t) {
          if (Array.isArray(t.to)) return se;
          if (ue[t.type]) return ue[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? se
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? X
            : se;
        })(m);
        (null === (n = (e = S).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, i, b)) &&
          ((x = Ht([0, 100], [i, b], { clamp: !1 })), (i = 0), (b = 100));
        const A = S(Object.assign(Object.assign({}, m), { from: i, to: b }));
        function C() {
          P++,
            "reverse" === l
              ? ((T = P % 2 === 0),
                (s = (function (t, e, n = 0, r = !0) {
                  return r ? le(e + -t, e, n) : e - (t - e) + n;
                })(s, E, c, T)))
              : ((s = le(s, E, c)), "mirror" === l && A.flipTarget()),
            (w = !1),
            v && v();
        }
        function V(t) {
          if ((T || (t = -t), (s += t), !w)) {
            const t = A.next(Math.max(0, s));
            (g = t.value), x && (g = x(g)), (w = T ? t.done : s <= 0);
          }
          null === h || void 0 === h || h(g),
            w &&
              (0 === P && ((null !== E && void 0 !== E) || (E = s)),
              P < u
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(s, E, c, T) && C()
                : (y.stop(), f && f()));
        }
        return (
          o && (null === d || void 0 === d || d(), (y = a(V)), y.start()),
          {
            stop: () => {
              null === p || void 0 === p || p(), y.stop();
            },
          }
        );
      }
      var pe = function (t) {
        return 1e3 * t;
      };
      const fe = (t, e) => 1 - 3 * e + 3 * t,
        ve = (t, e) => 3 * e - 6 * t,
        he = (t) => 3 * t,
        me = (t, e, n) => ((fe(e, n) * t + ve(e, n)) * t + he(e)) * t,
        ye = (t, e, n) => 3 * fe(e, n) * t * t + 2 * ve(e, n) * t + he(e);
      const ge = 0.1;
      function xe(t, e, n, r) {
        if (t === e && n === r) return Zt;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = me(a * ge, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += ge;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * ge,
            s = ye(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = ye(e, n, r);
                  if (0 === i) return e;
                  e -= (me(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = me(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + ge, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : me(o(t), e, r));
      }
      var be = {
          linear: Zt,
          easeIn: _t,
          easeInOut: $t,
          easeOut: Gt,
          circIn: Kt,
          circInOut: Qt,
          circOut: Jt,
          backIn: te,
          backInOut: ne,
          backOut: ee,
          anticipate: re,
          bounceIn: oe,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - ie(1 - 2 * t)) : 0.5 * ie(2 * t - 1) + 0.5,
          bounceOut: ie,
        },
        Pe = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, r.CR)(t, 4);
            return xe(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), be[t])
            : t;
        },
        Ee = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Mt.test(e) || e.startsWith("url(")))
          );
        },
        we = function (t) {
          return Array.isArray(t);
        },
        Te = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Se = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Ae = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Ce = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        Ve = {
          x: Te,
          y: Te,
          z: Te,
          rotate: Te,
          rotateX: Te,
          rotateY: Te,
          rotateZ: Te,
          scaleX: Se,
          scaleY: Se,
          scale: Se,
          opacity: Ae,
          backgroundColor: Ae,
          color: Ae,
          default: Se,
        };
      const Re = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ke(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match($) || [];
        if (!r) return t;
        const i = n.replace(r, "");
        let o = Re.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      const Me = /([a-z-]*)\(.*?\)/g,
        Le = Object.assign(Object.assign({}, Mt), {
          getAnimatableNone: (t) => {
            const e = t.match(Me);
            return e ? e.map(ke).join(" ") : t;
          },
        });
      var Oe = (0, r.pi)((0, r.pi)({}, tt), { transform: Math.round }),
        De = {
          borderWidth: pt,
          borderTopWidth: pt,
          borderRightWidth: pt,
          borderBottomWidth: pt,
          borderLeftWidth: pt,
          borderRadius: pt,
          radius: pt,
          borderTopLeftRadius: pt,
          borderTopRightRadius: pt,
          borderBottomRightRadius: pt,
          borderBottomLeftRadius: pt,
          width: pt,
          maxWidth: pt,
          height: pt,
          maxHeight: pt,
          size: pt,
          top: pt,
          right: pt,
          bottom: pt,
          left: pt,
          padding: pt,
          paddingTop: pt,
          paddingRight: pt,
          paddingBottom: pt,
          paddingLeft: pt,
          margin: pt,
          marginTop: pt,
          marginRight: pt,
          marginBottom: pt,
          marginLeft: pt,
          rotate: ct,
          rotateX: ct,
          rotateY: ct,
          rotateZ: ct,
          scale: nt,
          scaleX: nt,
          scaleY: nt,
          scaleZ: nt,
          skew: ct,
          skewX: ct,
          skewY: ct,
          distance: pt,
          translateX: pt,
          translateY: pt,
          translateZ: pt,
          x: pt,
          y: pt,
          z: pt,
          perspective: pt,
          transformPerspective: pt,
          opacity: et,
          originX: ht,
          originY: ht,
          originZ: pt,
          zIndex: Oe,
          fillOpacity: et,
          strokeOpacity: et,
          numOctaves: Oe,
        },
        je = (0, r.pi)((0, r.pi)({}, De), {
          color: Tt,
          backgroundColor: Tt,
          outlineColor: Tt,
          fill: Tt,
          stroke: Tt,
          borderColor: Tt,
          borderTopColor: Tt,
          borderRightColor: Tt,
          borderBottomColor: Tt,
          borderLeftColor: Tt,
          filter: Le,
          WebkitFilter: Le,
        }),
        Fe = function (t) {
          return je[t];
        };
      function Be(t, e) {
        var n,
          r = Fe(t);
        return (
          r !== Le && (r = Mt),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var Ue = !1,
        Ie = function (t) {
          return we(t) ? t[t.length - 1] || 0 : t;
        };
      function Ne(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          u = (0, r.pi)({}, s);
        return (
          n && (u.offset = n),
          s.duration && (u.duration = pe(s.duration)),
          s.repeatDelay && (u.repeatDelay = pe(s.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(Pe)
              : Pe(e)),
          "tween" === s.type && (u.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (u.repeatType = "reverse")
              : a
              ? (u.repeatType = "loop")
              : o && (u.repeatType = "mirror"),
            (u.repeat = a || i || o || s.repeat)),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        );
      }
      function ze(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = we(e) ? Ce : Ve[t] || Ve.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), Ne(t))
        );
      }
      function He(t, e, n, i, o) {
        var a,
          s = Xe(i, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = Ee(t, n);
        "none" === u && l && "string" === typeof n
          ? (u = Be(t, n))
          : Ye(u) && "string" === typeof n
          ? (u = We(n))
          : !Array.isArray(n) && Ye(n) && "string" === typeof u && (n = We(u));
        var c = Ee(t, u);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(u, '" to "')
            .concat(n, '". ')
            .concat(
              u,
              " is not an animatable value - to enable this animation set "
            )
            .concat(u, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          c && l && !1 !== s.type
            ? function () {
                var i = {
                  from: u,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === s.type || "decay" === s.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: i = 0.8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: p,
                      onStop: f,
                    }) {
                      let v;
                      function h(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function m(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function y(t) {
                        null === v || void 0 === v || v.stop(),
                          (v = de(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: p,
                              onStop: f,
                            })
                          ));
                      }
                      function g(t) {
                        y(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        );
                      }
                      if (h(t)) g({ from: t, velocity: e, to: m(t) });
                      else {
                        let r = i * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = m(r),
                          s = a === n ? -1 : 1;
                        let c, d;
                        const p = (t) => {
                          (c = d),
                            (d = t),
                            (e = M(t - c, (0, R.$B)().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              g({ from: t, to: a, velocity: e });
                        };
                        y({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: o,
                          power: i,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: h(r) ? p : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === v || void 0 === v ? void 0 : v.stop(),
                      };
                    })((0, r.pi)((0, r.pi)({}, i), s))
                  : de(
                      (0, r.pi)((0, r.pi)({}, ze(s, i, t)), {
                        onUpdate: function (t) {
                          var e;
                          i.onUpdate(t),
                            null === (e = s.onUpdate) ||
                              void 0 === e ||
                              e.call(s, t);
                        },
                        onComplete: function () {
                          var t;
                          i.onComplete(),
                            null === (t = s.onComplete) ||
                              void 0 === t ||
                              t.call(s);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = Ie(n);
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === s || void 0 === s ? void 0 : s.onUpdate) ||
                    void 0 === t ||
                    t.call(s, i),
                  null ===
                    (r = null === s || void 0 === s ? void 0 : s.onComplete) ||
                    void 0 === r ||
                    r.call(s),
                  { stop: function () {} }
                );
              }
        );
      }
      function Ye(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function We(t) {
        return "number" === typeof t ? 0 : Be("", t);
      }
      function Xe(t, e) {
        return t[e] || t.default || t;
      }
      function Ze(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          Ue && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              s = He(t, e, n, r, i),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Xe(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (o = window.setTimeout(l, pe(u))) : l(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var _e = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        qe = _e.length,
        Ge = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        $e = function (t) {
          return "number" === typeof t || pt.test(t);
        };
      function Ke(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var Je = tn(0, 0.5, Jt),
        Qe = tn(0.5, 0.95, Zt);
      function tn(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(_(t, e, r));
        };
      }
      function en(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nn(t, e) {
        en(t.x, e.x), en(t.y, e.y);
      }
      function rn(t) {
        return void 0 === t || 1 === t;
      }
      function on(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !rn(e) || !rn(n) || !rn(r);
      }
      function an(t) {
        return (
          on(t) ||
          sn(t.x) ||
          sn(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function sn(t) {
        return t && "0%" !== t;
      }
      function un(t, e, n) {
        return n + e * (t - n);
      }
      function ln(t, e, n, r, i) {
        return void 0 !== i && (t = un(t, i, r)), un(t, n, r) + e;
      }
      function cn(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = ln(t.min, e, n, r, i)),
          (t.max = ln(t.max, e, n, r, i));
      }
      function dn(t, e) {
        var n = e.x,
          r = e.y;
        cn(t.x, n.translate, n.scale, n.originPoint),
          cn(t.y, r.translate, r.scale, r.originPoint);
      }
      function pn(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function fn(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = k(t.min, t.max, u);
        cn(t, e[o], e[a], l, e.scale);
      }
      var vn = ["x", "scaleX", "originX"],
        hn = ["y", "scaleY", "originY"];
      function mn(t, e) {
        fn(t.x, e, vn), fn(t.y, e, hn);
      }
      const yn = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        gn = (t) => yn(t) && t.hasOwnProperty("z"),
        xn = (t, e) => Math.abs(t - e);
      function bn(t, e) {
        if (Lt(t) && Lt(e)) return xn(t, e);
        if (yn(t) && yn(e)) {
          const n = xn(t.x, e.x),
            r = xn(t.y, e.y),
            i = gn(t) && gn(e) ? xn(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function Pn(t) {
        return t.max - t.min;
      }
      function En(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), bn(t, e) < n
        );
      }
      function wn(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = k(e.min, e.max, t.origin)),
          (t.scale = Pn(n) / Pn(e)),
          (En(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = k(n.min, n.max, t.origin) - t.originPoint),
          (En(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function Tn(t, e, n, r) {
        wn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          wn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Sn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Pn(e));
      }
      function An(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + Pn(e));
      }
      function Cn(t, e, n) {
        An(t.x, e.x, n.x), An(t.y, e.y, n.y);
      }
      function Vn(t, e, n, r, i) {
        return (
          (t = un((t -= e), 1 / n, r)), void 0 !== i && (t = un(t, 1 / i, r)), t
        );
      }
      function Rn(t, e, n, i, o) {
        var a = (0, r.CR)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            dt.test(e) &&
              ((e = parseFloat(e)), (e = k(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = k(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = Vn(t.min, e, n, s, i)),
              (t.max = Vn(t.max, e, n, s, i));
          }
        })(t, e[s], e[u], e[l], e.scale, i, o);
      }
      var kn = ["x", "scaleX", "originX"],
        Mn = ["y", "scaleY", "originY"];
      function Ln(t, e, n, r) {
        Rn(
          t.x,
          e,
          kn,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Rn(
            t.y,
            e,
            Mn,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function On(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Dn(t) {
        return On(t.x) && On(t.y);
      }
      function jn(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var Fn = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              L(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                (O(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  e = i;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        Bn = {};
      function Un(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : o;
      }
      function In(t) {
        return [t("x"), t("y")];
      }
      var Nn = ["", "X", "Y", "Z"],
        zn = ["transformPerspective", "x", "y", "z"];
      function Hn(t, e) {
        return zn.indexOf(t) - zn.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return Nn.forEach(function (e) {
          return zn.push(t + e);
        });
      });
      var Yn = new Set(zn);
      function Wn(t) {
        return Yn.has(t);
      }
      var Xn = new Set(["originX", "originY", "originZ"]);
      function Zn(t) {
        return Xn.has(t);
      }
      var _n = function (t, e) {
          return t.depth - e.depth;
        },
        qn = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              L(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              O(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(_n),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function Gn(t) {
        var e,
          n = B(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      var $n = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Kn(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          i = t.measureScroll,
          o = t.resetTransform;
        return (function () {
          function t(t, e, i) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === i && (i = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(ir), o.nodes.forEach(or);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i
                ? (0, r.ev)((0, r.ev)([], (0, r.CR)(i.path), !1), [i], !1)
                : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qn());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) || this.eventHandlers.set(t, new D()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = this.eventHandlers.get(t);
              null === i ||
                void 0 === i ||
                i.notify.apply(i, (0, r.ev)([], (0, r.CR)(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var i,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (i = this.parent) ||
                    void 0 === i ||
                    i.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      $n.hasAnimatedSinceResize &&
                        (($n.hasAnimatedSinceResize = !1), o.nodes.forEach(rr));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        p = t.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var f =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : dr,
                        v = l.getProps(),
                        h = v.onLayoutAnimationStart,
                        m = v.onLayoutAnimationComplete,
                        y = !o.targetLayout || !jn(o.targetLayout, p) || d,
                        g = !c && d;
                      if (
                        (null === (i = o.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        g ||
                        (c && (y || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(u, g);
                        var x = (0, r.pi)((0, r.pi)({}, Xe(f, "layout")), {
                          onPlay: h,
                          onComplete: m,
                        });
                        l.shouldReduceMotion && ((x.delay = 0), (x.type = !1)),
                          o.startAnimation(x);
                      } else c || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a));
                      o.targetLayout = p;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                R.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(ar));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(er)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(pr),
                  this.potentialNodes.clear()),
                this.nodes.forEach(nr),
                this.nodes.forEach(Jn),
                this.nodes.forEach(Qn),
                this.clearAllSnapshots(),
                R.iW.update(),
                R.iW.preRender(),
                R.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(tr), this.sharedNodes.forEach(sr);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              R.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              R.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                vr(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                vr(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = i(this.instance));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (o) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Dn(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || an(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (pn(e.x, n.x), pn(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              nn(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options;
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (pn(e.x, i.x), pn(e.y, i.y));
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              nn(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  mn(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  an(i.latestValues) && mn(n, i.latestValues);
              }
              return an(this.latestValues) && mn(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              nn(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && an(i.latestValues)) {
                  on(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  nn(o, i.measure()),
                    Ln(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return an(this.latestValues) && Ln(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Cn(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    nn(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Sn(e.x, n.x, r.x),
                      Sn(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : nn(this.target, this.layout.actual),
                      dn(this.target, this.targetDelta))
                    : nn(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Cn(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      nn(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !an(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                nn(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              mn(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              dn(t, u)),
                            r && an(s.latestValues) && mn(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  Tn(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = Un(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                i = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                s = (0, r.pi)({}, this.latestValues),
                u = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === o || void 0 === o ? void 0 : o.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                p = Boolean(
                  c &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(cr)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    r,
                    o,
                    f,
                    v,
                    h = e / 1e3;
                  ur(u.x, t.x, h),
                    ur(u.y, t.y, h),
                    i.setTargetDelta(u),
                    i.relativeTarget &&
                      i.relativeTargetOrigin &&
                      i.layout &&
                      (null === (n = i.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Cn(l, i.layout.actual, i.relativeParent.layout.actual),
                      (r = i.relativeTarget),
                      (o = i.relativeTargetOrigin),
                      (f = l),
                      (v = h),
                      lr(r.x, o.x, f.x, v),
                      lr(r.y, o.y, f.y, v)),
                    c &&
                      ((i.animationValues = s),
                      (function (t, e, n, r, i, o) {
                        var a, s, u, l;
                        i
                          ? ((t.opacity = k(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              Je(r)
                            )),
                            (t.opacityExit = k(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              Qe(r)
                            )))
                          : o &&
                            (t.opacity = k(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ));
                        for (var c = 0; c < qe; c++) {
                          var d = "border".concat(_e[c], "Radius"),
                            p = Ke(e, d),
                            f = Ke(n, d);
                          (void 0 === p && void 0 === f) ||
                            (p || (p = 0),
                            f || (f = 0),
                            0 === p || 0 === f || $e(p) === $e(f)
                              ? ((t[d] = Math.max(k(Ge(p), Ge(f), r), 0)),
                                (dt.test(f) || dt.test(p)) && (t[d] += "%"))
                              : (t[d] = f));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = k(e.rotate || 0, n.rotate || 0, r));
                      })(s, a, i.latestValues, h, p, d)),
                    i.root.scheduleUpdateProjection(),
                    i.scheduleRender(),
                    (i.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (R.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = R.ZP.update(function () {
                  ($n.hasAnimatedSinceResize = !0),
                    (i.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = B(t) ? t : F(t);
                      return (
                        Ze("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      (0, r.pi)((0, r.pi)({}, t), {
                        onUpdate: function (e) {
                          var n;
                          i.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            i.completeAnimation();
                        },
                      })
                    )),
                    i.resumingFrom &&
                      (i.resumingFrom.currentAnimation = i.currentAnimation),
                    (i.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (nn(e, n),
                mn(e, i),
                Tn(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Fn()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < Nn.length; r++) {
                  var i = "rotate" + Nn[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Gn(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = Gn(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !an(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Un(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var p = this.projectionDelta,
                f = p.x,
                v = p.y;
              for (var h in ((s.transformOrigin = ""
                .concat(100 * f.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Bn))
                if (void 0 !== d[h]) {
                  var m = Bn[h],
                    y = m.correct,
                    g = m.applyTo,
                    x = y(d[h], l);
                  if (g) for (var b = g.length, P = 0; P < b; P++) s[g[P]] = x;
                  else s[h] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? Gn(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(er),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function Jn(t) {
        t.updateLayout();
      }
      function Qn(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? In(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Pn(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              In(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Pn(s[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Tn(l, s, o.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? Tn(c, t.applyTransform(u, !0), o.measured)
            : Tn(c, s, o.layout);
          var d = !Dn(l),
            p = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var f = t.relativeParent,
              v = f.snapshot,
              h = f.layout;
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Cn(m, o.layout, v.layout);
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Cn(y, s, h.actual), jn(m, y) || (p = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function tr(t) {
        t.clearSnapshot();
      }
      function er(t) {
        t.clearMeasurements();
      }
      function nr(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function rr(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function ir(t) {
        t.resolveTargetDelta();
      }
      function or(t) {
        t.calcProjection();
      }
      function ar(t) {
        t.resetRotation();
      }
      function sr(t) {
        t.removeLeadSnapshot();
      }
      function ur(t, e, n) {
        (t.translate = k(e.translate, 0, n)),
          (t.scale = k(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function lr(t, e, n, r) {
        (t.min = k(e.min, n.min, r)), (t.max = k(e.max, n.max, r));
      }
      function cr(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var dr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function pr(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function fr(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function vr(t) {
        fr(t.x), fr(t.y);
      }
      var hr = 1;
      var mr = n(2595),
        yr = (0, i.createContext)({});
      var gr = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, r.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(i.default.Component);
      function xr(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.projectionNodeConstructor,
          p = t.useRender,
          f = t.useVisualState,
          v = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (a.projectionNodeConstructor = t[e])
                    : (a[e].Component = t[e]));
            })(e),
          (0, i.forwardRef)(function (t, e) {
            var h = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, i.useContext)(mr.p)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = (0, r.pi)((0, r.pi)({}, t), { layoutId: h });
            var m = (0, i.useContext)(c),
              x = null,
              b = S(t),
              P = m.isStatic
                ? void 0
                : (0, V.h)(function () {
                    if ($n.hasEverUpdated) return hr++;
                  }),
              E = f(t, m.isStatic);
            return (
              !m.isStatic &&
                C.j &&
                ((b.visualElement = y(v, E, (0, r.pi)((0, r.pi)({}, m), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, i.useContext)(yr);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && g(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(P, t, b.visualElement, o || a.projectionNodeConstructor),
                (x = (function (t, e, n) {
                  var o = [];
                  if (((0, i.useContext)(s), !e)) return null;
                  for (var c = 0; c < l; c++) {
                    var d = u[c],
                      p = a[d],
                      f = p.isEnabled,
                      v = p.Component;
                    f(t) &&
                      v &&
                      o.push(
                        i.createElement(
                          v,
                          (0, r.pi)({ key: d }, t, { visualElement: e })
                        )
                      );
                  }
                  return o;
                })(t, b.visualElement))),
              i.createElement(
                gr,
                {
                  visualElement: b.visualElement,
                  props: (0, r.pi)((0, r.pi)({}, m), t),
                },
                x,
                i.createElement(
                  d.Provider,
                  { value: b },
                  p(
                    v,
                    t,
                    P,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : g(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(E, b.visualElement, e),
                    E,
                    m.isStatic,
                    b.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function br(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), xr(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var Pr = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Er(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(Pr.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      function wr(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          Wn(t) ||
          Zn(t) ||
          ((n || void 0 !== r) && (!!Bn[t] || "opacity" === t))
        );
      }
      var Tr = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function Sr(t) {
        return t.startsWith("--");
      }
      var Ar = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function Cr(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          p = !0;
        for (var f in e) {
          var v = e[f];
          if (Sr(f)) a[f] = v;
          else {
            var h = De[f],
              m = Ar(v, h);
            if (Wn(f)) {
              if (((c = !0), (s[f] = m), u.push(f), !p)) continue;
              v !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (p = !1);
            } else Zn(f) ? ((l[f] = m), (d = !0)) : (o[f] = m);
          }
        }
        c
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              o.sort(Hn);
              for (var d = !1, p = o.length, f = 0; f < p; f++) {
                var v = o[f];
                (c += "".concat(Tr[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0);
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : l && n && (c = "none"),
                c
              );
            })(t, n, p, r))
          : r
          ? (o.transform = r({}, ""))
          : !e.transform && o.transform && (o.transform = "none"),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(l));
      }
      var Vr = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Rr(t, e, n) {
        for (var r in e) B(e[r]) || wr(r, n) || (t[r] = e[r]);
      }
      function kr(t, e, n) {
        var o = {};
        return (
          Rr(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Cr(t, e, { enableHardwareAcceleration: !n }, o);
                  var i = t.vars,
                    a = t.style;
                  return (0, r.pi)((0, r.pi)({}, i), a);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function Mr(t, e, n) {
        var r = {},
          i = kr(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var Lr = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Or(t) {
        return Lr.has(t);
      }
      var Dr,
        jr = function (t) {
          return !Or(t);
        };
      try {
        (Dr = n(6157).Z) &&
          (jr = function (t) {
            return t.startsWith("on") ? !Or(t) : Dr(t);
          });
      } catch (oa) {}
      function Fr(t, e, n) {
        return "string" === typeof t ? t : pt.transform(e + n * t);
      }
      var Br = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Ur = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Ir(t, e, n, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          d = void 0 === c ? 1 : c,
          p = e.pathOffset,
          f = void 0 === p ? 0 : p;
        Cr(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          i
        ),
          (t.attrs = t.style),
          (t.style = {});
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform),
          m &&
            (void 0 !== s || void 0 !== u || h.transform) &&
            (h.transformOrigin = (function (t, e, n) {
              var r = Fr(e, t.x, t.width),
                i = Fr(n, t.y, t.height);
              return "".concat(r, " ").concat(i);
            })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== o && (v.x = o),
          void 0 !== a && (v.y = a),
          void 0 !== l &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1);
              var o = i ? Br : Ur;
              t[o.offset] = pt.transform(-r);
              var a = pt.transform(e),
                s = pt.transform(n);
              t[o.array] = "".concat(a, " ").concat(s);
            })(v, l, d, f, !1);
      }
      var Nr = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function zr(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = Nr();
            return (
              Ir(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          Rr(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style));
        }
        return n;
      }
      function Hr(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, a, s, u) {
          var l = s.latestValues,
            c = (Er(e) ? zr : Mr)(n, l, u),
            d = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (jr(i) ||
                  (!0 === n && Or(i)) ||
                  (!e && !Or(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            p = (0, r.pi)((0, r.pi)((0, r.pi)({}, d), c), { ref: a });
          return o && (p["data-projection-id"] = o), (0, i.createElement)(e, p);
        };
      }
      var Yr = /([a-z])([A-Z])/g,
        Wr = function (t) {
          return t.replace(Yr, "$1-$2").toLowerCase();
        };
      function Xr(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var Zr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function _r(t, e) {
        for (var n in (Xr(t, e), e.attrs))
          t.setAttribute(Zr.has(n) ? n : Wr(n), e.attrs[n]);
      }
      function qr(t) {
        var e = t.style,
          n = {};
        for (var r in e) (B(e[r]) || wr(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Gr(t) {
        var e = qr(t);
        for (var n in t) {
          if (B(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function $r(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function Kr(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: Qr(e, n, r, i), renderState: o() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var Jr = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(d),
            o = (0, i.useContext)(p.O);
          return n
            ? Kr(t, e, r, o)
            : (0, V.h)(function () {
                return Kr(t, e, r, o);
              });
        };
      };
      function Qr(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = i(t);
        for (var u in s) o[u] = Gn(s[u]);
        var l = t.initial,
          c = t.animate,
          d = w(t),
          p = T(t);
        e &&
          p &&
          !d &&
          !1 !== t.inherit &&
          ((null !== l && void 0 !== l) || (l = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate));
        var f = a || !1 === l,
          v = f ? c : l;
        v &&
          "boolean" !== typeof v &&
          !$r(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = P(t, e);
            if (n) {
              var i = n.transitionEnd;
              n.transition;
              var a = (0, r._T)(n, ["transitionEnd", "transition"]);
              for (var s in a) {
                var u = a[s];
                if (Array.isArray(u)) u = u[f ? u.length - 1 : 0];
                null !== u && (o[s] = u);
              }
              for (var s in i) o[s] = i[s];
            }
          });
        return o;
      }
      var ti,
        ei = {
          useVisualState: Jr({
            scrapeMotionValuesFromProps: Gr,
            createRenderState: Nr,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Ir(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                _r(e, r);
            },
          }),
        },
        ni = {
          useVisualState: Jr({
            scrapeMotionValuesFromProps: qr,
            createRenderState: Vr,
          }),
        };
      function ri(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function ii(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return ri(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function oi(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ai(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(ti || (ti = {}));
      var si = { pageX: 0, pageY: 0 };
      function ui(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || si;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function li(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ci(t, e) {
        return (
          void 0 === e && (e = "page"), { point: ai(t) ? ui(t, e) : li(t, e) }
        );
      }
      var di = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ci(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        pi = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        fi = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function vi(t) {
        return C.j && null === window.onpointerdown
          ? t
          : C.j && null === window.ontouchstart
          ? fi[t]
          : C.j && null === window.onmousedown
          ? pi[t]
          : t;
      }
      function hi(t, e, n, r) {
        return ri(t, vi(e), di(n, "pointerdown" === e), r);
      }
      function mi(t, e, n, r) {
        return ii(t, vi(e), n && di(n, "pointerdown" === e), r);
      }
      function yi(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var gi = yi("dragHorizontal"),
        xi = yi("dragVertical");
      function bi(t) {
        var e = !1;
        if ("y" === t) e = xi();
        else if ("x" === t) e = gi();
        else {
          var n = gi(),
            r = xi();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function Pi() {
        var t = bi(!0);
        return !t || (t(), !1);
      }
      function Ei(t, e, n) {
        return function (r, i) {
          var o;
          oi(r) &&
            !Pi() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(ti.Hover, e),
            null === n || void 0 === n || n(r, i));
        };
      }
      var wi = function (t, e) {
          return !!e && (t === e || wi(t, e.parentElement));
        },
        Ti = n(3114);
      var Si = new WeakMap(),
        Ai = new WeakMap(),
        Ci = function (t) {
          var e;
          null === (e = Si.get(t.target)) || void 0 === e || e(t);
        },
        Vi = function (t) {
          t.forEach(Ci);
        };
      function Ri(t, e, n) {
        var i = (function (t) {
          var e = t.root,
            n = (0, r._T)(t, ["root"]),
            i = e || document;
          Ai.has(i) || Ai.set(i, {});
          var o = Ai.get(i),
            a = JSON.stringify(n);
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(Vi, (0, r.pi)({ root: e }, n))),
            o[a]
          );
        })(e);
        return (
          Si.set(t, n),
          i.observe(t),
          function () {
            Si.delete(t), i.unobserve(t);
          }
        );
      }
      var ki = { some: 0, all: 1 };
      function Mi(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once;
        (0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : ki[u],
              };
              return Ri(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !l || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(ti.InView, i);
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, a, u]
        );
      }
      function Li(t, e, n, r) {
        var o = r.fallback,
          a = void 0 === o || o;
        (0, i.useEffect)(
          function () {
            t &&
              a &&
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(ti.InView, !0);
              });
          },
          [t]
        );
      }
      var Oi = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Di = {
          inView: Oi(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? Li : Mi)(
                l,
                u.current,
                e,
                s
              );
          }),
          tap: Oi(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null);
            function c() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function d() {
              var t;
              return (
                c(),
                (u.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(ti.Tap, !1),
                !Pi()
              );
            }
            function p(t, n) {
              d() &&
                (wi(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function f(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            mi(
              a,
              "pointerdown",
              s
                ? function (t, e) {
                    var r;
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (l.current = Dt(
                          hi(window, "pointerup", p),
                          hi(window, "pointercancel", f)
                        )),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(ti.Tap, !0),
                        null === n || void 0 === n || n(t, e));
                  }
                : void 0
            ),
              (0, Ti.z)(c);
          }),
          focus: Oi(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ii(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(ti.Focus, !0);
                  }
                : void 0
            ),
              ii(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(ti.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Oi(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            mi(i, "pointerenter", e || r ? Ei(i, !0, e) : void 0),
              mi(i, "pointerleave", n || r ? Ei(i, !1, n) : void 0);
          }),
        },
        ji = n(5035);
      function Fi() {
        var t = (0, i.useContext)(p.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = (0, ji.M)();
        (0, i.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      function Bi(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var Ui = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        Ii = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Ni = [
          tt,
          pt,
          dt,
          ct,
          vt,
          ft,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        zi = function (t) {
          return Ni.find(Ii(t));
        },
        Hi = (0, r.ev)((0, r.ev)([], (0, r.CR)(Ni), !1), [Tt, Mt], !1),
        Yi = function (t) {
          return Hi.find(Ii(t));
        };
      function Wi(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, F(n));
      }
      function Xi(t, e) {
        var n = E(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o;
        i.transition;
        var s = (0, r._T)(i, ["transitionEnd", "transition"]);
        for (var u in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          Wi(t, u, Ie(s[u]));
        }
      }
      function Zi(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function _i(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = E(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = o
            ? function () {
                return qi(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  l = s.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    u = (t.variantChildren.size - 1) * i,
                    l =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Gi)
                      .forEach(function (t, i) {
                        s.push(
                          _i(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + l(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, a + i, u, l, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = s.when;
        if (c) {
          var d = (0, r.CR)("beforeChildren" === c ? [u, l] : [l, u], 2),
            p = d[0],
            f = d[1];
          return p().then(f);
        }
        return Promise.all([u(), l(n.delay)]);
      }
      function qi(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(e),
          d = c.transition,
          p = void 0 === d ? t.getDefaultTransition() : d,
          f = c.transitionEnd,
          v = (0, r._T)(c, ["transition", "transitionEnd"]);
        u && (p = u);
        var h = [],
          m =
            l &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[l]);
        for (var y in v) {
          var g = t.getValue(y),
            x = v[y];
          if (!(!g || void 0 === x || (m && $i(m, y)))) {
            var b = (0, r.pi)({ delay: s }, p);
            t.shouldReduceMotion &&
              Wn(y) &&
              (b = (0, r.pi)((0, r.pi)({}, b), { type: !1, delay: 0 }));
            var P = Ze(y, g, x, b);
            h.push(P);
          }
        }
        return Promise.all(h).then(function () {
          f && Xi(t, f);
        });
      }
      function Gi(t, e) {
        return t.sortNodePosition(e);
      }
      function $i(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var Ki = [
          ti.Animate,
          ti.InView,
          ti.Focus,
          ti.Hover,
          ti.Tap,
          ti.Drag,
          ti.Exit,
        ],
        Ji = (0, r.ev)([], (0, r.CR)(Ki), !1).reverse(),
        Qi = Ki.length;
      function to(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return _i(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = _i(t, e, n);
                else {
                  var o = "function" === typeof e ? E(t, e, n.custom) : e;
                  r = qi(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function eo(t) {
        var e = to(t),
          n = (function () {
            var t;
            return (
              ((t = {})[ti.Animate] = no(!0)),
              (t[ti.InView] = no()),
              (t[ti.Hover] = no()),
              (t[ti.Tap] = no()),
              (t[ti.Drag] = no()),
              (t[ti.Focus] = no()),
              (t[ti.Exit] = no()),
              t
            );
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = E(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"]);
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o);
            }
            return e;
          };
        function s(s, u) {
          for (
            var l,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              p = [],
              f = new Set(),
              v = {},
              h = 1 / 0,
              m = function (e) {
                var i = Ji[e],
                  m = n[i],
                  y = null !== (l = c[i]) && void 0 !== l ? l : d[i],
                  g = b(y),
                  P = i === u ? m.isActive : null;
                !1 === P && (h = e);
                var E = y === d[i] && y !== c[i] && g;
                if (
                  (E && o && t.manuallyAnimateOnMount && (E = !1),
                  (m.protectedKeys = (0, r.pi)({}, v)),
                  (!m.isActive && null === P) ||
                    (!y && !m.prevProp) ||
                    $r(y) ||
                    "boolean" === typeof y)
                )
                  return "continue";
                var w = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (x(e)) return !Bi(e, t);
                    return !1;
                  })(m.prevProp, y),
                  T = w || (i === u && m.isActive && !E && g) || (e > h && g),
                  S = Array.isArray(y) ? y : [y],
                  A = S.reduce(a, {});
                !1 === P && (A = {});
                var C = m.prevResolvedValues,
                  V = void 0 === C ? {} : C,
                  R = (0, r.pi)((0, r.pi)({}, V), A),
                  k = function (t) {
                    (T = !0), f.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var M in R) {
                  var L = A[M],
                    O = V[M];
                  v.hasOwnProperty(M) ||
                    (L !== O
                      ? we(L) && we(O)
                        ? !Bi(L, O) || w
                          ? k(M)
                          : (m.protectedKeys[M] = !0)
                        : void 0 !== L
                        ? k(M)
                        : f.add(M)
                      : void 0 !== L && f.has(M)
                      ? k(M)
                      : (m.protectedKeys[M] = !0));
                }
                (m.prevProp = y),
                  (m.prevResolvedValues = A),
                  m.isActive && (v = (0, r.pi)((0, r.pi)({}, v), A)),
                  o && t.blockInitialAnimation && (T = !1),
                  T &&
                    !E &&
                    p.push.apply(
                      p,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          S.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, s),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              y = 0;
            y < Qi;
            y++
          )
            m(y);
          if (((i = (0, r.pi)({}, v)), f.size)) {
            var g = {};
            f.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (g[e] = n);
            }),
              p.push({ animation: g });
          }
          var P = Boolean(p.length);
          return (
            o && !1 === c.initial && !t.manuallyAnimateOnMount && (P = !1),
            (o = !1),
            P ? e(p) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t];
          },
          animateChanges: s,
          setActive: function (e, r, i) {
            var o;
            if (n[e].isActive === r) return Promise.resolve();
            null === (o = t.variantChildren) ||
              void 0 === o ||
              o.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var a = s(i, e);
            for (var u in n) n[u].protectedKeys = {};
            return a;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function no(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var ro = {
          animation: Oi(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = eo(e)),
              $r(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Oi(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, r.CR)(Fi(), 2),
              a = o[0],
              s = o[1],
              u = (0, i.useContext)(p.O);
            (0, i.useEffect)(
              function () {
                var t, r;
                n.isPresent = a;
                var i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(ti.Exit, !a, {
                        custom:
                          null !==
                            (r =
                              null === u || void 0 === u ? void 0 : u.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !a && (null === i || void 0 === i || i.then(s));
              },
              [a]
            );
          }),
        },
        io = (function () {
          function t(t, e, n) {
            var i = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = so(i.lastMoveEventInfo, i.history),
                    e = null !== i.startEvent,
                    n = bn(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var o = t.point,
                      a = (0, R.$B)().timestamp;
                    i.history.push(
                      (0, r.pi)((0, r.pi)({}, o), { timestamp: a })
                    );
                    var s = i.handlers,
                      u = s.onStart,
                      l = s.onMove;
                    e ||
                      (u && u(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      l && l(i.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (i.lastMoveEvent = t),
                  (i.lastMoveEventInfo = oo(e, i.transformPagePoint)),
                  oi(t) && 0 === t.buttons
                    ? i.handlePointerUp(t, e)
                    : R.ZP.update(i.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                i.end();
                var n = i.handlers,
                  r = n.onEnd,
                  o = n.onSessionEnd,
                  a = so(oo(e, i.transformPagePoint), i.history);
                i.startEvent && r && r(t, a), o && o(t, a);
              }),
              !(ai(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = o);
              var a = oo(ci(t), this.transformPagePoint),
                s = a.point,
                u = (0, R.$B)().timestamp;
              this.history = [(0, r.pi)((0, r.pi)({}, s), { timestamp: u })];
              var l = e.onSessionStart;
              l && l(t, so(a, this.history)),
                (this.removeListeners = Dt(
                  hi(window, "pointermove", this.handlePointerMove),
                  hi(window, "pointerup", this.handlePointerUp),
                  hi(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                R.qY.update(this.updatePoint);
            }),
            t
          );
        })();
      function oo(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ao(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function so(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: ao(n, lo(e)),
          offset: ao(n, uo(e)),
          velocity: co(e, 0.1),
        };
      }
      function uo(t) {
        return t[0];
      }
      function lo(t) {
        return t[t.length - 1];
      }
      function co(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = lo(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > pe(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function po(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function fo(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: i, max: o }
        );
      }
      var vo = 0.35;
      function ho(t, e, n) {
        return { min: mo(t, e), max: mo(t, n) };
      }
      function mo(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function yo(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function go(t, e) {
        return yo(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var xo = new WeakMap(),
        bo = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new io(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(ci(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = bi(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        In(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (dt.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) i = Pn(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[t] = i;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(ti.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u = e.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(ti.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && Po(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? k(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? k(i, t, n.max) : Math.min(t, i)),
                      t
                    );
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && g(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: po(t.x, r, o), y: po(t.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = vo),
                    !1 === t ? (t = 0) : !0 === t && (t = vo),
                    { x: ho(t, "left", "right"), y: ho(t, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  In(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !g(e)) return !1;
              var r = e.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (t, e, n) {
                  var r = go(t, n),
                    i = e.scroll;
                  return i && (pn(r.x, i.x), pn(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: fo(t.x, e.x), y: fo(t.y, e.y) };
                })(i.layout.actual, o);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = yo(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = In(function (n) {
                  var l;
                  if (Po(n, i, e.currentDirection)) {
                    var d =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    u && (d = { min: 0, max: 0 });
                    var p = a ? 200 : 1e6,
                      f = a ? 40 : 1e7,
                      v = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: p,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, v);
                  }
                });
              return Promise.all(d).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Ze(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              In(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              In(function (n) {
                if (Po(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - k(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (g(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                In(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = Pn(t),
                        i = Pn(e);
                      return (
                        i > r
                          ? (n = _(e.min, e.max - r, t.min))
                          : r > i && (n = _(t.min, t.max - i, e.min)),
                        U(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  In(function (t) {
                    if (Po(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(k(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              xo.set(this.visualElement, this);
              var n = hi(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  g(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = ri(window, "resize", function () {
                e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (In(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? vo : c,
                p = t.dragMomentum,
                f = void 0 === p || p;
              return (0, r.pi)((0, r.pi)({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: f,
              });
            }),
            t
          );
        })();
      function Po(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Eo = {
          pan: Oi(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(c).transformPagePoint,
              d = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                },
              };
            (0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(d);
            }),
              mi(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new io(t, d, { transformPagePoint: l });
                  }
              ),
              (0, Ti.z)(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Oi(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, V.h)(function () {
                return new bo(n);
              });
            (0, i.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        wo = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var To = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            i = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            p = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var f = t.parent,
              v = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              y = t.visualState,
              g = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var x,
              P,
              E = !1,
              S = y.latestValues,
              A = y.renderState,
              C = (function () {
                var t = wo.map(function () {
                    return new D();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      wo.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + wo[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + wo[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        return t.notify.apply(
                          t,
                          (0, r.ev)([], (0, r.CR)(e), !1)
                        );
                      });
                  }),
                  n
                );
              })(),
              V = new Map(),
              k = new Map(),
              M = {},
              L = (0, r.pi)({}, S);
            function O() {
              x && E && (j(), u(x, A, v.style, X.projection));
            }
            function j() {
              i(X, A, S, e, v);
            }
            function U() {
              C.notifyUpdate(S);
            }
            function I(t, e) {
              var n = e.onChange(function (e) {
                  (S[t] = e), v.onUpdate && R.ZP.update(U, !1, !0);
                }),
                r = e.onRenderRequest(X.scheduleRender);
              k.set(t, function () {
                n(), r();
              });
            }
            var N = p(v);
            for (var z in N) {
              var H = N[z];
              void 0 !== S[z] && B(H) && H.set(S[z], !1);
            }
            var Y = w(v),
              W = T(v),
              X = (0, r.pi)(
                (0, r.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: f ? f.depth + 1 : 0,
                    parent: f,
                    children: new Set(),
                    presenceId: h,
                    shouldReduceMotion: g,
                    variantChildren: W ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === f || void 0 === f ? void 0 : f.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(x);
                    },
                    mount: function (t) {
                      (E = !0),
                        (x = X.current = t),
                        X.projection && X.projection.mount(t),
                        W &&
                          f &&
                          !Y &&
                          (P =
                            null === f || void 0 === f
                              ? void 0
                              : f.addVariantChild(X)),
                        V.forEach(function (t, e) {
                          return I(e, t);
                        }),
                        null === f || void 0 === f || f.children.add(X),
                        X.setProps(v);
                    },
                    unmount: function () {
                      var t;
                      null === (t = X.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        R.qY.update(U),
                        R.qY.render(O),
                        k.forEach(function (t) {
                          return t();
                        }),
                        null === P || void 0 === P || P(),
                        null === f || void 0 === f || f.children.delete(X),
                        C.clearAllListeners(),
                        (x = void 0),
                        (E = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = X.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(X.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return W
                        ? X
                        : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return v.layoutId;
                    },
                    getInstance: function () {
                      return x;
                    },
                    getStaticValue: function (t) {
                      return S[t];
                    },
                    setStaticValue: function (t, e) {
                      return (S[t] = e);
                    },
                    getLatestValues: function () {
                      return S;
                    },
                    setVisibility: function (t) {
                      X.isVisible !== t &&
                        ((X.isVisible = t), X.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(X, t, v, e);
                    },
                    measureViewportBox: function () {
                      return s(x, v);
                    },
                    addValue: function (t, e) {
                      X.hasValue(t) && X.removeValue(t),
                        V.set(t, e),
                        (S[t] = e.get()),
                        I(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      V.delete(t),
                        null === (e = k.get(t)) || void 0 === e || e(),
                        k.delete(t),
                        delete S[t],
                        c(t, A);
                    },
                    hasValue: function (t) {
                      return V.has(t);
                    },
                    getValue: function (t, e) {
                      var n = V.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = F(e)), X.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return V.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = S[t]) && void 0 !== n
                        ? n
                        : l(x, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      L[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(v, t);
                        if (void 0 !== e && !B(e)) return e;
                      }
                      return L[t];
                    },
                  },
                  C
                ),
                {
                  build: function () {
                    return j(), A;
                  },
                  scheduleRender: function () {
                    R.ZP.render(O, !1, !0);
                  },
                  syncRender: O,
                  setProps: function (t) {
                    (t.transformTemplate || v.transformTemplate) &&
                      X.scheduleRender(),
                      (v = t),
                      C.updatePropListeners(t),
                      (M = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (B(o)) t.addValue(i, o);
                          else if (B(a)) t.addValue(i, F(o));
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              !s.hasAnimated && s.set(o);
                            } else
                              t.addValue(
                                i,
                                F(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(X, p(v), M));
                  },
                  getProps: function () {
                    return v;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = v.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return v.transition;
                  },
                  getTransformPagePoint: function () {
                    return v.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext();
                    if (!Y) {
                      var e =
                        (null === f || void 0 === f
                          ? void 0
                          : f.getVariantContext()) || {};
                      return void 0 !== v.initial && (e.initial = v.initial), e;
                    }
                    for (var n = {}, r = 0; r < Ao; r++) {
                      var i = So[r],
                        o = v[i];
                      (b(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return X;
          };
        },
        So = (0, r.ev)(["initial"], (0, r.CR)(Ki), !1),
        Ao = So.length;
      function Co(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Vo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Ro(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var e = Vo.exec(t);
              if (!e) return [,];
              var n = (0, r.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          a = i[1];
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o);
          return s ? s.trim() : Co(a) ? Ro(a, e, n + 1) : a;
        }
      }
      var ko,
        Mo = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Lo = function (t) {
          return Mo.has(t);
        },
        Oo = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Do = function (t) {
          return t === tt || t === pt;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(ko || (ko = {}));
      var jo = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Fo = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return jo(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? jo(a[1], t) : 0;
          };
        },
        Bo = new Set(["x", "y", "z"]),
        Uo = zn.filter(function (t) {
          return !Bo.has(t);
        });
      var Io = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Fo(4, 13),
          y: Fo(5, 14),
        },
        No = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(e).filter(Lo),
            a = [],
            s = !1,
            u = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var l,
                  c = n[r],
                  d = zi(c),
                  p = e[r];
                if (we(p)) {
                  var f = p.length,
                    v = null === p[0] ? 1 : 0;
                  (c = p[v]), (d = zi(c));
                  for (var h = v; h < f; h++)
                    l ? zi(p[h]) : (l = zi(p[h])) === d || (Do(d) && Do(l));
                } else l = zi(p);
                if (d !== l)
                  if (Do(d) && Do(l)) {
                    var m = o.get();
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof p
                        ? (e[r] = parseFloat(p))
                        : Array.isArray(p) &&
                          l === pt &&
                          (e[r] = p.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === p)
                      ? 0 === c
                        ? o.set(l.transform(c))
                        : (e[r] = d.transform(p))
                      : (s ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              Uo.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (s = !0)),
                        u.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Oo(o, p));
              }
            }),
            u.length)
          ) {
            var l = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = Io[t](r, o);
                }),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  Oo(r, s[n]), (t[n] = Io[n](u, o));
                }),
                t
              );
            })(e, t, u);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.syncRender(),
              { target: l, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function zo(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Lo);
        })(e)
          ? No(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Ho = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance();
          if (!(a instanceof Element)) return { target: o, transitionEnd: n };
          for (var s in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Co(e)) {
              var n = Ro(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var u = o[s];
            if (Co(u)) {
              var l = Ro(u, a);
              l &&
                ((o[s] = l),
                n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return zo(t, (e = o.target), n, (i = o.transitionEnd));
      };
      var Yo = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (Wn(e)) {
              var n = Fe(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return (Sr(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return go(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues;
            void 0 === i && (i = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r._T)(e, ["transition", "transitionEnd"]),
              l = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = Zi(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(u, a || {}, t);
            if ((o && (s && (s = o(s)), u && (u = o(u)), l && (l = o(l))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      p = null;
                    Array.isArray(d) && (p = d[0]),
                      null === p &&
                        (p =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== i
                            ? i
                            : e[c]),
                      void 0 !== p &&
                        null !== p &&
                        ("string" === typeof p &&
                        (/^\-?\d*\.?\d+$/.test(p) || Ui(p))
                          ? (p = parseFloat(p))
                          : !Yi(p) && Mt.test(d) && (p = Be(c, d)),
                        t.addValue(c, F(p)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = p),
                        t.setBaseTarget(c, p));
                  }
              })(t, u, l);
              var c = Ho(t, u, l, s);
              (s = c.transitionEnd), (u = c.target);
            }
            return (0, r.pi)({ transition: a, transitionEnd: s }, u);
          },
          scrapeMotionValuesFromProps: qr,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Cr(e, n, r, i.transformTemplate);
          },
          render: Xr,
        },
        Wo = To(Yo),
        Xo = To(
          (0, r.pi)((0, r.pi)({}, Yo), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return Wn(e)
                ? (null === (n = Fe(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Zr.has(e) ? e : Wr(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Gr,
            build: function (t, e, n, r, i) {
              Ir(e, n, r, i.transformTemplate);
            },
            render: _r,
          })
        ),
        Zo = function (t, e) {
          return Er(t)
            ? Xo(e, { enableHardwareAcceleration: !1 })
            : Wo(e, { enableHardwareAcceleration: !0 });
        };
      function _o(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var qo = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!pt.test(t)) return t;
              t = parseFloat(t);
            }
            var n = _o(t, e.target.x),
              r = _o(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Go = "_$css",
        $o = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(Vo, function (t) {
                return a.push(t), Go;
              }));
            var s = Mt.parse(t);
            if (s.length > 5) return i;
            var u = Mt.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var p = k(c, d, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= p),
              "number" === typeof s[3 + l] && (s[3 + l] /= p);
            var f = u(s);
            if (o) {
              var v = 0;
              f = f.replace(Go, function () {
                var t = a[v];
                return v++, t;
              });
            }
            return f;
          },
        },
        Ko = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                i = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                u = i.projection;
              (t = Jo),
                Object.assign(Bn, t),
                u &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(u),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(u),
                  u.root.didUpdate(),
                  u.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  u.setOptions(
                    (0, r.pi)((0, r.pi)({}, u.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                ($n.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        R.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.default.Component);
      var Jo = {
          borderRadius: (0, r.pi)((0, r.pi)({}, qo), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: qo,
          borderTopRightRadius: qo,
          borderBottomLeftRadius: qo,
          borderBottomRightRadius: qo,
          boxShadow: $o,
        },
        Qo = {
          measureLayout: function (t) {
            var e = (0, r.CR)(Fi(), 2),
              n = e[0],
              o = e[1],
              a = (0, i.useContext)(mr.p);
            return i.default.createElement(
              Ko,
              (0, r.pi)({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, i.useContext)(yr),
                isPresent: n,
                safeToRemove: o,
              })
            );
          },
        },
        ta = Kn({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        ea = { current: void 0 },
        na = Kn({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!ea.current) {
              var t = new ta(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ea.current = t);
            }
            return ea.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
        }),
        ra = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, ro), Di), Eo), Qo),
        ia = br(function (t, e) {
          return (function (t, e, n, i, o) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              u = Er(t) ? ei : ni;
            return (0,
            r.pi)((0, r.pi)({}, u), { preloadedFeatures: n, useRender: Hr(s), createVisualElement: i, projectionNodeConstructor: o, Component: t });
          })(t, e, ra, Zo, na);
        });
    },
    8898: function (t, e, n) {
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var r = "undefined" !== typeof window;
    },
    1400: function (t, e, n) {
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(5473);
      function i(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5035: function (t, e, n) {
      n.d(e, {
        M: function () {
          return a;
        },
      });
      var r = n(1400),
        i = 0,
        o = function () {
          return i++;
        },
        a = function () {
          return (0, r.h)(o);
        };
    },
    2239: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(5473),
        i = n(8898).j ? r.useLayoutEffect : r.useEffect;
    },
    3114: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(5473);
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    4842: function (t, e, n) {
      n.d(e, {
        qY: function () {
          return f;
        },
        ZP: function () {
          return x;
        },
        iW: function () {
          return v;
        },
        $B: function () {
          return g;
        },
      });
      const r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r);
      let a = !0,
        s = !1,
        u = !1;
      const l = { delta: 0, timestamp: 0 },
        c = ["read", "update", "preRender", "render", "postRender"],
        d = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const u = s && i,
                      l = u ? e : n;
                    return (
                      o && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (i) o = !0;
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(u), a.has(r) && (s.schedule(r), t());
                        }
                      (i = !1), o && ((o = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        p = c.reduce((t, e) => {
          const n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (s || y(), n.schedule(t, e, r))), t
          );
        }, {}),
        f = c.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        v = c.reduce((t, e) => ((t[e] = () => d[e].process(l)), t), {}),
        h = (t) => d[t].process(l),
        m = (t) => {
          (s = !1),
            (l.delta = a ? r : Math.max(Math.min(t - l.timestamp, 40), 1)),
            (l.timestamp = t),
            (u = !0),
            c.forEach(h),
            (u = !1),
            s && ((a = !1), o(m));
        },
        y = () => {
          (s = !0), (a = !0), u || o(m);
        },
        g = () => l;
      var x = p;
    },
    6984: function (t, e, n) {
      n.d(e, {
        CR: function () {
          return u;
        },
        XA: function () {
          return s;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return l;
        },
        pi: function () {
          return o;
        },
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      function s(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function u(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function l(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
  },
]);

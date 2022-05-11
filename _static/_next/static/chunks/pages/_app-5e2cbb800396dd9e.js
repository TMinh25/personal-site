(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2297: function () {
      !(function () {
        "use strict";
        function e(e) {
          var t = !0,
            n = !1,
            r = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function a(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function i(e) {
            var t = e.type,
              n = e.tagName;
            return (
              !("INPUT" !== n || !o[t] || e.readOnly) ||
              ("TEXTAREA" === n && !e.readOnly) ||
              !!e.isContentEditable
            );
          }
          function l(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function u(e) {
            e.hasAttribute("data-focus-visible-added") &&
              (e.classList.remove("focus-visible"),
              e.removeAttribute("data-focus-visible-added"));
          }
          function s(n) {
            n.metaKey ||
              n.altKey ||
              n.ctrlKey ||
              (a(e.activeElement) && l(e.activeElement), (t = !0));
          }
          function c(e) {
            t = !1;
          }
          function p(e) {
            a(e.target) && (t || i(e.target)) && l(e.target);
          }
          function d(e) {
            a(e.target) &&
              (e.target.classList.contains("focus-visible") ||
                e.target.hasAttribute("data-focus-visible-added")) &&
              ((n = !0),
              window.clearTimeout(r),
              (r = window.setTimeout(function () {
                n = !1;
              }, 100)),
              u(e.target));
          }
          function f(e) {
            "hidden" === document.visibilityState && (n && (t = !0), h());
          }
          function h() {
            document.addEventListener("mousemove", g),
              document.addEventListener("mousedown", g),
              document.addEventListener("mouseup", g),
              document.addEventListener("pointermove", g),
              document.addEventListener("pointerdown", g),
              document.addEventListener("pointerup", g),
              document.addEventListener("touchmove", g),
              document.addEventListener("touchstart", g),
              document.addEventListener("touchend", g);
          }
          function m() {
            document.removeEventListener("mousemove", g),
              document.removeEventListener("mousedown", g),
              document.removeEventListener("mouseup", g),
              document.removeEventListener("pointermove", g),
              document.removeEventListener("pointerdown", g),
              document.removeEventListener("pointerup", g),
              document.removeEventListener("touchmove", g),
              document.removeEventListener("touchstart", g),
              document.removeEventListener("touchend", g);
          }
          function g(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1), m());
          }
          document.addEventListener("keydown", s, !0),
            document.addEventListener("mousedown", c, !0),
            document.addEventListener("pointerdown", c, !0),
            document.addEventListener("touchstart", c, !0),
            document.addEventListener("visibilitychange", f, !0),
            h(),
            e.addEventListener("focus", p, !0),
            e.addEventListener("blur", d, !0),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" !== typeof window && "undefined" !== typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (n) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" !== typeof document && e(document);
      })();
    },
    3373: function (e, t, n) {
      "use strict";
      n.d(t, {
        PB: function () {
          return c;
        },
      });
      var r = n(5060),
        o = n(5473);
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var l = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        u = function (e, t, n) {
          void 0 === t && (t = []);
          var r = void 0 === n ? {} : n,
            a = r.defaultWidth,
            i = r.defaultHeight;
          return t.reduce(function (t, n, r) {
            return (
              t.push(
                o.default.createElement("meta", {
                  key: "og:" + e + ":0" + r,
                  property: "og:" + e,
                  content: n.url,
                })
              ),
              n.alt &&
                t.push(
                  o.default.createElement("meta", {
                    key: "og:" + e + ":alt0" + r,
                    property: "og:" + e + ":alt",
                    content: n.alt,
                  })
                ),
              n.secureUrl &&
                t.push(
                  o.default.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + r,
                    property: "og:" + e + ":secure_url",
                    content: n.secureUrl.toString(),
                  })
                ),
              n.type &&
                t.push(
                  o.default.createElement("meta", {
                    key: "og:" + e + ":type0" + r,
                    property: "og:" + e + ":type",
                    content: n.type.toString(),
                  })
                ),
              n.width
                ? t.push(
                    o.default.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: n.width.toString(),
                    })
                  )
                : a &&
                  t.push(
                    o.default.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: a.toString(),
                    })
                  ),
              n.height
                ? t.push(
                    o.default.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: n.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    o.default.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        s = function (e) {
          var t,
            n,
            r,
            i = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var s = "";
          e.title
            ? ((s = e.title),
              l.templateTitle &&
                (s = l.templateTitle.replace(/%s/g, function () {
                  return s;
                })))
            : e.defaultTitle && (s = e.defaultTitle),
            s && i.push(o.default.createElement("title", { key: "title" }, s));
          var c,
            p,
            d = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            f = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
            h = "";
          if (e.robotsProps) {
            var m = e.robotsProps,
              g = m.nosnippet,
              v = m.maxSnippet,
              y = m.maxImagePreview,
              b = m.maxVideoPreview,
              w = m.noarchive,
              E = m.noimageindex,
              _ = m.notranslate,
              k = m.unavailableAfter;
            h =
              (g ? ",nosnippet" : "") +
              (v ? ",max-snippet:" + v : "") +
              (y ? ",max-image-preview:" + y : "") +
              (w ? ",noarchive" : "") +
              (k ? ",unavailable_after:" + k : "") +
              (E ? ",noimageindex" : "") +
              (b ? ",max-video-preview:" + b : "") +
              (_ ? ",notranslate" : "");
          }
          (d || f
            ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
              e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
              i.push(
                o.default.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content:
                    (d ? "noindex" : "index") +
                    "," +
                    (f ? "nofollow" : "follow") +
                    h,
                })
              ))
            : i.push(
                o.default.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content: "index,follow" + h,
                })
              ),
          e.description &&
            i.push(
              o.default.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description,
              })
            ),
          e.mobileAlternate &&
            i.push(
              o.default.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href,
              })
            ),
          e.languageAlternates &&
            e.languageAlternates.length > 0 &&
            e.languageAlternates.forEach(function (e) {
              i.push(
                o.default.createElement("link", {
                  rel: "alternate",
                  key: "languageAlternate-" + e.hrefLang,
                  hrefLang: e.hrefLang,
                  href: e.href,
                })
              );
            }),
          e.twitter &&
            (e.twitter.cardType &&
              i.push(
                o.default.createElement("meta", {
                  key: "twitter:card",
                  name: "twitter:card",
                  content: e.twitter.cardType,
                })
              ),
            e.twitter.site &&
              i.push(
                o.default.createElement("meta", {
                  key: "twitter:site",
                  name: "twitter:site",
                  content: e.twitter.site,
                })
              ),
            e.twitter.handle &&
              i.push(
                o.default.createElement("meta", {
                  key: "twitter:creator",
                  name: "twitter:creator",
                  content: e.twitter.handle,
                })
              )),
          e.facebook &&
            e.facebook.appId &&
            i.push(
              o.default.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId,
              })
            ),
          (null != (t = e.openGraph) && t.title) || s) &&
            i.push(
              o.default.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (c = e.openGraph) ? void 0 : c.title) || s,
              })
            );
          ((null != (n = e.openGraph) && n.description) || e.description) &&
            i.push(
              o.default.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content:
                  (null == (p = e.openGraph) ? void 0 : p.description) ||
                  e.description,
              })
            );
          if (e.openGraph) {
            if (
              ((e.openGraph.url || e.canonical) &&
                i.push(
                  o.default.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var G = e.openGraph.type.toLowerCase();
              i.push(
                o.default.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: G,
                })
              ),
                "profile" === G && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === G && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === G && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" !== G &&
                      "video.episode" !== G &&
                      "video.tv_show" !== G &&
                      "video.other" !== G) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          i.push(
                            o.default.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            i.push(
                              o.default.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        i.push(
                          o.default.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      i.push(
                        o.default.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                i.push.apply(
                  i,
                  u("image", e.openGraph.images, {
                    defaultWidth: l.defaultOpenGraphImageWidth,
                    defaultHeight: l.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                i.push.apply(
                  i,
                  u("video", e.openGraph.videos, {
                    defaultWidth: l.defaultOpenGraphVideoWidth,
                    defaultHeight: l.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.locale &&
                i.push(
                  o.default.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                i.push(
                  o.default.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              i.push(
                o.default.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, n, r;
                i.push(
                  o.default.createElement(
                    "meta",
                    a(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null !=
                            (n = null != (r = e.keyOverride) ? r : e.name)
                              ? n
                              : e.property)
                            ? t
                            : e.httpEquiv),
                      },
                      e
                    )
                  )
                );
              }),
            null != (r = e.additionalLinkTags) &&
              r.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                i.push(
                  o.default.createElement(
                    "link",
                    a(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            i
          );
        },
        c =
          (o.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              i(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  n = e.noindex,
                  a = void 0 !== n && n,
                  i = e.nofollow,
                  l = e.robotsProps,
                  u = e.description,
                  c = e.canonical,
                  p = e.openGraph,
                  d = e.facebook,
                  f = e.twitter,
                  h = e.additionalMetaTags,
                  m = e.titleTemplate,
                  g = e.mobileAlternate,
                  v = e.languageAlternates,
                  y = e.additionalLinkTags;
                return o.default.createElement(
                  r.default,
                  null,
                  s({
                    title: t,
                    noindex: a,
                    nofollow: i,
                    robotsProps: l,
                    description: u,
                    canonical: c,
                    facebook: d,
                    openGraph: p,
                    additionalMetaTags: h,
                    twitter: f,
                    titleTemplate: m,
                    mobileAlternate: g,
                    languageAlternates: v,
                    additionalLinkTags: y,
                  })
                );
              }),
              t
            );
          })(o.Component)),
        p = Object.freeze({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        });
      new RegExp("[" + Object.keys(p).join("") + "]", "g");
    },
    7363: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) &&
        "object" ===
          typeof (null === (o = n.g.process) || void 0 === o ? void 0 : o.env)
          ? n.g.process
          : n(2370);
    },
    8586: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(542);
        },
      ]);
    },
    1984: function (e, t) {
      "use strict";
      t.Z = {
        details: {
          title: "Nguy\u1ec5n Tr\u01b0\u1eddng Minh",
          tagLine: "Sofware Developer",
          description:
            "Articles and guides about JavaScript, CSS and Web Development from a software engineer.",
          url: "https://www.nirmalyaghosh.com",
        },
        assets: {
          avatar: "/images/common/seo-cover.png",
          favicon: "/images/common/favicon.svg",
        },
        socialLinks: { twitter: "@nirmalyaghosh23" },
      };
    },
    6758: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      t.default = function (e, t) {
        var n = a.default,
          r = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        (i = e),
          (u = Promise),
          (
            null != u && "undefined" !== typeof Symbol && u[Symbol.hasInstance]
              ? u[Symbol.hasInstance](i)
              : i instanceof u
          )
            ? (r.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (r.loader = e)
            : "object" === typeof e && (r = o({}, r, e));
        var i, u;
        var s = (r = o({}, r, t));
        if (s.suspense)
          throw new Error(
            "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
          );
        if (s.suspense) return n(s);
        r.loadableGenerated &&
          delete (r = o({}, r, r.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof r.ssr) {
          if (!r.ssr) return delete r.ssr, l(n, r);
          delete r.ssr;
        }
        return n(r);
      };
      i(n(5473));
      var a = i(n(6590));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    6995: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var o = (
        (r = n(5473)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    6590: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        l = (i = n(5473)) && i.__esModule ? i : { default: i },
        u = n(8211),
        s = n(6995);
      var c = [],
        p = [],
        d = !1;
      function f(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var h = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                if (t.loading) {
                  if ("number" === typeof n.delay)
                    if (0 === n.delay) this._state.pastDelay = !0;
                    else {
                      var r = this;
                      this._delay = setTimeout(function () {
                        r._update({ pastDelay: !0 });
                      }, n.delay);
                    }
                  if ("number" === typeof n.timeout) {
                    var o = this;
                    this._timeout = setTimeout(function () {
                      o._update({ timedOut: !0 });
                    }, n.timeout);
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts();
                  })
                  .catch(function (t) {
                    e._update({}), e._clearTimeouts();
                  }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = a(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        );
      })();
      function m(e) {
        return (function (e, t) {
          var n = function () {
              if (!o) {
                var t = new h(e, r);
                o = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return o.promise();
            },
            r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          r.suspense && (r.lazy = l.default.lazy(r.loader));
          var o = null;
          if (!d && !r.suspense) {
            var i = r.webpack ? r.webpack() : r.modules;
            i &&
              p.push(function (e) {
                var t = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, l = i[Symbol.iterator]();
                    !(t = (a = l.next()).done);
                    t = !0
                  ) {
                    var u = a.value;
                    if (-1 !== e.indexOf(u)) return n();
                  }
                } catch (s) {
                  (r = !0), (o = s);
                } finally {
                  try {
                    t || null == l.return || l.return();
                  } finally {
                    if (r) throw o;
                  }
                }
              });
          }
          var c = r.suspense
            ? function (e, t) {
                return l.default.createElement(r.lazy, a({}, e, { ref: t }));
              }
            : function (e, t) {
                n();
                var a = l.default.useContext(s.LoadableContext),
                  i = u.useSubscription(o);
                return (
                  l.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: o.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(r.modules) &&
                    r.modules.forEach(function (e) {
                      a(e);
                    }),
                  l.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? l.default.createElement(r.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: o.retry,
                          })
                        : i.loaded
                        ? l.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(i.loaded),
                            e
                          )
                        : null;
                    },
                    [e, i]
                  )
                );
              };
          return (
            (c.preload = function () {
              return !r.suspense && n();
            }),
            (c.displayName = "LoadableComponent"),
            l.default.forwardRef(c)
          );
        })(f, e);
      }
      function g(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return g(e, t);
        });
      }
      (m.preloadAll = function () {
        return new Promise(function (e, t) {
          g(c).then(e, t);
        });
      }),
        (m.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (d = !0), t();
            };
            g(p, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = m.preloadReady);
      var v = m;
      t.default = v;
    },
    542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var r = n(3312),
        o = n(1984),
        a = n(1136),
        i = n.n(a),
        l = n(8700),
        u = n.n(l),
        s = n(5473),
        c = "__ga4React__";
      class p {
        constructor(e, t, n, r, o) {
          if (
            ((this.gaCode = e),
            (this.gaConfig = t),
            (this.additionalGaCode = n),
            (this.timeout = r),
            (this.options = o),
            (this.scriptSyncId = "ga4ReactScriptSync"),
            (this.scriptAsyncId = "ga4ReactScriptAsync"),
            (this.nonceAsync = ""),
            (this.nonceSync = ""),
            (this.gaConfig = t || {}),
            (this.gaCode = e),
            (this.timeout = r || 5e3),
            (this.additionalGaCode = n),
            (this.options = o),
            this.options)
          ) {
            var { nonce: a } = this.options;
            (this.nonceAsync = a && a[0] ? a[0] : ""),
              (this.nonceSync = a && a[1] ? a[1] : "");
          }
        }
        outputOnResolve() {
          return {
            pageview: this.pageview,
            event: this.event,
            gtag: this.gtag,
          };
        }
        initialize() {
          return new Promise((e, t) => {
            p.isInitialized() && t(new Error("GA4React is being initialized"));
            var n = document.getElementById(this.scriptAsyncId);
            n && n.remove();
            var r = document.getElementsByTagName("head")[0],
              o = document.createElement("script");
            o.setAttribute("id", this.scriptAsyncId),
              o.setAttribute("async", ""),
              this.nonceAsync &&
                "string" === typeof this.nonceAsync &&
                this.nonceAsync.length > 0 &&
                o.setAttribute("nonce", this.nonceAsync),
              o.setAttribute(
                "src",
                "https://www.googletagmanager.com/gtag/js?id=" + this.gaCode
              ),
              (o.onload = () => {
                var t = document.getElementById(this.scriptSyncId);
                t && t.remove();
                var n = document.getElementById(this.scriptSyncId);
                n && n.remove();
                var o = document.createElement("script");
                o.setAttribute("id", this.scriptSyncId),
                  this.nonceSync &&
                    "string" === typeof this.nonceSync &&
                    this.nonceSync.length > 0 &&
                    o.setAttribute("nonce", this.nonceSync);
                var a =
                  "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);};\n        gtag('js', new Date());\n        gtag('config', '" +
                  this.gaCode +
                  "', " +
                  JSON.stringify(this.gaConfig) +
                  ");";
                this.additionalGaCode &&
                  this.additionalGaCode.forEach((e) => {
                    a +=
                      "\ngtag('config', '" +
                      e +
                      "', " +
                      JSON.stringify(this.gaConfig) +
                      ");";
                  }),
                  (o.innerHTML = a),
                  r.appendChild(o);
                var i = this.outputOnResolve();
                Object.assign(window, { [c]: i }), e(i);
              }),
              (o.onerror = (e) => {
                if ("string" === typeof e)
                  t("GA4React intialization failed " + e);
                else {
                  var n = new Error();
                  (n.name = "GA4React intialization failed"),
                    (n.message = JSON.stringify(e, [
                      "message",
                      "arguments",
                      "type",
                      "name",
                    ])),
                    t(n);
                }
              });
            var a = () => {
              switch (document.readyState) {
                case "interactive":
                case "complete":
                  p.isInitialized() ||
                    (r.appendChild(o),
                    document.removeEventListener("readystatechange", a));
              }
            };
            "complete" !== document.readyState
              ? document.addEventListener("readystatechange", a)
              : a(),
              setTimeout(() => {
                t(new Error("GA4React Timeout"));
              }, this.timeout);
          });
        }
        pageview(e, t, n) {
          return this.gtag("event", "page_view", {
            page_path: e,
            page_location: t || window.location,
            page_title: n || document.title,
          });
        }
        event(e, t, n, r) {
          return (
            void 0 === r && (r = !1),
            this.gtag("event", e, {
              event_label: t,
              event_category: n,
              non_interaction: r,
            })
          );
        }
        gtag() {
          return window.gtag(...arguments);
        }
        static isInitialized() {
          return ("undefined" !== typeof window.__ga4React__) === !0;
        }
        static getGA4React() {
          if (p.isInitialized()) return window.__ga4React__;
          console.error(new Error("GA4React is not initialized"));
        }
      }
      var d,
        f = p,
        h = n(7363);
      function m(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              m(a, r, o, i, l, "next", e);
            }
            function l(e) {
              m(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function v() {
        return (v = g(
          i().mark(function e(t) {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (f.isInitialized() || !t) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (d = new f(t, { debug_mode: !h.env.production })),
                        (e.prev = 2),
                        (e.next = 5),
                        d.initialize()
                      );
                    case 5:
                      b(), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2)), console.error(e.t0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function y() {
        d.pageview(window.location.pathname);
      }
      function b() {
        y(),
          u().events.on("routeChangeComplete", function () {
            y();
          });
      }
      var w = n(3373),
        E = n(3697),
        _ = n(5060),
        k = (n(2297), n(7363));
      function G(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              G(e, t, n[t]);
            });
        }
        return e;
      }
      var T = (0, E.default)(
          function () {
            return Promise.all([
              n.e(207),
              n.e(92),
              n.e(325),
              n.e(404),
              n.e(828),
              n.e(489),
            ]).then(n.bind(n, 7377));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7377];
              },
            },
          }
        ),
        L = (0, E.default)(
          function () {
            return Promise.all([n.e(207), n.e(160)]).then(n.bind(n, 4827));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [4827];
              },
            },
          }
        ),
        x = function (e) {
          var t = e.Component,
            n = e.pageProps;
          return (
            (0, s.useEffect)(function () {
              (function (e) {
                v.apply(this, arguments);
              })(k.env.NEXT_PUBLIC_GA);
            }, []),
            (0, r.BX)(T, {
              children: [
                (0, r.BX)(_.default, {
                  children: [
                    (0, r.tZ)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1",
                    }),
                    (0, r.tZ)("link", {
                      rel: "icon",
                      href: o.Z.assets.favicon,
                      type: "image/png",
                    }),
                  ],
                }),
                (0, r.tZ)(w.PB, {
                  title: ""
                    .concat(o.Z.details.title, " - ")
                    .concat(o.Z.details.tagLine),
                  description: o.Z.details.description,
                  twitter: {
                    handle: o.Z.socialLinks.twitter,
                    site: o.Z.socialLinks.twitter,
                    cardType: "summary_large_image",
                  },
                  openGraph: {
                    url: o.Z.details.url,
                    title: o.Z.details.title,
                    description: o.Z.details.description,
                    images: [
                      {
                        url: ""
                          .concat(o.Z.details.url)
                          .concat(o.Z.assets.avatar),
                        width: 800,
                        height: 600,
                        alt: o.Z.details.title,
                      },
                    ],
                    site_name: o.Z.details.title,
                    type: "website",
                    locale: "en_IE",
                  },
                }),
                (0, r.tZ)(L, {}),
                (0, r.tZ)(t, O({}, n)),
              ],
            })
          );
        };
    },
    2370: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                n,
                r = (e.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function a() {
                throw new Error("clearTimeout has not been defined");
              }
              function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" === typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = "function" === typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  n = a;
                }
              })();
              var l,
                u = [],
                s = !1,
                c = -1;
              function p() {
                s &&
                  l &&
                  ((s = !1),
                  l.length ? (u = l.concat(u)) : (c = -1),
                  u.length && d());
              }
              function d() {
                if (!s) {
                  var e = i(p);
                  s = !0;
                  for (var t = u.length; t; ) {
                    for (l = u, u = []; ++c < t; ) l && l[c].run();
                    (c = -1), (t = u.length);
                  }
                  (l = null),
                    (s = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (r.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                u.push(new f(e, t)), 1 !== u.length || s || i(d);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var a = (n[e] = { exports: {} }),
            i = !0;
          try {
            t[e](a, a.exports, r), (i = !1);
          } finally {
            i && delete n[e];
          }
          return a.exports;
        }
        r.ab = "//";
        var o = r(162);
        e.exports = o;
      })();
    },
    8211: function (e, t, n) {
      (() => {
        "use strict";
        var t = {
            800: (e) => {
              var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
              function o(e) {
                if (null === e || void 0 === e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              }
              e.exports = (function () {
                try {
                  if (!Object.assign) return !1;
                  var e = new String("abc");
                  if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                    return !1;
                  for (var t = {}, n = 0; n < 10; n++)
                    t["_" + String.fromCharCode(n)] = n;
                  var r = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e];
                  });
                  if ("0123456789" !== r.join("")) return !1;
                  var o = {};
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                      o[e] = e;
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, o)).join("")
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? Object.assign
                : function (e, a) {
                    for (var i, l, u = o(e), s = 1; s < arguments.length; s++) {
                      for (var c in (i = Object(arguments[s])))
                        n.call(i, c) && (u[c] = i[c]);
                      if (t) {
                        l = t(i);
                        for (var p = 0; p < l.length; p++)
                          r.call(i, l[p]) && (u[l[p]] = i[l[p]]);
                      }
                    }
                    return u;
                  };
            },
            569: (e, t, n) => {
              0;
            },
            403: (e, t, n) => {
              var r = n(800),
                o = n(522);
              t.useSubscription = function (e) {
                var t = e.getCurrentValue,
                  n = e.subscribe,
                  a = o.useState(function () {
                    return { getCurrentValue: t, subscribe: n, value: t() };
                  });
                e = a[0];
                var i = a[1];
                return (
                  (a = e.value),
                  (e.getCurrentValue === t && e.subscribe === n) ||
                    ((a = t()),
                    i({ getCurrentValue: t, subscribe: n, value: a })),
                  o.useDebugValue(a),
                  o.useEffect(
                    function () {
                      function e() {
                        if (!o) {
                          var e = t();
                          i(function (o) {
                            return o.getCurrentValue !== t ||
                              o.subscribe !== n ||
                              o.value === e
                              ? o
                              : r({}, o, { value: e });
                          });
                        }
                      }
                      var o = !1,
                        a = n(e);
                      return (
                        e(),
                        function () {
                          (o = !0), a();
                        }
                      );
                    },
                    [t, n]
                  ),
                  a
                );
              };
            },
            138: (e, t, n) => {
              e.exports = n(403);
            },
            522: (e) => {
              e.exports = n(5473);
            },
          },
          r = {};
        function o(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var a = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e](a, a.exports, o), (i = !1);
          } finally {
            i && delete r[e];
          }
          return a.exports;
        }
        o.ab = "//";
        var a = o(138);
        e.exports = a;
      })();
    },
    3697: function (e, t, n) {
      e.exports = n(6758);
    },
    5060: function (e, t, n) {
      e.exports = n(8925);
    },
    8700: function (e, t, n) {
      e.exports = n(916);
    },
    3312: function (e, t, n) {
      "use strict";
      n.d(t, {
        BX: function () {
          return r.jsxs;
        },
        HY: function () {
          return r.Fragment;
        },
        tZ: function () {
          return r.jsx;
        },
      });
      n(5473);
      var r = n(4418);
    },
    4418: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Fragment: function () {
            return r.HY;
          },
          jsx: function () {
            return a;
          },
          jsxDEV: function () {
            return a;
          },
          jsxs: function () {
            return a;
          },
        });
      var r = n(6224),
        o = 0;
      function a(e, t, n, a, i) {
        var l,
          u,
          s = {};
        for (u in t) "ref" == u ? (l = t[u]) : (s[u] = t[u]);
        var c = {
          type: e,
          props: s,
          key: n,
          ref: l,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: --o,
          __source: i,
          __self: a,
        };
        if ("function" == typeof e && (l = e.defaultProps))
          for (u in l) void 0 === s[u] && (s[u] = l[u]);
        return r.YM.vnode && r.YM.vnode(c), c;
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [179], function () {
      return t(8586), t(916);
    });
    var n = e.O();
    _N_E = n;
  },
]);

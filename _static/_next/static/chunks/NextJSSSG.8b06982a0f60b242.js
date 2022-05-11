"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [643],
  {
    434: function (e, i, n) {
      var t = n(3312),
        r = n(9207);
      i.Z = function (e) {
        var i = e.address,
          n = void 0 === i ? "http://localhost:3000" : i,
          d = e.children;
        return (0, t.tZ)(r.gC, {
          spacing: 4,
          w: "100%",
          children: (0, t.BX)(r.gC, {
            spacing: 0,
            w: "100%",
            children: [
              (0, t.BX)(r.Ug, {
                w: "100%",
                bg: "gray.700",
                p: 2,
                roundedTop: "sm",
                borderBottomWidth: 2,
                borderBottomColor: "gray.900",
                fontSize: "xs",
                children: [
                  (0, t.tZ)(r.Ug, {
                    w: "100%",
                    children: (0, t.tZ)(r.xu, {
                      p: 1,
                      rounded: "sm",
                      w: "100%",
                      children: n,
                    }),
                  }),
                  (0, t.tZ)(r.xu, {
                    bg: "green.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                  (0, t.tZ)(r.xu, {
                    bg: "yellow.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                  (0, t.tZ)(r.xu, {
                    bg: "red.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                ],
              }),
              (0, t.tZ)(r.xu, {
                w: "100%",
                h: 64,
                bg: "gray.700",
                p: 2,
                roundedBottom: "sm",
                fontSize: "sm",
                children: d,
              }),
            ],
          }),
        });
      };
    },
    4063: function (e, i, n) {
      n.r(i);
      var t = n(3312),
        r = n(9207),
        d = n(6746),
        o = n(3855),
        l = n(3196),
        a = n(9427),
        s = n(5473),
        h = n(5961),
        c = n(4583),
        g = n(960),
        p = n(434),
        u = n(1600),
        b = (0, a.E)(r.Ug),
        f = (0, a.E)(r.gC),
        w = (0, a.E)(r.M5),
        y = (0, a.E)(r.xu);
      i.default = function () {
        var e = (0, s.useState)(0),
          i = e[0],
          n = e[1];
        (0, s.useEffect)(
          function () {
            var e;
            return (
              1 === i &&
                (e = setTimeout(function () {
                  n(2);
                }, 5e3)),
              function () {
                clearTimeout(e);
              }
            );
          },
          [i]
        );
        return (0, t.tZ)(u.Z, {
          children: (0, t.BX)(r.gC, {
            spacing: 8,
            children: [
              !(i > 0) &&
                (0, t.BX)(r.gC, {
                  spacing: 4,
                  w: "100%",
                  children: [
                    (0, t.BX)(w, {
                      pos: "relative",
                      w: 24,
                      h: 48,
                      left: -12,
                      variants: {
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { delayChildren: 0.5 },
                        },
                      },
                      initial: "hidden",
                      animate: "show",
                      children: [
                        (0, t.BX)(f, {
                          pos: "absolute",
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          w: 32,
                          shadow: "lg",
                          fontWeight: "bold",
                          variants: {
                            hidden: { left: 0 },
                            show: { left: "-80px", transform: "rotate(10deg)" },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, t.tZ)(d.pT, { in: !0, children: "home.js" }),
                          ],
                        }),
                        (0, t.BX)(f, {
                          pos: "absolute",
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          w: 32,
                          shadow: "lg",
                          fontWeight: "bold",
                          variants: {
                            hidden: { left: 0 },
                            show: { left: 20, transform: "rotate(15deg)" },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, t.tZ)(d.pT, { in: !0, children: "blogs.js" }),
                          ],
                        }),
                        (0, t.BX)(f, {
                          pos: "absolute",
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          w: 32,
                          shadow: "lg",
                          fontWeight: "bold",
                          variants: {
                            hidden: { left: 0 },
                            show: { left: "125px", transform: "rotate(20deg)" },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: "projects.js",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.tZ)(r.xu, {
                      fontSize: "sm",
                      bg: "gray.900",
                      p: 4,
                      rounded: "sm",
                      children:
                        "The above JavaScript files are present inside your Next.js application. These files contain code in React.js. They might potentially contain calls to 3rd party APIs as well as CSS files.",
                    }),
                    (0, t.tZ)(l.zx, {
                      w: "full",
                      bg: "blue.600",
                      size: "sm",
                      rounded: "sm",
                      onClick: function () {
                        return n(1);
                      },
                      isDisabled: 1 === i,
                      children: "Build all pages",
                    }),
                  ],
                }),
              1 === i &&
                (0, t.tZ)(r.M5, {
                  p: 4,
                  border: 2,
                  borderColor: "gray.700",
                  borderStyle: "dashed",
                  rounded: "sm",
                  color: "gray.400",
                  w: "100%",
                  children: (0, t.BX)(f, {
                    spacing: 4,
                    w: "100%",
                    initial: "hidden",
                    animate: "visible",
                    variants: {
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    },
                    children: [
                      (0, t.tZ)(d.pT, {
                        in: !0,
                        children: "Next.js is building all the pages...",
                      }),
                      (0, t.tZ)(r.xu, {
                        fontSize: "sm",
                        bg: "gray.900",
                        p: 4,
                        rounded: "sm",
                        w: "100%",
                        children:
                          "In this step, Next.js takes all the pages that your created inside your application and builds them into HTML files.",
                      }),
                    ],
                  }),
                }),
              2 === i &&
                (0, t.BX)(r.gC, {
                  spacing: 4,
                  w: "100%",
                  children: [
                    (0, t.BX)(b, {
                      spacing: 2,
                      h: 48,
                      variants: {
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            when: "beforeChildren",
                            staggerChildren: 0.3,
                          },
                        },
                      },
                      initial: "hidden",
                      animate: "visible",
                      children: [
                        (0, t.BX)(f, {
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          shadow: "lg",
                          fontWeight: "bold",
                          w: 32,
                          variants: {
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: c.DGw,
                                h: 16,
                                w: 16,
                              }),
                            }),
                            (0, t.tZ)(d.pT, { in: !0, children: "home.html" }),
                          ],
                        }),
                        (0, t.BX)(f, {
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          shadow: "lg",
                          fontWeight: "bold",
                          w: 32,
                          variants: {
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: c.DGw,
                                h: 16,
                                w: 16,
                              }),
                            }),
                            (0, t.tZ)(d.pT, { in: !0, children: "blogs.html" }),
                          ],
                        }),
                        (0, t.BX)(f, {
                          p: 4,
                          bg: "gray.700",
                          rounded: "sm",
                          color: "gray.400",
                          shadow: "lg",
                          fontWeight: "bold",
                          w: 32,
                          variants: {
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                          },
                          children: [
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: (0, t.tZ)(o.JO, {
                                as: c.DGw,
                                h: 16,
                                w: 16,
                              }),
                            }),
                            (0, t.tZ)(d.pT, {
                              in: !0,
                              children: "projects.html",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.tZ)(r.xu, {
                      fontSize: "sm",
                      bg: "gray.900",
                      p: 4,
                      rounded: "sm",
                      children:
                        "Post the build process of Next.js, you will get a bunch of HTML, JavaScript and CSS files. You can deploy these files to a server to make it available to everyone in the world.",
                    }),
                    (0, t.tZ)(l.zx, {
                      w: "full",
                      bg: "blue.600",
                      size: "sm",
                      rounded: "sm",
                      onClick: function () {
                        return n(3);
                      },
                      isDisabled: 2 !== i,
                      children: "View the blogs.html page",
                    }),
                  ],
                }),
              !(i < 3) &&
                (0, t.BX)(r.gC, {
                  spacing: 4,
                  w: "100%",
                  children: [
                    (0, t.tZ)(p.Z, {
                      address: "blogs.html",
                      children: (0, t.BX)(r.Ug, {
                        h: "100%",
                        children: [
                          (0, t.tZ)(r.xu, {
                            w: "25%",
                            h: "100%",
                            bg: "gray.900",
                            p: 2,
                            rounded: "sm",
                            fontSize: "xs",
                            children: (0, t.BX)(r.gC, {
                              spacing: 2,
                              children: [
                                (0, t.tZ)(r.xu, {
                                  w: "100%",
                                  children: "Menu 1",
                                }),
                                (0, t.tZ)(r.xu, {
                                  w: "100%",
                                  children: "Menu 2",
                                }),
                                (0, t.tZ)(r.xu, {
                                  w: "100%",
                                  children: "Menu 3",
                                }),
                              ],
                            }),
                          }),
                          (0, t.BX)(f, {
                            w: "75%",
                            h: "100%",
                            bg: "gray.900",
                            p: 2,
                            rounded: "sm",
                            spacing: 2,
                            overflow: "hidden",
                            variants: {
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: {
                                  when: "beforeChildren",
                                  staggerChildren: 0.3,
                                },
                              },
                            },
                            initial: "hidden",
                            animate: "visible",
                            children: [
                              (0, t.tZ)(y, {
                                w: "100%",
                                bg: "gray.700",
                                p: 2,
                                rounded: "sm",
                                variants: {
                                  visible: { opacity: 1, y: 0 },
                                  hidden: { opacity: 0, y: -10 },
                                },
                                children: (0, t.BX)(r.gC, {
                                  children: [
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontWeight: "bold",
                                      children: "Title 1",
                                    }),
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontSize: "xs",
                                      children:
                                        "This is a description of the post.",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.tZ)(y, {
                                w: "100%",
                                bg: "gray.700",
                                p: 2,
                                rounded: "sm",
                                variants: {
                                  visible: { opacity: 1, y: 0 },
                                  hidden: { opacity: 0, y: -10 },
                                },
                                children: (0, t.BX)(r.gC, {
                                  children: [
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontWeight: "bold",
                                      children: "Title 2",
                                    }),
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontSize: "xs",
                                      children:
                                        "This is a description of the post.",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.tZ)(y, {
                                w: "100%",
                                bg: "gray.700",
                                p: 2,
                                rounded: "sm",
                                variants: {
                                  visible: { opacity: 1, y: 0 },
                                  hidden: { opacity: 0, y: -10 },
                                },
                                children: (0, t.BX)(r.gC, {
                                  children: [
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontWeight: "bold",
                                      children: "Title 3",
                                    }),
                                    (0, t.tZ)(r.xu, {
                                      w: "100%",
                                      fontSize: "xs",
                                      children:
                                        "This is a description of the post.",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.tZ)(r.xu, {
                      fontSize: "sm",
                      bg: "gray.900",
                      p: 4,
                      rounded: "sm",
                      children:
                        "Since the generated files are static files, these files are immediately available when someone visits them. No fetching of data happens in these files.",
                    }),
                    (0, t.tZ)(l.zx, {
                      w: "full",
                      bg: "blue.600",
                      size: "sm",
                      rounded: "sm",
                      onClick: function () {
                        return n(0);
                      },
                      leftIcon: (0, t.tZ)(g.a0h, {}),
                      children: "Play again",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    1600: function (e, i, n) {
      var t = n(3312),
        r = n(9207);
      n(5473);
      i.Z = function (e) {
        var i = e.children;
        return (0, t.tZ)(r.xu, {
          w: "100%",
          bg: "gray.900",
          p: 2,
          rounded: "sm",
          fontSize: "sm",
          mb: 8,
          borderWidth: 1,
          borderColor: "gray.700",
          children: i,
        });
      };
    },
  },
]);

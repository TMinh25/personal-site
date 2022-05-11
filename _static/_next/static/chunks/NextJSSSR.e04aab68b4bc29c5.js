"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [909],
  {
    434: function (e, r, t) {
      var i = t(3312),
        n = t(9207);
      r.Z = function (e) {
        var r = e.address,
          t = void 0 === r ? "http://localhost:3000" : r,
          o = e.children;
        return (0, i.tZ)(n.gC, {
          spacing: 4,
          w: "100%",
          children: (0, i.BX)(n.gC, {
            spacing: 0,
            w: "100%",
            children: [
              (0, i.BX)(n.Ug, {
                w: "100%",
                bg: "gray.700",
                p: 2,
                roundedTop: "sm",
                borderBottomWidth: 2,
                borderBottomColor: "gray.900",
                fontSize: "xs",
                children: [
                  (0, i.tZ)(n.Ug, {
                    w: "100%",
                    children: (0, i.tZ)(n.xu, {
                      p: 1,
                      rounded: "sm",
                      w: "100%",
                      children: t,
                    }),
                  }),
                  (0, i.tZ)(n.xu, {
                    bg: "green.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                  (0, i.tZ)(n.xu, {
                    bg: "yellow.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                  (0, i.tZ)(n.xu, {
                    bg: "red.500",
                    w: 2,
                    h: 2,
                    rounded: "full",
                  }),
                ],
              }),
              (0, i.tZ)(n.xu, {
                w: "100%",
                h: 64,
                bg: "gray.700",
                p: 2,
                roundedBottom: "sm",
                fontSize: "sm",
                children: o,
              }),
            ],
          }),
        });
      };
    },
    9983: function (e, r, t) {
      t.r(r);
      var i = t(3312),
        n = t(9207),
        o = t(6746),
        d = t(3855),
        a = t(3196),
        s = t(9427),
        l = t(5473),
        h = t(5961),
        c = t(999),
        g = t(1322),
        u = t(960),
        p = t(434),
        f = t(1600),
        b = (0, s.E)(n.gC),
        w = (0, s.E)(n.M5),
        y = (0, s.E)(n.xu);
      r.default = function () {
        var e = (0, l.useState)(0),
          r = e[0],
          t = e[1];
        (0, l.useEffect)(
          function () {
            var e;
            return (
              1 === r &&
                (e = setTimeout(function () {
                  t(2);
                }, 5e3)),
              function () {
                clearTimeout(e);
              }
            );
          },
          [r]
        );
        return (0, i.tZ)(f.Z, {
          children: (0, i.BX)(n.gC, {
            spacing: 8,
            children: [
              !(r > 0) &&
                (0, i.BX)(n.gC, {
                  spacing: 4,
                  w: "100%",
                  children: [
                    (0, i.BX)(w, {
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
                        (0, i.BX)(b, {
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
                            (0, i.tZ)(o.pT, {
                              in: !0,
                              children: (0, i.tZ)(d.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, i.tZ)(o.pT, { in: !0, children: "home.js" }),
                          ],
                        }),
                        (0, i.BX)(b, {
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
                            (0, i.tZ)(o.pT, {
                              in: !0,
                              children: (0, i.tZ)(d.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, i.tZ)(o.pT, { in: !0, children: "blogs.js" }),
                          ],
                        }),
                        (0, i.BX)(b, {
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
                            (0, i.tZ)(o.pT, {
                              in: !0,
                              children: (0, i.tZ)(d.JO, {
                                as: h.wEI,
                                h: 12,
                                w: 12,
                              }),
                            }),
                            (0, i.tZ)(o.pT, {
                              in: !0,
                              children: "projects.js",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.tZ)(n.xu, {
                      fontSize: "sm",
                      bg: "gray.900",
                      p: 4,
                      rounded: "sm",
                      children:
                        "The above JavaScript files are present inside your Next.js application. These files contain code in React.js. They might potentially contain logic related to authorization or authentication.",
                    }),
                    (0, i.tZ)(a.zx, {
                      w: "full",
                      bg: "blue.600",
                      size: "sm",
                      rounded: "sm",
                      onClick: function () {
                        return t(1);
                      },
                      isDisabled: 1 === r,
                      children: "View the projects.html page",
                    }),
                  ],
                }),
              1 === r &&
                (0, i.tZ)(n.M5, {
                  rounded: "sm",
                  w: "100%",
                  children: (0, i.BX)(b, {
                    spacing: 4,
                    w: "100%",
                    initial: "hidden",
                    animate: "visible",
                    variants: {
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    },
                    children: [
                      (0, i.BX)(n.Ug, {
                        justifyContent: "space-between",
                        w: "100%",
                        children: [
                          (0, i.BX)(n.gC, {
                            spacing: 0,
                            p: 4,
                            rounded: "sm",
                            color: "gray.400",
                            children: [
                              (0, i.tZ)(d.JO, { as: g.fHN, h: 16, w: 16 }),
                              (0, i.tZ)(n.xu, { children: "Browser" }),
                            ],
                          }),
                          (0, i.tZ)(n.gC, {
                            w: "100%",
                            children: (0, i.BX)(n.xu, {
                              w: "100%",
                              justifyContent: "right",
                              pos: "relative",
                              children: [
                                (0, i.tZ)(n.xu, {
                                  pos: "absolute",
                                  mt: "14px",
                                  border: 1,
                                  borderColor: "gray.700",
                                  borderStyle: "dashed",
                                  w: "100%",
                                }),
                                (0, i.tZ)(y, {
                                  pos: "relative",
                                  color: "gray.400",
                                  initial: "hidden",
                                  animate: "visible",
                                  variants: {
                                    visible: {
                                      marginLeft: "calc(100% - 85px)",
                                      transition: {
                                        duration: 2,
                                        repeat: 0,
                                        repeatType: "reverse",
                                      },
                                    },
                                    hidden: { marginLeft: "0%" },
                                  },
                                  children: (0, i.BX)(n.Ug, {
                                    bg: "gray.900",
                                    rounded: "full",
                                    w: "fit-content",
                                    px: 2,
                                    py: 1,
                                    borderWidth: 1,
                                    shadow: "lg",
                                    children: [
                                      (0, i.tZ)(d.JO, { as: u.$S }),
                                      (0, i.tZ)(n.xu, {
                                        fontSize: "xs",
                                        children: "Request",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.tZ)(n.xu, {
                                  pos: "absolute",
                                  mt: "14px",
                                  border: 1,
                                  borderColor: "gray.700",
                                  borderStyle: "dashed",
                                  w: "100%",
                                }),
                                (0, i.tZ)(y, {
                                  pos: "relative",
                                  color: "gray.400",
                                  initial: "hidden",
                                  animate: "visible",
                                  variants: {
                                    visible: {
                                      marginLeft: "0%",
                                      transition: {
                                        duration: 2,
                                        repeat: 0,
                                        repeatType: "reverse",
                                        delay: 2,
                                      },
                                    },
                                    hidden: { marginLeft: "calc(100% - 95px)" },
                                  },
                                  children: (0, i.BX)(n.Ug, {
                                    bg: "gray.900",
                                    rounded: "full",
                                    w: "fit-content",
                                    px: 2,
                                    py: 1,
                                    borderWidth: 1,
                                    shadow: "lg",
                                    children: [
                                      (0, i.tZ)(d.JO, { as: u.$S }),
                                      (0, i.tZ)(n.xu, {
                                        fontSize: "xs",
                                        children: "Response",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, i.BX)(n.gC, {
                            spacing: 0,
                            p: 4,
                            rounded: "sm",
                            color: "gray.400",
                            children: [
                              (0, i.tZ)(d.JO, { as: c.Els, h: 14, w: 14 }),
                              (0, i.tZ)(n.xu, { children: "Server" }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.tZ)(n.xu, {
                        fontSize: "sm",
                        bg: "gray.900",
                        p: 4,
                        rounded: "sm",
                        w: "100%",
                        children:
                          "In this step, Next.js request the page from the server. The server returns the data in HTML format.",
                      }),
                    ],
                  }),
                }),
              !(r < 2) &&
                (0, i.BX)(n.gC, {
                  spacing: 4,
                  w: "100%",
                  children: [
                    (0, i.tZ)(p.Z, {
                      address: "projects.html",
                      children: (0, i.tZ)(n.M5, {
                        h: "100%",
                        children: (0, i.BX)(b, {
                          w: "100%",
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
                            (0, i.tZ)(w, {
                              w: "100%",
                              bg: "gray.700",
                              p: 2,
                              rounded: "sm",
                              variants: {
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: -10 },
                              },
                              children: (0, i.BX)(n.gC, {
                                w: "100%",
                                children: [
                                  (0, i.tZ)(n.xu, {
                                    w: "100%",
                                    fontWeight: "bold",
                                    children: "Project 1",
                                  }),
                                  (0, i.tZ)(n.xu, {
                                    w: "100%",
                                    fontSize: "xs",
                                    children:
                                      "This is a description of the project.",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.tZ)(y, {
                              w: "100%",
                              bg: "gray.700",
                              p: 2,
                              rounded: "sm",
                              variants: {
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: -10 },
                              },
                              children: (0, i.BX)(n.gC, {
                                children: [
                                  (0, i.tZ)(n.xu, {
                                    w: "100%",
                                    fontWeight: "bold",
                                    children: "Project 2",
                                  }),
                                  (0, i.tZ)(n.xu, {
                                    w: "100%",
                                    fontSize: "xs",
                                    children:
                                      "This is a description of the project.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.tZ)(n.xu, {
                      fontSize: "sm",
                      bg: "gray.900",
                      p: 4,
                      rounded: "sm",
                      children:
                        "Next.js takes the JSON response from the server and generates HTML for the page. Once the HTML has been generated, it is rendered on the browser.",
                    }),
                    (0, i.tZ)(a.zx, {
                      w: "full",
                      bg: "blue.600",
                      size: "sm",
                      rounded: "sm",
                      onClick: function () {
                        return t(0);
                      },
                      leftIcon: (0, i.tZ)(u.a0h, {}),
                      children: "Play again",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    1600: function (e, r, t) {
      var i = t(3312),
        n = t(9207);
      t(5473);
      r.Z = function (e) {
        var r = e.children;
        return (0, i.tZ)(n.xu, {
          w: "100%",
          bg: "gray.900",
          p: 2,
          rounded: "sm",
          fontSize: "sm",
          mb: 8,
          borderWidth: 1,
          borderColor: "gray.700",
          children: r,
        });
      };
    },
  },
]);

(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, "static/chunks/pages/index-d6618abc71e95015.js"],
    "/404": [s, "static/chunks/pages/404-829ee71a46ca4236.js"],
    "/_error": ["static/chunks/pages/_error-47352606939c992c.js"],
    "/about": [
      "static/chunks/60c830e2-fa7ac315fb520d03.js",
      "static/chunks/71609ba6-1fbbc01d6a5100ce.js",
      s,
      "static/chunks/499-112bc411e210b490.js",
      "static/chunks/pages/about-ed49ae93580367dc.js",
    ],
    "/articles": [s, "static/chunks/pages/articles-907e96ef1b433e09.js"],
    "/articles/[slug]": [
      s,
      "static/chunks/325-47ec824324946c94.js",
      "static/chunks/669-9b11a8e9a071fb62.js",
      "static/chunks/pages/articles/[slug]-c6ae5c031bce71ef.js",
    ],
    "/categories/[slug]": [
      s,
      "static/chunks/pages/categories/[slug]-ae8761e2d714d0a6.js",
    ],
    "/projects": [s, "static/chunks/pages/projects-9333c9fae83fd541.js"],
    "/tags/[slug]": [s, "static/chunks/pages/tags/[slug]-399d2c2a39cfe21c.js"],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/about",
      "/articles",
      "/articles/[slug]",
      "/categories/[slug]",
      "/projects",
      "/tags/[slug]",
    ],
  };
})("static/chunks/207-09abaaa91d7f62b7.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();

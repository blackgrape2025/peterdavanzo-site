const sitemapPlugin = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(sitemapPlugin, {
    sitemap: {
      hostname: "https://peterdavanzo.com"
    }
  });
};
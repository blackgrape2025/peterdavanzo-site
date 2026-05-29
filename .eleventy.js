module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("background.jpg");
eleventyConfig.addFilter("readableDate", function(dateObj) {
  return new Date(dateObj).toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
});
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};

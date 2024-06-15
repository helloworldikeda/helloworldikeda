const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(false);
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  eleventyConfig.addShortcode("protocolswitcher", () => { return process.env.ENVIRONMENT === "production" ? '<script> location.protocol === "http:" ? location.replace(window.location.href.replace("http:", "https:")</script>':""});

  return {
    dir: {
      input: "src",
      output: "public"
    },
    
    htmlTemplateEngine: "liquid"
  };
};

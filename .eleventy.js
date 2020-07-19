const fs = require("fs");

module.exports = function (eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('project', 'layouts/project.liquid');
  eleventyConfig.addLayoutAlias('site', 'layouts/site.liquid');

  eleventyConfig.addCollection('projects', collection => {
    return collection.getFilteredByGlob('_projects/*.md');
  });
  eleventyConfig.addCollection('coding', collection => {
    return collection.getFilteredByGlob('_coding/*.md');
  });
  eleventyConfig.addCollection('games', collection => {
    return collection.getFilteredByGlob('_games/*.md');
  });

  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('resources');
  eleventyConfig.addPassthroughCopy('CNAME');

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      includes: "_includes",
      input: "./",
      output: "./_site"
    }
  };
};

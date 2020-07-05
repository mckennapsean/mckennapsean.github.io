module.exports = function(eleventyConfig) {
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

  return {
    dir: {
      includes: "_includes",
      // layouts: "_layouts",
      input: "./",
      output: "./_site"
    }
  };
};

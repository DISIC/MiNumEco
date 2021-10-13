const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdown = require('markdown-it')({ html: true })

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  
  eleventyConfig.addFilter('markdown', value => {
    return markdown.render(value);
  })

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'}).setLocale("fr").toFormat("dd/LL/yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'Europe/Paris'}).setLocale("fr").toFormat('yyyy-LL-dd');
  });

  function findNavigationEntriesExtended(nodes = [], key = '') {
    let pages = [];
    for(let entry of nodes) {
      if(entry.data && entry.data.eleventyNavigation) {
        let nav = entry.data.eleventyNavigation;
        if(!key && !nav.parent || nav.parent === key) {
          pages.push(Object.assign({}, nav, {
            url: nav.url || entry.data.page.url,
            data: entry.data,
            pluginType: 'eleventy-navigation'
          }, key ? { parentKey: key } : {}));
        }
      }
    }
  
    return pages.sort(function(a, b) {
      return (a.order || 0) - (b.order || 0);
    }).map(function(entry) {
      if(!entry.title) {
        entry.title = entry.key;
      }
      if(entry.key) {
        entry.children = findNavigationEntriesExtended(nodes, entry.key);
      }
      return entry;
    });
  }

  eleventyConfig.addNunjucksFilter('eleventyNavigationExtended', findNavigationEntriesExtended);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("docs");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@gouvfr/dsfr/dist/css/dsfr.min.css": "css/dsfr.min.css",
    "node_modules/@gouvfr/dsfr/dist/js/dsfr.module.min.js": "js/dsfr.module.min.js",
    "node_modules/@gouvfr/dsfr/dist/fonts": "fonts",
    "node_modules/@gouvfr/dsfr/dist/favicons": "favicons",
    "CNAME": "CNAME",
    ".well-known/pki-validation/01a55d39-ad7f-4bd3-badc-bbf5f725da7b.txt": ".well-known/pki-validation/01a55d39-ad7f-4bd3-badc-bbf5f725da7b.txt"
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

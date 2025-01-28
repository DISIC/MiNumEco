const { DateTime } = require("luxon");
const { nanoid } = require("nanoid");

const markdownIt = require("markdown-it");
const markdown = require("markdown-it")({ html: true });
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require("@codegouvfr/eleventy-plugin-i18n");
const pluginCalendar = require("@codegouvfr/eleventy-plugin-calendar");

const customMarkdownContainers = require("./markdown-custom-containers");

const { translations } = require("./_data/i18n");

const normalizeString = (str) => {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9\- ]/g, "")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/--+/g, "-");
};

module.exports = function (eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
		"./node_modules/@gouvfr/dsfr/dist/favicon": "/favicon",
		"./node_modules/@gouvfr/dsfr/dist/fonts": "/css/fonts",
		"./node_modules/@gouvfr/dsfr/dist/icons": "/css/icons",
		"./node_modules/@gouvfr/dsfr/dist/dsfr.min.css": "/css/dsfr.min.css",
		"./node_modules/@gouvfr/dsfr/dist/utility/utility.min.css":
			"/css/utility/utility.min.css",
		"./node_modules/@gouvfr/dsfr/dist/dsfr.module.min.js":
			"/js/dsfr.module.min.js",
		"./node_modules/@gouvfr/dsfr/dist/dsfr.nomodule.min.js":
			"/js/dsfr.nomodule.min.js",
		"./node_modules/@gouvfr/dsfr/dist/artwork": "/artwork",
		"./content/fr/docs": "/docs",
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(require("./eleventy.config.drafts.js"));
	eleventyConfig.addPlugin(require("./eleventy.config.i18n.js"));
	eleventyConfig.addPlugin(require("./eleventy.config.images.js"));
	eleventyConfig.addPlugin(require("./eleventy.config.pagination.js"));

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginBundle);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "fr",
		errorMode: "allow-fallback",
	});
	eleventyConfig.addPlugin(i18n, {
		translations,
		defaultLanguage: "fr",
		// fallbackLocales: {
		// 	en: "fr",
		// },
	});
	eleventyConfig.addPlugin(pluginCalendar);

	eleventyConfig.addCollection("allSortedByPathAsc", function (collectionApi) {
		return collectionApi.getAll().sort((a, b) => {
			return a.inputPath.localeCompare(b.inputPath);
		});
	});

	eleventyConfig.addCollection("parSeries", function (collectionApi) {
		let series = {};

		collectionApi.getAll().forEach((item) => {
			let serie = item.data.series;

			if (serie) {
				if (!series[serie]) {
					series[serie] = [];
				}
				series[serie].push(item);
			}
		});

		return series;
	});

	eleventyConfig.addTransform("addAnchorsToHeadings", (content, outputPath) => {
		if (outputPath && outputPath.endsWith(".html")) {
			const layoutMatch = content.match(
				/<script type="application\/json" id="layout-data">\s*({.*?})\s*<\/script>/
			);
			const layout = layoutMatch ? JSON.parse(layoutMatch[1]).layout : null;

			if (layout === "layouts/page-with-summary.njk") {
				return content.replace(
					/<h2(.*?)>(.*?)<\/h2>/g,
					(match, attrs, text) => {
						const id = normalizeString(text);
						if (!attrs.includes('id="')) {
							return `<h2 id="${id}"${attrs}>${text}</h2>`;
						}
						return match;
					}
				);
			}
		}
		return content;
	});

	// Filters
	eleventyConfig.addFilter(
		"jsDateObject",
		function jsDateObject(dateStr, format, zone) {
			return DateTime.fromFormat(dateStr, format || "yyyy-LL-dd", {
				zone: zone || "utc",
			}).toJSDate();
		}
	);

	eleventyConfig.addFilter(
		"readableDate",
		function readableDate(dateObj, format, zone) {
			// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
			return DateTime.fromJSDate(dateObj, { zone: zone || "utc" })
				.setLocale(this.page.lang)
				.toFormat(format || "dd LLLL yyyy");
		}
	);

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("getYear", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).year;
	});
	eleventyConfig.addFilter("getMonth", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).month;
	});
	eleventyConfig.addFilter("getDay", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).day;
	});
	eleventyConfig.addFilter("getHour", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).hour;
	});
	eleventyConfig.addFilter("getMinute", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).minute;
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", (collection) => {
		let tagSet = new Set();
		for (let item of collection) {
			(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter(
		"filterTagList",
		function filterTagList(tags, addTags = []) {
			return (tags || []).filter(
				(tag) =>
					["all", "nav", "post", "posts", "events"]
						.concat(addTags)
						.indexOf(tag) === -1
			);
		}
	);

	eleventyConfig.addFilter(
		"findBySlug",
		function find(collection = [], slug = "") {
			return collection.find((post) => post.fileSlug === slug);
		}
	);

	eleventyConfig.addFilter("series", function (posts, series) {
		return posts.filter((post) => post.data.series === series);
	});

	eleventyConfig.addFilter("noSeries", function(posts) {
    return posts.filter(post => !post.data.series);
  });

	eleventyConfig.addFilter("limit", function (arr, limit) {
		return arr.slice(0, limit);
	});

	eleventyConfig.addFilter("extractHeadings", (content) => {
		const regex = /<h2.*?>(.*?)<\/h2>/g;
		let match;
		let menuItems = [];

		while ((match = regex.exec(content)) !== null) {
			const title = match[1];
			const id = normalizeString(title);
			menuItems.push(
				`<li class="fr-sidemenu__item"><a class="fr-sidemenu__link" href="#${id}">${title}</a></li>`
			);
		}
		return `<ul class="fr-sidemenu__list">${menuItems.join("")}</ul>`;
	});

	eleventyConfig.addFilter("getPostsForYear", function (posts, year) {
		if (!posts) return [];
		return posts.filter(function (post) {
			return post.date.getFullYear() === year;
		});
	});

	// Filter to get unique years from posts
	eleventyConfig.addFilter("getYears", function (posts) {
		if (!posts) return [];
		var years = [];
		for (var i = 0; i < posts.length; i++) {
			var year = posts[i].date.getFullYear();
			if (years.indexOf(year) === -1) {
				years.push(year);
			}
		}
		return years.sort(function (a, b) {
			return b - a;
		});
	});

	eleventyConfig.addFilter("isFutureDate", function(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const itemDate = new Date(dateString);
    return itemDate >= today;
  });

	// Customize Markdown library settings:
	// eleventyConfig.amendLibrary("md", (mdLib) => {
	// 	mdLib.use(markdownItAnchor, {
	// 		permalink: markdownItAnchor.permalink.ariaHidden({
	// 			placement: "after",
	// 			class: "header-anchor",
	// 			symbol: "#",
	// 			ariaHidden: false,
	// 		}),
	// 		level: [1, 2, 3, 4],
	// 		slugify: eleventyConfig.getFilter("slugify"),
	// 	});
	// });

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.renderer.rules.table_open = function (tokens, idx) {
			return '<table class="fr-table">';
		};
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAttrs);
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(
			markdownItContainer,
			"callout",
			customMarkdownContainers.callout(mdLib)
		);
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(
			markdownItContainer,
			"quote",
			customMarkdownContainers.quote(mdLib)
		);
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(
			markdownItContainer,
			"alert",
			customMarkdownContainers.alert(mdLib)
		);
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(
			markdownItContainer,
			"accordion",
			customMarkdownContainers.accordion(mdLib)
		);
	});

	// Automatically strip all leading or trailing whitespace
	// to prevent Markdown lib from rendering with wrapping into paragraphs
	// instead of using Nunjucks special syntax. Learn more:
	// https://mozilla.github.io/nunjucks/templating.html#whitespace-control
	eleventyConfig.setNunjucksEnvironmentOptions({
		trimBlocks: true,
		lstripBlocks: true,
	});

	eleventyConfig.addNunjucksGlobal("nanoid", () => nanoid());

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	eleventyConfig.addShortcode("dailymotion", function (videoId) {
		const thumbnailUrl = `https://www.dailymotion.com/thumbnail/video/${videoId}`;
		return `
			<div
				class="responsive-video-container"
				data-video-id="${videoId}"
				style="background-image: url('${thumbnailUrl}'); background-size: cover; background-position: center; cursor: pointer;">
				<div class="dailymotion-placeholder">
					<button class="play-button">▶ Cliquez pour lire la vidéo</button>
				</div>
			</div>
		`;
	});

	eleventyConfig.addPairedShortcode("transcription", function (content, title) {
		return `
		<div class="fr-transcription">
			<button
				class="fr-transcription__btn"
				aria-expanded="true"
				aria-controls="fr-transcription-collapse"
				data-fr-js-collapse-button="true"
			>
				Transcription
			</button>
			<div
				class="fr-collapse fr-collapse--expanded"
				id="fr-transcription-collapse"
				data-fr-js-collapse="true"
				style="--collapse-max-height: none; --collapse: -210px"
			>
				<div class="fr-transcription__footer">
					<div class="fr-transcription__actions-group">
						<button
							class="fr-btn--fullscreen fr-btn"
							aria-controls="fr-transcription-modal"
							aria-label="Agrandir la transcription"
							data-fr-opened="false"
							id="button-2150"
							data-fr-js-modal-button="true"
						>
							Agrandir
						</button>
					</div>
				</div>
				<div
					id="fr-transcription-modal"
					class="fr-modal"
					aria-labelledby="fr-transcription-modal-title"
					data-fr-js-modal="true"
				>
					<div class="fr-container fr-container--fluid fr-container-md">
						<div class="fr-grid-row fr-grid-row--center">
							<div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
								<div
									class="fr-modal__body"
									data-fr-js-modal-body="true"
									style="--modal-max-height: 719px"
								>
									<div class="fr-modal__header">
										<button
											class="fr-btn--close fr-btn"
											aria-controls="fr-transcription-modal"
											id="button-2151"
											title="Fermer"
											data-fr-js-modal-button="true"
										>
											Fermer
										</button>
									</div>
									<div class="fr-modal__content">
										<h1
											id="fr-transcription-modal-title"
											class="fr-modal__title"
										>
											${title}
										</h1>
										<div>
											${content}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    `;
	});

	// OLD CODE
	function findNavigationEntriesExtended(nodes = [], key = "") {
		let pages = [];
		for (let entry of nodes) {
			if (entry.data && entry.data.eleventyNavigation) {
				let nav = entry.data.eleventyNavigation;
				if ((!key && !nav.parent) || nav.parent === key) {
					pages.push(
						Object.assign(
							{},
							nav,
							{
								url: nav.url || entry.data.page.url,
								data: entry.data,
								pluginType: "eleventy-navigation",
							},
							key ? { parentKey: key } : {}
						)
					);
				}
			}
		}

		return pages
			.sort(function (a, b) {
				return (a.order || 0) - (b.order || 0);
			})
			.map(function (entry) {
				if (!entry.title) {
					entry.title = entry.key;
				}
				if (entry.key) {
					entry.children = findNavigationEntriesExtended(nodes, entry.key);
				}
				return entry;
			});
	}

	//Old filter
	eleventyConfig.addNunjucksFilter(
		"eleventyNavigationExtended",
		findNavigationEntriesExtended
	);

	function findNavigationEntryByKeys(nodes = [], keys = []) {
		let pages = [];

		for (let key of keys) {
			for (let entry of nodes) {
				if (
					entry.data &&
					entry.data.eleventyNavigation &&
					entry.data.eleventyNavigation.key
				) {
					let entryKey = entry.data.eleventyNavigation.key;

					if (entryKey === key) {
						pages.push({
							title: entry.data.title,
							url: entry.url || entry.data.page.url,
							data: entry.data,
							pluginType: "eleventy-navigation",
						});

						break;
					}
				}
			}
		}

		return pages;
	}

	eleventyConfig.addNunjucksFilter(
		"eleventyNavigationByKeys",
		findNavigationEntryByKeys
	);

	// Parse markdown
	eleventyConfig.addFilter("markdown", (value) => {
		return markdown.render(value);
	});

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: ["md", "njk", "html", "liquid"],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site",
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};

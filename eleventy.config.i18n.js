const { availableLang } = require("./_data/i18n");
const site = require("./_data/data");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("filterCollectionLang", function filterCollectionLang(collection, langOverride) {
        const lang = langOverride || (this.page && this.page.lang) || site.defaultLang;

        return collection.filter(entry => {
            const entryLang = entry.data && entry.data.lang ? entry.data.lang : site.defaultLang;
            return entryLang === lang;
        });
    });

    eleventyConfig.addGlobalData("availableLang", availableLang);
};

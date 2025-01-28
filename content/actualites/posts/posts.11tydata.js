module.exports = {
    tags: [
        "posts"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/actualites/${data.page.fileSlug}/`;
    }
};

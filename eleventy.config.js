import { DateTime } from "luxon";

export default function (eleventyConfig) {
	// Date format filter
	eleventyConfig.addFilter("postDate", (dateObj) =>
		DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
	);

	// Copy static files to output folder
	eleventyConfig.addPassthroughCopy({ "./src/assets": "assets" });
	eleventyConfig.addPassthroughCopy({ "./src/css": "css" });

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		templateFormats: ["md", "njk", "html"],
	};
}

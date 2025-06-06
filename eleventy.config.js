import { DateTime } from "luxon";

export default async function (eleventyConfig) {
	eleventyConfig.addFilter("postDate", (dateObj) =>
		DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
	);

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
}

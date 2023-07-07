import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
	endpoint: "https://iprc.cdn.prismic.io/api/v2",
});

export default prismic;

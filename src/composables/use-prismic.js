import { useSinglePrismicDocument } from "@prismicio/vue";

const {
	data: document,
	state,
	error,
	refresh,
} = useSinglePrismicDocument("global");
console.log(document, state, error, refresh);

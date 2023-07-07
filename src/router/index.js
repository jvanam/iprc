import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		document.getElementById("app").scrollIntoView();
	},
});
export default router;
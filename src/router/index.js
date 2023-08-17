import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Appointments from "/src/views/Appointments.vue";
import Space from "/src/views/Space.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/appointments",
		name: "Appointments",
		component: Appointments,
	},
	{
		path: "/space",
		name: "Space",
		component: Space,
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

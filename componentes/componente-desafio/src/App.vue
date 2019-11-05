<template>
	<v-app>
		<main-menu />
		<toolbar />
		<carousel />
		<main-footer />
	</v-app>
</template>

<script>
	import menu from "./Menu";
	import toolbar from "./ToolBar";
	import carousel from "./Carousel";
	import footer from "./Footer";
export default {
	components: {
		"main-menu": menu,
		toolbar,
		carousel,
		"main-footer": footer
	}
}
</script>

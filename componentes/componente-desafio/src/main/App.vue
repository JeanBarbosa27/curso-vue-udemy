<template>
	<v-app>
		<main-menu />
		<toolbar />
		<v-content>
			<carousel />
		</v-content>
		<main-footer />
	</v-app>
</template>

<script>
	import menu from "@/components/template/Menu";
	import toolbar from "@/components/template/ToolBar";
	import carousel from "@/components/widgets/Carousel";
	import footer from "@/components/template/Footer";
export default {
	components: {
		"main-menu": menu,
		toolbar,
		carousel,
		"main-footer": footer
	}
}
</script>

<template>
	<v-app>
		<app-menu />
		<app-toolbar />
		<v-content>
			<app-carousel />
		</v-content>
		<app-footer />
	</v-app>
</template>

<script>
	import Menu from "@/components/template/Menu";
	import Toolbar from "@/components/template/ToolBar";
	import Carousel from "@/components/widgets/Carousel";
	import Footer from "@/components/template/Footer";
export default {
	components: {
		appMenu: Menu,
		appToolbar: Toolbar,
		appCarousel: Carousel,
		appFooter: Footer
	}
}
</script>

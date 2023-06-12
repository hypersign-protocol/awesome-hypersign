<script>
import feather from 'feather-icons';
import Button from "../reusable/Button.vue"
export default {
	name: 'Home',
	components: { Button },
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {
		redirect() {
			window.open('https://hypersign.id');
		}
	},
};
</script>

<template>
	<section class="flex flex-col sm:justify-between items-center pt-12">
		<!-- Banner left contents -->
		<div class="w-full md:w-1/1 text-center">
			<h1 class="font-general-bold text-3xl md:text-4xl xl:text-7xl text-center sm:text-center text-ternary-light light:text-primary-light uppercase">
				Awesome Hypersign
			</h1>
			<div class="md:w-1/1">
				<p class="font-general-medium text-center mt-1 text-base sm:text-2xl xl:text-4xl text-center sm:text-center leading-none text-gray-400">
					Build your Identity Products using Next Zen <br class="hidden sm:inline"> ID Infra and get featured here
				</p>
			</div>
			<div class="flex justify-center sm:block mt-4">
				<Button
					title="Submit Now"
					class="text-base sm:text-lg lg:text-xl w-36 sm:w-48 font-general-medium bg-hypersign-theme hover:bg-white hover:text-gray-800 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
					@click="redirect()"
					aria-label="Build now Button"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped></style>

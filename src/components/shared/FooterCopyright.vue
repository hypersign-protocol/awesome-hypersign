<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Awesome Hypersign',
			author: 'Hypersign',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-light light:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				class="font-general-medium light:hover:text--300 duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://hypersign.id"
				target="__blank"
				class="font-general-medium hover:underline hover:text-hypersign-theme light:hover:text--300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

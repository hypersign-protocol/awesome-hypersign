<script>
export default {
	props: ['showModal', 'isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="mt-5 sm:mt-3 sm:flex p-5 sm:p-0 text-right  shadow-lg sm:shadow-none"
	>
		<router-link
			to="/live-projects"
			exact
			class="font-general-semibold block text-left text-lg font-medium text-primary-light light:text-ternary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
			aria-label="About Me"
			exact-active-class="active-link"
			>
			Live Projects
			</router-link>

			<router-link
			to="/hacks"
			class="font-general-semibold block text-left text-lg font-medium text-primary-light light:text-ternary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
		>hacks</router-link>		
	</div>
</template>

<style lang="scss" scoped></style>

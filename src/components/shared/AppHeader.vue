<script>
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';

export default {
	components: {
		AppHeaderLinks,		
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/"
						>
						<img src="@/assets/images/hypersign_white_rect.png" class="logo" alt="Light Logo" />

					</router-link>
				</div>

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="focus:outline-none"
						aria-label="Hamburger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-light light:text-ternary-light"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header right section buttons -->
			<div
				class="sm:flex justify-between items-center flex-col md:flex-row"
			>
				<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />
			</div>
		</div>		
	</nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
.logo {
		width: 250px;
		height: 70px;
	}
@media screen and (max-width: 768px) {
	.logo {
		width: auto;
		height: 50px;
	}
}
</style>

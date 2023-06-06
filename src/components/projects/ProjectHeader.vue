<script>
export default {
	props: ['singleProjectHeader'],
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
		>
			{{ singleProjectHeader.title }}
		</p>
		<div>
			<img :src="singleProjectHeader.img" class="w-50" alt="">
		</div>
		<div class="flex mt-5">
			<div class="flex items-center mr-10">
				<i
					data-feather="user"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					v-for="(user,index) in singleProjectHeader.contributers"
					:key="index"
					> {{ index > 0 ? ', ' : '' }}{{ user }}</span
				>
			</div>
			<!-- <div class="flex items-center">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
				v-for="(tag,index) in singleProjectHeader.tags"
				:key="index"
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ tag  }}</span
				>
			</div> -->
		</div>
	</div>
</template>

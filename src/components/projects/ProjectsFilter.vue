<script>
export default {
	props: {
		select: {
			type: String,
			default: 'projects',
			required: true,
		},
		selectOptions: {
			type: Array,
			default: () => [
				'DID',
				'DAO',
				'VC',
				'ZKP',
				'NFT',
				'GameID',
				'Cross-Chain',
				'Health',
				'Defi',
				'DNS'				
			],
		},
	},
};
</script>

<template>
	<select
		@change="$emit('filter', $event.target.value)"
		:name="select"
		:id="select"
		class="font-general-medium
		pl-3
		pr-1
		sm:px-4
		py-2
		border-transparent
		rounded-lg
		text-sm
		sm:text-md
		bg-secondary-dark
		dark:bg-ternary-dark
		text-primary-light
		dark:text-ternary-light
		outline-none"
	>
		<option value class="text-sm sm:text-md">All Projects</option>
		<option
			v-for="option in selectOptions"
			:key="option"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped></style>

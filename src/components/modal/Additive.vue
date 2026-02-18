<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
})
</script>

<template>
	<div
		class="flex justify-between w-92 items-center mx-auto rounded-xl py-4 px-4 font-semibold shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
	>
		<span>{{ title }}</span>
		<button
			class="w-26 px-4 py-1.5 rounded-xl cursor-pointer shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
		>
			+ {{ price }} руб
		</button>
	</div>
</template>

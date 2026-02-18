<script setup>
const props = defineProps({
	basket: Object,
})
</script>

<template>
	<div
		class="flex max-w-96 mx-auto px-4 py-6 rounded-xl items-center shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
	>
		<div><img class="w-22" :src="`${basket.img}`" alt="" /></div>
		<div class="flex flex-col pl-4 pr-7">
			<p class="font-menium text-xl">{{ basket.title }}</p>
			<span class="text-xs pt-1.5 pb-1">{{ basket.description }}</span>
			<span class="text-xs font-light">{{ basket.volume }} мл</span>
		</div>
		<div class="flex flex-col gap-y-4">
			<span class="font-semibold text-center">{{ basket.price }} руб</span>
			<div
				class="flex justify-between rounded-sm w-21 h-7 text-xl shadow-[0_1px_4px_0_rgba(0,0,0,0.46)] bg-[#fcfcfc] px-2"
			>
				<button>–</button>
				<span>1</span>
				<button>+</button>
			</div>
		</div>
	</div>
</template>

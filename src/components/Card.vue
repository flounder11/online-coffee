<script setup>
import { useBasketStore } from '../stores/BasketStore'
import { useModalStore } from '../stores/ModalStore'
const basketStore = useBasketStore()
const modalStore = useModalStore()

const props = defineProps({
	card: Object,
})

const addToBasket = item => {
	basketStore.addToBasket(item)
}
</script>

<template>
	<div class="px-4 pt-6 pb-4 w-46 rounded-2xl bg-gray-50">
		<div @click="modalStore.openModal(props.card)">
			<p class="font-semibold mb-5 text-xl">{{ card.title }}</p>
			<img class="mx-auto max-w-30 mb-3" :src="`${card.img}`" alt="" />
			<!-- <img class="mx-auto max-w-30 mb-3" src="/src/assets/coffee.png" alt="" /> -->
			<div class="flex justify-between items-center mb-4">
				<span class="text-base font-semibold">{{ card.price }} руб</span>
				<span class="text-xs font-light">{{ card.volume }} мл</span>
			</div>
		</div>
		<button
			@click="addToBasket(props.card)"
			class="text-sm font-normal px-10 py-1.5 border border-gray-400 rounded-xl cursor-pointer"
		>
			Добавить
		</button>
	</div>
</template>

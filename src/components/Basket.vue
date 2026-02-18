<script setup>
import Card from './Card.vue'
import BasketCard from './BasketCard.vue'
import { useBasketStore } from '../stores/BasketStore'
const basketStore = useBasketStore()

const emit = defineEmits(['close'])
const closeModal = () => {
	emit('close')
}

import { useCardStore } from '../stores/CardStore'
const cardStore = useCardStore()
</script>

<template>
	<div class="fixed inset-0 z-10 bg-black/80 flex justify-end flex-col">
		<div class="bg-white rounded-t-3xl min-h-[85vh]">
			<img
				@click="closeModal"
				class="w-4 ml-auto mr-5 pt-4 cursor-pointer"
				src="/src/assets/close.svg"
				alt="X"
			/>
			<p class="font-semibold text-2xl text-center mb-8">Корзина</p>
			<div class="flex flex-col gap-y-6 mb-8">
				<div v-for="item in basketStore.basket" :key="item.id">
					<BasketCard :basket="item" />
				</div>
			</div>

			<span class="ml-6 font-medium">Что-то еще?</span>
			<div class="grid grid-cols-2 gap-5 mx-auto w-fit mt-5 mb-7">
				<div
					v-for="card in cardStore.cards.slice(0, 2)"
					:key="card.id"
					class="rounded-xl shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
				>
					<Card :card="card" />
				</div>
			</div>

			<div>
				<button
					@click="basketStore.makeOrder"
					class="flex justify-between w-96 rounded-xl mx-auto bg-gray-900 px-6 py-4 mb-11 text-gray-50 font-semibold text-xl"
				>
					<span>Оформить заказ</span>
					<span>{{ basketStore.totalAmount }} руб</span>
				</button>
			</div>
		</div>
	</div>
</template>

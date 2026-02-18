<script setup>
import { useCardStore } from '../stores/CardStore'
import { useModalStore } from '../stores/ModalStore'
import { useBasketStore } from '../stores/BasketStore'
import Card from './Card.vue'
import ModalCard from './ModalCard.vue'
import Basket from './Basket.vue'

const cardStore = useCardStore()
const modalStore = useModalStore()
const basketStore = useBasketStore()

cardStore.getCards()
cardStore.getAdditives()

// () => {
// 	cardStore.getRandAdditives()
// }
</script>

<template>
	<div class="relative min-h-screen">
		<div class="grid grid-cols-2 gap-5 mx-auto w-fit">
			<div v-for="card in cardStore.cards" :key="card.id">
				<Card :card="card" />
			</div>

			<ModalCard
				v-if="modalStore.isModalOpen"
				:item="modalStore.selectedCard"
				:show="modalStore.isModalOpen"
				@close="modalStore.closeModal"
			/>
			<Basket
				v-if="modalStore.isBasketOpen"
				:show="modalStore.isBasketOpen"
				@close="modalStore.closeModal"
			/>
		</div>
		<button
			@click="modalStore.openBasket"
			v-if="basketStore.totalAmount != 0"
			class="flex rounded-4xl bg-white py-3 px-5 sticky bottom-5 right-4 ml-auto items-center gap-x-2 shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
		>
			<img class="w-6" src="/src/assets/shopping-basket.png" alt="" />
			<span class="font-semibold">{{ basketStore.totalAmount }} р</span>
		</button>
	</div>
</template>

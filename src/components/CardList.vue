<script setup>
import Card from './Card.vue'
import { useCardStore } from '../stores/CardStore'
import { useModalStore } from '../stores/ModalStore'
import ModalCard from './ModalCard.vue'

const cardStore = useCardStore()
const modalStore = useModalStore()

cardStore.getCards()
cardStore.getAdditives()

// () => {
// 	cardStore.getRandAdditives()
// }
</script>

<template>
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
	</div>
</template>

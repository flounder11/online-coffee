import { defineStore } from 'pinia'
import { useCardStore } from './CardStore'
import { ref } from 'vue'

export const useModalStore = defineStore('modalStore', () => {
	const cardStore = useCardStore()

	const isModalOpen = ref(false)
	const selectedCard = ref(null)

	const openModal = card => {
		isModalOpen.value = true
		selectedCard.value = card
	}

	const closeModal = () => {
		isModalOpen.value = false
		selectedCard.value = null
		cardStore.finalAdditives = []
	}

	return {
		isModalOpen,
		selectedCard,
		openModal,
		closeModal,
	}
})

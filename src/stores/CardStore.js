import { defineStore } from 'pinia'
import { ref } from 'vue'

const getCardsUrl = 'http://localhost:3000/api/products'
const getAdditivesUrl = 'http://localhost:3000/api/additives'

export const useCardStore = defineStore('cardStore', () => {
	const cards = ref([])
	const additives = ref([])
	const additivesLength = ref(0)
	const finalAdditives = ref([])

	const getCards = async () => {
		const res = await fetch(`${getCardsUrl}`)
		const data = await res.json()
		console.log('кофе', data)
		cards.value = data
	}

	const getAdditives = async () => {
		const res = await fetch(`${getAdditivesUrl}`)
		const data = await res.json()
		console.log('добавки', data)
		additives.value = data

		additivesLength.value = data.length

		// callback(data)
	}

	const getRandAdditives = () => {
		for (let i = 0; i < 3; i++) {
			const randIdx = Math.floor(Math.random() * 7)
			finalAdditives.value.push(additives.value[randIdx])
		}
		// console.log('Ранд добавка', finalAdditives.value)
	}

	const clearAdditives = () => {
		finalAdditives.value = []
	}

	return {
		cards,
		getCards,
		additives,
		getAdditives,
		finalAdditives,
		getRandAdditives,
		clearAdditives,
	}
})

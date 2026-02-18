import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBasketStore = defineStore('basketStore', () => {
	const basket = ref([])

	const addToBasket = item => {
		basket.value.push(item)
		console.log('товары в корзине', basket.value)
	}

	return {
		basket,
		addToBasket,
	}
})

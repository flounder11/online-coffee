import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useModalStore } from './ModalStore'

const getBasketUrl = 'http://localhost:3000/api/cart'

export const useBasketStore = defineStore('basketStore', () => {
	const modalStore = useModalStore()
	const basket = ref([])
	const totalAmount = ref(0)

	const addToBasket = item => {
		basket.value.push(item)
		totalAmount.value += item.price
		console.log('товары в корзине', basket.value)
	}

	const makeOrder = async () => {
		const orderData = {
			items: basket.value.map(item => ({
				productId: item.id,
				quantity: item.quantity || 1,
				additives: item.additives || [],
			})),
			total: totalAmount.value,
		}
		try {
			const res = await fetch(`${getBasketUrl}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			})
			modalStore.closeModal()
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	return {
		basket,
		addToBasket,
		totalAmount,
		makeOrder,
	}
})

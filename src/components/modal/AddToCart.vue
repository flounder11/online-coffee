<script setup>
import { useBasketStore } from '../../stores/BasketStore'
import { useModalStore } from '../../stores/ModalStore'
import { useCardStore } from '../../stores/CardStore'

const basketStore = useBasketStore()
const cardStore = useCardStore()
const modalStore = useModalStore()

const props = defineProps(['item'])
console.log(props.item)

const addToBasket = item => {
	basketStore.addToBasket(item)
	modalStore.closeModal()
}
</script>

<template>
	<div class="w-fit mx-auto cursor-pointer">
		<button
			@click="addToBasket(props.item)"
			class="w-xs rounded-xl bg-black text-gray-50 mb-13 py-4 px-9"
		>
			Добавить в корзину
		</button>
	</div>
</template>

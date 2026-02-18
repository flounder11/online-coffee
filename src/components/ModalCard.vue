<script setup>
import Additive from './modal/Additive.vue'
import { useCardStore } from '../stores/CardStore'
import AddToCart from './modal/AddToCart.vue'

const cardStore = useCardStore()

cardStore.getRandAdditives()
const additives = cardStore.finalAdditives

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['close'])
const closeModal = () => {
	emit('close')
}
</script>

<template>
	<div class="fixed inset-0 z-10 bg-black/80 flex justify-end flex-col">
		<div class="bg-white rounded-t-3xl">
			<img
				@click="closeModal"
				class="w-4 ml-auto mr-5 pt-4 mb-7 cursor-pointer"
				src="/src/assets/close.svg"
				alt="X"
			/>

			<div
				class="w-92 rounded-xl pt-10 pb-8 px-7 mx-auto shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
			>
				<div class="flex justify-between mb-10">
					<!-- <img :src="`${card.img}`" alt="" /> -->
					<img class="h-32 w-40" :src="`${item.img}`" alt="" />
					<div class="flex flex-col gap-y-3">
						<p class="text-xl font-semibold">{{ item.title }}</p>
						<!-- <span class="font-normal text-xs w-32"
							>Кофейный напиток добавлением подогретого молока.</span
						> -->
						<span class="font-normal text-xs w-32">{{ item.description }}</span>
					</div>
				</div>

				<div class="flex justify-between items-center">
					<div class="w-40">
						<div class="flex justify-between items-center">
							<span class="font-semibold text-base">{{ item.price }} руб</span>
							<span class="text-xs font-light">{{ item.volume }} мл</span>
						</div>
						<!-- <div class="flex justify-between items-center">
							<span class="font-semibold text-base">160 руб</span>
							<span class="text-xs font-light">300мл</span>
						</div> -->
					</div>

					<div
						class="flex justify-between rounded-sm w-21 h-7 text-xl shadow-[0_1px_4px_0_rgba(0,0,0,0.46)] bg-[#fcfcfc] px-2"
					>
						<button>–</button>
						<span>1</span>
						<button>+</button>
					</div>
				</div>
			</div>

			<p class="text-center text-base my-6 font-medium">Добавки</p>

			<div class="flex flex-col gap-y-7 mb-11">
				<div v-for="item in additives" :key="item.id">
					<Additive :title="item.title" :price="item.price" />
				</div>
			</div>

			<AddToCart :item="item" />
		</div>
	</div>
</template>

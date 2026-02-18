<script setup>
import Card from './Card.vue'
import { useCardStore } from '../stores/CardStore'
const cardStore = useCardStore()
</script>

<template>
	<div
		class="fixed inset-0 z-10 bg-black/80 flex justify-end flex-col overflow-hidden"
	>
		<div class="bg-white rounded-t-3xl">
			<img
				@click="closeModal"
				class="w-4 ml-auto mr-5 pt-4 cursor-pointer"
				src="/src/assets/close.svg"
				alt="X"
			/>
			<p class="font-semibold text-2xl text-center mb-8">Корзина</p>
			<div class="flex flex-col gap-y-6 mb-8">
				<div
					class="flex max-w-96 mx-auto px-4 py-6 rounded-xl items-center shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
				>
					<div><img class="w-22" src="/src/assets/coffee.png" alt="" /></div>
					<div class="flex flex-col pl-4 pr-7">
						<p class="font-menium text-xl">Капучино</p>
						<span class="text-xs pt-1.5 pb-1">Карамельный сироп</span>
						<span class="text-xs font-light">300 мл</span>
					</div>
					<div class="flex flex-col gap-y-4">
						<span class="font-semibold text-center">180 руб</span>
						<div
							class="flex justify-between rounded-sm w-21 h-7 text-xl shadow-[0_1px_4px_0_rgba(0,0,0,0.46)] bg-[#fcfcfc] px-2"
						>
							<button>–</button>
							<span>1</span>
							<button>+</button>
						</div>
					</div>
				</div>

				<div
					class="flex max-w-96 mx-auto px-4 py-6 rounded-xl items-center shadow-[0_3px_11px_3px_rgba(119,114,176,0.3)]"
				>
					<div><img class="w-22" src="/src/assets/coffee.png" alt="" /></div>
					<div class="flex flex-col pl-4 pr-7">
						<p class="font-menium text-xl">Капучино</p>
						<span class="text-xs pt-1.5 pb-1">Карамельный сироп</span>
						<span class="text-xs font-light">300 мл</span>
					</div>
					<div class="flex flex-col gap-y-4">
						<span class="font-semibold text-center">180 руб</span>
						<div
							class="flex justify-between rounded-sm w-21 h-7 text-xl shadow-[0_1px_4px_0_rgba(0,0,0,0.46)] bg-[#fcfcfc] px-2"
						>
							<button>–</button>
							<span>1</span>
							<button>+</button>
						</div>
					</div>
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
					class="flex justify-between w-96 rounded-xl mx-auto bg-gray-900 px-6 py-4 mb-11 text-gray-50 font-semibold text-xl"
				>
					<span>Оформить заказ</span>
					<span>390 руб</span>
				</button>
			</div>
		</div>
	</div>
</template>

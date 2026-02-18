<script setup>
import { ref } from 'vue'
import { useCategoryStore } from '../stores/CategoryStore'

const categoryStore = useCategoryStore()
</script>

<template>
	<div class="max-w-sm w-11/12 mx-auto">
		<div class="py-4 relative">
			<input
				class="bg-white w-full pl-12 pr-3 pt-3 pb-3 rounded-3xl font-medium text-sm text-gray-600 outline-0"
				type="text"
				placeholder="Найти"
			/>
			<img
				src="/src/assets/search.svg"
				alt=""
				class="absolute left-4 top-1/2 -translate-y-1/2"
			/>
		</div>
		<nav
			class="flex items-center justify-between mr-3 pb-4 text-gray-50 text-sm"
		>
			<span
				v-for="category in categoryStore.categories"
				:key="category.id"
				@click="categoryStore.selectCategory(category.id)"
				:class="[
					category.isActive
						? 'p-3 rounded-3xl bg-gray-50 text-gray-900 cursor-pointer'
						: 'cursor-pointer',
				]"
				>{{ category.name }}</span
			>
		</nav>
	</div>
</template>

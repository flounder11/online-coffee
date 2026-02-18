import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCategoryStore = defineStore('categoryStore', () => {
	const categories = ref([
		{ id: 'popular', name: 'Популярное', isActive: true },
		{ id: 'drinks', name: 'Напитки', isActive: false },
		{ id: 'bakery', name: 'Выпечка', isActive: false },
		{ id: 'stock', name: 'Акции', isActive: false },
	])

	const selectCategory = id => {
		categories.value.forEach(category => {
			category.isActive = false
		})

		const selectedCategory = categories.value.find(
			category => category.id === id,
		)
		if (selectedCategory) {
			selectedCategory.isActive = true
		}
	}

	return {
		categories,
		selectCategory,
	}
})

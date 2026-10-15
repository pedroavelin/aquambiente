import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import solutionNotesUrl from '@/bd/notas_solucoes.md?url'
import { parseSolutionNotes, type Solution } from '@/solutions'

export const useSolutionsStore = defineStore('solutions', () => {
  const solutions = ref<Solution[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function loadSolutions () {
    if (solutions.value.length > 0 || loading.value) {
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await axios.get<string>(solutionNotesUrl, { responseType: 'text' })
      const loadedSolutions = parseSolutionNotes(response.data)

      if (loadedSolutions.length === 0) {
        throw new Error('Não foi possível carregar as soluções.')
      }

      solutions.value = loadedSolutions
    } catch (loadError) {
      error.value = loadError instanceof Error
        ? loadError.message
        : 'Não foi possível carregar as soluções.'
    } finally {
      loading.value = false
    }
  }

  return { solutions, loading, error, loadSolutions }
})

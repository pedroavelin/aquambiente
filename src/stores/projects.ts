import axios from 'axios'
import { defineStore } from 'pinia'
import projectNotesUrl from '@/bd/notas.md?url'
import { parseProjectNotes, type Project } from '@/projects'

const storageKey = 'aquambiente:projects:v2'

function isProjectList(value: unknown): value is Project[] {
  return Array.isArray(value) && value.length > 0 && value.every((project) =>
    typeof project.id === 'number'
    && typeof project.title === 'string'
    && typeof project.activity === 'string'
    && typeof project.description === 'string'
    && typeof project.image === 'string'
    && Array.isArray(project.tags),
  )
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async loadProjects() {
      if (this.projects.length || this.loading) return

      let storage: Storage | null = null
      try {
        storage = typeof window === 'undefined' ? null : window.sessionStorage
      } catch {
        storage = null
      }

      if (storage) {
        try {
          const cached = storage.getItem(storageKey)
          if (cached) {
            const projects: unknown = JSON.parse(cached)
            if (isProjectList(projects)) {
              this.projects = projects
              return
            }
            storage.removeItem(storageKey)
          }
        } catch {}
      }

      this.loading = true
      this.error = null

      try {
        const response = await axios.get<string>(projectNotesUrl, { responseType: 'text' })
        const projects = parseProjectNotes(response.data)

        if (!projects.length) throw new Error('Não foi possível carregar os projectos.')

        this.projects = projects
        try {
          storage?.setItem(storageKey, JSON.stringify(projects))
        } catch {
          this.error = 'Os projectos foram carregados, mas não foi possível guardá-los nesta sessão.'
        }
      } catch (error) {
        this.error = error instanceof Error
          ? error.message
          : 'Não foi possível carregar os projectos.'
      } finally {
        this.loading = false
      }
    },
  },
})
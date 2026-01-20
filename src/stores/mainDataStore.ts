import { defineStore } from 'pinia'

import shipsData from '@/data/ships.json'
import cruisesData from '@/data/cruises.json'
import teamData from '@/data/team.json'

export const useMainDataStore = defineStore('data', {
  state: () => ({
    ships: shipsData.ships,
    cruises: cruisesData.cruises,
    persons: teamData.persons,
  }),

  getters: {
    getShipBySlug: (state) => {
      return (slug: string) => state.ships.find((s) => s.slug === slug)
    },

    getShipById: (state) => {
      return (id: number) => state.ships.find((s) => s.id === id)
    },

    getCruiseBySlug: (state) => {
      return (slug: string) => state.cruises.find((c) => c.slug === slug)
    },

    getPersonById: (state) => {
      return (id: number) => state.persons.find((p) => p.id === id)
    },

    captains: (state) => {
      return state.persons.filter((p) => p.job_title === 'Captain')
    },

    staff: (state) => {
      return state.persons.filter((p) => p.job_title !== 'Captain')
    },
  },
})

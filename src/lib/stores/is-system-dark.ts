import { readable } from 'svelte/store'

const isBrowserEnvironment = () => typeof window !== 'undefined'
const isDarkQuery = isBrowserEnvironment() && window.matchMedia('(prefers-color-scheme: dark)')

export const isSystemDark = !isDarkQuery
	? readable(false)
	: readable(isDarkQuery.matches, (set) => {
			isDarkQuery.onchange = (event: MediaQueryListEvent) => set(event.matches)
			return () => (isDarkQuery.onchange = null)
		})

import { writable, type Readable, derived } from 'svelte/store'
import type { DarkModeOption } from '$lib/types'

const isBrowserEnvironment = () => typeof window !== 'undefined'

interface ThemeSettings {
	darkModeSetting: DarkModeOption
	baseColor: string
	isDarkMode: boolean
}

export interface ThemeStore extends Readable<ThemeSettings> {
	updateBaseColor: (newColor: string) => void
	updateDarkModeSetting: (newDarkMode: DarkModeOption) => void
	cleanup: () => void
}

export function createThemeSettingsStore(
	initialBaseColor = '#000000',
	initialDarkModeSetting: DarkModeOption = 'system',
): ThemeStore {
	const prefersDarkModeMediaQuery = isBrowserEnvironment()
		? window.matchMedia('(prefers-color-scheme: dark)')
		: undefined

	const darkStore = writable({
		darkModeSetting: initialDarkModeSetting,
		isSystemDarkMode: prefersDarkModeMediaQuery?.matches || false,
	})

	const colorStore = writable({
		baseColor: initialBaseColor,
	})

	// Function to call when media query status changes
	function evaluateSystemDarkMode(event: MediaQueryListEvent) {
		darkStore.update((ts) => ({ ...ts, isSystemDarkMode: event.matches }))
	}

	// Set up the media query listener immediately
	prefersDarkModeMediaQuery?.addEventListener('change', evaluateSystemDarkMode)

	// The store itself doesn't have a destruction concept.
	// So we return a function that the component can call to clean up.
	const cleanup = () => {
		prefersDarkModeMediaQuery?.removeEventListener('change', evaluateSystemDarkMode)
	}

	const derivedStore = derived([darkStore, colorStore], ([$darkStore, $colorStore]) => {
		let isDarkMode
		switch ($darkStore.darkModeSetting) {
			case 'system':
				isDarkMode = $darkStore.isSystemDarkMode
				break
			case 'dark':
				isDarkMode = true
				break
			case 'light':
				isDarkMode = false
				break
			default:
				isDarkMode = $darkStore.isSystemDarkMode
		}

		return {
			darkModeSetting: $darkStore.darkModeSetting,
			baseColor: $colorStore.baseColor,
			isDarkMode,
		}
	})

	return {
		...derivedStore,
		updateBaseColor: (newColor: string) => {
			colorStore.update((ts) => ({ ...ts, baseColor: newColor }))
		},
		updateDarkModeSetting: (newDarkModeSetting: DarkModeOption) => {
			darkStore.update((ts) => {
				return { ...ts, darkModeSetting: newDarkModeSetting }
			})
		},
		cleanup,
	}
}

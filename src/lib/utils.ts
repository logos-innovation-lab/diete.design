import { type DarkModeOption, darkModeOptions } from '$lib/types'

export function validateDarkModeOption(option: unknown): option is DarkModeOption {
	return typeof option === 'string' && darkModeOptions.includes(option as DarkModeOption)
}

const hexColorPattern = /^#([0-9A-Fa-f]{6})$/

export function validateBaseColor(color: unknown): boolean {
	return typeof color === 'string' && hexColorPattern.test(color)
}

export function isBrowser(): boolean {
	return typeof window !== 'undefined'
}

export function genAriaId(element = 'unknown'): string {
	return `${element}-${Math.random().toString(36).substring(7)}`
}

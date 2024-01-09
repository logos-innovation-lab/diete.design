<script lang="ts">
	import { createThemeSettingsStore } from '$lib/stores/theme'
	import { changeColors } from '$lib/color'
	import { onDestroy } from 'svelte'
	import type { DarkModeOption } from '$lib/types'

	export let color: string = '#000000'
	export let mode: DarkModeOption = 'system'
	export const themeStore = createThemeSettingsStore(color, mode)

	let wrapper: HTMLDivElement

	$: themeStore.updateBaseColor(color)
	$: themeStore.updateDarkModeSetting(mode)
	$: changeColors($themeStore.baseColor, $themeStore.isDarkMode, wrapper)

	onDestroy(() => {
		themeStore.cleanup()
	})
</script>

<div bind:this={wrapper} class="diete-theme" class:diete-dark={$themeStore.isDarkMode}>
	<slot />
</div>

<style lang="scss">
	/* Define everything locally */
	.diete-theme {
		--font-h1: sans-serif;
		--font-h2: sans-serif;
		--font-h3: sans-serif;
		--font-h4: sans-serif;
		--font-ultra-large-sans: sans-serif;
		--font-large-sans: sans-serif;
		--font-sans: sans-serif;
		--font-small-sans: sans-serif;
		--font-large-serif: serif;
		--font-serif: serif;
		--font-large-serif-italic: serif;
		--font-serif-italic: serif;

		--font-size-h1: 24px;
		--font-size-h2: 18px;
		--font-size-h3: 16px;
		--font-size-h4: 14px;
		--font-size-ultra-large-sans: 24px;
		--font-size-large-sans: 18px;
		--font-size-sans: 16px;
		--font-size-small-sans: 14px;
		--font-size-large-serif: 18px;
		--font-size-serif: 16px;
		--font-size-large-serif-italic: 18px;
		--font-size-serif-italic: 16px;

		--font-weight-h1: 700;
		--font-weight-h2: 700;
		--font-weight-h3: 700;
		--font-weight-h4: 700;
		--font-weight-ultra-large-sans: 400;
		--font-weight-large-sans: 400;
		--font-weight-sans: 400;
		--font-weight-small-sans: 400;
		--font-weight-large-serif: 400;
		--font-weight-serif: 400;
		--font-weight-large-serif-italic: 400;
		--font-weight-serif-italic: 400;

		--font-style-h1: normal;
		--font-style-h2: normal;
		--font-style-h3: normal;
		--font-style-h4: normal;
		--font-style-ultra-large-sans: normal;
		--font-style-large-sans: normal;
		--font-style-sans: normal;
		--font-style-small-sans: normal;
		--font-style-large-serif: normal;
		--font-style-serif: normal;
		--font-style-large-serif-italic: italic;
		--font-style-serif-italic: italic;

		--line-height-h1: 30px;
		--line-height-h2: 24px;
		--line-height-h3: 20px;
		--line-height-h4: 16px;
		--line-height-ultra-large-sans: 30px;
		--line-height-large-sans: 24px;
		--line-height-sans: 20px;
		--line-height-small-sans: 16px;
		--line-height-large-serif: 24px;
		--line-height-serif: 20px;
		--line-height-large-serif-italic: 24px;
		--line-height-serif-italic: 20px;

		--spacing-3: 3px;
		--spacing-6: 6px;
		--spacing-12: 12px;
		--spacing-24: 24px;

		--border-radius: var(--spacing-24);
		--border: 1px solid var(--color-hight);

		--max-width: 498px;

		font-size: var(--font-size-sans);
		font-weight: var(--font-weight-sans);
		font-family: var(--font-sans);
		line-height: var(--line-height-sans);

		:global(h1),
		:global(.h1) {
			font-size: var(--font-size-h1);
			font-weight: var(--font-weight-h1);
			font-family: var(--font-h1);
			line-height: var(--line-height-h1);
			font-style: var(--font-style-h1);
		}

		:global(h2),
		:global(.h2) {
			font-size: var(--font-size-h2);
			font-weight: var(--font-weight-h2);
			font-family: var(--font-h2);
			line-height: var(--line-height-h2);
			font-style: var(--font-style-h2);
		}

		:global(h3),
		:global(.h3) {
			font-size: var(--font-size-h3);
			font-weight: var(--font-weight-h3);
			font-family: var(--font-h3);
			line-height: var(--line-height-h3);
			font-style: var(--font-style-h3);
		}

		:global(h4),
		:global(.h4) {
			font-size: var(--font-size-h4);
			font-weight: var(--font-weight-h4);
			font-family: var(--font-h4);
			line-height: var(--line-height-h4);
			font-style: var(--font-style-h4);
		}

		:global(.ultra-large-sans) {
			font-size: var(--font-size-ultra-large-sans);
			font-weight: var(--font-weight-ultra-large-sans);
			font-family: var(--font-ultra-large-sans);
			line-height: var(--line-height-ultra-large-sans);
			font-style: var(--font-style-ultra-large-sans);
		}

		:global(.large-sans) {
			font-size: var(--font-size-large-sans);
			font-weight: var(--font-weight-large-sans);
			font-family: var(--font-large-sans);
			line-height: var(--line-height-large-sans);
			font-style: var(--font-style-large-sans);
		}

		:global(.sans) {
			font-size: var(--font-size-sans);
			font-weight: var(--font-weight-sans);
			font-family: var(--font-sans);
			line-height: var(--line-height-sans);
		}

		:global(.small-sans) {
			font-size: var(--font-size-small-sans);
			font-weight: var(--font-weight-small-sans);
			font-family: var(--font-small-sans);
			line-height: var(--line-height-small-sans);
		}

		:global(.large-serif) {
			font-size: var(--font-size-large-serif);
			font-weight: var(--font-weight-large-serif);
			font-family: var(--font-large-serif);
			line-height: var(--line-height-large-serif);
			font-style: var(--font-style-large-serif);
		}

		:global(.serif) {
			font-size: var(--font-size-serif);
			font-weight: var(--font-weight-serif);
			font-family: var(--font-serif);
			line-height: var(--line-height-serif);
			font-style: var(--font-style-serif);
		}

		:global(.large-serif-italic) {
			font-size: var(--font-size-large-serif-italic);
			font-weight: var(--font-weight-large-serif-italic);
			font-family: var(--font-large-serif-italic);
			line-height: var(--line-height-large-serif-italic);
			font-style: var(--font-style-large-serif-italic);
		}

		:global(.serif-italic) {
			font-size: var(--font-size-serif-italic);
			font-weight: var(--font-weight-serif-italic);
			font-family: var(--font-serif-italic);
			line-height: var(--line-height-serif-italic);
			font-style: var(--font-style-serif-italic);
		}
	}
</style>

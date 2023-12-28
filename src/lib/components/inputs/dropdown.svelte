<script lang="ts">
	import { genAriaId, isBrowser } from '$lib/utils'
	import { onDestroy, onMount, createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let disabled: boolean | undefined = undefined
	export let direction: 'up' | 'down' = 'down'

	let showDropdown = false
	let dropdownElement: HTMLElement
	let dropdownId: string

	const closeDropdown = (ev: MouseEvent) => {
		const target = ev.target as unknown as Node
		if (dropdownElement.contains(target)) {
			// Clicked on the dropdown button or inside the dropdown
		} else {
			// Clicked outside the dropdown
			showDropdown = false
		}
	}

	onMount(() => {
		if (isBrowser()) window.addEventListener('click', closeDropdown)

		// Generates unique ID for this dropdown instance (used for ARIA attributes)
		dropdownId = genAriaId('dropdown')
	})

	onDestroy(() => {
		if (isBrowser()) window.removeEventListener('click', closeDropdown)
	})

	// Trigger event when dropdown is opened or closed
	$: showDropdown ? dispatch('open') : dispatch('close')

	function onClick() {
		if (!disabled) showDropdown = !showDropdown
	}
</script>

<div
	bind:this={dropdownElement}
	class="dropdown"
	role="combobox"
	aria-haspopup="listbox"
	aria-expanded={showDropdown}
	aria-controls={dropdownId}
>
	<div on:click={onClick} on:keypress={onClick} role="button" tabindex={0}>
		<slot name="button" disabled active={showDropdown} />
	</div>

	<div class={`root`} aria-hidden={!showDropdown}>
		<ul
			class={direction}
			class:hidden={!showDropdown}
			id={dropdownId}
			role="listbox"
			aria-labelledby="dropdown-button"
		>
			<slot />
		</ul>
	</div>
</div>

<style lang="scss">
	.root {
		position: relative;

		ul {
			position: absolute;
			inset: calc(100% - 12px) 0 auto auto;
			width: max-content;
			max-width: 450px;
			z-index: 200;
			overflow: hidden;
			border-radius: var(--border-radius);
			background: var(--colors-base);
			box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
			backdrop-filter: blur(var(--blur));

			&.hidden {
				display: none;
			}

			&.up {
				inset: auto 0 34px auto;
			}
		}
	}
	.label {
		font-size: var(--font-size-sm);
		margin-left: var(--spacing-12);
		color: var(--color-step-40, var(--color-dark-step-20));
	}
</style>

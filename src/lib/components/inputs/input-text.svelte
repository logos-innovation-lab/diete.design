<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'

	export let value = ''
	export let placeholder: string | undefined | null = undefined
	export let autofocus: boolean | undefined | null = false
	export let disabled: boolean | undefined | null = false
	export let label: string | undefined | null = undefined
	export let unit: string | undefined | null = undefined

	interface Props extends HTMLInputAttributes {
		disabled?: boolean | null
		label?: string | null
		unit?: string | null
		class?: string | null
	}

	type $$Props = Props
</script>

<label class:disabled>
	{#if label !== undefined && label !== null && label !== ''}
		<span class="small-sans label">{label}</span>
	{/if}
	<div class="input-wrapper">
		<!-- svelte-ignore a11y-autofocus -->
		<input
			style={`padding-right: ${unit ? 'calc(var(--spacing-12) + 2em)' : 'var(--spacing-12)'};`}
			class="large-sans"
			type="text"
			{disabled}
			{autofocus}
			{placeholder}
			bind:value
			{...$$restProps}
			on:keydown
			on:keypress
			on:keyup
			on:mouseenter
			on:mouseleave
		/>
		{#if unit}
			<span class="input-unit">{unit}</span>
		{/if}
	</div>
</label>

<style lang="scss">
	label {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
		color: var(--color-high);

		&.disabled {
			opacity: 0.5;
		}
	}

	span {
		margin-inline: 13px;
		text-align: left;
		color: var(--color-accent);
	}

	.input-wrapper {
		position: relative;
	}

	.input-unit {
		position: absolute;
		right: var(--spacing-12);
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none; // Ensure the input behind is still clickable
	}

	input {
		border: 1px solid var(--color-low);
		border-radius: var(--border-radius);
		padding: var(--spacing-12);
		max-height: 120px;
		min-height: 48px;
		width: 100%;
		color: var(--color-accent);
		background-color: var(--color-base);

		&:focus {
			outline: none;
			color: var(--color-accent);
		}

		&:disabled {
			cursor: not-allowed;
		}

		&::placeholder {
			color: var(--color-high);
			font-size: var(--font-size-large-sans);
		}
	}
</style>

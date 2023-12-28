<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	type Variant = 'primary' | 'secondary' | 'overlay'
	let className: string | undefined | null = undefined
	export { className as class }
	export let variant: Variant = 'primary'

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: Variant
		class?: string | null
	}

	type $$Props = Props
</script>

<span class={`badge ${variant} small-sans ${className}`} {...$$restProps}>
	<slot />
</span>

<style lang="scss">
	.badge {
		border-radius: var(--border-radius);
		padding: var(--spacing-6);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		gap: var(--spacing-3);
		text-align: center;
		white-space: nowrap;

		:global(svg) {
			width: 16px;
			height: 16px;
		}

		&.primary {
			background-color: var(--color-ultra-high);
			color: var(--color-ultra-low);

			:global(svg) {
				fill: var(--color-ultra-low);
			}
		}

		&.secondary {
			background-color: var(--color-ultra-low);
			color: var(--color-ultra-high);

			:global(svg) {
				fill: var(--color-ultra-high);
			}
		}

		&.overlay {
			background-color: rgba(var(--color-accent-rgb), 0.5);
			color: var(--color-base);

			:global(svg) {
				fill: var(--color-base);
			}
		}
	}
</style>

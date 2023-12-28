<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	type Variant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'ultra-large-sans'
		| 'large-sans'
		| 'sans'
		| 'small-sans'
		| 'large-serif'
		| 'serif'
		| 'large-serif-italic'
		| 'serif-italic'
	type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

	let className: string | undefined | null = undefined
	export { className as class }
	export let variant: Variant = 'serif'
	export let element: Element = 'span'

	type Props = {
		class?: string | null
		variant?: Variant
		element?: Element
	}

	type $$Props = (HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLSpanElement>) & Props
</script>

<svelte:element this={element} class={`${variant} ${className}`} {...$$restProps}>
	<slot />
</svelte:element>

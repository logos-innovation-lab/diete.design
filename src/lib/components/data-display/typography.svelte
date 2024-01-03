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

	type Props = {
		variant?: Variant
		element?: Element
	}

	type $$Props = (HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLSpanElement>) & Props

	let className: $$Props['class'] = undefined
	export { className as class }
	export let variant: $$Props['variant'] = 'serif'
	export let element: $$Props['element'] = 'span'
</script>

<svelte:element this={element} class={`${variant} ${className}`} {...$$restProps}>
	<slot />
</svelte:element>

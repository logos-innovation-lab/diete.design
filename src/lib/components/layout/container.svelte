<script lang="ts">
	let className: string | undefined | null = undefined
	export { className as class }
	export let fullwidth = false
</script>

<div class={`container ${className}`}>
	<div class:full-width={fullwidth}>
		<slot />
	</div>
</div>

<style lang="scss">
	.container {
		--padding-inline: 1rem;
		--content-max-width: 900px;
		--breakout-max-width: 1200px;

		--breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

		display: grid;
		grid-template-columns:
			[full-width-start] minmax(var(--padding-inline), 1fr)
			[content-start] min(100% - (var(--padding-inline) * 2), var(--content-max-width))
			[content-end]
			minmax(var(--padding-inline), 1fr) [full-width-end];
	}

	.container > :not(.full-width),
	.full-width > :not(.full-width) {
		grid-column: content;
	}

	.container > .full-width {
		grid-column: full-width;

		display: grid;
		grid-template-columns: inherit;
	}
</style>

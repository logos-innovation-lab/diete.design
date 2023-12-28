<script lang="ts">
	let className: string | undefined | null = undefined
	export { className as class }
	export let direction: 'row' | 'column' = 'column'
	export let gap = 0
	export let justify: 'space-between' | 'flex-start' | 'flex-end' | 'center' = 'flex-start'
	export let wrap: 'nowrap' | 'wrap' | 'wrap-rewerse' = 'nowrap'
	export let alignItems: 'left' | 'right' | 'center' | 'none' = 'none'
	export let grow: boolean | undefined = undefined
	export let padX = 12
	export let padY = 12
</script>

<div
	class={`container items-${alignItems} ${direction} ${justify} ${grow ? 'grow' : ''} ${className}`}
	style={`gap: ${gap}px; padding-inline: ${padX}px; padding-block: ${padY}px; flex-wrap: ${wrap}`}
>
	<slot />
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: flex-start;
		padding: var(--spacing-12) var(--spacing-24);
		width: 100%;
		flex-grow: 0;
		max-width: var(--max-width);
		margin-inline: auto;
	}

	.row {
		flex-direction: row;
		&.center {
			justify-content: center;
		}
	}
	.column {
		flex-direction: column;
	}

	.space-between {
		justify-content: space-between;
	}
	:not(.row).center {
		margin-top: auto;
		margin-bottom: auto;
	}
	.flex-start {
		justify-content: flex-start;
	}
	.flex-end {
		justify-content: flex-end;
	}
	.items-left {
		align-items: flex-start;
	}
	.items-right {
		align-items: flex-end;
	}
	.items-center {
		align-items: center;
	}
	.grow {
		flex-grow: 1;
		overflow-y: auto;
	}
</style>

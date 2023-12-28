<script lang="ts">
	import PaintPalette from '$lib/icons/paint-palette.svelte'
	export let color: string
</script>

<label>
	<div class="palette-overlay" />
	<div class="palette-icon">
		<PaintPalette />
	</div>
	<input type="color" bind:value={color} />
</label>

<style lang="scss">
	label {
		position: relative;
		line-height: 0;
		cursor: pointer;
		border-radius: 50%;
		overflow: hidden;
		width: 48px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: var(--color-base);
		border: 1px solid var(--color-base);
		border-radius: var(--border-radius);
		color: var(--color-ultra-high);
		font-size: var(--font-size-normal);
		font-weight: var(--font-weight-500);
		line-height: 1.25;
		padding: var(--spacing-12);
		overflow-wrap: normal;
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin-block: 0;
		gap: var(--spacing-6);
		white-space: nowrap;

		:global(svg) {
			fill: var(--color-ultra-high);
			width: 20px;
			height: 20px;
		}

		&:active:not(:disabled) {
			background-color: var(--color-low);
		}

		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}

	input[type='color'] {
		border-radius: 50%;
		width: 48px;
		height: 48px;
		border: none;
		flex-shrink: 0;
		opacity: 0;
	}

	::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	::-webkit-color-swatch {
		border-radius: 50%;
		border: none;
	}

	.palette-icon {
		position: absolute;
		cursor: pointer;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		line-height: 0;

		:global(svg) {
			fill: var(--color-ultra-high);
			width: 20px;
			height: 20px;
		}
	}
</style>

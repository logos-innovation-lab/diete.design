<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'

	type $$Props = Omit<HTMLInputAttributes, 'type'>
</script>

<input type="checkbox" {...$$restProps} />

<style lang="scss">
	input[type='checkbox'] {
		position: relative;
		&::before {
			content: '';
			display: inline-block;
			width: 18px;
			height: 18px;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			background-color: var(--color-base);
			border: 1px solid var(--color-accent);
		}
		&:checked::before {
			background-color: var(--color-accent);
		}
		&:checked::after {
			content: '';
			position: absolute;
			top: 50%;
			bottom: 50%;
			transform: translate(-85%, -65%) rotate(45deg);
			height: 10px;
			width: 6px;
			margin-left: 50%;
			border-bottom: 2px solid var(--color-base);
			border-right: 2px solid var(--color-base);
		}
	}
</style>

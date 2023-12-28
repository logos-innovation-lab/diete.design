<script lang="ts">
	import { Badge, Button, Theme, Typography, Container, type DarkModeOption } from '$lib'
	import Dropdown from '$lib/components/inputs/dropdown.svelte'
	import DropdownItem from '$lib/components/inputs/dropdown-item.svelte'
	import InputText from '$lib/components/inputs/input-text.svelte'
	import Asleep from '$lib/icons/asleep.svelte'
	import CaretDown from '$lib/icons/caret-down.svelte'
	import CheckmarkFilled from '$lib/icons/checkmark-filled.svelte'
	import Checkmark from '$lib/icons/checkmark.svelte'
	import ChevronRight from '$lib/icons/chevron-right.svelte'
	import Close from '$lib/icons/close.svelte'
	import Light from '$lib/icons/light.svelte'
	import type { ThemeStore } from '$lib/stores/theme'
	import InputPalette from './components/input-palette.svelte'

	let darkMode: DarkModeOption = 'light'
	let color = '#000000'

	let themeStore: ThemeStore
</script>

<Theme mode={darkMode} {color} bind:themeStore>
	{@const isDarkMode = $themeStore && $themeStore.isDarkMode}
	<div class="color">
		<Container>
			<div class="header">
				<InputPalette bind:color />
				<Button on:click={() => (darkMode = isDarkMode ? 'light' : 'dark')}>
					{#if isDarkMode}
						<Light />
					{:else}
						<Asleep />
					{/if}
				</Button>
			</div>

			<Typography variant="h2" element="h1"
				>Colors - {isDarkMode ? 'Dark' : 'Light'} Mode</Typography
			>
			<div class="row gap">
				<div class="column colors gap">
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-accent)'} />
						<div class="column">
							<Typography variant="sans">accent</Typography>
							<Typography variant="small-sans">
								{isDarkMode ? '100' : '0'}% luminance</Typography
							>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-ultra-high)'} />
						<div class="column">
							<div>ultra high</div>
							<div>
								{isDarkMode ? '85' : '5'}% luminance
							</div>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-high)'} />
						<div class="column">
							<div>high</div>
							<div>
								{isDarkMode ? '60' : '20'}% luminance
							</div>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-mid)'} />
						<div class="column">
							<div>mid</div>
							<div>
								{isDarkMode ? '30' : '50'}%luminance
							</div>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-low)'} />
						<div class="column">
							<div>low</div>
							<div>
								{isDarkMode ? '3' : '80'}% luminance
							</div>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-ultra-low)'} />
						<div class="column">
							<div>ultra-low</div>
							<div>
								{isDarkMode ? '1' : '90'}% luminance
							</div>
						</div>
					</div>
					<div class="row gap-6">
						<div class="circle" style={'--bg-color: var(--color-base)'} />
						<div class="column">
							<div>base</div>
							<div>
								{isDarkMode ? '0' : '100'}% luminance
							</div>
						</div>
					</div>
				</div>
			</div>

			<Typography variant="h2" element="h1">Typography</Typography>
			<div class="row gap">
				<div class="column">
					<Typography variant="h1">h1 title</Typography>
					<Typography variant="h2">h2 title</Typography>
					<Typography variant="h3">h3 title</Typography>
					<Typography variant="h4">h4 title</Typography>
					<Typography variant="ultra-large-sans">ultra large sans</Typography>
					<Typography variant="large-sans">large sans</Typography>
					<Typography variant="sans">sans</Typography>
					<Typography variant="small-sans">small sans</Typography>
					<Typography variant="large-serif">large serif</Typography>
					<Typography variant="serif">serif</Typography>
					<Typography variant="large-serif-italic">large serif italic</Typography>
					<Typography variant="serif-italic">serif italic</Typography>
				</div>
			</div>

			<Typography variant="h2" element="h1">Buttons</Typography>
			<div class="row gap">
				<div class="column border padding">
					<Button variant="primary"><Checkmark /> Primary button</Button>
					<Button variant="primary" active><Checkmark /> Primary button</Button>
					<Button variant="primary" disabled><Checkmark /> Primary button</Button>
				</div>
				<div class="column border padding">
					<Button variant="primary"><ChevronRight /></Button>
					<Button variant="primary" active><ChevronRight /></Button>
					<Button variant="primary" disabled><ChevronRight /></Button>
				</div>
				<div class="column border padding">
					<Button variant="secondary"><Close />Secondary button</Button>
					<Button variant="secondary" active><Close />Secondary button</Button>
					<Button variant="secondary" disabled><Close />Secondary button</Button>
				</div>
				<div class="column border padding">
					<Button variant="secondary"><Close /></Button>
					<Button variant="secondary" active><Close /></Button>
					<Button variant="secondary" disabled><Close /></Button>
				</div>
				<div class="column border padding">
					<Button variant="overlay"><Checkmark /> Overlay button</Button>
					<Button variant="overlay" active><Checkmark /> Overlay button</Button>
					<Button variant="overlay" disabled><Checkmark /> Overlay button</Button>
				</div>
				<div class="column border padding">
					<Button variant="overlay"><ChevronRight /></Button>
					<Button variant="overlay" active><ChevronRight /></Button>
					<Button variant="overlay" disabled><ChevronRight /></Button>
				</div>
			</div>

			<Typography variant="h2" element="h1">Badge</Typography>
			<div class="row gap">
				<div class="column border padding">
					<Badge variant="primary">NEW</Badge>
					<Badge variant="secondary">NEW</Badge>
					<Badge variant="overlay">NEW</Badge>
				</div>
				<div class="column border padding">
					<Badge variant="primary"><CheckmarkFilled />Primary badge</Badge>
					<Badge variant="secondary"><CheckmarkFilled />Secondary badge</Badge>
					<Badge variant="overlay"><CheckmarkFilled />Overlay badge</Badge>
				</div>
			</div>

			<Typography variant="h2" element="h1">Text input</Typography>
			<div class="row gap">
				<div class="column border padding">
					<InputText placeholder="placeholder" label="Input label" disabled />
					<InputText placeholder="placeholder" label="Input label" />
				</div>
			</div>

			<Typography variant="h2" element="h1">Dropdown</Typography>
			<div class="row gap">
				<div class="column border padding">
					<Dropdown direction="down">
						<Button slot="button"><CaretDown />Down</Button>
						<DropdownItem onClick={() => console.log(1)}>test</DropdownItem>
						<DropdownItem onClick={() => console.log(2)}>test 1</DropdownItem>
						<DropdownItem onClick={() => console.log(3)}>test 2</DropdownItem>
					</Dropdown>
					<Dropdown direction="up">
						<Button slot="button"><CaretDown />Up</Button>
						<DropdownItem onClick={() => console.log(1)}>test</DropdownItem>
						<DropdownItem onClick={() => console.log(2)}>test 1</DropdownItem>
						<DropdownItem onClick={() => console.log(3)}>test 2</DropdownItem>
					</Dropdown>
				</div>
			</div>
		</Container>
	</div>
</Theme>

<style>
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.gap {
		gap: 20px;
	}
	.gap-6 {
		gap: 6px;
	}
	.padding {
		padding: 20px;
	}
	.column {
		display: flex;
		flex-direction: column;
	}
	.border {
		gap: 20px;
		border-radius: 5px;
		border: 1px dashed purple;
	}
	.color {
		min-height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
		color: var(--color-ultra-high);
		background-color: var(--color-base);
	}

	.header {
		position: sticky;
		top: 0;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background-color: var(--bg-color);
	}
	.colors {
		flex-grow: 1;
		background-color: var(--color-base);
	}
</style>

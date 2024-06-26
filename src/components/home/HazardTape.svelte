<script lang="ts">
	import { onMount } from 'svelte';

	let svgCount: number;
	let scrollSpeed: number;

	const calculateVariables = () => {
		svgCount = Math.floor(window.innerWidth / 45);
		scrollSpeed = svgCount / 1.5;
	};

	onMount(() => {
		calculateVariables();
		window.addEventListener('resize', calculateVariables);
	});
</script>

<div class="hazard-tape-container">
	<div class="hazard-tape" style="animation-duration: {scrollSpeed}s">
		{#each Array(svgCount) as _}
			<svg width="" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 110L60 -20" stroke="#FDE112" stroke-width="40" />
			</svg>
		{/each}
	</div>
</div>

<style>
	.hazard-tape-container {
		width: 100%;
		overflow: hidden;
		position: relative;
		margin: 2rem 0 2rem 0;
	}

	.hazard-tape {
		width: 200%;
		display: flex;
		animation: scroll linear infinite;
	}

	.hazard-tape svg {
		width: 50%;
		height: 70px;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>

<script lang="ts">
	import { ageCalculator } from '$lib/ageCalculator.js';

	let age: number = ageCalculator();
</script>

<p class="personal-info">
	{age} years old / Utrecht, The Netherlands / vwo atheneum+ graduate from
	<a href="https://www.heemlanden.nl/ons-onderwijs/wie-wij-zijn/onze-atheneum-plus" target="_blank"
		>[ College de Heemlanden ]</a
	>
</p>

<style>
	p {
		color: white;
		line-height: 1.25;
	}

	a {
		box-shadow: inset 0 0 0 0 #fde112;
		color: white;
		text-decoration: none;
		margin: 0 -0.25rem;
		padding: 0 0.25rem;
		transition:
			color 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
		white-space: nowrap;
	}

	a:hover {
		box-shadow: inset 250px 0 0 0 #fde112;
		color: #171611;
	}

	@media (prefers-reduced-motion: reduce) {
		a {
			transition: none;
		}
	}

	@media (max-width: 1250px) {
		.personal-info {
			white-space: pre-line;
		}
	}
</style>

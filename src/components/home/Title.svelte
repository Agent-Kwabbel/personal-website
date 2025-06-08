<script lang="ts">
	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<p class="ascii-title" class:hidden={width < 500}>
	______ _ _____ _ __ __ _<br />
	| ___| | | / ___| | / _|/ _| |<br />
	| |_ __ _| |__ ___ \ `--.| |_ _ _| |_| |_| | _____ _ __<br />
	| _/ _` | '_ \ / _ \ `--. \ __| | | | _| _| |/ / _ \ '_ \<br />
	| || (_| | |_) | __/ /\__/ / |_| |_| | | | | | &lt __/ | | |<br />
	\_| \__,_|_.__/ \___| \____/ \__|\__,_|_| |_| |_|\_\___|_| |_|<br />
	<br />
	PORTFOLIO WEBSITE.
</p>

<p class="non-ascii-title" class:hidden={width >= 500}>
	<span style="font-size: 2rem">FABE STUFFKEN</span><br />
	PORTFOLIO WEBSITE.
</p>

<style>
	.ascii-title {
		color: white;
		white-space: pre;
		line-height: 0.65;
	}

	.non-ascii-title {
		color: white;
		display: none;
		line-height: 1.25;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 800px) {
		.ascii-title {
			font-size: 0.8em;
		}
	}

	@media (max-width: 600px) {
		.ascii-title {
			font-size: 0.6em;
		}
	}

	@media (max-width: 500px) {
		.ascii-title {
			display: none;
		}

		.non-ascii-title {
			display: block;
		}
	}
</style>

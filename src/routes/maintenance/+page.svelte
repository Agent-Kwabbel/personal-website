<svelte:head>
	<title>Site Under Maintenance</title>
</svelte:head>

<div class="maintenance-container">
	<div>
		<h1>Under Maintenance</h1>
		<p>The site is currently offline for maintenance.</p>
		<p>Please check back later.</p>
		<a target="_blank" href="https://github.com/Agent-Kwabbel">[ GitHub ]</a>
	</div>
</div>

<style>
	.maintenance-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #171611;
		color: white;
		font-family: 'DM Mono', monospace;
		text-align: center;
	}

	.maintenance-container h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.maintenance-container p {
		font-size: 1rem;
		margin: 0.5rem 0;
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
		box-shadow: inset 212px 0 0 0 #fde112;
		color: #171611;
	}
</style>

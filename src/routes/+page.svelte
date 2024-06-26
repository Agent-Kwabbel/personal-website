<script>
	import HazardTape from '../components/home/HazardTape.svelte';
	import Title from '../components/home/Title.svelte';
	import PersonalInfo from '../components/home/PersonalInfo.svelte';
	import Navbar from '../components/home/Navbar.svelte';
	import SocialLinks from '../components/SocialLinks.svelte';
</script>

<svelte:head>
	<title>Fabe Stuffken | Home</title>
</svelte:head>

<div class="container">
	<div class="content">
		<Title />
	</div>

	<HazardTape />

	<div class="content">
		<PersonalInfo />
		<Navbar />
	</div>

	<SocialLinks />
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content {
		width: 75%;
	}
</style>

<script>
	import { onNavigate } from '$app/navigation';
	import PageTransition from '../components/PageTransition.svelte';

	let isTransitioning = false;

	onNavigate((navigation) => {
		return new Promise((resolve) => {
			isTransitioning = true;

			setTimeout(() => {
				resolve();
				setTimeout(() => {
					isTransitioning = false;
				}, 300);
			}, 300);
		});
	});
</script>

<PageTransition {isTransitioning} />

<slot />

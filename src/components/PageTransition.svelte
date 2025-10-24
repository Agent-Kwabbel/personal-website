<script>
	export let isTransitioning;

	let animationPhase = 0;

	$: if (isTransitioning && animationPhase === 0) {
		animationPhase = 1;
		setTimeout(() => {
			animationPhase = 2;
		}, 300);
	} else if (!isTransitioning) {
		animationPhase = 0;
	}
</script>

{#if isTransitioning}
	<div class="page-transition" class:slide-in={animationPhase === 1} class:slide-out={animationPhase === 2}></div>
{/if}

<style>
	.page-transition {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fde112;
		z-index: 9999;
		pointer-events: none;
	}

	.slide-in {
		animation: slideInFromBottom 300ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}

	.slide-out {
		animation: slideOutToTop 300ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}

	@keyframes slideInFromBottom {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideOutToTop {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.page-transition {
			display: none;
		}
	}
</style>

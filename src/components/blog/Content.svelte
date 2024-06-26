<script lang="ts">
	export let content: String;
</script>

<div class="blog_content">
	{@html content}
</div>

<style>
	.blog_content {
		margin: 1rem 0 6rem 0;
		font-size: 1rem;

		& h4 {
			font-size: 1.5rem;
			margin: 0.5rem 0;
		}

		& h5 {
			font-size: 1.25rem;
			margin: 0.5rem 0;
		}

		& h6 {
			font-size: 1rem;
			margin: 0.5rem 0;
		}

		& p {
			margin: 0;
			line-height: 1.25rem;
		}

		& blockquote {
			margin: 1rem 0;
			padding: 1rem;
			border-left: 5px solid white;
			font-style: italic;
		}

		/*Now place the image horizontaly in the middle of the content*/

		& figure {
			flex-direction: column;
			width: 100%;
			display: flex;
			align-items: center;
			margin: 1rem 0;
		}

		& img {
			width: 75%;
			height: auto;
		}

		& video {
			width: 75%;
			height: auto;
		}

		& figcaption {
			font-size: 0.75rem;
			font-weight: 300;
			margin-top: 0.5rem;
			width: 75%;
		}

		& mark {
			background-color: #fde112;
			color: black;
			padding: 0.05rem;
		}

		& a {
			color: white;
			text-decoration: underline;
		}
	}
</style>

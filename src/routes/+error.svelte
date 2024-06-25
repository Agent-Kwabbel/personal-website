<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let chosenTitle: string = "Loading..."

    onMount(() => {
        let titles: Array<string>;

        if ($page.status === 404) {
            titles = [
                "Hold it there, buddy!",
                "Whoops!",
                "Hold your horses!",
                "Not so fast!",
                "Slow down!",
                "Hmmm...",
                "Something's not right...",
                "Uh oh!",
                "Definitely not a teapot...",
                "This is not the page you're looking for...",
                "You're not supposed to be here...",
                "You're lost...",
                "What are you doing here?",
                "Oxford Dictionary: A message that appears on a computer screen that tells you than an internet address cannot be found.",
                "That's not how the internet works...",
                "The internet is almost infinite, but this page is still not here.",
                "Knock knock, who's there? Not this page!",
                "I suggest improving your typing skills. Not to be rude or anything...",
                "Hey partner, you're in the wrong town...",
                "There's a one in 20 change you get this error message :)"
            ]
        } else {
            titles = [
                "Whoa! Something went wrong!",
                "Yikes, sorry about that!",
                "Damn, that's not supposed to happen!",
                "Oh no, something went wrong!",
                "Sorry about that!",
                "Fun fact, HTTP 200 responses good, 400 bad, 500 worse.",
                "Quick HTTP guide for you: that HTTP response, not good.",
                "HTTP 500: Internal Server Error. HTTP 404: Not Found. HTTP 418: I'm a teapot.",
                "If it ain't 200 OK, it's not OK.",
                "If it ain't broke, don't fix it. If it is broke, fix it.",
                "Well, please don't do that again. Thanks."
            ]
        }

        chosenTitle = titles[Math.floor(Math.random() * titles.length)];
    });
</script>

<div class="error-container">
    <div>
        <h1>HTTP {$page.status}</h1>
        <h2>{chosenTitle}</h2>
        <p>Return to <a href="/">home</a>.</p>
    </div>
</div>

<style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #171611;
        color: white;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    .error-container h1 {
        font-size: 2rem;
    }

    .error-container p {
        font-size: 1rem;
    }
</style>
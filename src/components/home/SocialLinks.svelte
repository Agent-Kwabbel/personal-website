<script>
    let socials = [
        {name: 'GitHub', url: 'https://github.com/Agent-Kwabbel'},
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/fabe-stuffken/'},
        {name: 'X Twitter', url: 'https://twitter.com/Agent__Kwabbel'},
    ];
</script>

<div class="social-links">
    {#each socials as social}
        <a href={social.url} target="_blank">{social.name}</a>
    {/each}
</div>

<style>
    .social-links {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        padding: 1rem;
    }

    .social-links a {
        margin: 0 1rem;
        text-decoration: none;
        color: white;
        box-shadow: inset 0 0 0 0 #fde112;
        padding: 0 .25rem;
        transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
    }

    .social-links a:hover {
        color: #171611;
        box-shadow: inset 212px 0 0 0 #fde112;
    }
</style>
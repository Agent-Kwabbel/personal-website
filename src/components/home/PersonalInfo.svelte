<script>
    // calculate my age
    const birthDate = new Date('2008-07-24');
    const today = new Date();
    const yearInMs = 1000 * 60 * 60 * 24 * 365.25;

    const diff = today.getTime() - birthDate.getTime();
    const age = Math.floor(diff / yearInMs);
</script>

<p class="personal-info">
    {age} years old / Utrecht, The Netherlands / 5th year atheneum+ student at <a href="https://www.heemlanden.nl/ons-onderwijs/wie-wij-zijn/onze-atheneum-plus" target="_blank">[ College de Heemlanden ]</a>
</p>

<style>
    p {
        color: white;
        white-space: pre;
        line-height: 1.25;
    }

    a {
        box-shadow: inset 0 0 0 0 #fde112;
        color: white;
        text-decoration: none;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
        white-space: nowrap;
    }

    a:hover {
        box-shadow: inset 250px 0 0 0 #fde112;
        color: #171611;
    }

    @media (max-width: 1250px) {
        .personal-info {
            white-space: pre-line;
        }
    }
</style>
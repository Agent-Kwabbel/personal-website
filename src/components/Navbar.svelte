<p class="navbar"><a href="/">[ Home ]</a> / <a href="/about" id="about">[ More about me ]</a> / <a href="contact" id="contact">[ Contact ]</a></p>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        padding: 1rem;
        color: white;
        font-family: 'DM Mono', monospace;
        white-space: pre;
        line-height: 1.25;
        margin-top: 0;
        background-color: #171611;
    }

    .navbar a {
        box-shadow: inset 0 0 0 0 #fde112;
        color: white;
        text-decoration: none;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
        white-space: nowrap;
    }

    #about:hover {
        box-shadow: inset 212px 0 0 0 #fde112;
        color: #171611;
    }

    #contact:hover {
        box-shadow: inset 212px 0 0 0 #fde112;
        color: #171611;
    }

    @media (max-width: 1250px) {
        .navbar {
            white-space: pre-line;
        }
    }
</style>
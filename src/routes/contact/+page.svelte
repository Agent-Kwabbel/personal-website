<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import SocialLinks from "../../components/SocialLinks.svelte";
    import {ageCalculator} from "$lib/ageCalculator";

    const EnglishResume = "/downloads/EnglishResumeFabeStuffken.pdf";
    const DutchResume = "/downloads/NederlandseCvFabeStuffken.pdf";

    let age: number = ageCalculator();
</script>

<svelte:head>
    <title>Fabe Stuffken | Contact</title>
</svelte:head>

<Navbar />

<div class="container">
    <div class="content">
        <p>If you have any questions or would like to get in touch, please feel free to contact me through the form below or via the following methods:</p>
        <p><strong>Email:</strong> <a href="mailto:fabestuffken@proton.me">[ fabestuffken@proton.me ]</a> (recommended)</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Agent-Kwabbel" target="_blank">[ GitHub Profile ]</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/fabe-stuffken" target="_blank">[ LinkedIn Profile ]</a> (not so recommended)</p>
    </div>
</div>

<SocialLinks />

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

    p {
        color: white;
        white-space: pre-line;
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
        box-shadow: inset 300px 0 0 0 #fde112;
        color: #171611;
    }

    @media (max-width: 900px) {
        .content {
            margin: 4rem 0 4rem 0;
        }
    }
</style>
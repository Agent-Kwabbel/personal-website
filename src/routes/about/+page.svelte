<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import SocialLinks from "../../components/SocialLinks.svelte";
    import {ageCalculator} from "$lib/ageCalculator";

    const EnglishResume = "/downloads/EnglishResumeFabeStuffken.pdf";
    const DutchResume = "/downloads/NederlandseCvFabeStuffken.pdf";

    let age: number = ageCalculator();
</script>

<Navbar />

<div class="container">
    <div class="content">
        <p>
            Hey there!

            First of all, thank you for visiting my website. I'm Fabe, a {age}-year-old high school student from Utrecht, The Netherlands. I'm currently in my 5th year of atheneum+ at <a href="https://www.heemlanden.nl/ons-onderwijs/wie-wij-zijn/onze-atheneum-plus" target="_blank">[ College de Heemlanden ]</a>. I'm a self-taught developer, and I'm passionate about creating websites and applications, such as games and computer programs.

            I have a deep interest in technology and STEM in general. That's why I've chosen the profile <a href="https://en.wikipedia.org/wiki/Education_in_the_Netherlands#Curriculum" target="_blank">[ Nature & Technology ]</a>, with subjects including Informatics, Mathematics D, and NLT. I'm currently working on my thesis for <a href="https://u-talent.nl/leerlingen/meerjarige-programmas/academy/" target="_blank">[ U-Talent Academy] </a> about the use of epistemic logic.

            My journey with technology started at a young age. I've always been curious about how things work, and I've always been eager to learn new things. I started programming when I was 9 years old with Scratch and later progressed to HTML and CSS. I've been learning new things ever since, and I'm always looking for new challenges.

            Besides programming, I'm also interested in engineering. I was a member of <a href="https://www.djoamersfoort.nl/" target="_blank">[ DJO Amersfoort ]</a> where I learned a lot about electronics and robotics. Now, I'm pursuing a career in engineering or computer science.

            I'm always looking for new opportunities to learn and grow. If you have any questions or if you want to get in touch, feel free to send me an email at <a href="mailto:fabestuffken@proton.me">[ fabestuffken@proton.me ]</a>.

            <b>Skills:</b> Programming in HTML, CSS, JS/TS, Python, Java, C and C#. Experience with web frameworks, Git, Linux, Arduino, Raspberry Pi, and Unity. Knowledge of algorithms, data structures, and computer architecture.

            <b>Hobbies and Interests:</b> Technology, gaming, music, kickboxing and more!

            I hope you've enjoyed your stay on my website!

            Cheers,
            Fabe

            <b><u><a download="English Resume Fabe Stuffken.pdf" target="_blank" href={EnglishResume}>[ Download English Resume ]</a></u> <u><a download="Nederlandse CV Fabe Stuffken.pdf" target="_blank" href={DutchResume}>[ Download Dutch Resume ]</a></u></b>
        </p>
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

    u {
        text-decoration-color: white;
        transition: .2s ease-in-out;
    }

    u:hover {
        text-decoration-color: #171611;
    }

    @media (max-width: 900px) {
        .container {
            height: auto;
        }

        .content {
            margin: 4rem 0 4rem 0;
        }
    }
</style>
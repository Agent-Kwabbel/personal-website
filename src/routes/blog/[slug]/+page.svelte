<script lang="ts">
    import Navbar from '../../../components/Navbar.svelte';
    import Title from '../../../components/blog/Title.svelte';
    import Content from '../../../components/blog/Content.svelte';
    import SocialLinks from "../../../components/SocialLinks.svelte";

    export let data;
    let blog = data.blog.rows[0];
    console.log(blog);
</script>

<Navbar />
<div class="container">
    <div class="content">
        <Title bind:title={blog.title} bind:created_at={blog.created_at} />
        <Content bind:content={blog.content} />
    </div>
</div>
<SocialLinks />

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .content {
        width: 60%;
        color: white;
    }
</style>
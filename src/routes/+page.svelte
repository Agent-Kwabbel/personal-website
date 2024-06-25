<script>
import HazardTape from '../components/home/HazardTape.svelte';
    import Title from '../components/home/Title.svelte';
</script>

<div class="container">
    <div class="content">
        <Title />
    </div>
    <HazardTape />
</div>

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
</style>
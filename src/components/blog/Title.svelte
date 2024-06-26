<script lang="ts">
    import { format } from 'date-fns';

    export let title: String;
    export let created_at: Date;
    let formatted_created_at = format(new Date(created_at), 'dd MMMM yyyy');
</script>

<div class="container">
    <div class="content">
        <h2>Blog</h2>
        <h1>{title}</h1>
        <h3>{formatted_created_at}</h3>
    </div>
</div>

<style>
    .container {
        height: 25rem;
        background-color: #fde112;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

    .content {
        margin: 0 1rem 1rem 1rem;
    }

    h2 {
        font-style: italic;
        text-decoration: underline;
        font-size: 3rem;
    }

    h1 {
        font-size: 3rem;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    h1, h3, h2 {
        color: white;
        margin: 0;
        line-height: 1.25;
    }
</style>
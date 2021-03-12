<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
</script>

<style>
    .widget {
        height: 600px;
        width: 350px;
        /* border: 1px solid gray; */
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

<div class="widget">
    <Header />
    <Scrollbar />
    <Controls />
</div>
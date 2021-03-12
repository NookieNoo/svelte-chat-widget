<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
</script>

<style>
    .widget {
        height: 700px;
        width: 375px;
        /* border: 1px solid red; */
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>



<div class="widget elevation-10 rounded-lg">
    <Header />
    <Scrollbar />
    <Controls />
</div>

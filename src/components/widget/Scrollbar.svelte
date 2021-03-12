<script>
    import { Avatar, Container, Row, Col } from 'svelte-materialify';
    export let messages = [];
</script>

<style>
    .scrollbar {
        height: 100%;
        overflow-y: scroll;
        /* border: 1px solid red; */
    }
</style>

<div class="scrollbar grey lighten-5 pa-2">
    <Container>
        {#each messages as msg, index (msg.timestamp)}
            {#if msg.isFromBot}
                <div class="d-flex mt-2 align-center">
                    <div>
                        <Avatar size="32px" class="deep-purple white-text">B</Avatar>
                    </div>
                    <div class="deep-purple lighten-4 text-caption rounded pa-2 ml-2 mr-8">
                        {msg.message}
                    </div>
                </div>
            {:else}
                <div class="mt-2 d-flex justify-end">
                    <div class="grey lighten-2 text-caption rounded pa-2 ml-10">
                        {msg.message}
                    </div>
                </div>
            {/if}
        {/each}
    </Container>
</div>

<script>
    import { Avatar, Container, Row, Col } from 'svelte-materialify';
    import { onMount } from 'svelte';
    export let messages = [];
    export let isBotOnline;

</script>

<style>
    .scrollbar {
        height: 100%;
        /* height: 500px; */
        overflow-y: scroll;
    }
    .msg {
        text-align: start;
    }
    .msg:last-child {
        /* border: 1px solid red; */
    }
</style>

<div class="scrollbar grey lighten-5 pa-2">
    <Container>
        {#if isBotOnline}
            {#each messages as msg, index}
                {#if msg.sender === 'bot'}
                    <div class="d-flex mt-2 align-center msg">
                        <div>
                            <Avatar size="32px" class="deep-purple white-text">B</Avatar>
                        </div>
                        <div class="grey lighten-2 text-caption rounded pa-2 ml-2 mr-8">{msg.message}</div>
                    </div>
                {:else}
                    <div class="mt-2 d-flex justify-end msg">
                        <div class="deep-purple lighten-4 text-caption rounded pa-2 ml-10">{msg.message}</div>
                    </div>
                {/if}
            {/each}
        {:else}
            <div>
                В настоящее время бот недоступен. Попробуйте позже
            </div>
        {/if}
    </Container>
</div>

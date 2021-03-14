<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp, Icon } from 'svelte-materialify';
    import { mdiMessageReply, mdiClose } from '@mdi/js';
    import { fade } from 'svelte/transition';
    import testMessages from '../../utils/testMessages';
    import * as animateScroll from "svelte-scrollto";

    let isOpen = false;
    let messages;

    if (localStorage.getItem('messages')) {
        messages = JSON.parse(localStorage.getItem('messages'));
        console.log('getFromStorage');
    } else {
        messages = testMessages;
        localStorage.setItem('messages', JSON.stringify(testMessages))
        console.log('getFromTest', messages);
    }

    let msg = '';
    let isLoading = false;

    async function sendMsg(successCallback) {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        let response = await fetch(url);

        if (response.ok) {
            const comments = await response.json();
            console.log(comments[0]);
            setTimeout(() => successCallback(comments[0].name), 1000);
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    const addMessage = (msg, isFromBot = false) => {
        messages = [...messages, {
            isFromBot,
            message: msg,
            timestamp: Date.now(),
        }];
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    const handleSubmit = (evt) => {
        animateScroll.scrollTo({container: '.scrollbar', element: '.msg:last-child'});
        const myMsg = evt.detail;
        isLoading = true;
        addMessage(myMsg);
        sendMsg((msg) => {
            addMessage(msg, true);
            isLoading = false;
            animateScroll.scrollTo({container: '.scrollbar', element: '.msg:last-child'});
        });
    }

    const openChat = () => isOpen = !isOpen;
</script>

<style>
    .widget {
        /* min-height: 500px; */
        height: 700px;
        max-width: 375px;
        position: fixed;
        bottom: 100px;
        right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1000;
        background-color: white;
    }
    .btn-open {
        position: fixed;
        bottom: 10px;
        right: 10px;
    }
</style>


{#if isOpen}
    <div class="widget elevation-10 rounded-lg" transition:fade="{{ duration: 150 }}">
        <Header on:close={openChat}/>
        <Scrollbar messages={messages}/>
        <Controls bind:value={msg} bind:isLoading={isLoading} on:submit={handleSubmit}/>
    </div>
{/if}
<div class="btn-open">
    <Button fab size="default" on:click={openChat} class="primary-color white-text">
        {#if isOpen}
            <Icon path={mdiClose} />
        {:else}
            <Icon path={mdiMessageReply} />
        {/if}
    </Button>
</div>

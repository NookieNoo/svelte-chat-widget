<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp, Icon } from 'svelte-materialify';
    import { mdiMessageReply, mdiClose } from '@mdi/js';
    import { fade } from 'svelte/transition';
    import testMessages from '../../utils/testMessages';
    import * as animateScroll from "svelte-scrollto";
    import { formatTime } from '../../utils/dateHelper';
    import { onMount } from 'svelte';

    export let botUrl;

    let isOpen = false;
    let messages;

    let isBotOnline = false;

    onMount(async () => {
        const response = await fetch(botUrl);
        if (response.ok) {
            isBotOnline = true;
        }
    });

    if (localStorage.getItem('expiry') > Date.now()) {
        messages = JSON.parse(localStorage.getItem('messages'));
        console.log('getFromStorage');
    } else {
        messages = testMessages;
        localStorage.setItem('messages', JSON.stringify(testMessages))
        localStorage.setItem('expiry', Date.now() + 86400000) // 1day
        console.log('getFromTest', messages);
    }

    let msg = '';
    let isLoading = false;

    async function sendMsg(myMsg, successCallback) {
        const url = `${botUrl}/chat`;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `message=${myMsg}`,
        });

        if (response.ok) {
            const respData = await response.json();
            successCallback(respData);
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    const addMessage = (msg, sender = 'user') => {
        messages = [...messages, {
            sender,
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
        sendMsg(myMsg, (resp) => {
            addMessage(resp.message, 'bot');
            isLoading = false;
            animateScroll.scrollTo({container: '.scrollbar', element: '.msg:last-child'});
        });
    }

    const openChat = () => isOpen = !isOpen;
</script>

<style>
    .widget {
        height: 700px;
        /* max-width: 375px;
        min-width: 350px; */
        width: 375px;
        bottom: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
    }
    .btn-open {
        bottom: 10px;
    }
    .widget, .btn-open {
        position: fixed;
        right: 20px;
        z-index: 1000;
    }
</style>


{#if isOpen}
    <div class="widget elevation-10 rounded-lg" transition:fade="{{ duration: 150 }}">
        <Header on:close={openChat}/>
        <Scrollbar messages={messages} bind:isBotOnline={isBotOnline}/>
        <Controls bind:value={msg} bind:isLoading={isLoading} disabled={!isBotOnline} on:submit={handleSubmit}/>
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

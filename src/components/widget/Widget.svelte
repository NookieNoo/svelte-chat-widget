<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp, Icon } from 'svelte-materialify';
    import { mdiMessageReply, mdiClose } from '@mdi/js';
    import { fade } from 'svelte/transition';

    console.log(localStorage);

    let isOpen = false;
    let messages = [
        {
            isFromBot: true,
            message: 'Hello!',
            timestamp: '02-02-2020',
        },
        {
            isFromBot: true,
            message: 'How are you?',
            timestamp: '03-02-2020',
        },
        {
            isFromBot: false,
            message: 'some message',
            timestamp: '04-02-2020',
        },
        {
            isFromBot: false,
            message:
                'Hello have any questions or feedback? Alex or Kam will reply as soon as they can! In the meantime, come join our community Slack.',
            timestamp: '05-02-2020',
        },
        {
            isFromBot: true,
            message: 'Bye!',
            timestamp: '06-02-2020',
        },
    ];

    let msg = '';

    async function sendMsg(successCallback) {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        let response = await fetch(url);

        if (response.ok) {
            const comments = await response.json();
            console.log(comments[0]);
            successCallback(comments[0].name);
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
    }

    const handleSubmit = (evt) => {
        const myMsg = evt.detail;
        addMessage(myMsg);
        sendMsg((msg) => addMessage(msg, true));
    }

    const openChat = () => isOpen = !isOpen;
</script>

<style>
    .widget {
        min-height: 500px;
        max-height: 700px;
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
        <Controls bind:value={msg} on:submit={handleSubmit}/>
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

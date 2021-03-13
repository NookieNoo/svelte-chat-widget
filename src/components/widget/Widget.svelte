<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp, Icon } from 'svelte-materialify';
    import { mdiMessageReply, mdiClose } from '@mdi/js';
    import { fade } from 'svelte/transition';

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

    const addMessage = (evt) => {
        messages = [...messages, {
            isFromBot: false,
            message: evt.detail,
            timestamp: Date.now(),
        }];
    }

    const openChat = () => isOpen = !isOpen;
</script>

<style>
    .widget {
        height: 700px;
        max-width: 375px;
        position: fixed;
        bottom: 100px;
        right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        <Controls bind:value={msg} on:submit={addMessage}/>
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

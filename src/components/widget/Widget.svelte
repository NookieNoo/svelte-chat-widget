<script>
    import Header from './Header.svelte';
    import Controls from './Controls.svelte';
    import Scrollbar from './Scrollbar.svelte';
    import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';

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
        // console.log(evt.detail);
    }
</script>

<style>
    .widget {
        height: 700px;
        width: 375px;
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
    <Scrollbar messages={messages}/>
    <Controls bind:value={msg} on:submit={addMessage}/>
</div>

<script>
    import { Avatar, Container, Row, Col } from 'svelte-materialify';
    let messages = [
        {
            isFromBot: true,
            message: 'Hello!',
            timestamp: '02-02-2020',
        },
        {
            isFromBot: true,
            message: 'How are you?',
            timestamp: '02-02-2020',
        },
        {
            isFromBot: false,
            message: 'some message',
            timestamp: '02-02-2020',
        },
        {
            isFromBot: false,
            message:
                'Hello have any questions or feedback? Alex or Kam will reply as soon as they can! In the meantime, come join our community Slack.',
            timestamp: '02-02-2020',
        },
        {
            isFromBot: true,
            message: 'Bye!',
        },
    ];
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
        {#each messages as msg}
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

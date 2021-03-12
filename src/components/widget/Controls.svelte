<script>
    import { createEventDispatcher } from 'svelte';
    import { Row, Col, Textarea, MaterialApp, Icon, Button, Divider } from 'svelte-materialify';
    import { mdiSend } from '@mdi/js';
    import { enter } from '../../utils/keydownActions.js';

    export let value;
    const dispatch = createEventDispatcher();

    const submit = () =>  {
        dispatch('submit', value);
        value = '';
    }
</script>

<style>

</style>

<div class="rounded-b-lg">
    <Divider />
    <Textarea bind:value={value} on:change={submit} on:enter={submit} color="black" placeholder="Start typing..." outlined rows=2 noResize>
        <div slot="append" >
            <Button fab size="small">
                <Icon path={mdiSend}/>
            </Button>
        </div>
    </Textarea>
</div>
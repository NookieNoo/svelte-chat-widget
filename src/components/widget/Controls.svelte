<script>
    import { createEventDispatcher } from 'svelte';
    import { Row, Col, Textarea, TextField, MaterialApp, Icon, Button, Divider, Jump } from 'svelte-materialify';
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


    <TextField bind:value={value} on:change={submit} color="black" placeholder="Start typing..." outlined rows=2 noResize>
        <div slot="append" >
            <Button fab size="small" class="primary-color white-text">
                <Icon path={mdiSend}/>
            </Button>
        </div>
    </TextField>
</div>
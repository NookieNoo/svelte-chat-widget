<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { Row, Col, Textarea, TextField, MaterialApp, Icon, Button, Divider, Jump } from 'svelte-materialify';
    import { mdiSend } from '@mdi/js';

    export let value;
    const dispatch = createEventDispatcher();

    const submit = () =>  {
        dispatch('submit', value);
        value = '';
    }

    const onKeyDown = (e) => {
        if (e.code === 'Enter') {
            dispatch('submit', value);
            value = '';
        }
    }

    onMount(function() {
        //TODO Разобраться с костылем
        let textfield = document.getElementById('textfield');
        let input = document.getElementsByTagName('input');
        input[0].focus();
	});

</script>

<style>

</style>

<div class="rounded-b-lg">
    <Divider />
    <TextField id='textfield' bind:value={value} on:keydown={onKeyDown} color="black" placeholder="Start typing..." outlined>
        <div slot="append" >
            <Button on:click={submit} fab size="small" class="primary-color white-text">
                <Icon path={mdiSend}/>
            </Button>
        </div>
    </TextField>
</div>
<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { Row, Col, Textarea, TextField, MaterialApp, Icon, Button, Divider, Jump, ProgressLinear } from 'svelte-materialify';
    import { mdiSend } from '@mdi/js';

    export let value;
    export let isLoading;

    //TODO Разобраться чем проп отличается от bind
    export let disabled;

    const dispatch = createEventDispatcher();

    function handleSubmit(eValue) {
        if (eValue) {
            dispatch('submit', eValue);
            value = '';
        }
    }

    function submit() {
        handleSubmit(value);
    }

    function onKeyDown(e) {
        if (e.code === 'Enter') {
            handleSubmit(value);
        }
    }

    onMount(function() {
        //TODO Разобраться с костылем (не фокусируется на TextField)
        let chatInput = document.querySelector("#chatInput");
        chatInput.focus();
	});

</script>

<div class="rounded-b-lg">
    {#if isLoading}
        <ProgressLinear indeterminate/>
    {/if}
    <Divider />
    <TextField id='chatInput' disabled={disabled} autocomplete="off" bind:value={value} on:keydown={onKeyDown} color="black" placeholder="Start typing..." outlined>
        <div slot="append" >
            <Button on:click={submit} fab size="small" class="primary-color white-text">
                <Icon path={mdiSend}/>
            </Button>
        </div>
    </TextField>
</div>
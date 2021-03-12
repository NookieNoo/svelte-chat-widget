<script>
    import { Row, Col, Textarea, MaterialApp, Icon, Button, Divider } from 'svelte-materialify';
    import { mdiSend } from '@mdi/js';
</script>

<style>
    .controls {
        /* height: 100px; */
        /* border: 1px solid black; */
    }
</style>

<div class="controls rounded-b-lg">
    <Divider />
    <Textarea placeholder="Start typing..." outlined rows=2>
        <div slot="append" >
            <Button fab size="small">
                <Icon path={mdiSend}/>
            </Button>
        </div>
    </Textarea>
</div>
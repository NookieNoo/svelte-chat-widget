<script>
  import { Row, Col, MaterialApp, Button, Icon } from 'svelte-materialify';
  import { mdiClose } from '@mdi/js';
</script>

<div class="primary-color white-text rounded-t-lg pa-3 d-flex flex-column align-start">
  <div class="icon">
    <Icon path={mdiClose} />
  </div>

  <div class="text-h6">Welcome!</div>
  <div class="text-subtitle-2">Ask us anything using the chat window</div>
</div>

<style>
  .icon {
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
  }
</style>

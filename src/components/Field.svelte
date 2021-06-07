<script lang="ts">
  export let name: string;
  export let label: string = '';
  export let instructions: string = '';
  // import { Element } from '../types/Element';
 
  let ids = {
    field: `${name}-field`,
    label: `${name}-label`,
    instructions: `${name}-instructions`,
    input: name,
  };

</script>
<template>
	<div id={ids.field} class="input">
    <div class="heading">
      <label id={ids.label} for={ids.input}>{label}</label>
    </div>
    <div id={ids.instructions}><p>{instructions}</p></div>
    <div class="input ltr">
      <slot></slot>
    </div>
  </div>
</template> 
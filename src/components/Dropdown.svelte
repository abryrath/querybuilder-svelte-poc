<script lang="ts">
    import type { DropdownOption } from '../types/Form';
    export let id: string;
    export let options: DropdownOption[];
    export let name: string;

    let selected: string|number = undefined;
</script>

<template>
    <div class="select">
        <select {id} {name} bind:value={selected}>
            {#each options as option,i }
                <option value={option.value}>{option.label}</option>
            {/each}
        </select>
    </div>
</template>
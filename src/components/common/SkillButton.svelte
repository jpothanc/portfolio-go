<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let icon = "vscode-icons:file-type-svelte";
  export let text = "Button";
  export let bgcolor = "red";
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<div
  class="flex gap-2 items-center p-1 pl-1 pr-1  md:pl-3 md:pr-3 rounded-xl bg-slate-0
  font-semibold text-neutral-700 border-neutral-800 dark:shadow-slate-800 shadow-sm
  hover:shadow-slate-400 hover:border-black hover:scale-105 hover:shadow-md
  transition:all duration-300 ease-in-out
 
  text-xs md:text-sm
  


dark:text-neutral-300 dark:bg-neutral-900 dark:font-normal"
  style="width: max-content;height=max-content background-color:{bgcolor} "
>
  {#if visible}
    <div transition:fade={{ duration: 1000 }} class="">
      <Icon {icon} width="24" height="24" />
    </div>
    <div transition:fade={{ duration: 2000 }} >{text}</div>
  {/if}
</div>

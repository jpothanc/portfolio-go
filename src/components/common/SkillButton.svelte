<script>
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let icon = "vscode-icons:file-type-svelte";
  export let text = "Button";
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<div
  class="flex gap-2 items-center p-2 pl-3 pr-3 rounded-xl
bg-slate-0 border-transparent border

hover:border-orange-500 transition:all duration-300 ease-in-out
font-semibold text-neutral-700



dark:text-neutral-300 dark:bg-neutral-900 dark:font-normal"
  style="width: max-content;height=max-content"
>
  {#if visible}
    <div transition:fade={{ duration: 1000 }} class="">
      <Icon {icon} width="24" height="24" />
    </div>
  <div transition:fade={{ duration: 2000 }} class="text-sm">{text}</div>
  {/if}

</div>

<script>
  import Icon from "@iconify/svelte";
  export let icon = "vscode-icons:file-type-svelte";
  export let subtitle = "";
</script>

<div
  class="flex flex-col justify-center items-center mt-10
   border-zinc-800 rounded-lg shadow-md dark:shadow-orange-900 dark:shadow-sm "
>
  <div
    class="container flex justify-start px-2 items-center gap-1 mt-0
    text-white border-blue-400 border-2 bg-theme-secondary hover:brightness-110 transition:all duration-300 ease-in-out
    dark:bg-transparent shadow-sm border-transparent dark:text-blue-400 text-xs md:text-sm
  "
  >
    <span class="">
      <Icon {icon} height="24" width="24" />
    </span>
    <span class="p-2">{subtitle}</span>
  </div>
  <div class="flex gap-2 flex-wrap m-5">
    <slot></slot>
  </div>
</div>

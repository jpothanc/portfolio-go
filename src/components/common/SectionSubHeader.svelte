<script>
  import Icon from "@iconify/svelte";
  export let icon = "vscode-icons:file-type-svelte";
  export let subtitle = "";
</script>

<div
  class="flex flex-col justify-center items-center mt-10
   border-zinc-800 rounded-lg shadow-md dark:shadow-slate-800 dark:shadow-sm"
>
  <div
    class="container flex justify-start px-2 items-center gap-1 mt-0
     bg-white
    dark:bg-transparent rounded-lg shadow-sm border-transparent
  hover:brightness-110 transition:all duration-300 ease-in-out
  dark:text-blue-400
  "
  >
    <span class="position-absolute top-0 left-0 -translate-y-1/2">
      <Icon {icon} height="24" width="24" />
    </span>
    <span class="position-absolute top-0 left-0 -translate-y-1/2"
      >{subtitle}</span
    >
  </div>
  <div class="flex gap-2 flex-wrap m-5">
    <slot></slot>
  </div>
</div>

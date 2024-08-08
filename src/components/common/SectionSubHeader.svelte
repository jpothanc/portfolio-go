<script>
  import Icon from "@iconify/svelte";
  export let icon = "vscode-icons:file-type-svelte";
  export let subtitle = "";
  export let color = "text-green-500";
</script>

<div
  class="flex flex-col justify-center items-center mt-5 ml-40 mr-40
  border border-zinc-800 rounded-lg shadow-md
   dark:{color}"
>
  <div
    class="container flex justify-center items-center p-2 gap-1 mt-0
     bg-white
    dark:bg-zinc-900 rounded-lg shadow-sm border-transparent
  hover:brightness-110 transition:all duration-300 ease-in-out"
  >
    <span>
      <Icon {icon} height="24" width="24" />
    </span>
    <span>{subtitle}</span>
  </div>
  <slot></slot>
</div>

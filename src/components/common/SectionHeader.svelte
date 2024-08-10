<script>
  import Icon from "@iconify/svelte";
  export let icon = "vscode-icons:file-type-svelte";
  export let normalText = "";
  export let gradientText = "";
</script>

<div
  class="flex flex-col justify-center items-center mx-auto p-2  xl:ml-40 xl:mr-40 "
>
  <h1
    class="flex align-middle justify-center gap-3 text-3xl lg:text-3xl text-center tracking-wide w-full p-2
    dark:text-neutral-300"
  >
    <span>
      <Icon {icon} width="32" height="32" />
    </span>
    <span>
      {normalText}
      <span
        class="bg-gradient-to-r from-green-700 to-red-500 dark:from-orange-500
         dark:to-red-800 text-transparent bg-clip-text"
      >
        {" "}
        {gradientText}
      </span>
    </span>
  </h1>

  <slot></slot>
</div>

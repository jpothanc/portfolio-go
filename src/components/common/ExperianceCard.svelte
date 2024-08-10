<script>
  import Icon from "@iconify/svelte";

  let iconCompany = "guidance:coworking-space";
  let iconTimeline = "game-icons:duration";
  export let title = "";
  export let company = "";
  export let timeline = "";
</script>

<div
  class="flex flex-col justify-center items-center mt-10
   border-zinc-800 rounded-lg shadow-md dark:shadow-orange-900 dark:shadow-sm

   min-w-full
   "
>
  <div
    class="container flex justify-between px-2 items-center gap-1 mt-0 text-white
     bg-theme-secondary p-1 hover:brightness-110 transition:all duration-300 ease-in-out border-blue-400 border-2
    dark:bg-transparent   border-transparent dark:text-blue-400"
  >
    <div class="flex pl-2 pt-2">
      <span class="">{title}</span>
    </div>
    <div class="flex gap-4 pr-10">
      <div class="flex gap-2">
        <span class="dark:text-green-600">
          <Icon icon={iconCompany} height="24" width="24" />
        </span>

        <span class="">{company}</span>
      </div>
      <div class="flex gap-2">
        <span class="dark:text-yellow-600">
          <Icon icon={iconTimeline} height="24" width="24" />
        </span>

        <span class="">{timeline}</span>
      </div>
    </div>
  </div>
  <div class="flex self-start flex-wrap p-3">
    <slot></slot>
  </div>
</div>

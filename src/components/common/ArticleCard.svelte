<script>
  import Icon from "@iconify/svelte";
  export let title = "";
  export let url = "";
  export let description = "";
  export let repo = "";
</script>

<div class="flex flex-wrap justify-center items-center">
  <div
    class="flex flex-col pl-4 pr-4 p-1 dark:bg-transparent border border-neutral-800 rounded-xl m-h-40 w-60
    text-md dark:text-neutral-400 text-tracking-wider hover:scale-105 transition:all duration-300 ease-in-out
    hover:border-green-900 dark:hover:border-orange-500"
  >
    <div
      class="flex justify-between p-2 text-sm mt-2 bg-theme-secondary rounded-lg dark:bg-transparent dark:text-blue-400"
    >
      <Icon icon="ooui:articles-ltr" width="24" height="24" />
      <span>{title}</span>
    </div>
    <hr class="border-t-2 mt-1 dark:forced-color-adjust-none dark:border-gray-800" />

    <span class="flex-1 text-xs mt-5 dark:bg-transparent p-4 rounded-lg"
      >{description}</span
    >
    <div class="flex gap-2 justify-end px-2 pb-2 m-1">
      {#if repo}
        <span class="dark:text-green-600">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <Icon icon="fluent-mdl2:git-hub-logo" width="24" height="24" />
          </a>
        </span>
      {/if}
      <span class="dark:text-yellow-600">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon icon="mingcute:medium-line" width="24" height="24" />
        </a>
      </span>
    </div>
  </div>
</div>

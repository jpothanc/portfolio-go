<script>
  import Icon from "@iconify/svelte";

  export let project;
</script>

<div class="flex flex-wrap justify-center items-center">
  <div
    class="flex flex-col pl-4 pr-4 p-1 dark:bg-neutral-900 border border-neutral-800 rounded-xl h-60 w-60 text-md
  dark:text-neutral-400 text-tracking-wider hover:scale-105 transition:all duration-300 ease-in-out"
  >
    <div class="flex justify-between p-2 text-lg mt-2 dark:text-blue-400">
      <span>{project.name}</span>
      <span class="dark:text-green-400">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <Icon icon="fluent-mdl2:git-hub-logo" width="28" height="28" />
        </a>
      </span>
    </div>
    <hr />
    <span class="flex-1 text-xs mt-5">{project.description}</span>
    <span
      class="flex justify-items-center items-center text-xs mt-2 mb-2 p-2 rounded-lg bg-slate-200 dark:bg-zinc-800"
    >
      <img src={project.technology} class="h-5" alt="tech stack" />
    </span>
  </div>
</div>

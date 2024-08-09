<script lang="ts">
  import Icon from "@iconify/svelte";

  export let project;
</script>

<div class="flex flex-wrap justify-center items-center">
  <div
    class="flex flex-col pl-4 pr-4 p-1 dark:bg-tramsparent border border-neutral-800 rounded-xl h-60 w-60
    text-md dark:text-neutral-400 text-tracking-wider hover:scale-105 transition:all duration-300 ease-in-out
    hover:border-orange-500"
  >
    <div class="flex justify-between p-2 text-lg mt-2 dark:text-blue-400">
      <span>{project.name}</span>
      <div class="flex gap-2">
        <span class="dark:text-green-600"
          ><a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Icon icon="fluent-mdl2:git-hub-logo" width="24" height="24" />
          </a>
        </span>
        <span class="dark:text-yellow-600">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Icon icon="lucide:external-link" width="24" height="24" />
          </a>
        </span>
        <span class="dark:text-red-600">
          <a href={project.readme} target="_blank" rel="noopener noreferrer">
            <Icon icon="la:readme" width="24" height="24" />
          </a>
        </span>
      </div>
    </div>
    <hr class="border-t-2 border-gray-800" />

    <span class="flex-1 text-xs mt-5">{project.description}</span>
    <span
      class="flex justify-items-center items-center text-xs mt-2 mb-2 p-2 rounded-lg bg-slate-200 dark:bg-zinc-800"
    >
      <img src={project.technology} class="h-5" alt="tech stack" />
    </span>
  </div>
</div>

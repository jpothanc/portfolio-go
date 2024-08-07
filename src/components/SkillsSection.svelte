<script>
  import Icon from "@iconify/svelte";
  import { SKILLS } from "../config/data";
  import SkillButton from "./common/SkillButton.svelte";
</script>

<div class="container flex flex-col justify-center mt-10">
  <div class="flex flex-col justify-center items-center mx-auto p-2">
    <h1
      class="text-3xl lg:text-4xl text-center tracking-wide dark:text-neutral-300"
    >
      <span
        class="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
      >
        {" "}
        Skills!
      </span>
    </h1>

    <div class="flex flex-col  justify-center items-center mt-5 dark:text-green-500 font-semibold">
        <Icon icon="streamline:ai-technology-spark" class="" />
        Technology
    <div class="flex gap-2 flex-wrap mt-5  ml-40 mr-40 ">
      {#each SKILLS as skill}
        <div class="flex">
          {#if skill.icon}
            <SkillButton icon={skill.icon} text={skill.name} />
          {/if}
        </div>
      {/each}
    </div>
  </div>
  </div>
</div>

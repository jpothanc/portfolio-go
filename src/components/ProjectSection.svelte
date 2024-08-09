<script>
  import { PersonalProjects } from "../config/data";
  import Card from "./common/ProjectsCard.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
</script>

<div id="projects" class="container flex flex-col justify-center mt-10">
  <SectionHeader gradientText="Projects">
    <div class="flex flex-wrap gap-3 justify-center items-center mt-10">
      {#each PersonalProjects as project}
        <Card {project} />
      {/each}
    </div>
  </SectionHeader>
</div>

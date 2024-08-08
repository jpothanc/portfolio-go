<script>
  import { onMount } from "svelte";
  import ExperianceSection from "./components/ExperianceSection.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import NavBar from "./components/NavBar.svelte";
  import ProjectsSection from "./components/ProjectSection.svelte";
  import SkillsSection from "./components/SkillsSection.svelte";
  import MotoSection from "./components/MotoSection.svelte";
  import Articles from "./components/Articles.svelte";
  
</script>

<NavBar />
<div class="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection />
  <!-- <MotoSection /> -->
  <SkillsSection />
  <ProjectsSection />
  <ExperianceSection />
  <Articles />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.white"); /* Light mode background */
    color: black;
  }
  :global(html.dark) {
    background-color: theme("colors.gray.950"); /* Dark mode background */
    color: white;
  }
</style>

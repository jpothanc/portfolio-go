<script>
  import { onMount } from "svelte";
  import ExperianceSection from "./components/ExperianceSection.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import NavBar from "./components/NavBar.svelte";
  import ProjectsSection from "./components/ProjectSection.svelte";
  import SkillsSection from "./components/SkillsSection.svelte";
  import ArticleSection from "./components/ArticleSection.svelte";
  import ContactSection from "./components/ContactSection.svelte";
</script>

<NavBar />
<div
  class="max-w-7xl mx-auto pt-20 px-6 bg-white
  dark:bg-gradient-to-r from-gray-950 to-zinc-950 antialiased"
>
  <HeroSection />
  <SkillsSection />
  <ExperianceSection />
  <ProjectsSection />
  <ArticleSection />
  <ContactSection />
</div>

<style lang="postcss">
  :global(html) {
    background-color: rgb(255, 255, 253); /* Light mode background */
    color: black;
  }
  :global(html.dark) {
    background-color: theme("colors.black"); /* Dark mode background */
    color: white;
  }
</style>

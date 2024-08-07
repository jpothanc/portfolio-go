<script>
  import { onMount } from "svelte";
  import ExperianceSection from "./components/ExperianceSection.svelte";
  import HeroSection from "./components/HeroSection.svelte";
  import Hero from "./components/HeroSection.svelte";
  import NavBar from "./components/NavBar.svelte";
  import ProjectsSection from "./components/ProjectSection.svelte";
  import SkillsSection from "./components/SkillsSection.svelte";
  
  let darkMode = true;

  onMount(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkMode = true;
    } else {
      darkMode = false;
    }
  });

  
  function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button on:click={toggleDarkMode} class="bg-red-600">
  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
</button>
<NavBar />
<div class="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection />
  <SkillsSection />
  <ProjectsSection />
  <ExperianceSection />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.gray.100"); /* Light mode background */
  }
  :global(html.dark) {
    background-color: theme("colors.gray.950"); /* Dark mode background */
  }
</style>

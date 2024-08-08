<script lang="ts">
  import config from "../config/config.json";
  import logo from "../assets/svelte.svg";
  import { Moon } from "lucide-svelte";
  import { onMount } from "svelte";
  import { NavItems } from "../config/data";

  const scrollTo = (event: any) => {
    const target = document.querySelector(event.currentTarget.hash);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      console.log("Smooth scroll to", event.currentTarget.hash);
    }
  };

  let darkMode = true;

  onMount(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkMode = true;
    } else {
      darkMode = false;
    }
    darkMode = true;
    document.documentElement.classList.add("dark");
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

<nav
  class="sticky top-0 z-50 backdrop-blur-lg border-b border-r border-l border-neutral-700/80
   bg-transparent max-w-7xl mx-auto h-24 flex items-center"
>
  <div class="container flex gap-2 mx-auto sm:text-sm  border1">
    <!-- logo -->
    <div class="flex items-center flex-shrink-0 border1">
      <img class="flex p-1" src={logo} alt="logo" />
    </div>

    <!-- menu items -->
    <div class="flex-1 self-center border1">
      <ul class="flex justify-center border1">
        {#each NavItems as item, index}
          <li class="p-2" data-index={index}>
            <a href={item.url} on:click={scrollTo}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <!-- Dark mode toggle button -->
    <div class="flex-2 items-center self-center p-1 mr-5 border1">
      <button on:click={toggleDarkMode}>
        <Moon size="20" class={!darkMode ? "text-black" : "text-white"} />
      </button>
    </div>
  </div>
</nav>

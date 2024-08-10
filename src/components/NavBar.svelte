<script lang="ts">
  import logo from "../assets/svelte.svg";
  import { onMount } from "svelte";
  import { NavItems } from "../config/data";
  import Icon from "@iconify/svelte";
  import jessish from "../assets/Jessish.jpg";

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
  class="sticky top-0 z-50 backdrop-blur-lg border-b border-theme-secondary dark:border-orange-700/80
   bg-transparent max-w-7xl mx-auto h-24 flex items-center"
>
  <div class="container flex gap-1 mx-auto sm:text-sm border1">
    <!-- logo -->
    <div class="flex gap-1 items-center">
      <div class="flex items-center flex-shrink-0 px-5 border1">
        <img
          class="flex p-1 h-20 w-20 rounded-[50%] hover:scale-[200%] transition-all duration-300 ease-in-out"
          src={jessish}
          alt="logo"
        />
      </div>
      <span
        class="flex border1 text-lg dark:bg-orange-400 rounded-md text-black font-semibold font- p-2"
      >
        Jessish Pothancheri
      </span>
    </div>

    <!-- menu items -->
    <div class="flex ml-[10%] self-center border1">
      <ul class="flex justify-center border1">
        {#each NavItems as item, index}
          <li class="p-2" data-index={index}>
            <a href={item.url} on:click={scrollTo}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <!-- Dark mode toggle button -->
    <div class="flex items-center self-center p-1 ml-auto mr-5 border1">
      <button on:click={toggleDarkMode}>
        <Icon icon="f7:moon-stars" width="24" height="24" />
        <!-- <Moon size="20" class={!darkMode ? "text-black" : "text-white"} /> -->
      </button>
    </div>
  </div>
</nav>

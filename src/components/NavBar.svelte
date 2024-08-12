<script lang="ts">
  import { onMount } from "svelte";
  import { AppIcons, NavItems } from "../config/data";
  import Icon from "@iconify/svelte";
  import jessish from "../assets/Jessish.jpg";
  import ToolTip from "./common/ToolTip.svelte";

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

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  let mobileMenu = false;
  const toggleMenu = () => (mobileMenu = !mobileMenu);
</script>

<nav
  class="sticky top-0 z-50 backdrop-blur-lg border-b border-theme-secondary
   dark:border-orange-700/80 bg-transparent max-w-7xl mx-auto h-24 flex items-center"
>
  <div class="container flex gap-1 mx-auto sm:text-sm">
    <!-- logo -->
    <div class="flex gap-1 items-center">
      <div class="flex items-center flex-shrink-0 px-5">
        <img
          class="flex p-1 h-20 w-20 rounded-[50%] hover:scale-[200%] transition-all duration-300 ease-in-out"
          src={jessish}
          alt="logo"
        />
      </div>
      <!-- name banner, hidden on small screen -->
      <!-- <span
        class="hidden text-lg dark:text-white rounded-md font-semibold
        p-1 md:flex"
      >
        Jessish Pothancheri
      </span> -->
    </div>

    <!-- menu items for large screen-->
    <div
      class="flex w-[80%] ml-[10%] justify-center items-center pr-1 text-xs md:text-lg"
    >
      <ul class="md:flex justify-center flex-wrap hidden">
        {#each NavItems as item, index}
          <li class="p-2" data-index={index}>
            <a href={item.url} on:click={scrollTo}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex w-[10%] justify-end">
      <!-- Dark mode toggle button -->
      <ToolTip text="toggle theme">
        <div class="flex self-center p-2 ml-auto">
          <button on:click={toggleDarkMode}>
            <Icon icon={AppIcons.themeMode} width="24" height="24" />
          </button>
        </div>
      </ToolTip>

      <!-- mobile menu button, only visible on small screen -->
      <div class="md:hidden flex self-center p-2 pr-4">
        <button on:click={toggleMenu}>
          {#if mobileMenu}
            X
          {:else}
            <Icon icon={AppIcons.mobileMenu} width="24" height="24" />
          {/if}
        </button>
      </div>
    </div>

    <!-- mobile menu only visible on small screens -->
    {#if mobileMenu}
      <div
        class="md:hidden fixed mt-20 z-20 bg-white/80 dark:bg-gray-950/80
         font-semibold w-full flex justify-center text-sm
         dark:border-orange-700/80 dark:border-b"
      >
        <!-- menu items -->
        <ul class="">
          {#each NavItems as item, index}
            <li class="p-2" data-index={index}>
              <a href={item.url} on:click={scrollTo}>{item.name}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</nav>

<script>
  import jpothanc from "../assets/jpothanc.png";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { AppIcons, Hero } from "../config/data";
  import SectionHeader from "./common/SectionHeader.svelte";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div
    id="about"
    transition:fade={{ duration: 1000 }}
    class="container flex justify-center w-full-screen"
  >
    <SectionHeader
      normalText="Hey there !"
      gradientText=""
      icon={AppIcons.heroSection}
    >
      <!-- about me image   -->
      <div
        transition:fade={{ duration: 2000 }}
        class="text-container flex border1 flex-col md:flex-row
           w-full
         xl:border-yellow-500 sm:border-red-500 md:border-green-600 lg:border-blue-500"
      >
        <div class="flex self-center border1">
          <span>
            <img
              src={jpothanc}
              alt="jpothanc"
              class="object-fill rounded-[50%] size-[200px]"
            />
          </span>
        </div>

        <!-- about me description -->
        <div
          class="flex-1 items-center self-center p-3 text-xs md:text-sm tracking-wider
           dark:text-neutral-500 border1"
        >
          <p>{Hero.description}</p>
        </div>
      </div>

      <div transition:fade={{ duration: 3000 }} class="text-container">
        <span
          class="p-3 text-xs md:text-sm tracking-wider
           dark:text-neutral-500 border-1"
        >
          <p>{Hero.motivation}</p>
        </span>
      </div>
    </SectionHeader>
  </div>
{/if}

<style>
  .text-container {
    @apply flex justify-center gap-2 flex-wrap mx-auto mt-4;
  }
</style>

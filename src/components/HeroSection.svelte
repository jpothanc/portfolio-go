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
    class="container flex flex-col justify-center"
  >
    <SectionHeader normalText="Hey there !" gradientText="" icon={AppIcons.heroSection}>
      <!-- about me image   -->
      <div transition:fade={{ duration: 2000 }} class="text-container">
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
          class="flex-1 items-center self-center p-3 text-sm tracking-wider
           dark:text-neutral-500 border-1"
        >
          <p>{Hero.description}</p>
        </div>
      </div>

      <div transition:fade={{ duration: 3000 }} class="text-container">
        <span
          class="p-3 text-sm tracking-wider
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
    @apply flex justify-center gap-2 flex-wrap mx-auto mt-4 ;
  }
</style>

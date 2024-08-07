<script>
  import jpothanc from "../assets/jpothanc.png";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { HERO } from "../config/data";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div
    transition:fade={{ duration: 1000 }}
    class="container flex flex-col justify-center"
  >
    <div class="flex justify-center items-center mx-auto p-2">
      <h1
        class="text-3xl lg:text-4xl text-center tracking-wide dark:text-neutral-300"
      >
        Hey there, I'm
        <span
          class="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
        >
          {" "}
          Jessish!
        </span>
      </h1>
    </div>

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

      <div
        class="flex-1 items-center self-center p-3 text-sm tracking-wider dark:text-neutral-500 border-1"
      >
        <p>{HERO.description}</p>
      </div>
    </div>

    <div transition:fade={{ duration: 3000 }} class="text-container">
      <div
        class="flex-1 items-center self-center p-3 text-sm tracking-wider dark:text-neutral-500 border-1"
      >
        <p>{HERO.motivation}</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .text-container {
    @apply flex justify-center gap-2 flex-wrap mx-auto mt-5 mr-40 ml-40;
  }
</style>

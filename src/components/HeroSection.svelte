<script>
  import config from "../config/config.json";
  import jpothanc from "../assets/jpothanc.png";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
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
        class="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide  dark:text-neutral-300"
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

    <div
      transition:fade={{ duration: 2000 }}
      class="flex justify-center gap-3 flex-wrap border-1 mx-auto mt-10 mr-40 ml-40"
    >
      <div class="flex text-right rounded-3xl self-center">
        <span>
          <img
            src={jpothanc}
            alt="jpothanc"
            class="object-fill rounded-[50%] size-[200px]"
          />
        </span>
      </div>

      <div
        class="flex-1 items-center border-1 self-center p-3  text-sm tracking-wider dark:text-neutral-500"
      >
        <span>{config.hero.description}</span>
      </div>
    </div>
  </div>
{/if}

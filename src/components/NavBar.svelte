<script lang="ts">
  import config from "../config/config.json";
  import logo from "../assets/svelte.svg";

  const scrollTo = (event: any) => {
    const target = document.querySelector(event.currentTarget.hash);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      console.log("Smooth scroll to", event.currentTarget.hash);
    }
  };
</script>

<nav
  class="sticky top-0 flex backdrop-blur-lg border-b border-neutral-700/80 text-white justify-center items-center bg-slate-950"
>
  <div
    class="container flex gap-2 justify-center items center border-2 mx-auto"
  >
    <div class="flex items-center border flex-shrink-0">
      <img class="flex p-1" src={logo} alt="logo" />
    </div>
    <div class="border-2">
      <ul class="flex">
        {#each config.navbar as item, index}
          <li class="p-2" data-index={index}>
            <a href={item.url} on:click={scrollTo}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

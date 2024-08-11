<script lang="ts">
  export let text = "";
  export let position = "bottom"; // Default position
  let visible = false;
  const handleVisibility = (state: boolean) => {
    visible = state;
    console.log("Visible", visible);
  };
</script>

<div class="relative flex items-center">
  <div
    role="button"
    tabindex="0"
    class="cursor-pointer"
    on:mouseenter={() => handleVisibility(true)}
    on:mouseleave={() => handleVisibility(false)}
    on:focus={() => handleVisibility(true)}
    on:blur={() => handleVisibility(false)}
  >
    <slot></slot>
    <!-- This slot allows for flexible content inside the tooltip trigger area -->
  </div>

  {#if visible}
    <div
      class={`absolute bg-gray-700 text-white text-xs p-2 rounded shadow-md whitespace-nowrap
                 ${position === "top" ? "bottom-full mb-2" : ""}
                 ${position === "bottom" ? "top-full mt-1" : ""}
                 ${position === "left" ? "right-full mr-2" : ""}
                 ${position === "right" ? "left-full ml-2" : ""}
                 -translate-x-1/2 left-1/2`}
    >
      {text}
    </div>
  {/if}
</div>

<style>
  /* Optional: Additional styles if needed */
</style>

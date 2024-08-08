<script>
  export let normalText = "";
  export let gradientText = "";
</script>

<div class="flex flex-col justify-center items-center mx-auto p-2 ">
  <h1
    class="text-3xl lg:text-4xl text-center tracking-wide dark:text-neutral-300"
  >
    {normalText}
    <span
      class="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
    >
      {" "}
      {gradientText}
    </span>
  </h1>
  <slot></slot>
</div>

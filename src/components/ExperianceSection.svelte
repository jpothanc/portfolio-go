<script>
  import SectionSubHeader from "./common/SectionSubHeader.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
  import { Experiance } from "./../config/data";
</script>

<div
  id="experiance"
  class="container flex flex-col justify-center mt-10 dark:text-neutral-500"
>


  <SectionHeader gradientText="Work Experiance">
    {#each Experiance as experiance}
      <SectionSubHeader
        icon={experiance.description}
        subtitle={experiance.name}
      >
        <p>
          {experiance.description}
        </p>
      </SectionSubHeader>
    {/each}
  </SectionHeader>
</div>

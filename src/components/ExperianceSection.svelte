<script lang="ts">
  import SectionHeader from "./common/SectionHeader.svelte";
  import { AppIcons, Experiance } from "./../config/data";
  import ExperianceCard from "./common/ExperianceCard.svelte";
</script>

<div
  id="experiance"
  class="container flex flex-col justify-center mt-10 dark:text-neutral-500"
>
  <SectionHeader gradientText="experiance" icon={AppIcons.experianceSection}>
      {#each Experiance as experiance}
        <ExperianceCard
          title={experiance.name}
          company={experiance.company}
          timeline={experiance.timeline}
        >
          <p>
            {experiance.description}
          </p>
        </ExperianceCard>
      {/each}
  </SectionHeader>
</div>

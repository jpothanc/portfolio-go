<script>
  import SectionSubHeader from "./common/SectionSubHeader.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
  import { Articles } from "./../config/data";
</script>

<div
  id="articles"
  class="container flex flex-col justify-center mt-10 dark:text-neutral-500  border"
>
  <SectionHeader gradientText="Articles">
    {#each Articles as article}
      <SectionSubHeader icon={article.description} subtitle={article.name}>
        <p>
          {article.description}
        </p>
      </SectionSubHeader>
    {/each}
  </SectionHeader>
</div>

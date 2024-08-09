<script>
  import SectionHeader from "./common/SectionHeader.svelte";
  import { Articles } from "./../config/data";
  import ArticleCard from "./common/ArticleCard.svelte";
  import { CloudCog } from "lucide-svelte";
</script>

<div
  id="articles"
  class="container flex flex-col justify-center mt-10 dark:text-neutral-500"
>
  <SectionHeader gradientText="Articles">
    <div class="flex flex-wrap justify-center items-center gap-2 mt-10">
      {#each Articles as article}
        <ArticleCard
          title={article.name}
          description={article.description}
          url={article.url}
          technology={article.technology}
        />
      {/each}
    </div>
  </SectionHeader>
</div>

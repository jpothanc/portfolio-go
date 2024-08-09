<script>
  import SectionHeader from "./common/SectionHeader.svelte";
  import { AppIcons, Articles } from "./../config/data";
  import ArticleCard from "./common/ArticleCard.svelte";
</script>

<div
  id="articles"
  class="container flex flex-col justify-center mt-10 dark:text-neutral-500"
>
  <SectionHeader gradientText="articles" icon={AppIcons.articleSection}>
    <div class="flex flex-wrap justify-center items-center gap-2 mt-10">
      {#each Articles as article}
        <ArticleCard
          title={article.name}
          description={article.description}
          url={article.url}
          repo={article.repo}
        />
      {/each}
    </div>
  </SectionHeader>
</div>

<script>
  import Icon from "@iconify/svelte";
  import {
    Skills,
    Icons,
    DevelopmentPractices,
    Achievements,
    Personality,
  } from "../config/data";
  import SkillButton from "./common/SkillButton.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
  import SectionSubHeader from "./common/SectionSubHeader.svelte";
</script>

<div class="container flex flex-col justify-center mt-10">
  <SectionHeader gradientText="Skills!">
    <SectionSubHeader icon={Icons.technology} subtitle="Technology">
      <div class="flex gap-2 flex-wrap mt-10 ml-40 mr-40">
        {#each Skills as skill}
          <div class="flex">
            {#if skill.icon}
              <SkillButton icon={skill.icon} text={skill.name} />
            {/if}
          </div>
        {/each}
      </div>
    </SectionSubHeader>

    <SectionSubHeader
      icon={Icons.practices}
      subtitle="Development Practices & Testing"
    >
      <div class="flex gap-2 flex-wrap mt-10 ml-40 mr-40">
        {#each DevelopmentPractices as skill}
          <div class="flex">
            <SkillButton icon={skill.icon} text={skill.name} />
          </div>
        {/each}
      </div>
    </SectionSubHeader>

    <SectionSubHeader
      icon={Icons.achievements}
      subtitle="Skills and Achievements"
    >
      <div class="flex gap-2 flex-wrap mt-10 ml-40 mr-40">
        {#each Achievements as skill}
          <div class="flex">
            <SkillButton icon={skill.icon} text={skill.name} />
          </div>
        {/each}
      </div>
    </SectionSubHeader>

    <SectionSubHeader icon={Icons.personality} subtitle="Personality">
      <div class="flex gap-2 flex-wrap mt-10 ml-40 mr-40">
        {#each Personality as skill}
          <div class="flex">
            <SkillButton icon={skill.icon} text={skill.name} />
          </div>
        {/each}
      </div>
    </SectionSubHeader>
  </SectionHeader>
</div>

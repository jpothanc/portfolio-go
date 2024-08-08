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

<div id="skills" class="container flex flex-col justify-center mt-10">
  <SectionHeader gradientText="Skills">
    <SectionSubHeader icon={Icons.technology} subtitle="Technology">
      {#each Skills as skill}
        {#if skill.icon}
          <SkillButton icon={skill.icon} text={skill.name} />
        {/if}
      {/each}
    </SectionSubHeader>

    <SectionSubHeader
      icon={Icons.practices}
      subtitle="Development Practices & Testing"
    >
      {#each DevelopmentPractices as skill}
        <div class="flex">
          <SkillButton icon={skill.icon} text={skill.name} />
        </div>
      {/each}
    </SectionSubHeader>

    <SectionSubHeader
      icon={Icons.achievements}
      subtitle="Skills and Achievements"
    >
      {#each Achievements as skill}
        <div class="flex">
          <SkillButton icon={skill.icon} text={skill.name} />
        </div>
      {/each}
    </SectionSubHeader>

    <SectionSubHeader icon={Icons.personality} subtitle="Personality">
      {#each Personality as skill}
        <div class="flex">
          <SkillButton icon={skill.icon} text={skill.name} />
        </div>
      {/each}
    </SectionSubHeader>
  </SectionHeader>
</div>

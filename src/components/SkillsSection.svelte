<script>
  import Icon from "@iconify/svelte";
  import video from "../assets/video.mp4";
  import {
    Skills,
    AppIcons,
    DevelopmentPractices,
    Achievements,
    Personality,
  } from "../config/data";
  import SkillButton from "./common/SkillButton.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
  import SectionSubHeader from "./common/SectionSubHeader.svelte";
</script>

<div id="skills" class="container flex justify-center mt-10">
  <SectionHeader gradientText="skills" icon={AppIcons.skillSection}>
    <!-- <div class="">
      <video class="object-fill rounded-[50%] size-[200px]" autoplay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div> -->

    <div class="flex">
      <SectionSubHeader icon={AppIcons.technology} subtitle="Technology">
        {#each Skills as skill}
          {#if skill.icon}
            <SkillButton icon={skill.icon} text={skill.name} />
          {/if}
        {/each}
      </SectionSubHeader>
    </div>

    <div class="flex flex-wrap gap-2 justify-center">
      <SectionSubHeader
        icon={AppIcons.practices}
        subtitle="Development Practices & Testing"
      >
        {#each DevelopmentPractices as skill}
          <SkillButton icon={skill.icon} text={skill.name} />
        {/each}
      </SectionSubHeader>

      <SectionSubHeader
        icon={AppIcons.achievements}
        subtitle="Skills and Achievements"
      >
        {#each Achievements as skill}
          <SkillButton icon={skill.icon} text={skill.name} />
        {/each}
      </SectionSubHeader>
      <!-- 
    <SectionSubHeader icon={AppIcons.personality} subtitle="Personality">
      {#each Personality as skill}
          <SkillButton icon={skill.icon} text={skill.name} />
      {/each}
    </SectionSubHeader> -->
    </div>
  </SectionHeader>
</div>

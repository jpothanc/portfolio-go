<script lang="ts">
  import Icon from "@iconify/svelte";
  import { AppIcons, Contacts } from "../config/data";
  import SectionHeader from "./common/SectionHeader.svelte";
  import ToolTip from "./common/ToolTip.svelte";
</script>

<div id="contact" class="container flex flex-col justify-center mt-10">
  <SectionHeader gradientText="contact" icon={AppIcons.contactSection}>
    <div
      class="flex justtify-center align-center p-2 m-5 gap-2 dark:text-blue-500"
    >
      {#each Contacts as contact}
        <ToolTip text={contact.name}>
          <span
            class="hover:scale-110 transition:all duration-300 ease-in-out hover:text-orange-500"
          >
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <Icon icon={contact.icon} width="32" height="32" />
            </a>
          </span>
        </ToolTip>
      {/each}
    </div>
  </SectionHeader>
</div>

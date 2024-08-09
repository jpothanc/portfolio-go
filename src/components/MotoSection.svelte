<script>
  
  import jpothanc from "../assets/moto.png";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div
    transition:fade={{ duration: 1000 }}
    class="container flex flex-col justify-center"
  >
    <div
      transition:fade={{ duration: 2000 }}
      class="flex justify-center gap-2 flex-wrap mx-auto mt-5 mr-40 ml-40 border1"
    >
     

      <div
        class="flex-1 items-center self-center p-3 text-sm tracking-wider dark:text-neutral-500 border-1"
      >
       
      </div>
    </div>
     <div class="flex justify-center items-center mx-auto p-2  w-full">
 <div class="text-lg">
    
          <p class="u-white">&lt;</p>
          <p class="u-red">&nbsp;&nbsp;Dreams.Create( i =&gt; &#123;</p>
          <p class="u-torquise">&nbsp; i.Code().WithPrecision();</p>
          <p class="u-blue">&nbsp;i.Inspire().WithPassion();</p>
          <p class="u-green">&nbsp;i.Innovate.WithPurpose(); &nbsp;&nbsp;</p>
          <p class="u-bracket">&#125;)</p>
          <p class="u-white">&nbsp;/&gt;</p>
        </div>
        </div>

  </div>
{/if}

<style>
    .u-white {
        color: white;
    }
    .u-red {
        color: red;
    }
    .u-torquise {
        color: torquise;
    }
    .u-blue {
        color: blue;
    }
    .u-green {
        color: green;
    }
    .u-bracket {
        color: white;
    }
</style>

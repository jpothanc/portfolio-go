<script>
  export let project = {
    name: "Project Name",
    description: "Project Description",
    techStack: ["Tech1", "Tech2"],
    github: "https://github.com",
  };
</script>

<div class="flex flex-wrap justify-center items-center gap-2 p-5">
  <div class="flex flex-col p-5 border">
    <span>{project.name}</span>
    <span>{project.description}</span>
    <span>{project.techStack}</span>
    <span>{project.github}</span>
  </div>
   <div class="flex flex-col p-5 border">
    <span>{project.name}</span>
    <span>{project.description}</span>
    <span>{project.techStack}</span>
    <span>{project.github}</span>
  </div>
</div>

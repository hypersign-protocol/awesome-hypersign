<script>
import feather from "feather-icons";
export default {
  props: ["project"],
  mounted() {
    feather.replace();
    localStorage.removeItem("clickedProject");
  },
  updated() {
    feather.replace();
  },
  methods: {
    redirectToSingleProject() {
      const project = this.project;
      window.open(`${project.projectLink}`, "_blank");
    },
    redirectToGithubProfile(handle){
      console.log(handle)
      window.open(`https://github.com/${handle}`,"_blank")
    }
  },
};
</script>

<template>
  <div
    id="project"    
    class="rounded-xl shadow-lg hover:shadow-4xl mb-10 sm:mb-0 bg-secondary-dark dark:bg-ternary-dark flex flex-col justify-between"
    aria-label="Single Project"
    style="max-width: 380px; max-height: 784px"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        @click="redirectToSingleProject()"
        title="Click to view Project"
        class="rounded-t-xl cursor-pointer border-none object-cover w-full h-40 sm:h-50"
      />
    </div>
    <div class="px-4 py-6 justify-between h-full">
      <p
        class="font-general-semibold text-xl text-ternary-light light:text-ternary-light font-semibold"
      >
        {{ project.title }}
      </p>
      <h3
        class="font-general-medium text-xx-sm text-ternary-light light:text-ternary-light"
        >{{ project.oneLineDescription }}</h3
      ><br>
      <span
        class="font-general-small text-sm text-ternary-light light:text-ternary-light"
        >{{ project.description }}</span
      >
    </div>
    <div class="flex items-center justify-center">
      <div class="flex-inline items-center gap-3">
        <a
          v-for="(tag, index) in project.contributors"
          :key="index"
          aria-label="Share Project"
          class="light:bg-ternary-light text-light-400 hover:text-primary-light light:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500 inline-flex items-center"
        >
          <i
            data-feather="user"
            class="w-4 h-4 text-ternary-light light:text-ternary-light"
          ></i>
          <span title="View github profile" class="ml-1 cursor-pointer text-ternary-light" style="font-size: xx-small" @click="redirectToGithubProfile(tag)">{{
            tag
          }}</span>
        </a>
      </div>
    </div>
    <div class="flex items-center justify-center py-2">
      <div class="flex-inline items-center gap-3">
        <a
          v-for="(tag, index) in project.tags"
          :key="index"
          aria-label="Share Project"
          class="light:bg-ternary-light text-light-400 hover:text-primary-light light:hover:text-primary-light p-1 rounded-lg shadow-sm duration-500 inline-flex items-center"
        >
          <i
            data-feather="tag"
            class="w-4 h-4 text-ternary-light light:text-ternary-light"
          ></i>
          <span class="ml-1 text-ternary-light" style="font-size: xx-small">{{
            tag
          }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
// import eventbus from "../../eventBus"
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
      localStorage.setItem("clickedProject", JSON.stringify(project));
      this.$router.push({
        path: "/projects/single-project",
      });
    },
  },
};
</script>

<template>
  <div
    @click="redirectToSingleProject()"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.oneLineDescription }}</span
			>
      <div class="flex items-center gap-3">
          <a
            v-for="(tag, index) in project.tags"
            :key="index"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500 inline-flex items-center"
          >
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span class="ml-1">{{ tag }}</span>
          </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

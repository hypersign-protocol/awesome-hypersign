<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../../hacks/index.json";
export default {
  components: { ProjectSingle, ProjectsFilter },
  data: () => {
    return {
      projectsHeading: "Projects Portfolio built on Hypersign",
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      console.log(this.$route.query);
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return projects.filter((item) => {
        // let category =
        // 	item.category.charAt(0).toUpperCase() +
        // 	item.category.slice(1);
        // console.log(category);
        console.log(this.selectedCategory);
        const regex = new RegExp(this.selectedCategory, "i");
        return regex.test(item.tags);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();    
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-light light:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular text-center text-secondary-light light:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        Search projects by title or filter by category
      </h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-secondary-dark dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-light dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-transparent rounded-lg text-sm sm:text-md bg-secondary-dark dark:bg-ternary-dark text-primary-light dark:text-ternary-light outline-none"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects By Title"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>

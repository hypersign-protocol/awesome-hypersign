<script>
import feather from "feather-icons";

export default {
  props: ["projectInfo"],
  socialSharings: [
    {
      id: 1,
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/realstoman",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/realstoman",
    },
    {
      id: 3,
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com/",
    },
    {
      id: 5,
      name: "Youtube",
      icon: "youtube",
      url: "https://www.youtube.com/c/StomanStudio",
    },
  ],
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project objectives -->
      <div>
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Tags
        </p>
        <div class="flex items-center gap-3">
          <a
            v-for="(tag, index) in projectInfo.tags"
            :key="index"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500 inline-flex items-center"
          >
            <span class="ml-1">{{ tag }}</span>
          </a>
        </div>
      </div>

      <!-- Single project technologies -->
		
      <!-- Single project social sharing -->
      <div>
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 mt-5"
        >
          Share This
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="(tag, index) in socialSharings"
            :key="index"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >{{ tag }}</a
          >
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div
      class="w-full sm:w-2/3 text-left mt-10 sm:mt-0"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        {{ projectInfo.description }}
      </p>
    </div>
  </div>
</template>

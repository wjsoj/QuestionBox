<script setup>
let data = defineProps(['title','description','link'])
</script>

<template>
<div class="flex flex-col justify-center items-start">
  <h1 class="text-sky-900 dark:text-white text-2xl md:text-3xl font-semibold mx-2  mt-6">
    {{ data.title }}
  </h1>
  <a :href="data.link" target="_blank" class="text-sky-800 dark:text-sky-200 hover:text-sky-700 dark:hover:text-sky-300 hover:underline text-base md:text-lg mx-2 my-2">View More</a> 
  <p class="text-slate-600 dark:text-slate-400 text-base md:text-lg mx-2 my-4">
    {{ data.description }}
  </p>
</div>
</template>
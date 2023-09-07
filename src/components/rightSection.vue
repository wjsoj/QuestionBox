<script setup>
let data = defineProps(['title1','title2','description'])
</script>

<template>
<div class="flex flex-col-reverse lg:flex-row justify-center items-center lg:mx-20 lg:my-20 xl:mx-28">
  <div class="flex-1 flex flex-col justify-center items-center my-4 w-full">
    <slot></slot>
  </div>
  <div class="flex-1 flex flex-col justify-center items-center lg:items-start my-4 xl:ml-4">
    <h1 class="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mx-6 lg:mx-8 my-2">
      {{ data.title1 }}
      <br>
      {{ data.title2 }}
    </h1>

    <p class="text-slate-600 dark:text-slate-400 text-base md:text-xl mx-8 md:mx-32 lg:mx-8 my-4 md:my-8">
      {{ data.description }}
    </p>
  </div>
</div>
</template>
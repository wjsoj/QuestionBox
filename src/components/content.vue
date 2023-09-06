<script setup>
let data = defineProps(['title'])
let title = data.title
</script>
<template>
<!-- 写一个对话框，绝对定位 -->
<div class="fixed inset-0 z-[10] flex justify-center items-center bg-black bg-opacity-40">
  <div class="w-[86vw] md:min-w-[40vw] md:max-w-[72vw] lg:max-w-[40vw] min-h-[30vh] backdrop-blur-md bg-slate-300/60 dark:bg-slate-700/50 rounded-2xl px-2 py-4">
    <div class="flex flex-col px-4 py-6 justify-between items-center">
      <h1 class=" text-blue-900 dark:text-white font-semibold text-2xl md:text-3xl">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</div>
</template>
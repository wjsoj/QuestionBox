<script setup>
import { Github,Heart } from '@vicons/fa'
</script>

<template>
<footer class="flex flex-row justify-between items-center bg-slate-300 dark:bg-slate-900 py-4 px-6 md:px-16 lg:px-24">
  <div class="text-slate-900 dark:text-white lg:text-base">
    Copyright 2023 By <a href="https://github.com/wjsoj" target="_blank" rel="noopener noreferrer"> <span class="text-transparent font-bold bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-400">WJS</span> </a>
    <br>
    Made With <Heart class="inline-block w-4 h-4 lg:h-5 lg:w-5 text-red-500 dark:text-red-400" />
  </div>

  <div class="text-dark dark:text-white">
    <a href="https://github.com/wjsoj/QuestionBox/" target="_blank" rel="noopener noreferrer">
      <Github class="inline-block w-6 h-6 lg:h-8 lg:w-8 cursor-pointer mr-2 mt-1" />
    </a>
  </div>
</footer>
</template>
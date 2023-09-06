<script setup>
import { onMounted,onUnmounted } from 'vue'
onMounted(() => {
  let nav = document.querySelector('nav')
  nav.classList.remove('text-slate-200')
  nav.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-[10]', 'backdrop-blur-sm','text-slate-600')
})
onUnmounted(() => {
  let nav = document.querySelector('nav')
  nav.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-[10]', 'backdrop-blur-sm','text-slate-600')
  nav.classList.add('text-slate-200')
})

</script>

<template>
<div class="mt-20 py-10 px-10 md:px-20 lg:px-32 prose md:prose-lg lg:prose-xl dark:prose-invert">
  <h1>自建提问箱</h1>
  <h2>介绍</h2>
  <h2>本地开发环境配置</h2>
  <h2>环境变量</h2>
  <h2>如何部署</h2>
</div>
</template>
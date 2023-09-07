<script setup>
import axios from 'axios'
import { ref } from 'vue'
let hitokoto = ref('Loading...')
let author = ref('')
axios.get('https://v1.hitokoto.cn')
.then((res) => {
  hitokoto.value = res.data.hitokoto
  author.value = res.data.from
})
.catch((err) => {
  console.log(err.code)
})
</script>

<template>
<div class="flex flex-col justify-center items-stretch px-6 mt-[-80px] pt-[80px] min-h-[40vh] bg-fixed bg-cover z-0 pb-6 md:px-20 lg:px-36 xl:px-48" style="background-image: url(https://jooinn.com/images/night-sky-17.jpg); background-position: top;">
  <h1 class="font-serif font-semibold text-2xl my-2 indent-12 bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-teal-300 md:text-3xl xl:text-4xl">
    {{ hitokoto }}
  </h1>
  <h2 class="text-slate-200 text-lg text-right my-2 md:my-4 md:text-xl">
    —— {{ author }}
  </h2>
</div>
<div class="w-full h-0.5 bg-slate-300 dark:bg-slate-700 my-1"></div>
</template>
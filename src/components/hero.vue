<script setup>
import bannerImg from '../assets/hero.png'
import { GithubAlt,Github,ChalkboardTeacher } from '@vicons/fa'
import { useRouter } from 'vue-router'
const router = useRouter()

function goGithub() {
  window.open('https://github.com/wjsoj/QuestionBox')
}
</script>

<template>
<div class="flex lg:flex-row flex-col justify-center items-center lg:justify-stretch md:mx-10 lg:mx-28 xl:mx-36 my-16 md:pt-20">
  <div class="flex-1 mx-6 my-6">
    <div class="flex flex-col">
      <div class="rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 px-4 py-2 my-8 lg:max-w-[460px]">
        <div class="text-slate-600 dark:text-white text-base md:text-lg flex flex-row items-center">
          <GithubAlt class="w-8 h-8 mr-4"/>
          <span>这个页面只是为了炫技， <br class="hidden md:block lg:hidden"> 正式部署时建议删除</span>
        </div>
      </div>
    </div>
    <h1 class="text-5xl font-semibold text-slate-600 dark:text-white leading-[72px] md:text-6xl md:leading-[84px]">
      全新一代
      <br>
      <span class="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-400 md:text-[72px]">提问箱</span>
      <br>
      轻量，优雅 
      <br>
    </h1>
    <h4 class="text-xl md:text-2xl text-slate-600 dark:text-slate-400">就是有点小慢</h4>
    <div class="flex flex-row justify-center items-center lg:justify-start">
      <button class="mt-8 md:mt-12 px-4 py-2 text-lg md:text-xl text-white rounded-2xl bg-cyan-500" type="primary" size="large" @click="router.push('/doc')">
        <div class="flex">
          <ChalkboardTeacher class="w-6 h-6 mr-2 md:mr-3"/>
          查看文档
        </div>
      </button>
      <button class="mt-8 md:mt-12 ml-4 md:ml-10 px-4 py-2 text-lg md:text-xl text-white rounded-2xl bg-black" type="primary" size="large" @click="goGithub">
        <!-- 插入Github图标 -->
        <div class="flex">
          <Github class="w-6 h-6 mr-2 md:mr-3"/>
          Github
        </div>
      </button>
    </div>
  </div>
  <div class="flex-1 my-6 flex justify-center">
    <img class="w-full md:w-3/5 lg:w-full lg:pl-10 object-contain" :src='bannerImg' alt="这里有个图" />
  </div>
</div>
</template>
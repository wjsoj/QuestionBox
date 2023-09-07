<script setup>
import { inject, onMounted,onUnmounted } from 'vue'
import hero from './hero.vue'
import leftSection from './leftSection.vue'
import rightSection from './rightSection.vue'
import featureCard from './featureCard.vue'
import userImg from '../assets/user.png'

let isDark = inject('isDark')

const desc = [
  '在提问界面，你可以选择输入昵称或使用默认名称Annonymous，你输入的昵称将会出现在问题的页面上，具体输入什么完全由你自己决定',
  '使用tailwindCSS，编写不同主题的配色变得异常轻松，只需在页面右上角点击按钮即可切换全局主题，组件库主题也会随之改变。（首次访问页面时主题颜色默认跟随系统，你可以在这里点击重设按钮来重新匹配系统主题）',
  '基于tailwindCSS断点功能，大大提高了响应式设计开发效率。采用移动端优先的设计原则，同时兼顾大屏，使页面在不同屏幕尺寸下都能保持良好的显示效果（个别遥控器比例手机和过于离谱的带鱼屏尚未研究适配）'
]

const feature = [
  {
    'title': 'Vue3',
    'description': '渐进式JavaScript框架，提供了一套声明式的、组件化的编程模型，帮助高效地开发用户界面',
    'link': 'https://cn.vuejs.org/'
  },
  {
    'title': 'Vite',
    'description': '下一代前端开发与构建工具，基于ESM原生模块系统构建，开发环境启动更快，热更新速度更快',
    'link': 'https://cn.vitejs.dev/'
  },
  {
    'title': 'Vue Router',
    'description': 'Vue.js官方的路由管理器，和Vue.js深度集成，为 Vue.js 提供富有表现力、可配置的、方便的路由',
    'link': 'https://router.vuejs.org/zh/'
  },
  {
    'title': 'TailwindCSS',
    'description': '一款高度可定制的现代CSS框架，只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站',
    'link': 'https://www.tailwindcss.cn/'
  },
  {
    'title': 'Naive UI',
    'description': '一个基于Vue3的轻量级组件库，提供了一套简洁、易用的基础组件，帮助开发者快速搭建页面',
    'link': 'https://www.naiveui.com/zh-CN/'
  },
  {
    'title': 'xicons',
    'description': '一套简洁、易用的图标库，提供了多种图标风格，包括Material Design、Font Awesome、Remixicon等',
    'link': 'https://xicons.org/'
  }
]

function defaultTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    isDark.value = true
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
    isDark.value = false
  }
}

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
<hero />

<rightSection title1="匿名，实名" title2="由你来命名" :description="desc[0]">
  <img :src="userImg" alt="这有一张图" class="w-full md:w-3/5 lg:w-full">
</rightSection>

<leftSection title1="深色，浅色" title2="样样都出色" :description="desc[1]">
  <div class="flex flex-row justify-center items-stretch my-2">
    <!-- 添加一个空白占位 -->
    <div class="w-10"></div>
    <div class="border border-blue-300 shadow rounded-md p-4 bg-slate-800 min-w-[60vw] lg:min-w-[30vw]">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-row justify-center items-stretch my-2">
    <div class=" bg-slate-100 border border-blue-300 shadow rounded-md p-4 min-w-[60vw] lg:min-w-[30vw]">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-10"></div>
  </div>

  <button class="bg-pink-200 dark:bg-pink-500 px-4 py-2 text-lg rounded-lg my-6 text-slate-600 dark:text-white" @click="defaultTheme">重设主题</button>
</leftSection>

<rightSection title1="大屏，小屏" title2="玩出高水平" :description="desc[2]">
  <div class="flex flex-row justify-center items-center">
    <div class="flex-1 border border-blue-300 shadow rounded-md py-4 px-2 mx-2 min-w-[20vw] lg:min-w-[10vw]">
      <div class="animate-pulse">
        <div class="flex-1 space-y-2 py-1">
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>

    <div class="flex-1 border border-blue-300 shadow rounded-md p-4 w-full mx-2 min-w-[50vw] md:min-w-[25vw]">
      <div class="animate-pulse">
        <div class="grid grid-cols-2 gap-x-2 gap-y-2 py-1">
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
          <div class="h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>
  </div> 
</rightSection>

<div class="my-8 md:my-10 lg:my-12 flex flex-col justify-center items-center">
  <div class="md:w-full flex flex-col lg:flex-row justify-center md:justify-between items-center lg:px-28 my-4 lg:my-10">
    <h1 class="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-2">
      使用到的技术
    </h1>

    <p class="md:max-w-[40vw] text-slate-600 dark:text-slate-400 text-base md:text-lg my-4 px-10 md:px-2">
      本项目的诞生离不开下列众多功能强大的项目，在此列出以表示感谢。
    </p>
  </div>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8 md:px-16 lg:px-20 md:gap-2 divide-y-2 md:divide-y-0 divide-slate-700 dark:divide-slate-300">
    <div v-for="item in feature" :key="item.title" class="my-4">
      <featureCard :title="item.title" :description="item.description" :link="item.link" />
    </div>
  </div>
</div>
</template>
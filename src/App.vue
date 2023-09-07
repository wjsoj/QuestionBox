<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NSwitch,NLoadingBarProvider,NConfigProvider,darkTheme,NDialogProvider,NMessageProvider,NButton } from 'naive-ui'
import { ref,provide } from 'vue'
import footerVue from './components/footerVue.vue'

let title = import.meta.env.VITE_APP_TITLE
let isOpen = ref(false)
let theme = localStorage.theme==='dark' ? ref(darkTheme) : ref(undefined)
let isDark = ref(false)

if ((!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage.theme === 'dark') {
  localStorage.theme = 'dark'
  document.documentElement.classList.add('dark')
  isDark.value = true
} else {
  localStorage.theme = 'light'
  isDark.value = false
}

console.log(isDark.value)
console.log(localStorage.theme)
console.log(theme.value)
provide('isDark', isDark)

function changeTheme() {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
    theme.value = undefined
  } else if (localStorage.theme === 'light') {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    theme.value = darkTheme
  }
}

// isOpen为true时，点击其他地方关闭
window.addEventListener('click', function (e) {
  if (isOpen.value) {
    if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
      isOpen.value = false
    }
  }
})
</script>

<template>
<n-config-provider :theme="theme">
<n-loading-bar-provider>
<n-dialog-provider>
<n-message-provider>
  <nav class="flex flex-row justify-between text-slate-200 dark:text-slate-200 py-4 px-6 z-[10] bg-slate-200 dark:bg-slate-700 bg-opacity-90 dark:bg-opacity-75 md:px-12 lg:px-20">
    <h1 class="text-2xl font-semibold md:text-3xl md:ml-6 lg:ml-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-violet-500 dark:from-cyan-300 dark:to-indigo-500">{{ title }}</h1>

    <div class="hidden md:flex justify-stretch items-center">
      <span class="text-base lg:text-lg my-1 px-2">深色模式</span>
      <n-switch class="mr-4 lg:mr-6" v-model:value="isDark" @click="changeTheme()"/>
      <RouterLink class="px-2 lg:px-3 font-medium text-lg lg:text-xl hover:text-sky-600" to="/">主页</RouterLink>
      <RouterLink class="px-2 lg:px-3 font-medium text-lg lg:text-xl hover:text-sky-600" to="/admin">管理后台</RouterLink>
      <RouterLink class="px-2 lg:px-3 font-medium text-lg lg:text-xl hover:text-sky-600" to="/about">关于</RouterLink>
    </div>

    <div class="flex md:hidden">
      <svg class="w-6 h-6 cursor-pointer mr-2 mt-1" @click="isOpen = !isOpen" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
          clip-rule="evenodd" />
      </svg>
      <div v-if="isOpen" class="transition ease-in-out text-white absolute top-16 right-5 min-w-[120px] bg-slate-500 dark:bg-slate-900 rounded-md shadow-md flex flex-col justify-center items-center z-[10] py-2 bg-opacity-70 dark:bg-opacity-40 backdrop-blur-sm">
        <span class="text-base my-1" @click="isOpen = !isOpen">深色模式</span>
        <n-switch v-model:value="isDark" @click="changeTheme()"/>
        <div class="w-3/4 h-0.5 bg-slate-300 dark:bg-slate-700 my-1"></div>
        <RouterLink @click="isOpen=!isOpen" class="text-base my-1" to="/">主页</RouterLink>
        <div class="w-3/4 h-0.5 bg-slate-300 dark:bg-slate-700 my-1"></div>
        <RouterLink @click="isOpen=!isOpen" class="text-base my-1" to="/admin">管理后台</RouterLink>
        <div class="w-3/4 h-0.5 bg-slate-300 dark:bg-slate-700 my-1"></div>
        <RouterLink @click="isOpen=!isOpen" class="text-base my-1" to="/about">关于</RouterLink>
      </div>
    </div>
  </nav>
  
    <RouterView />

  <footerVue />
</n-message-provider>
</n-dialog-provider>
</n-loading-bar-provider>
</n-config-provider>
</template>
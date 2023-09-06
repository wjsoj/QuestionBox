<script setup>
import AV from 'leancloud-storage'
import { ref,onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingBar,NSpin,NEllipsis,useMessage } from 'naive-ui';
import Banner from './banner.vue'
import content from './content.vue'
import loginPage from './loginPage.vue'
import askPage from './askPage.vue'
import chooseItem from './chooseItem.vue'

let data = defineProps({
  loginStatus: {
    type: Boolean,
    default: false
  },
  needLogin: {
    type: Boolean,
    default: false
  }
})

let questions = ref([])
let askStatus = ref(false)
const loadingBar = useLoadingBar()
const Question = AV.Object.extend('Question')
const router = useRouter()
const message = useMessage()
let footer = document.querySelector('footer')
let totalCount = ref(0)
let nowCount = ref(0)
let concatLoading = ref(false)
let isLoading = ref(false)

async function initialize() {
  const question = new Question()
  question.set('content', '')
  question.set('answer', '')
  question.set('author', '')
  await question.save().then().catch((err) => {
    console.log(err.code)
  })
  const query = new AV.Query('Question')
  await query.find().then((questions) => {
    questions.forEach((question) => {
      question.destroy()
    })
  }).catch((err) => {
    console.log(err.code)
  })
}

async function loadMore() {
  loadingBar.start()
  concatLoading.value = true
  const query = new AV.Query('Question')
  query.skip(nowCount.value)
  query.limit(10)
  query.descending("createdAt")
  const Question = await query.find().catch((err) => {
    console.log(err.code)
    if(err.code === 101) {
      initialize()
    }
  })
  loadingBar.finish()
  concatLoading.value = false
  questions.value = questions.value.concat(Question)
  nowCount.value += 10
}

async function getQuestions() {
  questions.value = []
  loadingBar.start()
  isLoading.value = true
  footer.classList.add('fixed', 'bottom-0', 'left-0', 'right-0')
  const query = new AV.Query('Question')
  query.count().then((count) => {
    totalCount.value = count
    nowCount.value = 10
  })
  query.limit(10)
  query.descending("createdAt")
  const Question = await query.find().catch((err) => {
    console.log(err.code)
    if(err.code === 101) {
      message.info('初始化...')
      initialize()
      loadingBar.finish()
      isLoading.value = false
      questions.value = []
      return
    }
  })
  loadingBar.finish()
  isLoading.value = false
  footer.classList.remove('fixed', 'bottom-0', 'left-0', 'right-0')
  questions.value = Question
}

async function submit(questionText,name) {
  if(questionText === '') {
    message.error('问题不能为空')
    return
  }
  if(name === 'Anonymous') {
    message.info('Anonymous为匿名用户保留字')
  }
  askStatus.value = false
  const question = new Question()
  question.set('content', questionText)
  if (name === '') {
    name = 'Anonymous'
  }
  question.set('author', name)
  loadingBar.start()
  question.save()
  .then((question) => {
    loadingBar.finish()
    message.success('提问成功')
    askStatus.value = false
    getQuestions()
  })
  .catch((err) => {
    console.log(err.code)
  })
}

function changeTime(time) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

async function removeQuestion(question) {
  loadingBar.start()
  await question.destroy().then(() => {
    loadingBar.finish()
    message.success('删除成功')
    getQuestions()
  })
}

function logout() {
  localStorage.removeItem('loginUser')
  router.replace('/')
}

if(!data.needLogin) {
  getQuestions()
}

footer.classList.add('fixed', 'bottom-0', 'left-0', 'right-0')

onUpdated(() => {
  footer.classList.remove('fixed', 'bottom-0', 'left-0', 'right-0')
  if (document.body.clientHeight < window.innerHeight) {
    footer.classList.add('fixed', 'bottom-0', 'left-0', 'right-0')
  }
})
</script>

<template>
  <Banner />
  <div v-if="data.loginStatus" class="flex flex-row justify-center items-center mt-6">
    <button @click="askStatus=true" class="px-4 py-2 text-lg font-semibold text-white bg-teal-700 rounded-xl mx-2 md:text-xl">添加问题</button>
    <button @click="logout()" class="px-4 py-2 text-lg font-semibold text-slate-800 dark:text-white bg-slate-300 dark:bg-slate-700 rounded-xl mx-2 md:text-xl">注销</button>
  </div>
  <div v-else class="flex justify-center items-center mt-6">
    <button @click="askStatus=true" class="px-4 py-2 text-lg font-semibold text-white bg-teal-700 rounded-xl md:text-xl">添加问题</button>
  </div>

  <div class="flex lg:grid lg:grid-cols-2 lg:gap-8 flex-col justify-center items-stretch my-6 divide-y-2 divide-slate-300 dark:divide-slate-700 px-4 md:px-20 lg:px-32 lg:my-12">
    <div v-if="questions.length" v-for="question in questions" :key="question.id">
      <div v-if="question.get('content')" class="mx-4 px-2 my-4 py-3 rounded-xl min-h-[10rem] lg:min-h-[14rem] flex flex-col justify-between items-stretch">
        <div>
          <p class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-indigo-500 dark:from-cyan-300 dark:to-indigo-500 mb-3 md:text-2xl">
            {{ question.get('content') }}
          </p>
          <p v-if="question.get('answer')" class="text-black dark:text-white text-base md:text-lg">
            <n-ellipsis class="text-black dark:text-white" expand-trigger="click" :tooltip="false" line-clamp="5">
              {{ question.get('answer') }}
            </n-ellipsis>
          </p>
          <p v-else class="text-black dark:text-white text-base md:text-lg">这个问题暂未回答</p>
        </div>
        
        <div class="flex flex-col">
          <chooseItem v-if="data.loginStatus" @destroy="removeQuestion" @answer-func="getQuestions" :question="question" />
          <div class="flex flex-row flex-wrap justify-between mt-4 md:text-base">
            <span class="text-left text-slate-600 dark:text-slate-200 ">{{ changeTime(question.get('createdAt')) }}</span>
            <span class="text-right text-slate-800 dark:text-slate-100 ">By @{{ question.get('author') }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  <div v-if="isLoading" class="w-full flex justify-center my-10">
    <n-spin :size="60" />
  </div>

  <div v-if="data.needLogin">
    <content title="请登录">
      <loginPage />
    </content>
  </div>

  <div v-if="askStatus">
    <content title="请输入问题">
      <askPage @ask-finish="submit" @ask-cancel="askStatus=false" />
    </content>
  </div>

  <div v-if="nowCount < totalCount " class="flex justify-center items-center mb-8">
    <div v-if="concatLoading" class="w-full flex justify-center">
      <n-spin :size="40"></n-spin>
    </div>
    <button v-else class=" bg-indigo-500 text-lg lg:text-xl text-white px-4 py-2" @click="loadMore">
      <span>加载更多</span>
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import content from './content.vue'
import { TrashAlt,Reply } from '@vicons/fa'
import { useMessage,useDialog,NInput,NButton,useLoadingBar } from 'naive-ui';

let data = defineProps(['question'])
let question = data.question
let emit = defineEmits(['destroy','answerFunc'])
let showAnswer = ref(false)
let answerText = ref('')

const dialog = useDialog()
const message = useMessage()
const loadingBar = useLoadingBar()

function deleteQuestion() {
  dialog.warning({
    title: '警告',
    content: '是否删除此问题？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      emit('destroy',question)
    },
    onNegativeClick: () => {
      message.info('已取消')
    }
  })
}

function answerQuestion() {
  if(answerText.value === '') {
    message.error('回答不能为空')
    return
  }
  question.set('answer',answerText.value)
  loadingBar.start()
  question.save().then(() => {
    loadingBar.finish()
    showAnswer.value = false
    message.success('回答添加成功')
    emit('answerFunc')
  }).catch((err) => {
    console.log(err.code)
  })
}
</script>

<template>
<div class="w-full flex flex-row justify-end dark:text-white mt-2">
  <TrashAlt class="w-4 h-4 md:w-5 md:h-5 cursor-pointer mx-1" @click="deleteQuestion()" />
  <Reply class="w-4 h-4 md:w-5 md:h-5 cursor-pointer mx-1" @click="showAnswer = !showAnswer" />
</div>
<div v-if="showAnswer">
  <content title="添加回答">
    <n-input class="my-6 md:text-lg md:my-8" type="textarea" autofocus v-model:value="answerText" placeholder="请输入回答" />
    
    <div class="flex flex-row justify-between items-center">
      <n-button strong secondary type="primary" @click="answerQuestion()" class="mx-4 md:text-lg">提交</n-button>
      <n-button @click="showAnswer = false" class="mx-4 rounded-sm md:text-lg">取消</n-button>
    </div>
  </content>
</div>
</template>
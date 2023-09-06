<script setup>
import { NInput,NButton } from 'naive-ui'
import { ref } from 'vue'
let emit = defineEmits(['askFinish','askCancel'])
let askContent = ref('')
let name = ref('')
</script>

<template>
  <div class="my-4 md:my-8">
    <n-input class="my-2 md:text-lg" type="textarea" autofocus v-model:value="askContent" placeholder="请输入问题" />
    <n-input class="my-2 md:text-lg" type="text" v-model:value="name" placeholder="请输入昵称（可不填）" />
  </div>
  
  <div class="flex flex-row justify-between items-center">
    <n-button strong secondary type="primary" @click="emit('askFinish',askContent,name)" class="mx-4 md:text-lg">提问</n-button>
    <n-button @click="emit('askCancel')" class="mx-4 md:text-lg">取消</n-button>
  </div>
</template>
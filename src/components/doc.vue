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

let markdown = `
<center><h1> QuestionBox </h1></center>
<center>  基于Vue的新一代提问箱 </center>
<center> 轻量，优雅，有点好看 </center>
<h2 id='本地开发'>本地开发</h2>
<pre><code class='language-shell' lang='shell'>npm install
npm run dev
</code></pre>
<h2 id='数据存储服务'>数据存储服务</h2>
<p>数据存储使用LeanCloud</p>
<p><a href='https://leancloud.app/'>国际版地址</a></p>
<p><a href='https://www.leancloud.cn/'>国内版地址</a></p>
<p>注意国内版具有访问速度优势，但使用自己的域名时要求必须已备案，请根据自己实际情况选择。</p>
<p>登陆控制台后，创建开发版应用，名称随意，设置保持默认，<strong>创建后请不要进行任何数据操作</strong>，直接前往<strong>设置-域名绑定</strong>绑定自己的域名（也可以使用LeanCloud提供的开发版域名），然后前往<strong>设置-应用凭证</strong>界面，记录下<code>AppID</code>、<code>AppKey</code>、<code>REST API服务器地址</code></p>
<p>项目在首次访问时会自动完成数据结构创建与初始化</p>
<h2 id='环境变量'>环境变量</h2>
<p>本地请参照<code>.env.example</code>文件，自行在根目录添加<code>.env</code>文件：</p>
<pre><code>VITE_APP_LEANCLOUD_APP_ID = &#39;Your App ID&#39;
VITE_APP_LEANCLOUD_APP_KEY = &#39;Your App Key&#39;
VITE_APP_LEANCLOUD_SERVER_URL = &#39;Your Domain&#39;
VITE_APP_PASSWORD = &quot;123456&quot;
VITE_APP_TITLE = &quot;XXX的提问箱&quot;
</code></pre>
<p>由于项目采用非常低端的方式进行密码校验，为了放止出现服务端更改密码而客户端可以用已经保存的登录状态跳过验证的状况，项目会在客户端本地存储密码的md5值进行二次校验。环境变量默认会暴露给客户端，在线部署时其安全性依赖于Vercel。所以，<strong>请不要在本项目中使用日常经常使用的密码</strong>，建议单独设置一个强度较弱的密码</p>
<h2 id='在线部署'>在线部署</h2>
<p>使用<a href='https://vercel.com/'>vercel</a></p>
<p><a href='https://vercel.com/'><img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" referrerpolicy="no-referrer" alt="Powered by Vercel"></a></p>
<p>将本项目fork到自己的仓库，在vercel中导入新项目，设置保持默认，环境变量可以直接粘贴<code>.env.example</code>中的内容，将每一项内容修改为自己的即可</p>
<p>由于本项目中vue-router使用<code>history</code>模式进行路由，在刷新后会出现404的情况，故添加<code>vercel.json</code>文件重写路由，内容为：</p>
<pre><code class='language-json' lang='json'>{
  &quot;rewrites&quot;: [{ &quot;source&quot;: &quot;/:path*&quot;, &quot;destination&quot;: &quot;/index.html&quot; }]
}
</code></pre>
<p>如果你需要部署此项目在自己的服务器上，请不要忘了根据实际情况重写路由规则</p>
`

</script>

<template>
<div class="relative w-full px-6 py-12 bg-slate-100 dark:bg-slate-800  md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
  <div class="mt-20 lg:mt-30 prose prose-stone md:prose-lg lg:prose-xl dark:prose-invert" v-html="markdown">
  </div>
</div>

</template>

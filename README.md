<p align="center">

  <h1 align="center"> QuestionBox </h1>

  <p align="center">
    基于Vue的新一代提问箱
    <br />
    轻量，优雅，有点好看
  </p>

</p>

## 本地开发

```bash
npm install
npm run dev
```

## 数据存储服务

数据存储使用LeanCloud

[国际版地址](https://leancloud.app/)

[国内版地址](https://www.leancloud.cn/)

注意国内版具有访问速度优势，但使用自己的域名时要求必须已备案，请根据自己实际情况选择。

登陆控制台后，创建开发版应用，名称随意，设置保持默认，**创建后请不要进行任何数据操作**，直接前往**设置-域名绑定**绑定自己的域名（也可以使用LeanCloud提供的开发版域名），然后前往**设置-应用凭证**界面，记录下`AppID`、`AppKey`、`REST API服务器地址`

项目在首次访问时会自动完成数据结构创建与初始化

## 环境变量

本地请参照`.env.example`文件，自行在根目录添加`.env`文件：

```
VITE_APP_LEANCLOUD_APP_ID = 'Your App ID'
VITE_APP_LEANCLOUD_APP_KEY = 'Your App Key'
VITE_APP_LEANCLOUD_SERVER_URL = 'Your Domain'
VITE_APP_PASSWORD = "123456"
VITE_APP_TITLE = "XXX的提问箱"
```

由于项目采用非常低端的方式进行密码校验，为了放止出现服务端更改密码而客户端可以用已经保存的登录状态跳过验证的状况，项目会在客户端本地存储密码的md5值进行二次校验。环境变量默认会暴露给客户端，在线部署时其安全性依赖于Vercel。所以，**请不要在本项目中使用日常经常使用的密码**，建议单独设置一个强度较弱的密码

## 在线部署

使用[vercel](https://vercel.com/)

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/)

将本项目fork到自己的仓库，在vercel中导入新项目，设置保持默认，环境变量可以直接粘贴`.env.example`中的内容，将每一项内容修改为自己的即可

由于本项目中vue-router使用`history`模式进行路由，在刷新后会出现404的情况，故添加`vercel.json`文件重写路由，内容为：

```json
{
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```

如果你需要部署此项目在自己的服务器上，请不要忘了根据实际情况重写路由规则，具体可以参考vue-router的[官方说明页](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B)

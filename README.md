## node常用命令
[express中文API](http://www.expressjs.com.cn/4x/api.html#app.all)

### express web项目
    
    npm install -g express #安装express
    npm install -g express-generator #express创建程序包，安装才能执行express命令（新版本）
    express -e microblog #ejs模板创建一个应用程序(-e就是ejs模板)
    cd microblog & npm install 
    npm start #启动应用 (node app.js老版本) 执行的是package.json中的start指令

### npm常用命令

    npm -v  #显示版本信息
    npm install express #安装express
    npm install -g express #全局安装express
    npm list # 显示已经安装的模块
    npm show express # 显示express模块信息
    npm update #升级当前目录下所有的模块
    npm update express # 更新express
    npm update -g express  #更新全局的express
    npm uninstall express  #删除指定的模块

### express常用命令

### restful

    get 获取
    post 新增
    put 更新
    delete 删除

### ejs常用命令

    <% code %> js代码
    <%= code =%>  显示html特殊字符
    <% -code %> 显示原始HTML内容
    
    

    页面浏览器==>http请求===>server.listen（）===>（中间件）   路由===》res
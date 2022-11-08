# load-balance
实验记录, 通过Nginx实现负载均衡。
## 任务要求
配置 2 个服务器应用程序, 并为第二个应用程序实现负载平衡（例如，App1 代理到 http://localhost:81。 App2 通过负载平衡代理到路径 http://localhost:82 和 http://localhost:83 ）
## 实现步骤

* 通过` brew install nginx `安装
      (windows 通过官网下载安装包即可)
      
* 在安装路径下找到` nginx.conf `文件, 如果仅用于复现, 将目录下` nginx.conf `文件替换即可。
    
* 启动 ` Nginx ` 服务。
    
* 打开` app1 `目录, 目录下执行` node index.js `。
    
* 在新终端打开` app2 `目录, 同样在目录下执行` node index.js `。

* 浏览器分别打开 http://localhost:81/,  http://localhost:82/, http://localhost:81/, 测试是否成功

  81端口应显示 "**This is server application 1!**"
  
  82和83端口应显示 "**This is server application 2!**"
  
    
    

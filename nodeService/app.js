//导入http内置模块
const http = require('http')
//能够解析url地址，从而拿到 pathname query
const urlModule = require('url')
//创建一个 http 服务器
const server = http.createServer()
//监听 http 服务器的 request 请求
server.on('request',function(req,res){
     const {pathname:url,query   } = urlModule.parse(req.url,true)
    if(url === '/getscript'){

        var data = {
            name: 'zpf',
            age: '18',
            gender: '女孩子'
        }



        //拼接一个合法的js脚本
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        //res.end 发送给客户端，客户端把这个当做js代码解析执行
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})
server.listen(3000,function(){
    console.log('server at http://127.0.0.1:3000')
})
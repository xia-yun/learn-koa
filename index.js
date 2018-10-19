const Koa = require('koa')//引入koa

const App = new Koa()//创建koa实例


//构造第一个「函数」
const first = (Context) => {
  Context.response.body = '<h1>first try Koa</h1>'

//相应内容

};



App.use(first)//应用第一个函数

App.listen(8080)//监听本机8080端口
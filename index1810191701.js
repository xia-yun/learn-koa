const Koa = require('koa')//����koa

const App = new Koa()//����koaʵ��


//�����һ����������
const first = (Context) => {
  Context.response.body = '<h1>first try Koa</h1>'

//��Ӧ����

};



App.use(first)//Ӧ�õ�һ������

App.listen(8080)//��������8080�˿�
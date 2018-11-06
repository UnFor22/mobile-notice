import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/views/chat'
import betterScroll from '@/views/better-scroll'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld,
      redirect: '/chat'
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/betterScroll',
      name: 'betterScroll',
      component: betterScroll
    },
    {
      path: '/formNotice',
      name: 'formNotice',
      component: ()=>import('@/views/form-notice')
      
    },
  ]
})

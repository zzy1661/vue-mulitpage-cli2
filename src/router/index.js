import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Left from '@/components/Left'
import Right from '@/components/Right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
      	default: resolve => require(['@/components/HelloWorld'],resolve),
      	footer: resolve => require(['@/components/Footer'],resolve)
      }
    },{
    	path: '/test',
    	name: 'Test',
    	component: Test,
    	children: [
    		{
    			path: '',
    			components: {
    				left: Left,
    				right: Right
    			}
    		},{
    			path: 'reverse',
    			components: {
    				left: Right,
    				right: Left
    			}
    		}
    	]
    },{
    	path: '/xss',
    	name: 'Xss',
    	component: resolve => require(['@/components/Xss'],resolve),
    },{
    	path: '/cloud',
    	name: 'Cloud',
    	component: resolve => require(['@/components/Cloud'],resolve),
    }
  ]
})

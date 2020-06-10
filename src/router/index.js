import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import liveOne from '@/components/exercise/liveOne';
import liveTwo from '@/components/exercise/liveTwo';
import liveThr from '@/components/exercise/liveThr';
import liveFour from '@/components/exercise/liveFour';
import liveOther from '@/components/exercise/liveOther';
import notFound from '@/components/exercise/404.vue';

import UserSettings from '@/components/base/UserSettings';
import UserEmailsSubscriptions from '@/components/base/userEmails/UserEmailsSubscriptions';
import left from '@/components/base/profile/left';
import bottom from '@/components/base/profile/bottom';
import mainBody from '@/components/base/profile/mainBody';

const constantRoutes = [
  {
    path: '/',
    // redirect: () => { //redirect可以是路径字符串也可以是
    //   return '/aaa'//此处aaa是liveTwo的别名
    // }
  },
  {
    path: '/liveOne',
    component: liveOne,
  },
  {
    path: '/liveTwo',
    component: liveTwo,
    alias: '/aaa'
  },
  {
    path: '/liveOther',
    component: liveOther,
    children: [
      {
        path: 'thr',
        component: liveThr
      },
      {
        path: 'four',
        component: liveFour
      }
    ]
  },
  {
    path: '/base',
    component: UserSettings,
    children: [
      {
        path: 'emails',
        component: UserEmailsSubscriptions
      },
      {
        path: 'profile',
        components: {
          'default': mainBody,
          'left': left,
          'bottom': bottom
        }
      }
    ]

  },
  {
    path: '*',
    component: notFound
  },
]

const createRouter = () => new Router({ routes: constantRoutes })

const router = createRouter()

export default router

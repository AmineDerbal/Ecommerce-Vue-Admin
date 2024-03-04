import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiLock,
  mdiAccount,
  mdiBellOutline,
  mdiHome,
  mdiAccountMultiple,
  mdiPackageVariant
} from '@mdi/js'

import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      lock: mdiLock,
      account: mdiAccount,
      bellOutline: mdiBellOutline,
      home: mdiHome,
      accountMultiple: mdiAccountMultiple,
      packageVariant: mdiPackageVariant
    },
    sets: {
      mdi
    }
  }
})

createApp(App).use(router).use(createPinia()).use(vuetify).mount('#app')

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import '../../node_modules/material-design-icons/iconfont/material-icons.css'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        success: '#329e86',
        primary: '#329E86',
        warning: '#ffe24b',
        secondary: '#686868',
        accent: '#329e86',
        confirmation: '#4db6ac'
      }
    }
  }
})

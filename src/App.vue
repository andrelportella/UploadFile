<template>
    <v-app app>
        <Navbar />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>


<script>

import Navbar from '@/components/Navbar'
import Api from './services/config'

export default {
  name: 'App',
  components: { Navbar },

  mounted(){
    Api.findAll().then(resposta => {
      console.log(resposta)
    })
  },

  data () {
    return {

    }
  }
}
</script>


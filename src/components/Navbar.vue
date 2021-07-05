<template>
  <nav>
    <v-toolbar flat app color="primary" dark>
      <v-toolbar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span>GERAIS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary >
        <v-list dense nav>

          <v-list-item-group
            v-model="group"
            active-class="confirmation">

            <v-list-item v-for="link in links" :key="link.text" router :to ="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { text: 'Transparência', route: '/' },
        { text: 'Cartilhas', route: 'cartilha' },
        { text: 'Revista da DPMG', route: 'revista' },
        { text: 'Boletins da DPMG', route: 'boletim' },
        { text: 'Documentos para Atendimento', route: 'atendimento' },
        { text: 'Corregedoria', route: 'corregedoria' }
      ]
    }
  }

}
</script>

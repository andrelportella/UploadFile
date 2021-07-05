<template>
<v-app>
    <h3 class="font-regular headline pl-11 pt-3">{{tituloCabecalho}}</h3>
        <v-row class="justify-center">
            <v-col cols="11">
                <v-expansion-panels focusable v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>TESTE Boletim</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid">
                                <v-row align="center">
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required clearable label="Número do Boletim"></v-text-field>
                                        </v-col>
                                         <v-col cols="12" md="12" sm="12">
                                               <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                                                 <template v-slot:activator="{ on, attrs }">
                                                         <v-text-field clearable v-model="date" label="Data da Publicação" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                    </template>
                                                        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                                                </v-menu>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                              <v-select clearable :items="yearPicker()" menu-props="auto" label="Ano do Boletim" hide-details single-line></v-select>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required clearable label="Descrição"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-file-input required clearable show-size :rules="docRules"  accept="image/jpg, image/jpeg" placeholder="selecione um arquivo JPG ou JPEG " prepend-icon="" label="Imagem da Capa"></v-file-input>
                                        </v-col>
                                </v-row>
                            </v-form>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                 </v-expansion-panels>    
            </v-col>    
        </v-row>
</v-app>
</template>

<script>
export default {
  name: 'TesteBoletim',
  data () {  
            
          
    return {
       date: null,
       menu: false,
       anos: [],    
       
      panel: [0],
        imgRules: [
            value => !value || value.size < 300000 || 'A imagem não pode ser maior que 300 KB!',
        ],
         docRules: [
            value => !value || value.size < 10000000 || 'O documento não pode ser maior que 10 MB!',
        ],
    }
    
  },

  methods: {
      yearPicker(){
        let date = new Date().getFullYear();
        let list = [];

        for (let i = 0; i < 100; i++) {
        list.push(date);
        date--;
        }
        return list
     }
  }
}
</script>

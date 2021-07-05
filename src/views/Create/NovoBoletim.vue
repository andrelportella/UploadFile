<template>
<v-app>
    <h3 class="font-regular headline pl-11 pt-3">{{tituloCabecalho}}</h3>
        <v-row class="justify-center">
            <v-col cols="11">
                <v-expansion-panels focusable v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Novo Cartilha</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid" @submit.prevent="submit">
                                <v-row align="center">
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required type="number" clearable label="Número do Boletim"></v-text-field>
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
                                            <v-text-field required clearable v-model="myInputModel" v-mask="'####'" label="Ano da Publicação"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required clearable label="Descrição"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-file-input required clearable show-size :rules="docRules" placeholder="Selecione o Documento desejado" label="Documento" prepend-icon=""></v-file-input>
                                        </v-col>
                                        <v-col>
                                             <v-col cols="12" md="12" class="text-right">
                                            <v-btn class="mr-4" type="submit" :disabled="invalid" color="primary">Salvar</v-btn>
                                            <v-btn class="mr-4" type="submit" :disabled="invalid" color="secondary" to="/boletim">Voltar</v-btn>
                                        </v-col>
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
  name: 'novoCartilha',
  data () {  
    
          
    return {
       myInputModel: '', 
       date: null,
       menu: false,  
       
      panel: [0],
        imgRules: [
            value => !value || value.size < 300000 || 'A imagem não pode ser maior que 300 KB!',
        ],
         docRules: [
            value => !value || value.size < 10000000 || 'O documento não pode ser maior que 10 MB!',
        ],
    }
    
  }
}
</script>

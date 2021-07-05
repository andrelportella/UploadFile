<template>
<v-app>
    <h3 class="font-regular headline pl-11 pt-3">{{tituloCabecalho}}</h3>
        <v-row class="justify-center">
            <v-col cols="11">
                <v-expansion-panels focusable v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Nova Revista</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid">
                                <v-row align="center">
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required clearable label="Número da Revista"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required :clearable ="true" v-model="myInputModel" v-mask="'####'" label="Ano da Revista"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field required clearable label="Descrição"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-file-input required clearable show-size :rules="imgRules" accept="image/jpg, image/jpeg" placeholder="selecione um arquivo JPG ou JPEG "  prepend-icon="" label="Imagem da Capa"></v-file-input>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-file-input required clearable show-size :rules="docRules" placeholder="Selecione o Documento desejado" label="Documento" prepend-icon=""></v-file-input>
                                        </v-col>
                                         <v-col cols="12" md="12" class="text-right">
                                            <v-btn class="mr-4" type="submit" :disabled="invalid" color="primary">Salvar</v-btn>
                                            <v-btn class="mr-4" type="submit" :disabled="invalid" color="secondary" to="/revista">Voltar</v-btn>
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
  name: 'NovoBoletim',
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
        ]
    }
  },
   watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date);
      this.$refs.picker.activePicker = 'YEAR'
      this.menu = false;
    },
  }
}
</script>

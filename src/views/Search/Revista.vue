<template>
<v-app>
    <v-content wrap>
        <v-row class="justify-center">
            <v-col cols="11">
                <v-row class="justify-center">
                    <v-col>
                        <v-row>
                            <v-col cols="9" md="9">
                                <h3 class="font-regular headline pt-3">
                                    Revista da DPMG
                                </h3>
                            </v-col>
                            <v-col class="text-right justify-end" cols="6"></v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-expansion-panels focusable v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Pesquisa</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid">
                                <v-row>
                                    <v-col>
                                        <v-text-field type="number" clearable label="Número da Revista"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field required :clearable ="true" v-model="myInputModel" v-mask="'####'" label="Ano da Revista"></v-text-field>
                                            <v-col md="13" class="text-right">
                                            <v-btn color="primary">
                                                <v-icon left>search</v-icon>
                                                Pesquisar
                                                </v-btn>
                                            </v-col>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Lista de Arquivos</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12">
                                     <v-col md="13" class="text-right">
                                            <v-btn color="primary" to="/nova-revista">
                                                <v-icon left>mdi-plus</v-icon>
                                                Novo
                                                </v-btn>
                                            </v-col>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-content>
</v-app>
</template>

<script>
export default {
  name: 'Revista',
  data () {
    return {
      myInputModel: '', 
      panel: [0, 1]
    }
  }
}
</script>

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
                                    Corregedoria
                                </h3>
                            </v-col>
                            <v-col class="text-right justify-end" cols="6"></v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-expansion-panels focusable v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Selecione o Tipo de Documento Desejado</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid" align="center" justify="center">
                                <v-row >
                                    <v-col align-self="center" >
                                        <v-col>
                                            <v-btn color="primary" class="style-btn" to="/corregedoria-normativo">
                                                Atos Normativos
                                            </v-btn>   

                                            <v-btn color="primary" to="/corregedoria-regimento">
                                                Regimento Interno
                                            </v-btn>    
                                        </v-col>
                                    </v-col>
                                </v-row>                                
                            </v-form>
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
  name: 'CorregedoriaSelector',
  data () {
    return {
      panel: [0]
    }
  }
}
</script>

<style scoped>
.style-btn{
    margin-right: 150px;
    }
</style>
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
                        <v-expansion-panel-header>Pesquisa</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid">
                                <v-row>
                                    <v-col>

                                        <v-autocomplete v-model="items" :items="items" :clearable ="true" denseb label="Categoria do Documento"></v-autocomplete>
                                       
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                            <editais-correicoes v-if="items == 'Editais de Correições'"/>
                                            <estagio-probatorio v-if="items == 'Estágio Probatório'"/>
                                            <instrucoes-CG v-if="items == 'Instruções CG'"/>
                                            <orientacoes-funcionais v-if="items == 'Orientações Funcionais'"/>
                                            <resolucoes-CG v-if="items == 'Resoluções CG'"/>

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
                                            <v-btn color="primary">
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
import EditaisCorreicoes from "../Search/CorregedoriaChildrens/EditaisCorreicoes";
import EstagioProbatorio from "../Search/CorregedoriaChildrens/EstagioProbatorio";
import InstrucoesCG from './CorregedoriaChildrens/InstrucoesCG';
import OrientacoesFuncionais from './CorregedoriaChildrens/OrientacoesFuncionais';
import ResolucoesCG from './CorregedoriaChildrens/ResolucoesCG';
export default {
  components: {
    EditaisCorreicoes,
    EstagioProbatorio,
    InstrucoesCG,
    OrientacoesFuncionais,
    ResolucoesCG
  },
  name: 'CorregedoriaRegimento',
  data () {
    return {
      panel: [0, 1],
      items: ['Selecione', 'Editais de Correições', 'Estágio Probatório', 'Instruções CG', 'Orientações Funcionais', 'Resoluções CG']
    }
  }
}
</script>

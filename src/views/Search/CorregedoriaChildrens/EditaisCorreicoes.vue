<template>
    <div>        
        <v-row>
            <v-col>
                <v-select :items="mes" :clearable ="true" label="Mês Referência"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
               <v-text-field required :clearable ="true" v-model="myInputModel" v-mask="'####'" label="Ano Referência"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field :clearable ="true" label="Descrição"></v-text-field>
            </v-col>
        </v-row>                
    </div>
</template>

<script>

export default {
  name: 'editais-correicoes',
    data () {
    return {
    myInputModel: '', 
      mes: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        }
    }
}
</script>

<template>
    <div>        
        <v-row>
            <v-col>
                <v-text-field required type="number" clearable label="Número do Boletim"></v-text-field>
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
  name: 'resolucoes-CG',
      data () {
    return {
    myInputModel: '', 
            }
    }      
}
</script>

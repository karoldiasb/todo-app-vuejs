<template>
    <input 
        type="text" 
        name="newtodo" 
        id="newtodo" 
        placeholder="   O Create a new todo..." 
        @keypress="enter"
        :style="this.$store.state.isThemeLight ? styleLight : styleDark"
    >
</template>

<script>
export default {
  name: 'CreateTodo',
  props: {
  },
  data () {
    return {
        styleLight: { backgroundColor: 'hsl(0, 0%, 98%)' },
        styleDark: { backgroundColor: 'hsl(235, 24%, 19%)' },
    }
  },
  methods:{
      enter(){
          if(event.keyCode == 13){
              alert('entrou novo')
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input{
        width: 26rem;
        height: 2.9rem;
        border-radius: 5px;
    }
    @media only screen and (max-width: 376px) {
        input{
            width: 20rem;

        }
    }
</style>

<template>    
    <draggable v-model="filteredItems" @start="drag=true" @end="drag=false">
      <ul v-for='item in filteredItems' :key='item.title' :style="isThemeLight ? styleLight : styleDark">
        <li>{{ item.title }}</li>
      </ul>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'


export default {
  name: 'TodoList',
  components: {
    draggable,
  },
  props: {
  },
  data () {
    return {
      styleLight: { color: 'hsl(233, 14%, 35%)' },
      styleDark: { color: 'hsl(236, 33%, 92%)' },
      isThemeLight: this.$store.state.isThemeLight,
    }
  },
  methods:{
  },
  computed: {
    filteredItems: { //filtrar todos os itens de acordo com a seleção
      get(){
        if(this.$store.state.isfilterActive)
          return this.$store.state.items.filter(item => item.isActive)
        if(this.$store.state.isfilterCompleted)
          return this.$store.state.items.filter(item => item.isCompleted)
        return this.$store.state.items
      },
      set(){}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  ul{
    list-style: none;
    font-size: 14px;
    list-style-position: inside;
  }
  
  ul li{
    border-bottom: 1px solid;
    border-color: var(--light-grayish-blue-light);
    height: 2.9rem;
    padding-top: 15px;
    padding-left: 5px;
    /* color: var(--dark-grayish-blue); */
    font-weight: 500;
  }
  li::before {
    content: "O";
    color: var(--light-grayish-blue-light);
    padding-inline: 1ch;
    margin-inline-end: 1ch;
  }

  footer{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 15px;
    color: var(--dark-grayish-blue);
  }

  footer .filter{
    display: flex;
    gap: 1rem;
  }

  footer .clear-completed{
    display: flex;
    gap: 1rem;
  }

  .container-filter{
    width: 20rem;
    height: 2.9rem;
    border-radius: 5px;
    margin-top: 30px;
    background-color:white;
  }

  .container-filter .filter{
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-top: 15px;
  }

   @media only screen and (max-width: 376px) {
    .content-list{
      width: 20rem;
    }
  }

</style>

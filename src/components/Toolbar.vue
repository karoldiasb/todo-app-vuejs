<template>
    <div>
      <footer v-if="!$isMobile()">
      <p>5 items left</p>
      <div class="filter">
        <p ref="filterAll" :class="isFilterAll ? 'isActive-filter' : ''">All</p>
        <p ref="filterActive" :class="isfilterActive ? 'isActive-filter' : ''">Active</p>
        <p ref="filterCompleted" :class="isfilterCompleted ? 'isActive-filter' : ''">Completed</p>
      </div>
      <div class="clear-completed">
        <p>Clear</p>
        <p>Completed</p>
      </div>
    </footer>
    <footer v-else>
      <p>5 items left</p>
      <div class="clear-completed">
        <p>Clear</p>
        <p>Completed</p>
      </div>
    </footer>
    <div v-show="$isMobile()">
      <div class="container-filter" :style="isThemeLight ? styleLight : styleDark">
        <div class="filter">
          <p class="isActive-filter">All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
      </div>
    </div>
  </div>
   
</template>

<script>

export default {
  name: 'Toolbar',
  props: {
    isThemeLight: Boolean,
    isFilterAll: Boolean,
    isfilterActive: Boolean,
    isfilterCompleted: Boolean
  },
  data () {
    return {
      styleLight: { backgroundColor: 'hsl(0, 0%, 98%)', color: 'hsl(236, 9%, 61%)' },
      styleDark: { backgroundColor: 'hsl(235, 24%, 19%)', color: 'hsl(233, 11%, 84%)' }
    }
  },
  methods:{
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 15px;
    color: var(--dark-grayish-blue);
    /* position: fixed;
    bottom: 100px; */
  }

  footer .filter{
    display: flex;
    gap: 1rem;
  }

  footer .filter p{
    cursor: pointer;
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
    font-weight: 600;
    /* background-color:white; */
  }

  .container-filter .filter{
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-top: 15px;
  }

  .isActive-filter{
    color: var(--bright-blue);
  }

</style>

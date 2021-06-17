<template>
    <div>
      <footer v-if="!$isMobile()">
      <p>{{countList}} items left</p>
      <div class="filter">
        <p 
          :class="this.$store.state.isFilterAll ? 'isActive-filter' : ''" 
          @click="changeFilter('all')"
        >All
        </p>
        <p 
          :class="this.$store.state.isfilterActive ? 'isActive-filter' : ''" 
          @click="changeFilter('active')"
        >Active
        </p>
        <p 
          :class="this.$store.state.isfilterCompleted ? 'isActive-filter' : ''" 
          @click="changeFilter('completed')"
        >Completed
        </p>
      </div>
      <div class="clear-completed">
        <p>Clear</p>
        <p>Completed</p>
      </div>
    </footer>
    <footer v-else>
      <p>{{countList}} items left</p>
      <div class="clear-completed">
        <p>Clear</p>
        <p>Completed</p>
      </div>
    </footer>
    <div v-show="$isMobile()">
      <div class="container-filter" :style="this.$store.state.isThemeLight ? styleLight : styleDark">
        <div class="filter">
          <p 
          :class="this.$store.state.isFilterAll ? 'isActive-filter' : ''" 
          @click="changeFilter('all')"
          >All
          </p>
          <p 
            :class="this.$store.state.isfilterActive ? 'isActive-filter' : ''" 
            @click="changeFilter('active')"
          >Active
          </p>
          <p 
            :class="this.$store.state.isfilterCompleted ? 'isActive-filter' : ''" 
            @click="changeFilter('completed')"
          >Completed
          </p>
        </div>
      </div>
    </div>
  </div>
   
</template>

<script>

export default {
  name: 'Toolbar',
  props: {
  },
  data () {
    return {
      styleLight: { backgroundColor: 'hsl(0, 0%, 98%)', color: 'hsl(236, 9%, 61%)' },
      styleDark: { backgroundColor: 'hsl(235, 24%, 19%)', color: 'hsl(233, 11%, 84%)' },
      countList: 5
    }
  },
  methods:{
   changeFilter(filter) {
      this.$store.commit('resetAllFilters')
      if(filter == 'all'){
        this.$store.state.isFilterAll = true;
      }
      if(filter == 'active'){
        this.$store.state.isfilterActive = true;
      }
      if(filter == 'completed'){
        this.$store.state.isfilterCompleted = true;
      }
    }
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

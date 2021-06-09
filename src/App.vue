<template>
  <div id="app">
    <div :class="$isMobile() ? 'container bg-mobile' : 'container bg-desktop'">
      <header>
        <h1>TODO</h1>
        <img :src="icon" alt="iconTheme" @click="changeTheme">
      </header>
      
      <div class="content">
        <CreateTodo/>
        <TodoList :items=items></TodoList>
      </div>

      <footer>
        Drag and drop to reorder list
      </footer>
    </div>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import CreateTodo from './components/CreateTodo.vue'

  export default {
    name: 'App',
    components: {
      CreateTodo,
      TodoList
    },
    data(){
        return {
          icon: require('@/assets/icon-moon.svg'),
          isThemeLight: true,
          items: [
            { id: 0, title: 'Complete online JavaScript course' },
            { id: 1, title: 'Jag around the park 3x' },
            { id: 2, title: '10 minutes meditation' },
            { id: 3, title: 'Read for 1 hour' },
            { id: 4, title: 'Pick up groceries' },
            { id: 5, title: 'Complete Todo App on Frontend Mentor' }
          ]
      }
    },
    methods:{
      changeTheme(){
        if(this.isThemeLight){
          this.isThemeLight = false
          this.icon = require('@/assets/icon-sun.svg')
          return
        }
        this.isThemeLight = true
        this.icon = require('@/assets/icon-moon.svg')
      }
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  
  :root {
    /* Primary */
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
    /* Light Theme */
    --very-light-gray: hsl(0, 0%, 98%);
    --very-light-grayish-blue: hsl(236, 33%, 92%);
    --light-grayish-blue-light: hsl(233, 11%, 84%);
    --dark-grayish-blue: hsl(236, 9%, 61%);
    --very-dark-grayish-blue: hsl(235, 19%, 35%);
    /* Dark Theme */
    --very-dark-blue: hsl(235, 21%, 11%);
    --very-dark-desaturated-blue: hsl(235, 24%, 19%);
    --light-grayish-blue: hsl(234, 39%, 85%);
    --light-grayish-blue-hover: hsl(236, 33%, 92%);
    --dark-grayish-blue: hsl(233, 14%, 35%);
    --very-dark-grayish-blue: hsl(233, 14%, 35%);
    --very-dark-grayish-blue: hsl(237, 14%, 26%);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'Josefin Sans', sans-serif;
  }

  html{
    background-color: var(--very-light-grayish-blue);
  }

 .container {
    background-size: 100%;
    background-repeat: no-repeat;
    height: 50vh;
  }

  .container header{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 60px;
  }
  
  .bg-desktop{
    background-image: url('./assets/bg-desktop-light.jpg');
  }
  .bg-mobile{
    background-image: url('./assets/bg-mobile-light.jpg');
  }

  .bg-desktop header{
    gap: 15rem;
  }

  .bg-mobile header{
    gap: 8rem;
  }

  header h1{
    letter-spacing: 1rem;
    color: white;
  }

  header img{
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 90px;
    gap: 1rem;
  }

  .isActive-filter{
    color: var(--bright-blue);
  }

  .container > footer{
    position: relative;
    top: 8rem;
    text-align: center;
    font-size: 12px;
    justify-self: center;
  }

  @media only screen and (max-width: 376px) {
    .container > footer{
      top: 11.5rem;
    }
  }

  

</style>

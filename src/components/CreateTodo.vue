<template>
    <input type="text" name="newtodo" id="newtodo" placeholder="   O Create a new todo...">
</template>

<script>
export default {
  name: 'CreateTodo',
  props: {
    
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

<template>
    <div class="content-list">
      <ul>
        <li>Complete online JavaScript course</li>
        <li>Jag around the park 3x</li>
        <li>10 minutes meditation</li>
        <li>Read for 1 hour</li>
        <li>Pick up groceries</li>
        <li>Complete Todo App on Frontend Mentor</li>
      </ul>
      <footer>
        <p>5 items left</p>
        <div class="filter">
          <p class="isActive-filter">All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div class="clear-completed">
          <p>Clear</p>
          <p>Completed</p>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-list{
    width: 28rem;
    height: 20rem;
    background-color: white;
    border-radius: 5px;
  }
  ul{
    list-style: none;
    font-size: 14px;
    list-style-position: inside;
  }
  ul li{
    border-bottom: 1px solid;
    border-color: var(--light-grayish-blue);
    height: 2.9rem;
    padding-top: 15px;
    padding-left: 5px;
    color: var(--dark-grayish-blue);
    font-weight: 500;
  }

  /* ul li::marker{
    font-size: 4rem;
  } */
  li::before {
    content: "O";
    color: var(--light-grayish-blue);
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

</style>

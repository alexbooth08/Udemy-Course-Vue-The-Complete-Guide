<!-- Note: TheHeader is named as such b/c vue's style guide reccommends naming 
  componets intended to be used exactly once in the app as TheComponentName. -->

<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>
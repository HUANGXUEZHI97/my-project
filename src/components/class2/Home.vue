<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p @click="$store.commit('add')">counter:{{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async counter:{{$store.state.counter}}</p>
    <!-- <p>double counter:{{$store.getters.doubleCounter}}</p> -->
  </div>
</template>

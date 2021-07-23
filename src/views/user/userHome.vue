<template>
  <div class="home">
    <img src="@/assets/logo.png">
    <p @click="$store.commit('add')">counter:{{$store.state.counter}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
}
</script>

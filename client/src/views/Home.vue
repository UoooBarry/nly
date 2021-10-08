<template>
  <div class="home">
    <h1>
      <div @click="iconClick">
        你是我的先生
        <font-awesome-icon icon='envelope-open'/>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    iconClick() {
      this.$store.dispatch('counter/addCount');
    }
  }
}
</script>

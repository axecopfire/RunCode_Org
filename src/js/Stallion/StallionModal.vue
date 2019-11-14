<template>
  <div>
      <h3>{{name}}</h3>
      <p>Slack: {{slack}}</p>
      <img :src="`./stallions/${image}`" >
      <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'image', 'slack', 'info']
}
</script>

<style lang="sass" scoped>
div
  opacity: 1
  background: rgba(0,0,0,.2)
  position: fixed
  z-index: 1
  top: 0
  bottom: 0
  left: 0
  right: 0
</style>
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
  props: ['name', 'image', 'slack', 'info'],
}
</script>


<template>
  <div @click="modalActive = !modalActive" >
    <section>
      <transition name="fade">
        <Modal 
          v-if="modalActive"
          :name="name" 
          :slack="slack"
          :info="info"
          :image="image"
        ></Modal>
      </transition>
      <h3>{{name}}</h3>
      <p>Slack: {{slack}}</p>
      <!-- <img :src="`./stallions/${image}`" > -->
      <!-- <p>{{info}}</p> -->
    </section>
  </div>
</template>
<script>
import Modal from './Modal.vue';

export default {
  props: ['name', 'image', 'slack', 'info'],
  data () {
    return {
      modalActive: false
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
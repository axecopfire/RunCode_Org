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
      <img :src="`${avatar}`" >
      <h3>{{name}}</h3>

    </section>
  </div>
</template>
<script>
import Modal from './Modal.vue';
import images from '../../images/stallions/avatars/*.*';

console.log(JSON.stringify(images));

export default {
  props: ['name', 'image', 'slack', 'info'],
  data () {
    return {
      modalActive: false,
      images
    }
  },
  components: {
    Modal
  },
  computed: {
    avatar () {
       let output = Math.ceil(Math.random() * 10) + 1;
       // pcguy is a png. Everything else is an svg with a number for name
       output = output === 11 ? this.images["pcguy"].png : this.images[output].svg;
       
        console.log(output)
       return output;
    }
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
div
  box-shadow: 5px 9px 10px 2px rgba(0,0,0,.1)
  background: white
  padding: 30px 0
  border-radius: 10px
  &:hover
    cursor: pointer
h3
  font-size: 18px
  font-weight: bold
  text-align: center
img
  height: 100px
  max-width: 80%
  margin: 0 auto
  margin-bottom: 30px
  display: block
  border-radius: 0 20px 0
  padding: 5px
  border: 2px solid lightgray
  box-shadow: inset 2px 2px 12px -8px black
</style>
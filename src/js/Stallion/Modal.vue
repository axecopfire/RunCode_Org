<template>
  <div class="bg">
    <div class="container">
      <h3>{{name}}</h3>
        <ul>
          <li>
            <img :src="slack_logo" />
            <p>@{{slack}}</p>
          </li>
        </ul>
      <img class="prof-pic" :src="profPic" >
      <p class="info" v-html="infoScrub" ></p>
    </div>
  </div>
</template>

<script>
import slack_logo from '../../images/Slack_Mark.svg';
import images from '../../images/stallions/*.png';


export default {
  props: ['name', 'image', 'slack', 'info'],
    data () {
      return {
        slack_logo,
        images
      }
    },
  computed: {
    infoScrub () {
      const output = this.info.replace(/\n/g, "<br>");
      return output;
    },
    profPic () {
        return this.images[this.image]
      }

  }
}
</script>

<style lang="sass" scoped>
.bg
  opacity: 1
  background: rgba(0,0,0,.4)
  position: fixed
  z-index: 1
  top: 0
  bottom: 0
  left: 0
  right: 0
.container
  background: white
  display: block
  width: 50%
  height: 80vh
  padding: 30px
  border: 2px solid black
  border-radius: 10px
  text-align: center
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
.prof-pic
  margin: 10px auto
  width: 10vh

h3
  font-size: 30px
  font-weight: bold
  margin-bottom: 20px
li
  display: table
  margin: 0 auto
li>img, li>p
  display: table-cell
  vertical-align: middle
li img
  width: 40px
  display: inline-block
p
  line-height: 1.5
.info
  text-align: left
  height: 50%
  overflow: scroll

/* width */
::-webkit-scrollbar 
  width: 20px


/* Track */
::-webkit-scrollbar-track
  box-shadow: inset 0 0 5px grey 
  border-radius: 10px
 
/* Handle */
::-webkit-scrollbar-thumb
  background: red 
  border-radius: 10px
/*
Ask stability questions
    */
</style>
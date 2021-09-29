<template>
  <div class="letters">
    <Letter :letter="letter" v-for="letter in letters" :key="letter._id"/>
    <div class='new-letter'>
      <font-awesome-icon icon='leaf' />
      <input type="text" placeholder="署名" class='author-input' v-model="author">
      <div class='break'></div>
      <textarea name="" id="" cols="25" rows="5" class='letter-content' placeholder="信件" v-model="content"></textarea>
      <div class='h-break'></div>
      <a class='button pulse' @click='createLetter'>存放</a>
    </div>
  </div>
</template>

<style scoped>
  .letters {
    width: 100%;
    align-self: start;
  }
  .new-letter {
    position: fixed;
    bottom: 0;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 6px 33px rgba(19, 18, 18, 0.09);
    min-width: 80vw;
    max-width: 80vw;
    display: flex;
    flex-wrap: wrap;
  }
  .author-input {
    border-radius: 3px;
    border: 0.3px solid #aaaaaa;
    margin-bottom: 5px;
    height: 1.1rem;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    background: #f3f3f3;
    line-height: 1.5;
    color: #495057;
  }
  .break {
    flex-basis: 100%;
    height: 0;
  }
  .letter-content {
    font-size: 1rem;
    font-weight: 400;
    border: none;
    background: #f3f3f3;
    line-height: 1.5;
    color: #495057;
    width: 70%;
    font-size: 1rem;
  }

  .mail-btn {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #aaaaaa;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:300;
    color:#0f0f0f;
    text-align: center;
    transition: all 0.2s;
    margin-left: auto;
  }
</style>

<style lang='scss' scoped>
@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.button {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  background: #0f0f0f;
  box-shadow: 0 3px 2px 0 rgba(0,0,0,0.1);
  border-radius: 5px;
  padding: 0 20px 30px;
  color: #fff;
  font-family: Lato, Arial, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  transition: background .3s, transform .3s, box-shadow .3s;
  will-change: transform;
  
  &:hover {
    background: darken(#0f0f0f,10%);
    box-shadow: 0 4px 17px rgba(0,0,0,0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    transform: translate3d(0, 1px, 0);
  }
}

</style>

<script>
import Letter from '@/components/Letter';
import {  getAllLetters, newLetter } from '@/services/letterService';

export default {
  name: 'Letters',
  data() {
    return {
      letters: [],
      content: '',
      author: ''
    }
  },
  components: {
    Letter
  },
  async created() {
    const response = await getAllLetters();
    this.letters = response.letters;
  },
  methods: {
    async createLetter() {
      if(this.author !== '' && this.content !== '') {
        const response = await newLetter({author: this.author, content: this.content});
        this.letters.unshift(response.letter);
      }
    }
  }

}
</script>
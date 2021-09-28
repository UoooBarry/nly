<template>
  <div class="recipe">
    <div class='content'>
      <VueMarkdown :source="this.recipeContent" v-if="this.recipeContent" />
    </div>
    <Rating :grade="this.recipe.rating" :maxStars="5" :hasCounter="true" v-on:onRate="updateRate" v-if="this.recipe.rating" />
  </div>
</template>

<script>
import {getRecipe, getRecipeContent, rateRecipe} from '@/services/recipeService';
import VueMarkdown from 'vue-markdown-render';
import Rating from '@/components/Rating';

export default {
  name: 'Recipe',
  components: {
    VueMarkdown,
    Rating
  },
  data() {
    return {
      recipe: {},
      recipeContent: ''
    }
  },
  async mounted() {
    const resposne = await getRecipe(this.$route.params.id);
    this.recipe = resposne.recipe;
    if(this.recipe.md_url)
      this.recipeContent = await getRecipeContent(this.recipe.md_url);
    console.log(this.recipe)
  },
  methods: {
    async updateRate(star) {
      const response = await rateRecipe(this.recipe._id, star);
      this.recipe = response.newRecipe;
    }
  }
}
</script>

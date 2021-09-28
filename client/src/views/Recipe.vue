<template>
  <div class="recipe">
    <div class='content'>
      <VueMarkdown :source="this.recipeContent" v-if="this.recipeContent" />
    </div>
  </div>
</template>

<script>
import {getRecipe, getRecipeContent} from '@/services/recipeService';
import VueMarkdown from 'vue-markdown-render';

export default {
  name: 'Recipe',
  components: {
    VueMarkdown
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
  }
}
</script>

<template>
  <nav class="menu">
    <input id ="menu__toggle" type="checkbox" class='menu__toggle'/>
    <label for="menu__toggle" class="menu__toggle-label">
      <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
        <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
      </svg>
      <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    </label>
    <ol class='menu__content'>
      <li class="menu-item"><a href="/">主页</a></li>
      <li class="menu-item" v-for="category in categories" :key="category._id">
        <a href="#0">{{category.name}}</a>
        <ol class="sub-menu" v-for="recipe in category.recipes" :key="recipe._id">
          <li class="menu-item">
            <router-link :to="{path: '/recipes/' + recipe._id}">{{ recipe.name }}</router-link>
          </li>
        </ol>
      </li>
      <li class="menu-item"><a href="/letters">书信</a></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'CategoryList',
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .menu {
    width: 250px;
  }
}
</style>

<style lang="stylus" scoped>
$width = 250px
$duration = .15s
$delayStep = .05s
$baseDelay = 1.5 * $duration
$borderDelay = $baseDelay + (10 * $delayStep) + $duration

svg
  cursor pointer
  height 44px
  width 44px

  path
    fill #000

ol
  list-style-type none

a[href]
  color #ffffff
  position relative
  text-decoration none

  &:hover
    &:after
      transform scaleX(1)

  &:after
    content ''
    position absolute
    top 100%
    height 4px
    background #fff
    left 0
    right 0
    transition transform $duration
    transform-origin left
    transform scaleX(0)


.menu
  position relative
  @media screen and (min-width: 768px) {
    width $width
  }
  width 100px

  &__content
    color #ffffff
    margin 0
    padding 0 0 25px 0
    position absolute
    right 100%
    top 0
    width $width
    z-index 2

  &__toggle-label
    height 44px
    left 0
    position absolute
    width 44px

    svg
      left 0
      position absolute
      top 0
      transition transform $duration
      z-index 2

      &:nth-of-type(2)
        left $width
        transform scale(0)

  &__toggle
    opacity 0
    position fixed

    &:checked ~ .menu__toggle-label
      background rgba(0, 0, 0, 0.65)
      height 100vh
      left 0
      position fixed
      top 0
      transition background $duration
      width 100vw

      svg:nth-of-type(1)
        transform scale(0)

      svg:nth-of-type(2)
        left $width
        transform scale(1)
        transition transform $duration
        transition-delay $borderDelay + $delayStep

    &:checked ~ .menu__content
      transform translate(100%, 0)

      .menu-item
        transform translateX(0)
        transition transform $duration cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color $duration

        $colors = #f5ab35 #f567a0 #e26a6a
        for $item in (1..5)
          &:nth-of-type({$item})


            a[href]:after
              background $colors[$item - 1]

            border-color $colors[$item - 1]
        &:nth-of-type(1)
          transition-delay ($baseDelay), $borderDelay
        &:nth-of-type(2)
          transition-delay ($baseDelay + $delayStep), $borderDelay
        &:nth-of-type(3)
          transition-delay ($baseDelay + (2 * $delayStep)), $borderDelay
          .menu-item
            &:nth-of-type(1)
              transition-delay ($baseDelay + (3 * $delayStep)), $borderDelay
            &:nth-of-type(2)
              transition-delay ($baseDelay + (4 * $delayStep)), $borderDelay
            &:nth-of-type(3)
              transition-delay ($baseDelay + (5 * $delayStep)), $borderDelay
        &:nth-of-type(4)
          transition-delay ($baseDelay + (6 * $delayStep)), $borderDelay
          .menu-item
            &:nth-of-type(1)
              transition-delay ($baseDelay + (7 * $delayStep)), $borderDelay
            &:nth-of-type(2)
              transition-delay ($baseDelay + (8 * $delayStep)), $borderDelay
            &:nth-of-type(3)
              transition-delay ($baseDelay + (9 * $delayStep)), $borderDelay
        &:nth-of-type(5)
          transition-delay ($baseDelay + (10 * $delayStep)), $borderDelay

$itemSize = 44px
.menu__content > .menu-item
  border-left 8px solid transparent
  > a
    line-height $itemSize
    min-width 60px

.sub-menu
  padding 0 0 0 $itemSize

.menu-item
  line-height $itemSize
  min-height $itemSize
  padding 0 12px
  transform translateX(-100%)

  .menu-item
    transform translateX(-150%)
</style>

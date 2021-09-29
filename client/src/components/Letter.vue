<template>
  <div class='mail'>
    <div class='mail-header'>
      <div class='author'>{{ this.letter.author || 'Author' }}</div>
      <div class='date'>{{ timeConverter(this.letter.updatedAt) || '2021-09-29' }}</div>
    </div>
    <pre class='content'>
{{ this.letter.content || 'Content' }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  props: ['letter'],
  methods: {
    timeConverter(timestamp){
      return new Date(timestamp).toISOString().split('T')[0]
    }
  }
}
</script>

<style scoped>
.mail {
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #747474;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 33px rgba(19, 18, 18, 0.09);
  min-width: 80vw;
  margin-bottom: 5vw;
  word-wrap: break-word;
}

.mail-header {
  display: flex;
  justify-content: space-between;
  color: #b7b7b7;
}

.author {
  font-size: 14px;
  text-align: left;
}

.date {
  font-size: 14px;
}

.content {
  color: #555555;
  font-size: 1rem;
  display: inline;
}
</style>
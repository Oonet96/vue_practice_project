<script>
export default {
  name: 'RepoDetailBoxComponent',
  props:{
    repo:Object,
  },
  setup() {
    
  }
};
</script>

<template>
  <div class="">
      <p>name : {{repo.m_name}}</p>
      <p>website : <a :href="repo.m_pageURL">{{repo.m_pageURL}}</a></p>
      <p>repo : <a :href="repo.m_htmlURL">{{repo.m_htmlURL}}</a></p>
      <p>language : {{repo.language}}</p>
  </div>
</template>

<style scoped>
/* 스타일을 추가하세요 */
</style>
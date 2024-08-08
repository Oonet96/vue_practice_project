<script>
import GitRepoView from './GitRepoView.vue'
import BookmarkView from './BookmarkView.vue'
import SummaryView from './SummaryView.vue'

export default {
  name: 'HomeView',
  props: {
    
  },
  components: {
    GitRepoView,
    BookmarkView,
    SummaryView
  },
  setup() {


  }
};
</script>

<template>
  <div class="home-view">
    <div id="git_preview_container">
      <GitRepoView :bPreview="true"/>
    </div>
    <div id="bookmark_preview_container">
      <BookmarkView :bPreview="true"/>
    </div>
    <div id="summary_preview_container">
      <SummaryView :bPreview="true"/>
    </div>
  </div>
</template>

<style scoped>
  /* 영역 조절 */
  #git_preview_container{
    height: 200px;
  }
  #bookmark_preview_container{
    height: 500px;
  }
  #summary_preview_container{
    height: 800px;
  }
</style>
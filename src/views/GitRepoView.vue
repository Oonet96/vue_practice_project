<script>
//https://api.github.com/users/{userName} - userInfo
//https://api.github.com/users/{userName}/repos - user public repoList
//https://api.github.com/repos/{userName}/{repoName} - user public repoInfo
//https://api.github.com/repos/{userName}/{repoName}/readme -user public repo readme
import RepoDetailBoxComponent from '@/components/RepoDetailBoxComponent.vue';
export default {
  name: 'GitRepoView',
  props: {
    bPreview:Boolean,
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    RepoDetailBoxComponent
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      userName:'Oonet96',
      curSite:'https://oonet96.github.io/react_movie_project/',
      curRepo:'https://github.com/Oonet96/react_movie_project',
      publicRepoList:[{},]
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    // sample3() {
    //   return '';
    // }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<template>
  <div class='contents'>

    <div class='title-box'>
      <h1>
        {{userName}}
      </h1>
    </div>

    <div class='preview-box'>
      <p>현재 작업하고 있는 project</p>
      <p>website : <a :href="curSite">{{curSite}}</a></p>
      <p>repo : <a :href="curRepo">{{curRepo}}</a></p>
    </div>

    <div class='detail-box' v-if="!bPreview">
        <RepoDetailBoxComponent :v-for="item in publicRepoList" :repo='item'/>
    </div>
    
  </div>
</template>

<style scoped>
/* 스타일을 추가하세요 */
</style>
<script>
//https://api.github.com/users/{userName} - userInfo
//https://api.github.com/users/{userName}/repos - user public repoList
//https://api.github.com/repos/{userName}/{repoName} - user public repoInfo
//https://api.github.com/repos/{userName}/{repoName}/pages - user public repoPages X
//https://api.github.com/repos/{userName}/{repoName}/readme -user public repo readme
import {ref} from 'vue';
import RepoDetailBoxComponent from '@/components/RepoDetailBoxComponent.vue';
export default {
  name: 'GitRepoView',
  props : {
    bPreview:Boolean,
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    RepoDetailBoxComponent
  },
  setup() {

    //24.08.08 HT : 화면 전환시에 언마운트가 되지 않는 경우가 있어서 반응형으로 만들어줘야됨
    //24.08.08 HT : 여기서는 그럴일 없음 router-view가 하나기때문에 어차피 언마운팅됨 코드 진짜 개같음
    // const m_bPreview = toRef(props,'bPreview');

    //tmpData
    const m_userName = ref('Oonet96');
    //가장 최근에 커밋한 레포 받아올것
    const m_curSite = ref(`https://${m_userName.value}.github.io/react_movie_project/`); 
    const m_curRepo = ref('https://github.com/Oonet96/react_movie_project');
    //

    //https://api.github.com/users/{userName}/repos - user public repoList
    const m_tmpPublicRepoList = ref([
      {
        m_name: 'react_movie_project',
        m_pageURL:`https://${m_userName.value}.github.io/react_movie_project/`,
        m_htmlURL:'https://github.com/Oonet96/react_movie_project',
        language:'react'
      },
      {
        m_name: 'react_practice',
        m_pageURL:`https://${m_userName.value}.github.io/react_practice/`,
        m_htmlURL:'https://github.com/Oonet96/react_practice',
        language:'react'
      }
    ]);


    return {
      //props
      // m_bPreview,

      //data
      m_userName,
      m_curSite,
      m_curRepo,
      m_tmpPublicRepoList
    };
  }
};
</script>

<template>
  <div class='contents'>

    <div class='title-box'>
      <h1>
        {{m_userName}}
      </h1>
    </div>

    <div class='preview-box'>
      <p>현재 작업하고 있는 project</p>
      <p>website : <a :href="m_curSite">{{m_curSite}}</a></p>
      <p>repo : <a :href="m_curRepo">{{m_curRepo}}</a></p>
    </div>

    <div class='detail-box' v-if="!bPreview">
        <RepoDetailBoxComponent v-for="(item,index) in m_tmpPublicRepoList"
         :key="index" :repo='item'/>
    </div>
    
  </div>
</template>

<style scoped>
/* 스타일을 추가하세요 */
  .contents>div{
    padding-left:30px;
    text-align: left;
  }
</style>
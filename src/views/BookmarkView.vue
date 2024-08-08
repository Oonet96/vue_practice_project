<script>
import { ref } from "vue";
export default {
  name: "BookmarkView",
  props: {
    bPreview: Boolean,
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  setup() {
    // https://www.google.com/s2/favicons?domain=${item}&sz=${16}px 로 파비콘 받아오기
    // https://www.google.com/s2/favicons?domain=${item} 이건 파비콘 받아옴 위에는 왜?
    const m_arrTmpBookmark = ref([
      { title: "히히", url: "https://recipes4dev.tistory.com/" },
      {
        title: "나야 나",
        url: "http://www.simpleisbest.net/post/2011/04/01/Review-NET-Garbage-Collection.aspx",
      },
      { title: "나지롱", url: "https://inpa.tistory.com/" },
      { title: "나지롱", url: "https://getbootstrap.kr/docs/5.3/examples/" },
      { title: "나지롱", url: "https://ko.javascript.info/class-inheritance" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
      { title: "나지롱", url: "https://www.youtube.com/" },
    ]);

    return {
      m_arrTmpBookmark,
    };
  },
};
</script>

<template>
  <div class="contents">
    <!-- 내용을 추가하세요 -->
    <div class="">

      <div>탭목록</div>

      <div class="bookmark-grid-container">
        <div
          class="bookmark-box"
          v-for="(item, index) in m_arrTmpBookmark"
          :key="index"
        >
          <a :href="item.url">
            <img
              :src="`https://www.google.com/s2/favicons?domain=${item.url}`"
              width="40px"
            />
            <p>{{ item.title }}</p>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 스타일을 추가하세요 */
.contents a{
  text-decoration: none;
}
.bookmark-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
</style>

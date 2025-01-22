<script setup>
import { getads } from "@/apis/adsAPI";
import { onMounted, ref } from "vue";

const ads = ref([]);

onMounted(async () => {
  const result = await getads();
  ads.value = result.results;
});
</script>

<template>
  <el-carousel height="75vh" direction="vertical" motion-blur :autoplay="false">
    <el-carousel-item v-for="ad in ads" :key="ad.id">
      <div class="ad-container">
        <div class="image-wrapper">
          <img :src="ad.image" alt="广告图片" />
          <div class="hover-content">
            <h3>{{ ad.title }}</h3>
            <p>{{ ad.description }}</p>
            <el-button type="primary" class="learnmore">Learn More</el-button>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
img {
  max-width: 100%;
}

.recent-events {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .image-wrapper img {
    border-radius: 8px;
  }
}

.hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 半透明背景 */
  color: #fff;
  padding: 10px; /* 增加内边距 */
  opacity: 0; /* 默认隐藏 */
  transition: opacity 0.3s ease-in-out;
  border-radius: 8px;

  h3 {
    margin: 0;
    font-size: 3.5rem;
  }

  p {
    margin: 0;
    font-size: 2rem;
    /* 位于底部 */
    position: absolute;
    bottom: 20%;
  }

  .learnmore {
    position: absolute;
    bottom: 10%;
    padding: 0.5rem 1rem;
    background-color: white;
    color: $primary-color;
    font-size: 1.5rem;

    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }
}

.image-wrapper:hover .hover-content {
  opacity: 1;
}
</style>

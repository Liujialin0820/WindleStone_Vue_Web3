<script setup>
import "vidstack/bundle";
import { computed } from "vue";

const preventContextMenu = (event) => {
  event.preventDefault();
};

const props = defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: String,
    default: "",
  },
  chapters: {
    type: String,
    default: "",
  },
  firstFrame: {
    type: String,
    default: "",
  },
  fillContainer: {
    type: Boolean,
    default: false,
  },
});

/**
 * 根据 fillContainer 动态返回 style
 */
const playerStyles = computed(() => {
  if (props.fillContainer) {
    return {
      width: "100%",
      height: "100%",
      /*
       * 如果你需要严格的纵横比，可以加个 aspect-ratio
       * aspectRatio: '16/9'
       */
    };
  }
  // 否则用 auto 或者不加任何宽高限制
  return {
    width: "auto",
    height: "auto",
  };
});

const alt_text = "";
</script>

<template>
  <media-player
    playsinline
    title=""
    :src="videoSrc"
    @contextmenu="preventContextMenu"
    :style="playerStyles"
  >
    <media-provider>
      <media-poster
        class="vds-poster"
        :src="firstFrame"
        :alt="alt_text"
      ></media-poster>
      <track :src="chapters" srclang="en-US" kind="chapters" default />
    </media-provider>
    <media-video-layout :thumbnails="thumbnails"> </media-video-layout>
  </media-player>
</template>

<style scoped>
media-player {
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  background-color: transparent !important;
}
</style>

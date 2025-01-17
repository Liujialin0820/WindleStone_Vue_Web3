<script setup>
import { computed } from "vue";

const props = defineProps({
  /** 小标题 */
  pTitle: {
    type: String,
    default: "",
  },
  /** 主标题 */
  h2Title: {
    type: String,
    default: "",
  },
  /** 标题对齐方式 */
  titleAlign: {
    type: String,
    default: "center",
    validator: (value) => ["center", "left", "right"].includes(value),
  },
  /** 小标题（p）文字颜色 */
  pColor: {
    type: String,
    default: "#414141",
  },
  /** 主标题（h2）文字颜色 */
  h2Color: {
    type: String,
    default: "#000000",
  },
  /** 横线与小圆点的颜色 */
  accentColor: {
    type: String,
    default: "var(--primary)",
    // 你可以改成其它，如 #ef233c 或任意十六进制 / RGB / HSL
  },
});

// 计算对齐类
const alignmentClass = computed(() => {
  return {
    "align-center": props.titleAlign === "center",
    "align-left": props.titleAlign === "left",
    "align-right": props.titleAlign === "right",
  };
});
</script>

<template>
  <!-- 
    通过 :style 将颜色作为 CSS 自定义属性传进去
    在 scoped CSS 中可以用 var(--xxx) 读取
  -->
  <div
    class="section-header"
    :class="alignmentClass"
    :style="{
      '--p-color': pColor,
      '--h2-color': h2Color,
      '--accent-color': accentColor,
    }"
  >
    <p>{{ pTitle }}</p>
    <h2 v-html="h2Title"></h2>
  </div>
</template>

<style scoped>
/* -----------------------
   1. 基础样式
------------------------ */
.section-header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 默认居中 */
}

/* 小标题 */
.section-header p {
  display: inline-block;
  position: relative;
  margin: 0;
  padding-left: 40px; /* 预留给横线+圆点的空间 */
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  /* 使用 var(--p-color) 控制文字颜色 */
  color: var(--p-color);
}

/* 主标题 */
.section-header h2 {
  margin: 10px 0 0 0; /* 与小标题保持间距 */
  font-size: 32px;
  font-weight: 700;
  /* 使用 var(--h2-color) 控制文字颜色 */
  color: var(--h2-color);
}

/* -----------------------
   2. 横线与小圆点
------------------------ */

/* 前面的横线 */
.section-header p::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 25px; /* 横线长度 */
  height: 2px; /* 横线粗细 */
  /* 使用 var(--accent-color) 作为横线颜色 */
  background: var(--accent-color);
  left: 0;
}

/* 小圆点 */
.section-header p::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3px; /* 圆点直径 */
  height: 3px;
  border-radius: 50%; /* 圆形 */
  background: var(--accent-color);
  left: 30px; /* 放在横线右边 */
}

/* -----------------------
   3. 对齐方式
------------------------ */

/* (1) 居中对齐 */
.align-center {
  align-items: center;
  text-align: center;
}

/* (2) 左对齐 */
.align-left {
  align-items: flex-start;
  text-align: left;
}

/* (3) 右对齐 */
.align-right {
  align-items: flex-end;
  text-align: right;
}

/* 
   如果想在 left / right 模式下
   改变横线、圆点的位置，可在这里写相应 ::before / ::after 的 left 值
   示例里默认居中时的写法也能通用
*/

/* -----------------------
   4. 响应式
------------------------ */
@media (max-width: 767.98px) {
  .section-header h2 {
    font-size: 28px;
  }
}

@media (max-width: 575.98px) {
  .section-header h2 {
    font-size: 20px;
  }

  .section-header p {
    font-size: 13px;
  }
}
</style>

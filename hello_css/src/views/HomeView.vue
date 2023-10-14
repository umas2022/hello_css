<template>
  <div class="page-body">
    <!-- 标题说明 -->
    <div id="header">
      <h1>hello css</h1>
      <h3>收集有趣的css，持续更新中</h3>
    </div>

    <!-- <el-button type="danger" @click = test_button>test</el-button> -->
    <!-- 书签 -->
    <div class="mark-group">
      <el-collapse >
        <el-collapse-item v-for="(group, index) in boormark" :name="index" :key="index">
          <template #title>
            <h2>{{ index }}</h2>
          </template>

          <!-- 内层 -->
          <div class="mark-page">
            <el-collapse>
              <el-collapse-item v-for="page in group" :name="page" :key="page">
                <template #title>
                  <h3>{{ page.title }}</h3>
                </template>
                <a :href="page.link">{{ page.link }}</a>
                <div v-if="page.about[0]">
                  <div v-for="(line,index) in page.about" :key="index">{{ line }}</div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>
<script lang="ts" setup>
import boormark from "./bookmark.json";


const test_button = () => {
  console.log(boormark)
}

</script>
<style lang="scss" scoped>
div.page-body {
  text-align: center;
}

div.mark-group {
  width: 70%;
  margin: 0 auto;
}

div.mark-page {
  width: calc(100% - 50px);
  float: right;
}
</style>

<template>
    <el-scrollbar class="navi-box">

        <div class="navi-item" v-for='(item, index) in router_list' @click="router_push(item.path)" :key="index">
            <span>{{ index + ' - ' + String(item.name)  }}</span>
        </div>

    </el-scrollbar>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'


import { useRouter } from "vue-router";
const router = useRouter();
const router_list = reactive(router.options.routes)

import { useStore } from "vuex";
const store = useStore()


const router_push = (router_str: string) => {
    console.log(router_str)
    console.log(typeof (router_str))
    router.push(router_str)
}


</script>
  
<style lang="scss">
.navi-box {
    width: 300px;
    padding: 5px 5px 5px 5px;
}

.navi-item {
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 5px;
    padding: 5px 5px 5px 15px;
}

.navi-item:hover {
    background-color: rgba(0, 255, 255, 0.1);
    cursor: pointer;
}
</style>
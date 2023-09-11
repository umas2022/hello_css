<template>
    <div class="layout-index">


        <div id="navi-body">
            <div id="navi">
                <LayoutNavi />
            </div>
            <div id="body">
                <LayoutBody />
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { watch, onMounted, provide, inject, ref, reactive, computed } from "vue";
import { useStore } from "vuex";
const store = useStore()

import LayoutNavi from "./LayoutNavi.vue";
import LayoutBody from "./LayoutBody.vue";


</script>
<style lang="scss" scoped>
div.layout-index {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;


    #navi-body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        #navi {
            height: 100%;
            width: auto;
            border-right: solid 1px rgba(0, 0, 0, 0.1);
        }

        #body {
            height: 100%;
            width: 100%;
        }
    }
}
</style>
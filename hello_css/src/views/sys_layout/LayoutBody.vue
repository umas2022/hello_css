<template>
    <div class="layout-body">
        <router-view />
    </div>
</template>
<script lang="ts" setup>
import { watch, onMounted, provide, inject, ref, reactive, computed } from "vue";
import { useStore } from "vuex";
const store = useStore()

</script>
<style lang="scss" scoped>
div.layout-body {
    width: 100%;
    // height: 100%;
    // min-height: 100vh;
}
</style>


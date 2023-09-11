<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>标题</h1>
                <h3>说明</h3>
            </div>
            <div id="refer">
                <a href="">参考：链接</a>
            </div>
            
            <!-- 内容主体 -->
            <div id="main-box">

            </div>

        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
div.page-body {
    text-align: center;

    #refer {
        padding: 10px;
    }

    #main-box {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

</style>

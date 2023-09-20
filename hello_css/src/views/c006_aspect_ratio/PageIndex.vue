<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>宽高比</h1>
                <h3>第一种方法用aspect-ratio</h3>
                <h3>第二种方法设置height=0后用padding-bottom控制比例</h3>
            </div>
            <div id="refer">
                <!-- <a href="">参考：链接</a> -->
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div class="box1">aspect-ratio</div>
                <div class="box2-out">
                    <div class="box2-in">aspect-ratio</div>
                </div>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}


div.box1 {
    width: 30%;
    background-color: aqua;
    margin: 10px;
    aspect-ratio: 16/9;
}

div.box2-out {
    width: 30%;
    height: 0;
    margin: 10px;
    position: relative;
    padding-bottom: 15%;
    border: solid 1px red;
}
div.box2-in{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0; // height: 100%
    right: 0; // width: 100%
    background-color: aqua;
}
</style>

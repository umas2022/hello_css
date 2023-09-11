<template>
    <div class="page-body">
        <el-scrollbar>
            <div id="header">
                <h1>波浪按钮</h1>
                <h3>波浪其实是通过before和after创建的两个旋转移动的圆角矩形</h3>
            </div>
            <div id="refer">
                <a href="https://www.bilibili.com/read/cv25883668/">参考：【CSS】水流波纹按钮</a>
            </div>
            <div id="main-box">

                <a href="" class="button">Hover me</a>
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

    }
}

// 按钮基础样式
.button {
    display: inline-block;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 2em;
    padding: 0.75em 1em;
    color: blue;
    border: 0.15em solid blue;
    border-radius: 2em;
    transition: 4s;
}


// 两个圆角矩形（波浪）
.button:before,
.button:after {
    content: "";
    position: absolute;
    top: -1.5em;
    z-index: -1;
    width: 200%;
    aspect-ratio: 1;
    border: none;
    border-radius: 40%;
    background-color: rgba(0, 0, 255, 0.25);
    transition: 4s;
}


// 旋转
.button:before {
    left: -80%;
    transform: translate3d(0, 5em, 0) rotate(-340deg);
}

.button:after {
    right: -80%;
    transform: translate3d(0, 5em, 0) rotate(390deg);
}

// 文本变白
.button:hover,
.button:focus {
    color: white;
}

// 波浪颜色
.button:hover:before,
.button:hover:after,
.button:focus:before,
.button:focus:after {
    transform: none;
    background-color: rgba(0, 0, 255, 0.75);
}
</style>


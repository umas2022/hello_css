<template>
    <div class="page-body">
        <el-scrollbar>
            <div id="header">
                <h1>流光边框</h1>
                <h3>边框其实是通过:before创建的蒙版</h3>
                <h3>通过conic-gradient创建了锥形渐变色的背景图并持续旋转</h3>
            </div>
            <div id="refer">
                <a
                    href="https://www.bilibili.com/video/BV1Fj41127XA/?spm_id_from=333.999.0.0&vd_source=d406c457c7d9cdc7f75d8f0288b0bed9">参考：css流光边框动画效果</a>
            </div>
            <div id="main-box">

                <div id="bg-box">
                    <div class="mflow-box"></div>
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
    }
}

#bg-box {
    background-color: black;
    width: 400px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
}

.mflow-box {
    width: 200px;
    height: 120px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}

// 边框
.mflow-box::before {
    content: "";
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-color: black;
    position: absolute;
    border-radius: 20px;
    top: 3px;
    left: 3px;
    z-index: 2;
}


// 背景流光
.mflow-box::after {
    content: "";
    width: 300%;
    height: 300%;
    background-color: antiquewhite;
    background-image: conic-gradient(#EEEEEE22, #F0C237, #EEEEEE22 30%);
    position: absolute;
    border-radius: 20px;
    top: -100%;
    left: -100%;
    z-index: 1;
    animation: rotate 5s linear infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>


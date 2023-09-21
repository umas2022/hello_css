<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>水滴卡片</h1>
                <h3>不规则轮廓由FANCY-BORDER-RADIUS网站生成</h3>
                <h3>多重阴影模拟水滴质感</h3>
                <h3>最后用before和after添加左上角两片高光</h3>
            </div>
            <div id="refer">
                <a href="https://www.youtube.com/watch?v=ECTIE39k-_0">参考：链接</a>
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div class="container">
                    <div class="drop"></div>
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
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.03);
    }
}


.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container .drop {
    position: relative;
    width: 350px;
    height: 350px;
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
        25px 30px 30px rgba(0, 0, 0, 0.05),
        25px 35px 20px rgba(0, 0, 0, 0.05),
        inset -20px -20px 25px rgba(255, 255, 255, 0.9);
    transition: 0.5s ease-in-out;
}

.container .drop {
    border-radius: 39% 61% 70% 30% / 39% 35% 65% 61%;
}

.container .drop:hover {
    border-radius: 50%;
}

.container .drop::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 70px;
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.9;
}

.container .drop::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 100px;
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.9;
}

</style>

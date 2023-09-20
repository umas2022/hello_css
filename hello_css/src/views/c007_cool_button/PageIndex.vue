<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>玻璃灯光按钮</h1>
                <h3>linear-gradient线性渐变创建玻璃效果</h3>
                <h3>backdrop-filter: blur(15px)背景灯光模糊晕染</h3>
            </div>
            <div id="refer">
                <!-- <a href="">参考：链接</a> -->
                参考：原视频来自YouTube OT online tutorials
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div class="btn">
                    <a href="">Button</a>
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

        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}


.btn {
    position: relative;
    width: 200px;
    height: 80px;
}

.btn a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2); // 阴影 box-shadow: h-offset v-offset blur spread color;
    border-top: 1px solid rgba(255, 255, 255, 0.1); // 上下边框增加玻璃质感
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none; // 禁用a标签默认的文字格式
    transition: 0.5s;
    z-index: 1;
    overflow: hidden; // 隐藏超出区域的内容
    backdrop-filter: blur(15px);  // 对背景应用模糊效果，模糊半径为 15 像素
}


.btn:hover a {
    letter-spacing: 3px;
}


.btn a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    // linear-gradient：表示创建一个线性渐变背景
    // to left：表示渐变的方向是从右向左
    transform: skewX(45deg) translateX(0); // 倾斜，水平变形
    transition: 0.5s;
}

.btn:hover a::before {
    transform: skewX(45deg) translateX(200px); // 倾斜，水平变形
}


// 下面是灯光效果


.btn::before{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%); // 居中
    width: 50px;
    height: 20px;
    bottom: -10px;
    background-color: rgba(255, 0, 0, 0.5);
    border-radius: 10px;
    transition: 0.5s;
}

.btn:hover::before{
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
}
</style>

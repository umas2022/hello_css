<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>点赞动效</h1>
                <h3>随机运动的透明图标</h3>
                <h3>每次点击将一个图标的透明的设为1</h3>
            </div>
            <div id="refer">
                <a href="https://github.com/chokcoco/iCSS/issues/198">参考：iCSS</a>
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div style="height:400px;display:flex">
                    <ul class="g-wrap">
                        <li v-for="i in 50" :key="i"></li>
                    </ul>
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


$expression: "😀", "🤣", "❤️", "😻", "👏", "🤘", "🤡", "🤩", "👍🏼", "🐮", "🎈", "💕", "💓", "💚";

.g-wrap {
    position: relative;
    margin: auto;
    width: 50px;
    height: 50px;

    // 点赞按钮
    &::before {
        content: "👍🏼";
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        text-align: center;
        z-index: -1; // 置于底层不妨碍点击li
        user-select: none;
        filter: grayscale(1);
        border: 1px solid #999;
        border-radius: 50%; // 完全的圆形
        background: #999;
        transition: 0.1s;
    }

    &:active::before {
        transform: scale(1.1);
    }
}

@for $i from 1 to 51 {
    li:nth-child(#{$i}) {
        // li:nth-child(n)匹配父元素中的第n个li子元素，如果第n个不是li则匹配失败（伪类选择器）
        // 同理还有:nth-of-type(n)匹配相同标签,:nth-last-child()从后往前匹配
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        transform: rotate(#{random() * 80 - 40}deg); // 产生±40度随机旋转角
        animation: move #{random() * 2500 + 1500}ms infinite #{random() * 4000 / -1000}s cubic-bezier(.46, .53, .51, .62);
        // animate添加动画效果，添加无限动画基本语法：animate: move 2000ms infinite
        // 第一个随机数是动画的持续时长，第二个随机数是负的动画延迟量，使动画提前进行
        opacity: 0; // 初始透明度为0，点击后显示
        cursor: pointer;
        transition: 1.5s opacity .8s; // 动画持续时间1.5s，延迟0.8s
        user-select: none;

        &::before {
            // before伪元素可以在对象前增加一些内容，两个冒号和一个冒号是等价的，两冒号是新写法(css3)
            // &是scss语法，用来引用父元素，这里就是li
            content: nth($expression, random(length($expression))); // 伪元素配合content指定内容
            // sass函数nth：语法nth($list,$n)，用来取列表中某个位置的值
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); // 绝对居中
            width: 50px;
            height: 50px;
            font-size: 50px;
        }
    }

    li:active {
        // active选择器点击时触发，同理还有:hover(悬停),:link(激活),:visited(已访问)
        transition: .1s opacity; // 透明度变成1的时间：0.1s
        opacity: 1 !important; // 点击，透明度变成1
    }
}

@keyframes move {
    100% {
        transform: rotate(0) translate(0, -250px);
    }
}
</style>

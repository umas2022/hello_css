<template>
    <div class="page-body">
        <!-- 标题说明 -->
        <div id="header">
            <h1>瀑布流滚动</h1>
            <h3>使用了js</h3>
            <h3>.box:nth-child(3n+1)分别为左边右边和中间的元素添加样式</h3>
            <h3>box.offsetTop获取当前位置</h3>
            <h3>vue组件中用@scroll监听元素event.target.scrollTop获取元素滚动条位置</h3>
            <h3>window.scrollY是用来获取整个页面滚动条位置的</h3>
        </div>
        <div id="refer">
            <a href="https://www.youtube.com/watch?v=mnBXbbng37g&t=502s">参考：链接</a>
        </div>

        <!-- 内容主体 -->
        <div id="main-box" @scroll="scrollTrigger">
            <div class="container">
                <div v-for="i in 60" :key="i" class="box"></div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

// onMounted在组件被挂载到 DOM 后执行，无法直接应用样式

// onMounted(() => {
//     for (let i = 0; i < 60; i++) {
//         let box = document.createElement('div')
//         box.classList.add('box');
//         document.querySelector("#main-box")?.appendChild(box)
//     }
// })


function scrollTrigger(event:Event) {
    const mainBox = event.target;
    const scrollTop = mainBox!.scrollTop;

    let boxes = document.querySelectorAll(".box")
    boxes.forEach((boxxx) => {
        if (boxxx.offsetTop < scrollTop) {
            boxxx.classList.add("active")
        } else {
            boxxx.classList.remove("active")
        }
    })
}


</script>
<style lang="scss" scoped>

div.page-body {
    text-align: center;

    #refer {
        padding: 10px;
    }

    #main-box {
        padding-top: 100px;
        padding-bottom: 100px;

        height: 500px;
        border: solid 1px blue ;
        overflow-y: auto; // 显示滚动条
     }
}


.container {
    margin: 0 auto;
    text-align: center;
    border: solid 1px green;
    margin-top: 300px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; // 等分三列
    width: 660px;
    height: 2000px;
    grid-gap: 30px;
}

.container .box {
    position: relative;
    width: 200px;
    height: 200px;
    transition: 0.5s;
    background: red;
    border-radius: 10px;
}

.container .box:nth-child(3n+1){ // 选中第3n+1个元素
    transform: translate(-400px,0) scale(0); // 向左平移且缩小
}
.container .box:nth-child(3n+2){ 
    transform: translate(0,400px) scale(0); // 向下平移缩小
}
.container .box:nth-child(3n+3){ 
    transform: translate(400px,0) scale(0); 
}

.container .box.active{
    transform: translate(0,0) scale(1); 
}
</style>

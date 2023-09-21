<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>玻璃卡片</h1>
                <h3>使用margin:-45px使卡片堆叠</h3>
                <h3>用--r定义了各自的角度变量</h3>
                <h3>transform: rotate(calc(var(--r) * 1deg));</h3>
            </div>
            <div id="refer">
                <a href="https://www.youtube.com/watch?v=tLWaDbpw-LI">参考：链接</a>
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div class="container">
                    <div class="glass" style="--r:-15;" data-text="Design"></div>
                    <div class="glass" style="--r:5;" data-text="Code"></div>
                    <div class="glass" style="--r:25;" data-text="What?"></div>
                    <div class="glass" style="--r:-15;" data-text="No.4"></div>
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
        background-color: #0f222f;
    }
}


.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container .glass {
    position: relative;
    width: 200px;
    height: 240px;
    background: linear-gradient(#fff2, transparent);
    backdrop-filter: blur(10px);
    border: solid 1px rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    margin: 0 -45px;
    transform: rotate(calc(var(--r) * 1deg));

}

.container:hover .glass{
    transform: rotate(0deg);
    margin: 0 20px;
}

.container .glass::before{
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
}
</style>

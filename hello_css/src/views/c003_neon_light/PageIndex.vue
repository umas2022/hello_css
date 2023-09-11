

<template>
    <div class="page-body">
        <el-scrollbar>
            <!-- 标题说明 -->
            <div id="header">
                <h1>霓虹灯特效</h1>
                <h3>通过keyframes创建的关于text-shadow的动画</h3>
            </div>
            <div id="refer">
            </div>

            <!-- 内容主体 -->
            <div id="main-box">

                <div id="bg-box">
                    <div class="sign">
                        <h1 class="sign-blue">夜市小龙虾</h1>
                    </div>
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
    width: 600px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
}

.sign {
    min-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.sign-blue {
    font-size: 5.6rem;
    text-align: center;
    line-height: 1;
    color: #c6e2ff;
    animation: neon_blue .08s ease-in-out infinite alternate;
}

@keyframes neon_blue {
    from {
        text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52), 0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78), 0 0 54px rgba(30, 132, 242, 0.92);
    }

    to {
        text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58), 0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88), 0 0 60px #1e84f2;
    }
}
</style>


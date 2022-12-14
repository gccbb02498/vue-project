<template>
    <el-header class="header">
        <div class="top">
            <div class="logo">
                <h3 style="color: #e7c547;">小說狂人</h3>
                <span class="logoText">免費線上小說推薦</span>
            </div>
            <ul class="nav-menu">
                <li v-for="(item, index) in menulist" :key="index" class="m2"><a href="#.html">{{ item.name }}</a>
                </li>
            </ul>

        </div>

    </el-header>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
    name: "Home",
    setup(props) {

        const menulist = ref([
            { name: '玄幻奇幻' },
            { name: '言情' },
            { name: '武俠仙俠' },
            { name: '軍事歷史' },
            { name: '科幻未來' },
            { name: '靈異玄幻' },
            { name: '女生同人' },
            { name: '原創同人' },
            { name: '耽美' },
            { name: '百合' },
            { name: '日系' },
            { name: '奇幻冒險' },
            { name: '情色工口' },
            { name: '耽美工口' },
            { name: '經典文學' },
            { name: '推理' },
            { name: '女性向' },
            { name: '短篇' },
            { name: '精選排行' },
            { name: '人氣榜' },
            { name: '收藏榜' },
            { name: '完本榜' }
        ])
        return {
            menulist
        }
    }
})
</script>
<style lang="scss" src="../assets/css/_navigation.scss"></style>
<template>
    <el-header class="header">
        <div class="top">
            <div class="logo">
                <h3 style="color: #e7c547;">小說狂人</h3>
                <span class="logoText">免費線上小說推薦</span>
            </div>
            <ul class="nav-menu">
                <li v-for="(item, index) in menulist" :key="index" class="m2">
                    <!-- <router-link :to="{ path: '/', params: {} }"> -->

                    <!-- </router-link> -->
                    <a @click="routeTo(index)"> {{ item.name }}</a>
                </li>
            </ul>
        </div>
    </el-header>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
declare interface Menu {
    name: string
}
export default defineComponent({
    name: "Home",
    setup(props) {
        const router = useRouter()
        const menulist = reactive<Array<Menu>>([
            { name: '玄幻奇幻' },
            { name: '言情' },
            { name: '武俠仙俠' },
            { name: '軍事歷史' },
            { name: '科幻未來' },
            { name: '靈異玄幻' },
            { name: '精選排行' },
            { name: '人氣榜' },
            { name: '收藏榜' },
            { name: '完本榜' }
        ])
        function routeTo(index: number) {
            if (menulist[index].name) router.push({ name: 'Home', params: { name: menulist[index].name } })
        }
        return {
            menulist,
            routeTo
        }
    }
})
</script>

<style lang="scss" scoped src="../assets/css/_navigation.scss">

</style>

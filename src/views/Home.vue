<template>
    <el-main>
        <el-container>
            <ul>
                <li v-for="(item, index) in items[0]">
                    <div class="header">
                        <div class="img">
                            <router-link :to="{
                                name: 'Book', params: { id: item.id, },
                            }">
                                <img :src="item.img_url" width="50" height="66" />
                            </router-link>
                        </div>
                        <div class="text">
                            <div class="text1">
                                <router-link :to="{
                                    name: 'Book', params: { id: item.id, },
                                }">
                                    {{ item.name }}
                                </router-link>
                            </div>
                            <div class="text2">{{ item.author }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                        </div>
                    </div>

                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in items[0]">
                    <div class="header">
                        <div class="img">
                            <a href="#">
                                <img :src="item.img_url" width="50" height="66" />
                            </a>
                        </div>
                        <div class="text">
                            <div class="text1"><a href="">{{ item.name }}</a></div>
                            <div class="text2">{{ item.author }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                        </div>
                    </div>

                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in items[0]">
                    <div class="header">
                        <div class="img">
                            <a href="#">
                                <img :src="item.img_url" width="50" height="66" />
                            </a>
                        </div>
                        <div class="text">
                            <div class="text1"><a href="">{{ item.name }}</a></div>
                            <div class="text2">{{ item.author }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                        </div>
                    </div>

                </li>
            </ul>
        </el-container>
    </el-main>
</template>

<script lang="ts">
import { ref } from "vue";
interface Book {
    id: number
    img_url: string
    name: string
    author: string
    laster: string
    update: string
    class: string
    serialstatus: string

}
export default {
    setup(props) {

        const items = ref<Book[][]>(
            [
                [
                    {
                        id: 0,
                        img_url: "https://img.czbooks.net/thumbnail/d10891d5c97f8f29ec9f9c3f4b9f02e8.jpg",
                        name: '《淫術煉金士》',
                        author: "帥呆",
                        laster: "第七話　清算血債",
                        update: "2021-01-05",
                        class: '玄幻奇幻',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/fengmian/2018/12/636795491883547380.jpg",
                        name: '領主太邪惡',
                        author: "我愛挖坑",
                        laster: " 第七百九十四章 天地封神",
                        update: "2018-12-09",
                        class: '玄幻奇幻',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/fengmian/2016/6/636011982080973434.jpg",
                        name: '《萌寶快遞：拐個媽咪送爹地》',
                        author: "密雲不雨",
                        laster: "第五千九百零二章 葫蘆娃",
                        update: "2019-04-15",
                        class: '女生同人',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/static/www/images/fengmian.jpg",
                        name: '超文明進化領主',
                        author: "雲夢大領主",
                        laster: "",
                        update: "2018-02-24",
                        class: '靈異玄幻',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/fengmian/2022/2/637805848283261471.jpg",
                        name: '全民領主：我的亡靈會裂變',
                        author: "星殞落",
                        laster: "",
                        update: "2022-12-21",
                        class: '玄幻奇幻',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/fengmian/2022/2/637805848283261471.jpg",
                        name: '全民領主：我的亡靈會裂變',
                        author: "星殞落",
                        laster: "",
                        update: "2022-12-21",
                        class: '玄幻奇幻',
                        serialstatus: '連載中'
                    }, {
                        id: 0,
                        img_url: "https://img.uukanshu.com/fengmian/2022/2/637805848283261471.jpg",
                        name: '全民領主：我的亡靈會裂變',
                        author: "星殞落",
                        laster: "",
                        update: "2022-12-21",
                        class: '玄幻奇幻',
                        serialstatus: '連載中'
                    },


                ]
            ])
        return {
            items
        }
    }
};
</script>
<style lang="scss" src="../assets/css/_home.scss" scoped>

</style>
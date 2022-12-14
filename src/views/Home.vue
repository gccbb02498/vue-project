<template>
    <el-main>
        <el-container>
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
                            <div class="text2">{{ item.authoer }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                            <div class="text5">{{ item.pagecount }}</div>
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
                            <div class="text2">{{ item.authoer }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                            <div class="text5">{{ item.pagecount }}</div>
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
                            <div class="text2">{{ item.authoer }}</div>
                            <div class="text3">{{ item.laster }}</div>
                            <div class="text4">{{ item.update }}</div>
                            <div class="text5">{{ item.pagecount }}</div>
                        </div>
                    </div>

                </li>
            </ul>
        </el-container>
    </el-main>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    setup(props) {

        const items = ref(
            [
                [
                    {
                        img_url: "https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg",
                        name: '鍾情於你(校園H)',
                        authoer: "鹿時安",
                        laster: "番外2：孕期舔穴",
                        update: "2022-11-24",
                        pagecount: "835頁"
                    }, {
                        img_url: "https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg",
                        name: '鍾情於你(校園H)',
                        authoer: "鹿時安",
                        laster: "番外2：孕期舔穴",
                        update: "2022-11-24",
                        pagecount: "835頁"
                    }, {
                        img_url: "https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg",
                        name: '鍾情於你(校園H)',
                        authoer: "鹿時安",
                        laster: "番外2：孕期舔穴",
                        update: "2022-11-24",
                        pagecount: "835頁"
                    }, {
                        img_url: "https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg",
                        name: '鍾情於你(校園H)',
                        authoer: "鹿時安",
                        laster: "番外2：孕期舔穴",
                        update: "2022-11-24",
                        pagecount: "835頁"
                    }, {
                        img_url: "https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg",
                        name: '鍾情於你(校園H)',
                        authoer: "鹿時安",
                        laster: "番外2：孕期舔穴",
                        update: "2022-11-24",
                        pagecount: "835頁"
                    },

                ]
            ])
        return {
            items
        }
    }
};
</script>
<style lang="scss" src="../assets/css/_home.scss"></style>
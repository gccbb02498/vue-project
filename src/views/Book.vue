<template>
    <el-main>
        <el-container>
            <div>
                <div>
                    <el-image :src="data.src" fit="fill" :lazy="true"></el-image>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>連載狀態</td>
                                <td>{{ data.status }}</td>
                            </tr>
                            <tr>
                                <td>收 藏 數</td>
                                <td>{{ data.favorites }}</td>
                            </tr>
                            <tr>
                                <td>觀 看 數</td>
                                <td>{{ data.views }}</td>
                            </tr>
                            <tr>
                                <td>更新時間</td>
                                <td>{{ data.update }}</td>
                            </tr>
                            <tr>
                                <td>分 類</td>
                                <td>{{ data.classification }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <span>{{ data.name }}</span>
                    <span>作者： {{ data.author }}</span>
                </div>
                <div>
                    <span v-html="data.description"></span>
                </div>
            </div>
        </el-container>
    </el-main>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from 'vue'
import moment from 'moment'
import { useRoute } from 'vue-router'
declare type Data = {
    name: string
    author: string
    src: string
    status: string
    favorites: number
    views: number
    update: string
    classification: string
    description: string
}

export default defineComponent({
    setup() {
        const route = useRoute()
        console.log(route)
        const data = reactive<Data>({
            name: '《鍾情於你(校園H)》',
            src: 'https://cdn0.po18.tw/bc/11/759947/O20220412193928.jpg',
            status: '已完結',
            favorites: 842,
            views: 246841,
            update: moment("2022-11-24").format('YYYY-MM-DD'),
            classification: '情色工口',
            author: '鹿時安',
            description: '&nbsp; &nbsp; &nbsp; &nbsp;28歲事業有成，家庭美滿，取了一個漂亮的嬌妻，人人都說他這是攀附梁家的勢力才爬上如此地位。　　殊不知是周寒寧一步一個腳印走上來的，他娶了自己的白月光，學生時代的周寒寧因家境貧寒一直都不敢向梁好表白。　　直到出來工作之後，和梁好相逢，恰逢那時梁好需要一個結婚的人，他不過剛好是那個人罷了。　　沒人知道，他和梁好結婚一年來，他都沒能碰過梁好，她身上似乎有秘密。　　三十歲那年，周寒寧發現自己回到了十八歲，他決定一探究竟那個秘密。&nbsp; &nbsp; 其實這是一篇雙向暗戀文： 嬌縱富家女VS清冷學霸&nbsp; &nbsp; &nbsp; 推下基友的文，是我愛的金主文雲笙笙：《上位》&nbsp;奶大腰細女明星和她深情的舔狗金主 '
        })
        return { data };
    },

})
</script>

<style lang="scss" src="../assets/css/_book.scss" scoped>

</style>
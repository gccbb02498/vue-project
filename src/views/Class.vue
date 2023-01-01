<template>
    <el-main>
        <el-container>
            <ul>
                <li v-for="(item, index) in items">
                    <div class="item">
                        <div class="item-coverwrapper">
                            <router-link :to="{ name: 'Book', params: { id: item.id, }, }">
                                <div class="item-thumbnail">
                                    <img :src="item.src" />
                                </div>
                                <div class="item-title">{{ item.name }}</div>
                            </router-link>
                        </div>
                        <div class="item-author">{{ item.author }}</div>
                        <div class="item-newest"></div>
                        <div class="item-date">{{ item.update }}</div>
                        <div class="item-status">{{ item.status }}</div>

                    </div>
                </li>
            </ul>

        </el-container>
    </el-main>
</template>

<script lang="ts">
import store from "../state/store";
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
interface Book {
    id: number
    src: string
    name: string
    author: string
    // laster: string
    update: string
    classification: string
    status: string
    favorites: number
    views: number
    description: string
}
export default {
    setup(props) {
        const route = useRoute();
        const state = store.state;
        const datas = ref<Array<Book>>([
            {
                id: 1,
                name: "《放開那個女巫》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2016\/4\/635965541375948990.jpg",
                status: "已完結",
                favorites: 3621,
                views: 86644,
                update: "2020-11-20",
                classification: "玄幻奇幻",
                author: " 二目",
                description: "程岩原以為穿越到了歐洲中世紀，成為了一位光榮的王子。但這世界似乎跟自己想的不太一樣？女巫真實存在，而且還真具有魔力？"
            },
            {
                id: 2,
                name: "《學姐快住口！》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2021\/8\/637653170815914690.jpg",
                status: "已完結",
                favorites: 270,
                views: 7931,
                update: "2020-06-23",
                classification: "玄幻奇幻",
                author: "蜜汁姬",
                description: "催更！今天的怎麽還沒更新？”\n“……學姐，現在才早上六點。”\n“那昨天的怎麽說？才一更！”\n“……戀愛日常文很吃細節，碼字的時候需要靈感的。”\n“那你靈感怎麽來的？明明就單身。”\n“……靠想象。”\n“那還不如談個戀愛，還能順帶取材。”\n“……要碼字，沒空。”\n“要不我幫你？”\n“……幫我碼字？”\n“當然是談戀愛了！”\n“……學姐，別開玩笑了。”"
            },
            {
                id: 3,
                name: "《仙逆》",
                src: "https:\/\/czbooks.net\/images\/default_no_thumbnail.jpg",
                status: "已完結",
                favorites: 1236,
                views: 28410,
                update: "2012-01-08",
                classification: "武俠仙俠",
                author: "耳根",
                description: "第一卷 平庸少年 第一章 離鄉\n鐵柱坐在村內的小路邊，望著蔚藍的天空，神情發呆，鐵柱不是他的本名，而是從小因為身體瘦弱，父親怕養不活，于是按照習俗稱呼的小名。\n他的本名叫做王林，王姓在四周幾個村落內算是大姓，祖上木匠出身，尤其是在縣城，王氏家族也算頗有名氣，擁有數個專門賣木制品的店鋪。\n鐵柱的父親是家族內庶出的次子，不能接管家族要務，而是在成婚後離開縣城，在此地村莊定居。\n由于有一手精湛的木匠活兒，鐵柱家境也算小康，吃穿不愁，就算是在村子里，也多受人尊敬。\n鐵柱從小就極為聰明，喜歡讀書，想法很多，幾乎是村子內公認的神童，父親每次听到別人夸獎，臉上的皺紋都會綻開，露出開懷的微笑。\n母親更是對他關心有佳，可以說從小到大，鐵柱都是生活在父母的慈愛之中，他知道父母對他期望很高，別人家的孩子在他這個年紀都已經下地干農活了，可他卻在家讀書。\n書讀的多了，想法自然也就隨之而來，對于山村外的世界，他充滿向往。抬頭望了望小路的盡頭，鐵柱嘆息一聲，合上手中書本，起身向家中"
            },
            {
                id: 4,
                name: "《超級神基因》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2016\/11\/636146961580426459.jpg",
                status: "已完結",
                favorites: 6305,
                views: 228195,
                update: "2022-09-21",
                classification: "玄幻奇幻",
                author: "十二翼黑暗熾天使",
                description: "未來波瀾壯闊的星際時代，人類終於攻克了空間傳送技術，可是當人類傳送到另一端的時候，卻發現那裡並不是過去未來，也不是星空下的任何一片土地……\n    神秘的庇護所世界，無數強橫的異生物，人類迎來了令人熱血沸騰的飛躍性大進化，開啟了星空下最輝煌璀璨的新紀元。\n    “獵殺神血生物黑甲蟲，獲得神血黑甲蟲獸魂，食用神血黑甲蟲血肉，可隨機獲得0至10點神基因。"
            },
            {
                id: 5,
                name: "《我女友是up主》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2020\/9\/637350536367135654.jpg",
                status: "已完結",
                favorites: 183,
                views: 3345,
                update: "2021-08-25",
                classification: "玄幻奇幻",
                author: "蜜汁姬",
                description: "昏暗的電影院裡。\n女孩緊閉雙眼，聲音顫巍巍的向身邊的男生說道：\n“陳聞，我喜歡你很久了，讓我做你女朋友好不好？”\n良久，女孩都沒有得到回復，於是忐忑的睜開眼，結果就看到陳聞正在四處打量什麽。\n“你、你在幹什麽啊？”\n“呃……”陳聞呆愣說道，“你是在拍視頻吧？我在找你的攝像頭。”\n女孩：“？？？”\n“難不成是針孔的？”\n“當然不是了！”\n陳聞沉默下來，沉吟片刻後問道：“所以是真心話大冒險輸了？"
            },
            {
                id: 6,
                name: "《萌寶快遞：拐個媽咪送爹地》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2016\/6\/636011982080973434.jpg",
                status: "連載中",
                favorites: 338,
                views: 7992,
                update: "2019-04-15",
                classification: "女生同人",
                author: "密雲不雨",
                description: "她是走投無路的落魄千金，他是高高在上的商業大亨。\n    黑暗之中，他無情的說，你不過是我生孩子的工具。\n    結果，她的身影卻夜夜入夢。\n    五年後，天降萌娃。\n    “女人我要包養你。”\n    被一個熊孩子拐走，一覺醒來，小包子變成了放大版的霸道總裁。\n    某男無恥，“安子琪，你睡了我，生了我的孩子，必須對我負責。”\n    某女淡定，“不好意思，你已經過了保修期，概不負責。”\n    小包子，“老爸，成功捕獲老媽一隻，包郵哦！”"
            },
            {
                id: 7,
                name: "《超文明進化領主》",
                src: "https:\/\/cdn.shucdn.com\/files\/article\/image\/9958\/9958582\/9958582s.jpg",
                status: "已完結",
                favorites: 175,
                views: 2458,
                update: "2018-02-24",
                classification: "靈異玄幻",
                author: "雲夢大領主",
                description: "某年某日，一個宅男，獲得一顆領主之心的故事。"
            },
            {
                id: 8,
                name: "《全民領主：我的亡靈會裂變》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2022\/2\/637805848283261471.jpg",
                status: "連載中",
                favorites: 292,
                views: 8185,
                update: "2022-12-21",
                classification: "玄幻奇幻",
                author: "星殞落",
                description: "空中出現一張巨大的嘴巴，將地球整個吞了下去，粉碎的地球碎片掉落的到處都是。\n“歡迎來到諸天獵場，你們的天賦是領主小屋。”\n地球人獲得發展能力領主小屋，開始了在諸天獵場中掙扎求生的生活。\n方傑手握初始道具陣營轉換令，將手指輕輕點在了亡靈陣營上。開局獲得亡靈裂變天賦，能夠讓手下亡靈分裂增值，而且天賦還能升級。"
            },
            {
                id: 9,
                name: "《網遊之近戰法師》",
                src: "https:\/\/img.uukanshu.com\/fengmian\/2013\/7\/635083009568645011.jpg",
                status: "已完結",
                favorites: 3646,
                views: 69522,
                update: "2018-03-02",
                classification: "科幻未來",
                author: "蝴蝶藍",
                description: "評選TA為影響自己最深的作品 一個超級武者,在玩網遊時誤選了法師,習慣以暴製暴,以力降力的他,隻能將錯就錯,搖身一變,成為一個近戰暴力法師,當力量與法術完美結合時,一條新的遊戲之路,被他打開了!\n    火球術？閃電鏈？寒霜冰鏡……等等，我是來練功夫的，法術關我什麽事？我是法師？哦，對，我是法師。不過……你真的堅信我是法師？好吧，看刀！看劍！看拳！看暗器！什麽？你又說我不是法師？如果你不相信，我證明給你看；如果你相信，我表演給你看:法師會功夫，誰也擋不住！"
            }
        ])

        const items = ref<Array<Book>>();
        watch(() =>
            state.name, (val, old) => {
                console.log(val, old)
                items.value = datas.value.filter(x => { return store.state.name == "" ? true : x.classification == route.params.name })
            }
        )

        return {
            items
        }
    }
};
</script>
<style lang="scss" src="../assets/css/_class.scss" scoped>

</style>
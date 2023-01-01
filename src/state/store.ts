import { reactive, readonly } from "vue";



const state = reactive({
    name: '',
    setClass(value: string) {
        console.log(value);

        this.name = value;
    }
})
export default {
    state: state,
}
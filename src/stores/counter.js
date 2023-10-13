import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'How is the weather up there?',
  title:'อย่าเดินเยียบดอกไม้นะ ไม่งั้นจะเจออากาศข้างบนเป็นยังไงบ้าง', img:'https://visitamanta.com/wp-content/uploads/2021/04/1.1-2-scaled.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},

])

return { travel_list }
})
export default {
  template : `<div @click = "click">{{data}}</div>`,
  data () {
    return {
      data : "我是app组件的内容"
    }
  },
  methods: {
    click() {
      alert('我是组件')
    } 
  }
}
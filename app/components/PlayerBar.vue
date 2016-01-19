<template>
  <!-- footer -->
  <footer class="player-bar">
    <div class="content">
      <div class="row">
        <div class="col-sm-6">
          <progress class="progress" value="20" max="100">1m 16s</progress>
        </div>

        <div class="col-sm-6">
          <ul class="control-flow nav nav-pills">
            <li class="nav-item"><button type="button" class="nav-link btn btn-primary-outline btn-sm">STOP <span class="octicon octicon-primitive-square"></span></button></li>
            <li class="nav-item"><button type="button" class="nav-link btn btn-primary-outline btn-sm">PLAY <span class="octicon octicon-triangle-right"></span></button></li>
            <!-- </ul> -->
            <!-- <ul class="control-volume nav nav-pills"> -->
            <li class="nav-item"><button type="button" class="nav-link btn btn-sm"><span class="octicon octicon-mute"></span></span></button></li>
            <li class="nav-item"><button type="button" class="nav-link btn btn-sm"><span class="octicon octicon-unmute"></span></span></button></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import store from '../store'
// const {
//   toggleTodo,
//   deleteTodo,
//   editTodo
// } = store.actions

export default {
  props: ['file']
  // props: ['todo'],
  // data () {
  //   return {
  //     editing: false
  //   }
  // },
  // directives: {
    // focus (value) {
    //   if (value) {
    //     this.vm.$nextTick(() => {
    //       this.el.focus()
    //     })
    //   }
    // }
  // },
  // methods: {
    // toggleTodo,
    // deleteTodo,
    // doneEdit (e) {
    //   var value = e.target.value.trim()
    //   if (!value) {
    //     deleteTodo(this.todo)
    //   } else if (this.editing) {
    //     editTodo(this.todo, value)
    //     this.editing = false
    //   }
    // },
    // cancelEdit (e) {
    //   e.target.value = this.todo.text
    //   this.editing = false
    // }
  // }
}
</script>

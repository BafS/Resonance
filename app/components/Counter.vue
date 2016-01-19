<template>
  <div>
    <p>[{{count}}]</p>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },

  ready() {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },

  destroyed() {
    clearInterval(this.handle)
  }
}
</script>

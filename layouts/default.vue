<template>
  <div>
    <Nuxt />
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Footer from './Footer'
import BackToTop from './BackToTop'
export default {
  components: {
    Footer,
    BackToTop,
  },
 
  data() {
    return {
    }
  },
  watch: {
    $route(pathUrl) {
      
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 600)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 600)
    })
  },
}
</script>
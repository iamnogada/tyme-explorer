<template>
  <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="@/assets/img/latest.png" alt />
            </p>
          </figure>
          <div class="media-content">
            <p>
              <small>Latest Block</small>&nbsp;
              <br />
              <strong>#{{latestblockNo}}</strong>
            </p>
          </div>
        </article>
</template>

<script>
export default {
  computed:{
    latestblockNo(){
      return this.$store.state.monitor.lastestBlock
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
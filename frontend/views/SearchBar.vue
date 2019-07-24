<template>
  <div class="field has-addons">
    <div class="control has-icons-left is-expanded">
      <input class="input" type="email" placeholder="BlockNo, TR, Wallet" :value="keyword"/>
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <div class="control">
      <a class="button is-info">Search</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  computed:{
    keyword(){
      return this.$store.state.sam.keyword
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
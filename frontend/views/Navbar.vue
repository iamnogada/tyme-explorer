<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img alt="Tyme logo" src="@/assets/img/logo-tyme.png" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainmenu"
          :class="{'is-active':showNav}"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainmenu" class="navbar-menu" :class="{'is-active':showNav}">
        <div class="navbar-start">
          <a class="navbar-item" href="/#/">Home</a>
          <!-- <a class="navbar-item" href="https://www.ecotyme.com" target="_blank">Wallet</a> -->
          <a class="navbar-item" href="/#/blocks">Blocks</a>
          <a class="navbar-item" href="/#/transactions">Transactions</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item is-expanded is-hidden-mobile">
            <SearchBar/>
          </div>
        </div>
      </div>
    </nav>
    <div class="container is-hidden-desktop searchbar">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/views/SearchBar.vue";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      showNav: false
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="css" scoped>
.searchbar {
  padding-left: 12px;
  padding-right: 12px;
}

@media screen and (min-width: 1024px) {
}
/* @media all and (min-width: 1088px) {
  .navbar {
    margin: 1rem 0;
  }

  .logo {
    padding: 0 0 0 12px;
  }

  .logo img {
    max-height: 2.5rem;
  }
} */
</style>
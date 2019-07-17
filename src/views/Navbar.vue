<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img alt="Tyme logo" src="../assets/img/logo-tyme.png" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{'is-active':showNav}"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':showNav}">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item" href="https://www.ecotyme.com" target="_blank">Wallet</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
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
@media all and (min-width: 1088px) {
  .navbar {
    margin: 1rem 0;
  }

  .logo {
    padding: 0 0 0 12px;
  }

  .logo img {
    max-height: 2.5rem;
  }
}
</style>
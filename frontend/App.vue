<template>
  <div id="app" class="container">
    <Navbar/>
    <!-- router-view -->
   <router-view/>
   <footer class="footer">
  <div class="content has-text-centered">
    <p>
      The website content
      is licensed <a href="https://www.ecotyme.com/">Ecotyme Global</a>.
    </p>
  </div>
</footer>
  </div>
</template>

<script>
// componenets
import Navbar from "@/views/Navbar.vue";

// models
import msg from "@/models/Message.js";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      greeting: ""
    };
  },
  created() {
    this.getMsg();
  },
  methods: {
    getMsg() {
      return ""//msg.getInitMsg().then(msg => (this.greeting = msg));
    }
  }
};
</script>

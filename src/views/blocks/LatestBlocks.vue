<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th colspan="3">Latest Blocks</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="2">
          <b-button @click="goBlocks" class="button is-primary is-fullwidth">view all blocks</b-button>

        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="item in latestblocks" :key="item._id">
        <td style="width:86px">
          <p class="image is-48x48">
            <a href>
              <img src="@/assets/img/bk.png" alt />
            </a>
          </p>
        </td>
        <td class="has-text-left">
          <a href class="button is-success is-small-mobile">#{{item._id}}</a>
          <span class="tag is-small ">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          <span class="tag is-rounded is-small">transfer:{{item.summary.transfer}}</span>
          <span class="tag is-rounded is-small">create:{{item.summary.account_create}}</span>
          <span class="tag is-rounded is-small" v-if="item.summary.account_update">update:{{item.summary.account_update}}</span>
        </td>
      </tr>
      
    </tbody>
  </table>
</template>


<script>
export default {
  created(){
    this.$store.dispatch('block/getBlockSummary')
  },
  computed:{
    latestblocks(){
      return this.$store.state.block.latestblocks
    }
  },
  methods: {
    goBlocks(){
      this.$router.push('blocks')
    }
  }
};
</script>

<style lang="css" scoped>
.table td {
  vertical-align: middle;
}

.table tbody tr {
  height: 82px;
}
.tr-display .button {
  display: block;
  width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
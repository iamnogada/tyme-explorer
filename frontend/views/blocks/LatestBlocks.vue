<template>
  <table class="table is-striped  is-fullwidth">
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
          <span class="tr-display">
            <a href class="button is-success">#{{item._id}}</a>
          </span>
          <span class="tag is-small ">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          <span class="tag is-rounded is-small">transactions:&nbsp;{{getTotal(item)}}</span>
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
    },
    getTotal(item){
      return Number(item.summary.transfer)+Number(item.summary.account_create)+Number(item.summary.account_update ?item.summary.account_update:0)
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
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media only screen and (max-width: 768px) {
  .tr-display .button {
    width: 15em;
  }
}
</style>
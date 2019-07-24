<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th colspan="3">Latest Transactions</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="3">
          <b-button
            @click="goTransactions"
            class="button is-link is-fullwidth"
          >view all transactions</b-button>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="item in latestTransactions" :key="item.id">
        <td style="width:86px">
          <p class="image is-48x48">
            <a href>
              <img class="is-rounded" src="@/assets/img/tx.png" alt />
            </a>
          </p>
        </td>
        <td colspan="2">
          <span class="tr-display">
            <a href class="button is-info">#{{item._id}}</a>
          </span>
          <span class="tag is-rounded">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          <span class="tag is-rounded">{{item.operations[0][0]}}</span>
          
          
          <!-- <div v-if="item.transfer != undefined">
            <span class="tag is-rounded">{{item.transfer.amount}}</span>
            <span class="tag is-rounded">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          </div>
          <p class="tags" v-if="item.create != undefined">
            <span class="tag is-rounded">create</span>
            <span class="tag is-rounded">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          </p>
          <p class="tags" v-if="item.update != undefined">
            <span class="tag is-rounded">update</span>
            <span class="tag is-rounded">{{getDiffString(new Date(item.timestamp),new Date())}}</span>
          </p>-->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("transaction/getTransactionSummary");
  },
  methods: {
    goTransactions() {
      this.$router.push("transactions");
    }
  },
  computed: {
    latestTransactions() {
      return this.$store.state.transaction.latestTransactions;
    }
  },
  data() {
    return {};
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
.brief {
  display: block;
  width: 12em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
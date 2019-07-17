<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th colspan="3">Transactions</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="3">
          <a class="button is-link is-fullwidth">view all transactions</a>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="item in transactions" :key="item.id">
        <td style="width:86px">
          <p class="image is-48x48">
            <a href>
              <img class="is-rounded" src="@/assets/img/tx.png" alt />
            </a>
          </p>
        </td>
        <td colspan="2">
          <span class="tr-display">
            <a href class="button is-info">#{{item.id}}</a>
          </span>
          <div v-if="item.transfer != undefined">
            <span class="tag is-rounded">{{item.transfer.amount}}</span>
            <span class="tag is-rounded">{{getDiffString(new Date(item.when),new Date())}}</span>
          </div>
          <p class="tags" v-if="item.create != undefined">
            <span class="tag is-rounded">create</span>
            <span class="tag is-rounded brief">{{item.create.wallet}}</span>
          </p>
          <p class="tags " v-if="item.update != undefined">
            <span class="tag is-rounded">update</span>
            <span class="tag is-rounded brief">{{item.update.wallet}}</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          no: 3000005,
          id: "95cb0cf46c87d66a413e837e54951c653a0f39e8",
          when: "16 July 2019 07:45:00 GMT+00:00",
          transfer: {
            amount: "1000.00000000 TYM",
            from: "myguddy1234567890",
            to: "seeeok"
          }
        },
        {
          no: 3000005,
          id: "95cb0cf46c87d66a413e837e54951c653a0f39e1",
          when: "16 July 2019 07:45:00 GMT+00:00",
          transfer: {
            amount: "1000.00000000 TYM",
            from: "myguddy",
            to: "seeeok"
          }
        },
        {
          no: 3000005,
          id: "95cb0cf46c87d66a413e837e54951c653a0f39e2",
          when: "16 July 2019 07:45:00 GMT+00:00",
          create: {
            wallet: "myguddy12345678901234567890"
          }
        },
        {
          no: 3000005,
          id: "95cb0cf46c87d66a413e837e54951c653a0f39e3",
          when: "16 July 2019 07:45:00 GMT+00:00",
          update: {
            wallet: "myguddy"
          }
        },
        {
          no: 3000005,
          id: "95cb0cf46c87d66a413e837e54951c653a0f39e4",
          when: "16 July 2019 07:45:00 GMT+00:00",
          create: {
            wallet: "seeeok"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.table td {
  vertical-align: middle;
}
.table tbody tr {
  height: 80px;
}
@media only screen and (max-width: 800px) {
  .tr-display .button {
    display: block;
    width: 12em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
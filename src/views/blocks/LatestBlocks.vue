<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th colspan="3">Latest Blocks</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="3">
          <a class="button is-primary is-fullwidth">view all blocks</a>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="item in blocks" :key="item.no">
        <td style="width:86px">
          <p class="image is-48x48">
            <a href>
              <img src="@/assets/img/bk.png" alt />
            </a>
          </p>
        </td>
        <td class="has-text-left">
          <a href class="button is-success is-small-mobile">#{{item.no}}</a>
          <span class="tag is-small ">{{getDiffString(new Date(item.when),new Date())}}</span>
        </td>
        <td>
          <span class="tag is-rounded is-small">transfer:0</span>
          <span class="tag is-rounded is-small">create:0</span>
          <span class="tag is-rounded is-small">update:0</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  data() {
    return {
      blocks: [
        {
          no: 3000005,
          when: "16 July 2019 07:45:00 GMT+00:00",
          bp: "tymaker",
          count: 2
        },
        {
          no: 3000004,
          when: "17 July 2019 08:45:00 GMT+00:00",
          bp: "tymaker",
          count: 2
        },
        {
          no: 3000003,
          when: "17 July 2019 07:45:00 GMT+00:00",
          bp: "tymaker",
          count: 2
        },
        {
          no: 3000002,
          when: "17 July 2019 07:45:00 GMT+00:00",
          bp: "tymaker",
          count: 2
        },
        {
          no: 3000001,
          when: "17 July 2019 07:45:00 GMT+00:00",
          bp: "tymaker",
          count: 2
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="css" scoped>
.table td {
  vertical-align: middle;
}
.tr-display .button {
  display: block;
  width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
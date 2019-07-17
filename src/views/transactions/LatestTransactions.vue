<template>
  <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th colspan="3">Transactions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colspan="3"><a class="button is-link is-fullwidth">view all transactions</a></td>
                </tr>
              </tfoot>
              <tbody>
                <tr >
                  <td style="width:86px">
                    <p class="image is-48x48">
                      <a href="">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="">
                      </a>
                    </p>
                  </td>
                  <td>
                      <span class="tr-display">
                          <a href="" class="button is-info">#95cb0cf46c87d66a413e837e54951c653a0f39e8</a>
                      </span>
                      <span class="tag is-small">at 1 minutes ago</span>
                  </td>
                  <td>
                    <span class="tag is-rounded is-small">transactions:0</span>
                    <span class="tag is-rounded is-small">create:0</span>
                    <span class="tag is-rounded is-small">update:0</span>
                  </td>
                </tr>
              </tbody>
            </table>
</template>

<script>
export default {
    name: "transactions",
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
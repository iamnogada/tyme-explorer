<template>
  <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th colspan="3">Latest Blocks</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colspan="3"><a class="button is-primary is-fullwidth">view all blocks</a></td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td style="width:86px">
                    <p class="image is-48x48">
                      <a href="">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="">
                      </a>
                    </p>
                  </td>
                  <td class="has-text-left">
                    <a href="" class="button is-success is-small-mobile">#30000010</a><br>
                    <span class="tag is-small">at 1 minutes ago</span>
                  </td>
                  <td >
                    tymaker<br>
                    <span class="tag is-small is-rounded">total: 0</span>
                  </td>
                </tr>
              </tbody>
            </table>
</template>

<script>
export default {
    name: "blocks",
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
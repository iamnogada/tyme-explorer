<template>
  <div class="column">
    <div class="columns">
      <div class="column">
        <TymePrice />
        <hr />
      </div>
      <div class="column">
        <LatestBlock />
        <hr />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <TPS />
        <hr />
      </div>
      <div class="column">
        <TransactionInfo />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import TymePrice from './TymePrice.vue'
import LatestBlock from './LatestBlock.vue'
import TPS from './TPS.vue'
import TransactionInfo from './TransactionInfo.vue'
export default {
  components:{
    TymePrice,
    LatestBlock,
    TPS,
    TransactionInfo
  },
};
</script>

<style lang="css" scoped>
hr {
    margin-top: 5px;
    margin-bottom: -10px;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
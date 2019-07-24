<template>
  <div>
    <div class="section mysection">
      <div class="columns is-desktop">
        <Summary />
        <HeroChart />
      </div>
    </div>
    <div class="section mysection">
      <div class="columns is-desktop">
        <div class="column is-half-desktop">
          <LatestBlocks />
        </div>
        <div class="column is-half-desktop">
          <LatestTransactions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from "@/views/summary/Summary.vue";
import HeroChart from "@/views/summary/HeroChart.vue";
import LatestBlocks from "@/views/blocks/LatestBlocks.vue";
import LatestTransactions from "@/views/transactions/LatestTransactions.vue";
export default {
  components: {
    Summary,
    HeroChart,
    LatestBlocks,
    LatestTransactions
  }
};
</script>

<style lang="css" scoped>
.mysection {
  padding: 15px 12px 15px 12px;
}
</style>
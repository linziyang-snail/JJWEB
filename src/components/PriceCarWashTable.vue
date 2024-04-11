<template>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th class="bg-secondary border border-secondary" scope="col">內容 / 項目</th>
              <th scope="col">精緻洗車</th>
              <th scope="col">基礎維護</th>
              <th scope="col">精緻維護</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in services" :key="item.name">
              <th scope="row">{{ item.name }}</th>
              <td v-if="item.basicWash"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
              <td v-if="item.basicMaintenance"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
              <td v-if="item.detailedMaintenance"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { name: '車身高壓沖洗', basicWash: true, basicMaintenance: true, detailedMaintenance: true },
  { name: '車身高壓熱水沖洗', basicWash: true, basicMaintenance: true, detailedMaintenance: true },
  { name: '輪框內外清潔', basicWash: true, basicMaintenance: true, detailedMaintenance: true },
  { name: '門邊門框清潔', basicWash: true, basicMaintenance: true, detailedMaintenance: true },
  { name: '內裝擦拭吸塵', basicWash: false, basicMaintenance: true, detailedMaintenance: true },
  { name: '內裝細節清洗', basicWash: false, basicMaintenance: true, detailedMaintenance: true },
  { name: '內裝物品收納整理', basicWash: false, basicMaintenance: false, detailedMaintenance: true },
  { name: '專用柏油清潔', basicWash: false, basicMaintenance: true, detailedMaintenance: true },
  { name: '專用鐵粉清潔', basicWash: false, basicMaintenance: true, detailedMaintenance: true },
  { name: '專用車身瓷土', basicWash: false, basicMaintenance: true, detailedMaintenance: true },
  { name: '漆面深度清潔', basicWash: false, basicMaintenance: false, detailedMaintenance: true },
  { name: '全車塑料保護', basicWash: false, basicMaintenance: false, detailedMaintenance: true }
]);


</script>

  
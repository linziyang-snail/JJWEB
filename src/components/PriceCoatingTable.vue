<template>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th class="bg-secondary border border-secondary" scope="col">內容 / 項目</th>
              <th scope="col">漆面氧化處理</th>
              <th scope="col">兩年期鍍膜</th>
              <th scope="col">滲透型鍍膜60%自體修復</th>
              <th scope="col">雙劑型漆面高光鍍膜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in services" :key="item.name">
              <th scope="row">{{ item.name }}</th>
              <td v-if="item.coating1"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
              <td v-if="item.coating2"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
              <td v-if="item.coating3"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
              <td v-if="item.coating4"><i class="bi bi-check-circle-fill"></i></td>
              <td v-else></td>
            </tr>

            <tr>
              <th scope="row">保固週期</th>
              <td>{{ warranty.coating1 }}</td>
              <td>{{ warranty.coating2 }}</td>
              <td>{{ warranty.coating3 }}</td>
              <td>{{ warranty.coating4 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { name: '全車高壓熱水沖洗', coating1: true, coating2: true, coating3: true , coating4: true },
  { name: '全車細節刷洗', coating1: false, coating2: true, coating3: true , coating4: true },
  { name: '引擎室清潔', coating1: false, coating2: true, coating3: true , coating4: true },
  { name: '車漆深層清潔', coating1: true, coating2: true, coating3: true , coating4: true },
  { name: '漆面亮度調整', coating1: false, coating2: true, coating3: true , coating4: true },
  { name: '漆面整平', coating1: false, coating2: true, coating3: true , coating4: true },
  { name: '漆面深度整平修復', coating1: false, coating2: false, coating3: true , coating4: true },
  { name: '車內擦拭吸塵', coating1: true, coating2: true, coating3: true , coating4: true },
  { name: '車內細部清潔', coating1: false, coating2: true, coating3: true , coating4: true },
  { name: '雙層鍍膜劑塗層', coating1: false, coating2: false, coating3: false , coating4: true },
  { name: '60%自體修復塗層', coating1: false, coating2: false, coating3: true , coating4: false },
  { name: '車身塑料件維護', coating1: true, coating2: true, coating3: true , coating4: false },
]);


const warranty = ref({
  coating1: '無保固',
  coating2: '24個月',
  coating3: '36個月',
  coating4: '36個月'
});

</script>

  
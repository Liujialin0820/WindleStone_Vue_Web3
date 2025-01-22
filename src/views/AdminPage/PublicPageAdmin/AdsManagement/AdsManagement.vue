<script setup>
import { getads } from "@/apis/adsAPI";
import { onMounted, ref } from "vue";

const ads = ref([]);

onMounted(async () => {
  const result = await getads();
  ads.value = result.results;
});
</script>

<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button style="" type="primary">Add New Ad</el-button>
    </div>
    <el-scrollbar height="78vh">
      <el-table :data="ads" style="height: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="Title"></el-table-column>
        <el-table-column
          prop="description"
          label="Description"
          width="180"
        ></el-table-column>
        <el-table-column label="Image" width="180">
          <template #default="{ row }">
            <img :src="row.image" alt="image" style="width: 100px" />
          </template>
        </el-table-column>
        <el-table-column prop="order" label="Order"></el-table-column>
        <el-table-column prop="link" label="Link" width="130"></el-table-column>
        <!-- edit button -->
        <el-table-column label="Action">
          <template #default="{ row }">
            <el-button type="primary" size="mini">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </el-card>
</template>

<style scoped></style>

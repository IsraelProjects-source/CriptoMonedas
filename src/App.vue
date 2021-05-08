<template>
 
    <px-header/>
    <px-assets-table/>
  
</template>

<script>
import PxHeader from "@/components/PxHeader"
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "App",
  components: {
    PxHeader,
    PxAssetsTable
   },
};
</script>

<style>
#app {
  font-family: sans-seri, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

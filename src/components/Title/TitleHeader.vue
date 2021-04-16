<template>
  <div class="title-container">
        <img :src="require('@/assets/PICTOS/' + picto)" class="float-left img-fluid mr-2" alt="Les fermes Gestel" >
        <h1 class="text-secondary mb-0">{{ title }}<br/>
        <span class="separator-titre float-left"></span></h1>
    </div>
</template>

<script>
export default {
    name: "titleHeader",
    props: {
        title: {
            type: String,
            required: true
        },
        picto: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.title-container {
    padding-bottom: 2rem;
}
</style>
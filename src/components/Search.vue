<template>
    <div class="search">
        <input 
            class="form-control mr-sm-2" 
            type="search" placeholder="Search" aria-label="Search"
            v-model="search">
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: '',
        }
    },
};
</script>

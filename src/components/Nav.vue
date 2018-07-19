<template>
    <div class="nav">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/" @click.native="backHome">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Service points</li>
            </ol>
        </nav>
    </div>
</template>
<script>
export default {
    methods: {
        backHome() {
            this.$emit('onTitle', 'Service Point');
        }
    }
};
</script>
<style scoped>
.breadcrumb {
    background-color: #fff;
}
</style>



<template>
    <Navbar />
        <main>
            <router-view />
        </main>
    <Footer />
</template>

<script>
import Footer from '@/components/frontend/Foot.vue';
import Navbar from '@/components/frontend/Nav.vue';

export default {
    name: 'FrontendLayout',
    components: {
        Navbar, 
        Footer
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
</style>
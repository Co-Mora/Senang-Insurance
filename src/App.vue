<template>
    <div>
       <router-view></router-view>
    </div>
</template>


<script>
    import GetQuote from './components/GetQuote';
    import Summary from './components/Summary';

    export default {
        name: 'App',
        components: {
            GetQuote,
            Summary
        }
    }
</script>

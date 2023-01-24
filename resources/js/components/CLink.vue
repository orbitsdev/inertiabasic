

<template>
    
    <!-- <Link :class="['border  p-4 rounded text-2xl', {'border-b-4 border-blue-400 ': active }]" >Course</Link> -->
    <Link :class=" {'border-b-4 border-blue-400 ': active }" > <slot></slot></Link>

</template>

<script>

import { Link } from '@inertiajs/vue3';
    export default {

        props: {
            active: {
                type: Boolean,
            },
        },

        components: {
            Link,
        },

        
    }
</script>

<style  scoped>

</style>
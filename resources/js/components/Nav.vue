<template>
    <div class="shadow-lg">
        <ul class="flex justify-center ">
            <CLink class="px-4 py-4"  href="/course" :active="$page.component === 'Course' "> Course </CLink>
            <CLink class="px-4 py-4"  href="/" :active="$page.component === 'Welcome' "> Welcome </CLink>
            <CLink class="px-4 py-4"  href="/home" :active="$page.component === 'Home' "> Home </CLink>
        </ul>
        {{ $page.props.user }}
    </div>
</template>

<script>


    export default {

        
    }
</script>

<style  scoped>

</style>
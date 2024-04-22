<!-- Scoped slots
    Niche feature used to pass data from inside the data with the slot to the component where you pass the markup for the data. -->

<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <!-- Remeber :item is shorthand for v-bind:item -->
            <slot :item="goal" another-prop="..."></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                goals: ['Finish course', 'Learn Vue']
            }
        }
    }
</script>
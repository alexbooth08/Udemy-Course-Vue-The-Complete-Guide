<!--
    vue has a special html element <slot> that is useful when you want
    to use a component as a wrapper for other html elements/components,
    for example a card. So, here we just have a div with some styling that 
    can hold other elements/components.

    vue components can also have multiple slots. With multiple slots you need
    to name the slots so vue know which is which (name can be any string). However,
    you can leave one slot unnamed and this will be the default slot.
-->

<template>
    <div>
        <!-- check if a header is passed so that an empty header tag is not rendered -->
        <header v-if="$slots.header">
            <slot name="header">
                <!-- We can add default html inside of slots that will display if nothing is passed into the slot -->
                <!-- It doesn't really make sense to have default html inside of the header for a component like this
                    but we'll leave it as reference/example -->
                <!-- <h2>Default Header Content</h2> -->
            </slot>
        </header>
        <!-- the one unnamed slot becomes the default -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    // $slots is a special vue variable holding the passed slots
    mounted() {
        console.log(this.$slots.header);
    }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>
<template>
  <section>
    <base-card>
    <!-- Note: template is a default html tag that typically does not render anything.
        Vue uses for slots like below, where we have a v-slot attribute followed by 
        a colon and the slot name. -->
      <!-- <template v-slot:header> -->
      <!-- # is shorthand for v-slot: -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- Note: default is a reserved name that targets the default slot. We use it
        here to be explicit about where we want everything to go. -->
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- scoped makes this style only apply to this component -->
<!-- Note: this scoped markup will not apply to markup inside of slots, like v-slot:header.
  Those will use the styling inside of the component it is being slotted into. This is by design. -->
<style scoped> 
</style>
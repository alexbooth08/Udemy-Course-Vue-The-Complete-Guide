<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsButtonCaption }}</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props are properties we pass to components through attributes with custom names
  // Note: properties are immutable, meaning they should not be changed inside the component
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'], // this is most basic way to define props
  // Learn more about props here: https://v3.vuejs.org/guide/component-props.html
  props: {
    // define the props (custom html attributes) this component accepts
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
    // isFavorite: {
    //   type: String,
    //   default: '0', // Note: default can also be a function
    //   validator: function(value) {
    //     return value === '1' || value === '0';
    //   }
    // }
  },
  // define which custom events this component emits
  // this is for documentation
  // can use this basic way to define events in emits, similiar to props
  emits: ['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     // we can add validation for events here
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  computed: {
    detailsButtonCaption() {
      return (this.detailsAreVisible ? 'Hide' : 'Show') + ' Details';
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // we want to change the isFavorite property outside of out component
    // so we use the vue method $emit() to emit an event
    toggleFavorite() {
      // convention is to use kebab-case for event names
      this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>
# Section 19 - The Composition API - Replacing the Options API

### What is the Composition API?  
So far we have used the **Options API**:  
```javascript
{
    data() {
        return {
            name: 'Alex',
        };
    } ,
    methods: { ... }
    , ...
}
```
This approach is fine, and there is nothing wrong with sticking to it.

The compositions API was introduced b/c we can encounter **two main limitations / issues** when building bigger Vue apps:  
1. Code that **belongs together logically** is **split up** across multiple options (data, methods, computed, watchers)  
    - For example we may have a computed variable, data variable and method all logically related, but they are not near each other in the code so this connection is harder to make when reading the vue file. And can also make the code harder to manage / less scalable.  
2. **Re-using logic** across components can be **tricky or cumbersome**  


So the previous example using the Options API become the following using the **Composition API**:
```javascript
{
    setup() {
        import { ref } from 'vue';

        const name = ref('Alex');
        function doSmth() {...};
        return { name, doSmth };
    }
}
```  
### ```[data(), mehtods, computed, watch] -> setup()```

**Note**: There is actually a newer and more concise syntax for setup where we **do not export default** or explicitly define setup() and return an object containing our variables. So, with the \<script> tag the above looks like:
```html
<script>
{
    props: {
        title: String,
        likes: Number
    },
    emits: ['inFocus', 'submit'],
    setup(props) {
        import { ref } from 'vue';

        const name = ref('Alex');
        function doSmth() {...};
        return { name, doSmth };
    }
}
</script>
```  
which becomes
```html
<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    title: String,
    likes: Number
});

const emit = defineEmits(['inFocus', 'submit'])

const name = ref('Alex');
function doSmth() {...};
</script>
```
This tutorial was recorded before this syntax existed, but it is the syntax I will use going forward.  

## Props  & Emits
How to define and use props and emits:
```html
<script setup>
import { ref, defineProps, toRefs } from 'vue';

// Define props and define a reference to the props
const props = defineProps({
    title: String,
    likes: Number
});
// Use toRefs in order to use props as you do variables declared using ref()
const { title, likes } = toRefs(props);

// Define events to emit and a reference to be able to emit events
const emit = defineEmits(['custom-event']);
// Emit custom event with (or without) some value. Can also emit multiple values.
emit('custom-event', likes.value);

</script>
```

## Options API → Composition API  
| Options API | | Composition API |
|:-:|:-:|:-:|
| `data() {...}` | → |  `ref(), reactive()` |
| `methods: { doSmth() {...} }` | → | `function doSmth() { ...}` |
| `computed: { val() { ... } }` | → |  `const val = computed()` |
| `watch {...}` | → |  `watch(source, (newVal, oldVal) => {})` |
| `provide: { ... } / inject: []` | → |  `provide(key, val) / inject(key, val)` |

## Options API → Composition API: Lifecycle  
| Options API | | Composition API |
|:-:|:-:|:-:|
| `beforeCreate, created` | → |  Not Needed (`setup` replaces these hooks) |
| `beforeMount, mounted` | → |  `onBeforeMount, onMounted` |
| `beforeUpdate, updated` | → |  `onBeforeUpdate, onUpdated` |
| `beforeUnmount, unmounted` | → |  `onBeforeUnmount, onUnmounted` |
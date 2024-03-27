<template>
    <section>
        <div>
            <label>Username</label>
            <input
                type="text"
                v-model="username"
                @input="$emit('username-input', username)"
            >
        </div>
        <div>
            <label>Age</label>
            <input
                type="number"
                v-model="age"
                @input="$emit('age-input', age)"
            >
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                age: null
            };
        },
        emits: ['username-input', 'age-input']
    };
</script>
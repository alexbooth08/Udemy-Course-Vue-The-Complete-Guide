<template>
    <!-- .prevent to prevent default html behavior on form submit -->
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
            <label>e-mail</label>
            <input type="email" v-model="enteredEmail"/>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: ['add-contact'],
        data() {
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: '',
            };
        },
        methods: {
            submitData() {
                this.$emit('add-contact', {
                    name: this.enteredName,
                    email: this.enteredEmail,
                    phone: this.enteredPhone
                });
            }
        }
    }
</script>
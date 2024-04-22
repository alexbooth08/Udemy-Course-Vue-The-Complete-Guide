<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <!-- teleport teleports its content to another part in the html markup
            it has one attribute, 'to', that gets set to a css selector to which the content
            should be teleported to.
            here it makes sense to have our error message not deeply nested, but in the root of the app-->
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please enter a goal.</p>
                <button @click="confirmError">Okay</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputIsInvalid = true;
            } 
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

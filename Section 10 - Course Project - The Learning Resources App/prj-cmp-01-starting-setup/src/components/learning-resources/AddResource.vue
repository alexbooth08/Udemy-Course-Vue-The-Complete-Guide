<template>
    <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError()">
        <template #default>
            <p>At least one input value is invalid.</p>
            <p>Please check to make sure no input is empty.</p>
        </template>
        <template #actions>
            <BaseButton @click="confirmError()">Okay</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div>
                <BaseButton type="submit">Add Resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script setup>
import { ref, inject } from 'vue';

const addResource = inject('addResource');

const titleInput = ref(null);
const descInput = ref(null);
const linkInput = ref(null);

const inputIsInvalid = ref(false);
function confirmError() {
    inputIsInvalid.value = false;
}

function submitData() {
    const enteredTitle = titleInput.value.value;
    const enteredDesc = descInput.value.value;
    const enteredLink = linkInput.value.value;

    if (enteredTitle.trim() === ''
    || enteredDesc.trim() === ''
    || enteredLink.trim() === '') {
        inputIsInvalid.value = true;
        return;
    }

    titleInput.value.value = '';
    descInput.value.value = '';
    linkInput.value.value = '';
    addResource({
        title: enteredTitle,
        description: enteredDesc,
        link: enteredLink
    });
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
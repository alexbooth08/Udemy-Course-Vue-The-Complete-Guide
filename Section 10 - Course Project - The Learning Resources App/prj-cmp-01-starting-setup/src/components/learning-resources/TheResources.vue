<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResources')" :mode="storedResButtonMode">Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :mode="addResButtonMode">Add Resource</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="getSelectedTabComponent()"></component>
    </keep-alive>
</template>

<script setup>
import { ref, reactive, provide, computed } from 'vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

const storedResources = reactive([
    {
        id: 'official-guide',
        title: 'Official Guide',
        description: 'The official Vue.js documentation',
        link: 'https://vuejs.org'
    },
    {
        id: 'google',
        title: 'Google',
        description: 'Learn to google...',
        link: 'https://google.com'
    }
]);
provide('resources', storedResources);

const selectedTab = ref('StoredResources');
function setSelectedTab(tab) {
    selectedTab.value = tab;
}

function getSelectedTabComponent() {
    if (selectedTab.value === 'StoredResources') {
        return StoredResources;
    } else if (selectedTab.value === 'AddResource') {
        return AddResource;
    }
}

const storedResButtonMode = computed(() => {
    return selectedTab.value === 'StoredResources' ? null :'flat';
});
const addResButtonMode = computed(() => {
    return selectedTab.value === 'AddResource' ? null :'flat';
});

function addResource(resource) {
    const newResource = resource;
    resource.id = new Date().toISOString();
    storedResources.unshift(newResource);
    selectedTab.value = 'StoredResources';
}
provide('addResource', addResource);

function deleteResource(resourceId) {
    const resourceIndex = storedResources.findIndex(resource => resource.id === resourceId);
    storedResources.splice(resourceIndex, 1);
}
provide('deleteResource', deleteResource);
</script>
<!-- Convention is to your name main vue file "App.vue", but you can name it what you want -->

<!-- .vue tag to define template -->
<template>
    <section>
        <header><h1>My Freinds</h1></header>
        <ul>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<!-- .vue tag for js code -->
<!-- this is where we define the config object to pass to Vue.createApp() -->
<script>
import FriendContact from './components/FriendContact.vue'
// 'export default' is js to tell js this is the default object to be exported
export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 1,
                    name: 'Jerry Seinfeld',
                    phone: '(212) 555-1234',
                    email: 'jerry.seinfeld@mail.com'
                },
                {
                    id: 2,
                    name: 'George Constanza',
                    phone: '(212) 555-3456',
                    email: 'art.vandelay@mail.com'
                }
            ]
        }
    }
}
</script>
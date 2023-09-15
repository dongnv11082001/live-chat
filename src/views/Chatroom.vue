<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
  <div class="error">{{ error }}</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { currentUser } = getUser();
    const router = useRouter();
    const { error, documents } = getCollection('messages');

    watchEffect(() => {
      if (!currentUser.value) {
        router.push({ name: 'Welcome' });
      }
    });

    return { currentUser, documents, error };
  }
};
</script>

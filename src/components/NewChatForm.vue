<template>
  <form>
    <textarea placeholder="Type a message and hit enter to send..." v-model="message"
      @keypress.enter.prevent="handleSubmit"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { db } from '@/firebase/config';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

export default {
  setup() {
    const message = ref('');
    const { currentUser } = getUser();

    const handleSubmit = async () => {
      const chat = {
        name: currentUser.value.displayName,
        message: message.value,
        createdAt: Timestamp.fromDate(new Date())
      };
      await addDoc(collection(db, 'messages'), chat);
      message.value = '';
    };

    return { message, handleSubmit };
  }
};

</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>

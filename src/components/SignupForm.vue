<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Username" v-model="userName" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup() {
    const { signup } = useSignup();
    // refs
    const userName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(userName.value, email.value, password.value);
      console.log('user signed up');
    };

    return {
      userName,
      email,
      password,
      handleSubmit
    };
  }
};
</script>

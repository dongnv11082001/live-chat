<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Username" v-model="userName" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    // refs
    const userName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(userName.value, email.value, password.value);
      if (!error.value) {
        context.emit('signup');
      }
    };

    return {
      userName,
      email,
      password,
      handleSubmit,
      error
    };
  }
};
</script>

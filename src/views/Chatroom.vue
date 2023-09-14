<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar },
  setup() {
    const { currentUser } = getUser();
    const router = useRouter();

    watchEffect(() => {
      if (!currentUser.value) {
        router.push({ name: 'Welcome' });
      }
    });
  }
};
</script>

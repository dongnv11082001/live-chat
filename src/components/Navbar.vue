<template>
  <nav v-if="currentUser">
    <div>
      <p>Hey there {{ currentUser.displayName }} </p>
      <p class="email">Currently logged in as {{ currentUser.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';

export default {
  setup() {
    const { logout } = useLogout();
    const { currentUser } = getUser();

    const handleClick = async () => {
      await logout();
    };

    return {
      handleClick, currentUser
    };
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>

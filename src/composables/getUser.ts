import { auth } from '@/firebase/config';
import { ref } from 'vue';

const currentUser = ref(auth.currentUser);

auth.onAuthStateChanged((user) => {
  currentUser.value = user;
});

const getUser = () => {
  return { currentUser };
};

export default getUser;

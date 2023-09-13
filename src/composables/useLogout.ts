import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err: any) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;

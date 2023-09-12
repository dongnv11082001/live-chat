import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '@/firebase/config';

const error = ref<string | null>(null);

const login = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;
    return response;
  } catch (err: any) {
    error.value = 'Incorrect email or password';
  }
};

const useLogin = () => {
  return {
    error,
    login
  };
};

export default useLogin;

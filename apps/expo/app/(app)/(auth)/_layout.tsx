import { useAuth } from 'app/context';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}

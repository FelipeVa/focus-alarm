import { Stack } from 'expo-router';
import { YStack, Text } from '@my/ui';

export default function StatsPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Reminders',
        }}
      />
      <YStack>
        <Text>Reminders</Text>
      </YStack>
    </>
  );
}

import { Stack } from 'expo-router';
import { YStack, Text, Avatar, H2, Separator, YGroup, ListItem, Button } from '@my/ui';
import { ScreenWrapper } from 'app/components';
import { Star, ChevronRight, LogOut, UserCog, Cog, Blocks } from '@tamagui/lucide-icons';
import { useAuth } from 'app/context';

const items = [
  {
    title: 'Profile',
    description: 'Modify everything related to your profile.',
    icon: <UserCog size={16} />,
  },
  {
    title: 'Preferences',
    description: 'Modify your preferences.',
    icon: <Cog size={16} />,
  },
  {
    title: 'Integrations',
    description: 'Connect different platforms.',
    icon: <Blocks size={16} />,
  },
  {
    title: 'Rate us!',
    description: 'Enjoying the app?',
    icon: <Star size={16} />,
  },
];

export default function StatsPage() {
  const auth = useAuth();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScreenWrapper gap="$4" pb="$4" px="$3" justifyContent="space-between">
        <YStack gap="$4" pt="$4">
          <YStack justifyContent="center" alignItems="center" gap="$2">
            <Avatar circular size="$11">
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
              <Avatar.Fallback backgroundColor="$color2" />
            </Avatar>
            <H2>John Doe</H2>
          </YStack>

          <YGroup alignSelf="center" bordered size="$5" separator={<Separator />}>
            {items.map((item, index) => (
              <YGroup.Item key={index}>
                <ListItem
                  hoverTheme
                  pressTheme
                  title={item.title}
                  subTitle={item.description}
                  icon={item.icon}
                  iconAfter={ChevronRight}
                />
              </YGroup.Item>
            ))}
          </YGroup>
        </YStack>
        <Button theme="red" icon={LogOut} onPress={auth.signOut}>
          Sign out
        </Button>
      </ScreenWrapper>
    </>
  );
}

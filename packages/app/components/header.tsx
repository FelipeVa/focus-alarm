import { Button, H4, XStack } from '@my/ui';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { useSafeArea } from '../provider/safe-area/use-safe-area';

export type HeaderProps = NativeStackHeaderProps & {
  right?: React.ReactNode;
};

export function Header({ right, ...props }: HeaderProps) {
  const { top } = useSafeArea();

  return (
    <XStack
      backgroundColor="$color2"
      pt={top}
      pb="$2"
      alignItems="center"
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap="$1">
        <Button
          px="$2"
          py="$0"
          icon={<ChevronLeft size="$1" />}
          pressStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          onPress={() => props.navigation.goBack()}
          chromeless
        />
        <H4>{props.options.title}</H4>
      </XStack>
      {right}
    </XStack>
  );
}

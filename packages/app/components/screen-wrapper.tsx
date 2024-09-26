import { YStack, YStackProps } from '@my/ui';
import { useSafeArea } from '../provider/safe-area/use-safe-area';

export function ScreenWrapper({ children, ...restOfProps }: YStackProps) {
  const { top, bottom } = useSafeArea();

  return (
    <YStack pt={top} pb={bottom} backgroundColor="$background" h="100%" {...restOfProps}>
      {children}
    </YStack>
  );
}

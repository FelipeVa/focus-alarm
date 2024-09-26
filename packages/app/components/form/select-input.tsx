import {
  Adapt,
  FontSizeTokens,
  getFontSize,
  Select,
  SelectProps,
  Sheet,
  TamaguiElement,
  YStack,
} from '@my/ui';
import { forwardRef } from 'react';
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { LinearGradient } from 'tamagui/linear-gradient';

type SelectInputProps = SelectProps & {
  placeholder?: string;
  options: { label: string; value: string }[];
};

const SelectInput = forwardRef<TamaguiElement, SelectInputProps>(
  ({ placeholder, options, ...props }, ref) => {
    return (
      <Select
        value={props.value}
        onValueChange={props.onValueChange}
        disablePreventBodyScroll
        id={props.name}
        {...props}
      >
        <Select.Trigger iconAfter={ChevronDown} ref={ref}>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            native={!!props.native}
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: 'spring',
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', 'transparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              <Select.Label>{placeholder || 'Select an option'}</Select.Label>
              {options.map((option, index) => {
                return (
                  <Select.Item index={index} key={option.value} value={option.value}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
            {props.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none"
              >
                <ChevronDown size={getFontSize((props.size as FontSizeTokens) ?? '$true')} />
              </YStack>
            )}
          </Select.Viewport>

          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['transparent', '$background']}
              borderRadius="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    );
  }
);

export { SelectInput };

import { useState } from 'react';
import { FlatList } from 'react-native';
import { Button, getTokens, H4, Separator, Text, Theme, XStack, YStack } from '@my/ui';
import { ScreenWrapper } from 'app/components';
import { Link, Stack } from 'expo-router';
import {
  ChevronRight,
  Clock,
  Filter,
  List,
  RefreshCw,
  RefreshCwOff,
  Search,
  Timer,
  Plus,
} from '@tamagui/lucide-icons';

type Interval = {
  name: string;
  cycles?: number;
  tags?: string[];
  focusTime: number;
  breakTime: number;
  startTime?: string;
  endTime?: string;
};

type FilterSelectorProps = {
  currentFilter: string;
  onChange: (filter: string) => void;
};

const filters = [
  {
    name: 'all',
    label: 'All',
    icon: <List size={16} />,
  },
  {
    name: 'cycle',
    label: 'Cycle',
    icon: <RefreshCw size={16} />,
  },
  {
    name: 'non-cycle',
    label: 'Non Cycle',
    icon: <RefreshCwOff size={16} />,
  },
];

const intervals: Interval[] = [
  {
    name: 'Workout',
    cycles: 4,
    tags: ['gym', 'workout'],
    focusTime: 15,
    breakTime: 5,
    startTime: '15:00',
    endTime: '18:00',
  },
  {
    name: 'Study Session',
    cycles: 4,
    tags: ['college', 'ux-class'],
    focusTime: 35,
    breakTime: 10,
  },
  {
    name: 'Learn coding concept',
    cycles: 2,
    tags: ['personal-growth', 'career'],
    focusTime: 35,
    breakTime: 10,
  },
  {
    name: 'Cook meat',
    tags: ['cooking'],
    focusTime: 45,
    breakTime: 5,
  },
];

function ScreenHeader() {
  return (
    <XStack px="$3" justifyContent="space-between" alignItems="center">
      <H4>Intervals</H4>
      <XStack alignItems="center" gap="$2">
        <Button icon={<Filter size={16} />} size="$3" borderRadius="$10" circular />
        <Button icon={<Search size={16} />} size="$3" borderRadius="$10" circular />
      </XStack>
    </XStack>
  );
}

function IntervalItem({ item }: { item: Interval }) {
  return (
    <XStack
      py="$5"
      px="$3"
      pressStyle={{
        backgroundColor: '$backgroundPress',
      }}
      gap="$2"
      justifyContent="space-between"
      alignItems="center"
    >
      <YStack gap="$2">
        <XStack gap="$2">
          <Text fontSize={16}>{item.name}</Text>
          {item.cycles ? (
            <XStack
              backgroundColor="$color10"
              borderRadius="$10"
              px="$2"
              alignItems="center"
              gap="$1"
            >
              <Theme inverse>
                <Timer size={10} />
                <Text fontSize={10}>Cycle</Text>
              </Theme>
            </XStack>
          ) : null}
        </XStack>
        <XStack gap="$2">
          <XStack gap="$1" alignItems="center">
            <Timer size={12} />
            <Text fontSize={12}>
              {item.focusTime} min - {item.breakTime} min
            </Text>
          </XStack>
          {item.cycles ? (
            <>
              <Separator alignSelf="stretch" vertical />
              <XStack gap="$1" alignItems="center">
                <RefreshCw size={12} />
                <Text fontSize={12}>{item.cycles}</Text>
              </XStack>
            </>
          ) : null}
          {item.startTime && item.endTime ? (
            <>
              <Separator alignSelf="stretch" vertical />
              <XStack gap="$1" alignItems="center">
                <Clock size={12} />
                <Text fontSize={12}>
                  {item.startTime} - {item.endTime}
                </Text>
              </XStack>
            </>
          ) : null}
        </XStack>
        <XStack gap="$2" alignItems="center">
          {item.tags?.map((tag, index) => (
            <XStack
              key={index}
              backgroundColor="$color4"
              borderRadius="$10"
              px="$2"
              alignItems="center"
              py="$1"
              gap="$1"
            >
              <Text fontSize={10}>#{tag}</Text>
            </XStack>
          ))}
        </XStack>
      </YStack>
      <ChevronRight color="$color" />
    </XStack>
  );
}

function FilterSelector({ currentFilter, onChange }: FilterSelectorProps) {
  return (
    <XStack gap="$2">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          backgroundColor={filter.name === currentFilter ? '$color10' : undefined}
          borderWidth={1}
          variant={filter.name !== currentFilter ? 'outlined' : undefined}
          color={filter.name === currentFilter ? '$color1' : undefined}
          size="$2"
          fontSize={13}
          borderRadius="$10"
          px="$2.5"
          icon={filter.icon}
          onPress={() => onChange(filter.name)}
          hoverTheme={false}
          focusTheme={false}
          pressTheme={false}
        >
          {filter.label}
        </Button>
      ))}
    </XStack>
  );
}

export default function Screen() {
  const tokens = getTokens({ prefixed: true });
  const [currentFilter, setCurrentFilter] = useState('all');
  const filteredIntervals = intervals.filter((interval) => {
    if (currentFilter === 'non-cycle') {
      return !interval.cycles;
    }

    if (currentFilter === 'cycle') {
      return !!interval.cycles;
    }

    return true;
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />

      <ScreenWrapper gap="$2" pb="$0">
        <ScreenHeader />
        <FlatList
          data={filteredIntervals}
          renderItem={({ item }) => <IntervalItem item={item} />}
          ListHeaderComponent={() => (
            <FilterSelector currentFilter={currentFilter} onChange={setCurrentFilter} />
          )}
          ListHeaderComponentStyle={{
            paddingBottom: tokens.space['$2']?.val,
            paddingHorizontal: tokens.space['$3']?.val,
          }}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Link href="/intervals/create" asChild>
          <Button
            backgroundColor="$color10"
            icon={
              <Theme inverse>
                <Plus />
              </Theme>
            }
            position="absolute"
            right={20}
            bottom={20}
            size="$5"
            circular
          />
        </Link>
      </ScreenWrapper>
    </>
  );
}

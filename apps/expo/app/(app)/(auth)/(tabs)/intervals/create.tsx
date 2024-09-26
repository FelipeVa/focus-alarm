import {
  Button,
  Form,
  H4,
  Input,
  Label,
  ScrollView,
  Switch,
  Text,
  ToggleGroup,
  XStack,
  YStack,
} from '@my/ui';
import { Stack } from 'expo-router';
import { Header } from 'app/components';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { minutes, times, weekdays } from 'app/contants';
import { SelectInput } from 'app/components/form';

const createIntervalSchema = z.object({
  name: z.string().min(2),
  tags: z.array(z.string()),
  focusTime: z.string().min(1),
  breakTime: z.string().min(1),
  isCycle: z.boolean().optional(),
  cycles: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  schedule: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof createIntervalSchema>;

const defaultValues: FormValues = {
  name: '',
  tags: [],
  focusTime: '1',
  breakTime: '1',
  isCycle: false,
  cycles: '1',
  startTime: '',
  endTime: '',
  schedule: [],
};

export default function CreateIntervalScreen() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(createIntervalSchema),
  });

  const isCycle = watch('isCycle');

  const onSubmit = () => {};

  return (
    <>
      <Stack.Screen
        options={{
          title: 'New Interval',
          header: (props) => (
            <Header
              {...props}
              right={
                <XStack>
                  <Button
                    borderWidth={0}
                    pressStyle={{
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                    }}
                    chromeless
                  >
                    Save
                  </Button>
                </XStack>
              }
            />
          ),
        }}
      />

      <ScrollView p="$3">
        <YStack gap="$4" justifyContent="center" alignItems="center">
          <Form w="100%" gap="$2" onSubmit={handleSubmit(onSubmit)}>
            <YStack>
              <Label htmlFor="name">Activity</Label>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <Input {...field} id="name" onChangeText={onChange} />
                )}
              />
              {errors.name && <Text color="$red11">{errors.name.message}</Text>}
            </YStack>
            <YStack>
              <Label htmlFor="tags">Tags</Label>
              <Controller
                name="tags"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Input
                    {...field}
                    id="tags"
                    value={value.join(',')}
                    onChangeText={(text) => onChange(text.split(','))}
                  />
                )}
              />
              {errors.name && <Text color="$red11">{errors.name.message}</Text>}
            </YStack>
            <YStack>
              <Label htmlFor="focusTime">Focus Time</Label>
              <Controller
                name="focusTime"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <SelectInput {...field} onValueChange={onChange} options={minutes} />
                )}
              />
              {errors.focusTime && <Text color="$red11">{errors.focusTime.message}</Text>}
            </YStack>
            <YStack>
              <Label htmlFor="breakTime">Break Time</Label>
              <Controller
                name="breakTime"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <SelectInput {...field} onValueChange={onChange} options={minutes} />
                )}
              />
              {errors.breakTime && <Text color="$red11">{errors.breakTime.message}</Text>}
            </YStack>
            <YStack>
              <XStack alignItems="center" gap="$4">
                <Label paddingRight="$0" minWidth={40} justifyContent="flex-end" htmlFor="isCycle">
                  Is a cycle
                </Label>

                <Controller
                  name="isCycle"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <Switch
                      {...field}
                      id="isCycle"
                      checked={value}
                      onCheckedChange={onChange}
                      size="$2"
                    >
                      <Switch.Thumb animation="quick" />
                    </Switch>
                  )}
                />
              </XStack>
              {isCycle ? (
                <YStack>
                  <Label htmlFor="cycles">Number of cycles</Label>
                  <Controller
                    name="cycles"
                    control={control}
                    render={({ field: { onChange, ...field } }) => (
                      <SelectInput {...field} onValueChange={onChange} options={minutes} />
                    )}
                  />
                  {errors.cycles && <Text color="$red11">{errors.cycles.message}</Text>}
                </YStack>
              ) : null}
            </YStack>
            <YStack gap="$2">
              <H4>Schedule</H4>
              <Controller
                name="schedule"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  // @ts-ignore
                  <ToggleGroup
                    {...field}
                    type="multiple"
                    orientation="horizontal"
                    value={value}
                    onValueChange={onChange}
                  >
                    {weekdays.map((day) => (
                      <ToggleGroup.Item key={day} value={day}>
                        <Text>{day[0].toUpperCase()}</Text>
                      </ToggleGroup.Item>
                    ))}
                  </ToggleGroup>
                )}
              />
              {errors.schedule && <Text color="$red11">{errors.schedule.message}</Text>}
            </YStack>
            <XStack gap="$4">
              <YStack flexGrow={1}>
                <Label htmlFor="startTime">From</Label>
                <Controller
                  name="startTime"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <SelectInput {...field} onValueChange={onChange} options={times} />
                  )}
                />
                {errors.cycles && <Text color="$red11">{errors.cycles.message}</Text>}
              </YStack>

              <YStack flexGrow={1}>
                <Label htmlFor="endTime">To</Label>
                <Controller
                  name="endTime"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <SelectInput {...field} onValueChange={onChange} options={times} />
                  )}
                />
                {errors.cycles && <Text color="$red11">{errors.cycles.message}</Text>}
              </YStack>
            </XStack>
          </Form>
        </YStack>
      </ScrollView>
    </>
  );
}

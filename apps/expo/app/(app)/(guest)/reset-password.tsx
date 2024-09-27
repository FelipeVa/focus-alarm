import { Button, Form, H3, Input, SizableText, Spinner, Text, YStack } from '@my/ui';
import { Link, Stack } from 'expo-router';
import { Header } from 'app/components';
import { useSafeArea } from 'app/provider/safe-area/use-safe-area';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const resetPasswordSchema = z.object({
  email: z.string().email(),
});

type FormValues = z.infer<typeof resetPasswordSchema>;

const defaultValues: FormValues = {
  email: '',
};

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { bottom } = useSafeArea();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = () => {};

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Reset Password',
          header: (props) => <Header {...props} />,
        }}
      />

      <Form
        pb={bottom}
        backgroundColor="$background"
        h="100%"
        justifyContent="space-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <YStack p="$3" gap="$5">
          <YStack>
            <H3>Reset your password</H3>
            <SizableText fontSize={16} lineHeight="$1">
              Type in your email and we’ll send you a link to reset your password.
            </SizableText>
          </YStack>

          <YStack gap="$4" justifyContent="center" alignItems="center">
            <YStack w="100%" gap="$4">
              <YStack>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <Input
                      {...field}
                      onChangeText={onChange}
                      placeholder="Email address"
                      keyboardType="email-address"
                      autoComplete="email"
                      autoCapitalize="none"
                    />
                  )}
                />
                {errors.email && <Text color="$red11">{errors.email.message}</Text>}
              </YStack>
            </YStack>
          </YStack>
        </YStack>

        <YStack p="$3" alignItems="center">
          <YStack rowGap="$2" w="100%" alignItems="center">
            <Text color="$color12" fontSize={13}>
              Done resetting?{' '}
              <Link href="/sign-in" asChild>
                <Text fontWeight="bold">Sign in</Text>
              </Link>
            </Text>
            <Form.Trigger disabled={isLoading} asChild>
              <Button icon={isLoading ? <Spinner /> : undefined} w="100%" borderRadius="$10">
                {isLoading ? 'Sending link...' : 'Send link'}
              </Button>
            </Form.Trigger>
          </YStack>
          <SizableText fontSize={10}>Focus Alarm</SizableText>
        </YStack>
      </Form>
    </>
  );
}

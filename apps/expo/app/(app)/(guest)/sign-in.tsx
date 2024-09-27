import { Button, Form, H1, H3, Input, SizableText, Spinner, Text, YStack } from '@my/ui';
import { Link, Stack } from 'expo-router';
import { useAuth } from 'app/context';
import { ScreenWrapper } from 'app/components';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof signInSchema>;

const defaultValues: FormValues = {
  email: '',
  password: '',
};

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });
  const auth = useAuth();

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      auth.signIn();
    }, 500);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />
      <ScreenWrapper justifyContent="space-between" h="100%">
        <YStack>
          <YStack backgroundColor="$color12" h="$13" justifyContent="center" alignItems="center">
            <H1 color="$color1">Focus Alarm</H1>
          </YStack>
          <YStack p="$3" gap="$5">
            <YStack>
              <H3>Welcome back!</H3>
              <SizableText fontSize={16}>Sign in into your account</SizableText>
            </YStack>

            <YStack gap="$4" justifyContent="center" alignItems="center">
              <Form w="100%" gap="$4" onSubmit={handleSubmit(onSubmit)}>
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
                <YStack>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, ...field } }) => (
                      <Input
                        {...field}
                        onChangeText={onChange}
                        placeholder="Password"
                        secureTextEntry
                      />
                    )}
                  />
                  {errors.password && <Text color="$red11">{errors.password.message}</Text>}
                </YStack>
                <Form.Trigger disabled={isLoading} asChild>
                  <Button icon={isLoading ? <Spinner /> : undefined}>
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </Form.Trigger>
              </Form>

              <Link href="/reset-password" asChild>
                <Text color="$color12" fontSize={13}>
                  Forgot password?
                </Text>
              </Link>
            </YStack>
          </YStack>
        </YStack>
        <YStack p="$3" alignItems="center">
          <Link href="/sign-up" asChild>
            <Button variant="outlined" borderRadius="$10" w="100%">
              Create new account
            </Button>
          </Link>
          <SizableText fontSize={10}>Focus Alarm</SizableText>
        </YStack>
      </ScreenWrapper>
    </>
  );
}

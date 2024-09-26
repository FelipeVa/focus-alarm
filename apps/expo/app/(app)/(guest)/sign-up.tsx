import { Button, Form, H3, Input, SizableText, Spinner, Text, YStack } from '@my/ui';
import { Link, Stack } from 'expo-router';
import { useSafeArea } from 'app/provider/safe-area/use-safe-area';
import { Header } from 'app/components';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useAuth } from 'app/context';

const signUpSchema = z
  .object({
    fullName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
      });
    }
  });

type FormValues = z.infer<typeof signUpSchema>;

const defaultValues: FormValues = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { bottom } = useSafeArea();
  const auth = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });
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
          title: 'Sign Up',
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
            <H3>Get started</H3>
            <SizableText fontSize={16}>Create new account</SizableText>
          </YStack>
          <YStack gap="$4" justifyContent="center" alignItems="center">
            <YStack w="100%" gap="$4">
              <YStack>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <Input
                      {...field}
                      onChangeText={onChange}
                      placeholder="Full Name"
                      autoComplete="name"
                    />
                  )}
                />
                {errors.fullName && <Text color="$red11">{errors.fullName.message}</Text>}
              </YStack>
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

              <YStack>
                <Controller
                  name="passwordConfirmation"
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <Input
                      {...field}
                      onChangeText={onChange}
                      placeholder="Confirm password"
                      secureTextEntry
                    />
                  )}
                />
                {errors.passwordConfirmation && (
                  <Text color="$red11">{errors.passwordConfirmation.message}</Text>
                )}
              </YStack>
            </YStack>

            <Text color="$color12" fontSize={13}>
              Already signed up?{' '}
              <Link href="/sign-in" asChild>
                <Text fontWeight="bold">Sign in</Text>
              </Link>
            </Text>
          </YStack>
        </YStack>

        <YStack p="$3" alignItems="center">
          <Form.Trigger disabled={isLoading} asChild>
            <Button icon={isLoading ? <Spinner /> : undefined} w="100%" borderRadius="$10">
              {isLoading ? 'Signing up...' : 'Sign up'}
            </Button>
          </Form.Trigger>
          <SizableText fontSize={10}>Focus Alarm</SizableText>
        </YStack>
      </Form>
    </>
  );
}

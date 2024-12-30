'use client';
import { LoginForm } from '@/components/Company/Auth/loginForm';
import { SignupForm } from '@/components/Company/Auth/signupForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { authConfig } from '@/config/auth';

export const AuthForm = () => {
  return (
    <>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-blue-200">
          <TabsTrigger value="login" className="font-semibold">
            {authConfig.tab.login}
          </TabsTrigger>
          <TabsTrigger value="signup" className="font-semibold">
            {authConfig.tab.signup}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>{authConfig.login.title}</CardTitle>
              <CardDescription>{authConfig.login.description}</CardDescription>
            </CardHeader>
            <LoginForm />
            <CardContent></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>{authConfig.signup.title}</CardTitle>
              <CardDescription>{authConfig.signup.description}</CardDescription>
            </CardHeader>
            <SignupForm />
            <CardContent></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

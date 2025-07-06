
import { AuthForm } from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background dark:bg-sidebar">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">ACCIO AI AGENT</h1>
        <p className="text-muted-foreground">Sign in to get started</p>
      </div>
      <AuthForm />
    </div>
  );
};

export default Login;

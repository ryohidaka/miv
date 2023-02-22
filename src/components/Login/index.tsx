import { LoginForm } from "./LoginForm";
import { Tour } from "./Tour";

/**
 * ログイン
 * @returns
 */
export const LoginContent = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-1 text-black shadow dark:text-white md:grid-cols-2">
      {/* ログインフォーム */}
      <LoginForm />

      {/* 新規ユーザ案内 */}
      <Tour />
    </div>
  );
};

import { deserializeUser } from '@/server/auth-middleware';
import { inferAsyncReturnType } from '@trpc/server';

export const createContext = async () => deserializeUser();

export type Context = inferAsyncReturnType<typeof createContext>;

// export type Context = {
//   user: typeof createContext extends () => Promise<infer U> ? U : never;
// };

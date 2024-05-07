import {
  createUserSchema,
  CreateUserInput,
  loginUserSchema,
  LoginUserInput,
} from '@/lib/user-schema';
import {
  loginHandler,
  logoutHandler,
  registerHandler,
} from './auth-controller';
import { protectedProcedure, pubicProcedure, t } from '@/utils/trpc-server';

const authRouter = t.router({
  registerUser: pubicProcedure
    .input(createUserSchema)
    .mutation(({ input }: { input: CreateUserInput }) =>
      registerHandler({ input })
    ),
  loginUser: pubicProcedure
    .input(loginUserSchema)
    .mutation(({ input }: { input: LoginUserInput }) =>
      loginHandler({ input })
    ),
  logoutUser: protectedProcedure.mutation(() => logoutHandler()),
});

export default authRouter;

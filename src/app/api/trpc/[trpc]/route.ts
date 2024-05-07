import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from '../trpc-router';
import { createContext } from '@/utils/trpc-context';

const handler = (req: Request) => {
  console.log(`incoming request ${req.url}`);
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext,
  });
};

export { handler as GET, handler as POST };

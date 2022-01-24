import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { Provider };

import { useQuery } from 'react-query';
import { api } from 'services/api';
import { UserApiResponse } from './types';

const getUser = async () => {
  const { data } = await api.get<UserApiResponse>('ramonxm');

  return data;
};

const useFetchUser = () => {
  return useQuery('user', getUser);
};

export { useFetchUser };

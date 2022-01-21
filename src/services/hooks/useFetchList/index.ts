import { useQuery } from 'react-query';
import { api } from 'services/api';
import { ListResponse } from './types';

const getListItems = async () => {
  const { data } = await api.get<ListResponse>('/list');
  return data;
};

const useFetchList = () => {
  return useQuery('list', getListItems, {
    refetchIntervalInBackground: false
  });
};

export { useFetchList };

import { useFetchList } from 'services/hooks/useFetchList';
import { useListStore } from 'store/useList';

export default function Main() {
  const { list, addListItems, clearList } = useListStore();
  const { data, error, isLoading } = useFetchList();

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Erro..</div>;

  return (
    <div>
      {list.map((item) => (
        <div key={Math.random()}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <address>
            {`${item.address} - ${item.latitude.toFixed(
              2
            )} - ${item.longitude.toFixed(2)}
            `}
          </address>
        </div>
      ))}
      <button type="button" onClick={() => addListItems(data)}>
        Adicionar item a lista
      </button>
      <button type="button" onClick={clearList}>
        Limpar lista
      </button>
    </div>
  );
}

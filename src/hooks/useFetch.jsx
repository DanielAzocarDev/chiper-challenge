import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch = (categorie = 'new') => {

  const [refreshing, setRefreshing] = useState(false);

  const [list, setList] = useState({});
  const [error, setError] = useState();

  const getList = async () => {
    try {
      const { data } = await axios.get(`https://api.reddit.com/r/pics/${categorie}.json`);

      setList(data);
      setRefreshing(false)
    } catch (error) {
      setError(error);
      setRefreshing(false)
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    getList();
  }, []);

  useEffect(() => {
    getList();
  }, []);
  return { onRefresh, list, refreshing, error }
}

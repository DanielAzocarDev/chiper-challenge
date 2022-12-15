import React from 'react'
import { RefreshControl, ScrollView, Text } from 'react-native'

import { PostItem } from '../../components/postItem/PostItem';
import { useFetch } from '../../hooks/useFetch';

export const TabLayout = ({ navigation, categorie }) => {

  const { onRefresh, list, refreshing } = useFetch(categorie)

  // const [refreshing, setRefreshing] = useState(false);

  // const [list, setList] = useState({});
  // const [error, setError] = useState();

  // const getList = async () => {
  //   try {
  //     const { data } = await axios.get('https://api.reddit.com/r/pics/new.json');

  //     setList(data);
  //     setRefreshing(false)
  //   } catch (error) {
  //     setError(error);
  //     setRefreshing(false)
  //   }
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);

  //   getList();
  // }, []);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing}
      onRefresh={onRefresh} />} >
      {
        list.data ? list.data.children.map(post => <PostItem data={post} navigation={navigation} key={post.data.id} />) : <Text>No posts</Text>
      }
    </ScrollView>
  )
}

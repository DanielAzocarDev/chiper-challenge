import React, { useCallback, useEffect, useState } from 'react'
import { Image, RefreshControl, ScrollView, Text, View } from 'react-native'


import axios from 'axios';
import { PostItem } from '../../components/postItem/PostItem';

export const NewScreen = () => {

  const [refreshing, setRefreshing] = useState(false);

  const [list, setList] = useState({});
  const [error, setError] = useState();

  const getList = async () => {
    try {
      const { data } = await axios.get('https://api.reddit.com/r/pics/new.json');

      setList(data);
      setRefreshing(false)
    } catch (error) {
      setError(error);
      setRefreshing(false)
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    getList();
  }, []);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing}
      onRefresh={onRefresh} />} >
      {
        list.data ? list.data.children.map(post => <PostItem data={post} key={post.data.id} />) : <Text>No posts</Text>
      }
    </ScrollView>
  )
}

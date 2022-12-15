import React from 'react'
import { RefreshControl, ScrollView, Text } from 'react-native'

import { PostItem } from '../../components/postItem/PostItem';
import { useFetch } from '../../hooks/useFetch';

export const TabLayout = ({ navigation, categorie }) => {

  const { onRefresh, list, refreshing } = useFetch(categorie)

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing}
      onRefresh={onRefresh} />} >
      {
        list.data ? list.data.children.map(post => <PostItem data={post} navigation={navigation} key={post.data.id} />) : <Text>No posts</Text>
      }
    </ScrollView>
  )
}

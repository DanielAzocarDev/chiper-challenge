import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import moment from 'moment';

export const PostItem = ({ data, navigation }) => {

  const { data: item } = data

  const date = new Date(item.created_utc)

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Details', item)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.post}>
        <Text style={styles.date}>{moment(date).fromNow()}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.metrics}>
          <Text style={styles.text}>{item.author_fullname}</Text>
          <Text style={styles.text}>Score: {item.score}</Text>
          <Text style={styles.text}>{item.num_comments} comments</Text>
        </View>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  thumbnail: { width: 100, height: 100, },
  post: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10
  },
  date: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '700',
    color: 'grey'
  },
  title: {
    fontWeight: '900'
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: { fontSize: 10 }

})
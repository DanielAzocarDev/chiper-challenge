import React, { useEffect } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview';

export const DetailsScreen = ({ route, navigation }) => {

  const {
    params: { title, url }
  } = route
  useEffect(() => {
    navigation.setOptions({
      title,
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  )
}

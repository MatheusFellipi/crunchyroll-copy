import { useLocalSearchParams } from 'expo-router';
import { View } from 'native-base';
import { Text } from 'react-native';

export default function Page() {
  const { slug } = useLocalSearchParams();

  return (
    <View bgColor={"white"}>
      <Text>Blog post: {slug}</Text>
    </View>
  )
}
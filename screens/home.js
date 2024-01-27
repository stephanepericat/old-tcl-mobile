import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>Welcome to thatcovid.life</Text>
      {/* <Button title="Press Me"></Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f70',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
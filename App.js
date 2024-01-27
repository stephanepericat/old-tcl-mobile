// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from './assets/tcl.png'
import Home from './screens/home'

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 40 }}
      source={Logo}
    />
  );
}

export default function App() {
  // const onMenuClick = () => {
  //   console.log('emnu click')
  // }

  return (
    // <View style={styles.container}>
    //   <Text>thatcovid.life</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // title: 'thatcovid.life',
            // headerRight: () => (
            //   <Ionicons.Button
            //     backgroundColor='transparent'
            //     iconStyle={{ color: '#000', marginRight: 0 }}
            //     name="reorder-four-outline"
            //     size={28}
            //     onPress={onMenuClick}
            //   />
            // ),
            headerStyle: {
              backgroundColor: '#ccc'
            },
            headerTitle: () => (<LogoTitle />)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#f70',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   header: {
//     backgroundColor: '#ccc'
//   }
// });

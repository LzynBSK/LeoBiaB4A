import { NavigationContainer } from '@react-navigation/native';

//npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Cadastrar from './componentes/cadastrar/index';
import Listar from './componentes/listar/index';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('goGlk2riuJvtcUFRNQiYVX2bSLtJK7jYer0ROvgt','ixlO6MzzWRO5YNasPlR8X3OFjmxqj27iZbBzubOJ');
Parse.serverURL = 'https://parseapi.back4app.com/';
const Tabs = CreateBottomTabNavigator();
export default function App() {
  return (

<NavigationContainer>
  <Tabs.Navigator>
  <Tabs.Screen
          name='Cadastrar'
          component={ Cadastrar }
          options={{
            tabBarIcon:({color,size})=>(<FontAwesome name="sign-in" size={24} color="black" />)
          }}
        />
        <Tabs.Screen 
          name='Listar'
          component={ Listar }
          options={{
            tabBarIcon:({color,size})=>(<Ionicons name="ios-list-circle-outline" size={size} color={color} />)
          }}
        />
  </Tabs.Navigator>
</NavigationContainer>
  );
}

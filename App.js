import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './components/Redux/store';

let persistor = persistStore(store);

import Login from './components/Login';
import StudentDash from './components/Student/StudentDash';
import ExclusionStatus from './components/Student/ExclusionStatus';
import Quizzes from './components/Student/Quizzes';
import Noticeboard from './components/Student/Noticeboard';
import Message from './components/Student/Message';
import Messaging from './components/Student/Messaging';
import Account from './components/Student/Account';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {/* <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="student_dash"
          component={StudentDash}
        />
        <Stack.Screen 
          name="student_exclusion_status"
          component={ExclusionStatus}
        />
        <Stack.Screen
          name="quizzes"
          component={Quizzes}
        />
        <Stack.Screen
          name="noticeboard"
          component={Noticeboard}
        />
        <Stack.Screen
          name="message"
          component={Message}
        />
        <Stack.Screen
          name="messaging"
          component={Messaging}
        />*/}
            <Stack.Screen
              name="account"
              component={Account}
            />

          </Stack.Navigator>
        </NavigationContainer>

      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { TaskContextProvider } from './contexts/TaskContext';

import TaskHomeScreen from './screens/TaskHomeScreen';
import TaskListScreen from './screens/TaskListScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={TaskHomeScreen} />
            <Stack.Screen name="TaskList" component={TaskListScreen} />
            <Stack.Screen name="TaskForm" component={TaskFormScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </TaskContextProvider>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import RecoveryScreen from './features/recovery/RecoveryScreen';
import FinancesScreen from './features/finances/FinancesScreen';
import TasksScreen from './features/tasks/TasksScreen';
import JournalScreen from './features/journal/JournalScreen';
import FitnessScreen from './features/fitness/FitnessScreen';
import VisionScreen from './features/vision/VisionScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#7c3aed',
          tabBarInactiveTintColor: '#9ca3af',
          headerStyle: {
            backgroundColor: '#fafafa',
          },
          headerTitleStyle: {
            fontWeight: '600',
            color: '#1f2937',
          },
        }}
      >
        <Tab.Screen
          name="Recovery"
          component={RecoveryScreen}
          options={{
            title: '🔄 Recovery',
          }}
        />
        <Tab.Screen
          name="Finances"
          component={FinancesScreen}
          options={{
            title: '💰 Finances',
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            title: '✓ Tasks',
          }}
        />
        <Tab.Screen
          name="Journal"
          component={JournalScreen}
          options={{
            title: '📝 Journal',
          }}
        />
        <Tab.Screen
          name="Fitness"
          component={FitnessScreen}
          options={{
            title: '💪 Fitness',
          }}
        />
        <Tab.Screen
          name="Vision"
          component={VisionScreen}
          options={{
            title: '✨ Vision',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { NoteCreate } from "./src/screens/NoteCreate";
import { NoteEdit } from "./src/screens/NoteEdit";
import { NoteView } from "./src/screens/NoteView";
import { NotesList } from "./src/screens/NotesList";

import screens from "./src/screens.json";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.home}>
        <Stack.Screen name={screens.home} component={Home} />
        <Stack.Screen name={screens.noteView} component={NoteView} />
        <Stack.Screen name={screens.noteCreate} component={NoteCreate} />
        <Stack.Screen name={screens.noteEdit} component={NoteEdit} />
        <Stack.Screen name={screens.notesList} component={NotesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

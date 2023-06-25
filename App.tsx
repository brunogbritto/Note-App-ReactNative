import { useState, useEffect } from "react";
import { AppStateContext, initialAppStateContext } from "./src/AppStateContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { NoteCreate } from "./src/screens/NoteCreate";
import { NoteEdit } from "./src/screens/NoteEdit";
import { NoteView } from "./src/screens/NoteView";
import { NotesList } from "./src/screens/NotesList";
import { MapViewPage } from "./src/screens/MapViewPage";
import { Loader } from "./src/components/Loader";
import { api } from "./src/api";
import { RootSiblingParent } from "react-native-root-siblings";

import screens from "./src/screens.json";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appState, setAppState] = useState(initialAppStateContext);

  useEffect(() => {
    const interceptorRequest = api.interceptors.request.use((config) => {
      setAppState({
        loading: true,
      });

      return config;
    });

    const interceptorResponse = api.interceptors.response.use((config) => {
      setAppState({
        loading: false,
      });
      return config;
    });

    return () => {
      api.interceptors.request.eject(interceptorRequest);
      api.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  return (
    <RootSiblingParent>
      <AppStateContext.Provider value={appState}>
        <Loader loading={appState.loading} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName={screens.home}>
            <Stack.Screen name={screens.home} component={Home} />
            <Stack.Screen name={screens.noteView} component={NoteView} />
            <Stack.Screen name={screens.noteCreate} component={NoteCreate} />
            <Stack.Screen name={screens.noteEdit} component={NoteEdit} />
            <Stack.Screen name={screens.notesList} component={NotesList} />
            <Stack.Screen name={screens.mapView} component={MapViewPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStateContext.Provider>
    </RootSiblingParent>
  );
}

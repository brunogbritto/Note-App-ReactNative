import { View, Text, FlatList } from "react-native";
import screens from "../screens.json";
import { useEffect, useState, useContext } from "react";
import { api } from "../api";
import { NoteItem } from "../components/NoteItem";

import type { Notepad } from "../types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";

const initialNotepads: Notepad[] = [];

export function NotesList({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [notepads, setNotepads] = useState(initialNotepads);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<{ notepads: Notepad[] }>("/notepads");
      setNotepads(data.notepads);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={notepads}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          return (
            <NoteItem
              notepad={item}
              onPress={() => {
                navigation.navigate(screens.noteView, {
                  id: item.id,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
}

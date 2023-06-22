import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import screens from "../screens.json";
import { api } from "../api";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Notepad } from "../types";
import type { ParamListBase } from "@react-navigation/native";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
};

export function NoteView({ navigation, route }: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialNotepad);
  const id = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get(`/notepads/${id}`);
      setNotepad(data);
    });
  }, []);
  return (
    <View>
      <Text>{id}</Text>
      <Text>{new Date(notepad.created_at).toLocaleDateString()}</Text>
      <Text>{notepad.title}</Text>
      <Text>{notepad.subtitle}</Text>
      <Text>{notepad.content}</Text>
    </View>
  );
}

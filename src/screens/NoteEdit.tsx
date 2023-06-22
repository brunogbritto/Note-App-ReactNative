import { View, Text } from "react-native";
import screens from "../screens.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<ParamListBase> {}

export function NoteEdit({ navigation }: Props) {
  return (
    <View>
      <Text>NoteEDIT</Text>
    </View>
  );
}

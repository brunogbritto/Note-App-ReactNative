import { View } from "react-native";
import styled from "styled-components/native";
import screens from "../screens.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<ParamListBase> {}

export function NoteCreate({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Editar Notepad"
        onPress={() => {
          navigation.navigate(screens.noteEdit);
        }}
      >
        <ButtonText>Editar Note</ButtonText>
      </Button>
    </View>
  );
}

const Button = styled.TouchableOpacity`
  background-color: #008080;
  padding: 16px 32px;
  margin-top: 15px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

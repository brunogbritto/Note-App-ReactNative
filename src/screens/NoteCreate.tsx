import { View, TextInput } from "react-native";
import { useState } from "react";
import styled from "styled-components/native";
import screens from "../screens.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<ParamListBase> {}

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
};

export function NoteCreate({ navigation }: Props) {
  const [form, setForm] = useState(initialFormState);

  return (
    <PageContainer>
      <PageTitle>Crie seu note</PageTitle>
      <CreateBox>
        <Button
          title="Editar Notepad"
          onPress={() => {
            navigation.navigate(screens.noteEdit);
          }}
        >
          <ButtonText>Editar Note</ButtonText>
        </Button>
      </CreateBox>
    </PageContainer>
  );
}

const Button = styled.TouchableOpacity`
  background-color: #008080;
  padding: 8px 16px;
  margin-top: 270px;
  margin-right: 250px;
  border-radius: 8px;
  width: 120px;
  align-self: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

const CreateBox = styled.View`
  background-color: #efc631;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 40px;
  width: 400px;
  height: 325px;
  align-self: center;
  justify-content: center;
`;

const PageTitle = styled.Text`
  align-self: center;
  font-weight: bold;
  margin-top: 30px;
`;

const PageContainer = styled.View`
  height: 100%;
  width: 100%;
`;

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import screens from "../screens.json";
import Toast from "react-native-root-toast";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";
import { api } from "../api";
import { Notepad } from "../types";

interface Props extends NativeStackScreenProps<ParamListBase> {}

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
};

const Texts = {
  title: "Criar notepad",
  titlePlaceholder: "Digite um título aqui",
  subtitlePlaceholder: "Digite um subtítulo aqui",
  contentPlaceholder: "Digite um conteúdo aqui",
  submitButton: "Enviar",
};

export function NoteEdit({ navigation, route }: NativeStackScreenProps<any>) {
  const id = route.params.id;
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content },
      } = await api.get<Notepad>(`/notepads/${id}`);
      setForm({
        title,
        subtitle,
        content,
      });
    });

    return unsubscribe;
  }, [id]);

  return (
    <PageContainer>
      <PageTitle>Crie seu note</PageTitle>
      <CreateBox>
        <InputContainer>
          <InputTitle
            value={form.title}
            onChangeText={(title) => setForm({ ...form, title })}
            placeholder={Texts.titlePlaceholder}
          />
          <InputSubtitle
            value={form.subtitle}
            onChangeText={(subtitle) => setForm({ ...form, subtitle })}
            placeholder={Texts.subtitlePlaceholder}
          />
          <InputContent
            value={form.content}
            onChangeText={(content) => setForm({ ...form, content })}
            placeholder={Texts.contentPlaceholder}
            multiline={true}
            numberOfLines={6}
          />
        </InputContainer>
        <Button
          onPress={async () => {
            const { data } = await api.post("/notepads", form);

            console.log(data);

            navigation.navigate(screens.notesList);
          }}
        >
          <ButtonText>{Texts.submitButton}</ButtonText>
        </Button>
      </CreateBox>
    </PageContainer>
  );
}

const Button = styled.TouchableOpacity`
  background-color: #008080;
  padding: 8px 16px;
  margin-top: 100px;
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

const InputTitle = styled(TextInput)`
  margin-bottom: 10px;
`;

const InputSubtitle = styled(TextInput)`
  margin-top: 20px;
`;

const InputContent = styled(TextInput)`
  margin-top: 30px;
`;

const InputContainer = styled.View`
  flex: 1;
`;

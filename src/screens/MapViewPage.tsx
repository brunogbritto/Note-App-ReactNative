import { View, Text, StyleSheet } from "react-native";
import screens from "../screens.json";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";
import styled from "styled-components";

export function MapViewPage({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  return <Text>MapViewPage</Text>;
}

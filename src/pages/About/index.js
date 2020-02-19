import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from "react-native";
import img from "../../../assets/about.png";

export default function About({ navigation }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <View style={styles.container}>
          <Image resizeMode="center" source={img} />
          <Text style={styles.title}>
            Somos a UmHelp, uma plataforma que conecta pessoas que precisam de
            empréstimo a pessoas que querem investir seu dinheiro.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Apresentation1");
            }}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 29,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#515154",
    fontWeight: "bold",
    paddingBottom: 20
  },
  button: {
    width: "100%",
    height: 58,
    backgroundColor: "#1F9E73",
    borderRadius: 34,
    marginTop: 40,
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  }
});

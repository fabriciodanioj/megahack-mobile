import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default function Verify({ navigation }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.title}>Insira o código recebido por SMS</Text>
          <TextInput
            placeholder="Codigo de confirmação"
            style={styles.input}
            placeholderTextColor="#1F9E73"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SelectClass");
            }}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 29,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 20,
    color: "#1F9E73",
    fontWeight: "bold",
    paddingBottom: 51
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderRadius: 7,
    borderStyle: "solid",
    borderColor: "#D1D1D1",
    borderWidth: 1,
    padding: 16,
    color: "#1F9E73"
  },
  button: {
    width: "100%",
    height: 58,
    backgroundColor: "#1F9E73",
    borderRadius: 34,
    marginTop: 80,
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

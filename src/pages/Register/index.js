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
import UserApi from "../../services/UserApi";

export default function Register({ navigation }) {
  const [name, setName] = React.useState("");
  const [document, setDocument] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await UserApi.post("/", {
      name,
      document,
      email,
      phone,
      password_hash: password
    });

    console.log(user)

    // navigation.navigate("SelectClass");
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.title}>Criando sua conta</Text>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
            placeholderTextColor="#1F9E73"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#1F9E73"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="CPF"
            style={styles.input}
            placeholderTextColor="#1F9E73"
            keyboardType="numeric"
            value={document}
            onChangeText={setDocument}
          />
          <TextInput
            placeholder="Celular"
            style={styles.input}
            placeholderTextColor="#1F9E73"
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#1F9E73"
            autoCapitalize={false}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    marginTop: 50,
    paddingHorizontal: 29,
    alignItems: "center"
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
    paddingHorizontal: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  }
});

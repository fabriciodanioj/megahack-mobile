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
import img from "../../../assets/screen2.png";

export default function Apresentation2({ navigation }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <View style={styles.container}>
          <Image resizeMode="center" source={img} />
          <Text style={styles.title}>
            Também damos um help para quem quer fazer seu dinheiro render mais
            sem ter que se tornar um especialista em investimentos para isso.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Register");
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
    marginTop: 10,
    paddingHorizontal: 29,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#515154",
    fontWeight: "bold"
  },
  button: {
    width: "100%",
    height: 58,
    backgroundColor: "#1F9E73",
    borderRadius: 34,
    marginTop: 20,
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

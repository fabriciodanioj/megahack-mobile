import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default function Verify({ navigation }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.title}>O que você deseja fazer? </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ChooseInvestiments");
            }}
          >
            <Text style={styles.buttonText}>Investimento</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ChooseLoan");
            }}
          >
            <Text style={styles.buttonText}>Empréstimo</Text>
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
    paddingBottom: 21
  },
  button: {
    width: "100%",
    height: 90,
    backgroundColor: "#1F9E73",
    borderRadius: 34,
    marginTop: 40,
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF"
  }
});

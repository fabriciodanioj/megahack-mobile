import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  CheckBox
} from "react-native";

export default function Verify({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <Text style={styles.titleInvestiment}>Investimentos</Text>
        <View style={styles.content}>
          <Text style={styles.title}>Quanto você irá investir?</Text>
          <TextInput
            placeholder="R$ 00.00"
            style={styles.input}
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
          <Text style={styles.title}>Com qual nível de risco?</Text>
          <View style={styles.TouchableOpacityRiskView}>
            <Text style={{ width: 50, fontSize: 15, fontWeight: "bold" }}>
              Baixo Risco
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#CCE7E6",
                ...styles.TouchableOpacityRisk
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#99CFCD",
                ...styles.TouchableOpacityRisk
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#66B7B5",
                ...styles.TouchableOpacityRisk
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#339F9C",
                ...styles.TouchableOpacityRisk
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#008884",
                ...styles.TouchableOpacityRisk
              }}
            ></TouchableOpacity>
            <Text
              style={{
                width: 50,
                marginLeft: 10,
                fontSize: 15,
                fontWeight: "bold"
              }}
            >
              Alto Risco
            </Text>
          </View>
          <Text style={styles.title}>Quando pensa em retirar?</Text>
          <View style={styles.TouchableOpacityGetView}>
            <TouchableOpacity style={styles.TouchableOpacityGet}>
              <Text>Até 1 ano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityGet}>
              <Text>1-3 anos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.TouchableOpacityGetView}>
            <TouchableOpacity style={styles.TouchableOpacityGet}>
              <Text>3-5 anos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityGet}>
              <Text>+5 anos</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Verify");
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
    backgroundColor: "#1F9E73",
    height: "100%"
  },
  input: {
    width: "80%",
    height: 50,
    marginBottom: 50,
    marginTop: 16,
    fontWeight: "bold",
    borderRadius: 7,
    borderStyle: "solid",
    borderColor: "#D1D1D1",
    borderWidth: 1,
    paddingHorizontal: 120,
    fontSize: 20
  },
  content: {
    backgroundColor: "#FFF",
    marginTop: 30,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  titleInvestiment: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    paddingLeft: 200,
    color: "#FFF"
  },
  TouchableOpacityRiskView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 60
  },
  TouchableOpacityRisk: {
    marginHorizontal: 5,
    borderRadius: 7,
    width: 40,
    height: 40
  },
  TouchableOpacityGetView: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10
  },
  TouchableOpacityGet: {
    marginHorizontal: 7,
    borderRadius: 7,
    width: 104,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1
  },
  button: {
    width: "80%",
    height: 58,
    backgroundColor: "#1F9E73",
    borderRadius: 34,
    marginTop: 50,
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 60
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  }
});

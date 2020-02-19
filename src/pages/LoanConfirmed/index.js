import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import img from "../../../assets/chartInvestiments.png";

export default function Verify({ navigation }) {
  const [cash, setCash] = React.useState(0);
  const [risk, setRisk] = React.useState(0);
  const [time, setTime] = React.useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    navigation.navigate("");
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView enabled={true} behavior="padding">
        <Text style={styles.titleInvestiment}>Empréstimo</Text>
        <View style={styles.content}>
          <Text style={styles.title}>Resumo:</Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Solicitação de emprestimo feita, aguarde até ser confirmado
          </Text>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingTop: 20
  },
  header: {
    backgroundColor: "#FFF",
    marginTop: 30,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFD650"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  },
  titleInvestiment: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color: "#FFF",
    marginLeft: 15
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

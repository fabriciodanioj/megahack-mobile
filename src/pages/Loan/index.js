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
        <View style={styles.header}>
          <View style={{ paddingRight: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Empréstimo feito
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>R$ 5000,00</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Numero de parcelas:
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>5x</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Resumo:</Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Juros: 2% ao Mês
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Taxa de IOF: R$20,56
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Taxa de CET: 2% ao Mês
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Valor da parcela: 6x de R$170,00
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Dia de vencimento: Todo dia 10
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Ao total você pagará: R$1050,15
          </Text>
          <Text style={{ paddingTop: 20, paddingHorizontal: 20, fontSize: 20 }}>
            Em outras formas de empréstimo você poderia pagar até R$1899,51
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Loan");
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

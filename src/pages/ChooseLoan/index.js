import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Slider
} from "react-native";

export default function Verify({ navigation }) {
  const [plots, setPlots] = React.useState(0);
  const [cash, setCash] = React.useState(0);
  const [day, setDay] = React.useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    navigation.navigate("SelectClass");
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding">
        <Text style={styles.titleLoan}>Empréstimo</Text>
        <View style={styles.content}>
          <Text style={styles.title}>Qual o valor do empréstimo?</Text>
          <TextInput
            placeholder="R$ 00.00"
            style={styles.input}
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
          <Text style={styles.title}>Em quantas vezes irá pagar?</Text>
          <Text style={{ color: "#FFF", fontSize: 20 }}>{plots}x</Text>
          <View style={styles.SliderView}>
            <Text style={{ color: "#FFF" }}>3x</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={3}
              maximumValue={24}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={1}
              onValueChange={value => {
                setPlots(value);
              }}
            />
            <Text style={{ color: "#FFF" }}>24x</Text>
          </View>
          <Text style={styles.title}>Qual dia do mês irá pagar?</Text>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Dia: {day}</Text>
          <View style={styles.TouchableOpacityGetView}>
            <TouchableOpacity
              style={styles.TouchableOpacityGet}
              onPress={() => {
                setDay(5);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityGet}
              onPress={() => {
                setDay(10);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityGet}
              onPress={() => {
                setDay(15);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityGet}
              onPress={() => {
                setDay(20);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>20</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityGet}
              onPress={() => {
                setDay(25);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>25</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#FFF",
    height: "100%",
    flex: 1
  },
  input: {
    width: "80%",
    height: 50,
    marginBottom: 50,
    marginTop: 16,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#FFF"
  },
  content: {
    backgroundColor: "#1F9E73",
    marginTop: 30,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5
  },
  titleLoan: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
    color: "#1F9E73"
  },
  TouchableOpacityGetView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 70
  },
  SliderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8,
    marginBottom: 30
  },
  TouchableOpacityGet: {
    marginHorizontal: 7,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#FFF",
    borderWidth: 1,
    color: "#FFF"
  },
  button: {
    width: "80%",
    height: 58,
    backgroundColor: "#FFF",
    borderRadius: 34,
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 110
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F9E73"
  }
});

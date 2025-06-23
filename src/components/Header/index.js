import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const alturaDaBarra = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>Dudu Oliveira</Text>

        <TouchableOpacity style={styles.botao}>
          <Feather name="user" size={27} color={"#"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: alturaDaBarra,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nome: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  botao: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});

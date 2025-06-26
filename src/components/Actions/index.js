import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="addfolder" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="tagso" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="creditcard" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="barcode" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="setting" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 95, // altura maxima
    marginBottom: 14, // margem em baixo
    marginTop: 18, // margem no topo
    paddingEnd: 20, // gordurinha no final
    paddingStart: 20, // gordurinha no inicio
  },

  botaoAcao: {
    alignItems: "center", // alinhar ao centro
    marginRight: 32, // margem na direita
  },

  area: {
    backgroundColor: "#ecf0f1", // cor de fundo
    height: 60, // altura
    width: 60, // largura
    borderRadius: 30, // arredondar as bordas
    justifyContent: "center", // centralizar conteudo
    alignItems: "center", // alinhar itens ao centro
  },

  tituloBotao: {
    marginTop: 4, // espaço em cima
    textAlign: "center", // centralizar texto
    fontWeight: "bold", // negrito
  },
});

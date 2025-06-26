import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movements({ dados }) {
  const [mostrarValor, setMostraValor] = useState(false);

  function visualizarValor() {
    setMostraValor(!mostrarValor);
  }

  // CRIANDO UMA FUNÇÃO PRA TRANSFORMAR EM MOEDA
  function transformarEmMoeda(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <TouchableOpacity onPress={visualizarValor} style={styles.container}>
      <Text style={styles.data}>{dados.data}</Text>

      <View style={styles.conteudo}>
        {dados.titulo}

        {mostrarValor ? (
          <Text style={styles.tipo === 1 ? styles.valor : styles.despesas}>
            {dados.tipo === 1
              ? `${transformarEmMoeda(dados.valor)}`
              : `-${transformarEmMoeda(dados.valor)}`}
          </Text>
        ) : ( 
          <View style={styles.borrao}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa 100% da tela
    marginBottom: 24, // espaço embaixo
    borderBottomWidth: 0.5, // linha da borda
    borderBottomColor: "#dadada", // cor da borda de baixo
  },

  conteudo: {
    flexDirection: "row", // em linha
    justifyContent: "space-between",
    marginTop: 2, // espaço no topo
    marginBottom: 8, // espaço na parte de baixo
  },

  data: {
    color: "#dadada", // cor da letra
    fontWeight: "bold", // negrito
  },

  valor: {
    fontSize: 16, // tamanho da fonte
    color: "#2ecc71", // cor da letra
    fontWeight: "bold", // negrito
  },

  despesas: {
    fontSize: 16, // tamanho da letra
    color: "#e74c3c", // cor da fonte
    fontWeight: "bold", // negrito
  },

  borrao: {
    marginTop: 6, // espaço no topo
    width: 80, // largura
    height: 10, // altura
    backgroundColor: "#dadada", // cor de fundo
    borderRadius: 8, // borda arredondada
  },
});

import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Movements from "../../components/Movements";

const lista = [
  {
    id: 1,
    titulo: "Boleto conta luz",
    valor: 150,
    data: "08/06/2025",
    tipo: 0, // despesas
  },
  {
    id: 2,
    titulo: "Boleto conta luz",
    valor: 150,
    data: "08/06/2025",
    tipo: 0, // despesas
  },
  {
    id: 3,
    titulo: "Boleto conta luz",
    valor: 150,
    data: "08/06/2025",
    tipo: 0, // despesas
  },
  {
    id: 4,
    titulo: "Pix Cliente Carlos",
    valor: 200,
    data: "08/06/2025",
    tipo: 1, // receita
  },
  {
    id: 5,
    titulo: "Pix Cliente Carlos",
    valor: 200,
    data: "08/06/2025",
    tipo: 1, // receita
  },
  {
    id: 6,
    titulo: "Salário",
    valor: 1350,
    data: "15/06/2025",
    tipo: 1, // receita
  },
  {
    id: 7,
    titulo: "Controle de Xbox",
    valor: 250,
    data: "15/06/2025",
    tipo: 0, // gastos
  },
  {
    id: 8,
    titulo: "Controle de Xbox",
    valor: 50,
    data: "15/06/2025",
    tipo: 0, // gastos
  },
  {
    id: 9,
    titulo: "PIX da Sophia",
    valor: 95,
    data: "13/06/2025",
    tipo: 1, // receita
  },
  {
    id: 10,
    titulo: "Pagar o Nicolas",
    valor: 35,
    data: "13/06/2025",
    tipo: 0, // gasto
  },
  {
    id: 11,
    titulo: "Pagamento da Ana",
    valor: 200,
    data: "13/06/2025",
    tipo: 1, // gasto
  },
];

function transformarEmDinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcularRecebimentos(recebimentos) {
  let soma = 0;

  for (let i = 0; i < recebimentos.length; i++) {
    if (recebimentos[i].tipo === 1) {
      soma += recebimentos[i].valor;
    }
  }

  return soma;
}

function calcularGastos(gastos) {
  let soma = 0;

  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i].tipo === 0) {
      soma += gastos[i].valor;
    }
  }

  return soma;
}

const saldo = calcularRecebimentos(lista);
const gasto = calcularGastos(lista);
const calculo = saldo - gasto;

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance
        saldo={transformarEmDinheiro(calculo)}
        gastos={transformarEmDinheiro(gasto)}
      />
      <Actions />

      <Text style={styles.titulo}>Últimas movimentações</Text>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements dados={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo espaço da tela
    backgroundColor: "#fafafa", // pintar cor de fundo
  },

  titulo: {
    fontSize: 18, // tamanho da letra
    fontWeight: "bold", // negrito
    marginLeft: 14, // espaço na esquerda
    marginRight: 14, // espaço na direita
    marginTop: 14, // espaço em cima
    marginBottom: 14, // espaço na parte de baixo
  },

  lista: {
    marginStart: 14, // margem no começo
    marginEnd: 14, // margem no final
  },
});

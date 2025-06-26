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

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance saldo={"R$ 1200,00"} gastos={"R$ 600,00"} />
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

const styles = StyleSheet.create({});

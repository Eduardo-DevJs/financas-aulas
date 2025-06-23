import { View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";

export default function Home() {
  return (
    <View>
      <Header />
        <Balance saldo={"R$ 1200,00"} gastos={"R$ 600,00"}/>
      <Actions />
    </View>
  );
}
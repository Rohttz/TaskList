import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTaskContext } from "../contexts/TaskContext";

export default function TaskDetailsScreen() {
  const route = useRoute();
  const { taskId } = route.params;
  const { getTaskById } = useTaskContext();
  const task = getTaskById(taskId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Tarefa não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{task.description}</Text>

      <Text style={styles.label}>Data de Cadastro:</Text>
      <Text style={styles.value}>{task.dataCadastro}</Text>

      <Text style={styles.label}>Data de Conclusão:</Text>
      <Text style={styles.value}>
        {task.dataConclusao ? task.dataConclusao : "-"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10
  },
  value: {
    fontSize: 16
  },
  error: {
    fontSize: 18,
    color: "red"
  }
});

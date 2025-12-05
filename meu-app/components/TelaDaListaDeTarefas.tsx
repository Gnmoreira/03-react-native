import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { tarefasMockadas } from '../data/tarefas';
import { Tarefa } from '../types/Tarefa';
export default function TelaDaListaDeTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTarefas(tarefasMockadas);
            setCarregando(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Tarefas</Text>
            {carregando ? (
                <Text>Carregando...</Text>
            ) : (
                <FlatList
                    data={tarefas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text style={styles.item}>{item.id} -

                        {item.titulo}</Text>}
                />
            )}
        </View>

    );
}
const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    item: { paddingVertical: 8, fontSize: 16 },
});
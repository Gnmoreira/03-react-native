import { useEffect, useState } from 'react';
//importa hooks 
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { tarefasMockadas } from '../data/tarefas';
//importa tarefasmockadas do data/tarefas
import { Tarefa } from '../types/Tarefa';
export default function TelaDaListaDeTarefas() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        //simula o um carregamento das tarefas por 2 segundos , enfase no },2000
        const timer = setTimeout(() => {
            setTarefas(tarefasMockadas);
            //carrega as tarefas (importando do types, tarefas)
            setCarregando(false);
            
        }, 2000);
        return () => clearTimeout(timer);
        //desativa o carregamento caso o carregamento acabe antes do timeout
    }, []);
    //o array e vazio para garatir que que seja rodado apenas uma vez 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Tarefas</Text>
            {carregando ? (
                <Text>Carregando...</Text>
                // confere se esta carregando e se estiver mostra o texto "carregando"
            ) : (
                <FlatList
                    data={tarefas}
                    keyExtractor={(item) => item.id.toString()}
                    //transforma o id do item  em uma string
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
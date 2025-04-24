import React, { useState } from 'react';
import { View, StyleSheet, Text , Modal, Pressable} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Botao from '../components/Button';
import CoinImage from '../components/Coin';
import Statistics from '../components/Statistics';

export default function CaraCoroa() {
    const [userChoice, setUserChoice] = useState('cara');
    const [result, setResult] = useState(null);
    const [total, setTotal] = useState(0);
    const [userWins, setUserWins] = useState(0);
    const [machineWins, setMachineWins] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    const flipCoin = () => {
        const options = ['cara', 'coroa'];
        const random = options[Math.floor(Math.random() * 2)];
        setResult(random);

        setTotal(total + 1);
        if (random === userChoice) {
            setUserWins(userWins + 1);
            setModalVisible(true);
        } else {
            setMachineWins(machineWins + 1);
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.jogo}>
                <Text style={styles.text}>Escolha: </Text>
                <Picker
                    selectedValue={userChoice}
                    onValueChange={(itemValue) => setUserChoice(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Cara" value="cara" />
                    <Picker.Item label="Coroa" value="coroa" />
                </Picker>

                <Botao labelButton='Jogar' onpress={flipCoin} />

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            {result && <CoinImage side={result} />}
                            <Text style={styles.modalText}>O resultado foi {result}!</Text>
                            <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Statistics total={total} userWins={userWins} machineWins={machineWins} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 50,
        backgroundColor: '#243269',
    },
    picker: {
        width: 150,
        height: 50,
        marginBottom: 20,
        color: '#fff',
    },
    jogo: {
        backgroundColor: '#6b71b0',
        padding: 20,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
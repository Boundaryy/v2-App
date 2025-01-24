import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useRouter } from 'expo-router';
import { BarButton } from '../../components/Choice';

const App = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={[globalStyles.container]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle, styles.text]}>학습 결과</Text>
                <Text style={[globalStyles.description]}>최근 학습 결과를 확인해보세요.</Text>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    style={{
                        maxHeight: Dimensions.get('window').height - 200, 
                    }}
                >
                    <BarButton
                        title="선택지 1"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 1'}
                        onSelect={setSelectedOption}
                    />
                    <BarButton
                        title="선택지 2"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 2'}
                        onSelect={setSelectedOption}
                    />
                    <BarButton
                        title="선택지 3"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 3'}
                        onSelect={setSelectedOption}
                    />
                    <BarButton
                        title="선택지 4"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 4'}
                        onSelect={setSelectedOption}
                    />
                    <BarButton
                        title="선택지 5"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 5'}
                        onSelect={setSelectedOption}
                    />
                    <BarButton
                        title="선택지 6"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 6'}
                        onSelect={setSelectedOption}
                    />
                                        <BarButton
                        title="선택지 7"
                        explain="이 선택지를 클릭하세요."
                        isSelected={selectedOption === '선택지 7'}
                        onSelect={setSelectedOption}
                    />
                </ScrollView>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20,
    },
    description: {
        color: '#565656',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: -10,
        marginTop: 30,
        fontFamily: 'Pretendard',
    },
    text: {
        fontFamily: 'Pretendard',
    },
});

export default App;

import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from './themed-text';
import Button from './ui/Button';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

interface ContainerProps {
    type?: 'categories' | 'verticalproducts' | 'horizontalproducts' | 'promotions';
    title: string;
    data?: any[];
    onPress: () => void;
}

export default function Container({ type = 'categories', title, data, onPress }: ContainerProps) {

    return (
        <View style={{ paddingTop: 24}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30}}>
                <ThemedText type='title' style={{ color: '#130F2A' }}>
                    {title}
                </ThemedText>
                <Button type='primary' content="See All" onPress={onPress}></Button>
            </View>
            {type === 'categories' && (
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 12, paddingBottom: 4, gap: 12 }}>
                    {data?.map((item) => (
                        <CategoryCard key={item.id} title={item.name} icon={item.icon} onPress={() => console.log(`${item.name} pressed`)}></CategoryCard>
                    ))}
                </View>
            )}
            {type === 'horizontalproducts' && (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingTop: 12, paddingBottom: 4, gap: 12 }} >
                    {data?.map((item) => (
                        <ProductCard key={item.id} type='primary' product={item} onPress={() => console.log(`${item.name} pressed`)}></ProductCard>
                    ))}
                </ScrollView>
            )}
            {type === 'verticalproducts' && (
                <View style={styles.gridContainer}>
                    {data?.map((item) => (
                        <ProductCard 
                            key={item.id} 
                            type='secondary' 
                            product={item} 
                            onPress={() => console.log(`${item.name} pressed`)}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',               
        justifyContent: 'space-between', 
        rowGap: 16,                   
        paddingTop: 12,
        paddingBottom: 16,
    }
});
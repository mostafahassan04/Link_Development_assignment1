import { ImageSourcePropType, View } from 'react-native';
import { ThemedText } from './themed-text';
import Button from './ui/Button';

interface CategoryCardProps {
    title: string;
    icon: ImageSourcePropType;
    onPress: () => void;
}

export default function CategoryCard({ title, icon, onPress }: CategoryCardProps) {

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Button type='card' content={icon} onPress={onPress}></Button>
            <ThemedText type='defaultSemiBold' style={{ color: '#130F2A' }}>
                {title}
            </ThemedText>
        </View>
        
    );
}


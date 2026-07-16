import { StyleSheet, View, TextInput } from 'react-native';
import SearchIcon from "../../assets/icons/search.svg";

interface SearchBarProps {
  placeholder: string;
  onSearch: (text: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon style={styles.icon} width={18} height={18} />
      
      <TextInput 
        style={styles.searchInput} 
        placeholder={placeholder} 
        placeholderTextColor="#6B6880"
        onChangeText={onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',       
    alignItems: 'center',       
    height: 48,                 
    borderRadius: 24,           
    backgroundColor: '#EDEDF5', 
    paddingHorizontal: 16,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,                    
    height: '100%',
    fontFamily: 'Outfit_500Medium',
    fontSize: 14,
    color: '#130F2A',           
  },
});
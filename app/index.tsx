import { ScrollView, Text, View, StyleSheet, TextInput } from "react-native";
import { parseData } from "../components/parseData";
import CardComponent from "../components/cardComp";
import { mapDataToCards } from "../components/mapData";
import { Chip } from 'react-native-paper';
import { useEffect, useState, useLayoutEffect } from "react";

export default function UpdateCards({ navigation }) {
  const [cardData, setCardData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const parsedData = parseData();
      const mappedData = mapDataToCards(parsedData);
      setCardData(mappedData);
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        title: 'Journey Library', // Custom title
        headerTitleAlign: 'center', // Center the title
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
      });
    }
  }, [navigation]);

  const uniqueCategories = Array.from(new Set(cardData.map(item => item.category)));
  const filteredData = cardData.filter(item =>
    item.cardTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={[styles.chipContainer, { backgroundColor: '#FFFFFF' }]}>
        {uniqueCategories.map((category, index) => (
          <Chip key={index} mode="outlined" style={[styles.chip, { backgroundColor: '#D3D3D3' }]}>
            {category}
          </Chip>
        ))}
      </View>

      <View style={[styles.cardContainer, { backgroundColor: '#FFFFFF' }]}>
        {cardData.map((item, index) => (
          <CardComponent
            key={index}
            cardTitle={item.cardTitle}
            url={item.url}
            custom_redirect={item.custom_redirect}
            page={item.page}
            text={item.text}
            category={item.category}
            rank={item.rank}
            hide={item.hide}
            isFree={item.isFree}
            isTopRated={item.isTopRated}
            verified={item.verified}
            premium={item.premium}
            ImageUrl={item.ImageUrl}
            logoUrl={item.logoUrl}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  chip: {
    margin: 5,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
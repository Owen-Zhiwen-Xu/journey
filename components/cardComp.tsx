import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

{/* left={LeftContent} /> add this back once icon is added*/ }

//have no icon image but once that is added to assets
//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

interface CardComponentProps {
  cardTitle: string;
  url?: string;
  custom_redirect?: string;
  page?: string;
  text: string;
  category?: string;
  rank?: string;
  hide?: boolean;
  isFree?: boolean;
  isTopRated?: boolean;
  verified?: boolean;
  premium?: boolean;
  ImageUrl?: string;
  logoUrl?: string;
}


const CardComponent: React.FC<CardComponentProps> = ({ cardTitle, text, rank }) => {
  return (
    <Card style={[cardStyles.card, { backgroundColor: '#FFFFFF' }]}>  {/* add on press after layout works */}
      <Card.Title 
      title={cardTitle} 
      style={cardStyles.title}
      right={() => <Text style={cardStyles.rank}>{rank}</Text>}
      />
      <Card.Content style={cardStyles.content}>
        <Text>{text}</Text>
      </Card.Content>
    </Card>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },
  card: {
    width: 300,
    height: 120,
    margin: 3,
    borderRadius: 12,
  },
  title: {
    marginBottom: -20, // Add spacing between title and content
    flexDirection: 'row', // Arrange title and subtitle horizontally
    justifyContent: 'space-between', // Space between title and label
  },
  rank: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'center', // Center the label vertically with the title
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});


export default CardComponent;

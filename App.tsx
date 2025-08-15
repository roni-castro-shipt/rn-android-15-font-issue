import { StyleSheet, FlatList, Text, View } from 'react-native';

const ItemSeparator = () => (
  <View style={{ height: 1, borderBottomWidth: 1 }} />
);

export const Example = () => {
  const effectiveMetros = [
    { display_name: 'Abilene, TX', id: 1, name: 'Abilene', state: 'TX' },
    {
      display_name: 'Akron / Canton, OH',
      id: 2,
      name: 'Akron / Canton',
      state: 'OH',
    },
    {
      display_name: 'Alaska, AK',
      id: 3,
      name: 'Alaska',
      selected: true,
      state: 'AK',
    },
    { display_name: 'Albany, NY', id: 4, name: 'Albany', state: 'NY' },
  ];

  return (
    <FlatList
      style={styles.list}
      data={effectiveMetros}
      renderItem={({ item: metro }) => (
        <Text style={styles.text}>{metro.display_name}</Text>
      )}
      keyExtractor={metro => metro.id.toString()}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  list: { marginVertical: 60, marginHorizontal: 16 },
  text: {
    lineHeight: 24,
    fontSize: 16,
  },
});

export default Example;

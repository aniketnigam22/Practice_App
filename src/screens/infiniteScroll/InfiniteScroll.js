import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

const InfiniteScroll = () => {


  //An array to store the fetched items.
  const [data, setData] = useState([]);
  //A number to keep track of the current page.
  const [page, setPage] = useState(0); // Page starts from 0
  //A boolean to indicate if data is being fetched.
  const [loading, setLoading] = useState(false);
  // A boolean to indicate if there are more items to load
  const [hasMore, setHasMore] = useState(true);




  //Runs the fetchData function whenever the page state changes.
  useEffect(() => {
    fetchData(page);
  }, [page]);




  const fetchData = async (pageNumber) => {
    
    //Check if loading: Prevents multiple fetch requests at the same time.
    if (loading) return;
    
    //Set loading to true: Indicates that the fetch operation has started.
    setLoading(true);

    try {
      const limit = 10; // Number of items per page

      // skip is used to skip the data that are already been shown on the page for ex 1 - 10 and now you will se data from 11-20
      const skip = pageNumber * limit; // Skip calculation for pagination
      const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`);
      const { products, total } = response.data;

      if (Array.isArray(products)) {
        setData((prevData) => [...prevData, ...products]);
        setHasMore(data.length + products.length < total);
      } else {
        console.error('Data is not an array:', products);
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreData = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Title: {item.title}</Text>
      <Text style={styles.text}>Price: {item.price}</Text>
    </View>
  );

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={'blue'}/>
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  loader: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default InfiniteScroll;

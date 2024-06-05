import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const {query} = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));
  
  useEffect(()=>{
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard $id={item.$id} video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
                <Text className="font-pmedium text-sm text-gray-100">
                  Search results for
                </Text>
                <Text className="font-psemibold text-2xl text-white">"{query}"</Text>
                <View className="mt-6 mb-8">
                  <SearchInput initialQuery={query}/>
                </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="No videos found for this search query"
            buttonCaption={"Create a video"}
            buttonURL={"/create"}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

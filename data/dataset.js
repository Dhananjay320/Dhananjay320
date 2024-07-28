import React ,{useRef,useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import ItemListDropdown from './buttonlist';
const categorylist = [
    { title: "general" },
    { title: "entertainment" },
    { title: "business" },
    { title: "health" },
    { title: "science" },
    { title: "sports" },
    { title: "technology" },
  ];
  constlist  = [
    { title: "National" },
    { title: "Internationa" }
  ];
export const Dataset = ({country,keyword,categary}) => {
return(
    <View>
        <Search/>
        <View>
            <ItemListDropdown/>
            <ItemListDropdown/>
        </View>
    </View>
);
};

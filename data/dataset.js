import React ,{useRef,useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import {Search} from './search' ;
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
  const countrylist  = [
    { title: "National" },
    { title: "Internationa" }
  ];
export const Dataset = ({country,keyword,category}) => {
return(
    <View>
         <Search onSearch={keyword} />
        <View style = {{flexDirection : 'row',alignItems:'center'}}>
            <ItemListDropdown items={categorylist} buttonTitle="category" dataset ={category}/>
            <ItemListDropdown items={countrylist} buttonTitle="National" dataset={country}/>
        </View>
    </View>
);
};

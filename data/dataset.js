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
  const countrylist  = [
    { title: "National" },
    { title: "Internationa" }
  ];
export const Dataset = ({country,keyword,categary}) => {
return(
    <View>
       {/* <Search/> */}
        <View style = {{flexDirection : 'row',alignItems:'center'}}>
            <ItemListDropdown items={categorylist} buttonTitle="categary" dataset ={categary}/>
            <ItemListDropdown items={countrylist} buttonTitle="National" dataset={country}/>
        </View>
    </View>
);
};

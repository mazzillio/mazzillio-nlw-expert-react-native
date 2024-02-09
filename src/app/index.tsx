import { CategoryButton } from '@/components/category'
import { Header } from '@/components/header'
import { View, FlatList} from 'react-native'
import {CATEGORIES} from "@/utils/data/products"
import { useState } from 'react'

export default function Home(){
  const [category, setCategory] = useState<String>(CATEGORIES[0]);
  function handleCategory(selectedCategory: string) {
    setCategory(selectedCategory)
  }
  return(
      <View className="flex-1 pt-8">
        <Header title='Faça seu pedido'/>
        
        <FlatList 
          data={CATEGORIES}
          keyExtractor={(item)=>item}
          renderItem={({ item })=> <CategoryButton title={item} isSelected={item === category} onPress={()=>handleCategory(item)}/>} 
          horizontal
          className="max-h-10 mt-5"
          showsHorizontalScrollIndicator={ false }
          contentContainerStyle={{ gap: 12 , paddingHorizontal: 20 }}
        />
          
      </View>
  )
}
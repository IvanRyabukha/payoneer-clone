import { FlatList } from 'react-native'
import React from 'react'
import { IMarketplaces } from '../../../data/marketplaces.data'
import ChipsListItem from './ChipsListItem';

interface Props {
  data: IMarketplaces[];
  onDeleted: (item: IMarketplaces) => void;
}

const ChipsList = ({ data, onDeleted }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ChipsListItem name={item.name} onDeleted={() => onDeleted(item)} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode='always'
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    />
  )
}

export default ChipsList;
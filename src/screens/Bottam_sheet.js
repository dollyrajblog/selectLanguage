// import React, {useCallback, useRef, useMemo} from 'react';
// import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
// import BottomSheet, {BottomSheetHandleProps } from '@gorhom/bottom-sheet';

// const Bottam_sheet = () => {
//   var bottomSheetRef = useRef(null);
//   const snapPoint = useMemo(() => ['10%', '50%', '70'], []);
//   const handlepressable = useCallback(index => {
//     console.log('handleSheetChanges', index);
//     bottomSheetRef.current?.snapToIndex(index);
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Button title="Snap To 90%" onPress={() => handlepressable(2)} />
//       <Button title="Snap To 50%" onPress={() => handlepressable(1)} />
//       <Button title="Snap To 25%" onPress={() => handlepressable(0)} />
//       <BottomSheet
//         enableHandlePanningGesture={true}
//         enableOverDrag={true}
//         enablePanDownToClose={true}
//         overDragResistanceFactor={2.5}
//         ref={bottomSheetRef}
//         index={0}
//         snapPoints={snapPoint}
//         onChange={handlepressable}></BottomSheet>
//     </View>
//   );
// };

// export default Bottam_sheet;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//   },
// });
import BottomSheet from 'react-native-simple-bottom-sheet';
import {View, Text, Dimensions, ScrollView} from 'react-native';
function Bottam_sheet() {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Text>Your content</Text>
      <BottomSheet
        isOpen
        outerContentStyle={{backgroundColor: 'red', margin:0}}
        innerContentStyle={{backgroundColor: 'green'}}
        lineContainerStyle={{backgroundColor: 'yellow'}}
        lineStyle={{backgroundColor: '#000', padding: 0}}
        sliderMinHeight={80}
        sliderMaxHeight={Dimensions.get('window').height * 0.4}
        wrapperStyle={{backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1}}>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
          <Text style={{paddingVertical: 5}}>Some random content</Text>
        </ScrollView>
      </BottomSheet>
    </View>
  );
}
export default Bottam_sheet;

import {Dimensions, FlatList, View} from 'react-native';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import React from 'react';
import Onboarding3 from './Onboarding3';

const OnboardingCarousel = ({navigation}: any) => {
  const {width, height} = Dimensions.get('window');
  const CarouselRef = React.useRef(null);
  let NextHandle = (val: number) => {
    console.log(' val )) ' + val);
    CarouselRef.current.scrollToIndex({index: val, animation: true});
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get('window').width;
    const currentIndex = Math.round(contentOffsetX / screenWidth);

    const nextOffsetX = (currentIndex + 1) * screenWidth;

    // Smoothly scroll to the next item on scroll end
    CarouselRef.current.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={['Onboarding1', 'Onboarding2', 'Onboarding3']}
        renderItem={({item, index}) => {
          return (
            <View style={{width: width, height: height}}>
              {index == 0 && (
                <Onboarding1 nextHandle={NextHandle} navigation={navigation} />
              )}
              {index == 1 && (
                <Onboarding2 nextHandle={NextHandle} navigation={navigation} />
              )}
              {index == 2 && <Onboarding3 />}
            </View>
          );
        }}
        pagingEnabled
        horizontal
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{flex: 1}}
        ref={CarouselRef}
        keyExtractor={item => item}
        // onScroll={handleScroll}
      />
    </View>
  );
};

export default OnboardingCarousel;

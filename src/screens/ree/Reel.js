import React, { useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Video, { VideoRef } from 'react-native-video';
import { AppImages } from '../../common/AppImages';


const Reel = () => {

    const videoRef = useRef(null);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentVideoIndex(viewableItems[0].index);
        }
    }, []);

    const viewabilityConfig = {
        //if the current item is 50% on screen till then it is active, otherwise the next item is active 
        itemVisiblePercentThreshold: 50,
    };

    var mediaJSON = [
        {
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
            "subtitle": "By Blender Foundation",
            "thumb": "images/BigBuckBunny.jpg",
            "title": "Big Buck Bunny"
        },
        {
            "description": "The first Blender Open Movie from 2006",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],
            "subtitle": "By Blender Foundation",
            "thumb": "images/ElephantsDream.jpg",
            "title": "Elephant Dream"
        },
        {
            "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"],
            "subtitle": "By Google",
            "thumb": "images/ForBiggerBlazes.jpg",
            "title": "For Bigger Blazes"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
            "subtitle": "By Google",
            "thumb": "images/ForBiggerEscapes.jpg",
            "title": "For Bigger Escape"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
            "subtitle": "By Google",
            "thumb": "images/ForBiggerFun.jpg",
            "title": "For Bigger Fun"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
            "subtitle": "By Google",
            "thumb": "images/ForBiggerJoyrides.jpg",
            "title": "For Bigger Joyrides"
        },
        {
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
            "subtitle": "By Google",
            "thumb": "images/ForBiggerMeltdowns.jpg",
            "title": "For Bigger Meltdowns"
        },
        {
            "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
            "subtitle": "By Blender Foundation",
            "thumb": "images/Sintel.jpg",
            "title": "Sintel"
        },
        {
            "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
            "subtitle": "By Garage419",
            "thumb": "images/SubaruOutbackOnStreetAndDirt.jpg",
            "title": "Subaru Outback On Street And Dirt"
        },
        {
            "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
            "subtitle": "By Blender Foundation",
            "thumb": "images/TearsOfSteel.jpg",
            "title": "Tears of Steel"
        },
        {
            "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
            "subtitle": "By Garage419",
            "thumb": "images/VolkswagenGTIReview.jpg",
            "title": "Volkswagen GTI Review"
        },
        {
            "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
            "subtitle": "By Garage419",
            "thumb": "images/WeAreGoingOnBullrun.jpg",
            "title": "We Are Going On Bullrun"
        },
        {
            "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
            "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
            "subtitle": "By Garage419",
            "thumb": "images/WhatCarCanYouGetForAGrand.jpg",
            "title": "What care can you get for a grand?"
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{  flex: 1 }}>
                <FlatList
                    pagingEnabled
                    data={mediaJSON}
                    renderItem={({ item, index }) => (
                        <>
                            <View style={{ height: Dimensions.get('window').height, }}>

                                <View style={{ position: 'absolute', top: 0, flexDirection: 'row', height: 50, zIndex: 1000, width: '100%' }}>
                                    <TouchableOpacity style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}><Image source={AppImages.reelArrow} /></TouchableOpacity>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>Reels</Text></View>
                                    <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center' }}><Image source={AppImages.reelCamera} /></TouchableOpacity>
                                </View>

                                <View style={{ position: 'absolute', zIndex: 1000, height: 282, width: 32, alignItems: 'center', justifyContent: 'space-evenly', bottom: 10, right: 10 }}>
                                    <View><Image source={AppImages.reelHeart} /></View>
                                    <View><Image source={AppImages.reelComment} /></View>
                                    <View><Image source={AppImages.reelShare} /></View>
                                    <View><Image source={AppImages.reelOption} /></View>
                                    <View><Image source={AppImages.music} /></View>
                                </View>

                                <View style={{ position: 'absolute', zIndex: 1000, height: 99, width: 299, bottom: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                        <View><Image source={AppImages.Avatart} /></View>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>your.name</Text></View>
                                        <View style={{ marginLeft: 10 }}><Image source={AppImages.blueTick} /></View>
                                        <TouchableOpacity style={{ marginLeft: 10, borderWidth: 1, borderRadius: 6, borderColor: 'white', height: 24, width: 60, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 12 }}>Follow</Text></TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 4 }}>
                                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>Lorem metus porttitor purus enim. fkfds lkdfsj...</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                                        <TouchableOpacity style={{ height: 26, width: 210, borderWidth: 1, borderColor: 'white', borderRadius: 26, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={AppImages.reelMusicIcon} />
                                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 12, marginLeft: 4 }}>Lorem metus  purus enim. fkfd</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 26, width: 96, borderWidth: 1, borderColor: 'white', borderRadius: 26, alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={AppImages.reelUserIcon} />
                                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 12, marginLeft: 4 }}>55Users</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Video
                                    ref={(ref) => (videoRef.current = ref)}
                                    source={{ uri: item.sources[0] }}
                                    style={{
                                        height: Dimensions.get("screen").height,
                                        // width: Dimensions.get("window").width,
                                    }}
                                    resizeMode="cover"
                                    muted={true}
                                    repeat={true}
                                    paused={index == currentVideoIndex?false:true}
                                    posterResizeMode={"contain"}
                                    volume={100}
                                />
                            </View>
                        </>
                    )}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                />
            </View>
        </SafeAreaView>
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: Dimensions.get('window').height,
    },
});

export default Reel

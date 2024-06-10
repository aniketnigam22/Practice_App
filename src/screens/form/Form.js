import React, { useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { AppImages } from '../../common/AppImages'
import ImageCropPicker from 'react-native-image-crop-picker'


const Form = () => {

    const [profilePic, setProfilePic] = useState('-')
    const [profilePic2, setProfilePic2] = useState('-')
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(true)
    const [editData, setEditData] = useState([])
    const [text, setText] = useState('')



    console.log('text value  : ', text)



    const addData = () => {
        if (text.trim().length > 0) {
            setData([...data, { id: data.length + 1, desc: text, media1: profilePic, media2: profilePic2 }]);
            setText('');

        }
    };

    const handleEdit = (item) => {
        setEdit(false)
        setEditData(item)
        console.log(`data in handleEdit after clicking edit button: ${item.desc + ' ' + item.id}`)
        console.log(item.desc.length)
        if (item.desc.length > 0) {
            setText(item.desc)
            setProfilePic(item.media1)
            setProfilePic2(item.media2)
        }
    }

    const handleSaveEdit = () => {
        if (editData && text.trim().length > 0) {
            const updatedData = data.map(item =>
                item.id === editData.id ? { ...item, desc: text, media1: profilePic, media2: profilePic2 } : item
            );
            setData(updatedData);
            setEdit(true);
            setEditData(null);
            setText('');
        }

        /*
        if (editData && text.trim().length > 0): This line checks if both editData and text are not null or empty. It ensures that there is data to be edited (editData) and that the new text (text) is not empty or just spaces.

         data.map(item => ...): This part of the code uses the map function to iterate over each item in the data array.

          item.id === editData.id: For each item in the data array, it checks if the id of the current item matches the id of the editData. This comparison determines whether the current item is the one being edited.

          { ...item, desc: text }: If the id of the current item matches the id of the editData, it creates a new object with the same properties as the original item (...item) but with the desc property updated to the new text (text). This means that it keeps all other properties of the original item unchanged, except for the desc property, which gets updated.

        item: If the id of the current item does not match the id of the editData, it simply returns the current item unchanged.

        const updatedData = data.map(...): Finally, all these transformations are applied to every item in the data array, resulting in a new array called updatedData where the item being edited has its desc property updated with the new text, and all other items remain unchanged.
        */
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        setEdit(true);
        setEditData(null);
        setText('');
    };


    const selectProfile = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setProfilePic(image.path)
            setBase64Src(`data:${image?.mime};base64,${image.data}`);
        });
    }

    const selectProfile2 = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setProfilePic2(image.path)
            setBase64Src(`data:${image?.mime};base64,${image.data}`);
        });
    }
    // console.log(editData);
    return (
        <SafeAreaView style={[mystyles.app_background, { backgroundColor: 'white' }]}>
            <ScrollView>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <TouchableOpacity style={styles.addButton} onPress={addData}>
                            <Text style={{ fontSize: 25, fontWeight: '900', color: 'white' }}>+</Text>
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Enter text here"
                            placeholderTextColor={'#AAB1BB'}
                            value={text}
                            onChangeText={setText}
                            style={[styles.textInputStyle,]}
                        />
                        <View style={styles.seleImagesContainer}>
                            <View>
                                <TouchableOpacity onPress={selectProfile} style={{ width: '30%', justifyContent: 'center', alignItems: 'center', }}>
                                    {profilePic == '-' ?
                                        <Image source={AppImages.profileImage} style={{ height: 60, width: 70, borderWidth: 2, borderColor: "grey" }} />
                                        :
                                        <Image source={{ uri: profilePic }} style={{ height: 60, width: 70, borderWidth: 2, borderColor: "#333" }} />
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.profilePic1Button} onPress={() => setProfilePic('-')}>
                                    <Text style={{ fontSize: 20, fontWeight: '900', color: 'white' }}>-</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity onPress={selectProfile2} style={{ width: '30%', justifyContent: 'center', alignItems: 'center', }}>
                                    {profilePic2 == '-' ?
                                        <Image source={AppImages.profileImage} style={{ height: 60, width: 70, borderWidth: 2, borderColor: "grey" }} />
                                        :
                                        <Image source={{ uri: profilePic2 }} style={{ height: 60, width: 70, borderWidth: 1, borderColor: "#333" }} />
                                    }
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.profilePic1Button} onPress={() => setProfilePic2('-')}>
                                    <Text style={{ fontSize: 20, fontWeight: '900', color: 'white' }}>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <View style={styles.list}>
                                <Text style={{ color: 'black', fontSize: 20 }}>{index + 1}</Text>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>{item.desc}</Text>
                                {item.media1 !== '-' && (
                                    <Image source={{ uri: item.media1 }} style={{ height: 60, width: 60, marginLeft: 10 }} />
                                )}
                                {item.media2 !== '-' && (
                                    <Image source={{ uri: item.media2 }} style={{ height: 60, width: 60, marginLeft: 10 }} />
                                )}
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        item?.id == editData?.id ? (
                                            <TouchableOpacity style={styles.editButton} onPress={handleSaveEdit}>
                                                <Text>Save Edit</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => {
                                                handleEdit(item)
                                            }} style={styles.editButton}>
                                                <Text>Edit</Text>
                                            </TouchableOpacity>
                                        )
                                    }

                                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                                        <Text>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputBox: {
        height: responsiveHeight(180),
        width: responsiveWidth(300),
        borderWidth: 3,
        borderStyle: 'dotted',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'mistyrose'
    },
    textInputStyle: {
        width: "80%",
        height: responsiveHeight(46),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        color: 'black',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 15,
        borderRadius: 7
    },
    listContainer: {
        backgroundColor: 'white',
        flex: 3
    },
    addButton: {
        backgroundColor: 'peru',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        position: 'absolute',
        left: "42%",
        marginTop: -15
    },
    seleImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
        marginLeft: 47

    },
    profilePic1Button: {
        backgroundColor: 'chocolate',
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    editButton: {
        height: 30,
        width: 80,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    },
    deleteButton: {
        height: 30,
        width: 80,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 10
    },
    list: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'mistyrose',
        alignItems: 'center',
        borderRadius: 20,
        padding: 5,
        marginHorizontal:20
    }
})

export default Form

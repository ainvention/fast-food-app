import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Horten",
        gps: {
            latitude: 59.41581392981225,
            longitude: 10.483137591422988
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 2,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 6,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Horten Pizzeria og Kebab",
            rating: 4.8,
            categories: [1, 5],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 59.4174290849257,
                longitude: 110.483814243504703
            },
            courier: {
                avatar: images.avatar_2,
                name: "Øyvind"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 1,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 5,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 2,
            name: "Horten Mikrobryggeri",
            rating: 4.8,
            categories: [2, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 59.41568213799139,
                longitude: 10.486979256629269
            },
            courier: {
                avatar: images.avatar_1,
                name: "Anna"
            },
            menu: [
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 7,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 3,
            name: "John's Hotdog Dell",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 59.41300729010295,
                longitude: 10.481464622273467
            },
            courier: {
                avatar: images.avatar_3,
                name: "Steinar"
            },
            menu: [
                {
                    menuId: 3,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Horten Sushi",
            rating: 4.8,
            categories: [6,8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 59.413760588316784,
                longitude: 10.48632457920789
            },
            courier: {
                avatar: images.avatar_4,
                name: "Kim"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Korea Sushi Sets",
                    photo: images.sushi,
                    description: "Korea style salmon with rice set",
                    calories: 100,
                    price: 50
                },
                {
                    menuId: 6,
                    name: "Fried Rice",
                    photo: images.fried_rice,
                    description: "A traditional Indian rice dish with beef",
                    calories: 300,
                    price: 8
                },
            ]
        },
        {
            id: 5,
            name: "Oscars Restaurant",
            rating: 4.8,
            categories: [4, 5, 6],
            priceRating: affordable,
            photo: images.salad,
            duration: "15 - 20 min",
            location: {
                latitude: 59.41566029305961,
                longitude: 10.4872474807644
            },
            courier: {
                avatar: images.avatar_4,
                name: "Levi"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Salad",
                    photo: images.salad,
                    description: "Divers fresh sald",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 5,
                    name: "Spicy Cold Noodle",
                    photo: images.spicy_cold_noodle,
                    description: "Noodles with vegetable and hot source",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 6,
                    name: "Fried Rice Chicken",
                    photo: images.fried_rice_chicken,
                    description: "A traditional rice dish with chicken",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 4,
                    name: "Fresh Vegetable and Fruit Salad ",
                    photo: images.salad,
                    description: "Finely chopped fruit and vegetables",
                    calories: 100,
                    price: 10
                }

            ]
        },
        {

            id: 6,
            name: "Halard Dessers",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.rice_cake_snack_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 59.41303455652014,
                longitude: 10.485670081766663
            },
            courier: {
                avatar: images.avatar_1,
                name: "Sara"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Fruit Juice",
                    photo: images.fruit_juice,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 9,
                    name: "Bean Ice Cake",
                    photo: images.bean_ice_cake,
                    description: "Shaved ice with red beans and fruit",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 9,
                    name: "Rice Cake Snack",
                    photo: images.rice_cake_snack_shop,
                    description: "Rice cake snack with fruit",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop:20 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        const carouselState = {
            activeIndex:0,
            carouselItems: [
            {
                title:"Item 1",
                text: "Text 1",
            },
            {
                title:"Item 2",
                text: "Text 2",
            },
            {
                title:"Item 3",
                text: "Text 3",
            },
            {
                title:"Item 4",
                text: "Text 4",
            },
            {
                title:"Item 5",
                text: "Text 5",
            },
          ]
        }

        // function _renderItem({item,index}){
        //     return (
        //       <View style={{
        //           backgroundColor:'floralwhite',
        //           borderRadius: 5,
        //           height: 250,
        //           padding: 50,
        //           marginLeft: 25,
        //           marginRight: 25, }}>
        //         <Text style={{fontSize: 30}}>{item.title}</Text>
        //         <Text>{item.text}</Text>
        //       </View>
    
        //     )
        // }
        
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                {/* <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text> */}
            {/* <Carousel
             layout={'default'} 
              data={carouselState.carouselItems}
              renderItem={_renderItem}
              sliderWidth={400}
              itemWidth={300}
            /> */}
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home
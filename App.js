import React from "react";
import ReactDom from "react-dom/client";

// const ReactComp = () =>(
//     <>
//     <h1>Hello World</h1>
//     <h1>This is react componenet</h1>
//     </>
// );
const Header = () => {
    return <div className="headerSection" id="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxnONLgBgcbMG675cs09vPk5I7-rwwmWVAw&s"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}
const restaurents =[
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "38638",
              "name": "Ujwal Bar & Restaurant",
              "cloudinaryImageId": "u4xbavsydku49u2gplcm",
              "locality": "KHM block",
              "areaName": "R.T. Nagar",
              "costForTwo": "₹597 for two",
              "cuisines": [
                "Beverages",
                "Biryani",
                "Chinese",
                "Coastal",
                "Desserts",
                "North Indian",
                "Seafood",
                "South Indian"
              ],
              "avgRating": 4.2,
              "parentId": "6468",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=17711415~p=0~adgrpid=17711415#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=38638~eid=676ecfca-1c7c-4cdd-bd82-9194c5b0f9f9~srvts=1725107659611~collid=83639",
              "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 6.9,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "6.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-31 23:55:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=38638&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "32738",
              "name": "Donne Biryani House",
              "cloudinaryImageId": "cgtfmodhd9gme13pblre",
              "locality": "Malleshwaram",
              "areaName": "Malleshwaram",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.2,
              "parentId": "338",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-31 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=32738&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "765550",
              "name": "Rajanna Military Hotel",
              "cloudinaryImageId": "d2d8fd9e8a2ad54e1ef6120daf084759",
              "locality": "Chord Road",
              "areaName": "Vijayanagar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani",
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "165284",
              "avgRatingString": "4.3",
              "totalRatingsString": "500+",
              "promoted": true,
              "adTrackingId": "cid=17602224~p=3~adgrpid=17602224#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=765550~eid=0f770288-a0ac-46e8-b14c-eff5cfca16e3~srvts=1725107659611~collid=83639",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-31 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=765550&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "18975",
              "name": "Nandhana Palace",
              "cloudinaryImageId": "0387817e239462fcfb98a1f568fa1a76",
              "locality": "Rajajinagar",
              "areaName": "Rajajinagar",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "2120",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-01 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Biryani.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=18975&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "690552",
              "name": "Narmada Chain of Restaurant",
              "cloudinaryImageId": "e0c24f9d6ae7ba3fc81c9b981afaec58",
              "locality": "Rajajinagar",
              "areaName": "Rajajinagar",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.5,
              "parentId": "410569",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=17602150~p=6~adgrpid=17602150#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=690552~eid=30e90011-4956-4271-9ee2-5f4d36eb0c2b~srvts=1725107659611~collid=83639",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-31 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "500+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=690552&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "3241",
              "name": "Meghana Foods",
              "cloudinaryImageId": "iivuhjc2mswi9lublktf",
              "locality": "Residency Road",
              "areaName": "Residency Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.6,
              "parentId": "635",
              "avgRatingString": "4.6",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 57,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-31 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Biryani.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "30529",
              "name": "Karama",
              "cloudinaryImageId": "d2174e76ee28d6798770ba69470a7200",
              "locality": "Frazer Town",
              "areaName": "Frazer Town",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Arabian",
                "Biryani",
                "Desserts",
                "Mughlai",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "9722",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=16781863~p=8~adgrpid=16781863#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30529~eid=2430b2d4-3eb0-44e5-a01e-f0b4797f13e7~srvts=1725107659611~collid=83639",
              "sla": {
                "deliveryTime": 59,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-09-01 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=30529&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "123985",
                "name": "Hyderabadi Biryani Hotel",
                "cloudinaryImageId": "6087ee14b9ede7e3d0b127fb75d919fc",
                "locality": "Malleshwaram",
                "areaName": "Malleshwaram",
                "costForTwo": "₹500 for two",
                "cuisines": [
                  "Hyderabadi",
                  "Biryani",
                  "Chinese",
                  "North Indian"
                ],
                "avgRating": 4.3,
                "parentId": "262113",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                  "deliveryTime": 42,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    },
                    "textBased": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "5K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=123985&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "528523",
                "name": "New Ambur Biryani Point",
                "cloudinaryImageId": "298d65e176f27d4ba02791b5c8eed812",
                "locality": "Koramangala",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Biryani",
                  "Chinese",
                  "North Indian"
                ],
                "avgRating": 4.3,
                "parentId": "318345",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=17617617~p=9~adgrpid=17617617#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=528523~eid=3cfa7ffe-9dfd-434e-89cf-99ea6bbb57fe~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 47,
                  "lastMileTravel": 6.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "45-50 mins",
                  "lastMileTravelString": "6.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    },
                    "textBased": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹75 OFF",
                  "subHeader": "ABOVE ₹299",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=528523&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "232567",
                "name": "Behrouz Biryani",
                "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
                "locality": "Central Hall",
                "areaName": "Seshadripuram",
                "costForTwo": "₹500 for two",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Kebabs",
                  "Mughlai",
                  "Lucknowi",
                  "Hyderabadi",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "1803",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 41,
                  "lastMileTravel": 1.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "1.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:59:00",
                  "opened": true
                },
                "badges": {
                  "textExtendedBadges": [
                    {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "description": "",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹150 OFF",
                  "subHeader": "ABOVE ₹1499",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=232567&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "47446",
                "name": "Tasty Paradise",
                "cloudinaryImageId": "vksrzldzuzwy42pzquha",
                "locality": "Malleshwaram",
                "areaName": "Malleshwaram",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Andhra",
                  "Chinese",
                  "Mughlai",
                  "North Indian",
                  "Seafood"
                ],
                "avgRating": 4.5,
                "parentId": "21526",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=17616054~p=10~adgrpid=17616054#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=47446~eid=18c765a0-1047-465c-92a9-a5088e818c82~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 41,
                  "lastMileTravel": 2.1,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "2.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:30:00",
                  "opened": true
                },
                "badges": {
                  "textExtendedBadges": [
                    {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "shortDescription": "options available",
                            "fontColor": "#7E808C",
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "description": ""
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "10% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "20+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=47446&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "41095",
                "name": "Nandhini Deluxe",
                "cloudinaryImageId": "b7df40343b2a9df3f275024aff13d5df",
                "locality": "Gandhi Nagar",
                "areaName": "Malleshwaram",
                "costForTwo": "₹550 for two",
                "cuisines": [
                  "Andhra",
                  "Biryani",
                  "Chinese",
                  "North Indian",
                  "South Indian"
                ],
                "avgRating": 4.3,
                "parentId": "2451",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                  "deliveryTime": 35,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    },
                    "textBased": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹100 OFF",
                  "subHeader": "ABOVE ₹299",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=41095&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "54698",
                "name": "Sri Maruthi Miltry Hotel",
                "cloudinaryImageId": "thgdxtl1fljjtx5ucnst",
                "locality": "Rajajinagar",
                "areaName": "Rajajinagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Biryani",
                  "South Indian"
                ],
                "avgRating": 3.9,
                "parentId": "20085",
                "avgRatingString": "3.9",
                "totalRatingsString": "10K+",
                "promoted": true,
                "adTrackingId": "cid=17617587~p=11~adgrpid=17617587#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=54698~eid=78e7a1b5-537c-44d3-ad5f-e525e70cccff~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 52,
                  "lastMileTravel": 4.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "50-55 mins",
                  "lastMileTravelString": "4.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.5",
                    "ratingCount": "10+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=54698&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "39936",
                "name": "New Govind Rao Military Hotel",
                "cloudinaryImageId": "wk9o2uqgxzshxrqpc2nx",
                "locality": "Majestic",
                "areaName": "Majestic",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Biryani"
                ],
                "avgRating": 3.6,
                "parentId": "146604",
                "avgRatingString": "3.6",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 42,
                  "lastMileTravel": 1.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "1.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 22:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "1K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=39936&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "485771",
                "name": "Sree Banashankari Donne Biryani",
                "cloudinaryImageId": "rg7bcjfljoynb1vrdylv",
                "locality": "Basaveshwara Nagar",
                "areaName": "Rajajinagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Biryani",
                  "South Indian",
                  "Indian",
                  "Chinese",
                  "Grill",
                  "Kebabs",
                  "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "291485",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=17602021~p=12~adgrpid=17602021#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485771~eid=a20b2511-5aa7-4b9f-9cef-466a89b9c60d~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 46,
                  "lastMileTravel": 4.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "45-50 mins",
                  "lastMileTravelString": "4.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "2.8",
                    "ratingCount": "50+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=485771&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "291533",
                "name": "New Ambur Biryani",
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/19/3a9a2b27-b586-40dd-8dc1-d694faa22e79_eefb0bed-9502-4c5a-89d2-6c7a03901b42.JPG",
                "locality": "Sudhama Nagar",
                "areaName": "AUSTIN TOWN",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Biryani"
                ],
                "avgRating": 4,
                "parentId": "145761",
                "avgRatingString": "4.0",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 47,
                  "lastMileTravel": 3.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "45-50 mins",
                  "lastMileTravelString": "3.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 22:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹250 OFF",
                  "subHeader": "ABOVE ₹999",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=291533&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "452720",
                "name": "Dindigul Thalappakatti",
                "cloudinaryImageId": "khlmfi8pzvffflofln82",
                "locality": "Basaveshwara Nagar",
                "areaName": "Basaveshwara Nagar",
                "costForTwo": "₹500 for two",
                "cuisines": [
                  "Biryani",
                  "Barbecue",
                  "South Indian",
                  "Chinese",
                  "North Indian"
                ],
                "avgRating": 4.2,
                "parentId": "332",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=17743813~p=13~adgrpid=17743813#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=452720~eid=42c3410a-42ff-4eb6-8352-fae441750347~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 53,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "50-55 mins",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    },
                    "textBased": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "1K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=452720&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "232572",
                "name": "The Biryani Life",
                "cloudinaryImageId": "oikznba4fjpwjdqlmaun",
                "locality": "Central Hall",
                "areaName": "Seshadripuram",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Biryani",
                  "Mughlai",
                  "Lucknowi",
                  "Hyderabadi",
                  "Kebabs",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 3.9,
                "parentId": "8496",
                "avgRatingString": "3.9",
                "totalRatingsString": "500+",
                "sla": {
                  "deliveryTime": 40,
                  "lastMileTravel": 1.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "1.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹159"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=232572&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "574263",
                "name": "Rahhams",
                "cloudinaryImageId": "ac83xdrhlmdwebnppg3l",
                "locality": "Pulikeshi Nagar",
                "areaName": "Frazer Town",
                "costForTwo": "₹700 for two",
                "cuisines": [
                  "Biryani",
                  "Mughlai",
                  "North Indian",
                  "Kebabs",
                  "Chinese",
                  "Seafood",
                  "Beverages"
                ],
                "avgRating": 4.5,
                "parentId": "2534",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=16057451~p=15~adgrpid=16057451#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=574263~eid=e88965d1-d84f-44e2-b54a-52d16c1da965~srvts=1725106859712~collid=83639",
                "sla": {
                  "deliveryTime": 58,
                  "lastMileTravel": 5.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "55-60 mins",
                  "lastMileTravelString": "5.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-09-01 01:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                    }
                  ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {
                      
                    },
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        }
                      ]
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=574263&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "410513",
                "name": "Karnataka Biriyani Point",
                "cloudinaryImageId": "d0b9aff304273e17df945a1d30f09627",
                "locality": "HN Layout",
                "areaName": "Malleshwaram",
                "costForTwo": "₹150 for two",
                "cuisines": [
                  "Indian",
                  "Biryani"
                ],
                "avgRating": 3.8,
                "parentId": "115218",
                "avgRatingString": "3.8",
                "totalRatingsString": "20+",
                "sla": {
                  "deliveryTime": 48,
                  "lastMileTravel": 2.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "45-50 mins",
                  "lastMileTravelString": "2.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-31 22:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    },
                    "textBased": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                
              },
              "cta": {
                "link": "swiggy://menu?restaurant_id=410513&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        }
]
const RestaurentCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId,cuisines,avgRating, id} = resData?.card.card.info;
    const {deliveryTime} = resData?.card.card.info.sla;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
    return <div className="res-card">
        <img className="res-img" src={CDN_URL+cloudinaryImageId}></img>
        <div className="res-content">
            <h2>{name}</h2>
            <h4 className="cuisines">{cuisines.join(" ,")}</h4>
            <h4>Avg Rating {avgRating}</h4>
            <h4>Delivery {deliveryTime} mins</h4>
        </div>
    </div>
}

const Body = () =>{
    return <div className="body">
        <div className="search">
            <input placeholder="seacrch here.."></input>
            <button className="searchButton">Seacrh</button>
        </div>
        <div className="res-container">
            {
                restaurents.map(
                    (restaurant) => <RestaurentCard key={restaurant.card.card.info.id} resData={restaurant}/>
                )           
            }
        </div>
    </div>
}
const AppLayOut = () =>{
    return <div className="AppLayOut">
        <Header/>
        <Body/>
    </div>
}
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayOut/>);
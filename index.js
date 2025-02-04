import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>


            </div>

        </div>
    )
};


const RestaurantCard = (props) =>{
    const {resData}=props;
   
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      
     }=resData?.card?.card?.info;
     const {
       deliveryTime 
     }=resData?.card?.card?.info?.sla;
    
    return(
        <div className="res-card" style={{
            backgroundColor :"#f0f0f0",
        }}>
            <img 
            className="res-logo"
            alt="res-card"
            src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }
             /> 
            <h3>{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    );
};
const resList=[
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "23678",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
          "locality": "5th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "63K+",
          "promoted": true,
          "adTrackingId": "cid=24846385~p=1~adgrpid=24846385#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=23678~eid=b9ba3042-61de-47fa-90a4-beb4dd94d24b~srvts=1738681394958~collid=83637",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-05 02:55:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
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
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179",
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24846385"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=23678&source=collection&query=Burger",
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
          "id": "341867",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_341867.JPG",
          "locality": "Forum Mall",
          "areaName": "Adugodi",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "6.5K+",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-05 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
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
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120",
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "link": "swiggy://menu?restaurant_id=341867&source=collection&query=Burger",
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
          "id": "958523",
          "name": "BIMBOX - Burger In My Box",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/11/8815eaed-d5ce-4dea-a45a-da77048e5683_c7b6bf9e-3a78-4658-a52a-a3490f1d3df0.png",
          "locality": "BTM",
          "areaName": "BTM",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Burgers"
          ],
          "avgRating": 4.3,
          "parentId": "304996",
          "avgRatingString": "4.3",
          "totalRatingsString": "159",
          "promoted": true,
          "adTrackingId": "cid=24662510~p=4~adgrpid=24662510#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=958523~eid=4ee5e8bf-4fcc-4938-bf2c-e7c7987cabc5~srvts=1738681394958~collid=83637",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-05 07:59:00",
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
            "subHeader": "AT ₹69",
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24662510"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=958523&source=collection&query=Burger",
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
          "id": "671928",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
          "locality": "7th Block",
          "areaName": "Koramangla",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.9K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-05 02:00:00",
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
            "subHeader": "AT ₹59",
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "link": "swiggy://menu?restaurant_id=671928&source=collection&query=Burger",
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
          "id": "830625",
          "name": "Ande ka funda",
          "cloudinaryImageId": "5727d32443b403d22b4869346d74193f",
          "locality": "5th Cross Road",
          "areaName": "BTM",
          "costForTwo": "₹249 for two",
          "cuisines": [
            "Chinese"
          ],
          "avgRating": 4.3,
          "parentId": "15677",
          "avgRatingString": "4.3",
          "totalRatingsString": "360",
          "promoted": true,
          "adTrackingId": "cid=24864303~p=5~adgrpid=24864303#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=830625~eid=2555ace5-fabb-4b41-8893-8c1db41de7c9~srvts=1738681394958~collid=83637",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-04 23:45:00",
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
              
            },
            "commsStyling": {
              
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24864303"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=830625&source=collection&query=Burger",
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
          "id": "231138",
          "name": "BOSS Burger",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/2bbce76d-267c-4b56-9a2b-d3e6a0d213fb_231138.jpg",
          "locality": "7th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Snacks"
          ],
          "avgRating": 4.3,
          "parentId": "8594",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.4K+",
          "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-04 23:30:00",
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
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            },
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "link": "swiggy://menu?restaurant_id=231138&source=collection&query=Burger",
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
          "id": "901671",
          "name": "Royal Box",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/28/57e85ac9-810c-4799-9fe5-89be472a3ab7_901671.jpg",
          "locality": "BTM Layout, B.B.M.P South",
          "areaName": "Eshwara Nelaya",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Burger",
            "Rolls & Wraps",
            "American",
            "Fast Food"
          ],
          "avgRating": 3.7,
          "parentId": "524330",
          "avgRatingString": "3.7",
          "totalRatingsString": "127",
          "promoted": true,
          "adTrackingId": "cid=24661769~p=6~adgrpid=24661769#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=901671~eid=3913ccf4-accf-48cd-b040-cba770a883b7~srvts=1738681394958~collid=83637",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-02-05 05:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120",
            "logoCtx": {
              "text": "BENEFITS"
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
              
            },
            "commsStyling": {
              
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
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "24661769"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=901671&source=collection&query=Burger",
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
  
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {
                resList.map(card => {
                  return <RestaurantCard key={card.id} resData={card} />
                })
              }
            </div>
        </div>
    );
};

const AppLayout = ()=>{
    return <div className="index">
        <Header />
        <Body />
    </div>
    
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

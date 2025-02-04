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
    return(
        <div className="res-card" style={{
            backgroundColor :"#f0f0f0",
        }}>
            <img 
            className="res-logo"
            alt="res-card"
            src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/22/0677b1c8-cce8-4302-a4fb-b60617363164_3ac65a75-1569-4663-8593-aa298ab24c05.jpg" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(" , ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>

        </div>
    );
};
const resObj={
        
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id":"5934",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "100K+",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-02-05 06:55:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  },
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
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "bolt!",
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
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
                  "rating": "4.2",
                  "ratingCount": "4.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            ,
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=5934&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          ,
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
    
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resData={resObj} />
                
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

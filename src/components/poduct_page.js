import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes ,//as Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//import "./App.css";
//import Weather from "./components/Weather";
import { SlButton, SlCard, SlRating, SlIcon} from '@shoelace-style/shoelace/dist/react';
import testImage from "../test-image.webp";
import {BsCart3, BsChevronDown, BsHeart, BsPerson, BsSearch, BsStopCircle} from "react-icons/bs"
//import {TiUser} from "react-icons/ti"
import shoekama_logo from "../images/shoelogo.png";

import p1 from "../product/p1.4.webp";
import p2 from "../product/p2.1.webp";
import p3 from "../product/p3.2.webp";
import p4 from "../product/p4.1.jpg";

import Head from "./header";
import ScrollSpace from "./scroll_space";
import { BrandProducts } from "./home_page";




function ProductPage() {
  const [imageLoading,imageLoaded] = useState("none");
  const params = useParams();
  const productImages = [SmallImage({active:true,key:0,num:Number(params.num)}),SmallImage({active:false,key:1,num:Number(params.num)}),SmallImage({active:false,key:2,num:Number(params.num)}),SmallImage({active:false,key:3,num:Number(params.num)}),SmallImage({active:false,key:4,num:Number(params.num)}),SmallImage({active:false,key:5,num:Number(params.num)})];
  var brands =  [
    BrandProducts({num:0,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f1",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:1,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:2,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f3",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:3,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:4,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:0,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:1,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:2,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:3,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}).Element(),
    BrandProducts({num:4,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f10"}).Element(),
    BrandProducts({num:0,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f11"}).Element(),
    BrandProducts({num:1,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f12"}).Element(),
    BrandProducts({num:2,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f13"}).Element(),
    BrandProducts({num:3,productName:"Chuck Taylor All Star Madison Low Top ",cost:129,imageSrc:"",styles:"",key:"f14"}).Element()
    
  ];
  var z = Number(params.num);
  return (
    <>
    <Head />
    <div className="wrapper" style={{
      marginTop:20,//position:"relative",
      //background:"red"
    }}>
    <div>
        <SlCard className="card-overview" style={{
          position:"sticky",top:90
        }}>
              {
                imageLoading==="none"?
                <div
                  className="skeletonspace"
                  style={{
                    width:"100%",
                    height:350,
                    marginTop:50,
                    borderRadius:7
                  }}
                >
                  
                </div>
                :null
              }
              <img
                onLoad={()=>{setTimeout(() => {
                  imageLoaded("block")
                }, 10000);}}
                slot="image"
                //src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                src={z==0?p4:z==1?testImage:z==2?p1:z==3?p2:p3}
                style={{
                  display:imageLoading,
                  borderRadius:7
                }}
                //className="product"
              />
              <div
                style={{
                  marginTop:15,
                  marginBottom:20,
                  display:"none"
                }}
                className="flex space-ar"
              ></div>
              {
                    //Different forms of the image shall be displayed here
                    //Depending on the number of images available for the product
                    //First image shall always be displayed first
                    //These imags shall also serve as means to change images of the current product
                    //Since the number of images available is not known, these spaces shall be created dynamiccally

                }
                
                <ScrollSpace 
                  maxPixelSpace={100}
                  maxFittingContent={5}
                  styles={{
                    marginTop:15,
                    marginBottom:0,
                    //background:"red"
                  }}
                  className="space-ar"
                  direction="row"
                  elements={productImages}
                  dotParentStyle={{
                    margin:5
                  }}
                />
                <div
                className="flex"
                style={{justifyContent:"flex-end",color:"red"}}
                >
                  <SlIcon name="heart"></SlIcon>
                </div>
          </SlCard>
        </div>
        <div className="wrapper max-width-500" style={{alignContent:"center",flexDirection:"column"}} >
        
          <div
            style={{
              paddingTop:0,paddingBottom:10,
              paddingLeft:5,paddingRight:5
            }}
          >
            <h3
            style={{
              textTransform:"uppercase",
              fontWeight:"normal",
              // marginLeft:5,
              // marginRight:5
            }}
            >
              Kids Vans Little Kids & Big Kid Asher Slip-On Skate Shoes 
            </h3>
            <div style={{fontWeight:600}} className="flex space-bt">
              <span>
                ${params.cost} <span style={{textDecoration:"line-through",fontWeight:500,color:"rgba(0,0,0,0.7)",fontSize:"80%"}}>$768.95</span>
              </span>
              <SlRating style={{color:"red",zIndex:0}}></SlRating>
            </div>
            <h5
              style={{
                textTransform:"capitalize",
                fontWeight:"600",
                // marginLeft:5,
                // marginRight:5
              }}
              
            >
              Brand: {params.brand}
              <span
                style={{
                  textTransform:"none",
                  fontWeight:"500",
                  marginLeft:20,
                  marginRight:5
                }}
              >
                {
                  0?"No reviews yet":
                  <>
                    23 reviews 
                    <button
                      style={{
                        padding:"1.3px 10px",
                        marginLeft:8,
                        borderRadius:2
                      }}
                      className="red-buttons"
                    >View reviews</button>
                  </>
                }
              </span>

            </h5>
            <div
              className="wrapper"
              style={{
                justifyContent:"flex-start"
              }}
            >
              <div
                style={{
                  fontWeight:"500",
                  marginRight:15,
                  fontSize:17
                }}
              >
                Available colors: </div>

              <div
                className="wrapper" style={{alignContent:"center",flexDirection:"column"}} 
              >
                <div
                  className="flex"
                  style={{
                  // alignContent:"center"
                  }}
                >
                    <div
                    style={{
                      width:10,
                      height:10,
                      //padding:5,
                      background:"#000",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer"
                    }}
                    ></div>
                    <div
                    style={{
                      width:10,
                      height:10,
                      background:"red",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer"
                    }}
                    ></div>
                    <div
                    style={{
                      width:10,
                      height:10,
                      background:"blue",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer"
                    }}
                    ></div>
                    <div
                    style={{
                      width:10,
                      height:10,
                      background:"yellow",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer"
                    }}
                    ></div>
                </div>
              </div>
            </div>
            <div
              className="wrapper"
              style={{
                justifyContent:"flex-start",
                marginTop:15
              }}
            >
              <div
                style={{
                  fontWeight:"500",
                  marginRight:15,
                  fontSize:17
                }}
              >Select size: </div>

              <div
                className="wrapper" style={{alignContent:"center",flexDirection:"column"}} 
              >
                <div
                  className="flex"
                  style={{
                    fontSize:15
                  }}
                >
                    <div
                    style={{
                      padding:"3px 5px",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer",
                      borderRadius:3,
                      background:"rgba(255, 0, 0,0.2)"
                    }}
                    className="selected"
                    >
                      38
                    </div>
                    <div
                    style={{
                      padding:"3px 5px",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer",
                      borderRadius:3,
                    }}
                    className="selected"
                    >
                      41
                    </div>
                    <div
                    style={{
                      padding:"3px 5px",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer",
                      borderRadius:3,
                    }}
                    className="selected"
                    >
                      42
                    </div>
                    <div
                    style={{
                      padding:"3px 5px",
                      marginRight:10,
                      border:"1px solid rgba(0,0,0,0.2)",
                      cursor:"pointer",
                      borderRadius:3,
                    }}
                    className="selected"
                    >
                      44
                    </div>
                </div>
              </div>
            </div>

            <button
            className="red-buttons flex"
              style={{
                width:"100%",
                margin:"30px 10px 30px 0px",
                padding:"10px 5px",
                display:"block",
                borderRadius:5
              }}
            >
              <BsCart3 fontSize={19} strokeWidth={1} />
              <span
                style={{
                  fontWeight:"700",
                  marginLeft:5,
                  fontSize:17
                }}
              >
                ADD TO CART
              </span>
            </button>
            <section style={{
              lineHeight:1.5
            }}>
                <h4
                  style={{
                    fontSize:17,

                  }}
                >Product Details</h4>
                <p>
                  Give him out-of-the-box skater style with the Vans Asher! Featuring a grippy outsole, slip-on design, and checkerboard pattern, these easy-on skate shoes keep him confident, on or off the board!
                  Durable canvas upper, easy slip-on entry, classic round toe, cushioned footbed for added comfort, vulcanized midsole for added durability, Vans Original Waffle outsole for grip, padded collar for added comfort, stitching details.
                </p>
            </section>
            <section style={{
              lineHeight:1.5
            }}>
                <h4
                  style={{
                    fontSize:17,

                  }}
                >Product Details</h4>
                <p>
                  Give him out-of-the-box skater style with the Vans Asher! Featuring a grippy outsole, slip-on design, and checkerboard pattern, these easy-on skate shoes keep him confident, on or off the board!
                  Durable canvas upper, easy slip-on entry, classic round toe, cushioned footbed for added comfort, vulcanized midsole for added durability, Vans Original Waffle outsole for grip, padded collar for added comfort, stitching details.
                </p>
            </section>
            <section style={{
              lineHeight:1.5
            }}>
                <h4
                  style={{
                    fontSize:17,

                  }}
                >Product Details</h4>
                <p>
                  Give him out-of-the-box skater style with the Vans Asher! Featuring a grippy outsole, slip-on design, and checkerboard pattern, these easy-on skate shoes keep him confident, on or off the board!
                  Durable canvas upper, easy slip-on entry, classic round toe, cushioned footbed for added comfort, vulcanized midsole for added durability, Vans Original Waffle outsole for grip, padded collar for added comfort, stitching details.
                </p>
            </section>
            <section style={{
              lineHeight:1.5
            }}>
                <h4
                  style={{
                    fontSize:17,

                  }}
                >Product Details</h4>
                <p>
                  Give him out-of-the-box skater style with the Vans Asher! Featuring a grippy outsole, slip-on design, and checkerboard pattern, these easy-on skate shoes keep him confident, on or off the board!
                  Durable canvas upper, easy slip-on entry, classic round toe, cushioned footbed for added comfort, vulcanized midsole for added durability, Vans Original Waffle outsole for grip, padded collar for added comfort, stitching details.
                </p>
            </section>
          </div>
        </div>
    </div>
    <h2 style={{
        textTransform:"capitalize",
        marginLeft:10,
        marginRight:10,
        marginTop:"4rem"
    }} >You might also like these</h2>
    <div className="flex" style={{marginLeft:10,marginBottom:30}}> <span className="vertical-line"></span> </div>
    <ScrollSpace dotSize={7} dotPosition="bottom" maxPixelSpace={350} maxFittingContent={5} direction="row" styles={{
        marginTop:10,
        marginLeft:10,
        marginRight:10
    }} elements={brands} marginBottom={30} />
    <footer style={{
          padding:"10px 10px 10px 10px",
          background:"rgba(255,0,0,0.03)",
          height:300,
          marginTop:60
    }}>
        <div style={{
            padding:"1px",
            background:"rgba(255,0,0,0.08)",
            margin:"60px 0.3rem 0px 0.3rem",
            display:"none"
        }}></div>
    </footer>
    <style>{css}</style>
  </>
  );
}
const css = `
.card-overview {
  max-width: 400px;
}

.card-overview small {
  color: var(--sl-color-neutral-500);
}

.card-overview [slot="footer"] {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
}
`;
function SmallImage({active,key,num}){
  const [imageLoading,imageLoaded] = useState("none");
  const activeImage = active?{
    borderBottomColor:"red",
    borderBottomWidth:4,
    borderBottomStyle:"solid"
  }:{};
  var z=num;
  return (
    <>
      {
        imageLoading==="none"?
        <div 
        key={key+`${key}`}
        className="skeletonspace"
        style={{
          width:70,
          height:55,
          marginRight:5,
          borderRadius:3
        }}
      >
        <span
        style={{
          paddingBottom:10,
          paddingTop:10,
          paddingLeft:35,
          paddingRight:35
        }}
        ></span>
      </div>
      :null
      }
      <div
      key={key}
        style={{
          display:imageLoading,
          maxWidth:80,
          marginRight:5,
          
        }}
      >
        <img
          onLoad={()=>{setTimeout(() => {
            imageLoaded("block")
          }, 10000);}}
          src={z==0?p4:z==1?testImage:z==2?p1:z==3?p2:p3}
          alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          style={{
            display:"block",
            width:70,
           ...activeImage,
           cursor:"pointer"
          }}
          className="small-image-hover"
        />
      </div>
    </>
  )
}






export default ProductPage;
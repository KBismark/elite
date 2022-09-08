import { useCallback, useMemo, useState } from "react";
import {
    BrowserRouter as Router,
    Routes ,//as Switch,
    Route,
    Link,
    useLocation,
    useParams
  } from "react-router-dom";
import sample_image1 from "../images/sample_shoe2.png";
import testImage from "../test-image.webp";
import TopSVG from "../images/top_svg";
import E21 from "../images/E21.png";
import E51 from "../images/E51.png";
import E61 from "../images/E61.png";
import birk_logo from "../images/birk_logo.png";
import vans_logo from "../images/vans_logo.png";
import converse from "../images/converse.png"
import vans from "../images/vans.png";
import birk from "../images/birk.png";
import addidas from "../images/addidas.png";
import nike from "../images/nike.png";
import puma from "../images/puma.png";
import ladies_image from "../images/laidies_shoes-flipped.png";
import kids_image from "../images/kids-flipped.png";
import gents_image from "../images/men-flipped.png";

import Head from "./header";
import SideBar from "./sidebar";
import { BrandProducts } from "./home_page";
import ScrollSpace from "./scroll_space";



import p1 from "../product/p1.4.webp";
import p2 from "../product/p2.1.webp";
import p3 from "../product/p3.2.webp";
import p4 from "../product/p4.1.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function multiplier(){
    return Math.random()+1;
};

var brands =  [
    BrandProducts({brand:"nike",category:"safety",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f1",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"slippers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"sneakers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f3",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"boots",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"heels",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"sandals",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"loafers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"sandals",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"heels",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"safety",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f10"}),
    BrandProducts({brand:"vans",category:"slippers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f11"}),
    BrandProducts({brand:"crocks",category:"boots",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f12"}),
    BrandProducts({brand:"madden",category:"heels",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f13"}),
    BrandProducts({brand:"addidas",category:"slippers",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f14"}),
    BrandProducts({brand:"converse",category:"sandals",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f187",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"safety",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f27y6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"loafers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f388",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"sneakers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"sandals",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"safety",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"heels",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"sneakers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"boots",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"safety",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f10"}),
    BrandProducts({brand:"madden",category:"heels",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f11"}),
    BrandProducts({brand:"crocks",category:"boots",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f12"}),
    BrandProducts({brand:"crocks",category:"sneakers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f13"}),
    BrandProducts({brand:"vans",category:"loafers",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f14"}),
    BrandProducts({brand:"madden",category:"safety",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f1",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"sneakers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"slippers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f3",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"slippers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"sneakera",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"loafers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"sneakers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"loafers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"loafers",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"heels",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f10"}),
    BrandProducts({brand:"madden",category:"boots",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f11"}),
    BrandProducts({brand:"addidas",category:"safety",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f12"}),
    BrandProducts({brand:"addidas",category:"slippers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f13"}),
    BrandProducts({brand:"vans",category:"safety",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f14"}),
    BrandProducts({brand:"madden",category:"boots",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f1",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"heels",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"sneakers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f3",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"heels",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"loafers",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"sneakers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"loafers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"slippers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"sneakers",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}),
    BrandProducts({brand:"converse",category:"loafers",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f10"}),
    BrandProducts({brand:"converse",category:"safety",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f11"}),
    BrandProducts({brand:"addidas",category:"boots",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f12"}),
    BrandProducts({brand:"nike",category:"slippers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f13"}),
    BrandProducts({brand:"madden",category:"heels",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f14"}),
    BrandProducts({brand:"crocks",category:"boots",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f1",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"slippers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"heels",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f3",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"loafers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f4",previousCost:129+(129*.2)}),
    BrandProducts({brand:"nike",category:"sneakers",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f5",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"boots",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f6",previousCost:129+(129*.2)}),
    BrandProducts({brand:"vans",category:"slippers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f7",previousCost:129+(129*.2)}),
    BrandProducts({brand:"crocks",category:"heels",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f8",previousCost:129+(129*.2)}),
    BrandProducts({brand:"madden",category:"sneakers",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f9",previousCost:129+(129*.2)}),
    BrandProducts({brand:"addidas",category:"slippers",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f10"}),
    BrandProducts({brand:"madden",category:"sneakers",num:0,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f11"}),
    BrandProducts({brand:"vans",category:"boots",num:4,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f12"}),
    BrandProducts({brand:"crocks",category:"slippers",num:2,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f13"}),
    BrandProducts({brand:"vans",category:"sneakers",num:1,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f14"}),
    BrandProducts({brand:"nike",category:"loafers",num:3,showButtons:true,productName:"Chuck Taylor All Star Madison Low Top ",cost:129*multiplier(),imageSrc:"",styles:"",key:"f2",previousCost:129+(129*.2)})
    
];
var Sider;
function CachedSideBar(props){
    if(Sider){
        return Sider;
    }else{
        Sider = SideBar(props);
        return Sider;
    }
}
export default function Category(){
    var selectors = {
        brand:["nike","addidas","converse","madden","vans","crocks"],
        price:[0,50,100,200],
        categories:["sneakers","boots","slippers","heels","sandals","loafers","safety"]
    };
    var tab = useParams().tab;
    var PrevNext = {fontSize:"1rem",textTransform:"uppercase",background:"rgba(113,113,113,0.1)",padding:"7px 10px",borderRadius:4};
    
    
    const [products,setProducts] = useState(brands);
   // const Sider = useMemo(SideBar,{changeContent:setProducts,elementsArr:brands});
    return (
        <>
            <Head/> 
            <div className="flex">
                <div style={{
                    //background:"red",
                    //position:"fixed",
                    //top:0,
                    //zIndex:15
                }} >
                    <CachedSideBar changeContent={setProducts} elementsArr={brands} />
                </div>
                
                <div className="wrapper" >
                    <div style={{width:"100%",paddingLeft:30,paddingRight:0,paddingTop:30,background:"rgb(214, 204, 201)",marginBottom:50}} className="flex space-bt" >
                        <div>
                            <div style={{fontSize:"2rem",textTransform:"uppercase"}}>{tab}{tab.endsWith("s")?"'":"'s"} SHOES</div>
                            <p>Buy all kinds of quality and affordable {tab} shoes</p>
                        </div>
                        {TopSVG}
                        {
                            tab=="kids"?
                            <img src={kids_image} style={{width:200}} />:
                            tab=="men"?
                            <img src={gents_image} style={{width:180,marginTop:-30}} />:
                            <img src={ladies_image} style={{width:180}} />
                        }
                    </div>
                    {
                        products.length>0?products.map(el=><el.Element/>):
                        <h2 style={{margin:"9rem 0px",textTransform:"uppercase"}} >No Product Matched. Please Refilter Results or Reload the Page</h2>
                    }
                    <div style={{width:"100%",padding:20,fontWeight:700}} className="flex space-bt" >
                        <div style={PrevNext} className="link flex" >
                            <BsArrowLeft fontSize={24} style={{
                                marginRight:5,
                                //marginTop:5
                            }} />
                            <span>Previous</span>
                        </div>
                        <div style={PrevNext} className="link flex" >
                            <span>Next</span>
                            <BsArrowRight fontSize={24} style={{
                                marginLeft:5,
                                //marginTop:5
                            }} />
                            
                        </div>
                    </div>
                </div>
                
            </div>

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
        </>
    );
}
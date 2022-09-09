import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import {SlButton, SlDivider, SlDropdown, SlIcon, SlMenu, SlMenuItem} from '@shoelace-style/shoelace/dist/react';
import testImage from "../test-image.webp";
import {BsCart3, BsCartCheckFill, BsCartFill, BsChevronDown, BsHeart, BsHeartFill, BsPerson, BsQuestionCircle, BsSearch, BsStopCircle, BsTruck} from "react-icons/bs"
//import {TiUser} from "react-icons/ti"
import shoekama_logo from "../images/shoelogo.png";


const movingHeartToRight = (
  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-balloon-heart-fill moving-heart-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
  </svg>
);
const movingHeartToLeft = (
  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-balloon-heart-fill moving-heart-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
  </svg>
);

function Head(){

   return (
      <>
          <header 
            className="flex space-ar"
            style={{
              background:"#fff",
              marginTop:10,
              padding:"10px 5px",
              borderBottom:"0.5px solid rgba(0,0,0,0.1)",
              position:"sticky",top:0,left:0,right:0,
              zIndex:10
            }}
          >
            <div className="blk-none-at-923">
              <img src={shoekama_logo} style={{
                width:100
              }} />
            </div>

            <div className="flexv" style={{
              //flexDirectio:"column",//justifyContent:"center"
            }}>
              <div className="flex" style={{flexDirection:"row",alignItems:"center"}} >
                <form className="flex" style={{
                  border:"1px solid rgba(0,0,0,0.1)",
                  alignItems:"center",
                  padding:"5px 20px",
                }}>
                  <BsSearch />
                  <input style={{
                    //width:300,
                    //padding:"5px 20px",
                    border:"0px solid #000",
                    paddingLeft:10,
                    outline:"none",
                    fontSize:16

                  }} 
                  className="search-input"
                    placeholder="Search your favourite shoes"
                  />
                </form>

                <div className="flx-none-at-923" style={{marginLeft:100,textTransform:"uppercase",fontSize:16}}>
                <SlDropdown>
                  <a className="flex link" slot="trigger" style={{marginLeft:15}}> <BsPerson fontSize={23}  className="link" /> <span style={{marginLeft:5}}>Account</span> </a>
                  <SlMenu style={{
                    background:"#fff",
                    padding:"10px 10px",
                    border:"0.5px solid rgba(0,0,0,0.1)",
                    borderRadius:8,
                    marginTop:10,
                    textTransform:"capitalize",
                    lineHeight:1.5,
                    width:210
                  }} 
                  className="drop-down"
                  >
                    <button
                        className="red-buttons flex"
                        style={{
                        width:"100%",
                        margin:"15px 0px",
                        padding:"7px 3px 7px 3px",
                        display:"block",
                        borderRadius:5
                        }}

                        onClick={()=>{
                          window.location.assign(document.getElementById("public_url").href+"register/login.html");
                        }}
                    >
                        
                        <span
                        style={{
                            fontWeight:"600",
                            marginLeft:5,
                            fontSize:15
                        }}
                        >
                        LOG IN 
                        </span>
                    </button>
                    <div className="link">  <span style={{marginLeft:5,fontWeight:600,fontSize:16}}>Your Cart</span> </div>
                    <div className="link">  <span style={{marginLeft:5,fontWeight:600,fontSize:16}}>Wishlist</span> </div>
                    <div className="link"> <span style={{marginLeft:5,fontWeight:600,fontSize:16}}>Orders</span> </div>
                    <SlDivider style={{
                      //background:"red",
                      border:"1px solid rgba(0,0,0,0.1)",
                      margin:"5px 0px"
                    }} />
                    <div style={{textTransform:"none",fontSize:"80%",marginBottom:5}}>
                      <BsQuestionCircle style={{marginRight:7,fontSize:"90%",display:"none"}} />
                      Don't have an account yet? <span  style={{color:"red",cursor:"pointer"}}
                      onClick={()=>{
                        window.location.assign(document.getElementById("public_url").href+"register/sign_up.html");
                      }}
                      >Sign up now</span> and 
                      start shopping.
                    </div>
                  </SlMenu>
                </SlDropdown>
                  <a className="flex link" style={{marginLeft:15}}>  {movingHeartToRight} <span >Wishlist</span> {movingHeartToLeft} </a>
                  <a className="flex link" style={{marginLeft:20}}> <BsCart3 fontSize={20} className="link"  /> <span style={{marginLeft:5}}>Cart</span> </a>
                </div>
              </div>

              <div className="flx-none-at-923" style={{
                marginTop:"10px",fontSize:16
              }}>
              <Link to="/" className="link"  >HOME</Link>
              <Link to="/category/men" className="link" style={{marginLeft:15}}> MEN </Link>
              <Link to="/category/women" state={{tabName:"WOMEN"}} className="link" style={{marginLeft:15}}> WOMEN </Link>
              <Link to="/category/kids" state={{tabName:"KIDS"}}  className="link" style={{marginLeft:15}}> KIDS </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> SNEAKERS </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> CASUAL </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> ADDIDAS </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> JORDAN </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> NIKE </Link>
              <Link to="/" className="link" style={{marginLeft:15}}> NEW BALANCE </Link>
              
              <Link to="/" className="flex link" style={{marginLeft:15,fontSize:16}}> <span style={{marginLeft:5}}>OTHER BRANDS</span> <BsChevronDown fontSize={17} strokeWidth={1} style={{marginTop:4,marginLeft:3}} /> </Link>
              </div>
            </div>
          </header>
      </>
   );
}


export default Head;
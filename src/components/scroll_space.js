import { useState } from "react";

function ScrollSpace({marginBottom,marginTop,maxPixelSpace,direction,elements,styles,className,maxFittingContent,dotSize,dotPosition,dotParentStyle}){
    var number_of_pages = Math.ceil(elements.length/maxFittingContent);
    var dots = [Dots({active:true,size:dotSize})];
    number_of_pages--;
    while(number_of_pages>0){
      dots.push(Dots({active:false,size:dotSize}));
      number_of_pages--;
    }
    if(!styles){styles={}}
    if(typeof (className)!=="string"){className=""}
    if(direction==="row"){
      var style = {
        overflowY:"hidden",
        overflowX:"auto",
        height:maxPixelSpace
      },space={height:maxPixelSpace*1.4};
    }else{
      var style = {
        overflowY:"auto",
        overflowX:"hidden",
        width:maxPixelSpace
      },space={width:maxPixelSpace*1.4};
    }
    if(dotPosition=="top"){
      var dotStyle = {
        margin:styles?.margin?styles.margin:"15px 15px 30px 15px"
      };
      if(styles?.marginTop){
        dotStyle.marginTop = styles.marginTop;
        styles.marginTop = 0;
      }else{
        dotStyle.marginTop = 15;
      }
    }
    return (
      <div 
        style={{
          //background:"rgba(255,0,0,0.04)",
          marginTop:typeof (marginTop)!=="undefined"?marginTop:"0px",
          marginBottom:typeof (marginBottom)!=="undefined"?marginBottom:"0px"
        }}
      >


        {
          dotPosition=="top"?
          <div className="wrapper"
          style={{
            justifyContent:"center",
            marginTop:dotStyle.marginTop,
            margin:dotStyle.margin,
            marginRight:15,
            marginBottom:30,
            marginLeft:15
          }}
        >
          {
            dots
          }
        </div>:null
        }

          <div
        style={{
          ...style
        }}
        >
          <div
            style={{
              ...styles,
              display:"flex",
              flexDirection:direction,
              ...style,
              ...space,
              justifyContent:maxFittingContent&&elements.length<maxFittingContent?"space-around":"flex-start"
            }}
            className={className}
          >
            {
              elements
            }
          </div>
        </div>
        {
          dotPosition!=="top"?
          <div className="wrapper"
          style={{
            justifyContent:"center",
            margin:"15px",
            ...dotParentStyle
          }}
        >
          {
            dots
          }
        </div>:null
        }
        
      </div>
    );
  }

function Dots({active,size}){
  const [activedot,setAsActiveDot] = useState(active);
  return (
    <span style={{
      borderRadius:"50%",
      //border:"0.5px solid rgba(0,0,0,0.5)",
      padding:size?size:4,
      background:activedot?"rgba(255,0,0,1)":"rgba(0,0,0,0.2)",
      marginRight:10,
      cursor:"pointer"
    }}></span>
  );
}


  export default ScrollSpace;
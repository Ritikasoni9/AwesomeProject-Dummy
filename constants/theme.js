
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');




export const COLORS = {
  playerPink:'#f1e3e3',
  lightGray: '#B2AAAA',
  DarkGray: '#707070',
  //white2: '#ffffff',
  //black: '#000000',
  black1: '#0a0a0a',
  blue: '#002395',
  pink: '#ED2939',
  //yellow:'#FBA803',
  msjbg:'#F5F5F5',

primary:"#C1272D",
yellow:"#FFD700",
green:'#62E136',
yellow1:"#E9F115",
 white:"#FFFFFF",
 black:"#010101",
 black_1:"#707070",
 black_2:"#A89E9E",
 black_3:"#B2AAAA",
 primary2:'#F6DFDF',

 border:'#002395',
 border1:'#F3F3F3',

 k1:"#FF8821",
 k2:"#F19B1F",
 k3:"#EF6F00",
 k4:"#E9F115",
 k5:"#62E136",
 k6:"#4F40E6",
 k7:"#7F45F3",
 k8:"#F68819",
 k9:"#F16015",
 k10:"#2E9C08",
 k11:"#E6A8AB",
 k12:"#A24E1D",
 k13:"#EE0707",
 k14:"#F38989",
 k15:"#002395"

};



export const SIZES = {
  width,
  height,
};




const appTheme = {SIZES, COLORS};

export default appTheme;

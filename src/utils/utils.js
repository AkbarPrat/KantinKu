import { Dimensions } from "react-native";
import { widthMobileUI, heightMobileUI } from "./constant";

export const responsiveWidth = (width) => {
    return Dimensions.get('window').width*width/widthMobileUI;
}

export const responsiveHeight = (height) => {
    return Dimensions.get('window').height*height/heightMobileUI;
}
import logoLetter from "@/assets/logoLetter.svg";
import door from "@/assets/door.svg";
import favorite from "@/assets/favorite.svg";
import home from "@/assets/home.svg";
import profile from "@/assets/profile.svg";
import activeDoor from "@/assets/white-door.svg";
import activeProfile from "@/assets/white-profile.svg";
import activeFavorite from "@/assets/white-favorite.svg";
import upload from "@/assets/upload.svg";
import square from "@/assets/square.svg";
import mypage from "@/assets/mypage.svg";
import activeMypage from "@/assets/white-mypage.svg";

interface IconList {
  [key: string]: string;
  logoLetter: string;
  door: string;
  favorite: string;
  home: string;
  profile: string;
  mypage: string;
  activeDoor: string;
  activeProfile: string;
  activeFavorite: string;
  activeMypage: string;
  upload: string;
  square: string;
}

export const iconList: IconList = {
  logoLetter,
  door,
  favorite,
  home,
  profile,
  mypage,
  activeDoor,
  activeFavorite,
  activeProfile,
  activeMypage,
  upload,
  square,
};

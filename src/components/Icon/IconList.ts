import logoLetter from "@/assets/logoLetter.svg";
import door from "@/assets/door.svg";
import favorite from "@/assets/favorite.svg";
import home from "@/assets/home.svg";
import profile from "@/assets/profile.svg";

interface IconList {
  [key: string]: string;
  logoLetter: string;
  door: string;
  favorite: string;
  home: string;
  profile: string;
}

export const iconList: IconList = {
  logoLetter,
  door,
  favorite,
  home,
  profile,
};

import Section_five from "@/components/Hompage/Section_five";
import Section_four from "@/components/Hompage/Section_four";
import Section_one from "@/components/Hompage/Section_one";
import Section_seven from "@/components/Hompage/Section_seven";
import Section_six from "@/components/Hompage/Section_six";
import Section_three from "@/components/Hompage/Section_three";
import Section_two from "@/components/Hompage/Section_two";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
      <Section_five />
      <Section_six />
      <Section_seven />
    </div>
  );
}

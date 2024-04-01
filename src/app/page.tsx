"use client";
import { Button } from "@/stories/Button";
import TwButton from "@/stories/TwButton";
import ShadcnBtn from "@/stories/ShadcnBtn";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState(false);
  const [emailTitle, setEmailTitle] = useState("Send Mail to Shdcn");

  const handleClick = () => {
    setEmail((prev) => !prev);
    setEmailTitle("Sending mail");
    setTimeout(()=>{
      setEmailTitle("Mail successfully sent") 
      setEmail((prev) => !prev);
    },3000)
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
      <p className="font-mono text-xl text-center"> Get a random color </p>
      <Button emoji="clap" />
      <TwButton title="TwButton" look="primary-outlined" />
      <ShadcnBtn
        title={emailTitle}
        loader={email}
        icon={Mail}
        variant="secondary"
        iconClassName="mr-3"
        className="my-3"
        onClick={handleClick}
      />
    </div>
  );
}

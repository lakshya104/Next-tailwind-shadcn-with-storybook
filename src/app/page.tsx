"use client";
import { Button } from "@/stories/Button";
import TwButton from "@/stories/TwButton";
import ShadcnBtn from "@/stories/ShadcnBtn";
import { Mail } from "lucide-react";
import { useState } from "react";
import { DataTableDemo, Payment } from "@/stories/Table";

const data: Payment[] = [
  {
    id: "cool",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "8nfhe5a7",
    amount: 598,
    status: "processing",
    email: "johndoe@example.com",
  },
  {
    id: "sdfr8943",
    amount: 123,
    status: "success",
    email: "emma.smith@example.com",
  },
];

export default function Home() {
  const [email, setEmail] = useState(false);
  const [emailTitle, setEmailTitle] = useState("Send Mail to Shdcn");

  const handleClick = () => {
    setEmail((prev) => !prev);
    setEmailTitle("Sending mail");

    setTimeout(() => {
      setEmailTitle("Mail sent successfully");
      setEmail((prev) => !prev);
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <p className="font-mono text-xl text-center"> Get a random color </p>
      <Button emoji="clap" />
      <TwButton title="TwButton" look="primary-outlined" />
      <ShadcnBtn
        title={emailTitle}
        loader={email}
        icon={Mail}
        variant="outline"
        iconClassName="mr-3"
        className="my-3 "
        onClick={handleClick}
      />
      <DataTableDemo data={data} />
    </div>
  );
}

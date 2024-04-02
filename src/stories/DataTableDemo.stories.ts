import { Meta, StoryObj } from "@storybook/react";
import { DataTableDemo, Payment } from "./Table";

const meta: Meta<typeof DataTableDemo> = {
  title: "Example/DataTableDemo",
  component: DataTableDemo,
};

export default meta;

type Template = StoryObj<typeof DataTableDemo>;



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

export const Table: Template = {
  args: {
    data: data,
  },
};

// export const Secondary: Template = {
//   args: {
//     variant: "secondary",
//     title: "Secondary",
//     icon: Mail,
//     iconClassName: "m-1",
//   },
// };

// export const Loading: Template = {
//   args: {
//     variant: "link",
//     title: "Loading",
//     icon: Mail,
//     loader: true,
//     iconClassName: "m-1",
//   },
// };

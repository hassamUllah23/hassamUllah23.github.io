import React from "react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { Space, Input, Button } from "antd";

type Props = {};

// const tektur = Tektur({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function Footer({}: Props) {
  return (
    <div className="flex flex-col w-full py-10 my-3 rounded-lg ">
      <div
        className={`flex flex-row justify-center align-center align-center gap-x-2 w-full`}
        style={{ fontSize: 16 }}
      >
        <p className="m-0 p-0">{`Made with`}</p>
        <GoHeart size={25} className="m-0 p-0" style={{color:"green"}}/>
        <p className="m-0 p-0">{`with`}</p>

        <Link
          className="m-0 p-0"
          isExternal
          href="https://github.com/nextui-org/nextui"
          showAnchorIcon
        >
          Next.js
        </Link>
      </div>

      <div className="flex flex-row justify-center py-2 w-full">
        <div className="w-2/3">
        {/* <InputField/> */}
        <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="Combine input and button" />
      <Button type="primary" color="green" style={{backgroundColor:'green'}}>Submit</Button>
    </Space.Compact>
        </div>
      </div>
    </div>
  );
}

// const { Search,, } = Input;

// const InputField: React.FC = () => (
//     <Search
//     style={{color:"green", backgroundColor:"green"}}
    
//       placeholder="Write a message..."
//       enterButton="Contact Me"
//       size="large"
//       color="primary"
//       // loading
//     />
// );

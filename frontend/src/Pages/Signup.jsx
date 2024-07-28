import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-slate-300">
      <div className=" text-center flex flex-col justify-center w-80 bg-white rounded-lg  p-2 px-4 h-max">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create the account"} />
        <InputBox placeholder="John" label={"First Name"} />
        <InputBox placeholder="Doe" label={"Last Name"} />
        <InputBox placeholder="john@email.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttontext={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  );
};

export default Signup;

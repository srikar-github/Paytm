
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-300">
      <div className=" h-max text-center rounded-lg bg-white w-80 p-2 px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning
          label={"Don't have an account?"}
          buttontext={"Sign up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};

export default Signin;

import DefaultBtn from "./components/default_btn";
import FunctionBtn from "./components/function_btn";
import ResultBtn from "./components/result_btn";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg min-h-[885px] h-full bg-black rounded-[40px] p-4">
      <div className="flex justify-center items-end min-h-full"></div>
        <div className="text-white mt-12"> 
          <h2 className="text-6xl text-right"> 64 + 128</h2>
          <p className="text-4xl text-right mt-12 mb-12"> 192</p>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 border-t-2 pt-6 justify-items-center ">
          <FunctionBtn name="C"></FunctionBtn>
          <FunctionBtn name="()"></FunctionBtn>
          <FunctionBtn name="%"></FunctionBtn>
          <FunctionBtn name="/"></FunctionBtn>

          <DefaultBtn name="7"></DefaultBtn>
          <DefaultBtn name="8"></DefaultBtn>
          <DefaultBtn name="9"></DefaultBtn>
          <FunctionBtn name="x"></FunctionBtn>

          <DefaultBtn name="4"></DefaultBtn>
          <DefaultBtn name="5"></DefaultBtn>
          <DefaultBtn name="6"></DefaultBtn>
          <FunctionBtn name="-"></FunctionBtn>

          <DefaultBtn name="1"></DefaultBtn>
          <DefaultBtn name="2"></DefaultBtn>
          <DefaultBtn name="3"></DefaultBtn>
          <FunctionBtn name="+"></FunctionBtn>

          <DefaultBtn name="+/-"></DefaultBtn>
          <DefaultBtn name="0"></DefaultBtn>
          <DefaultBtn name=","></DefaultBtn>
          <ResultBtn name="="></ResultBtn>
        </div>
        
    </div>
  );
}

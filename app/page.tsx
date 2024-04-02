import DefaultBtn from "./components/default_btn";
import FunctionBtn from "./components/function_btn";
import ResultBtn from "./components/result_btn";
import { DisplayContext, DisplayProvider } from "./contexts/DisplayContext";
import Display from "./components/display";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg min-h-[885px] h-full bg-black rounded-[40px] p-4">
      <div className="flex justify-center items-end min-h-full"></div>
      <DisplayProvider>
        {/* display */}

        <Display />

        {/* Teclado */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 border-t-2 pt-6 justify-items-center ">
          <FunctionBtn name="C"></FunctionBtn>
          <FunctionBtn name="()"></FunctionBtn>
          <FunctionBtn name="%"></FunctionBtn>
          <FunctionBtn name="/"></FunctionBtn>

          <DefaultBtn type="value" value={7} name="7"></DefaultBtn>
          <DefaultBtn type="value" value={8} name="8"></DefaultBtn>
          <DefaultBtn type="value" value={9} name="9"></DefaultBtn>
          <FunctionBtn name="x"></FunctionBtn>

          <DefaultBtn type="value" value={4} name="4"></DefaultBtn>
          <DefaultBtn type="value" value={5} name="5"></DefaultBtn>
          <DefaultBtn type="value" value={6} name="6"></DefaultBtn>
          <FunctionBtn name="-"></FunctionBtn>

          <DefaultBtn type="value" value={1} name="1"></DefaultBtn>
          <DefaultBtn type="value" value={2} name="2"></DefaultBtn>
          <DefaultBtn type="value" value={3} name="3"></DefaultBtn>
          <FunctionBtn name="+"></FunctionBtn>

          <DefaultBtn type="func" value={0} name="+/-"></DefaultBtn>
          <DefaultBtn type="value" value={0} name="0"></DefaultBtn>
          <DefaultBtn type="value" value="," name=","></DefaultBtn>
          <ResultBtn name="="></ResultBtn>
        </div>
      </DisplayProvider>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

import uis from "../../../constants/ui.constant";
import { addPrescription } from "../repositories/presc.repository";
import { useDispatch } from "react-redux";

export default function PrescEditHeader({ title, onAdd }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const goBack = () => {
    navigate(-1);
  };

  // const doneHandler = () => {
  //   // 등록 완료 로직
  //   dispatch(addPrescription(prescriptionData));
  //   console.log("등록 완료");
  //   navigate(-1);
  // }

  return (
    <div className="flex items-center justify-between p-2 shadow-md h-16">
      <button onClick={goBack} className="text-lg">
        <div className="px-3">
          <img src={uis.prev} alt="back_btn" className="w-2" /> 
        </div>
      </button>
      <div className="text-lg font-semibold">{title}</div>
      <div className="flex justify-center items-center">
        <button onClick={onAdd} className="font-bold text-white rounded-xl bg-warn02 px-2 py-[0.4rem] hover:bg-red-400">
            <div className="">
                등록
            </div>
        </button>
      </div>
    </div>
  );
}

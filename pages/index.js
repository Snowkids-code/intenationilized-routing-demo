import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function Home() {
  const [money, setMoney] = useState("40");

  //read value from the store (in file)
  const count = useSelector((state) => state.counter.value);

  //dispatch  actions (in navabr for currency)
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <Add className="icon" onClick={() => dispatch(increment())} />
      {money * count}
      <Remove className="icon" onClick={() => dispatch(decrement())} />
    </div>
  );
}

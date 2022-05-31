import { useState } from "react";

export default function Home() {
  const [money, setMoney] = useState("40");

  return <div className="home-container">{money}</div>;
}

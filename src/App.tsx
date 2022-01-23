function App() {
  let project: {
    member: string[];
    days: number;
    started: boolean;
  } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
  };
  let user = "kim";
  let age = undefined;
  let married = false;
  let 철수 = [user, age, married];

  const returnName = (x?: string) => {
    if (x) {
      console.log("안녕하세요" + x);
    } else {
      console.log("입력바람");
    }
  };

  const countNum = (x: number | string): number => {
    return x.toString().length;
  };

  const currentCen = (
    money: number,
    home: boolean,
    charming: string
  ): string | void => {
    let totalNum: number = 0;
    totalNum += money;
    if (charming === "상") {
      totalNum += 100;
    }
    if (home === true) {
      totalNum += 500;
    }
    if (totalNum >= 600) {
      console.log("결혼가능");
    }
  };
  currentCen(100, false, "상");

  return (
    <div className="App">
      <span>count</span>
      <span></span>
    </div>
  );
}

export default App;

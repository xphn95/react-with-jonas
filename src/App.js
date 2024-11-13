import { useEffect, useState } from "react"

export default function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  // useEffect 包含两个参数，一个初始化执行函数， 一个依赖数组
  useEffect(function () {
    getAdvice()
  }, [])
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  )
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  )
}

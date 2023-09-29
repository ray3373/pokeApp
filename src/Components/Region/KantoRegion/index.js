import React from "react"
import Header from "@/Components/Header"
import KantoPokemon from "./Kanto"

const page = () => {
  return (
  <>
    <Header />
    <div>This is Kanto Region</div>
    <KantoPokemon />
  </>
  )
}

export default page
// import { useState } from 'preact/hooks'
import './app.css'
import randomString from 'random-string'

export function App() {
  return (
    <>
      <h1>Package random-string</h1>
      <p>Evo ga: {randomString({length: 20})}</p>
    </>
  )
}

'use client'
 
import { createContext,useState } from 'react'
 
 interface ContextProps {
   message: String;
 }
export const ThemeContext = createContext<ContextProps>({
  message:"message"
})
 
export default function ThemeProvider({ children }) {
 const [message,setMessage] =useState("red")
 
  return <ThemeContext.Provider value={{ message }}>{children}</ThemeContext.Provider>
}
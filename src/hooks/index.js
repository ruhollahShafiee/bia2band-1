import { useContext, useEffect } from "react"
import AppContext from "../context"

export const useAppContext = () => useContext(AppContext)

export const useDebounce = (callback = () => { }, delay = 500, arrayDep = []) => {
    useEffect(() => {
        var debounced = setTimeout(() => callback(), delay)
        return () => clearTimeout(debounced)
    }, [...arrayDep])
}

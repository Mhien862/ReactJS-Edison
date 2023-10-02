import { useState } from "react"

const useToggle = () => {
    const [isToggle, setIsToggle] = useState(initialState)

    const onToggle = () => {
        setIsToggle(!isToggle);

    };
    return [isToggle, onToggle];
}
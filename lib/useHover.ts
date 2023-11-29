'use client'

import { useState } from "react";

export function useHover() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return [isHovered, handleMouseEnter, handleMouseLeave];
}

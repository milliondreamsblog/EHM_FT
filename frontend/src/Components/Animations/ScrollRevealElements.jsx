import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = (staggerAmount) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: staggerAmount,
        },
    },
});


export const itemVariants = (yOffset) => ({
    hidden: {
        opacity: 0,
        y: yOffset,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
});

/**
 * 
 * @param {React.ReactNode} children 
 * @param {string} [className] 
 * @param {number} [staggerAmount=0.15] 
 * @param {number} [yOffset=30] 
 * @param {boolean} [once=true] 
 */
const ScrollRevealElements = ({
    children,
    className,
    staggerAmount = 0.15,
    yOffset = 30,
    once = true,
}) => {
    return (
        <motion.div
            className={className}
            variants={containerVariants(staggerAmount)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >

            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    variants: itemVariants(yOffset),
                })
            )}
        </motion.div>
    );
};

export default ScrollRevealElements;
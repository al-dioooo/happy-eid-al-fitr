import { motion } from "motion/react"
import type { Variants } from "motion/react"
import { Heart } from "@/components/icons/fill"
import { NorthStar } from "@/components/icons/outline"
import IdulFitri from "@/components/idul-fitri"
import Ketupat from "@/components/ketupat"

const decoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5
        }
    }
}

const popEntranceVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    }
}

const decoFloatVariants: Variants = {
    idle: (customDelay: number = 0) => ({
        y: [0, -12, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: customDelay
        }
    })
}

const textPopVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (customDelay: number = 0) => ({
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 22,
            delay: customDelay
        }
    })
}

const textIdleVariants: Variants = {
    idle: {
        scale: [1, 1.015, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const logoIdleVariants: Variants = {
    idle: {
        y: [0, -5, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
}

const floatInVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 2.2
        }
    }
}

export default function Home() {
    return (
        <div className="flex flex-col relative items-center justify-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex bg-moroccan opacity-10">
                <div className="w-full bg-radial from-transparent via-lime-800/50 to-lime-800"></div>
            </div>

            <div className="absolute top-8 md:top-16 inset-x-6 md:inset-x-16 text-center z-10">
                <div className="text-white text-xs uppercase font-medium w-full justify-center flex items-center">With <div className="mx-1"><Heart className="w-3 h-3 text-red-500" /></div> by Al</div>
            </div>

            <h1 className="text-4xl font-bold inline-flex text-center flex-col text-lime-200 relative z-10">
                <motion.span
                    custom={0}
                    variants={textPopVariants}
                    initial="hidden"
                    animate="visible"
                    className="block"
                >
                    <motion.span animate="idle" variants={textIdleVariants} className="block">
                        Selamat
                    </motion.span>
                </motion.span>

                <motion.span
                    custom={0.2}
                    variants={textPopVariants}
                    initial="hidden"
                    animate="visible"
                    className="block"
                >
                    <motion.span animate="idle" variants={textIdleVariants} className="block">
                        Hari Raya
                    </motion.span>
                </motion.span>

                <motion.span
                    custom={0.4}
                    variants={textPopVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex justify-center mt-8"
                >
                    <motion.div
                        animate="idle"
                        variants={logoIdleVariants}
                        className="w-full"
                    >
                        <IdulFitri className="text-lime-100 w-full" />
                    </motion.div>
                </motion.span>

                <motion.div
                    className="absolute inset-0 pointer-events-none -z-1"
                    variants={decoContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={popEntranceVariants} className="absolute top-0 left-0">
                        <motion.div custom={0} variants={decoFloatVariants} animate="idle">
                            <Ketupat />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={popEntranceVariants} className="absolute -bottom-36 -right-16 md:-bottom-24 md:-right-36">
                        <motion.div custom={0.5} variants={decoFloatVariants} animate="idle">
                            <Ketupat className="w-48 h-auto -scale-x-100" />
                        </motion.div>
                    </motion.div>

                    <div className="absolute top-8 right-8">
                        <Heart className="w-12 h-12 rotate-12 text-lime-600" />
                    </div>

                    <div className="absolute bottom-6 left-16">
                        <Heart className="w-12 h-12 -rotate-16 text-lime-600" />
                    </div>

                    <motion.div variants={popEntranceVariants} className="absolute -top-16 right-16">
                        <motion.div custom={1.0} variants={decoFloatVariants} animate="idle">
                            <NorthStar className="w-24 h-24 -rotate-12 text-lime-100" />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={popEntranceVariants} className="absolute -bottom-16 left-8">
                        <motion.div custom={1.5} variants={decoFloatVariants} animate="idle">
                            <NorthStar className="w-24 h-24 rotate-12 text-lime-100" />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={popEntranceVariants} className="absolute -top-8 inset-x-0 flex justify-center -z-2">
                        <motion.div custom={2.0} variants={decoFloatVariants} animate="idle" className="w-full h-full flex justify-center">
                            <NorthStar strokeWidth={1} className="w-full h-full -rotate-24 text-lime-200 opacity-10" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </h1>

            <motion.h2
                className="text-3xl mt-16 font-black text-lime-300 relative z-10"
                initial="hidden"
                animate="visible"
                custom={1.0}
                variants={textPopVariants}
            >
                <motion.span
                    className="block"
                    animate={{
                        y: [0, -3, 0],
                        transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                >
                    1447H
                </motion.span>
            </motion.h2>

            <motion.div
                variants={floatInVariants}
                initial="hidden"
                animate="visible"
                className="absolute flex flex-col space-y-2 bottom-8 md:bottom-16 inset-x-6 md:inset-x-16 text-center z-10"
            >
                <p className="text-white font-medium">Selamat berhari raya, My Angel, Mi Casa, Mi Amor. Selamat berlibur. Wish You always happy. Mohon maaf lahir dan batin, atas segala hal buruk yang kulakukan. I <span className="text-red-400 font-bold">Love</span> You more than anything, always.</p>
            </motion.div>
        </div>
    )
}
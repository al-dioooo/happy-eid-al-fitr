import { Heart } from "@/components/icons/fill"
import { NorthStar } from "@/components/icons/outline"
import IdulFitri from "@/components/idul-fitri"
import Ketupat from "@/components/ketupat"

export default function Home() {
    return (
        <div className="flex flex-col relative items-center justify-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex bg-moroccan opacity-10">
                <div className="w-full bg-radial from-transparent via-lime-800/50 to-lime-800"></div>
            </div>
            <h1 className="text-4xl font-bold inline-flex text-center flex-col text-lime-200 relative">
                <span>Selamat</span>
                <span>Hari Raya</span>
                <span className="w-full flex justify-center mt-8"><IdulFitri className="text-lime-100 w-full" /></span>

                {/* Decorations */}
                <div className="absolute top-0 left-0">
                    <Ketupat />
                </div>
                <div className="absolute -bottom-36 -right-16 md:-bottom-24 md:-right-36 -z-1">
                    <Ketupat className="w-48 h-auto -scale-x-100" />
                </div>
                <div className="absolute top-8 right-8">
                    <Heart className="w-12 h-12 rotate-12 text-lime-600" />
                </div>
                <div className="absolute bottom-6 left-16">
                    <Heart className="w-12 h-12 -rotate-16 text-lime-600" />
                </div>
                <div className="absolute -top-16 right-16">
                    <NorthStar className="w-24 h-24 -rotate-12 text-lime-100" />
                </div>
                <div className="absolute -bottom-16 left-8">
                    <NorthStar className="w-24 h-24 rotate-12 text-lime-100" />
                </div>
                <div className="absolute -top-8 inset-x-0 flex justify-center -z-2">
                    <NorthStar strokeWidth={1} className="w-full h-full -rotate-24 text-lime-200 opacity-10" />
                </div>
            </h1>
            <h2 className="text-3xl mt-16 font-black text-lime-300">1447H</h2>

            <div className="absolute flex flex-col space-y-2 bottom-8 md:bottom-16 inset-x-6 md:inset-x-16 text-center">
                <p className="text-white font-medium">Selamat berhari raya, My Angel, Mi Casa, Mi Amor. Selamat berlibur. Wish You always happy. Mohon maaf lahir dan batin, atas segala hal buruk yang kulakukan. I <span className="text-red-400 font-bold">Love</span> You more than anything, always.</p>
            </div>
        </div>
    )
}
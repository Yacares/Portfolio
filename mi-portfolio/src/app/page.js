import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import foto from '../../public/foto.jpg'

export default function Home() {
  return (
    <div>
     

      <main>
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Oswald font-bold">Welcome to my portfolio!</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
              </li>
              <li>
                <a className=" bg-gradient-to-r from-red-700 to-red-500 text-white px-4 py-2 rounded-md ml-8 font-Oswald font-bold" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center font-Oswald p-10">
            <h2 className="text-5xl py-2 text-red-700 font-extrabold">Lautaro Rodriguez</h2>
            <h3 className="text-3xl py-2 font-bold">Web Developer</h3>
            <p>Texto resumiendome</p>
          </div>
          <div className="text-5xl text-red-700 p-10 mb-12 flex justify-center gap-16 py-3">
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
          <div className="relative mx-auto bg-red-700 rounded-full w-80 h-80 overflow-hidden">
            <Image src={foto} layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-2 font-bold">Skills</h3>
            <p className="text-md py-2 leading-8">dasdsadsadsadsdsds</p>
            <p className="text-md py-2 leading-8"> mas dasdsadsadsadsdsds</p>
          </div>
        </section>
      </main>
    </div>
  );
}

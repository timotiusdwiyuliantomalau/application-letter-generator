import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { TriangleDashed, WavesIcon } from "lucide-react";
import AbstractShape from "@/components/AbstractShape";
import { useEffect, useState } from "react";
import { getCountUsed, getCountUsers } from "@/lib/data";
import WaveLine from "@/components/WaveLine";
import ReviewUser from "@/Fragments/ReviewUser";
import { getCookie } from "@/lib/cookie";
import { handleGoogleSignIn, handleSignOut } from "@/Fragments/SignInGoogle";
export default function Homepage() {
  const [countUsed, setCountUsed] = useState(0);
  const [countUsers, setCountUsers] = useState(0);
  const [user, setUser] = useState<any>(null);
  const items = [
    "Opportunities don't happen. You create them.",
    "Choose a job you love, and you will never have to work a day in your life.",
    "The future depends on what you do today.",
    "The best way to predict your future is to create it.",
    "Every rejection is one step closer to the right opportunity",
  ];
  useEffect(() => {
    getCountUsed().then((data) => setCountUsed(data));
    getCountUsers().then((data) => setCountUsers(data));
    const data = getCookie("user");
    data && setUser(JSON.parse(data));
  }, []);

  return (
    <div className="flex flex-col justify-between gap-[8rem] text-center mx-auto relative">
      <div className="z-50 grid gap-10">
        <main className="bg-yellow-300 w-full flex justify-center items-center py-3 z-10 opacity-50 hover:opacity-100">
          <img className="w-12" src="./roket.gif" alt="" />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight tablet:text-5xl">
            My-AL
          </h1>
          {user ? (
            <div className="absolute right-5 w-10 group">
              <img
                className="rounded-full"
                src={user && user.photoURL}
                alt=""
              />
              <div
                className="absolute top-0 left-0 w-0 h-0 rounded-full opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm items-center flex font-bold bg-red-500 cursor-pointer"
                onClick={handleSignOut}
              >
                Logout
              </div>
            </div>
          ) : (
            <img
              onClick={handleGoogleSignIn}
              className="cursor-pointer absolute right-5 w-10 p-2 bg-white rounded-full"
              src="./google_logo.webp"
              alt=""
            />
          )}
        </main>
        <main className="flex flex-col gap-5 z-10 tablet:w-1/2 mx-auto p-5">
          <Badge className="bg-red-500 flex flex-col p-5 gap-5">
            <p className="text-3xl">
              a website that generates your{" "}
              <span className="relative ">
                Application Letter <WaveLine></WaveLine>
              </span>{" "}
              <span className="font-caveat italic">quickly</span>
            </p>
            <div className="flex gap-5 justify-center">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-4xl flex flex-col">
                  <p>{countUsers}</p>
                  <p className="text-lg -mt-2">USER</p>
                </span>
                <svg
                  className="w-[10em]"
                  fill="white"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"></path>
                  </g>
                </svg>
              </div>
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl flex flex-col font-bold">
                  <p>{countUsed}</p>
                  <p className="text-lg -mt-2">USED</p>
                </span>
                <svg
                  className="w-[10em]"
                  fill="white"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <a href="/generate">
              <Button className="bg-blue-500 text-white text-2xl">
                GENERATE NOW<img className="w-12" src="./generate-roket.gif" alt="" />
              </Button>
            </a>
          </Badge>
        </main>
      </div>
      {/* <main className="absolute top-0 right-0 ">
        <p>Profile</p>
      </main> */}
      <div className="absolute -top-[5rem] left-0 tablet:left-1/2 tablet:-top-[4rem] tablet:-translate-x-1/2 tablet:scale-150">
        <AbstractShape />
      </div>

      <main className="w-1/2 self-center">
        <span className="font-caveat italic text-xl flex flex-col">
          <WavesIcon className="text-black" />
          <p className="text-3xl">
            An application letter is one of the keys to success in being
            accepted for work. First opportunity to introduce yourself to the
            company. This shows your professionalism, motivation and interest in
            the position.
          </p>{" "}
          <TriangleDashed className="self-end" />
        </span>
      </main>
      <Marquee items={items} />
      <ReviewUser></ReviewUser>
    </div>
  );
}

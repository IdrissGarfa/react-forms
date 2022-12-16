import { useRouter } from "next/router";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Success() {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  const router = useRouter();

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <main
      className=" h-screen items-center flex justify-center relative"
    >
      <div className="bg-white rounded-lg w-1/2 font-semibold text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-semibold">
          Thanks for the email {router.query.name} ✨
        </h1>
        <p className="text-lg  text-gray-500">
          We have sent you an email over at {router.query.email}. We will get
          back to you as soon as we can!
        </p>
      </div>
      <Confetti numberOfPieces={pieces} />
    </main>
  );
}
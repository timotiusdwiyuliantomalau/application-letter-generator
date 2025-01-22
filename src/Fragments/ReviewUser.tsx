import { PlusCircle, SendHorizontalIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { addReview, getReviews } from "@/lib/data";
import { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookie";
import { dateNow } from "@/lib/date";

export default function ReviewUser() {
  const [textReview, setTextReview] = useState("");
  const [user, setUser] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);

  useEffect(() => {
    const data = getCookie("user");
    data && setUser(JSON.parse(data));
    getReviews().then((res) => setReviews(res));
  }, []);

  const handleReview = () => {
    if(!user) return alert("YOU MUST SIGN IN GOOGLE TO SUBMIT REVIEW!") ;
    addReview({
      review: textReview,
      user: { name: user.displayName, photo: user.photoURL },
      date: dateNow,
    }).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div className="relative">
        <svg className="top-0 opacity-12 w-full  absolute opacity-30 h-full"  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="gray" />
      <path d="M50 0 L50 50 M0 50 L50 50" stroke="black" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
    <main className="px-12 grid gap-2 py-10 relative z-20">
        <div className="flex justify-between items-center">
        <p className="font-birthstone italic font-bold text-2xl">Review by User:</p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <PlusCircle className="hover:text-slate-500 hover:cursor-pointer"></PlusCircle>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Fill Up Review</AlertDialogTitle>
            <Textarea
              onChange={(e) => setTextReview(e.target.value)}
            ></Textarea>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReview}>
              Send<SendHorizontalIcon></SendHorizontalIcon>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </div>
     
      <div className="">
        <div className="flex flex-wrap justify-center gap-3 z-10">
          {reviews &&
            reviews.map((review: any, i: number) => (
              <div key={i} className="flex gap-2 bg-white rounded-l-full rounded-r-full font-birthstone items-center">
                <img className="rounded-full" src={review.user.photo} alt="" />
                <div className="flex flex-col text-left pr-3 w-32">
                  <p>{review.user.name}</p>
                  <p className="text-sm text-slate-500 italic">{review.date}</p>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
    </div>
  );
}

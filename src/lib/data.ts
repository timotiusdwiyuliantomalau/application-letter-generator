import { app } from "../../service/firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
const firestore = getFirestore(app);
export async function getCountUsed(){
    const snapshot=await getDocs(collection(firestore,"count_used"));
    return snapshot.docs.length;
}
export async function addCountUsed() {
    await addDoc(collection(firestore,'count_used'),{data:""});
    const data=await getCountUsed();
    return {message:"PDF has been downloaded!",dataCount:data}
}
export async function addCountUsers(profile:any) {
    await addDoc(collection(firestore,'users'),{profile});
    const data=await getCountUsers();
    return {message:"Success! Account has been created!",usersCount:data}
}

export async function getCountUsers() {
    const snapshot=await getDocs(collection(firestore,"users"));
    return snapshot.docs.length;
}

export async function getReviews(){
    const snapshot=await getDocs(collection(firestore,"review"));
    return snapshot.docs.map((doc) => doc.data());
};
export async function addReview(review:any){
    await addDoc(collection(firestore,'review'),{...review});
    const reviews=await getReviews();
    return {message:"Success! Review has been submitted!",reviews};
}


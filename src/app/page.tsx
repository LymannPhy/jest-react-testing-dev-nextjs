import { Suspense } from "react";
import LoadingComponent from "./loading";
import { UserType } from "../types/users";
import type { Metadata } from "next";
import { UserCard } from "../components/cards/UserNavbarComponent";

async function fetchUsers() {
  const user = await fetch("https://dummyjson.com/users", {
    cache: "no-store"
  });
  const res = await user.json();
  return res.users;
}

export const metadata: Metadata = {
  title: "Home",
  description: "This is a place where you can find and buy any types of product",
  keywords: ["shop", "discount", "promotion", "coupon"],
  openGraph: {
    title: "Home",
    description: "This is a place where you can find and buy any types of product",
    images: [
      "https://i.pinimg.com/564x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg"
    ]
  }
};

async function Home() {
  const users = await fetchUsers();

  return (
    <>
      <div className="py-[3rem]">
        <div className="flex justify-center text-center flex-col flex-wrap gap-5">
          <h1 className="font-bold text-large uppercase">Enjoy buying every types of product here</h1>
          <h1 className="font-kantumruy">សូមស្វាគមន៍មកកាន់ CSTAD Online Shopping</h1>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-5">
          <Suspense fallback={<LoadingComponent />} >
            {users?.map((user: UserType) => (
              <UserCard
                key={user.id}
                image={user.image}
                username={user.username}
                email={user.email}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Home



"use client";
import Button from "@/components/button/Button";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MyBlogs from "@/components/MyBlogs";
import Link from "next/link";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/users/${session?.user.id}/blogs`);

        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    if (session?.user.id) fetchBlogs();
  }, [session?.user.id]);

  // if (!session?.user) {
  //   return router?.push("/dashboard/login");
  // }

  const handleEdit = async (blog) => {
    router.push(`/dashboard/update?id=${blog._id}`);
  };

  const handleDelete = async (blog) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this article?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/blogs/${blog._id.toString()}`, {
          method: "DELETE",
        });

        const filteredBlogs = blogs.filter((b) => b._id !== blog._id);

        setBlogs(filteredBlogs);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="w-full min-h-[70vh] py-10">
      <div className="w-5/6 mx-auto mb-10 flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-widest font-bold">
            My Blogs
          </h1>
          <h3 className="md:text-lg lg:text-xl my-2 tracking-widest font-semibold">
            Welcome to your personalized blogs page
          </h3>
        </div>

        {/* button */}
        <div>
          {session?.user ? (
            <Button text={"Create New Blog"} url={"/dashboard/new"} />
          ) : null}
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {/* created articles */}
          {blogs.length === 0 ? (
            <>
              <div className="w-5/6 md:w-1/2  mx-auto flex  items-center justify-center rounded-md bg-gray-200 p-4">
                {!session?.user ? (
                  <p className="text-sm md:text-base lg:text-lg leading-[30px] my-2 tracking-wider">
                    You are not signed in! Create Account or sign in to access
                    your dashboard
                    <span className="underline mx-3 text-blue-600   font-semibold cursor-pointer">
                      <Link href="/dashboard/login">
                        {" "}
                        Click here to Sign In
                      </Link>
                    </span>
                  </p>
                ) : (
                  <p className="text-sm md:text-base lg:text-lg  my-2 tracking-wider">
                    You do not have articles at the moment...Click the button
                    above to create new articles
                  </p>
                )}
              </div>
            </>
          ) : (
            <MyBlogs
              data={blogs}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default page;

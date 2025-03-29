"use client";
import FormTask from "@/components/FormTask";
import ShowTasks from "@/components/ShowTasks";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <FormTask />
          </div>

          {/* Task Display Section */}
          <div className="w-full md:w-1/2">
            <ShowTasks />
          </div>
        </div>
      </div>
    </div>
  );
}

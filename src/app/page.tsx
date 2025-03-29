"use client";
import FormTask from "@/components/FormTask";
import ShowTasks from "@/components/ShowTasks";
import { useRouter, useParams} from "next/navigation";

export default function Home() {
  const router = useRouter();

  
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex justify-between  ">
        <div className="">
          <FormTask></FormTask>
        </div>
        <div className="">
          <ShowTasks></ShowTasks>
        </div>
      </div>
    </div>
  );
}

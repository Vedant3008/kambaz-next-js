import { redirect } from "next/navigation";

export default function CoursesPage({ 
  params 
}: { 
  params: { cid: string } 
}) {
  const cid = params.cid;
  redirect(`/Courses/${cid}/Home`);
}
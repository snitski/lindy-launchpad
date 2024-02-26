import { Separator } from "@/components/ui/separator"

export default function MentorshipProgram() {
  return (
    <div className="container text-center">
      <h2>
      Our mentoring program pairs up Lindenhurst High School students and alumni. Our matches are personalized 
      according to the alumni&#39;s experience and the student&#39;s interest.
      </h2>
      
      <div className="flex items-center justify-center space-x-4 mt-10">
        <div className="max-w-56 text-center">
          <h2>Mentors</h2>
          <p>
            You must be committed to providing five months of mentoring where you will meet with your mentee at 
            least once a month. We encourage you to meet with your mentee as often as you can and be available 
            to answer their questions outside of your meeting time.
          </p>
        </div>
        <Separator orientation="vertical" className="h-52 w-0.5" />
        <div className="max-w-56 text-center">
          <h2>Mentees</h2>
          <p>
            You will receive 5 months of mentoring, with one mandatory meeting a month. We encourage you to ask 
            your mentor if you would like to meet more often and communicate with them often. Your mentor can help 
            you with college applications, choosing courses, and more.
          </p>
        </div>
      </div>  
    </div>
    );
}
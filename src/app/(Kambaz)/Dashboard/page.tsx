import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" alt="React" width={200} height={150} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.png" alt="Node" width={200} height={150} />
            <div>
              <h5>CS5678 Node.js</h5>
              <p className="wd-dashboard-course-title">
                Backend Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image src="/images/python.jpeg" alt="Python" width={200} height={150} />
            <div>
              <h5>CS9101 Python</h5>
              <p className="wd-dashboard-course-title">
                Data Science and AI
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1121" className="wd-dashboard-course-link">
            <Image src="/images/java.jpeg" alt="Java" width={200} height={150} />
            <div>
              <h5>CS1121 Java</h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/3141" className="wd-dashboard-course-link">
            <Image src="/images/mongodb.jpeg" alt="MongoDB" width={200} height={150} />
            <div>
              <h5>CS3141 MongoDB</h5>
              <p className="wd-dashboard-course-title">
                NoSQL Database Design
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/5161" className="wd-dashboard-course-link">
            <Image src="/images/angular.png" alt="Angular" width={200} height={150} />
            <div>
              <h5>CS5161 Angular</h5>
              <p className="wd-dashboard-course-title">
                Frontend Framework Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/7181" className="wd-dashboard-course-link">
            <Image src="/images/express.png" alt="Express" width={200} height={150} />
            <div>
              <h5>CS7181 Express.js</h5>
              <p className="wd-dashboard-course-title">
                Web API Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
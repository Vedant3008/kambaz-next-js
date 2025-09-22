import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" defaultValue="Vedant_Shah" /><br/>
      <input placeholder="password" type="password" className="wd-password" defaultValue="password123" /><br/>
      <input placeholder="verify password" type="password" className="wd-password-verify" defaultValue="password123" /><br/>
      <Link href="/Account/Profile"> Sign up </Link><br />
      <Link href="/Account/Signin"> Sign in </Link>
    </div>
  );
}
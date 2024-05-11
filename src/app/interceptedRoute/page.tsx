import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        Use of intercepting route , intercepted route is used to show page without changing route
        <Link href="/interceptedRoute/f2">F2</Link>
      </div>
    </>
  );
}
import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"


const NotFoundPage = () => {
  return (
    <section className="">
      <FaExclamationTriangle  className="mb-4"></FaExclamationTriangle>
      <h1 className="mb-4">404 Not Found</h1>
      <p className="mb-5">This page does not exist</p>
      <Link
        to="/"
        className="rounded-md px-3 py-2 mt-4"
        >Go Back</Link>
    </section>
  )
}

export default NotFoundPage
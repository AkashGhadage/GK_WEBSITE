import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Services
      </h1>

      {/* Services list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link
          to="computer-touch"
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Computer Touch
          </h2>
          <p className="text-gray-600">
            Modern jewellery designing & finishing
          </p>
        </Link>

        <Link
          to="jewellery-repair"
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Jewellery Repair
          </h2>
          <p className="text-gray-600">
            Repair & restoration of ornaments
          </p>
        </Link>

        <Link
          to="metal-testing"
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Metal Testing
          </h2>
          <p className="text-gray-600">
            Accurate purity testing
          </p>
        </Link>
      </div>

      {/* Child pages will render here */}
      <Outlet />
    </div>
  );
};

export default Services;

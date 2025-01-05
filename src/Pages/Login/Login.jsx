import Lottie from "lottie-react";
import registerLottie from "../../assets/Lottie/registerLottie.json";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";

const Login = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>Bangaliana Bites || Login</title>
      </Helmet>
      <div className="relative bg-loginBg min-h-screen flex justify-center items-center bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Login Card */}
        <div className="relative bg-loginBg z-10 hero max-w-7xl w-full shadow-2xl  lg:rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* Lottie Animation */}
            <div className="text-center w-full lg:w-1/2">
              <Lottie animationData={registerLottie} />
            </div>

            {/* Login Form */}
            <div className="card w-full lg:w-1/2 max-w-5xl p-6">
              {/* Header */}
              <div className="px-6 py-4 text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-800">
                  Login for a Taste of Tradition
                </h2>
                <p className="text-gray-600">
                  Step into the world of Bangaliana Bites. With every login,
                  enjoy hassle-free access to your orders and curated meal
                  options.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input focus:border-none input-bordered"
                    name="email"
                    required
                    aria-label="Enter your email"
                  />
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input focus:border-none input-bordered"
                    name="password"
                    required
                    aria-label="Enter your password"
                  />
                  <label className="label">
                    <a
                      href="/forgot-password"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                {/* Login Button */}
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full">Login</button>
                </div>
                <div className="text-center text-yellow-600">
                  <p>
                    New here? Create a New{" "}
                    <Link
                      className="underline font-semibold text-green-500"
                      to="/register"
                    >
                      Account
                    </Link>{" "}
                  </p>
                </div>
              </form>
              {/* Social Login */}
              <div className="flex flex-col items-center mt-6">
                {/* Divider */}
                <div className="divider text-gray-500 text-sm">OR</div>

                {/* Social Buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                  {/* Google Button */}
                  <button
                    className="btn btn-outline btn-accent rounded-full hover:bg-accent hover:text-white transition duration-300"
                    aria-label="Sign in with Google"
                  >
                    <FaGoogle size={20} />
                  </button>
                  {/* Facebook Button */}
                  <button
                    className="btn btn-outline btn-secondary  rounded-full hover:bg-secondary hover:text-white transition duration-300"
                    aria-label="Sign in with Facebook"
                  >
                    <FaFacebook size={20} />
                  </button>
                  {/* GitHub Button */}
                  <button
                    className="btn btn-outline btn-secondary  rounded-full hover:bg-secondary hover:text-white transition duration-300"
                    aria-label="Sign in with GitHub"
                  >
                    <FaGithub size={20} />
                  </button>
                  {/* Twitter Button */}
                  <button
                    className="btn  btn-outline btn-secondary rounded-full hover:bg-secondary hover:text-white transition duration-300"
                    aria-label="Sign in with Twitter"
                  >
                    <FaTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

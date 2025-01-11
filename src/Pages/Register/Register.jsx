import Lottie from "lottie-react";
import registerLottie from "../../assets/Lottie/registerLottie.json";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import { Cloudinary } from "@cloudinary/url-gen";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser, googleLogin, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  if (loading) {
    return <Loader></Loader>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      isAdmin: false,
    };
    // console.log(userInfo);

    createUser(data.email, data.password).then((result) => {
      // console.log(result.user);

      axiosPublic.post("/users", userInfo).then((result) => {
        console.log(result.data);
      });
    });
  };

  //   console.log(watch("name"));

  // Social Login
  const handlegoogleLogin = () => {
    googleLogin().then(({ user }) => {
      console.log(user.displayName);
    });
  };
  return (
    <>
      <Helmet>
        <title>Bangaliana Bites || Register</title>
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
                  Join the Bangaliana Family
                </h2>
                <p className="text-gray-600">
                  Sign up today and start your journey to explore the authentic
                  flavors of Bengal. Get personalized meal suggestions and
                  exclusive offers!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input focus:border-none input-bordered"
                    name="name"
                    {...register("name", { required: true })}
                    aria-label="Enter your name"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-500 mt-1" role="alert">
                      Name is required
                    </p>
                  )}
                </div>

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
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-label="Enter your email"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-500 mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
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
                    {...register("password", { minLength: 5, maxLength: 20 })}
                    aria-label="Enter your password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Re enter your password"
                    className="input focus:border-none input-bordered"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                    aria-label="Enter your password"
                  />
                </div>

                {/* Login Button */}
                <div className="form-control mt-6">
                  <input
                    value="Register"
                    type="submit"
                    className="btn btn-primary w-full"
                  />
                </div>

                <div className="text-center text-yellow-600">
                  <p>
                    Already Have An Account? Please{" "}
                    <Link
                      className="underline font-semibold text-green-500"
                      to="/login"
                    >
                      Login
                    </Link>{" "}
                  </p>
                </div>
              </form>
              {/* Social Login */}
              <div className="flex flex-col items-center mt-1">
                {/* Divider */}
                <div className="divider text-gray-500 text-sm">OR</div>

                {/* Social Buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                  {/* Google Button */}
                  <button
                    onClick={handlegoogleLogin}
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

export default Register;

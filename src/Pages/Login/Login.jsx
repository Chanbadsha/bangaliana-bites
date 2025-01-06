import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/loginLottie.json";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading, googleLogin, setLoading, emailLogin, setUser } = useAuth();
  const [validate, setValidate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setValidate(false);
    loadCaptchaEnginge(6);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleValidation = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue) === true) {
      setValidate(true);
    }
  };

  const onSubmit = (data) => {
    if (!validate) {
      alert("Captcha doesn't match");
      return;
    }
    // console.log(data);
    emailLogin(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state?.pathname || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Social Login
  const handlegoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result);
      setLoading(false);
      navigate(location.state?.pathname);
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Bangaliana Bites || Login</title>
      </Helmet>
      <div className="relative bg-loginBg min-h-screen flex justify-center items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative bg-loginBg z-10 hero max-w-7xl w-full shadow-2xl lg:rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-full md:w-1/2">
              <Lottie animationData={loginLottie} />
            </div>
            <div className="card w-full lg:w-1/2 max-w-5xl p-6">
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input focus:border-none input-bordered"
                    {...register("email", { required: "Email is required" })}
                    aria-label="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input focus:border-none input-bordered"
                    {...register("password", {
                      required: "Please enter your password",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    aria-label="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  <label className="label">
                    <a
                      href="/forgot-password"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    placeholder="Enter the captcha"
                    className="input focus:border-none input-bordered"
                    onBlur={handleValidation}
                    aria-label="Enter the captcha"
                  />
                  {errors.captcha && (
                    <p className="text-red-500">{errors.captcha.message}</p>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button
                    disabled={!validate}
                    className="btn btn-primary w-full"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-yellow-600">
                  <p>
                    New here? Create a{" "}
                    <Link
                      className="underline font-semibold text-green-500"
                      to="/register"
                    >
                      New Account
                    </Link>
                  </p>
                </div>
              </form>

              {/* Social Login */}
              <div className="flex flex-col items-center mt-6">
                <div className="divider text-gray-500 text-sm">OR</div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={handlegoogleLogin}
                    className="btn btn-outline btn-accent rounded-full"
                  >
                    <FaGoogle size={20} />
                  </button>
                  <button className="btn btn-outline btn-secondary rounded-full">
                    <FaFacebook size={20} />
                  </button>
                  <button className="btn btn-outline btn-secondary rounded-full">
                    <FaGithub size={20} />
                  </button>
                  <button className="btn btn-outline btn-secondary rounded-full">
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

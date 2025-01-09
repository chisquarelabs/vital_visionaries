import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.jpg";

const Login = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      navigate("/");
      window.location.reload();
    }
  }, [status, navigate]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const patientID = e.target.patientID.value;
    const password = e.target.password.value;

    console.log(patientID, password);

    if (patientID === "AD132") {
      localStorage.setItem('user', 'patient')
      navigate("/assesments");
    } else {
      localStorage.setItem('user', 'physician')
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-2 sm:grid-cols-2 md:place-items-center lg:place-items-center h-screen bg-gray-800">
        <div className="flex -mb-[154px]">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="size-14 w-24 ml-4" />
          </NavLink>
          <span className="w-full font-bold text-bodydark1 text-3xl ml-8 mt-2">
            EMAT
          </span>
        </div>

        <div className="-mt-[194px] flex flex-wrap items-center border border-stroke bg-white rounded-xl shadow-default dark:border-strokedark dark:bg-boxdark lg:w-1/2">
          <div className="w-full p-4 sm:p-8 xl:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your ID"
                    name="patientID"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-[#0a1d40] focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-[#0a1d40] focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-5">
                <button
                  disabled={status}
                  type="submit"
                  className={`w-full cursor-pointer rounded-lg border border-[#0a1d40] ${
                    status === true ? "bg-orange-200" : "bg-[#0a1d40]"
                  } p-4 text-white transition hover:bg-opacity-90`}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

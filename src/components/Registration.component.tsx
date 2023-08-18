import React from 'react'

const RegistrationComponent = () => {
  return (
    <div>
        <section className="gradient-form bg-neutral-200 dark:bg-neutral-700">
  <div className="container  p-10">
    <div
      className="flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-5/12">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Mithra Fashions
                  </h4>
                </div>

                <form>
                  <p className="mb-4">Please login to your account</p>
                  {/* <!--Username input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Email address
                    </label>
                  </div>

                  {/* <!--Password input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Password
                    </label>
                  </div>

                  {/* submit button */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 text-slate-950 inline-block w-full rounded px-6 pb-2 pt-2.5  font-medium background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593) uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    //   style="
                    //     background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                    //   "
                      >
                      Log in
                    </button>

                    {/* <!--Forgot password link--> */}
                    <a href="#!">Forgot password?</a>
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default RegistrationComponent
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { loginInit } from '../../redux/login/LoginAction'
import { getMember } from '../../redux/member/MemberAction'
import { memberList } from '../../api'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import routePath from '../../routes/routePath'
const LoginComps = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })
  const [authorized, setAuthorized] = useState(false)
  const changeHandler = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    axios.get(memberList).then((res) => {
      props.getMember(res.data)
    })
    setAuthorized(true)
  }
  return (
    <>
      {/* If Authorize accepted then redirect to the dashboard */}
      {authorized ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="bg-white">
          <div className="px-4 py-4 absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2">
            <div className="max-w-4xl mx-auto">
              <div className="w-full md:flex">
                <div className="max-w-md md:max-w-full md:w-full mx-auto md:mx-0 bg-white shadow-sm rounded-md md:rounded-none px-5 py-10 text-center">
                  <div>
                    <div>
                      <h1 className="font-extrabold text-3xl text-gray-600">
                        Login
                      </h1>
                      <p className="text-gray-400 mt-2 text-sm">
                        Don't have an account?{' '}
                        <a
                          href="Register.html"
                          className="inline-block text-lemon font-semibold"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>

                    {/* <!-- form section begins  --> */}
                    <div className="mt-10">
                      <form onSubmit={handleLogin} action="#" method="POST">
                        <div className="mb-4">
                          <div className="relative login-input-group">
                            <span className="absolute top-1/2 transform -translate-y-[48%] px-5 text-lg text-lemon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input
                              name="email"
                              required
                              value={loginInfo?.email}
                              onChange={changeHandler}
                              type="email"
                              placeholder="Email"
                              className="pl-12 py-3 w-full border-gray-200 focus:border-white rounded-md  focus:outline-[0px]  focus:ring-2 focus:ring-lemon placeholder:text-gray-400"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="relative login-input-group">
                            <span className="absolute top-1/2 transform -translate-y-[48%] px-5 text-lg text-lemon">
                              <FontAwesomeIcon icon={faKey} />
                            </span>
                            <input
                              name="password"
                              required
                              value={loginInfo?.password}
                              onChange={changeHandler}
                              type="password"
                              placeholder="Password"
                              className="px-12 py-3 w-full border-gray-200 focus:border-white rounded-md  focus:outline-[0px]  focus:ring-2 focus:ring-lemon"
                            />
                            <span className="absolute right-0 top-1/2 transform -translate-y-[48%] px-5 text-lg text-gray-400 hover:text-gray-700 transition-all duration-300 cursor-pointer"></span>
                          </div>
                        </div>
                        <div>
                          <input
                            type="submit"
                            className="bg-lemon w-full  py-2 text-white font-semibold cursor-pointer rounded-md"
                            value="Login"
                            // onClick={handleLogin}
                          />
                          {props.name}
                        </div>
                      </form>
                    </div>
                    {/* <!-- form section begins  --> */}
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg,rgba(242, 49, 42, 0.9) 0%,rgba(242, 49, 42, 0.8) 43%),url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw3fHxlZHVjYXRpb258ZW58MHx8fHwxNjQ0ODM3MjU4&ixlib=rb-1.2.1&q=80&w=1080")',
                  }}
                  className="bg-cover bg-no-repeat w-full  hidden md:block login-right"
                >
                  <div className="h-full">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                      <div>
                        <h1 className="text-4xl font-bold uppercase text-white">
                          Logo
                        </h1>
                      </div>
                      <div>
                        <p className="text-center text-gray-200 text-sm px-8 mt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum perferendis architecto distinctio
                          molestiae adipisci quaerat id dolor magni tempora
                          culpa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- login page  --> */}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginInit: () => dispatch(loginInit()),
    getMember: (member) => dispatch(getMember(member)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComps)

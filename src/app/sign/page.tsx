"use client"


import { redirect } from 'next/navigation'
import React, { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { Baby } from "lucide-react";
import { loginUser, signupUser } from "@/api";
import { useRouter } from 'next/router';

export default function Sign() {
  const [selectedTab, setSelectedTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(loginEmail, loginPassword);
      console.log("Logged in");
    
      // Assuming the login was successful and you received a token or user data
      // Set the token/user data in a cookie
      Cookies.set('token', data.email); // Assuming you have a token
      
      // Redirect user to '/dashboard'
      window.location.href = '/home';
    } catch (error) {
      alert('Eposta veya parola yanlis')
      console.error("There was an error!", error);
    }
  };

  const handleSignup = async () => {
    try {
      const data = await signupUser(signupName, signupEmail, signupPassword);
      alert('Hesabiniz olustruldu!')
      console.log(data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex h-screen justify-items-center items-center">
      <div className="flex justify-center w-full">
        <Card className="max-w-full w-[340px] h-[560px]">
          <Baby className="flex content-center w-full mt-4 text-purple-600" width={100} height={100} />
          <p className="text-center font-bold text-inherit text-2xl text-purple-500">ZIPIR</p>
          <CardBody className="overflow-hidden mt-3">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key)}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onClick={() => setSelectedTab("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="secondary" onClick={handleLogin}>
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onClick={() => setSelectedTab("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="secondary" onClick={handleSignup}>
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
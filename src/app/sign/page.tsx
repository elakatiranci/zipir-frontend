"use client"

import React, { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { Baby } from "lucide-react";

export default function Sign() {
  const [selectedTab, setSelectedTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:50051/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      console.log(data); // Sunucudan gelen yanıtı konsola yazdırabilirsiniz
      // İşlemlere devam etmek için sunucudan gelen yanıtı burada kullanabilirsiniz
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:50051/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: signupName, email: signupEmail, password: signupPassword }),
      });
      const data = await response.json();
      console.log(data); // Sunucudan gelen yanıtı konsola yazdırabilirsiniz
      // İşlemlere devam etmek için sunucudan gelen yanıtı burada kullanabilirsiniz
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

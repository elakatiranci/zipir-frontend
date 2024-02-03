"use client"

import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import { Baby } from "lucide-react";

export default function Sign() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex h-screen justify-items-center items-center">
      <div className="flex justify-center w-full">
        <Card className="max-w-full w-[340px] h-[560px]">
        <Baby className="flex content-center w-full mt-4 text-purple-600" width={100} height={100}/>
        <p className="text-center font-bold text-inherit text-2xl text-purple-500">ZIPIR</p>
          <CardBody className="overflow-hidden mt-3">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button as={Link} fullWidth color="secondary" href="/home">
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                  <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button as={Link} fullWidth color="secondary" href="/home/profile">
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
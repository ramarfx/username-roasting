import { Github, Instagram, Settings } from "lucide-react";
import Loader from "./components/Loader";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useState } from "react";

function App() {
  const [apiKey, setApiKey] = useState(process.env.API_KEY);

  console.log(apiKey);
  return (
    <>
      <div className="container">
        <div className="max-w-screen-sm mx-auto">
          <h1 className="font-outfit font-bold text-4xl text-center mt-4">
            Instagram Roasting
          </h1>

          {/* user input start */}
          <Card className="mt-4">
            <CardContent>
              <div className="py-4 grid gap-1.5">
                <label htmlFor="username">Input username instagram mu</label>
                <Input type="text" id="username" placeholder="username" />
              </div>
              <Button className="px-8">Submit</Button>
            </CardContent>
          </Card>
          {/* user input end */}

          {/* user input start */}
          <Card className="mt-4">
            <Loader />
          </Card>
          {/* user input end */}

          {/* settings start */}
          <div className="flex flex-col mt-4">
            <button className="flex gap-2 mb-2 items-center">
              <Settings className="size-[18px]" />
              <p>Settings</p>
            </button>

            <Card>
              <CardContent>
                <div className="mt-4 grid gap-1.5">
                  <label htmlFor="apiKey">Gemini API Key (optional)</label>
                  <Input
                    type="text"
                    id="apiKey"
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="API key"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* settings end */}

          {/* footer start */}
          <footer className="flex items-center justify-start md:justify-evenly gap-8 absolute bottom-4 max-w-screen-sm w-full">
            <a
              href="https://github.com/ramarfx"
              className="flex gap-2 items-center">
              <Github className="size-[18px]" />
              <p>@ramarfx</p>
            </a>
            <p className="hidden md:block">hanya sekedar hiburan semata</p>
            <a
              href="https://instagram.com/ramtxh"
              className="flex gap-2 items-center">
              <Instagram className="size-[18px]" />
              <p>@ramtxh</p>
            </a>
          </footer>
          {/* footer end */}
        </div>
      </div>
    </>
  );
}

export default App;

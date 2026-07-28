import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Master Sign Language with{" "}
                  <span className="text-secondary">Ease</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our interactive platform provides Practice lessons and
                  learning resources to help you become a confident sign
                  language communicator.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="secondary" className="text-white">
                  <Link to="/practice">
                    Start Practicing
                  </Link>
                </Button>
              </div>
            </div>
            <img
              src={assetPath("Assets/hand.gif")}
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <Badge variant="secondary" className="text-white">
                  Key Features
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Learn Sign Language with Ease
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides comprehensive lessons and interactive
                practice sessions to help you become a skilled and confident
                sign language communicator.
              </p>
            </div>
          </div>
          <div className="mx-auto flex max-w-5xl items-start gap-6 py-12">
            <div className="flex-1">
              <h3 className="text-xl font-bold">Lessons</h3>
              <p className="text-muted-foreground">
                We provide lessons ensuring you make steady progress.
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="h-auto self-stretch mx-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Practice Sessions</h3>
              <p className="text-muted-foreground">
                Monitor and upskill your sign language proficiency with our
                practice sessions.
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="h-auto self-stretch mx-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Free of Cost & Private</h3>
              <p className="text-muted-foreground">
                Our platform is free of cost for all users. No hidden charges.
                No data collected.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src={assetPath("Assets/hand7.gif")}
            alt="Image"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-scale-down sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <div className="inline-block rounded-lg bg-muted px-3 py-2 text-sm">
                <Badge variant="secondary" className="text-white">
                  Flexible Learning
                </Badge>
              </div>
              <h2 className="py-2 text-3xl font-bold tracking-tighter sm:text-4xl">
                Learn at{" "}
                <span className="underline underline-offset-4">
                  Your Own Pace
                </span>
              </h2>
              <p className="py-2 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform allows you to learn sign language on your own
                schedule, with the freedom to revisit lessons and practice
                whenever it's convenient for you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="secondary" className="text-white">
                <Link to="/mission">
                  View Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Psst... Learn it, it's Free!
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our resources and start your journey today without any
              cost. Whether you're brushing up on your skills or starting from
              scratch, we've got you covered. Dive in and make the most of our
              free learning materials!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Button asChild variant="secondary" className="text-white">
              <Link to="/team">
                Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

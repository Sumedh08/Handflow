import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Mission = () => {
  const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;

  return (
    <>
      <main className="flex-1">
        <section className="w-full pt-2 pb-32">
          <div className="container flex space-x-4 justify-center py-16">
            <Card className="max-w-[600px] rounded-3xl shadow-lg">
              <CardHeader>
                <div>
                  <Badge
                    variant="secondary"
                    className="inline-block text-white"
                  >
                    How It Started
                  </Badge>
                </div>
                <CardTitle className="text-4xl tracking-tighter font-tommyregular font-bold">
                  Our mission is Empowering Communication through Sign Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Communication is a fundamental human right. Yet, for millions
                  of people worldwide, the ability to communicate effectively is
                  hindered by barriers. One of the most significant of these
                  barriers is the lack of widespread understanding and use of
                  sign language. Sign language is not just a tool for
                  communication; it is a lifeline for those who are deaf or hard
                  of hearing. It provides them with the ability to express their
                  thoughts, connect with others, and participate fully in
                  society.
                </p>
              </CardContent>
              <CardFooter>
                <p>
                  Sign language is a rich, expressive, and dynamic language that
                  goes beyond words. It uses gestures, facial expressions, and
                  body language to convey meaning. Our mission is to harness the
                  power of the web to create a platform where people can learn,
                  practice, and refine their sign language skills. Whether you
                  are a beginner just starting to learn the basics or someone
                  looking to improve your proficiency, our platform is designed
                  to support your journey.
                </p>
              </CardFooter>
            </Card>
            <Card className="max-w-[600px] rounded-3xl shadow-lg">
              <img
                src={assetPath("Assets/mission_illus.jpg")}
                alt="Mission Illustration"
                className="rounded-t-3xl"
              />
              <CardFooter>
                <a
                  className="text-sm "
                  href="https://www.freepik.com/free-vector/deaf-mute-people-concept-illustration_106402110.htm#fromView=search&page=1&position=3&uuid=6af8242c-2846-46a9-af33-518536c69600"
                >
                  Image by storyset on Freepik
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  We Aim To
                </h2>
              </div>
            </div>
            <div className="mx-auto flex max-w-5xl items-start gap-6 py-12">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Promote Inclusivity</h3>
                <p className="text-muted-foreground">
                  We want to make it easier for everyone, regardless of their
                  hearing ability, to learn and use sign language, fostering a
                  more inclusive society.
                </p>
              </div>
              <Separator
                orientation="vertical"
                className="h-auto self-stretch mx-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Enhance Learning</h3>
                <p className="text-muted-foreground">
                  Our platform will provide interactive tools, resources, and
                  exercises to make learning sign language engaging and
                  effective.
                </p>
              </div>
              <Separator
                orientation="vertical"
                className="h-auto self-stretch mx-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Support Communication
                </h3>
                <p className="text-muted-foreground">
                  By improving access to sign language education, we help bridge
                  communication gaps, ensuring that more people can connect and
                  interact without barriers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mission;

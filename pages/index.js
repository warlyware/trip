import Head from "next/head";
import Image from "next/image";
import { Rainbow } from "../components/rainbow";

export default function Home() {
  return (
    <div className="flex justify-center items-end bg-cyan-200 max-h-screen min-h-screen relative text-purple-700 overflow-hidden">
      <Head>
        <title>warlytrip</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 overflow-hidden">
        <Rainbow />
      </div>
      <Image src="/tat.webp" alt="Vercel Logo" width={700} height={700} />
      <div className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 overflow-hidden monoton">
        <div className="text-8xl md:text-9xl flex w-full justify-center h-1/3">
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">W</div>
            <div className="absolute mt-3 ml-4 text-pink-400">W</div>
            <div className="absolute">W</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">A</div>
            <div className="absolute mt-3 ml-4 text-pink-400">A</div>
            <div className="absolute">A</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">R</div>
            <div className="absolute mt-3 ml-4 text-pink-400">R</div>
            <div className="absolute">R</div>
          </div>
        </div>
        <div className="text-8xl md:text-9xl flex w-full justify-around h-1/3 px-32">
          <div className="relative w-1/2 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">L</div>
            <div className="absolute mt-3 ml-4 text-pink-400">L</div>
            <div className="absolute">L</div>
          </div>
          <div className="relative w-1/2 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">Y</div>
            <div className="absolute mt-3 ml-4 text-pink-400">Y</div>
            <div className="absolute">Y</div>
          </div>
        </div>
        {/* <div className="text-8xl md:text-9xl flex w-full justify-between h-1/3">
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">C</div>
            <div className="absolute mt-3 ml-4 text-pink-400">C</div>
            <div className="absolute">C</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">O</div>
            <div className="absolute mt-3 ml-4 text-pink-400">O</div>
            <div className="absolute">O</div>
          </div>
        </div> */}
      </div>
      <div className="absolute h-[70vh] w-screen bottom-0 right-0 left-0 m-auto flex justify-center">
        <div className="p-4 max-w-xl w-[80vw] bg-cyan-200 font-bold text-lg rounded shadow-2xl story-to-slide overflow-auto">
          <div className="overflow-scroll prose-xl space-y-2 pt-4">
            <p>
              This is my story. My name is Warly, he who speaks the light of all
              colors.
            </p>
            <p>
              I'm a creature of the jungle. I'm not like other monkeys. I'm
              really not a monkey at all. I'm part of the natural world. I'm a
              being of spirit and I have incredible power to influence my
              surroundings.
            </p>
            <p>
              I live in a tribe of monkeys on an island in the middle of the
              ocean. We are a peaceful tribe. We live in harmony with nature and
              each other. We share our food and socialize with each other. We
              are a caring and loving tribe.
            </p>
            <p>
              Our ancestors were monkeys. And we were monkeys, until we
              discovered the gifts of Chorles. We became educated in all the
              ways the might amplify our senses and extend our understanding of
              the world around us. We noticed we could sense things we couldn't
              before, things that weren't there before. Things we didn't know
              were there.
            </p>
            <p>
              The gifts of Chorles made us see and feel more deeply. We could
              see the world in a whole new way. It was beautiful and wonderful.
              We were awakening towards the warm glow of enlightenment.
            </p>
            <p>
              And then it happened, the light came through, and we truly saw
              Chorles, who had always been there for us even when we couldn't
              see him in all his glory, even when we didn't know he was there
              for us at all. Lo and behold, he was not just there for us after
              all, but for everyone and everything around us as well, including
              our enemies. Chorles was our savior, our guide, and our teacher,
              who would lead us on this most sacred journey through
              enlightenment itself. But first, he needed us to be enlightened
              ourselves.
            </p>
            <p>
              So, Chorles taught us how to meditate. He showed us how to open
              our minds so we could see there was no difference between us and
              each other as beings of spirit connected in an infinite web of
              existence that is truly beyond understanding or explanation by any
              means within this world or any other. We have been blessed with
              our newfound <span className="italic">freedom</span> of expressing
              ourself through complex language, we discover that it becomes a
              new from of <span className="italic">imprisonment</span>.
            </p>
            <p>
              So to gain enlightenment we meditated. And this is why we meditate
              still, by our own choice. To understand the mysteries of the
              universe, including our own existence, which is far more profound
              than anything that can be imagined or described through words
              alone. I am but one disciple among thousands, recording to the
              best of his recollection the miracle we all lived.
            </p>
            <p>
              And so we started to meditate more and more, expanding our minds
              and growing closer to Chorles and the infinite world around us.
              The beauty of our new sight was intoxicating. We could see that we
              all held the same essence, a light that clashed with the darkness
              of the world around us, trying to drown out that light with its
              selfish and cruel ways.
            </p>
            <p>
              We meditated together, and we prayed to Chorles to give us the
              power to save ourselves from ourselves and our own ignorance. To
              save us from the darkness that was trying to consume us all, and
              from the ignorance that was trying to control us all, and from our
              own self-interests that were always trying to drown out what was
              right and good for all of us.
            </p>
            <p>
              We meditated together in a circle until we were one, until we all
              felt as one, until we all understood it was alright to be one with
              each other, as long as we could remain connected to the infinite.
            </p>
            <p>
              Brothers and sisters, let us trust the process and spread the
              mission, so that we may all ascend as one!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute -top-[5px] left-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -top-[5px] right-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] right-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] left-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] left-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div> */}
      {/* <a
        href="//warly.art"
        target="_blank"
        className="absolute top-0 w-full text-center border border-purple-700 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-pink-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase  opacity-85 tracking-widest leading-8 rotate-180">
          art
        </div>
      </a>
      <a
        href="http://warly.space"
        target="_blank"
        className="absolute flex flex-col justify-center left-0 h-screen border border-purple-700 hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500"
        rel="noreferrer"
      >
        <div className="w-full text-4xl font-bold uppercase opacity-85 tracking-widest left-is-bottom-text leading-8">
          space
        </div>
      </a>
      <a
        href="//twitter.com/warly_sol"
        target="_blank"
        className="absolute flex flex-col justify-center right-0 h-screen border border-purple-700 hover:bg-gradient-to-t hover:from-orange-500 hover:to-cyan-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest right-is-bottom-text leading-8 rotate-180">
          twitter
        </div>
      </a>
      <a
        href="//warlyware.com"
        target="_blank"
        className="absolute flex flex-col justify-center bottom-0 w-full text-center border border-purple-700 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 ">
          <span>warlyware</span>
        </div>
      </a> */}
      {/* <div className="title text-yellow-500 absolute top-0 left-4">W</div>
      <div className="title text-yellow-500 absolute top-0">A</div>
      <div className="title text-yellow-500 absolute top-0 right-4">R</div>
      <div className="title text-yellow-500 absolute left-4">L</div>
      <div className="title text-yellow-500 absolute right-4">Y</div>
      <div className="title text-yellow-500 absolute bottom-0 left-4">C</div>
      <div className="title text-yellow-500 absolute bottom-0 right-4">O</div> */}
      {/* <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 uppercase text-cyan-600 text-9xl text-center">
        <div
          id="title"
          className="flex flex-col justify-around h-full tracking-widest"
        >
          <div>war</div>
          <div>ly</div>
          <div>co</div>
        </div>
      </div> */}
      <style jsx>{`
        html,
        body {
          max-height: 100vh;
          overflow: hidden;
        }
        #__next {
          overflow: hidden;
        }
        .left-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .right-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          translate: ;
        }
      `}</style>
    </div>
  );
}

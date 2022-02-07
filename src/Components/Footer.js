import { SocialLinks, NavData } from "./NavData";

export default function Footer({ navD }) {
  const NavDat = navD ? navD : NavData;
  return (
    <div className="card p-0 relative rounded-t-md mt-5 h-72 md:h-52 lg:h-48  overflow-y-hidden bottom-0 bg-prim2">
      <section class="bg-gray-900 absolute inset-0 top-0 ">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap just ify-center -mx-5 -my-2">
            {NavDat.map((nav, i) => (
              <div key={i} class="px-5 py-2">
                <a
                  href={nav.link}
                  class="text-base leading-6 text-gray-500 hover:text-indigo-500"
                >
                  {nav.title}
                </a>
              </div>
            ))}
          </nav>
          <div class="flex justify-center mt-8 space-x-6">
            {SocialLinks.map((social, i) => (
              <a
                href={social.url}
                key={i}
                class="text-gray-400 hover:text-indigo-500"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © {new Date().getFullYear()} Evaristus Anarado. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

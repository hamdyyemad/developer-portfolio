import SidebarImage from "./SidebarBio/SidebarImage";
import SVGBioWrapper from "./SidebarBio/SVGBioWrapper";
import SocialLinks from "./SidebarBio/SocialLinks";

export default function SidebarBio() {
  return (
    <aside
      className="w-full max-w-sm mx-auto mb-8 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-600/30 p-8 flex flex-col gap-4 relative overflow-hidden
      lg:fixed lg:top-24 lg:left-16 lg:w-[370px] lg:mr-0 lg:mb-0 
      hover:shadow-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Top left decorative SVG */}
      <SVGBioWrapper>
        <div className="w-full flex justify-center relative z-10">
          <div className="relative group">
            <SidebarImage />
            {/* Image glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent mb-0 mt-2 hover:from-orange-400 hover:via-white hover:to-orange-400 transition-all duration-500">
            Hamdy Emad
          </h2>
          <p className="text-orange-500 font-extrabold mb-1 text-xl hover:text-orange-400 transition-colors duration-300">
            Full Stack Web Developer
          </p>
          <p className="text-base text-gray-300 mb-2 hover:text-gray-200 transition-colors duration-300">
            Versatile Full Stack Web Developer with hands-on experience in
            React.js, Node.js, TypeScript, and .NET
          </p>
        </div>

        <div className="relative z-10 mx-auto">
          <SocialLinks />
        </div>
      </SVGBioWrapper>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </aside>
  );
}

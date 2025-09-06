import GradientH2 from "@/designs/typography/GradientH2";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 md:ml-8 pl-8">
      <GradientH2 firstText="LET'S WORK" secondText="TOGETHER" />
      <form className="bg-[#232323] rounded-xl p-10 flex flex-col gap-6 w-full max-w-3xl mt-10 shadow-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <input className="rounded px-4 py-3 bg-gray-900 text-white placeholder-gray-400 flex-1 text-lg" placeholder="Your Name" />
          <input className="rounded px-4 py-3 bg-gray-900 text-white placeholder-gray-400 flex-1 text-lg" placeholder="Your@email.com" />
        </div>

        <textarea className="rounded px-4 py-3 bg-gray-900 text-white placeholder-gray-400 text-lg" placeholder="Message" rows={4} />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded mt-2 text-lg w-full text-center transition cursor-pointer">Submit</button>
      </form>
    </section>
  )
}

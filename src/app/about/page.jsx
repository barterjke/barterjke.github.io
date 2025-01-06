import { Github, Linkedin} from "lucide-react";

export default async function AboutMe() {
    const desc = "I love crafting user-friendly websites and exploring the latest trends in technology. Outside of work, you'll find me hiking, painting, or enjoying a good book.";
    const photo_url = "https://media.licdn.com/dms/image/v2/D4D35AQHa9cBzaoYx_Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1673543327997?e=1736791200&v=beta&t=ZpaZhVlmGKrsq6-T2KJubagZicObINy93id3fvbvuL8";
    return (<div className="flex items-center justify-center">
        <div className="font-mono max-w-sm w-full bg-slate-700 shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full text-white">
                <img src={photo_url} alt="Your Photo" className="object-cover w-full" />
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-slate-100">Ivan Pazdniakou</h1>
                <p className="mt-2 text-slate-300">Big data engineer</p>
                <p className="mt-4 text-sm text-slate-400">{desc}</p>
                <div className="mt-6 flex justify-around">
                    <a target="_blank" href="https://gitlab.com/aivanpozdnyakov" className="flex items-center text-slate-200 hover:text-blue-500">
                        <Github />
                        <span className="ml-2">Gitlab</span>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ivan-pazdniakou/" className="flex items-center text-slate-200 hover:text-blue-500">
                        <Linkedin strokeWidth={1.2} />
                        <span className="ml-2">LinkedIn</span>
                    </a>
                    <a target="_blank" href="#" className="flex items-center text-slate-200 hover:text-blue-500">
                        <i data-lucide="twitter" className="w-6 h-6"></i>
                        <span className="ml-2">Twitter</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

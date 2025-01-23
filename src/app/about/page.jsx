import { Github, Linkedin, Gitlab, Phone, Mail } from "lucide-react";

export const metadata = {
    title: 'About me'
}

export default async function AboutMe() {
    const desc = "I'm Big Data Python developer. I love building stuff. Let me know if you want to give me a big pile of money :)";
    const photo_url = "img/me.jpg";
    const mail = "pazdniakou.official@gmail.com";
    const phone = "+48 511 493 235";
    return (
        <div className="flex items-center justify-center">
            <div className="font-mono max-w-sm w-full bg-slate-700 shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full text-white">
                    <img src={photo_url} alt="Your Photo" className="object-cover w-full" />
                </div>
                <div className="p-6 text-slate-200">
                    <h1 className="text-2xl font-bold text-slate-100">Ivan Pazdniakou</h1>
                    <p className="mt-2 text-slate-300">Big data engineer</p>
                    <p className="mt-4 text-sm text-slate-400">{desc}</p>
                    <a href={"mailto:" + mail} className="flex text-slate-200 mt-2">
                        <Phone className="mr-4" strokeWidth={1.2} />{mail}
                    </a>
                    <a href={"tel:" + phone} className="flex text-slate-200 mt-2">
                        <Mail className="mr-4" strokeWidth={1.2} />{phone}
                    </a>
                    <div className="mt-6 flex justify-around">
                        <a target="_blank" href="https://gitlab.com/aivanpozdnyakov" className="flex items-center text-slate-200 hover:text-blue-500">
                            <Gitlab />
                            <span className="ml-2">Gitlab</span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/ivan-pazdniakou/" className="flex items-center text-slate-200 hover:text-blue-500">
                            <Linkedin strokeWidth={1.2} />
                            <span className="ml-2">LinkedIn</span>
                        </a>
                        <a target="_blank" href="https://github.com/barterjke" className="flex items-center text-slate-200 hover:text-blue-500">
                            <Github />
                            <span className="ml-2">Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

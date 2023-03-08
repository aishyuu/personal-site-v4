import { TypeAnimation } from "react-type-animation"
import GithubIcon from '@mui/icons-material/Github'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Intro() {
    return(
        <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-6xl font-bold text-center mb-4">
                    Ivan Matias
                </h1>
                <TypeAnimation
                    className="text-xl"
                    sequence={[
                        'Front-End Developer',
                        1000,
                        'Web Developer',
                        1000,
                        'Project Oriented Developer',
                        1000
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                />
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/aishyuu" target="_blank" 
                className="flex gap-2 px-4 py-2 border border-blue-500 bg-blue-500 rounded-lg hover:bg-blue-400">
                    <GithubIcon /> Github
                </a>
                <a href="https://www.linkedin.com/in/ivan-matias-1331im/" target="_blank"
                className="flex gap-2 px-4 py-2 border border-blue-500 bg-blue-500 rounded-lg hover:bg-blue-400">
                    <LinkedInIcon /> Linkedin
                </a>
            </div>
        </div>
    )
}
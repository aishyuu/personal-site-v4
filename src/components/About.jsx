import profile from '../assets/images/profile.jpg'
import ComputerIcon from '@mui/icons-material/Computer';

export default function About() {
    return(
        <div className="min-h-screen mx-auto bg-blue-900 text-white">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center p-12">
                <div className="flex justify-center w-1/3 content-center">
                    <img src={profile} alt="" 
                    className="rounded-full"/>
                </div>
                <div className="w-2/3">
                    <p className="text-md lg:text-lg mb-6">I am Ivan Matias. I enjoy building web apps, mostly with a React front-end and a NodeJS back-end. I am always striving to learn and develop new skills and become a better web developer. </p>
                    <p className="text-md lg:text-lg mb-6">While my main experience is in web development, I enjoy creating simple UI designs as well!</p>
                    <a href="https://drive.google.com/file/d/1BzYKhzDv21fBw43KeZSJ1xZiLOODlokh/view?usp=share_link" target="_blank"
                    className="px-24 py-1 flex justify-center lg:w-24 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Resume
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-10">
                <div className="flex flex-col items-center w-full h-80 border border-green-500 p-8">
                    <ComputerIcon sx={{ fontSize: 80 }}/>
                    <h1 className="font-bold text-2xl">Front End</h1>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full h-80 border border-green-500 p-8">
                    <ComputerIcon sx={{ fontSize: 80 }}/>
                    <h1 className="font-bold text-2xl">Front End</h1>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
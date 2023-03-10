import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export default function About() {
    return(
        <div className="min-h-screen mx-auto bg-blue-900 text-white">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center p-12">
                <div className="flex justify-center w-1/3 content-center">
                    <img src="profile.jpg" alt="" 
                    className="rounded-full"/>
                </div>
                <div className="w-2/3 lg:w-1/3">
                    <p className="text-md lg:text-lg mb-6">I'm Ivan Matias! I enjoy building web apps, mostly with a React front-end and a NodeJS back-end. I am always striving to learn and develop new skills and become a better web developer. </p>
                    <p className="text-md lg:text-lg mb-6">While my main experience is in web development, I enjoy creating simple UI designs as well!</p>
                    <a href="https://drive.google.com/file/d/1rfmBmsJkyMrTTdButBTxyENexCRf_DFi/view?usp=sharing" target="_blank"
                    className="px-24 py-1 flex justify-center lg:w-24 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Resume
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 p-10">
                <div className="flex flex-col items-center w-full lg:w-1/3 h-80 bg-gray-800 rounded-lg p-8">
                    <ComputerIcon sx={{ fontSize: 80 }}/>
                    <h1 className="font-bold text-3xl mb-2">Front End</h1>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Next JS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/3 h-80 bg-gray-800 rounded-lg p-8">
                    <StorageIcon sx={{ fontSize: 80 }}/>
                    <h1 className="font-bold text-3xl mb-2">Back End</h1>
                    <ul>
                        <li>Node JS</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/3 h-80 bg-gray-800 rounded-lg p-8">
                    <HomeRepairServiceIcon sx={{ fontSize: 80 }}/>
                    <h1 className="font-bold text-3xl mb-2">Tools</h1>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
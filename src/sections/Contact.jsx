import { AtSign, MailOpen } from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
    // state
    // comportement
    // render
    return (
        <section id="WorkTogether" className="flex flex-col justify-between  items-center md:p-6 pt-10 h-[60vh] w-[100vw]">

            <h2 className="text-4xl font-bold text-center text-white m-10">Work Together</h2>

            <div className="w-full flex md:flex-row flex-col justify-center items-center h-4/6">
                <form className="md:w-3/6 md:max-w-sm mx-auto m-10">
                    
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                            <AtSign style={{stroke: 'white'}} />
                        </div>
                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mb-5 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="luffy@merry.com" />
                    </div>

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <div className="relative">
                        <div className="absolute inset-y-5 -start-1.5 flex items-center ps-4 pointer-events-none">
                            <MailOpen style={{stroke: 'white'}} />
                        </div>
                    </div>
                    <textarea id="message" rows="4" className="block mb-5 ps-10 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tell me what you need..."></textarea>

                    <button type="submit" className="text-white bg-indigo-400 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus:bg-indigo-800 transform duration-300">Send</button>
                </form>

                <div className="md:w-3/6 h-full md:border-l-2 border-t-2 md:border-t-0 flex justify-center items-center space-x-6 p-10">
                        <Button
                            link="https://github.com/drkophe"
                            leftIcon="Github"
                            type="secondary"
                            size="larger"
                            rounded="full"
                        />

                        <Button
                            link="https://www.linkedin.com/in/lorenzo-bosi-1724a2259/"
                            leftIcon="Linkedin"
                            type="secondary"
                            size="larger"
                            rounded="full"
                        />

                        <Button
                            link="https://twitter.com/Lorenzo_Bosi"
                            leftIcon="Twitter"
                            type="secondary"
                            size="larger"
                            rounded="full"
                        />
                </div>
            </div>

        </section>
    )
}
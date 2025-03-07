// ECMAScript 5 way of writing functions check-out for the ECMACScript
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import SearchIcon from '@mui/icons-material/Search';
import BackImage from '../assets/images/black-boy-playing-guitar.jpg'

function Landing() {
    return (
        <>  -
            <div>
                <Navbar />
            </div>
            <div className="h-screen flex flex-col justify-center items-center w-[90%] mx-auto gap-y-8">

                <div className="text-center">
                    <h1 className="text-[3rem] font-extrabold">Rent Now, Move In Whenever!</h1>
                    <p>
                        Say "NO" to agent fees as we uncover the best places to you to feel at home.
                    </p>
                </div>
                <div className="w-[90%] flex justify-center items-center">
                    <input type="search" name="searchName" id="" placeholder="What type of house are you looking for?" className="w-[35%] px-5 py-4 bg-amber-200" />
                    <input type="search" name="searchName" id="" placeholder="Location" className="w-[15%] px-5 py-4 bg-amber-200" />
                    <a href="#" className="bg-blue-600 px-6 py-4 text-white font-bold">+ Search</a>
                </div>
                <div className="">
                    <p><a href="#">Most Popular</a> or <a href="#">Recent Updates</a>
                    </p>

                </div>
            </div>
            <section className="w-[90%] mx-auto mb-20">
                <div className="flex flex-col justify-center items-center mb-10 gap-y-2">
                    <h2 className="text-2xl md:text-4xl text-[#9F6F00] font-bold">What do you need to find?</h2>
                    <div class="border border-[#9F6F00] my-5 w-[10%]"></div> 

                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[30rem]">
                    <div className= "row-start-1 row-end-4 bg-[url('./assets/images/black-boy-playing-guitar.jpg')] bg-cover">
                        <h3>01</h3>
                        <p> Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="bg-yellow-600 row-start-1 row-end-3 bg-[url('./assets/images/black-boy-playing-guitar.jpg')] bg-cover bg-no-repeat">
                        <h3>02</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod architecto odio qui sed tempore ex maiores corporis accusantium consequuntur!</p>
                    </div>
                    <div className="bg-yellow-600 bg-[url('./assets/images/girl-smiling.jpg')] bg-cover">
                        <h3>03</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod architecto odio qui sed tempore ex maiores corporis accusantium consequuntur!</p>
                    </div>
                    <div className="bg-pink-600 row-start-2 row-end-4 bg-[url('./assets/images/black-boy-playing-guitar.jpg')] bg-cover">
                        <h3>04</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod architecto odio qui sed tempore ex maiores corporis accusantium consequuntur!</p>
                    </div>
                    <div className="bg-[url('./assets/images/girl-smiling.jpg')] bg-cover">
                        <h3>05</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod architecto odio qui sed tempore ex maiores corporis accusantium consequuntur!</p>
                    </div>
                </div>
            </section>
            <section className="w-[90%] mx-auto bg-gray-200">
                <div className="flex flex-col justify-center items-center mb-10 gap-y-2">
                    <h2 className="text-2xl md:text-4xl text-[#9F6F00] font-bold mt-20">Featured Places</h2>
                    <div class="border border-[#9F6F00] my-5 w-[10%]"></div>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    <div className="border rounded-t-lg">
                    <img src={BackImage} class="rounded-t-lg" alt="" />
                        <div className="m-4 bg-white">
                            <div className="text-sm md:text-lg font-semibold" >
                                <h3>Single Room Contain</h3>
                            </div>
                            <div className="flex justify-start gap-x-3">
                                <p>Teshie</p>
                                <p>. 4 Reviews</p>
                                <p>. Ghc500 /month</p>
                            </div>
                            <div className="flex gap-3">
                                <p>L-Icon</p>
                                <p>Teshie, Lascala, GZ-000-000</p>
                            </div>
                            <div className="flex gap-3">
                                <p>Ph-Icon</p>
                                <p>+2330000000</p>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <p>Lk-Icon</p>
                                <p>www.homes.com</p>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <p>Available</p>
                                <p>Icons</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-t-lg">
                        <img src={BackImage} alt="" class="rounded-t-lg"/>
                        <div className="m-4 bg-white">
                            <div className="text-sm md:text-lg font-semibold" >
                                <h3>Single Room Contain</h3>
                            </div>
                            <div className="flex justify-start gap-x-3">
                                <p>Teshie</p>
                                <p>. 4 Reviews</p>
                                <p>. Ghc500 /month</p>
                            </div>
                            <div className="flex gap-3">
                                <p>L-Icon</p>
                                <p>Teshie, Lascala, GZ-000-000</p>
                            </div>
                            <div className="flex gap-3">
                                <p>Ph-Icon</p>
                                <p>+2330000000</p>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <p>Lk-Icon</p>
                                <p>www.homes.com</p>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <p>Available</p>
                                <p>Icons</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-t-lg">
                    <img src={BackImage} class="rounded-t-lg" alt="" />
                        <div className="m-4 bg-white">
                            <div className="text-sm md:text-lg font-semibold" >
                                <h3>Single Room Contain</h3>
                            </div>
                            <div className="flex justify-start gap-x-3">
                                <p>Teshie</p>
                                <p>. 4 Reviews</p>
                                <p>. Ghc500 /month</p>
                            </div>
                            <div className="flex gap-3">
                                <p>L-Icon</p>
                                <p>Teshie, Lascala, GZ-000-000</p>
                            </div>
                            <div className="flex gap-3">
                                <p>Ph-Icon</p>
                                <p>+2330000000</p>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <p>Lk-Icon</p>
                                <p>www.homes.com</p>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <p>Available</p>
                                <p>Icons</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center"><a href="#" className="bg-blue-600 py-5 px-10 mt-10 rounded-lg text-md md:text-2xl text-white font-semibold">View All</a></div>
            </section>
            <Footer />
        </>
    )
};

export default Landing;
import React from "react";
import { User } from './Userclass';

export function About()
{
    return (
        <>

            <section class="text-gray-700 body-font m-4">
                <div class="container mx-auto flex flex-col items-center">
                    <div class="lg:w-2/3 flex flex-col items-center text-center">
                        <h2 class="text-gray-900 text-3xl title-font font-medium mb-4">Our Vision</h2>
                        <p class="mb-8 leading-relaxed">
                            We aim to empower aspiring developers by providing a platform that simplifies the journey to mastering coding. Our platform offers curated high-rated courses from Udemy, tailored roadmaps to guide learners, and a supportive community to foster growth. Whether you're a beginner taking your first steps or an experienced developer looking to expand your skill set, we're here to assist you in achieving your coding goals.
                        </p>
                    </div>
                </div>
            </section>


            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-md bg-white rounded-lg shadow-md p-6">
                    <div className="text-center">
                        {/* Add your card header here */}
                        <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
                    </div>
                    <div className="mt-4">
                        <User />
                    </div>
                </div>
            </div>
        </>
    );
}
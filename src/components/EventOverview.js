import React from 'react';
import Day1 from './eventoverview/Day1';
import Day2 from './eventoverview/Day2';
import Day3 from './eventoverview/Day3';

const EventOverview = () => {
    return (
        <>
            <div className="flex justify-center items-center ">
                <section className="event-overview p-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">3-Day Event Overview</h2>
                </section>
            </div>
            <div className="flex flex-col items-center w-full px-4">
                <div className="w-full flex justify-start mb-4">
                    <div className="flex justify-center items-center w-80 h-48 p-4 bg-gray-200 rounded-lg">
                        <Day1 />
                    </div>
                </div>
                <div className="w-full flex justify-center mb-4">
                    <div className="flex justify-center items-center w-80 h-48 p-4 bg-gray-200 rounded-lg">
                        <Day2 />
                    </div>
                </div>
                <div className="w-full flex justify-end mb-4">
                    <div className="flex justify-center items-center w-80 h-48 p-4 bg-gray-200 rounded-lg">
                        <Day3 />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventOverview;

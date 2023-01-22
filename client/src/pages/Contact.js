import React from 'react';

const Contact = () => (
    <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="divide-y-2 divide-gray-200">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Contact</h2>
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Email</h3>
                            <dl className="mt-2 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Email</dt>
                                    <dd>support@BrickStreet.com</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
);

export default Contact;

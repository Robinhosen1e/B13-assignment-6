import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    console.log(feature);
    return (
        <div className='flex gap-1'>
            <span><Check color="#30B868" /></span>
            <p className='font-[500] mb-1.5 text-[#627382] text-[16px]'> {feature}</p>
        </div>
        
    );
};

export default Feature;
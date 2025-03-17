import React, { FC, useState } from 'react'
import { Car } from '../../types'
import calcPrice from '../../utils/calcPrice';

import Info from './info';
import Button from '../button';
import { motion } from 'motion/react';
import Modal from '../modal';
import generateimages from '../../utils/generateimages';

interface Props{
    car:Car;
}

const Card :FC <Props> = ({car}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

generateimages(car);
  return (
    <div className="car-card group">

        <h2> 
        {car.make} {car.model}
        </h2>
        
        <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]"> {calcPrice(car)} </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

{/* resim alani */}
      <div>
      <img src={generateimages(car)} alt={car.model} className="w-full h-full object-contain min-h-[200px]" />
      </div>

      {/* temel bilgiler */}
      <div className='w-full'>
      <div className='group-hover:hidden'>
      <Info  car={car} />
      </div>

      <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className="hidden group-hover:block">
          <Button text="Daha Fazla" designs="w-full text-white mt-[0.5px]" fn={()=>setIsOpen(true)} />
        </motion.div>


      </div>
      
      <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
    

    </div>
  );
}

export default Card 
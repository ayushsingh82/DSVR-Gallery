import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


function NextCard () {
    return (
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    );
  }
  

const Live = () => {
  return (
    <div>

    <div className='flex justify-center '>
  <h1>Discover Unique Digital Art</h1>
  <p>Explore and bid on one-of-a-kind digital artworks on the Sol blockchain.</p>
  <button>Explore auction</button>
  </div>

  <div className='flex '>
  <NextCard/>
  <NextCard/>
  <NextCard/>
  </div>

 
    </div>
  )
}

export default Live


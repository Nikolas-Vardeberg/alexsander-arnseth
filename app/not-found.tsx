import { Ghost } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-primary-dark h-full border-y-4 border-secondary-green py-40 flex flex-col items-center justify-center gap-3'>
        <Ghost className='h-24 w-24 text-secondary-green' />
            <h3 className='uppercase text-secondary-green text-3xl'>
                Ganske tomt her, ja.
            </h3>
          <p className='text-white text-xl text-center'>"Oops! Siden du leter etter, finnes dessverre ikke. Kanskje du har skrevet inn feil adresse, eller siden har blitt flyttet.</p>
    </div>
  )
}
"use client"
import React, { useRef, useState } from 'react'
import {IKImage, ImageKitProvider, IKUpload} from 'imagekitio-next'
import config from '@/lib/config'
import Image from 'next/image'
import { toast } from 'sonner'

const {
    env:{
        imagekit:{publicKey, privateKey, urlEndpoint}
    }
} = config

  
const ImageUpload = ({onFileChange}:{onFileChange:(filePath:string)=>void}) => {

const ikUploadRef = useRef(null)
const [file, setFile] = useState<{filePath:string}|null>(null)
const authentitator = async ()=>{
    try {
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
        if(!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Request failed with status ${response.status}:${errorText}`
            )
        }


   const data = await response.json();
     const {signature, expire, token} = data
     return {token, expire, signature}

    } catch (error:any) {
        throw new Error(`authentication failed : ${error.message}`)
    }
}

const onError =(error:any)=>{
toast.message('Event has been failed', {
  description: `${error} uploaded sucessfully`,
})
}
const onSucess = (res:any)=>{
setFile(res)

onFileChange(res.filePath)
toast.message('Image has been Uploaded', {
  description: `${res.filePath} uploaded sucessfully`,
})

}


  return (
    <ImageKitProvider urlEndpoint={urlEndpoint} publicKey={publicKey} authenticator={authentitator} >
        <IKUpload
        className='hidden'
        ref = {ikUploadRef}
    onError={onError}
    onSuccess={onSucess}
    fileName='test-upload.png'
    />

<button className='flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md' onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}>
    <Image src='/icons/upload.svg' alt='upload' width={20} height={20} className='object-contain'/>
    <p className='text-base text-lime-100'>
        upload a File
    </p>
    {file && <p className='mt-1 text-center text-xs'>
    {file.filePath}
    </p>}
</button>
{file && (
    <IKImage
    alt={file.filePath}
    path={file.filePath}
    width={500}
    height={500}
    />
)}
    </ImageKitProvider>
  )
}

export default ImageUpload
"use client"
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, SubmitHandler, useForm, UseFormReturn, FieldValues, Path } from 'react-hook-form'
import { ZodType, z} from 'zod'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { FIELD_NAMES } from '@/constants'
import ImageUpload from './ImageUpload'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
interface Props<T extends FieldValues> {
  schema: ZodType<T> | any;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}


const AuthForm =<T extends FieldValues>  ({type, schema, defaultValues, onSubmit}:Props<T>) => {

const router = useRouter();

  const isSignIn = type === "SIGN_IN";   
    const form : UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T>=async(data)=> {
   const result = await onSubmit(data)
  
   if (result.success){
    toast.message('Sucessfull', {
      description: isSignIn?"you have sucessfully signed in":"you have sucessfully signed up",
    })
    router.push('/')
   }else{
     toast.message(isSignIn?"you have error signed in":"you have error signed up", {
      description: `error:${result.error}`,
    })
   }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className='text-2xl font-semibold text-white'>
     {isSignIn ?"welcome to bookwise": "create your library account"}
      </h1>
      <p className='text-white'>
         {isSignIn
          ? "Access the vast collection of resources, and stay updated"
          : "Please complete all fields and upload a valid university ID to gain access to the library"}

      </p>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
       {Object.keys(defaultValues).map((field)=>(
        <FormField
        key={field}
          control={form.control}
          name={field as Path<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel className=' capitalize text-white'>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
              <FormControl>
                
                 {field.name === "universityCard" ? (
                      <ImageUpload
                     onFileChange = {field.onChange}                      
                      />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                        }
                        {...field}
                        className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal
                         text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-gray-600 !important"
                      />
                    )}
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       )
      
      )}

        <Button className='text-black hover:bg-primary inline-flex min-h-14 w-full items-center justify-center rounded-md px-6 py-2 font-bold text-base !important' style={{backgroundColor:'#EED1AC'}} type="submit">
          {isSignIn?"sign in":"sign up"}</Button>
      </form>
    </Form>
          <p className="text-center text-white font-medium">
        {isSignIn ? "New to BookWise? " : "Already have an account? "}

         <Link 
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-white"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>

    </div>
    
  )
}

export default AuthForm
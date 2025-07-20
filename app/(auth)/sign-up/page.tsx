"use client"
import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validation'
import { signUp } from '@/lib/actions/auth'
const page = () => {
  return (
   <AuthForm
   type ="SIGN_UP"
   schema = {signUpSchema}
   defaultValues = {{
    email:"",
    password:'',
    universityId:0,
    fullName:"",
    universityCard:""
   }}
   onSubmit={signUp}
   />
  )
}

export default page
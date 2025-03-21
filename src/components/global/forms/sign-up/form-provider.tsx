'use client'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Loader } from '../../loader'
type Props = {
  children: React.ReactNode
}
export default function SignUpFormProvider({ children }: Props) {
  const { methods, onHandleSubmit, loading } = useSignUpForm()
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

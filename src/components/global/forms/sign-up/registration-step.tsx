'use client'
import { useAuthStore } from '@/zustand/use-auth'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()

  const { currentStep } = useAuthStore()
  const [onOTP, setOnOTP] = useState<string>('')
  const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

  setValue('otp', onOTP)
  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      )
  }
  return <div>RegistrationFormStep</div>
}

export default RegistrationFormStep

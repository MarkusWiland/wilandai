import SignUpFormProvider from '@/components/global/forms/sign-up/form-provider'
import RegistrationFormStep from '@/components/global/forms/sign-up/registration-step'
import React from 'react'
type Props = {

}
export default function SignUp() {
  return (
    <div className="flex py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep>
              
            </RegistrationFormStep>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

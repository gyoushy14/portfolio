import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const COOLDOWN_SECONDS = 60

export const useContactForm = () => {
  const formRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return undefined
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [cooldown])

  const sendEmail = async (e) => {
    e.preventDefault()
    if (isLoading || cooldown > 0) return

    setIsLoading(true)
    setIsSuccess(false)
    setIsError(false)
    setErrorMessage('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setIsSuccess(true)
      formRef.current?.reset()
      setCooldown(COOLDOWN_SECONDS)
    } catch (error) {
      setIsError(true)
      setErrorMessage(error?.text ?? 'Unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formRef,
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    cooldown,
    sendEmail,
  }
}
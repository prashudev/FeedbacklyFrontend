'use server'

import { revalidatePath } from 'next/cache'

export async function submitFeedback(userName: string, feedback: { question: string; rating: number }[]) {
  const response = await fetch('https://feedbacklybackend.onrender.com/api/v1/submitfeedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, feedback }),
  })

  if (!response.ok) {
    throw new Error('Failed to submit feedback')
  }

  revalidatePath('/')
}


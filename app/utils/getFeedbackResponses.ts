export async function getFeedbackResponses() {
  const response = await fetch('https://feedbacklybackend.onrender.com/api/v1/getfeedbackresponse', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch feedback responses')
  }

  return response.json()
}


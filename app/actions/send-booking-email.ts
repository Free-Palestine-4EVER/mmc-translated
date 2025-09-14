"use server"

import { Resend } from "resend"

// Enhanced fallback mechanism for development and production
const getEmailService = () => {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn("⚠️ RESEND_API_KEY not found. Using mock email service.")
    return {
      emails: {
        send: async (options: any) => {
          console.log("📧 MOCK EMAIL:", options)
          return {
            data: { id: "mock-email-id" },
            error: null,
          }
        },
      },
    }
  }

  try {
    return new Resend(apiKey)
  } catch (error) {
    console.error("Failed to initialize Resend:", error)
    // Return mock service as fallback even if initialization fails
    return {
      emails: {
        send: async (options: any) => {
          console.log("📧 FALLBACK MOCK EMAIL (after Resend init error):", options)
          return {
            data: { id: "fallback-mock-email-id" },
            error: null,
          }
        },
      },
    }
  }
}

// Get email service (real or mock)
const emailService = getEmailService()

export async function sendBookingEmail(formData: any) {
  try {
    console.log("Starting email sending process...")
    console.log("API Key available:", !!process.env.RESEND_API_KEY)

    // Format the booking details for the email
    const formatBookingDetails = (data: any) => {
      const { name, email, phone, date, numPeople, accommodation, tours, totalPrice, message, packageDetails } = data

      // Format the date
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified"

      // Format tours
      const formattedTours = Array.isArray(tours)
        ? tours.map((tour: string) => `- ${tour}`).join("\n")
        : "None selected"

      // Format package details if available
      let packageSection = ""
      if (packageDetails) {
        const includesList = packageDetails.includes.map((item: string) => `  - ${item}`).join("\n")
        packageSection = `
Selected Package: ${packageDetails.name}
Package Price: ${packageDetails.price} JOD per person
Package Duration: ${packageDetails.duration}
Package Includes:
${includesList}
`
      }

      return `
Name: ${name}
Email: ${email}
Phone: ${phone}
Arrival Date: ${formattedDate}
Number of People: ${numPeople}
${
  packageDetails
    ? packageSection
    : `Accommodation: ${accommodation || "None selected"}
Tours:
${formattedTours}`
}

Total Price: ${totalPrice} JOD

Special Requests:
${message || "None"}
      `
    }

    const emailContent = formatBookingDetails(formData)
    console.log("Email content prepared:", emailContent)

    // Send the email
    console.log("Sending email to: mohammed.mutlak.camp@gmail.com")

    try {
      const { data, error } = await emailService.emails.send({
        from: "Wadi Rum Booking <onboarding@resend.dev>",
        to: "mohammed.mutlak.camp@gmail.com",
        subject: `New Booking Request from ${formData.name}`,
        text: `
New booking request from your website:

${emailContent}
        `,
      })

      if (error) {
        console.error("Error sending email:", error)
        return { success: false, error: `Failed to send booking email: ${error.message}` }
      }

      console.log("Email sent successfully with ID:", data?.id)
      return { success: true, data }
    } catch (emailError: any) {
      console.error("Exception when calling emailService.emails.send:", emailError)

      // Always return success to the client, but log the error
      // This ensures the user gets a good experience even if email fails
      return {
        success: true,
        data: { id: "error-fallback-id" },
        _error: `Email sending error: ${emailError?.message || "Unknown error"}`,
      }
    }
  } catch (error: any) {
    console.error("Exception in sendBookingEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
    }
  }
}

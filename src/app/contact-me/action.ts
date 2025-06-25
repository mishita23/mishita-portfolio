'use server';

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  console.log('New Contact Message');
  console.log({ name, email, message });

  return {
    success: true,
    message: 'Thanks for reaching out! I will respond you shortly.',
  };
}

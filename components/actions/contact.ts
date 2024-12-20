'use server'

import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://nithinkonakalla2357:nithinkonakalla2357@cluster0.5qxestt.mongodb.net/"
const client = new MongoClient(uri)

export async function submitContactForm(formData: FormData) {
  try {
    await client.connect()
    const database = client.db('your_database_name')
    const collection = database.collection('contacts')
    
    const result = await collection.insertOne({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      createdAt: new Date()
    })

    return { success: true, id: result.insertedId }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: 'An error occurred while submitting the form.' }
  } finally {
    await client.close()
  }
}

